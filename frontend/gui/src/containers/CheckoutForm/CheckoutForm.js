import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
	removeFromCart,
	changeCartValue,
} from '../../store/actions/Cart/cartActions';
import { clearCart } from '../../store/actions/Cart/cartActions';
import { addTransactionItems } from '../../store/actions/Transaction/transactions';
import CheckOutPaymentModal from './CheckOutPaymentModal';
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
		change: 0,
		transanction_id: 0,
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
		this.props.addTransactionItems(data);
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
		this.props.cartItems.map(
			(item) => (VariableTotalAmount += item.price * item.quantity)
		);
		this.setState({
			totalAmount: HandleDecimalPlaces(VariableTotalAmount),
			Subtotal: HandleDecimalPlaces(
				(VariableTotalAmount -= VariableTotalAmount * 0.12)
			),
			tax: HandleDecimalPlaces(VariableTotalAmount * 0.12),
		});
	}
	// This will compute the change and if the confirm payment can be clicked or not

	componentDidUpdate(prevProps, prevState) {
		if (this.state.amount_tendered !== prevState.amount_tendered) {
			this.setState({
				change: this.state.amount_tendered - this.state.totalAmount,
			});
			console.log(this.state);
		}
	}

	render() {
		const { cartItems } = this.props;
		const { Subtotal, tax, totalAmount } = this.state;
		return (
			<div>
				{/* Passing the state, onChange, and handleSetAmountTendered to CheckoutPaymentMOdal */}
				<CheckOutPaymentModal
					state={this.state}
					onChange={this.onChange}
					handleSetAmountTendered={this.handleSetAmountTendered}
				/>
				{/* Passing the state and handleClick to TransactionFinish */}
				<TransactionFinish state={this.state} handleClick={this.handleClick} />

				<div className='row'>
					<div className='col-lg-5'>
						<div>
							<div className='card card_cust mb-3'>
								<div className='card-body'>
									<div className='card-title'>
										<h4>Sale Summary</h4>
									</div>
									<ul className='list-group list-group-flush'>
										<div>
											<li className='list-group-item d-flex align-items-stretch '>
												<div className='text-center'>Quantity</div>
												<span className='text-center' style={{ width: '9rem' }}>
													Name
												</span>
												<span className='text-center'>Price</span>
												<span className='text-center'>Total Price</span>
											</li>
										</div>
									</ul>
									<ul className='list-group list-group-flush'>
										<div className='overflow-auto' style={{ height: '32rem' }}>
											{cartItems.map((item) => (
												<li
													key={item.product_id}
													className='list-group-item d-flex align-items-stretch border-0'
												>
													<span className='d-flex align-items-center'>
														{item.quantity}
													</span>
													<span
														className='d-flex align-items-center'
														style={{ width: '9rem' }}
													>
														{item.product_name}
													</span>
													<span
														className='d-flex align-items-center mr-3'
														style={{ width: '5rem' }}
													>
														₱{item.price}
													</span>
													<span className='d-flex align-items-center'>
														₱{item.price * item.quantity}
													</span>
												</li>
											))}
										</div>
									</ul>

									<ul className='list-group list-group-flush'>
										<li className='list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0'>
											Subtotal
											<span>₱{numberWithCommas(Subtotal)}</span>
										</li>
										<li className='list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3'>
											<div>Tax</div>
											<span>₱{numberWithCommas(tax)}</span>
										</li>
										<li className='list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3'>
											<div>
												<h3>
													<strong>Total</strong>
												</h3>
											</div>
											<span>
												<h3>
													<strong>₱{numberWithCommas(totalAmount)}</strong>
												</h3>
											</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className='col-lg-7 '>
						<div className='card_cust p-5'>
							<div className='row'>
								<div className='col-lg-3'>
									<h1 className='display-3 text-secondary'>Pay</h1>
								</div>
								<div className='col-lg-9'>
									<div className='card text-center'>
										<div className='card-body'>
											<p className='card-text display-4'>
												<span>
													<strong>₱{numberWithCommas(totalAmount)}</strong>
												</span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className='row mt-5'>
								<div className='col-md-6 col-lg-4 '>
									<button
										type='button'
										data-toggle='modal'
										data-target='#CheckoutPaymentMOdal'
										className='btn btn-primary btn-lg btn-block mb-3'
									>
										Cash
									</button>
								</div>
								<div className='col-md-6 col-lg-4'>
									<button
										type='button'
										className='btn btn-primary btn-lg btn-block mb-3'
									>
										Gcash
									</button>
								</div>
								<div className='col-lg-4'>
									<button
										type='button'
										className='btn btn-primary btn-lg btn-block '
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
