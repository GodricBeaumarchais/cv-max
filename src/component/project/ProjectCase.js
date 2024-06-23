import "./css/ProjectCase.css"
import { Link } from "react-router-dom"
import { InView } from "react-intersection-observer"
import { useState } from "react"

export default function ProjectCase({ title, def, Presentation, Git, Site }) {
    var presentation_b = false, git_b = false, site_b = false;

    if (typeof Presentation !== "undefined") {
        presentation_b = true;
    }
    if (typeof Git !== "undefined") {
        git_b = true
    }
    if (typeof Site !== "undefined") {
        site_b = true
    }

    const [inView, setInView] = useState(true)

    const animationClassNames = () => {
        if (inView) {
            return "anim-contener-on"
        }
        else {
            return "anim-contener-off"
        }
    }


    return (
        <InView onChange={setInView} className="test"  >
            <div className={animationClassNames()}>
                <div className="project-case">
                    <span className="title">
                        {title}
                    </span>
                    <span className="description">
                        {def}
                    </span>
                    <div className="link-contener">
                        {presentation_b ?
                            <Link to={Presentation} className="link" >Presentation</Link> :
                            null}
                        {git_b ?
                            <a href={Git} className="link" rel="noreferrer" target="_blank">View Git</a> :
                            null}
                        {site_b ?
                            <a href={Site} className="link" rel="noreferrer" target="_blank">View Site</a> :
                            null}
                    </div>
                </div>
            </div>
        </InView>

    )
}