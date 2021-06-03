import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
	removeFromCart,
	changeCartValue,
} from '../../store/actions/Cart/cartActions';
import { clearCart } from '../../store/actions/Cart/cartActions';
import { addTransactionItems } from '../../store/actions/Transaction/transactions';
import CashPaymentModal from './CashPaymentModal';
import PaypalPaymentModal from './PaypalPaymentModal';

import TransactionFinish from './TransactionFinish';
import { HandleDecimalPlaces, numberWithCommas } from '../../Helpers/functions';
class CheckOutForm extends Component {
	static propTypes = {
		removeFromCart: PropTypes.func.isRequired,
		changeCartValue: PropTypes.func.isRequired,
		addTransactionItems: PropTypes.func.isRequired,
		cartItems: PropTypes.array.isRequired,
	};
	state = {
		totalAmount: 0,
		Subtotal: 0,
		tax: 0,
		amount_tendered: 0,
		change: -1,
		transanction_id: 0,
		TotalQuantity: 0,
	};
	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	// This will handle the submittion of data from cartItems, and state that will finish the transaction the data will go to store-action-transaction-transactions-addTransactionItems
	handleClick = (event) => {
		event.preventDefault();
		let quantity = 0;
		this.props.cartItems.map((item) => (quantity += item.quantity));
		const { totalAmount, amount_tendered, change } = this.state;
		const items = this.props.cartItems;
		const data = { totalAmount, amount_tendered, change, quantity, items };
		console.log(data);
		this.props.addTransactionItems(data);
		// this.props.clearCart();
		// this.props.history.push('/products');
	};
	//Clearing the cart and push to go to /products
	handleClickFinish = (event) => {
		event.preventDefault();
		this.props.clearCart();
		this.props.history.push('/products');
	};
	// This will set the amount tendered field to the user payment
	handleSetAmountTendered = (AmountTendered) => {
		return (event) => {
			event.preventDefault();
			this.setState({
				amount_tendered: AmountTendered,
			});
		};
	};
	// This will load the cart items to be rendered and also to compute for the total amount, sub total and the tax;
	componentDidMount() {
		let VariableTotalAmount = 0;
		let TotalQuantity = 0;
		this.props.cartItems.map(
			(item) => (
				(VariableTotalAmount += item.price * item.quantity),
				(TotalQuantity += item.quantity)
			)
		);
		this.setState({
			totalAmount: HandleDecimalPlaces(VariableTotalAmount),
			Subtotal: HandleDecimalPlaces(
				(VariableTotalAmount -= VariableTotalAmount * 0.12)
			),
			TotalQuantity,
			tax: HandleDecimalPlaces(VariableTotalAmount * 0.12),
		});
	}
	// This will compute the change and if the confirm payment can be clicked or not

	componentDidUpdate(prevProps, prevState) {
		if (this.state.amount_tendered !== prevState.amount_tendered) {
			this.setState({
				change: HandleDecimalPlaces(
					this.state.amount_tendered - this.state.totalAmount
				),
			});
			console.log(this.state);
		}
	}

	render() {
		const { cartItems } = this.props;
		const { Subtotal, tax, totalAmount, TotalQuantity } = this.state;
		return (
			<div>
				{/* Passing the state, onChange, handleSetAmountTendered and handleClick to CheckoutPaymentMOdal  */}
				<CashPaymentModal
					state={this.state}
					onChange={this.onChange}
					handleSetAmountTendered={this.handleSetAmountTendered}
					handleClick={this.handleClick}
				/>
				{/* Passing the state to TransactionFinish */}
				<TransactionFinish
					state={this.state}
					handleClickFinish={this.handleClickFinish}
				/>
				<PaypalPaymentModal
					state={this.state}
					onChange={this.onChange}
					handleSetAmountTendered={this.handleSetAmountTendered}
					handleClick={this.handleClick}
				/>
				<div className='row'>
					<div className='col-lg-5'>
						<div className='card-body card_cust'>
							<div className='card-title'>
								<h2>Sale Summary</h2>
							</div>
							<div className='row align-items-center pb-2 text-center h5'>
								<div className='col'>Quantity</div>
								<div className='col'>Name</div>
								<div className='col'>Price</div>
								<div className='col'>Total Price</div>
							</div>
							<div>
								<div className='overflow-auto' style={{ height: '55vh' }}>
									{cartItems.map((item) => (
										<div className='d-flex justify-content-between align-items-center text-center'>
											<p className='col h6'>{item.quantity}</p>
											<p className='col h6'>{item.product_name}</p>
											<p className='col h6'>₱{item.price}</p>
											<p className='col h6'>₱{item.price * item.quantity}</p>
										</div>
									))}
								</div>

								<div className='h5'>
									<div className='d-flex justify-content-between align-items-center py-2'>
										<span> Subtotal </span>
										<span>₱{numberWithCommas(Subtotal)}</span>
									</div>
									<div className='d-flex justify-content-between align-items-center'>
										<span> Tax </span>
										<span>₱{numberWithCommas(tax)}</span>
									</div>
									<div className='d-flex justify-content-between align-items-center '>
										<span> Total Number of items </span>
										<span>{numberWithCommas(TotalQuantity)}</span>
									</div>
									<div className='d-flex justify-content-between align-items-center h2'>
										<span> Total </span>
										<span>
											₱<strong>{numberWithCommas(totalAmount)}</strong>
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='col-lg-7 p-4'>
						<div className='card_cust p-4'>
							<div className='d-flex justify-content-between align-items-center'>
								<h1 className='display-4'>Pay</h1>
								<h1 className='display-4'>
									<strong>₱{numberWithCommas(totalAmount)}</strong>
								</h1>
							</div>
							<div className='row mt-3'>
								<div className='col-xl-4 col-md-4  col-12'>
									<button
										type='button'
										data-bs-toggle='modal'
										data-bs-target='#CashPaymentModal'
										className='btn btn-primary btn-lg mb-3 col-12'
									>
										Cash
									</button>
								</div>

								<div className='col-xl-4 col-md-4 col-12'>
									<button
										type='button'
										data-bs-toggle='modal'
										data-bs-target='#PaypalPaymentModal'
										className='btn btn-primary btn-lg mb-3 col-12'
									>
										Paypal
									</button>
								</div>
								<div className='col-xl-4 col-md-4 col-12'>
									<button
										type='button'
										className='btn btn-primary btn-lg col-12'
									>
										Gift Card
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapToStateToProps = (state) => ({
	cartItems: state.cartReducer.cartItems,
});
export default connect(mapToStateToProps, {
	removeFromCart,
	changeCartValue,
	addTransactionItems,
	clearCart,
})(CheckOutForm);
