import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';
let transactionsFiltered = [];
let transactionsFilteredDateSeparated = [];
class ChartDailySales extends Component {
	render() {
		// spliting the month day year and time in transaction in order to fetch the daily record

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
		// filtering today's daily sales and rendering it to the dictionary that will be rendered by the chart
		const DateNow = Date().toLocaleString().split(' ');
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
			<div className="chart">
				<Line
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

export default ChartDailySales;
