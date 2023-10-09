import React, {useContext, useEffect, useState} from 'react';
import Info from "./Info";
import './InfoContainer.css';
import loc from "../res/loc.png";
import cal from "../res/cal.png"
import cloc from "../res/cloc.png"
import suit from "../res/suit.png"
import ElementOfTimeline from "./ElementOfTimeline";
import heart from "../res/heart.png"
import bible from "../res/bible.png"
import questionMark from "../res/questionMark.png"
import {Offset} from "../App";
import mobile from "../res/main.jpg";

function InfoContainer(props) {

    const {offset, setOffset} = useContext(Offset)
    const [classNameVerse, setClassNameVerse] = useState("verseContainer animation transformedVerse");
    const [doneVerse, setDoneVerse] = useState(false)

    if (offset > 400 && offset < 650 && !doneVerse) {
        setDoneVerse(true)
        setClassNameVerse("verseContainer animation transformedVerse")

    }
    if ((offset > 650 || offset < 400) && doneVerse) {
        setDoneVerse(false)
        setClassNameVerse("verseContainer animation")
    }

    const [welcome, setWelcome] = useState("welcomeContainer animation transformedWelcome");
    const [doneWelcome, setDoneWelcome] = useState(false)

    if (offset > 650 && offset < 850 && !doneWelcome) {
        setDoneWelcome(true)
        setWelcome("welcomeContainer animation transformedWelcome")

    }
    if ((offset > 850 || offset < 650) && doneWelcome) {
        setDoneWelcome(false)
        setWelcome("welcomeContainer animation")
    }

    const [info, setInfo] = useState("infosContainer animation transformedInfos");
    const [doneInfo, setDoneInfo] = useState(false)


    //mobil 850 1500
    if (offset > 800 && offset < 1200 && !doneInfo) {
        setDoneInfo(true)
        setInfo("infosContainer animation transformedInfos")

    }
    if ((offset > 1200 || offset < 800) && doneInfo) {
        setDoneInfo(false)
        setInfo("infosContainer animation")
    }

    const [timeline, setTimeline] = useState("timelineContainer animation transformedTimeline");
    const [doneTimeline, setDoneTimeline] = useState(false)

    //tady taky mobil offset
    // 1500  1800
    let minO = 1000
    let maxO = 1500


    if (offset > minO && offset < maxO && !doneTimeline) {
        setDoneTimeline(true)
        setTimeline("timelineContainer animation transformedTimeline")

    }
    if ((offset > maxO || offset < minO) && doneTimeline) {
        setDoneTimeline(false)
        setTimeline("timelineContainer animation")
    }



    return (
        <div>
            <div className="InfoContainer">
                <div className={classNameVerse}>
                    <img src={bible} className="bible"/>
                    <p>Ale cokoliv mi bylo ziskem, to jsem pro Krista odepsal jako ztrátu.
                        <br/>A vůbec všecko pokládám za ztrátu, neboť to, že jsem poznal Ježíše, svého Pána, je mi nade
                        všecko.
                        <br/><span className="link">Filipským 3/7-8</span>
                    </p>
                </div>
                <div className={welcome}>
                    <img src={heart} className="heart"/>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur bibendum justo non orci.
                        Quisque porta. Nullam at arcu a est sollicitudin euismod. Fusce consectetuer risus a nunc. Fusce
                        aliquam vestibulum ipsum.
                        <br/><span className="link">Zveme vás!</span>
                    </p>
                </div>
                <div className={info}>
                    <img src={questionMark} className="questionMark"/>
                    <div className="infos">
                        <Info name="Kde?" img={loc} text="V Kopečku 89, 500 03 Hradec Králové"/>
                        <Info name="Kdy?" img={cal} text="29.6.2024"/>
                        <Info name="V kolik?" img={cloc} text="10:30"/>
                        <Info name="Co na sebe?" img={suit} text="Společenské oblečení"/>
                    </div>
                </div>
                <div className={timeline}>
                    <p className="timeline">Harmonogram</p>
                    <ElementOfTimeline name="Obřad" time="10:30"/>
                    <ElementOfTimeline name="Oběd s rodinou" time="13:00"/>
                    <ElementOfTimeline name="Gratulace" time="14:15"/>
                    <ElementOfTimeline name="Raut" time="15:00"/>
                    <ElementOfTimeline name="After party" time="16:00"/>
                </div>
            </div>
        </div>
    );
}

export default InfoContainer;