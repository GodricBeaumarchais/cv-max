import "./css/Home.css";
// import TabBar from "./header/TabBar";
// import IconHeader from "./header/IconHeader";
import { useRef, useEffect } from "react";
import ProjectPart from "./project/ProjectPart";
import CompetencePart from "./Competences/CompetencePart";
import Presentation from "./Presentation/Presentation";
import EmailPart from "./Contact/EmailPart";
import TalentContainer from "./Talent/TalentContainer";
import FloatingIcons from "./FloatingIcons";
import Reveal from "./Reveal";
import ParticleField from "./ParticleField";

// function useScrollDirection() {
//     const [scrollDirection, setScrollDirection] = useState(null);

//     useEffect(() => {
//         let lastScrollY = window.pageYOffset;

//         const updateScrollDirection = () => {
//             const scrollY = window.pageYOffset;
//             const direction = scrollY > lastScrollY ? "down" : "up";
//             if (
//                 direction !== scrollDirection &&
//                 (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
//             ) {
//                 setScrollDirection(direction);
//             }
//             lastScrollY = scrollY > 0 ? scrollY : 0;
//         };
//         window.addEventListener("scroll", updateScrollDirection); // add event listener
//         return () => {
//             window.removeEventListener("scroll", updateScrollDirection); // clean up
//         };
//     }, [scrollDirection]);

//     return scrollDirection;
// }

export default function Home() {
    // const [headerState, setheaderState] = useState(2);
    // // 0 = icon-appear/reste
    // // 1 = icon-disappear
    // // 2 = tab-appear/reste
    // // 3 = tab-disappear

    // const classNameGen = (nameClass) => {
    //     if (headerState % 2 === 1) {
    //         return nameClass + "-desappear";
    //     } else {
    //         return nameClass + "-appear";
    //     }
    // };

    // var scrollDirection = useScrollDirection();

    // const switchMode = () => {
    //     if (headerState === 0) {
    //         setheaderState(1);
    //         setTimeout(() => {
    //             setheaderState(2);
    //         }, 500);
    //     } else if (headerState === 2) {
    //         setheaderState(3);
    //         setTimeout(() => {
    //             setheaderState(0);
    //         }, 480);
    //         scrollDirection = "up";
    //     }
    // };

    const refPresentation = useRef(null);
    const refProject = useRef(null);
    const refCompetence = useRef(null);
    const refContact = useRef(null);

    // Pose --scroll-y sur <html> pour le fond en dégradé parallax (voir .scroll-gradient-bg)
    useEffect(() => {
        let ticking = false;
        const onScroll = () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
                document.documentElement.style.setProperty("--scroll-y", window.scrollY);
                ticking = false;
            });
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // const goToScroll = (ref) => {
    //     switch (ref) {
    //         case "section-1":
    //             refPresentation.current.scrollIntoView({ behavior: "smooth" });
    //             break;
    //         case "section-2":
    //             refProject.current.scrollIntoView({ behavior: "smooth" });
    //             break;
    //         case "section-3":
    //             refCompetence.current.scrollIntoView({ behavior: "smooth" });
    //             break;
    //         case "section-4":
    //             refContact.current.scrollIntoView({ behavior: "smooth" });
    //             break;
    //         default:
    //             break;
    //     }
    // };

    // const headerClassNames = () => {
    //     if (scrollDirection === "down") {
    //         if (headerState >= 2) {
    //             return "header-contener-icon-Down";
    //         } else {
    //             return "header-contener-tab-Down";
    //         }
    //     } else if (scrollDirection === "up") {
    //         if (headerState >= 2) {
    //             return "header-contener-icon-Up";
    //         } else {
    //             return "header-contener-tab-Up";
    //         }
    //     }
    // };

    // const bodyHeaderClassNames = () => {
    //     if (scrollDirection === "down") {
    //         return "Body-header-Down";
    //     } else {
    //         return "Body-header-Up";
    //     }
    // };

    // const list = require("../list/header.json");
    return (
        <div className="all-page">
            <div className="scroll-gradient-bg" aria-hidden="true" />
            {/* <div className={bodyHeaderClassNames()}>
                <div className={headerClassNames()}>
                    <div className="header-box">
                        {headerState >= 2 ? (
                            <IconHeader
                                onClick={switchMode}
                                className={classNameGen("header-icon")}
                            />
                        ) : (
                            <TabBar
                                list={list}
                                goToScroll={goToScroll}
                                backFonction={switchMode}
                                className={classNameGen("tab-bar")}
                            />
                        )}
                    </div>
                </div>
            </div> */}
            <div className="Body-body">
                <ParticleField />
                <FloatingIcons />
                {/* URL dans .env.development / .env.production ; bouton masqué tant qu'elle n'est pas définie */}
                {process.env.NEXT_PUBLIC_SERVICES_URL && (
                    <a className="services-link" href={process.env.NEXT_PUBLIC_SERVICES_URL}>BrightLab Services →</a>
                )}
                <div type="checkbox" ref={refPresentation} />
                <Presentation />
                <div className="section-divider" aria-hidden="true" />
                <div type="checkbox" ref={refCompetence} />
                <Reveal><CompetencePart /></Reveal>
                <div className="section-divider" aria-hidden="true" />
                <div type="checkbox" ref={refProject} />
                <Reveal><ProjectPart /></Reveal>
                <div className="section-divider" aria-hidden="true" />
                <Reveal><TalentContainer color={"green"} /></Reveal>
                <div className="section-divider" aria-hidden="true" />
                <div type="checkbox" ref={refContact} />
                <Reveal><EmailPart /></Reveal>

            </div>
        </div>
    );
}
