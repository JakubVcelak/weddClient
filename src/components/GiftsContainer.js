import './GiftsContainer.css';
import Gift from "./Gift";
import mik from "../res/mik.png"
import pan from "../res/pan.png"
import prib from "../res/prib.png"
import vys from "../res/vys.png"
import tal from "../res/tal.png"
import ruc from "../res/ruc.png"
import hrn from "../res/hrn.png"

function GiftsContainer(props) {
    return (
        <div className="GiftsContainer">
            <h4>Svatební dary</h4>
            <p className="giftsSecondHeader">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Nullam sapien sem, ornare ac, nonummy non, lobortis a enim.
                Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam. Duis pulvinar.
            </p>
            <div className="gifts">
                <Gift name="Mikrovlnná trouba Mora MT 321 S černá" img={mik}/>
                <Gift name="Banquet 24dílná sada příborů Apetit Daphne" img={prib}/>
                <Gift name="Podlahový vysavač Electrolux Easy Go EEG41CB modrý" img={vys}/>
                <Gift name="Pánev Tefal Simply Clean B5670553, 26 cm" img={pan}/>
                <Gift name="ERNESTO® Sada hrnků, 4dílná" img={hrn}/>
                <Gift name="LIVARNO home Sada froté ručníků, 6dílná" img={ruc}/>
                <Gift name="Sada talířů BANQUET Marion, 18 ks" img={tal}/>
            </div>
        </div>
    );
}

export default GiftsContainer;