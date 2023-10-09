import './Footer.css';
import footerTest from "../res/footer.jpg"


function Footer(props) {
    return (
        <div className="Footer">
            <div className="footerText">
                <p>Těšíme se na vás!</p>
            </div>
            <div className="mobil">
                <img className="footerImg" src={footerTest}/>
            </div>
        </div>
    );
}

export default Footer;