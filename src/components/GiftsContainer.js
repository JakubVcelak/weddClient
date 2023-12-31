import './GiftsContainer.css';
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import Gift from "./Gift";
import {Gifts} from "../App";

function GiftsContainer(props) {

    const {gifts, setGifts} = useContext(Gifts)
    const [giftsVisibility, setGiftsVisibility] = useState(false);
    const [giftsBtn, setGiftsBtn] = useState("Ukázat dary");

    useEffect(() => {
         axios.get("https://wed-server.vercel.app/gifts")
                .then((response) => {
                    if(response.data === ""){
                        return
                    }
                    setGifts(response.data)
                }, (error) => {
                    console.log(error)
                });
    },[]);



   function rederGifts(gif) {
        if(gif.length<1 || gif === undefined)
            return <p className="outOfGifts">Vše zarezervováno...</p>
       return gif.map(g=><Gift key={g._id} id={g._id} name={g.product} img={g.imgUrl} cena={g.cost} url={g.shopUrl}/>)
    }
    
    function handleGiftsVisibility() {
        setGiftsVisibility(!giftsVisibility)
        if (giftsBtn === "Ukázat dary"){
            setGiftsBtn("Skrýt dary")
            return
        }
        setGiftsBtn("Ukázat dary")
    }

    return (
        <div className="GiftsContainer">
            <h4>Svatební dary</h4>
            <p className="giftsSecondHeader">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Nullam sapien sem, ornare ac, nonummy non, lobortis a enim.
                Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam. Duis pulvinar.
            </p>
            <button className="showGifts" onClick={handleGiftsVisibility}>{giftsBtn}</button>
            {giftsVisibility?<div className="gifts">
                {rederGifts(gifts)}
            </div>:""}

        </div>
    );
}

export default GiftsContainer;