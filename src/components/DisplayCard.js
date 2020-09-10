import React from "react";

import rainLogo from "../assets/svgs/rain.svg";
import snowLogo from "../assets/svgs/snow.svg";
import clearLogo from "../assets/svgs/sun.svg";
import cloudLogo from "../assets/svgs/cloud.svg";
import smokeLogo from "../assets/svgs/cloud-wind.svg";


const DisplayCard = (props) => {

    function GetLogo(inText) {
        switch (inText.toUpperCase()) {
            case "SMOKE":
                return smokeLogo;
            case "CLOUDS":
                return cloudLogo;
            case "CLEAR":
                return clearLogo;
            case "RAIN":
                return rainLogo;
            case "SNOW":
                return snowLogo;
        }
    
        return clearLogo;
    }

    let inText = props.data.weather[0].main
    let logo = GetLogo(inText);
    console.log(logo);
;    //console.log(props.data.weather[0].main);

    return (
        <div className="displayCard-Container">
            <div className="locationRow">
                <div className="locationText">
                    {props.data.name}, {props.data.sys.country}
                </div>
            </div>
            <div className="phraseText">
                {props.data.weather[0].description.charAt(0).toUpperCase() +
                    props.data.weather[0].description.slice(1)}
            </div>
            <div className="weatherBox">
                <div className="tempContainer">
                    <div className="temp">
                        {Math.round(props.data.main.temp)}
                        {props.unit === "imperial" ? "°F" : "°C"}
                    </div>
                    <div className="tempImg">
                        <img src={logo} />
                    </div>
                </div>
                <div className="weather">
                    Feels like {props.data.main.feels_like}
                    {props.unit === "imperial" ? "°F" : "°C"}
                </div>
            </div>
        </div>
    );
};

export default DisplayCard;
