import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Bar, Line, Pie, Doughnut, HorizontalBar } from 'react-chartjs-2';

let coloR = [];
class ChartProd extends Component {
	static propTypes = {
		chartData: PropTypes.array.isRequired,
		label: PropTypes.string.isRequired,
	};
	constructor(props) {
		super(props);
		this.state = {
			labels: this.props.chartData.map((x) => x.name),
			data: this.props.chartData.map((x) => x.stock),
		};
	}
	componentDidUpdate(prevProps, prevState) {
		if (this.props.chartData !== prevProps.chartData) {
			this.setState({
				labels: this.props.chartData.map((x) => x.name),
				data: this.props.chartData.map((x) => x.stock),
			});
		}
	}

	render() {
		return (
			<div className='chart'>
				<HorizontalBar
					//   width={100}
					//   height={50}
					data={{
						labels: this.state.labels,
						datasets: [
							{
								label: 'Quantity',
								data: this.state.data,
								backgroundColor: '#5bc0de',
							},
						],
					}}
					options={{
						title: {
							display: true,
							text: 'Number of Stocks Per Items',
							fontSize: 25,
						},
						legend: {
							display: true,
							position: 'bottom',
						},
						scales: {
							xAxes: [
								{
									ticks: {
										min: 0, // Edit the value according to what you need
									},
								},
							],
							yAxes: [
								{
									stacked: true,
									gridLines: {
										display: false,
									},
								},
							],
						},
						// scales: {
						//   responsive: true,
						//   yAxes: [
						//     {
						//       ticks: {
						//         beginAtZero: true,
						//       },
						//       gridLines: {
						//         display: false,
						//       },
						//     },
						//   ],
						// },
					}}
				/>
			</div>
		);
	}
}

export default ChartProd;
