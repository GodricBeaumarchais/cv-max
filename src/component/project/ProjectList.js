import ProjectCase from "./ProjectCase"
import "./css/ProjectList.css"
import leftArrow from "../../image/left_arrow.svg"
import rightArrow from "../../image/right_arrow.svg"
import { useState } from "react"
export default function ProjectList() {

    const [batch, setBatch] = useState(0)



    const list = require("../../list/project.json")

    const batcher = (list) => {
        let batchedList = []
        let batch = []
        let i = 0
        let j = 0
        list.forEach((item) => {
            console.log(item)
            if (i < 3) {

                batch.push(item)
                i++
            }
            else {
                batchedList.push({ batch: batch, id: j })
                batch = []
                i = 0
                j++
            }
        })
        batchedList.push({ batch: batch, id: j })
        return batchedList
    }

    const batchedList = batcher(list)

    console.log(batchedList)

    const nextBatch = () => {
        if (batch < batchedList.length - 1) {
            setBatch(batch + 1)
        }
        console.log(getOffset())
    }

    const prevBatch = () => {
        if (batch > 0) {
            setBatch(batch - 1)
        }
        console.log(getOffset())
    }

    const getOffset = () => {
        return batch * 100
    }

    const leftArrowState = () => {
        if (batch === 0) {
            return "arrow-off"
        }
        else {
            return "arrow-on"
        }
    }

    const rightArrowState = () => {
        if (batch === batchedList.length - 1) {
            return "arrow-off"
        }
        else {
            return "arrow-on"
        }
    }


    console.log(getOffset())
    return (
        <div className="project-part-contener-list" >
            <div className="project-part-contener-slider">
                <img src={leftArrow} alt="left arrow" className={leftArrowState()} onClick={prevBatch} />
                <div className="p-list-contener">
                    <div className="p-list" style={{ transform: `translateX(-${getOffset()}%)` }}>
                        {list.map((item) =>

                            <ProjectCase title={item.title} def={item.description} Presentation={item.presentation} Git={item.git} Site={item.site} />)}
                    </div>
                </div>
                <img src={rightArrow} alt="right arrow" className={rightArrowState()} onClick={nextBatch} />
            </div>
            <div className="advence-bar" >

            </div>
        </div>
    )
}