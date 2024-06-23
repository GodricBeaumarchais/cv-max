import EmailForm from "./EmailForm"
import PartContener from "../PartContener"


export default function EmailPart() {

    return (

        <div className="project-part-contener">
            <div>
                <h1 className="title-part">N'hésitez pas à me contacter pour divers projets</h1>
                <PartContener title={"Contact"}>
                    <EmailForm />
                </PartContener>
            </div>

        </div>
    )
}