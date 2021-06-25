import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';

class ChartInv extends Component {
	static propTypes = {
		chartData: PropTypes.array.isRequired,
	};
	constructor(props) {
		super(props);
		this.state = {
			labels: props.chartData.map((x) => x.created_at),
			data: props.chartData.map((x) => x.new_stock),
		};
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.props.chartData !== prevProps.chartData) {
			this.setState({
				// labels: this.props.chartData.map((x) => x.created_at),
				// data: this.props.chartData.map((x) => x.new_stock),
			});
		}
	}

	render() {
		return (
			<div className='chart'>
				<Line
					data={{
						labels: this.state.labels,
						datasets: [
							{
								label: 'Inventory',
								fill: false,
								data: this.state.data,
								backgroundColor: '#5bc0de',
							},
						],
					}}
					options={{
						title: {
							display: true,
							text: 'Added Stock in Inventory',
							fontSize: 25,
						},
						legend: {
							display: true,
							position: 'bottom',
						},
						scales: {
							xAxes: [{}],
							yAxes: [
								{
									ticks: {
										min: 0,
									},
								},
							],
						},
					}}
				/>
			</div>
		);
	}
}

export default ChartInv;
