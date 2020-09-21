import React from "react";

import { Chart } from "chart.js"

import * as BS from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./WeatherTileHourly.scss";

class WeatherTileHourly extends React.Component {
	constructor(props) {
		super(props);
		this.state = { current_dataset: {} }

		// this.chart;	//stores chart.js object
		this.chart_ref = React.createRef();	//stores reference to canva displaying chart.js object

		this.datasets = {
			temperature: {
				label: "Temperature",
				borderColor: "rgba(0, 255, 127, 1)",
				backgroundColor: "rgba(0, 255, 127, 0.5)",
				data: this.props.data.map(d => ({ y: d.temperature, t: d.time })),
			},
			humidity: {
				label: "Humidity",
				borderColor: " rgba(46, 149, 180, 1)",
				backgroundColor: "rgba(46, 149, 180, 0.5)",
				data: this.props.data.map(d => ({ y: d.humidity, t: d.time })),
			},
			wind: {
				label: "Wind speed",
				borderColor: "rgba(118, 119, 123, 1)",
				backgroundColor: "rgba(118.0, 119.0, 123.0, 0.5)",
				data: this.props.data.map(d => ({ y: d.wind_speed, t: d.time })),
			},
			pressure: {
				label: "Air pressure",
				borderColor: "rgba(255, 3, 62, 1)",
				backgroundColor: "rgba(255, 3, 62, 0.5)",
				data: this.props.data.map(d => ({ y: d.pressure, t: d.time })),
			}
		}

		this.updateDataset = this.updateDataset.bind(this);
	}

	componentDidMount() {
		this.chart = this.createNewChart(this.datasets.temperature);	//shows temperature chart at first
		this.chart.render();
	}

	createNewChart(new_dataset) {
		this.setState({ current_dataset: new_dataset });

		return new Chart(this.chart_ref.current, {
			type: "line",
			data: { datasets: [new_dataset] },
			options: this.chart_options,
		});
	}

	async updateDataset(dataset_index) {
		let scroll_pos = window.scrollY;
		this.chart_ref.current.style.minHeight = `${this.chart_ref.current.offsetHeight}px`;

		console.log(this.chart_ref.current.style.minHeight, this.chart_ref.current.offsetHeight);

		this.chart.destroy();
		this.chart = this.createNewChart(dataset_index);
		this.chart.render();

		// window.scroll({x: window.scrollX, y: scroll_pos});
	}

	render() {
		return (
			<>
				<div style={{ width: "100%", minHeight: "300px" }}>
					<canvas ref={this.chart_ref} id="hourly_chart" ></canvas>
				</div>
				<div className="d-flex justify-content-around flex-wrap">
					<div className="d-flex justify-content-around flex-grow-1">
						<BS.Button size="sm" className="text-bolder m-1 flex-grow-1" variant={this.state.current_dataset === this.datasets.temperature ? `green` : `outline-green`} onClick={() => this.updateDataset(this.datasets.temperature)}>Temperature</BS.Button>
						<BS.Button size="sm" className="text-bolder m-1 flex-grow-1" variant={this.state.current_dataset === this.datasets.pressure ? `red` : `outline-red`} onClick={() => this.updateDataset(this.datasets.pressure)} >Pressure</BS.Button>

					</div>
					<div className="d-flex justify-content-around flex-grow-1">
						<BS.Button size="sm" className="text-bolder m-1 flex-grow-1" variant={this.state.current_dataset === this.datasets.humidity ? `aqua` : `outline-aqua`} onClick={() => this.updateDataset(this.datasets.humidity)}>Humidity</BS.Button>
						<BS.Button size="sm" className="text-bolder m-1 flex-grow-1" variant={this.state.current_dataset === this.datasets.wind ? `silver` : `outline-silver`} onClick={() => this.updateDataset(this.datasets.wind)}>Wind speed</BS.Button>
					</div>
				</div>
			</>);
	}

	chart_options = {
		responsive: true,
		maintainAspectRatio: false,
		tooltips: {
			callbacks: {
				label: function (tooltipItem, data) {
					switch (data.datasets[0].label) {
						case "Temperature":
							return `Temperature: ${tooltipItem.yLabel} °C`;
						case "Air pressure":
							return `Pressure: ${tooltipItem.yLabel} hPa`;
						case "Humidity":
							return `Humidity: ${tooltipItem.yLabel} %`;
						case "Wind speed":
							return `Wind speed: ${tooltipItem.yLabel} m/s`;
						default:
							return ` ${tooltipItem.yLabel}`;;
					}
				},

				mode: 'nearest',
				axis: 'x'
			}
		},
		// hover: { mode: null },
		legend: {
			display: false,
		},
		scales: {
			xAxes: [{
				type: "time",
				time: {
					tooltipFormat: 'DD/MM/YYYY, HH:mm ', //date format displayed in tooltip
					displayFormats: {
						hour: "HH:mm",	//date format on scale
					},
					stepSize: 3,	//dont show every hour
				},
			}]
		},
		elements: {
			point: {
				pointStyle: "circle",
				pointHitRadius: 30,	//easier to trigger tooltip show
				radius: 3,
				// (context) => {
				// 	const time = context.dataset.data[context.dataIndex].t;
				// 	return ((time - this.props.currentTime >= 0 && time - this.props.currentTime < 3600000) ? 12 : 3);
				// },
			}
		}
	}
}

export default WeatherTileHourly;