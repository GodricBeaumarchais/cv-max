import ProjectList from "./ProjectList"
import PartContener from "../PartContener"
import "./css/ProjectPart.css"


export default function ProjectPart(){

    return(
        <div className="project-part-contener">
            <div>
                <PartContener title={"Project"} color={"blueviolet"} >
                    <ProjectList/>
                </PartContener>
            </div>
            
        </div>
    )
}