import React, {useState} from 'react';
import './Gift.css';
import PopUp from "./PopUp";


function Gift(props) {

    const [seen,setSeen] = useState(false)

    function changeSeen() {
        if (seen){
            setSeen(false)
        }else {
            setSeen(true)
        }

    }
    //

    return (
        <div className="Gift">
            <h5>{props.name}</h5>
            {seen ? <PopUp toggle={changeSeen} /> : <div className="center"> <img className="giftImg" src={props.img}/><button className="engage" onClick={changeSeen}>Zamluvit</button></div>}
        </div>
    );
}

export default Gift;