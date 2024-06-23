import "./Scantrad.css";
import {RiArrowLeftLine} from "react-icons/ri"
import {Link} from "react-router-dom"

export default function Scantrad(){

    


    const chapterList = require("./Scantrad_src/ChapterList.PNG");
    const reader = require("./Scantrad_src/Reader.PNG");
    return(
        <div className="Presentation-Body">
            <Link to={"../"} className="link-portflio" >
                <span className="txt-contener">
                    <span className="text-contener-two">
                        <RiArrowLeftLine/>
                    </span>
                </span>
            </Link>
            <div className="Presentation-content">
                <h1 className="Portfolio-title">Scantrad Project</h1>
                <h2 className="Portfolio-title-2">Présentation du projet</h2>
                <p className="Portfolio-p">Ce projet avait pour but de recréer un site maintenant indisponible (scantrad) en une application. Pour cela, une API en Python récupérait les dernières sorties du site pour les mettre en ligne sur l'application qui contient deux parties.</p>
                <h2 className="Portfolio-title-2">La liste des chapitres</h2>
                <p className="Portfolio-p">Ce composant est un affichage qui permet d'accéder à tous les chapitres sur une vue défilante et de sélectionner celui que l'on veut lire.</p>
                <img src={chapterList} alt="ChapterList"/>
                <h2 className="Portfolio-title-2">Le lecteur</h2>
                <p className="Portfolio-p">Ce composant est un lecteur de manga qui permet de lire les chapitres en ligne et de les télécharger pour les lire hors ligne. Il comporte une lecture horizontale et verticale pour convenir à tous les formats.</p>
                <img src={reader} alt="ChapterList"/>
            </div>
            
        </div>
    )
}