import { useEffect, useRef } from "react";
import "./css/ParticleField.css";

const PARTICLE_COUNT = 55;
const LINK_DISTANCE = 160;
const CURSOR_DISTANCE = 220;
// Magenta / cyan de la charte, jamais une autre teinte (voir DESIGN.md, The Two-Hue Law)
const COLORS = ["218, 16, 123", "1, 236, 243"];

// Constellation de fond : dérive lentement, se relie au curseur et entre nœuds proches.
// position:fixed + viewport-sized => coût borné quelle que soit la longueur de la page.
export default function ParticleField() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduceMotion) return; // décor pur : on ne le monte pas plutôt que le figer

        const ctx = canvas.getContext("2d");
        let width = 0, height = 0, dpr = 1;
        let particles = [];
        let mouse = { x: -9999, y: -9999 };
        let rafId = null;
        let running = true;

        const resize = () => {
            dpr = Math.min(window.devicePixelRatio || 1, 1.5);
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = width + "px";
            canvas.style.height = height + "px";
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };

        const initParticles = () => {
            particles = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.18,
                vy: (Math.random() - 0.5) * 0.18,
                r: 1.8 + Math.random() * 1.8,
                color: COLORS[i % 2],
            }));
        };

        resize();
        initParticles();

        const onMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };
        const onMouseLeave = () => {
            mouse.x = -9999;
            mouse.y = -9999;
        };
        const onResize = () => {
            resize();
        };

        const draw = () => {
            if (!running) return;
            ctx.clearRect(0, 0, width, height);

            for (const p of particles) {
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0 || p.x > width) p.vx *= -1;
                if (p.y < 0 || p.y > height) p.vy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${p.color}, 0.65)`;
                ctx.fill();
            }

            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const a = particles[i], b = particles[j];
                    const dx = a.x - b.x, dy = a.y - b.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < LINK_DISTANCE) {
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.strokeStyle = `rgba(${a.color}, ${0.22 * (1 - dist / LINK_DISTANCE)})`;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                }

                const dxCursor = particles[i].x - mouse.x;
                const dyCursor = particles[i].y - mouse.y;
                const dist = Math.sqrt(dxCursor * dxCursor + dyCursor * dyCursor);
                if (dist < CURSOR_DISTANCE) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.strokeStyle = `rgba(${particles[i].color}, ${0.55 * (1 - dist / CURSOR_DISTANCE)})`;
                    ctx.lineWidth = 1.4;
                    ctx.stroke();
                }
            }

            rafId = requestAnimationFrame(draw);
        };

        const stop = () => {
            running = false;
            if (rafId) cancelAnimationFrame(rafId);
        };
        const start = () => {
            if (running) return;
            running = true;
            draw();
        };

        const onVisibilityChange = () => {
            if (document.hidden) stop(); else start();
        };

        window.addEventListener("mousemove", onMouseMove, { passive: true });
        window.addEventListener("mouseleave", onMouseLeave);
        window.addEventListener("resize", onResize);
        document.addEventListener("visibilitychange", onVisibilityChange);

        draw();

        return () => {
            stop();
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseleave", onMouseLeave);
            window.removeEventListener("resize", onResize);
            document.removeEventListener("visibilitychange", onVisibilityChange);
        };
    }, []);

    return <canvas ref={canvasRef} className="particle-field" aria-hidden="true" />;
}
