import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';
let coloR = [];
let transactionsFiltered = [];
class ChartMonthlySales extends Component {
	// static propTypes = {
	// 	chartData: PropTypes.array.isRequired,
	// 	label: PropTypes.string.isRequired,
	// };
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		labels: [],
	// 		data: [],
	// 	};
	// }
	// componentDidMount() {
	// 	this.props.getTransactionList();
	// }
	render() {
		const DateNow = Date().toLocaleString().split(' ');
		transactionsFiltered = [];
		this.props.chartData
			.filter(
				(transaction) =>
					transaction.created_at.includes(DateNow[1]) &&
					transaction.created_at.includes(DateNow[3])
			)
			.map((filteredTransactionObject) =>
				transactionsFiltered.push({
					id: filteredTransactionObject.id,
					totalAmount: filteredTransactionObject.totalAmount,
					date: filteredTransactionObject.created_at.split(' '),
				})
			);
		return (
			<div className='card_cust p-5'>
				<h2>Monthly Sales Statistics</h2>
				<div className='chart'>
					<Line
						//   width={100}
						//   height={50}
						data={{
							labels: transactionsFiltered.map((x) => x.date),
							datasets: [
								{
									label: 'Inventory',
									fill: false,
									data: transactionsFiltered.map((x) => x.totalAmount),
									backgroundColor: '#5bc0de',
								},
							],
						}}
						options={{
							title: {
								display: true,
								text: 'Monthly Statistics',
								fontSize: 25,
							},
							legend: {
								display: true,
								position: 'bottom',
							},
							scales: {
								xAxes: [
									{
										// type: "time",
										// time: {
										//   unit: "week",
										// },
									},
								],
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
			</div>
		);
	}
}
export default ChartMonthlySales;