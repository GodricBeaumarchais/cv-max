import { FaPython, FaDocker, FaJava, FaReact, FaNodeJs, FaGit } from "react-icons/fa"
import { SiTypescript, SiMongodb, SiKubernetes, SiGraphql } from "react-icons/si"
import { IoLogoJavascript } from "react-icons/io"
import { TbBrandCpp } from "react-icons/tb"
import "./css/FloatingIcons.css"

// Positions/rotations/délais/profondeurs fixes (pas Math.random) pour éviter un mismatch
// d'hydratation entre le rendu serveur et client — l'aléatoire visuel vient du choix des
// valeurs, pas du calcul. "depth" pilote un parallax au scroll (voir --scroll-y, posé par
// Home.js) : plus la valeur est haute, plus l'icône dérive vite, donnant une vraie
// profondeur de champ au lieu d'un décor plat qui scrolle en bloc avec la page.
// Pas de conteneur wrapper : un div position:absolute + height:100% autour de ces icônes
// empêchait Chromium de peindre leur contenu (bug de rendu constaté) ; chaque icône est
// donc un enfant direct de .Body-body, positionnée individuellement.
const icons = [
    { Icon: FaPython, top: "6%", left: "4%", rotate: -12, size: 40, delay: 0, depth: 0.06 },
    { Icon: FaDocker, top: "16%", left: "89%", rotate: 18, size: 34, delay: 1.4, depth: 0.14 },
    { Icon: FaReact, top: "29%", left: "10%", rotate: 8, size: 46, delay: 2.6, depth: 0.22 },
    { Icon: SiTypescript, top: "41%", left: "93%", rotate: -20, size: 32, delay: 0.8, depth: 0.09 },
    { Icon: FaJava, top: "54%", left: "3%", rotate: 15, size: 38, delay: 3.2, depth: 0.18 },
    { Icon: TbBrandCpp, top: "66%", left: "91%", rotate: -8, size: 42, delay: 1.8, depth: 0.05 },
    { Icon: SiMongodb, top: "78%", left: "6%", rotate: 22, size: 36, delay: 2.2, depth: 0.16 },
    { Icon: FaNodeJs, top: "90%", left: "87%", rotate: -15, size: 34, delay: 0.4, depth: 0.11 },
    { Icon: SiGraphql, top: "21%", left: "48%", rotate: 10, size: 28, delay: 1.9, depth: 0.2 },
    { Icon: FaGit, top: "60%", left: "52%", rotate: -18, size: 30, delay: 2.9, depth: 0.07 },
    { Icon: SiKubernetes, top: "37%", left: "72%", rotate: 25, size: 32, delay: 3.5, depth: 0.13 },
    { Icon: IoLogoJavascript, top: "11%", left: "63%", rotate: -10, size: 34, delay: 0.6, depth: 0.24 },
]

export default function FloatingIcons() {
    return (
        <>
            {icons.map(({ Icon, top, left, rotate, size, delay, depth }, i) => (
                <Icon
                    key={i}
                    className="floating-icon"
                    aria-hidden="true"
                    style={{
                        top,
                        left,
                        fontSize: size,
                        animationDelay: `${delay}s`,
                        "--rotate": `${rotate}deg`,
                        "--depth": depth,
                    }}
                />
            ))}
        </>
    )
}
