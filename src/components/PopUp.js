import React, {useContext, useState} from 'react';
import './PopUp.css';
import axios from "axios";
import {Gifts} from "../App";

function PopUp(props) {

    const [firstName, setFirstName] = useState("")
    const [secondName, setSecondName] = useState("")

    const {gifts, setGifts} = useContext(Gifts)

    function submit() {
        if (firstName === "" || secondName === "")
            return
        props.toggle()
        axios.post("https://vast-cyan-dog.cyclic.cloud/addOrder", {
            product: props.nameOfItem,
            firstName: firstName,
            secondName: secondName
        }).then((response) => {
                if (response.data === "") {
                    return
                }
                setGifts(response.data.filter((g) => g.product !== props.nameOfItem.toString()))
            }, (error) => {
                console.log(error)
            }, (error) => {
                console.log(error)
            });
    }

    return (
        <div className="popUp">
            <button className="close" onClick={props.toggle}>&times;</button>
            <input className="input" placeholder="Jméno" onChange={(e) => {
                setFirstName(e.target.value)
            }}/>
            <input className="input" placeholder="Příjmení" onChange={(e) => {
                setSecondName(e.target.value)
            }}/>
            <button className="confirm" onClick={() => {
                submit()
            }}>Potvrdit
            </button>
        </div>
    );
}

export default PopUp;