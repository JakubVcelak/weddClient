import React from 'react';
import './PopUp.css';

function PopUp(props) {
    return (
        <div className="popUp">
                <button className="close" onClick={props.toggle}>&times;</button>
                <input className="input" placeholder="Jméno"/>
                <input className="input" placeholder="Příjmení"/>
                <button className="confirm" onClick={props.toggle}>Potvrdit</button>
        </div>
    );
}

export default PopUp;