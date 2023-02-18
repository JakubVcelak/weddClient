import './Header.css';
import imgHeader from "../res/colorTest.png"

function Header(props) {
    return (
        <div className="Header">
            <h1>DORI <span className="amper">&#38;</span> KUBA</h1>
            <img className="headerImg" src={imgHeader}/>
        </div>
    );
}

export default Header;