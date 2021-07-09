import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Bar, Line } from 'react-chartjs-2';
import { getInventoryListNotOrderByDate } from '../../store/actions/inventory/inventories.js';
import DatePicker from 'react-datepicker';
let DateNow = Date().toLocaleString().split(' ');
let inventoriesFilteredDateSeparated = [];
let fetchInventoriesFiltered = [];
class InventoriesReport extends React.Component {
	static propTypes = {
		inventories: PropTypes.array.isRequired,
		getInventoryList: PropTypes.func.isRequired,
	};
	state = {
		StartingDate: '',
		EndingDate: '',
	};
	componentDidMount() {
		this.props.getInventoryListNotOrderByDate();
	} 
	

	render() {
		inventoriesFilteredDateSeparated = [];
		fetchInventoriesFiltered = [];
		this.props.inventories.map((filteredInventoryObject) =>
			inventoriesFilteredDateSeparated.push({
				id: filteredInventoryObject.id,
				added_stock: filteredInventoryObject.new_stock,
				product: filteredInventoryObject.product_info.name,
				month: filteredInventoryObject.created_at.split(' ')[0],
				day: filteredInventoryObject.created_at.split(' ')[1],
				year: filteredInventoryObject.created_at.split(' ')[2],
				time: filteredInventoryObject.created_at.split(' ')[3],
			})
		);
		var StartDay = new Date(
			this.state.StartingDate.toLocaleString().split(',')[0]
		)
			.toString()
			.split(' ');
		var EndDay = new Date(this.state.EndingDate.toLocaleString().split(',')[0])
			.toString()
			.split(' ');
		// console.log(inventoriesFilteredDateSeparated);
		// console.log(StartDay);
		// console.log(EndDay);
		// for (var i = 0; i < inventoriesFilteredDateSeparated.length; i++) {
		// 	var month = inventoriesFilteredDateSeparated[i].month;
		// 	var day = inventoriesFilteredDateSeparated[i].day;
		// 	var year = inventoriesFilteredDateSeparated[i].year;

		// 	if (
		// 		year.includes(StartDay[3]) &&
		// 		year.includes(EndDay[3])
		// 	) {
		// 		if (StartDay[1] !== EndDay[1]) {
		// 			if (
		// 				(month === StartDay[1] && day > StartDay[2]) ||
		// 				(month === EndDay[1] && day <= EndDay[2])
		// 			) {
		// 				fetchInventoriesFiltered.push({
		// 					added_stock: inventoriesFilteredDateSeparated[i].added_stock,
		// 					date: new Date(
		// 						inventoriesFilteredDateSeparated[i].day +
		// 							' ' +
		// 							inventoriesFilteredDateSeparated[i].month +
		// 							' ' +
		// 							inventoriesFilteredDateSeparated[i].year
		// 					),
		// 				});
		// 			}
		// 		} else {
		// 			if (
		// 				month === StartDay[1] &&
		// 				day > StartDay[2] &&
		// 				month === EndDay[1] &&
		// 				day <= EndDay[2]
		// 			) {
		// 				fetchInventoriesFiltered.push({
		// 					added_stock: inventoriesFilteredDateSeparated[i].added_stock,
		// 					date: new Date(
		// 						inventoriesFilteredDateSeparated[i].day +
		// 							' ' +
		// 							inventoriesFilteredDateSeparated[i].month +
		// 							' ' +
		// 							inventoriesFilteredDateSeparated[i].year
		// 					),
		// 				});
		// 			}
		// 		}
		// 	}
		// }
		// Returns an array of dates between the two dates



		console.log(fetchInventoriesFiltered)
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
							Fetch Inventory
						</button>
					</div>
					<div className="mx-auto w-11/12 mt-6 p-3">
						<div className="bg-white shadow-lg p-4 ">
							<div className="relative w-full max-w-full flex-grow">
								<h6 className="uppercase text-gray-600 mb-1 text-sm font-semibold">
									Inventories
								</h6>
								<h2 className="text-gray-800 mb-2 text-2xl font-semibold">
									Overview
								</h2>
							</div>
							<div className="chart">
								<Line
									data={{
										labels: fetchInventoriesFiltered.map((x) => x.date),
										datasets: [
											{
												label: DateNow[1] + ' ' + DateNow[3] + ' Sales',
												fill: false,
												data: fetchInventoriesFiltered.map((x) => x.added_stock),
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
	inventories: state.inventories.inventories,
});

export default connect(mapStateToProps, {
	getInventoryListNotOrderByDate,
})(InventoriesReport);
