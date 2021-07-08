import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Bar, Line } from 'react-chartjs-2';
import {
	getTransactionItemList,
	getTransactionListNotOrderByDate,
} from '../../store/actions/transaction/transactions.js';
import DatePicker from 'react-datepicker';
let transactionsForDailyFiltered = [];
let transactionsForMonthlyFiltered = [];
let transactionsForWeeklyFiltered = [];
let transactionsFilteredDateSeparated = [];
let transactionPerItemsFiltered = [];
let TotalItemsSoldPerItem = [];
let TotalSaleMonthlyPerDay = [];
let TotalSaleDailyPerDay = [];
let TotalSaleWeeklyPerDay = [];
let DateNow = Date().toLocaleString().split(' ');
class SalesReport extends React.Component {
	state = {
		StartingDate: '',
		EndingDate: '',
	};
	componentDidMount() {
		this.props.getTransactionItemList();
		this.props.getTransactionListNotOrderByDate();
	}
	GetWeekDates() {
		let now = new Date();
		let dayOfWeek = now.getDay(); //0-6
		let numDay = now.getDate();

		let start = new Date(now); //copy
		start.setDate(numDay - dayOfWeek);
		start.setHours(0, 0, 0, 0);

		let end = new Date(now); //copy
		end.setDate(numDay + (7 - dayOfWeek));
		end.setHours(0, 0, 0, 0);

		return [start, end];
	}
	componentDidUpdate(prevProps, prevState) {}
	render() {
		transactionsFilteredDateSeparated = [];
		transactionsForMonthlyFiltered = [];
		transactionsForWeeklyFiltered = [];
		transactionsForDailyFiltered = [];
		transactionPerItemsFiltered = [];
		TotalItemsSoldPerItem = [];
		TotalSaleMonthlyPerDay = [];
		TotalSaleDailyPerDay = [];
		TotalSaleWeeklyPerDay = [];
		let [start, end] = this.GetWeekDates();
		var StartDayOfTheWeek = new Date(start.toLocaleString().split(',')[0])
			.toString()
			.split(' ');
		var EndDayOfTheWeek = new Date(end.toLocaleString().split(',')[0])
			.toString()
			.split(' ');
		this.props.transactions.map((filteredTransactionObject) =>
			transactionsFilteredDateSeparated.push({
				id: filteredTransactionObject.id,
				totalAmount: filteredTransactionObject.totalAmount,
				month: filteredTransactionObject.created_at.split(' ')[0],
				day: filteredTransactionObject.created_at.split(' ')[1],
				year: filteredTransactionObject.created_at.split(' ')[2],
				time: filteredTransactionObject.created_at.split(' ')[3],
			})
		);

		for (var i = 0; i < transactionsFilteredDateSeparated.length; i++) {
			var month = transactionsFilteredDateSeparated[i].month;
			var day = transactionsFilteredDateSeparated[i].day;
			var year = transactionsFilteredDateSeparated[i].year;
			//Fetch montly sales
			if (year === DateNow[3]) {
				if (month === DateNow[1]) {
					// DateNow[1]
					transactionsForMonthlyFiltered.push({
						totalAmount: transactionsFilteredDateSeparated[i].totalAmount,
						date:
							transactionsFilteredDateSeparated[i].month +
							' ' +
							transactionsFilteredDateSeparated[i].day,
					});
					//Fetch daily sales
					if (day === DateNow[2]) {
						// DateNow[2]
						if (
							parseInt(
								transactionsFilteredDateSeparated[i].time.split(':')[0]
							) < 12
						) {
							transactionsForDailyFiltered.push({
								totalAmount: transactionsFilteredDateSeparated[i].totalAmount,
								date:
									transactionsFilteredDateSeparated[i].time.split(':')[0] +
									':' +
									transactionsFilteredDateSeparated[i].time.split(':')[1] +
									' AM',
							});
						} else {
							if (
								parseInt(
									transactionsFilteredDateSeparated[i].time.split(':')[0]
								) === 12
							) {
								transactionsForDailyFiltered.push({
									totalAmount: transactionsFilteredDateSeparated[i].totalAmount,
									date:
										parseInt(
											transactionsFilteredDateSeparated[i].time.split(':')[0]
										) +
										':' +
										transactionsFilteredDateSeparated[i].time.split(':')[1] +
										' PM',
								});
							} else {
								transactionsForDailyFiltered.push({
									totalAmount: transactionsFilteredDateSeparated[i].totalAmount,
									date:
										parseInt(
											transactionsFilteredDateSeparated[i].time.split(':')[0]
										) -
										12 +
										':' +
										transactionsFilteredDateSeparated[i].time.split(':')[1] +
										' PM',
								});
							}
						}
					}
				}
			}

			if (
				year.includes(StartDayOfTheWeek[3]) &&
				year.includes(EndDayOfTheWeek[3])
			) {
				// if (
				// 	month.includes(StartDayOfTheWeek[1]) &&
				// 	month.includes(EndDayOfTheWeek[1])
				// ) {
				if (StartDayOfTheWeek[1] !== EndDayOfTheWeek[1]) {
					if (
						(month === StartDayOfTheWeek[1] && day > StartDayOfTheWeek[2]) ||
						(month === EndDayOfTheWeek[1] && day <= EndDayOfTheWeek[2])
					) {
						transactionsForWeeklyFiltered.push({
							totalAmount: transactionsFilteredDateSeparated[i].totalAmount,
							date: new Date(
								transactionsFilteredDateSeparated[i].day +
									' ' +
									transactionsFilteredDateSeparated[i].month +
									' ' +
									transactionsFilteredDateSeparated[i].year
							),
						});
					}
				} else {
					if (
						month === StartDayOfTheWeek[1] &&
						day > StartDayOfTheWeek[2] &&
						month === EndDayOfTheWeek[1] &&
						day <= EndDayOfTheWeek[2]
					) {
						transactionsForWeeklyFiltered.push({
							totalAmount: transactionsFilteredDateSeparated[i].totalAmount,
							date: new Date(
								transactionsFilteredDateSeparated[i].day +
									' ' +
									transactionsFilteredDateSeparated[i].month +
									' ' +
									transactionsFilteredDateSeparated[i].year
							),
						});
					}
				}
				// }
			}
		}

		//Sales per product

		//Destructuring for the ease of sorting which is which is sold
		this.props.transaction_items.map((filteredTransactionItemObject) =>
			transactionPerItemsFiltered.push({
				id: filteredTransactionItemObject.id,
				productName: filteredTransactionItemObject.product_info.name,
				quantity: filteredTransactionItemObject.quantity,
			})
		);
		// //Compiling every transaction made per item
		transactionPerItemsFiltered.forEach(function (obj) {
			var productNameX = obj.productName;
			if (!this[productNameX])
				TotalItemsSoldPerItem.push((this[productNameX] = obj));
			else this[productNameX].quantity += obj.quantity;
		}, Object.create(null));

		transactionsForMonthlyFiltered.forEach(function (obj) {
			var dateX = obj.date;
			if (!this[dateX]) TotalSaleMonthlyPerDay.push((this[dateX] = obj));
			else
				this[dateX].totalAmount =
					parseInt(this[dateX].totalAmount) + parseInt(obj.totalAmount);
		}, Object.create(null));

		transactionsForDailyFiltered.forEach(function (obj) {
			var dateX = obj.date;
			if (!this[dateX]) TotalSaleDailyPerDay.push((this[dateX] = obj));
			else
				this[dateX].totalAmount =
					parseInt(this[dateX].totalAmount) + parseInt(obj.totalAmount);
		}, Object.create(null));
		transactionsForWeeklyFiltered.forEach(function (obj) {
			var dateX = obj.date;
			if (!this[dateX]) TotalSaleWeeklyPerDay.push((this[dateX] = obj));
			else
				this[dateX].totalAmount =
					parseInt(this[dateX].totalAmount) + parseInt(obj.totalAmount);
		}, Object.create(null));

		return (
			<>
				<div class="flex-1 bg-gray-100 mt-28 md:mt-16 pb-24 md:pb-5">
					<div class="bg-gray-800 pt-3">
						<div
							class="
							rounded-tl-3xl
							bg-gradient-to-r
							from-teal_custom
							to-gray-800
							p-4
							shadow
							text-2xl text-white
						"
						>
							<h3 class="font-bold pl-2">Reports</h3>
						</div>
					</div>
					<div className="mx-auto w-11/12 mt-6 flex justify-end space-x-3">
						<div class="flex">
							<span class="text-sm  border-2 rounded-l px-4 py-2 bg-gray-300 whitespace-no-wrap">
								Start:
							</span>
							<DatePicker
								selected={this.state.StartingDate}
								onChange={(date) => this.setState({ StartingDate: date })}
								value={this.state.StartingDate}
								closeOnScroll={true}
								placeholderText="Starting Date"
								className="px-4 py-2 border-2 rounded-r"
							/>
						</div>
						<div class="flex">
							<span class="text-sm  border-2 rounded-l px-4 py-2 bg-gray-300 whitespace-no-wrap">
								End:
							</span>
							<DatePicker
								selected={this.state.EndingDate}
								onChange={(date) => this.setState({ EndingDate: date })}
								value={this.state.EndingDate}
								closeOnScroll={true}
								placeholderText="Ending Date"
								className="px-4 py-2 border-2 rounded-r"
							/>
						</div>

						<button
							type="submit"
							class="text-white bg-gray-800 px-4 py-2 rounded"
						>
							Fetch Sale
						</button>
					</div>
					<div className="mx-auto w-11/12 mt-6 p-3">
						<div className="bg-white shadow-lg p-4">
							<div className="relative w-full max-w-full flex-grow">
								<h6 className="uppercase text-gray-600 mb-1 text-sm font-semibold">
									Sales
								</h6>
								<h2 className="text-gray-800 mb-2 text-2xl font-semibold">
									Daily
								</h2>
							</div>
							<div className="chart">
								<Bar
									data={{
										labels: TotalSaleDailyPerDay.map((x) => x.date),
										datasets: [
											{
												label:
													DateNow[0] +
													' ' +
													DateNow[1] +
													' ' +
													DateNow[2] +
													' ' +
													DateNow[3] +
													' Sales',
												fill: false,
												data: TotalSaleDailyPerDay.map((x) => x.totalAmount),
												backgroundColor: '#3AAFA9',
											},
										],
									}}
									options={{
										responsive: true,
										plugins: {
											legend: {
												position: 'top',
												align: 'end',
												labels: {
													font: {
														size: 15,
													},
												},
											},
										},
									}}
								/>
							</div>
						</div>
					</div>
					<div className="mx-auto w-11/12 mt-6 p-3">
						<div className="bg-white shadow-lg p-4">
							<div className="relative w-full max-w-full flex-grow">
								<h6 className="uppercase text-gray-600 mb-1 text-sm font-semibold">
									Sales
								</h6>
								<h2 className="text-gray-800 mb-2 text-2xl font-semibold">
									Weekly
								</h2>
							</div>
							<div className="chart">
								<Bar
									data={{
										labels: TotalSaleWeeklyPerDay.map(
											(x) => x.date.toString().split(' ')[0]
										),
										datasets: [
											{
												label: DateNow[1] + ' ' + DateNow[3] + ' Sales',
												fill: false,
												data: TotalSaleWeeklyPerDay.map((x) => x.totalAmount),
												backgroundColor: '#3AAFA9',
											},
										],
									}}
									options={{
										responsive: true,
										plugins: {
											legend: {
												position: 'top',
												align: 'end',
												labels: {
													font: {
														size: 15,
													},
												},
											},
										},
									}}
								/>
							</div>
						</div>
					</div>
					<div className="mx-auto w-11/12 mt-6 p-3">
						<div className="bg-white shadow-lg p-4">
							<div className="relative w-full max-w-full flex-grow">
								<h6 className="uppercase text-gray-600 mb-1 text-sm font-semibold">
									Sales
								</h6>
								<h2 className="text-gray-800 mb-2 text-2xl font-semibold">
									Monthly
								</h2>
							</div>
							<div className="chart">
								<Bar
									data={{
										labels: TotalSaleMonthlyPerDay.map((x) => x.date),
										datasets: [
											{
												label: DateNow[1] + ' ' + DateNow[3] + ' Sales',
												fill: false,
												data: TotalSaleMonthlyPerDay.map((x) => x.totalAmount),
												backgroundColor: '#3AAFA9',
											},
										],
									}}
									options={{
										responsive: true,
										plugins: {
											legend: {
												position: 'top',
												align: 'end',
												labels: {
													font: {
														size: 15,
													},
												},
											},
										},
									}}
								/>
							</div>
						</div>
					</div>

					<div className="mx-auto w-11/12 mt-6 p-3">
						<div className="bg-white shadow-lg p-4">
							<div className="relative w-full max-w-full flex-grow">
								<h6 className="uppercase text-gray-600 mb-1 text-sm font-semibold">
									Transactions
								</h6>
								<h2 className="text-gray-800 mb-2 text-2xl font-semibold">
									Sales Overview Per Product Item
								</h2>
							</div>
							<div className="chart">
								<Bar
									data={{
										labels: TotalItemsSoldPerItem.map((x) => x.productName),
										datasets: [
											{
												label: DateNow[1] + ' ' + DateNow[3] + ' Sales',
												fill: false,
												data: TotalItemsSoldPerItem.map((x) => x.quantity),
												backgroundColor: '#3AAFA9',
											},
										],
									}}
									options={{
										responsive: true,
										plugins: {
											legend: {
												position: 'top',
												align: 'end',
												labels: {
													font: {
														size: 15,
													},
												},
											},
										},
									}}
								/>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}
const mapStateToProps = (state) => ({
	transaction_items: state.transactions.transaction_item_list,
	transactions: state.transactions.transactions,
});

export default connect(mapStateToProps, {
	getTransactionItemList,
	getTransactionListNotOrderByDate,
})(SalesReport);
