import "./css/TabBar.css"
import {RiArrowRightLine} from "react-icons/ri"

export default function TabBar({ list, backFonction, className, goToScroll }) {


    const openCV = () => {
        window.open("http://cv.maximetechlab.fr/CV_Maxime_Tancrede.pdf", "_blank");}

    const TabButton = ({ item, onClick, id}) => {
        const section = "section-" + id
        return (

            <button className="tab-button" onClick={() => onClick(section)} >

                    <span className="txt-contener">
                        <span className="text-contener-two">
                            {item}
                        </span>

                    </span> 

            </button>
        )
    }

    const BackButton = ({ item, onClick }) => {
        return (
            <button className="tab-button" onClick={() => onClick()} >
                <span className="txt-contener">
                    <span className="text-contener-two">
                        {item}
                    </span>
                </span>
            </button>
        )
    }


    return (
        <div className={className}>
            {list.map((item) =>
                <TabButton item={item.text} id={item.id} onClick={goToScroll} />)}
            <BackButton item={"CV"} onClick={openCV } />
            <BackButton item={<RiArrowRightLine/>} onClick={backFonction} className="backArrow" />
            
        </div>
    )
}
