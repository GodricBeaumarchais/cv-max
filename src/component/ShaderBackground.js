import { useEffect, useRef } from "react";
import "./css/ShaderBackground.css";

// Fond en shader WebGL pour le hero : prolonge le "Ring of Light" (dégradé magenta/cyan du
// DESIGN.md) en un champ de lumière vivant plutôt qu'un dégradé CSS figé, avec une légère
// réaction au curseur. Se dégrade proprement : si WebGL est indisponible ou que l'utilisateur
// préfère moins de mouvement, le canvas ne se monte jamais et les blooms CSS déjà en place
// (Presentation.css, ::before sur .pragraph-container) restent seules visibles.
const VERTEX_SRC = `
attribute vec2 aPosition;
void main() {
    gl_Position = vec4(aPosition, 0.0, 1.0);
}
`;

const FRAGMENT_SRC = `
precision mediump float;
uniform vec2 uResolution;
uniform float uTime;
uniform vec2 uMouse;

// Magenta / cyan de la charte (DA107B / 01ECF3), jamais d'autre teinte
const vec3 cMagenta = vec3(0.851, 0.063, 0.482);
const vec3 cCyan = vec3(0.004, 0.925, 0.953);
const vec3 cVoid = vec3(0.0, 0.0784, 0.0706);

float wave(vec2 p, float t) {
    return sin(p.x * 2.2 + t) * cos(p.y * 1.8 - t * 0.8)
         + sin((p.x + p.y) * 1.4 + t * 0.6) * 0.6;
}

void main() {
    vec2 uv = gl_FragCoord.xy / uResolution.xy;
    vec2 p = (uv - 0.5) * vec2(uResolution.x / uResolution.y, 1.0);

    vec2 mouseOffset = (uMouse - 0.5) * 0.25;
    p += mouseOffset * (0.4 - length(p) * 0.2);

    float t = uTime * 0.18;
    float n = wave(p * 1.3, t);
    float mixAmt = smoothstep(-1.4, 1.4, n);

    vec3 color = mix(cMagenta, cCyan, mixAmt);

    // edge0 < edge1 (ordre croissant) puis inversé : smoothstep(edge0 > edge1, ...) est un
    // comportement NON DÉFINI par la spec GLSL ES — Chrome/ANGLE le tolère, Firefox non
    // (bloc plat sans fondu constaté), d'où l'écriture correcte et portable ci-dessous.
    float vignette = 1.0 - smoothstep(0.1, 1.5, length(p));
    float glow = pow(vignette, 1.3) * 0.85;

    vec3 outColor = mix(cVoid, color, glow);
    gl_FragColor = vec4(outColor, glow);
}
`;

function compileShader(gl, type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader);
        return null;
    }
    return shader;
}

export default function ShaderBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        const gl = canvas.getContext("webgl", { alpha: true, premultipliedAlpha: false })
            || canvas.getContext("experimental-webgl", { alpha: true, premultipliedAlpha: false });
        if (!gl) return; // pas de fallback JS : les blooms CSS existants suffisent

        const vertexShader = compileShader(gl, gl.VERTEX_SHADER, VERTEX_SRC);
        const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SRC);
        if (!vertexShader || !fragmentShader) return;

        const program = gl.createProgram();
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);
        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
        gl.useProgram(program);

        const positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
        const aPosition = gl.getAttribLocation(program, "aPosition");
        gl.enableVertexAttribArray(aPosition);
        gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);

        const uResolution = gl.getUniformLocation(program, "uResolution");
        const uTime = gl.getUniformLocation(program, "uTime");
        const uMouse = gl.getUniformLocation(program, "uMouse");

        gl.enable(gl.BLEND);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

        let width = 0, height = 0;
        const mouse = { x: 0.5, y: 0.5 };
        let rafId = null;
        let running = true;
        let visible = true;
        const start = performance.now();

        const resize = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
            const rect = canvas.parentElement.getBoundingClientRect();
            width = Math.max(1, Math.round(rect.width * dpr));
            height = Math.max(1, Math.round(rect.height * dpr));
            canvas.width = width;
            canvas.height = height;
            gl.viewport(0, 0, width, height);
        };

        const onMouseMove = (e) => {
            const rect = canvas.parentElement.getBoundingClientRect();
            mouse.x = (e.clientX - rect.left) / rect.width;
            mouse.y = 1 - (e.clientY - rect.top) / rect.height;
        };

        const render = (now) => {
            if (!running) return;
            gl.uniform2f(uResolution, width, height);
            gl.uniform1f(uTime, (now - start) / 1000);
            gl.uniform2f(uMouse, mouse.x, mouse.y);
            gl.drawArrays(gl.TRIANGLES, 0, 3);
            rafId = requestAnimationFrame(render);
        };

        const stop = () => {
            running = false;
            if (rafId) cancelAnimationFrame(rafId);
        };
        const maybeStart = () => {
            if (running || !visible || document.hidden) return;
            running = true;
            rafId = requestAnimationFrame(render);
        };

        const io = new IntersectionObserver(([entry]) => {
            visible = entry.isIntersecting;
            if (visible) maybeStart(); else stop();
        }, { threshold: 0 });
        io.observe(canvas);

        const onVisibilityChange = () => {
            if (document.hidden) stop(); else maybeStart();
        };

        resize();
        // ResizeObserver plutôt que le seul évènement "resize" de la fenêtre : un reflow de
        // contenu (chargement d'une police web, changement de texte) ne déclenche jamais
        // "resize" mais change quand même la taille réelle de .presentation-container, ce qui
        // désynchronisait la résolution du shader de sa boîte affichée.
        const ro = new ResizeObserver(resize);
        ro.observe(canvas.parentElement);
        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", onMouseMove, { passive: true });
        document.addEventListener("visibilitychange", onVisibilityChange);
        rafId = requestAnimationFrame(render);

        canvas.dataset.ready = "true";

        return () => {
            stop();
            io.disconnect();
            ro.disconnect();
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("visibilitychange", onVisibilityChange);
        };
    }, []);

    return <canvas ref={canvasRef} className="shader-background" aria-hidden="true" />;
}
