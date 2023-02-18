import React from 'react';
import './ElementOfTimeline.css';

function ElementOfTimeline(props) {
    return (
        <div className="ElementOfTimeline">
            <p className="name">{props.name}</p>
            <p className="time">{props.time}</p>
        </div>
    );
}

export default ElementOfTimeline;