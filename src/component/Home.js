import "./css/Home.css";
// import TabBar from "./header/TabBar";
// import IconHeader from "./header/IconHeader";
import { useRef } from "react";
import ProjectPart from "./project/ProjectPart";
import CompetencePart from "./Competences/CompetencePart";
import Presentation from "./Presentation/Presentation";
import EmailPart from "./Contact/EmailPart";
import TalentContainer from "./Talent/TalentContainer";

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

    const downloadButton = () => {
        window.open("http://cv.maximetechlab.fr/CV_Maxime_Tancrede.pdf", "_blank");
    };

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
            <body className="Body-body">
                <div type="checkbox" ref={refPresentation} />
                <Presentation />
                <div type="checkbox" ref={refCompetence} />
                <CompetencePart />
                <div type="checkbox" ref={refProject} />
                <ProjectPart />
                <TalentContainer color={"green"} />
                <div type="checkbox" ref={refContact} />
                <EmailPart />
                
            </body>
        </div>
    );
}
