import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProductList } from '../../store/actions/Product/products';
import { getTransactionList } from '../../store/actions/Transaction/transactions';
import { getTransactionItemList } from '../../store/actions/Transaction/transactions.js';
import { Line } from 'react-chartjs-2';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import * as CgIcons from 'react-icons/cg';
import * as BiIcons from 'react-icons/bi';

import { IconContext } from 'react-icons';
let coloR = [];
let transactionsFiltered = [];
let transactionItemsFiltered = [];
var transactionItemsFilteredResult = [];
let monthlySalesTransaction = 0;
let dailySalesTransaction = 0;
let totalSalesTransaction = 0;
let ReorderProduct = 0;
let ZeroProduct = 0;
let ProductCount = 0;
let transactionsFilteredDateSeparated = [];
export class Dashboard extends Component {
	static propTypes = {
		accounts: PropTypes.array.isRequired,
		getAccountList: PropTypes.func.isRequired,
	};
	numberWithCommas(x) {
		return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
	}
	// constructor(props) {
	// 	super(props);

	// 	this.state = {
	// 		labels: {},
	// 		data: {},
	// 	};
	// }
	componentDidMount() {
		this.props.getProductList();
		this.props.getTransactionList();
		this.props.getTransactionItemList();
	}

	// onEz = (event) => {
	// transactionItemsFiltered = [];
	// result = [];

	// this.props.transaction_items.map((filteredTransactionItemObject) =>
	// 	transactionItemsFiltered.push({
	// 		id: filteredTransactionItemObject.id,
	// 		productName: filteredTransactionItemObject.product_info.name,
	// 		quantity: filteredTransactionItemObject.quantity,
	// 	})
	// );

	// transactionItemsFiltered.forEach(function (obj) {
	// 	var productNameX = obj.productName;
	// 	if (!this[productNameX]) result.push((this[productNameX] = obj));
	// 	else this[productNameX].quantity += obj.quantity;
	// }, Object.create(null));

