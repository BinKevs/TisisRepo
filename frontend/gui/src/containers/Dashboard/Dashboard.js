import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProductList } from '../../store/actions/Product/products';
import { getTransactionList } from '../../store/actions/Transaction/transactions';
import { getTransactionItemList } from '../../store/actions/Transaction/transactions.js';
let transactionItemsFiltered = [];
var transactionItemsFilteredResult = [];
let transactionsFilteredDateSeparated = [];
let monthlySalesTransaction = 0;
let dailySalesTransaction = 0;
let totalSalesTransaction = 0;
let ReorderProduct = 0;
let ZeroProduct = 0;
let ProductCount = 0;

export class Dashboard extends Component {
	static propTypes = {
		products: PropTypes.array.isRequired,
		transactions: PropTypes.array.isRequired,
		transaction_items: PropTypes.array.isRequired,
		getProductList: PropTypes.func.isRequired,
		getTransactionList: PropTypes.func.isRequired,
		getTransactionItemList: PropTypes.func.isRequired,
	};
	numberWithCommas(x) {
		return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
	}

	// getting the props from product reducer, transaction list reducer, transaction item list reducer

	componentDidMount() {
		this.props.getProductList();
		this.props.getTransactionList();
		this.props.getTransactionItemList();
	}

	render() {
		transactionsFilteredDateSeparated = [];

		monthlySalesTransaction = 0;
		dailySalesTransaction = 0;
		totalSalesTransaction = 0;
		ReorderProduct = 0;
		ZeroProduct = 0;
		ProductCount = 0;
		const DateNow = Date().toLocaleString().split(' ');
		//Fetch montly sales
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
		//Fetch daily sales
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
		//Fetch total sales
		this.props.transactions.map(
			(filteredTransactionObject) =>
				(totalSalesTransaction += parseInt(
					filteredTransactionObject.totalAmount
				))
		);
		//Fetch reorder product
		this.props.products
			.filter((prod) => parseInt(prod.stock) < 10)
			.map((product) => (ReorderProduct += 1));
		//Fetch zero product
		this.props.products
			.filter((prod) => parseInt(prod.stock) < 1)
			.map((product) => (ZeroProduct += 1));
		//Fetch all product
		this.props.products.map((product) => (ProductCount += 1));
		//Fetch Combine product quantity sales
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

		return (
			<>
				<div>
					<div className='container'>
						<div className='row mb-4 text-secondary'>
							<div className='col-xl-4 text-center '>
								<div className='card_cust p-3'>
									<div style={{ fontSize: '2em' }}>
										<i class='fal fa-coin'></i>
									</div>
									<h2 className='text-dark'>
										₱{this.numberWithCommas(totalSalesTransaction)}
									</h2>
									<hr />
									<h4>Total Sales</h4>
								</div>
							</div>
							<div className='col-xl-4 text-center'>
								<div className='card_cust p-3'>
									<div style={{ fontSize: '2em' }}>
										<i className='fad fa-calendar-alt'></i>
									</div>
									<h2 className='text-dark'>
										₱{this.numberWithCommas(monthlySalesTransaction)}
									</h2>
									<hr />
									<h4>Monthly Sales (January)</h4>
								</div>
							</div>
							<div className='col-xl-4 text-center'>
								<div className='card_cust p-3'>
									<div style={{ fontSize: '2em' }}>
										<i className='fad fa-calendar-day'></i>
									</div>
									<h2 className='text-dark'>
										₱{this.numberWithCommas(dailySalesTransaction)}
									</h2>
									<hr />
									<h4>Daily Sales</h4>
								</div>
							</div>
						</div>
						<div className='row mb-4 text-secondary'>
							<div className='col-xl-4 text-center'>
								<div className='card_cust p-3'>
									<div style={{ fontSize: '2em' }}>
										<i className='fad fa-layer-plus'></i>
									</div>

									<h2 className='text-dark'>
										{this.numberWithCommas(ReorderProduct)}
									</h2>
									<hr />
									<h4>Number of Products to be Reorder</h4>
								</div>
							</div>
							<div className='col-xl-4 text-center'>
								<div className='card_cust p-3'>
									<div style={{ fontSize: '2em' }}>
										<i className='fad fa-dolly-flatbed-empty'></i>
									</div>

									<h2 className='text-dark'>
										{this.numberWithCommas(ZeroProduct)}
									</h2>
									<hr />
									<h4>Number of Zero Stock Products</h4>
								</div>
							</div>
							<div className='col-xl-4 text-center'>
								<div className='card_cust p-3'>
									<div style={{ fontSize: '2em' }}>
										<i className='fad fa-cubes'></i>
									</div>

									<h2 className='text-dark'>
										{this.numberWithCommas(ProductCount)}
									</h2>
									<hr />
									<h4>Products</h4>
								</div>
							</div>
						</div>
						<div className='row mb-4'>
							<div className='col-xl-8'>
								<div className='card_cust p-5'>
									<h2 className='text-danger'>
										We're running out of stock in the following items
									</h2>
									<table className='table table-striped'>
										<thead>
											<tr>
												<th className='text-center'>ID</th>
												<th className='text-center'>Name</th>
												<th className='text-center'>Stock</th>
											</tr>
										</thead>
										<tbody>
											{this.props.products
												.filter((prod) => prod.stock < 10)
												.map((product) => (
													<tr key={product.id}>
														<td className='text-center'>{product.id}</td>
														<td className='text-center'>{product.name}</td>
														<td className='text-center'>{product.stock}</td>
													</tr>
												))}
										</tbody>
									</table>
								</div>
							</div>
							<div className='col-xl-4'>
								<div className='card_cust p-5'>
									<h2 className='text-dark'>Top Selling Product</h2>
									<table className='table table-striped'>
										<thead>
											<tr>
												<th className='text-center'>ID</th>
												<th className='text-center'>Name</th>
												<th className='text-center'>Quantity Sold</th>
											</tr>
										</thead>
										<tbody>
											{transactionItemsFilteredResult
												.sort((a, b) => (a.quantity < b.quantity ? 1 : -1))
												.slice(0, 4)
												.map((item) => (
													<tr key={item.id}>
														<td className='text-center'>{item.id}</td>
														<td className='text-center'>{item.productName}</td>
														<td className='text-center'>{item.quantity}</td>
													</tr>
												))}
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
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
