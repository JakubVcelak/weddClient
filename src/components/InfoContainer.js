import React from 'react';
import Info from "./Info";
import './InfoContainer.css';
import loc from "../res/loc.png";
import cal from "../res/cal.png"
import cloc from "../res/cloc.png"
import suit from "../res/suit.png"
import ElementOfTimeline from "./ElementOfTimeline";


function InfoContainer(props) {
    return (
        <div>
            <div className="InfoContainer">
                <div className="verseContainer">
                    <p>Ale cokoliv mi bylo ziskem, to jsem pro Krista odepsal jako ztrátu.
                        <br/>A vůbec všecko pokládám za ztrátu, neboť to, že jsem poznal Ježíše, svého Pána, je mi nade všecko.
                        <br/><span className="link">Filipským 3/7-8</span>
                    </p>
                </div>
                <div className="welcomeContainer">
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur bibendum justo non orci.
                        Quisque porta. Nullam at arcu a est sollicitudin euismod. Fusce consectetuer risus a nunc. Fusce aliquam vestibulum ipsum.
                        <br/><span className="link">Zveme vás!</span>
                    </p>
                </div>
                <div className="infos">
                    <Info name="Kde?" img={loc} text="V Kopečku 89, 500 03 Hradec Králové"/>
                    <Info name="Kdy?" img={cal} text="9.9.2024"/>
                    <Info name="V kolik?" img={cloc} text="13:00"/>
                    <Info name="Co na sebe?" img={suit} text="Společenské oblečení"/>
                </div>
                <div className="timelineContainer">
                    <p className="timeline">Harmonogram</p>
                    <ElementOfTimeline name="Obřad" time="13:00"/>
                    <ElementOfTimeline name="Společná fotografie" time="14:00"/>
                    <ElementOfTimeline name="Gratulace" time="14:15"/>
                    <ElementOfTimeline name="Raut" time="15:00"/>
                    <ElementOfTimeline name="Odjezd na Stříbrňák" time="16:00"/>
                </div>
            </div>
        </div>
    );
}

export default InfoContainer;