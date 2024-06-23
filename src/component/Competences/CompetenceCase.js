import { IconContext } from 'react-icons/lib';
import "./css/CompetenceCase.css"
import CompetenceIcon from "./CompetencesIcon";

//list list of 4 competences
export default function CompetenceCase({ name, id, onClick, color }) {



    const icon = () => {
        return (
            <IconContext.Provider value={{ className: "icon" }}>
                <CompetenceIcon name={name} />
            </IconContext.Provider>)
    }

    const iconContener = () => {

        if (color === "red") {
            return (

                <div className="icon-contener-select">

                    {icon()}
                </div>

            )
        }


        else {
            return (
                <div className="icon-contener">
                    {icon()}
                </div>
            )
        }


    }

    return (
        <button className='button-cc' onClick={() => onClick(id)} >
            {iconContener()}
        </button>
    )
} 