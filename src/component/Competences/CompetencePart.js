import PartContener from "../PartContener"
import CompetenceList from "./CompetenceList"
import logo_side from "../../image/logo_default.svg"
import logo_opensource from "../../image/logo_opensource.svg"
import "./css/CompetencePart.css"


export default function CompetencePart() {
    return (

        <PartContener title={"Competences"} color={"green"}>
            <CompetenceList />
            <div className="img-deco-container">
                <div className="img-deco-div-logo">
                    <img src={logo_side} alt="logo_side" className="logo_side" />
                </div>
                <div className="img-deco-div-open">
                    <img src={logo_opensource} alt="logo_opensource" className="logo_opensource" />
                </div>
            </div>

        </PartContener >


    )
}