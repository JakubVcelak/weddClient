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
            <div className="headerContainer"><h5>{props.name}</h5></div>
            {seen ? <PopUp toggle={changeSeen} nameOfItem={props.name} /> : <div className="center"><div className="imgContainer"><img className="giftImg" src={props.img}/></div><div><a href={props.url} target="_blank" className="linkGift"> Odkaz ({props.cena})</a><button className="engage" onClick={changeSeen}>Zamluvit</button></div></div>}
        </div>
    );
}

export default Gift;