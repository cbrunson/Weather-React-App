import React from 'react';
import Line from "../assets/horizontalLine.jpg";

const dateBuilder = (d) => {
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    let date = d.getDate();
    let month = months[d.getMonth()];

    return `${month} ${date}`
}

const TitleBar = () => {
    return (
        <div className="titleBar-Container">
            <div className="titleBar">
                <div className="title">Current Weather</div>
                <div className="date">{dateBuilder(new Date())}</div>
            </div>
{/*             <div>
                <img src={Line} />    
            </div> */}
        </div>
    );
}

export default TitleBar;