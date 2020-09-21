import React from "react";

import "./resources/css/weather-icons.min.css";
import "./resources/css/weather-icons-wind.min.css";


function getWindIcon(degree) {
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

export {getWindIcon, getWeatherIconByOpenWeatherName};