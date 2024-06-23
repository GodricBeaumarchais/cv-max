import CompetenceCase from "./CompetenceCase"
import "./css/CompetenceList.css"
import { useState } from "react"
import CompetenceInfo from "./CompetenceInfo"
import {AnimClassName } from "../../utils"
import { InView } from 'react-intersection-observer';
 
export default function CompetenceList(){
    
    const listObj = require("../../list/competences2.json")

    const systeme_et_langage = listObj.systeme_et_langage

    const devops = listObj.devops

    const backend   = listObj.backend

    const frontend = listObj.frontend

    const list = systeme_et_langage.concat(devops, backend, frontend)

    const [itemSelect, setItemSelect] = useState(0)
    const [inView, setInView] = useState(false);


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
        <InView onChange={setInView}>
            <div className="competence-contener" >
                <CompetenceInfo item={list[itemSelect]}  />
                <div className={AnimClassName("anim-competence-contener", inView)}>
                    {
                        systeme_et_langage.map((item) =>
                            <CompetenceCase name={item.title} id={item.id} onClick={onClick} color={color(item.id)} />
                        )
                    }
                </div>
                <div className={AnimClassName("anim-competence-contener", inView)}>
                    {
                        devops.map((item) =>
                            <CompetenceCase name={item.title} id={item.id} onClick={onClick} color={color(item.id)} />
                        )
                    }
                </div>
                <div className={AnimClassName("anim-competence-contener", inView)}>
                    {
                        backend.map((item) =>
                            <CompetenceCase name={item.title} id={item.id} onClick={onClick} color={color(item.id)} />
                        )
                    }
                </div>
                <div className={AnimClassName("anim-competence-contener", inView)}>
                    {
                        frontend.map((item) =>
                            <CompetenceCase name={item.title} id={item.id} onClick={onClick} color={color(item.id)} />
                        )
                    }
                </div>
            </div>
        </InView>
        
    )
}

