import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Bar, Line } from 'react-chartjs-2';
import {
	getTransactionItemList,
	getTransactionListNotOrderByDate,
} from '../../store/actions/transaction/transactions.js';
import { getCategoryList } from '../../store/actions/product/products';
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
let filterDates = [];
let DateNow = Date().toLocaleString().split(' ');
class SalesReport extends React.Component {
	state = {
		StartingDate: '',
		EndingDate: '',
		category: '',
		dropdown: false,
	};

	componentDidMount() {
		this.props.getTransactionItemList();
		this.props.getTransactionListNotOrderByDate();
		this.props.getCategoryList();
	}
	handleCategory(CategoryName) {
		return (event) => {
			event.preventDefault();
			this.setState({
				category: CategoryName,
				dropdown: !this.state.dropdown,
			});
		};
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
	getDates(startDate, endDate) {
		const dates = [];
		let currentDate = startDate;
		const addDays = function (days) {
			const date = new Date(this.valueOf());
			date.setDate(date.getDate() + days);
			return date;
		};
		while (currentDate < endDate) {
			currentDate = addDays.call(currentDate, 1);
			dates.push(currentDate);
		}
		return dates;
	}
	componentDidUpdate(prevProps, prevState) {}
	render() {
		let [start, end] = this.GetWeekDates();
		var StartDayOfTheWeek = new Date(start.toLocaleString());
		var EndDayOfTheWeek = new Date(end.toLocaleString());

		// Usage
		const dates = this.getDates(StartDayOfTheWeek, EndDayOfTheWeek);

		console.log(dates);

		transactionsFilteredDateSeparated = [];
		transactionsForMonthlyFiltered = [];
		transactionsForWeeklyFiltered = [];
		transactionsForDailyFiltered = [];
		transactionPerItemsFiltered = [];
		TotalItemsSoldPerItem = [];
		TotalSaleMonthlyPerDay = [];
		TotalSaleDailyPerDay = [];
		TotalSaleWeeklyPerDay = [];

		filterDates = [];
		// var StartDayOfTheWeek = new Date(start.toLocaleString().split(',')[0])
		// 	.toString()
		// 	.split(' ');
		// var EndDayOfTheWeek = new Date(end.toLocaleString().split(',')[0])
		// 	.toString()
		// 	.split(' ');
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
		dates.map((filterDate) =>
			filterDates.push({
				month: filterDate.toString().split(' ')[1],
				day: filterDate.toString().split(' ')[2],
				year: filterDate.toString().split(' ')[3],
			})
		);
		for (var i = 0; i < transactionsFilteredDateSeparated.length; i++) {
			var month = transactionsFilteredDateSeparated[i].month;
			var day = transactionsFilteredDateSeparated[i].day;
			var year = transactionsFilteredDateSeparated[i].year;
			for (var y = 0; y < filterDates.length; y++) {
				var monthSearching = filterDates[y].month;
				var daySearching = filterDates[y].day;
				var yearSearching = filterDates[y].year;
				if (
					monthSearching === month &&
					daySearching === day &&
					yearSearching === year
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
		}
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
		}

		//Sales per product

		//Destructuring for the ease of sorting which is which is sold
		this.props.transaction_items.map((filteredTransactionItemObject) =>
			transactionPerItemsFiltered.push({
				id: filteredTransactionItemObject.id,
				productName: filteredTransactionItemObject.product_info.name,
				quantity: filteredTransactionItemObject.quantity,
				category: filteredTransactionItemObject.category_info.name,
			})
		);

		// //Compiling every transaction made per item
		transactionPerItemsFiltered.forEach(function (obj) {
			var productNameX = obj.productName;
			if (!this[productNameX])
				TotalItemsSoldPerItem.push((this[productNameX] = obj));
			else this[productNameX].quantity += obj.quantity;
		}, Object.create(null));
		const lowercasedFilter = this.state.category;
		const filteredData = TotalItemsSoldPerItem.filter((item) => {
			// return Object.keys(item).some((key) =>
			// 	item[key].toString().includes(lowercasedFilter)
			// );
			{
				return lowercasedFilter !== ''
					? item.category === lowercasedFilter
					: item;
			}
		});
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
					<div class="w-11/12 flex-auto flex flex-col items-end mt-6">
						<div class="flex flex-col items-center relative">
							<div class="w-full  ">
								<div class="my-2 bg-white p-1 flex border border-gray-200 rounded ">
									<div class="flex flex-auto flex-wrap"></div>
									<input
										value={this.state.category}
										class="p-1 px-2 appearance-none outline-none w-full text-gray-800"
									/>
									<div>
										<button
											onClick={() => {
												this.setState({
													category: '',
												});
											}}
											class="cursor-pointer w-6 h-full flex items-center text-gray-400 outline-none focus:outline-none"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="100%"
												height="100%"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
												class="feather feather-x w-4 h-4"
											>
												<line x1="18" y1="6" x2="6" y2="18"></line>
												<line x1="6" y1="6" x2="18" y2="18"></line>
											</svg>
										</button>
									</div>
									<div
										onClick={() => {
											this.setState({
												dropdown: !this.state.dropdown,
											});
										}}
										class="text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200 "
									>
										<button class="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none">
											<i
												class={
													this.state.dropdown
														? 'fad fa-angle-up'
														: 'fad fa-angle-down'
												}
											></i>
										</button>
									</div>
								</div>
							</div>
							<div
								class={
									this.state.dropdown
										? 'absolute shadow top-100 z-40 w-full lef-0 rounded max-h-select overflow-y-auto'
										: 'absolute shadow top-100 z-40 w-full lef-0 rounded max-h-select overflow-y-auto hidden'
								}
							>
								<div class="flex flex-col w-full">
									{this.props.categories.map((category) => (
										<div
											onClick={this.handleCategory(category.name)}
											class="cursor-pointer w-full border-gray-100 rounded-t border-b hover:bg-teal-100"
										>
											<div class="flex w-full items-center p-2 pl-2 border-transparent bg-white border-l-2 relative hover:bg-teal-600 hover:text-teal-100 hover:border-teal-600">
												<div class="w-full items-center flex">
													<div class="mx-2 leading-6  ">{category.name} </div>
												</div>
											</div>
										</div>
									))}
									{/* <div class="cursor-pointer w-full border-gray-100 border-b hover:bg-teal-100 ">
										<div class="flex w-full items-center p-2 pl-2 border-transparent bg-white border-l-2 relative hover:bg-teal-600 hover:text-teal-100 border-teal-600">
											<div class="w-full items-center flex">
												<div class="mx-2 leading-6  ">Javascript </div>
											</div>
										</div>
									</div> */}
								</div>
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
										labels: filteredData.map((x) => x.productName),
										datasets: [
											{
												label: DateNow[1] + ' ' + DateNow[3] + ' Sales',
												fill: false,
												data: filteredData.map((x) => x.quantity),
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
	categories: state.products.categories,
});

export default connect(mapStateToProps, {
	getTransactionItemList,
	getTransactionListNotOrderByDate,
	getCategoryList,
})(SalesReport);
