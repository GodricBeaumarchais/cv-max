import { useState, useEffect } from "react";
import TalentCase from "./TalentCase";
import "./TalentContainer.css";
import { InView } from "react-intersection-observer";

export default function TalentContainer(props) {
    const list = require("../../list/quality.json");

    const [cardReturn, setCardReturn] = useState(Array(list.length).fill(false));
    const [inView, setInView] = useState(false);

    var color;
    if (props.color === "red") {
        color = "rgb(255, 89, 89)";
    } else {
        color = "rgb(89, 255, 117)";
    }

    useEffect(() => {
        if (inView) {
            list.forEach((_, index) => {
                setTimeout(() => {
                    setCardReturn((prev) => {
                        const newCardReturn = [...prev];
                        newCardReturn[index] = true;
                        return newCardReturn;
                    });
                }, index * 250);
            });
        }
    }, [inView, list]);

    return (
        <div className="talent-container" style={{ borderColor: color }}>

            <div className="talent-container-header">
                <h1 className="talent-container-title">Qualités</h1>
            </div>
            <InView onChange={setInView} className="talentViewContainer">

                <div className="talent-container-body" style={{ borderColor: color }}>
                    {list.map((item, index) => (
                        <TalentCase
                            state={cardReturn[index]}
                            key={index}
                            title={item.title}
                            text={item.text}
                            color={props.color}
                        />
                    ))}
                </div>
            </InView>
        </div>

    );
}
