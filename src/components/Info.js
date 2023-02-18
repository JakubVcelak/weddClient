import './Info.css';

function Info(props) {
    return (
        <div className="Info">
            <h3>{props.name}</h3>
            <div className="center">
                <img className="infoImg" src={props.img}/>
            </div>
            <p className="infoText">{props.text}</p>
        </div>
    );
}

export default Info;