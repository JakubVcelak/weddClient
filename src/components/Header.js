import './Header.css';
import mobile from "../res/main.jpg"
import pc from "../res/mainpc.jpg"
import headerText from "../res/kubadori.png"
import {useContext, useEffect, useState} from "react";
import {Offset} from "../App";


function Header(props){

    const [className, setClassName] = useState("headerText animation transformed");
    const [done, setDone] = useState(true)
    const {offset, setOffset} = useContext(Offset)
    const [mainImg, setMainImg] = useState(pc)

    if (offset<40 && !done){
        setDone(true)
       setClassName("headerText animation transformed")

    }
    if(offset>70 && done){
        setDone(false)
        setClassName("headerText animation")
    }

    const [classNameImg, setClassNameImg] = useState("headerImg transformedImg");
    const [doneImg, setDoneImg] = useState(false)


    //mobil 70 350

    if (offset>70 && offset<450 && !doneImg){
        setDoneImg(true)
       setClassNameImg("headerImg animation transformedImg")

    }
    if((offset>450 || offset<70) && doneImg){
        setDoneImg(false)
        setClassNameImg("headerImg animation")
    }



    useEffect(() => {
        if(window.innerWidth<600)
        setMainImg(mobile)
    }, []);



    return (
        <div className="Header">
            <img className={className} src={headerText}/>
            <img className={classNameImg} src={mainImg}/>
        </div>
    );
}

export default Header;