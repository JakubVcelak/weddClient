import './Footer.css';
import footerTest from "../res/footerTest.jpg"
import smile from "../res/smile.png"

function Footer(props) {
    return (
        <div className="Footer">
            <div className="footerText">
                <p>Těšíme se na vás!</p>
                <div className="mobil">
                    <img className="smile" src={smile}/>
                </div>
            </div>
            <div className="mobil">
                <img className="footerImg" src={footerTest}/>
            </div>
        </div>
    );
}

export default Footer;