import React from "react";

// import moment from "moment";
// import "moment/locale/pl";
// moment().locale("pl");

import "bootstrap/dist/css/bootstrap.min.css";
import * as BS from "react-bootstrap";


import { InfoCircle, Thermometer, ThermometerHalf } from "react-bootstrap-icons";
import "./resources/css/weather-icons.min.css";
import "./resources/css/weather-icons-wind.min.css";

function WeatherTileCurrent(props) {
    // moment(new Date(this.props.weatherData.current.dt)).format("HH:mm")
    // moment(new Date(this.props.weatherData.current.dt)).format("Do MMMM YYYY")


    const metrical_units = props.units !== "imperial";

    const windSpeedUnits = metrical_units ? "m/s" : "mi/h";
    const tempUnits = metrical_units ? "°C" : "°F";

    let placeName = (
            <h1 style={{whiteSpace: "pre"}}>{props.placeShort}</h1>);
    // <BS.OverlayTrigger style={{ overflowWrap: "break-all", wordWrap: "break-all" }}placement="bottom"  overlay={<BS.Tooltip id="location-info-tooltip">{props.placeLong}</BS.Tooltip>}>
    //     {/* <h1 >{props.placeShort.replaceAll(' ', '\n')}</h1> */}
    //     <h1 style={{ overflowWrap: "break-all",  wordWrap: "break-all" }}>{props.placeShort}</h1>
    // </BS.OverlayTrigger>);

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
            <div className="d-flex flex-column align-items-end justify-content-between ml-auto flex-grow-1"
            // style={{ minWidth: "50%" }}
            >
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


function getWindIcon(degree) {
    // console.log("xd", degree)
    if (degree >= 336) return (<i className="wi wi-wind towards-336-deg mx-1" />);
    else if (degree >= 313) return (<i className="wi wi-wind towards-313-deg mx-1" />);
    else if (degree >= 293) return (<i className="wi wi-wind towards-293-deg mx-1" />);
    else if (degree >= 270) return (<i className="wi wi-wind towards-270-deg mx-1" />);
    else if (degree >= 248) return (<i className="wi wi-wind towards-248-deg mx-1" />);
    else if (degree >= 225) return (<i className="wi wi-wind towards-225-deg mx-1" />);
    else if (degree >= 203) return (<i className="wi wi-wind towards-203-deg mx-1" />);
    else if (degree >= 180) return (<i className="wi wi-wind towards-180-deg mx-1" />);
    else if (degree >= 158) return (<i className="wi wi-wind towards-158-deg mx-1" />);
    else if (degree >= 135) return (<i className="wi wi-wind towards-135-deg mx-1" />);
    else if (degree >= 113) return (<i className="wi wi-wind towards-113-deg mx-1" />);
    else if (degree >= 90) return (<i className="wi wi-wind towards-90-deg mx-1" />);
    else if (degree >= 68) return (<i className="wi wi-wind towards-68-deg mx-1" />);
    else if (degree >= 45) return (<i className="wi wi-wind towards-45-deg mx-1" />);
    else if (degree >= 23) return (<i className="wi wi-wind towards-23-deg mx-1" />);
    else if (degree >= 0) return (<i className="wi wi-wind towards-0-deg mx-1" />);
}

function getWeatherIconByOpenWeatherName(icon_name) {
    switch (icon_name) {
        case "01d": return (<li className="wi wi-day-sunny mx-1" />);
        case "02d": return (<li className="wi wi-day-sunny-overcast mx-1" />);
        case "03d": return (<li className="wi wi-day-cloudy mx-1" />);
        case "04d": return (<li className="wi wi-cloudy mx-1" />);
        case "09d": return (<li className="wi wi-showers mx-1" />);
        case "10d": return (<li className="wi wi-day-rain mx-1" />);
        case "11d": return (<li className="wi wi-day-thunderstorm mx-1" />);
        case "13d": return (<li className="wi wi-day-snow mx-1" />);
        case "50d": return (<li className="wi wi-day-fog mx-1" />);
        case "01n": return (<li className="wi wi-night-clear mx-1" />);
        case "02n": return (<li className="wi wi-night-alt-partly-cloudy mx-1" />);
        case "03n": return (<li className="wi wi-night-alt-cloudy mx-1" />);
        case "04n": return (<li className="wi wi-cloudy mx-1" />);
        case "09n": return (<li className="wi wi-showers mx-1" />);
        case "10n": return (<li className="wi wi-night-alt-rain mx-1" />);
        case "11n": return (<li className="wi wi-night-alt-thunderstorm mx-1" />);
        case "13n": return (<li className="wi wi-night-alt-snow mx-1" />);
        case "50n": return (<li className="wi wi-night-fog mx-1" />);
        default: return (<li className="wi wi-alien mx-1" />);
    }
}

export { getWeatherIconByOpenWeatherName };
export default WeatherTileCurrent;