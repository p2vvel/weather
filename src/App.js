import React from 'react';
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import *as BS from "react-bootstrap";
import { Sun } from "react-bootstrap-icons";


import SearchNavbar from "./SearchNavbar.js";
import AdvancedSearchWindow from "./AdvancedSearchWindow.js";



import { ErrorBox, ErrorToast } from "./ErrorToast.js";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			location_name: "",
			lat: 49.75,
			lon: 20.45,
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
		this.handleAdvanceSearchSave = this.handleAdvanceSearchSave.bind(this);
		this.handleAdvanceSearchChoiceChange = this.handleAdvanceSearchChoiceChange.bind(this);
	}

	componentDidMount() {
		fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.lat}&lon=${this.state.lon}&exclude=${"minutely"}&appid=${this.apiKeyWeather}`)
			.then(data => data.json())
			.then(data => this.setState({ weather_data: data }));
	}

	handleLocationSearchChange(new_value) {
		this.setState({ location_name: (new_value.trim() === "" ? "" : new_value) })
	}

	handleLocationSearchSubmit() {
		//if searching form is empty, then open advanced searching window
		if (this.state.location_name.trim() === "") {
			this.setState({
				advanced_search: {
					show: true,
					chosen_record_index: 0,
				}
			});
		}
		//if searching form isnt empty, then try to fetch data
		else {
			this.setState({ loading_location_data: true }, () => {
				fetch(`https://eu1.locationiq.com/v1/search.php?key=${this.apiKeyLocation}&q=${this.state.location_name}&format=json&limit=20`)
					.then(response => {
						if (response.ok)
							return response.json();
						else{
							console.log(response.body)
							throw Error(response.statusText);
						}
						// console.log(response);
					})
					.then(data => {
						//if location api query returned error
						if ("error" in data) {
							this.setState(state => ({
								loading_location_data: false,
								errors: state.errors.concat([{ message: data.error }]),
							}));
						}
						else {
							this.setState(state => ({
								temp_location_data: data,
								location_data: (data.length === 1 ? data[0] : state.data),
								loading_location_data: false,
								advanced_search: {
									show: (data.length <= 1 ? state.advanced_search.show : true),	//if theres more than one record fetched, then advanced searcg window is shown
									chosen_record_index: 0,
								}
							}));
						}
					})
					.catch(error => console.log(error.message));//this.handleErrorAdd("Connection error while trying to fetch location data")); //fetch() throws exceptions only on connection errors (so error in catch = no internet connection)
			});
		}
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

	handleAdvanceSearchSave() {
		this.setState(state => ({
			advanced_search: {
				show: false,
				chosen_record_index: 0,
			},
			location_data: state.temp_location_data[state.advanced_search.chosen_record_index],
		}), () => console.log(this.state.location_data, this.state.temp_location_data));
	}

	handleErrorDelete() {
		this.setState(state => ({ errors: (state.errors.slice(1)) }));
	}

	handleErrorAdd(err_message) {
		console.log(`Error: ${err_message}`)
		this.setState(state => ({
			loading_weather_data: false,
			loading_location_data: false,
			errors: state.errors.concat([{ message: err_message }]),
		}));
	}

	render() {
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
					onSave={this.handleAdvanceSearchSave}
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
					true
						// this.state.weather_data !== undefined && this.state.location !== undefined
						?
						// <BS.Container fluid>
						// 	<BS.Row>
						// 		<BS.Col lg={{span: 8, offset: 2}} md={{span: 10, offset: 1}}>
						// 			<WeatherTileCurrent weatherData={this.state.weather_data}/>
						// 		</BS.Col>
						// 	</BS.Row>
						// </BS.Container>
						<>
							<div style={{ whiteSpace: "pre", display: "flex" }}>
								<div style={{ width: "50%", boxSizing: "border-box", border: "1px solid aqua" }}>{JSON.stringify(this.state.weather_data, null, 2)}</div>
								<hr />
								<div style={{ width: "50%", boxSizing: "border-box" }}>{JSON.stringify(this.state.location_data, null, 2)}</div>
							</div>
						</>
						:
						<div className="d-flex w-100 justify-content-center align-items-center" style={{ height: "calc(100vh - 62px)" }}>
							<BS.Spinner animation="border" variant="info" size="lg" />
						</div>
				}
			</>);
	}
}

export default App;