	// 	console.log(result.sort((a, b) => (a.quantity < b.quantity ? 1 : -1)));
	// };
	// onEz2 = (event) => {
	// 	console.log(transactionItemsFiltered);
	// 	console.log(result);
	// };
	render() {
		transactionsFilteredDateSeparated = [];

		monthlySalesTransaction = 0;
		dailySalesTransaction = 0;
		totalSalesTransaction = 0;
		ReorderProduct = 0;
		ZeroProduct = 0;
		ProductCount = 0;
		const DateNow = Date().toLocaleString().split(' ');
		this.props.transactions
			.filter(
				(transaction) =>
					transaction.created_at.includes(DateNow[1]) &&
					transaction.created_at.includes(DateNow[3])
			)
			.map(
				(filteredTransactionObject) =>
					(monthlySalesTransaction += parseInt(
						filteredTransactionObject.totalAmount
					))
			);
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
		transactionsFilteredDateSeparated
			.filter(
				(transaction) =>
					transaction.month.includes(DateNow[1]) &&
					transaction.day.includes(DateNow[2]) &&
					transaction.year.includes(DateNow[3])
			)
			.map(
				(filteredTransactionObject) =>
					(dailySalesTransaction += parseInt(
						filteredTransactionObject.totalAmount
					))
			);
		this.props.transactions.map(
			(filteredTransactionObject) =>
				(totalSalesTransaction += parseInt(
					filteredTransactionObject.totalAmount
				))
		);

		this.props.products
			.filter((prod) => parseInt(prod.stock) < 10)
			.map((product) => (ReorderProduct += 1));
		this.props.products
			.filter((prod) => parseInt(prod.stock) < 1)
			.map((product) => (ZeroProduct += 1));
		this.props.products.map((product) => (ProductCount += 1));

		transactionItemsFiltered = [];
		transactionItemsFilteredResult = [];

		this.props.transaction_items.map((filteredTransactionItemObject) =>
			transactionItemsFiltered.push({
				id: filteredTransactionItemObject.id,
				productName: filteredTransactionItemObject.product_info.name,
				quantity: filteredTransactionItemObject.quantity,
			})
		);

		transactionItemsFiltered.forEach(function (obj) {
			var productNameX = obj.productName;
			if (!this[productNameX])
				transactionItemsFilteredResult.push((this[productNameX] = obj));
			else this[productNameX].quantity += obj.quantity;
		}, Object.create(null));

		var dynamicColors = function () {
			var r = Math.floor(Math.random() * 255);
			var g = Math.floor(Math.random() * 255);
			var b = Math.floor(Math.random() * 255);
			return 'rgba(' + r + ',' + g + ',' + b + ',' + 0.6 + ')';
		};
		for (let i = 0; i < transactionsFiltered.length; i++) {
			coloR.push(dynamicColors());
		}

		return (
			<Fragment>
				<IconContext.Provider value={{ color: '#536878' }}>
					<div className='container'>
						{/* <button
            className='btn btn-outline-secondary'
            onClick={this.onEz}
            style={{ fontSize: "1.5em" }}>
            xxxxxxx
          </button>
           */}
						{/* <button
							className='btn btn-outline-secondary'
							onClick={this.onEz}
							style={{ fontSize: '1.5em' }}
						>
							yyyyyyyy
						</button> */}
						<div className='row text-primary'>
							<div className='col-xl-4 text-center '>
								<div className='card_cust p-3'>
									<div style={{ fontSize: '2em' }}>
										<FaIcons.FaDollarSign />
									</div>
									<h2>₱{this.numberWithCommas(totalSalesTransaction)}</h2>
									<hr />
									<h4 className='text-secondary'>Total Sales</h4>
								</div>
							</div>
							<div className='col-xl-4 text-center'>
								<div className='card_cust p-3'>
									<div style={{ fontSize: '2em' }}>
										<CgIcons.CgViewMonth />
									</div>
									<h2>₱{this.numberWithCommas(monthlySalesTransaction)}</h2>
									<hr />
									<h4 className='text-secondary'>Monthly Sales (January)</h4>
								</div>
							</div>
							<div className='col-xl-4 text-center'>
								<div className='card_cust p-3'>
									<div style={{ fontSize: '2em' }}>
										<MdIcons.MdToday />
									</div>
									<h2>₱{this.numberWithCommas(dailySalesTransaction)}</h2>
									<hr />
									<h4 className='text-secondary'>Daily Sales</h4>
								</div>
							</div>
						</div>
						<div className='row text-primary'>
							<div className='col-xl-4 text-center'>
								<div className='card_cust p-3'>
									<div style={{ fontSize: '2em' }}>
										<FaIcons.FaPlus />
									</div>

									<h2>{this.numberWithCommas(ReorderProduct)}</h2>
									<hr />
									<h4 className='text-secondary'>
										Number of Products to be Reorder
									</h4>
								</div>
							</div>
							<div className='col-xl-4 text-center'>
								<div className='card_cust p-3'>
									<div style={{ fontSize: '2em' }}>
										<MdIcons.MdExposureZero />
									</div>

									<h2>{this.numberWithCommas(ZeroProduct)}</h2>
									<hr />
									<h4 className='text-secondary'>
										Number of Zero Stock Products
									</h4>
								</div>
							</div>
							<div className='col-xl-4 text-center'>
								<div className='card_cust p-3'>
									<div style={{ fontSize: '2em' }}>
										<BiIcons.BiPackage />
									</div>

									<h2>{this.numberWithCommas(ProductCount)}</h2>
									<hr />
									<h4 className='text-secondary'>Products</h4>
								</div>
							</div>
						</div>
						<div className='row'>
							<div className='col-xl-8'>
								<div className='card_cust p-5'>
									<h2 className='text-danger'>
										We're running out of stock in the following items
									</h2>
									<table className='table table-striped'>
										<thead>
											<tr>
												<th>ID</th>
												<th>Name</th>
												<th>Stock</th>
											</tr>
										</thead>
										<tbody>
											{this.props.products
												.filter((prod) => prod.stock < 10)
												.map((product) => (
													<tr key={product.id}>
														<td>{product.id}</td>
														<td>{product.name}</td>
														<td>{product.stock}</td>
													</tr>
												))}
										</tbody>
									</table>
								</div>
							</div>
							<div className='col-xl-4'>
								<div className='card_cust p-5'>
									<h2 className='text-primary'>Top Selling Product</h2>
									<table className='table table-striped'>
										<thead>
											<tr>
												<th>ID</th>
												<th>Name</th>
												<th>Quantity Sold</th>
											</tr>
										</thead>
										<tbody>
											{transactionItemsFilteredResult
												.sort((a, b) => (a.quantity < b.quantity ? 1 : -1))
												.slice(0, 4)
												.map((item) => (
													<tr key={item.id}>
														<td>{item.id}</td>
														<td>{item.productName}</td>
														<td>{item.quantity}</td>
													</tr>
												))}
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</IconContext.Provider>
			</Fragment>
		);
	}
}

const mapStateToProps = (state) => ({
	products: state.products.products,
	transactions: state.transactions.transactions,
	transaction_items: state.transactions.transaction_item_list,
});

export default connect(mapStateToProps, {
	getProductList,
	getTransactionList,
	getTransactionItemList,
})(Dashboard);
