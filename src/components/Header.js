import './Header.css';
import imgHeader from "../res/colorTest.png"
import test from "../res/test.gif"

function Header(props) {
    return (
        <div className="Header">
            <h1>KUBA <span className="amper">&#38;</span> DORI</h1>
            <img className="headerImg" src={imgHeader}/>
            <img src={test}/>
        </div>
    );
}

export default Header;