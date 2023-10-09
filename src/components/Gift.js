import React, {useState} from 'react';
import './Gift.css';
import PopUp from "./PopUp";
import heureka from "../res/heureka.png"


function Gift(props) {

    const [seen,setSeen] = useState(false)

    function changeSeen() {
        if (seen){
            setSeen(false)
        }else {
            setSeen(true)
        }

    }

    return (
        <div className="Gift">
            <h5>{props.name}</h5>
            {seen ? <PopUp toggle={changeSeen} nameOfItem={props.name} /> : <div className="center"> <a href={props.url} target="_blank" className="linkGift"><img src={heureka} className="heureka"/> Heureka <span className="cost">{props.cena}</span></a> <img className="giftImg" src={props.img}/><button className="engage" onClick={changeSeen}>Zamluvit</button></div>}
        </div>
    );
}

export default Gift;