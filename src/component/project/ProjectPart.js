import ProjectList from "./ProjectList"
import PartContener from "../PartContener"
import "./css/ProjectPart.css"


export default function ProjectPart(){

    return(
                <PartContener title={"Project"} color={"blueviolet"} >
                    <ProjectList/>
                </PartContener>
    )
}