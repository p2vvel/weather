import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import * as BS from "react-bootstrap";


import {getWindIcon} from "./WeatherUtils.js";
import "./resources/css/weather-icons.min.css";
import "./resources/css/weather-icons-wind.min.css";

function WeatherTileCurrent(props) {
    const metrical_units = props.units !== "imperial";
    const windSpeedUnits = metrical_units ? "m/s" : "mi/h";
    const tempUnits = metrical_units ? "°C" : "°F";


    let placeName = (
     <BS.OverlayTrigger style={{ overflowWrap: "break-all", wordWrap: "break-all" }}placement="bottom"  overlay={<BS.Tooltip id="location-info-tooltip">{props.placeLong}</BS.Tooltip>}>
         <h1>{props.placeShort}</h1>
     </BS.OverlayTrigger>);

    let icon = (<span className="display-1">{props.icon}</span>);
    let date = (<h2>{props.date}</h2>);
    let hour = (<h2>{props.hour}</h2>);
    let humidity = (<p>{props.humidity + "%"}<i className="wi wi-humidity mx-1" /></p>);
    let pressure = (<p>{props.pressure + "hPa"}<i className="wi wi-barometer mx-1" /></p>);
    let temperature = (<h2><i className="wi wi-thermometer mx-1" />{props.temperature + tempUnits}</h2>);
    let feelsLikeTemperature = (<p className="font-weight-bold">Feels like {props.feelsLike + tempUnits}</p>);
    let sunTimes = (<div className="d-flex">
        <div className="mr-4"><i className="wi wi-sunrise mx-1" />{props.sunriseTime}</div>
        <div><i className="wi wi-sunset mx-1" />{props.sunsetTime}</div>
    </div>);

    let windInfo = (<p>
        {props.windSpeed + windSpeedUnits}
        <BS.OverlayTrigger placement="left" overlay={<BS.Tooltip id="weather-degree-info-tooltip">{props.windDegree + '°'}</BS.Tooltip>}>
            {getWindIcon(props.windDegree)}
        </BS.OverlayTrigger>
    </p>);

    let weatherDescription = (<h2>{props.description}</h2>);


    return (
        <div className="d-flex flex-wrap mx-1 my-3 px-3 py-1 border-black border overflow-hidden">
            <div className="d-flex flex-column justify-content-between">
                <div className="w-100" >
                    {placeName}
                    {date}
                    {hour}
                </div>
                <div className="mt-4">
                    {temperature}
                    {feelsLikeTemperature}
                </div>
            </div>
            <div className="d-flex flex-column align-items-end justify-content-between ml-auto flex-grow-1">
                <div className="d-flex flex-column align-items-end text-right">
                    {icon}
                    {weatherDescription}
                </div>

                <div className="d-flex flex-column align-items-end mt-4">
                    {humidity}
                    {pressure}
                    {windInfo}
                    {sunTimes}
                </div>

            </div>
        </div>
    );
}


export default WeatherTileCurrent;