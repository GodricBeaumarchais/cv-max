import "./css/PartContener.css"



export default function PartContener({ children, title }) {

    return (
        <div className="part-contener">
            <h1 className="part-title" >
                {title}
            </h1>
            <div>
                {children}
            </div>
        </div>
    )
}