import "./Presentation.css"
import logo from "../../image/logo.svg"
export default function Presentation() {

    function calculAge(dateDeNaissance) {
        const differenceEnMs = Date.now() - dateDeNaissance.getTime();
        const ageEnAns = new Date(differenceEnMs).getFullYear() - 1970;
        return ageEnAns;
    }

    const dateDeNaissance = new Date(2001, 10, 28)

    const age = calculAge(dateDeNaissance)

    return (

        <div className="presentation-container">
            <div className="logo-container">
                <img className="logo" src={logo}alt="Maxime_Tancrede"></img>
            </div>
            <h1 className="name">Maxime<br></br> Tancrède</h1>
            
            
            <div className="txt-container">
                <div className="pragraph-container">
                    <h2 className="PresentationTitle">Présentation et parcours scolaire</h2>
                    <p className="txt">Je m'appelle Maxime Tancrède, j'ai {age} ans, je suis actuellement étudiant en master informatique chez Ynov Montpellier. J'ai obtenu mon bac S spécialisé en mathématiques et ma licence d'informatique à l'université Paul Sabatier.</p>
                </div>
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