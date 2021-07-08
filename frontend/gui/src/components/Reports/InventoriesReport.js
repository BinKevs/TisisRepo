import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Bar, Line } from 'react-chartjs-2';
import { getInventoryListNotOrderByDate } from '../../store/actions/inventory/inventories.js';

let DateNow = Date().toLocaleString().split(' ');
class InventoriesReport extends React.Component {
	static propTypes = {
		inventories: PropTypes.array.isRequired,
		getInventoryList: PropTypes.func.isRequired,
	};
	componentDidMount() {
		this.props.getInventoryListNotOrderByDate();
	}

	render() {
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
										labels: this.props.inventories.map((x) => x.created_at),
										datasets: [
											{
												label: DateNow[1] + ' ' + DateNow[3] + ' Sales',
												fill: false,
												data: this.props.inventories.map((x) => x.new_stock),
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
