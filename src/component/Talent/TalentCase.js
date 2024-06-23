import "./nexTalentCase.css"
import logo from "../../image/logo_card.svg"

export default function TalentCase(props) {

    const frontClassName = () => {
        if(props.state){
            return "flip-card-inner-on "
        }
        return "flip-card-inner-off"
    }


    

    return (
        <div class="flip-card">
            <div class={frontClassName()}>
                <div class="flip-card-front">
                    <img src={logo} alt="Avatar" className="logo-card"  /> 
                </div>
                <div class="flip-card-back">
                    <div className="talent-case-header">
                        <h1 className="talent-case-title">{props.title}</h1>
                    </div>
                    <div className="talent-case-body">
                        <p className="talent-case-text">{props.text}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

