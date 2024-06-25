import EmailForm from "./EmailForm"
import PartContener from "../PartContener"


export default function EmailPart() {

    return (


        <PartContener title={"Contact"}>
            <h1 className="title-part">N'hésitez pas à me contacter pour divers projets</h1>
            <EmailForm />
        </PartContener>
    )
}