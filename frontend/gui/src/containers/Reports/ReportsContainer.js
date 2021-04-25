import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import { getProductList } from '../../store/actions/Product/products';
import { getInventoryList } from '../../store/actions/Inventory/inventories.js';
import { getTransactionList } from '../../store/actions/Transaction/transactions';
import ChartInv from './Charts/chartInventory';
import ChartProd from './Charts/chartProduct';
import ChartItemTrans from './Charts/chartItemTransaction';
import ChartMonthlySales from './Charts/ChartMonthlySales';
import ChartDailySales from './Charts/ChartDailySales';

import { getTransactionItemList } from '../../store/actions/Transaction/transactions.js';

export class ReportsContainer extends Component {
	static propTypes = {
		products: PropTypes.array.isRequired,
		inventories: PropTypes.array.isRequired,
		getProductList: PropTypes.func.isRequired,
		getInventoryList: PropTypes.func.isRequired,
	};
	componentDidMount() {
		this.props.getProductList();
		this.props.getInventoryList();
		this.props.getTransactionItemList();
		this.props.getTransactionList();
	}

	render() {
		return (
			<Fragment>
				<div className='container'>
					<div className='row'>
						<div className='col-12 p-5'>
							<h2>Daily Sales Statistics</h2>
							<ChartDailySales chartData={this.props.transactions} />
						</div>
						<div className='col-12 p-5'>
							<ChartMonthlySales chartData={this.props.transactions} />
						</div>
						<div className='col-12 m-auto p-5'>
							<h2>Inventory Statistics</h2>
							<ChartInv chartData={this.props.inventories} />
						</div>
						<div className='col-12 m-auto p-5'>
							<h2>Stocks Statistics</h2>
							<ChartProd chartData={this.props.products} />
						</div>
						<div className='col-12 m-auto p-5'>
							<h2>Sold Per Item Statistics</h2>
							<ChartItemTrans chartData={this.props.transaction_items} />
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

const mapStateToProps = (state) => ({
	products: state.products.products,
	inventories: state.inventories.inventories,
	transaction_items: state.transactions.transaction_item_list,
	transactions: state.transactions.transactions,
});

export default connect(mapStateToProps, {
	getProductList,
	getInventoryList,
	getTransactionItemList,
	getTransactionList,
})(ReportsContainer);
