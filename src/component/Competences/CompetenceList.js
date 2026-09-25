import CompetenceCase from "./CompetenceCase"
import "./css/CompetenceList.css"
import { useState } from "react"
import CompetenceInfo from "./CompetenceInfo"
export default function CompetenceList(){
    
    const listObj = require("../../list/competences2.json")

    const systeme_et_langage = listObj.systeme_et_langage

    const devops = listObj.devops

    const backend   = listObj.backend

    const frontend = listObj.frontend

    const list = systeme_et_langage.concat(devops, backend, frontend)

    const [itemSelect, setItemSelect] = useState(0)


    const color = (id) =>{
        if(id === itemSelect){
            return "red"
        }
        else{
            return "green"
        }
    }

    
    const onClick = (id) =>{
        console.log(id)
        setItemSelect(id)
        }

    return(
            <div className="competence-contener" >
                <CompetenceInfo item={list[itemSelect]}  />
                <h2 className="competence-category-title">Langages &amp; systèmes</h2>
                <div className="anim-competence-contener">
                    {
                        systeme_et_langage.map((item) =>
                            <CompetenceCase key={item.id} name={item.title} id={item.id} onClick={onClick} color={color(item.id)} />
                        )
                    }
                </div>
                <h2 className="competence-category-title">DevOps</h2>
                <div className="anim-competence-contener">
                    {
                        devops.map((item) =>
                            <CompetenceCase key={item.id} name={item.title} id={item.id} onClick={onClick} color={color(item.id)} />
                        )
                    }
                </div>
                <h2 className="competence-category-title">Backend</h2>
                <div className="anim-competence-contener">
                    {
                        backend.map((item) =>
                            <CompetenceCase key={item.id} name={item.title} id={item.id} onClick={onClick} color={color(item.id)} />
                        )
                    }
                </div>
                <h2 className="competence-category-title">Frontend</h2>
                <div className="anim-competence-contener">
                    {
                        frontend.map((item) =>
                            <CompetenceCase key={item.id} name={item.title} id={item.id} onClick={onClick} color={color(item.id)} />
                        )
                    }
                </div>
            </div>

    )
}

