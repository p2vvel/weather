import React from "react";

import moment from "moment";
import "moment/locale/pl";
// moment().locale("pl");

import "bootstrap/dist/css/bootstrap.min.css";
// import * as BS from "react-bootstrap";



class WeatherTileCurrent extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props !== prevProps){
            this.forceUpdate();
        }
    }

    render(){
        // let x = moment();
        // x.locale("pl");
        if(this.props.weatherData === undefined){
            return (<></>);
        }
        else{
            console.log(this.props.current);
            return (<>
                <div className="m-2 border border-aqua">
                    <div className="d-flex flex-wrap align-items-end border border-danger p-0">
                        <p style={{ fontSize: "2em" }} className="0">{moment(new Date(this.props.weatherData.current.dt)).format("HH:mm")}</p>
                        <p style={{ fontSize: "1.5em" }} className="text-muted">{moment(new Date(this.props.weatherData.current.dt)).format("Do MMMM YYYY")}</p>
                    </div>
                    <img src={this.props.weatherData.current.weather.icon}/>
                    <h5 className="text-muted">{moment().format("dddd")}</h5>
                </div>
            </>);
        }
        
    }
}

export default WeatherTileCurrent;