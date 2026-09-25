import { useRef, useEffect, useState } from "react";
import "./css/Reveal.css";

// Choreographie de scroll : chaque section entre en scène avec une montée + un flou qui se
// dissipe, une fois, au lieu d'apparaître d'un coup. IntersectionObserver plutôt que
// animation-timeline:scroll() pour un support universel (Firefox n'a le second que
// derrière un flag) ; prefers-reduced-motion coupe l'animation et affiche directement l'état final.
export default function Reveal({ children, className = "" }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setVisible(true);
            return;
        }
        const node = ref.current;
        if (!node) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
        );
        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}>
            {children}
        </div>
    );
}
