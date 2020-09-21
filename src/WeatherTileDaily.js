import React from "react";


import * as BS from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./resources/css/weather-icons.min.css";
import "./resources/css/weather-icons-wind.min.css";

import { getWindIcon } from "./WeatherUtils.js"


function WeatherTileDaily(props) {
    console.log(props);
    const metrical_units = props.units !== "imperial";
    const windSpeedUnits = metrical_units ? "m/s" : "mi/h";
    const tempUnits = metrical_units ? "°C" : "°F";

    return (
        <>
            <div className="d-flex flex-wrap justify-content-between mx-1 my-3 px-3 p-1 border-black border">
                <h5 style={{ minWidth: "102px" }}>{props.date}</h5>
                <div style={{ minWidth: "74px" }} className="flex-grow-1 d-flex flex-column align-items-end">
                    <p className="display-4">{props.icon}</p>
                    <div className="d-flex justify-content-start align-items-center">
                        <div><i className="wi wi-thermometer mx-2" style={{ fontSize: "3rem" }} /></div>

                        <div>
                            <p className="">{props.tempMax + tempUnits}</p>
                            <p className="">{props.tempMin + tempUnits}</p>
                        </div>
                    </div>
                </div>
                <div className="w-100">


                    <p><i className="wi wi-showers mx-1" />{(props.rainProbability * 100) + "%"}</p>
                    <p><i className="wi wi-barometer mx-1" />{props.pressure + "hPa"}</p>




                    <p>
                        <BS.OverlayTrigger placement="left" overlay={<BS.Tooltip >{props.windDegree + '°'}</BS.Tooltip>}>
                            {getWindIcon(props.windDegree)}
                        </BS.OverlayTrigger>
                        {props.windSpeed + windSpeedUnits}
                    </p>
                </div>
            </div>


        </>)
}



export default WeatherTileDaily;