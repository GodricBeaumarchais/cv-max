import "./Presentation.css"
import logo from "../../image/logo_default.svg"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import copy from 'copy-to-clipboard';
import CV_icon from "../../image/CV_icon.svg"


export default function Presentation() {

    function calculAge(dateDeNaissance) {
        const differenceEnMs = Date.now() - dateDeNaissance.getTime();
        const ageEnAns = new Date(differenceEnMs).getFullYear() - 1970;
        return ageEnAns;
    }

    const dateDeNaissance = new Date(2001, 10, 28)

    const age = calculAge(dateDeNaissance)


    const handleDiscordClick = () => {
        copy("maximetancrede"); // Remplacez par votre pseudo Discord réel
        alert("Pseudo Discord copié !");
    };

    const handleMailClick = () => {
        copy("maxime.tancrede.pro@gmail.com"); // Remplacez par votre adresse email réelle
        alert("Email copié !");
    };

    return (

        <div className="presentation-container">
            <svg width="1em" height="1em">
                <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                    <stop stopColor="#01ECF3" offset="0%" />
                    <stop stopColor="#DA107B" offset="100%" />
                </linearGradient>
            </svg>

            <div className="top-pres">
                <div className="top-pres-left">
                    <h1 className="name">Maxime<br></br> Tancrède</h1>+
                    <div className="pragraph-container">
                        <h2 className="PresentationTitle">Présentation et parcours scolaire</h2>
                        <p className="txt">Je m'appelle Maxime Tancrède, j'ai {age} ans, je suis actuellement étudiant en master informatique chez Ynov Montpellier. J'ai obtenu mon bac S spécialisé en mathématiques et ma licence d'informatique à l'université Paul Sabatier.</p>
                    </div>
                </div>
                <div className="logo-container">
                    <div className="link-container">
                        <FaDiscord className="icon" style={{ fill: "url(#blue-gradient)" }} onClick={handleDiscordClick}  />
                        <FaLinkedin className="icon" style={{ fill: "url(#blue-gradient)", alignSelf: "flex-start" }} onClick={() => window.open("https://www.linkedin.com/", "_blank")} />
                        <img className="icon" src={CV_icon} style={{ fill: "url(#blue-gradient)", alignSelf: "flex-start" }} alt="CV" onClick={() => window.open("/CV_Maxime_Tancrede.pdf", "_blank")} />
                        <FaGithub className="icon" style={{ fill: "url(#blue-gradient)", alignSelf: "flex-start" }}  onClick={() => window.open("https://github.com/", "_blank")}/>
                        <FaMailBulk className="icon" style={{ fill: "url(#blue-gradient)" }} onClick={handleMailClick} />
                    </div>
                    <img className="logo" src={logo} alt="Maxime_Tancrede" />
                </div>
            </div>

            <div className="txt-container">

                <br></br>
                <div className="pragraph-container">
                    <h2 className="PresentationTitle">Ma relation avec le développement</h2>
                    <p className="txt">J'ai commencé à coder à l'âge de 11 ans et j'ai travaillé sur plusieurs projets personnels et universitaires depuis. Mes deux langages de programmation de prédilection sont le C++ et le Javascript/Typescript, que j'utilise principalement pour développer des applications et divers services web.</p>
                    <br></br>
                </div>
                <div className="pragraph-container">
                    <h2 className="PresentationTitle">Ma mentalité dans mon travail</h2>
                    <p className="txt">Je me considère comme un développeur informatique passionné et enthousiaste, qui se tient au courant des dernières technologies et qui est toujours prêt à apprendre de nouvelles choses. Je suis motivé et j'apprécie le travail d'équipe. Je considère que mon parcours est ma principale force : l'université m'a appris toutes les bases théoriques du fonctionnement informatique tandis que mon master et ma curiosité m'ont entraîné pour la pratique. De par ce parcours, je me considère comme étant dans le haut du panier des développeurs (au même niveau qu'un senior) grâce à ma compréhension et maîtrise du fonctionnement informatique dans toute sa profondeur.</p>
                </div>

            </div>
        </div>
    )
}