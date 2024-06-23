import CompetenceIcon from "./CompetencesIcon"
import "./css/CompetenceInfo.css"
import { IconContext } from 'react-icons/lib';

export default function CompetenceInfo({ item }) {
    if (item === undefined) {
        return (
            null
        )
    }


    return (
        <div className="competence-info-contener">
            <h1 className="comp-info-title">{item.title}</h1>
            <div className="competence-info">

                <div className="competence-text-contener">
                    <div className="competence-icon-contener">
                        <IconContext.Provider value={{ className: "icon-competences-info" }}>
                            <CompetenceIcon name={item.title}  />
                        </IconContext.Provider>
                    </div>
                    <p className="text-competence-info">{item.description}</p>
                </div>
            </div>

        </div>

    )
}