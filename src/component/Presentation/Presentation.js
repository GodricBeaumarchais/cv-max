import "./Presentation.css"
const logo = "/image/logo_default.svg"
import { FaGithub } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import copy from 'copy-to-clipboard';
import { useState, useRef } from "react";
import ShaderBackground from "../ShaderBackground";
const CV_icon = "/image/CV_icon.svg"


export default function Presentation() {

    function calculAge(dateDeNaissance) {
        const differenceEnMs = Date.now() - dateDeNaissance.getTime();
        const ageEnAns = new Date(differenceEnMs).getFullYear() - 1970;
        return ageEnAns;
    }

    const dateDeNaissance = new Date(2001, 10, 28)

    const age = calculAge(dateDeNaissance)

    // Toast in-page à la place d'alert() : un alert() natif bloque le fil et casse
    // le langage d'interaction du reste du site (anneau en dégradé, jamais de popup système)
    const [toast, setToast] = useState(null);
    const toastTimeout = useRef(null);

    const showToast = (message) => {
        clearTimeout(toastTimeout.current);
        setToast(message);
        toastTimeout.current = setTimeout(() => setToast(null), 1800);
    };

    const handleDiscordClick = () => {
        copy("maximetancrede"); // Remplacez par votre pseudo Discord réel
        showToast("Pseudo Discord copié !");
    };

    const handleMailClick = () => {
        copy("maxime.tancrede.pro@gmail.com"); // Remplacez par votre adresse email réelle
        showToast("Email copié !");
    };

    return (

        <div className="presentation-container">
            <ShaderBackground />
            <svg width="1em" height="1em">
                <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                    <stop stopColor="#01ECF3" offset="0%" />
                    <stop stopColor="#DA107B" offset="100%" />
                </linearGradient>
            </svg>

            <div className="top-pres">
                <div className="top-pres-left">
                    <h1 className="name">Maxime<br></br> Tancrède</h1>
                    <div className="pragraph-container">
                        <h2 className="PresentationTitle">Présentation et parcours scolaire</h2>
                        <p className="txt">Je m'appelle Maxime Tancrède, j'ai {age} ans, je suis actuellement ingénieur en développement web et logiciel ainsi qu'en gestion système chez Racine ENR en CDI. J'ai obtenu mon master informatique à Ynov Montpellier en 2025, après mon bac S spécialisé en mathématiques et ma licence d'informatique à l'université Paul Sabatier.</p>
                    </div>
                </div>
                <div className="logo-container">
                    <div className="link-container">
                        <FaDiscord className="icon" style={{ fill: "url(#blue-gradient)" }} onClick={handleDiscordClick} role="button" aria-label="Copier le pseudo Discord" />
                        <img className="icon" src={CV_icon} style={{ fill: "url(#blue-gradient)", alignSelf: "flex-start" }} alt="Télécharger le CV" onClick={() => window.open("/CV_Maxime_Tancrede.pdf", "_blank")} />
                        <FaGithub className="icon" style={{ fill: "url(#blue-gradient)", alignSelf: "flex-start" }}  onClick={() => window.open("https://github.com/GodricBeaumarchais", "_blank")} role="button" aria-label="Voir le profil GitHub"/>
                        <FaMailBulk className="icon" style={{ fill: "url(#blue-gradient)" }} onClick={handleMailClick} role="button" aria-label="Copier l'adresse email" />
                    </div>
                    <img className="logo" src={logo} alt="Maxime_Tancrede" />
                    {toast && <div className="copy-toast" role="status">{toast}</div>}
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