import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';
let coloR = [];
let transactionsFiltered = [];
let transactionsFilteredDateSeparated = [];
class ChartDailySales extends Component {
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
	//  ["Fri", "Jan", "15", "2021", "18:36:53", "GMT+0800", "(Philippine", "Standard", "Time)"]
	// }Jan 14 2021 02:24:42
	render() {
		const DateNow = Date().toLocaleString().split(' ');
		transactionsFiltered = [];
		transactionsFilteredDateSeparated = [];
		this.props.chartData.map((filteredTransactionObject) =>
			transactionsFilteredDateSeparated.push({
				id: filteredTransactionObject.id,
				totalAmount: filteredTransactionObject.totalAmount,
				month: filteredTransactionObject.created_at.split(' ')[0],
				day: filteredTransactionObject.created_at.split(' ')[1],
				year: filteredTransactionObject.created_at.split(' ')[2],
				time: filteredTransactionObject.created_at.split(' ')[3],
			})
		);

		transactionsFilteredDateSeparated
			.filter(
				(transaction) =>
					transaction.month.includes(DateNow[1]) &&
					transaction.day.includes(DateNow[2]) &&
					transaction.year.includes(DateNow[3])
			)
			.map((filteredTransactionObject) =>
				transactionsFiltered.push({
					id: filteredTransactionObject.id,
					totalAmount: filteredTransactionObject.totalAmount,
					date:
						filteredTransactionObject.month +
						'\n' +
						filteredTransactionObject.day +
						'\n' +
						filteredTransactionObject.year +
						'\n' +
						filteredTransactionObject.time,
				})
			);
		console.log(transactionsFiltered);
		return (
			<div className='card_cust p-5'>
				<h2>Daily Sales Statistics</h2>
				<div className='chart'>
					<Line
						//   width={100}
						//   height={50}
						data={{
							labels: transactionsFiltered.map((x) => x.date),
							datasets: [
								{
									label: 'Todays Sales',
									fill: false,
									data: transactionsFiltered.map((x) => x.totalAmount),
									backgroundColor: '#5bc0de',
								},
							],
						}}
						options={{
							title: {
								display: true,
								text: 'Daily Statistics',
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

export default ChartDailySales;
