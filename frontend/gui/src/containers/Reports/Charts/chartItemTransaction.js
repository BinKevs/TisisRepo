import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';

let transactionItemsFiltered = [];
var TotalItemsSoldPerItem = [];
class ChartItemTrans extends Component {
	static propTypes = {
		chartData: PropTypes.array.isRequired,
	};
	constructor(props) {
		super(props);
		this.state = {
			labels: [],
			data: [],
		};
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.props.chartData !== prevProps.chartData) {
			transactionItemsFiltered = [];
			TotalItemsSoldPerItem = [];
			//Destructuring for the ease of sorting which is which is sold
			this.props.chartData.map((filteredTransactionItemObject) =>
				transactionItemsFiltered.push({
					id: filteredTransactionItemObject.id,
					productName: filteredTransactionItemObject.product_info.name,
					quantity: filteredTransactionItemObject.quantity,
				})
			);
			//Compiling every transaction made per item
			transactionItemsFiltered.forEach(function (obj) {
				var productNameX = obj.productName;
				if (!this[productNameX])
					TotalItemsSoldPerItem.push((this[productNameX] = obj));
				else this[productNameX].quantity += obj.quantity;
			}, Object.create(null));

			this.setState({
				labels: TotalItemsSoldPerItem.map((x) => x.productName),
				data: TotalItemsSoldPerItem.map((x) => x.quantity),
			});
		}
	}

	render() {
		return (
			<div className='chart'>
				<Bar
					data={{
						labels: this.state.labels,
						datasets: [
							{
								label: 'Product',
								fill: false,
								data: this.state.data,
								backgroundColor: '#5bc0de',
							},
						],
					}}
					options={{
						title: {
							display: true,
							text: 'Number of Items Sold Per Item',
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

export default ChartItemTrans;
