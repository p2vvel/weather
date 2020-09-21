import React from 'react';
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import *as BS from "react-bootstrap";
import { Sun } from "react-bootstrap-icons";
import moment from "moment";


import SearchNavbar from "./SearchNavbar.js";
import AdvancedSearchWindow from "./AdvancedSearchWindow.js";
import { ErrorBox, ErrorToast } from "./ErrorToast.js";

import WeatherTileCurrent from "./WeatherTileCurrent.js";
import { getWeatherIconByOpenWeatherName } from "./WeatherUtils.js";

import WeatherTileHourly from "./WeatherTileHourly.js";

import WeatherTileDaily from "./WeatherTileDaily.js";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			units: "metric",
			location_name: "",
			weather_data: undefined,
			location_data: undefined,
			temp_location_data: undefined,
			loading_location_data: false,
			locading_weather_data: false,
			advanced_search: {
				show: false,
				chosen_record_index: 0
			},
			errors: [],
		};
		this.apiKeyWeather = this.props.apiKeyWeather || "15b95f471ae2dd3c0058c7bf468339ec";
		this.apiKeyLocation = this.props.apiKeyLocation || "c89c35523d4ee9";

		this.handleLocationSearchChange = this.handleLocationSearchChange.bind(this);
		this.handleLocationSearchSubmit = this.handleLocationSearchSubmit.bind(this);
		this.handleAdvanceSearchCancel = this.handleAdvanceSearchCancel.bind(this);
		this.handleAdvanceSearchSubmit = this.handleAdvanceSearchSubmit.bind(this);
		this.handleAdvanceSearchChoiceChange = this.handleAdvanceSearchChoiceChange.bind(this);
	}

	async componentDidMount() {
		//for debugging purpose
		await this.handleLocationSearchChange("Ujanowice, Limanowa");
		// await this.handleLocationSearchChange("Warmątowice Sienkiewiczowskie");
		this.handleLocationSearchSubmit();
	}

	handleLocationSearchChange(new_value) {
		this.setState({ location_name: new_value });
	}

	handleLocationSearchSubmit() {
		if (this.state.location_name.trim() === "") {
			//if searching form is empty, then open advanced searching window
			this.setState({
				advanced_search: {
					show: true,
					chosen_record_index: 0,
					temp_location_data: [],
				}
			});
		}
		else {
			//if searching form isnt empty, then try to fetch data
			this.fetchLocationData();
		}
	}

	fetchLocationData() {
		this.setState({ loading_location_data: true }, () => {
			fetch(`https://eu1.locationiq.com/v1/search.php?key=${this.apiKeyLocation}&q=${this.state.location_name}&format=json&limit=20`)
				.then(response => {
					if (response.ok) {
						return response.json();
					}
					else {
						throw Error(response.statusText);
					}
				})
				.then(data => {
					//if only one location available, fetch weather data immediately
					if (data.length === 1) {
						this.setState({
							loading_location_data: false,
							temp_location_data: data,
							location_data: data[0],
						}, this.fetchWeatherData);	//fetch weather data when state change
					}
					else {
						//if more locations available, open advanced search window
						this.setState({
							loading_location_data: false,
							temp_location_data: data,
							advanced_search: {
								show: true,
								chosen_record_index: 0,
							}
						})
					}
				})
				.catch(error => {
					console.log("Location API error: " + error.message);
					this.handleErrorAdd("Location API error: " + error.message);
				});
		});
	}

	fetchWeatherData() {
		// console.log((`https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.location_data.lat}&lon=${this.state.location_data.lon}&exclude=${"minutely"}&appid=${this.apiKeyWeather}&units=${this.state.units}`))
		this.setState({ loading_weather_data: true }, () => {
			fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.location_data.lat}&lon=${this.state.location_data.lon}&exclude=${"minutely"}&appid=${this.apiKeyWeather}&units=${this.state.units}`)
				.then(response => {
					if (response.ok) {
						return response.json();
					}
					else {
						throw Error(response.statusText);
					}
				})
				.then(data => this.setState({
					weather_data: data,
					loading_weather_data: false
				}))
				.catch(error => {
					console.log("Weather API error: " + error.message);
					this.handleErrorAdd("Weather API error: " + error.message)
				})
		})
	}

	handleAdvanceSearchChoiceChange(new_value) {
		this.setState(state => ({
			advanced_search: {
				show: state.advanced_search.show,
				chosen_record_index: new_value
			}
		}));
	}

	handleAdvanceSearchCancel() {
		this.setState({
			advanced_search: {
				show: false,
				chosen_record_index: 0,
			}
		});
	}

	handleAdvanceSearchSubmit() {
		this.setState(state => ({
			advanced_search: {
				show: false,
				chosen_record_index: 0,
			},
			location_data: state.temp_location_data[state.advanced_search.chosen_record_index],
		}), this.fetchWeatherData);	//fetch weather data when state change
	}

	handleErrorDelete() {
		this.setState(state => ({ errors: (state.errors.slice(1)) }));
	}

	handleErrorAdd(err_message) {
		// console.log(`Error: ${err_message}`)
		this.setState(state => ({
			loading_weather_data: false,
			loading_location_data: false,
			errors: state.errors.concat([{ message: err_message }]),
		}));
	}

	render() {
		const user_timezone_offset = (new Date()).getTimezoneOffset() * 60;
		return (
			<>
				<SearchNavbar
					logo={(<><Sun color="gold" />Weather</>)}
					onSearchChange={this.handleLocationSearchChange}
					onSearchSubmit={this.handleLocationSearchSubmit}
					isLoadingData={this.state.loading_location_data}
					searchValue={this.state.location_name}
				/>


				<AdvancedSearchWindow
					onCancel={this.handleAdvanceSearchCancel}
					onSave={this.handleAdvanceSearchSubmit}
					show={this.state.advanced_search.show}
					onSearchChange={this.handleLocationSearchChange}
					onSearchSubmit={this.handleLocationSearchSubmit}
					onChoiceChange={this.handleAdvanceSearchChoiceChange}
					chosenValue={this.state.advanced_search.chosen_record_index}
					isLoadingData={this.state.loading_location_data}
					searchValue={this.state.location_name}
					choiceOptions={
						this.state.temp_location_data === undefined
							? (<></>)
							: this.state.temp_location_data.map((val, index) => <option value={index} key={index}>{val.display_name}</option>)}
				/>

				<ErrorBox children={this.state.errors.map((err, index) => <ErrorToast message={err.message} key={index} />)} />



				{
					this.state.loading_weather_data === true || this.state.weather_data === undefined
						?

						<div className="d-flex w-100 justify-content-center align-items-center" style={{ height: "calc(100vh - 62px)" }}>
							<BS.Spinner animation="border" variant="info" size="lg" />
						</div>
						:

						<BS.Container fluid>
							<BS.Row>
								<BS.Col lg={{ span: 8, offset: 2 }} md={{ span: 10, offset: 1 }}>
									<WeatherTileCurrent
										units={this.state.units}
										hour={moment(new Date((this.state.weather_data.current.dt + this.state.weather_data.timezone_offset + user_timezone_offset) * 1000)).format("HH:mm")}
										date={moment(new Date((this.state.weather_data.current.dt + this.state.weather_data.timezone_offset + user_timezone_offset) * 1000)).format("DD/MM/YYYY")}
										humidity={this.state.weather_data.current.humidity}
										temperature={this.state.weather_data.current.temp}
										pressure={this.state.weather_data.current.pressure}
										feelsLike={this.state.weather_data.current.feels_like}
										sunsetTime={moment(new Date((this.state.weather_data.current.sunset + this.state.weather_data.timezone_offset + user_timezone_offset) * 1000)).format("HH:mm")}
										sunriseTime={moment(new Date((this.state.weather_data.current.sunrise + this.state.weather_data.timezone_offset + user_timezone_offset) * 1000)).format("HH:mm")}
										windSpeed={this.state.weather_data.current.wind_speed}
										windDegree={this.state.weather_data.current.wind_deg}
										icon={getWeatherIconByOpenWeatherName(this.state.weather_data.current.weather[0].icon)}
										description={(s => (s[0].toUpperCase() + s.slice(1)))(this.state.weather_data.current.weather[0].description)}
										placeShort={this.state.location_data.display_name.split(',')[0]}
										placeLong={this.state.location_data.display_name}
									/>
								</BS.Col>
							</BS.Row>
							<BS.Row>
								<BS.Col lg={{ span: 8, offset: 2 }} md={{ span: 10, offset: 1 }}>
									<WeatherTileHourly
										data={this.state.weather_data.hourly.slice(0, 24).map(d => ({
											temperature: d.temp,
											humidity: d.humidity,
											pressure: d.pressure,
											wind_speed: d.wind_speed,
											time: new Date((d.dt + this.state.weather_data.timezone_offset + user_timezone_offset) * 1000),
										}))}
										currentTime={new Date((this.state.weather_data.current.dt + this.state.weather_data.timezone_offset + user_timezone_offset) * 1000)}
									/>
								</BS.Col>
							</BS.Row>
							<BS.Row>
								<BS.Col lg={{ span: 8, offset: 2 }} md={{ span: 10, offset: 1 }}>
									<BS.Row>
										{this.state.weather_data.daily.map((d, i) => (
											<BS.Col xs={{ span: 12 }} sm={{ span: 6 }} md={{ span: 4 }} lg={{ span: 3 }} key={i}>
												<WeatherTileDaily
													units={this.state.units}
													date={i === 0 ? "Today" : moment(new Date((d.dt + this.state.weather_data.timezone_offset + user_timezone_offset) * 1000)).format("DD/MM/YYYY")}
													icon={getWeatherIconByOpenWeatherName(d.weather[0].icon)}
													tempMax={d.temp.max}
													tempMin={d.temp.min}
													rainProbability={d.pop}
													pressure={d.pressure}
													windSpeed={d.wind_speed}
													windDegree={d.wind_deg}
												/>
											</BS.Col>))}
									</BS.Row>
								</BS.Col>
							</BS.Row>
						</BS.Container>
				}
			</>);
	}
}

export default App;
