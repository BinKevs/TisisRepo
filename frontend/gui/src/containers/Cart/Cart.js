import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
	removeFromCart,
	changeCartValue,
} from '../../store/actions/Cart/cartActions';
import * as AiIcons from 'react-icons/ai';

export class Cart extends Component {
	static propTypes = {
		removeFromCart: PropTypes.func.isRequired,
		changeCartValue: PropTypes.func.isRequired,
		cartItems: PropTypes.array.isRequired,
	};
	state = {
		totalAmount: 0,
		Subtotal: 0,
		tax: 0,
		quantity: 0,
	};
	// When the quantity fields change, this function will change the quantity state value and take a item product id to be pass to store-actions-cartAction-
	// changeCartValue together with type,id(or the product id) and the value
	onChange(id) {
		return (event) => {
			this.props.changeCartValue('type', id, event.target.value);
			this.setState({ [this.state.quantity]: event.target.value });
		};
	}

	HandleDecimalPlaces = (Variable) => {
		return Math.round((Variable + Number.EPSILON) * 100) / 100;
	};

	numberWithCommas(x) {
		return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
	}
	// On component load or the app load it will look for the cartItems values from cartReducer *The cartReducer is always check if there are any values from local storage and store it to state*
	// and this CDM get the props pass by cartReducer to render it and compute for totalAmount, sub amount and tax.
	componentDidMount() {
		let VariableTotalAmount = 0;
		this.props.cartItems.map(
			(item) => (VariableTotalAmount += item.price * item.quantity)
		);
		this.setState({
			totalAmount: this.HandleDecimalPlaces(VariableTotalAmount),
			Subtotal: this.HandleDecimalPlaces(
				(VariableTotalAmount -= VariableTotalAmount * 0.12)
			),
			tax: this.HandleDecimalPlaces(VariableTotalAmount * 0.12),
		});
	}
	// This component did update will watch over the props from cartReducer so if the user changes
	//the quantity or delete it the component will update what to render and compute the total amount, subtotal, and tax automatically
	componentDidUpdate(prevProps) {
		if (this.props.cartItems !== prevProps.cartItems) {
			let VariableTotalAmount = 0;
			this.props.cartItems.map(
				(item) => (VariableTotalAmount += item.price * item.quantity)
			);
			this.setState({
				totalAmount: this.HandleDecimalPlaces(VariableTotalAmount),
				Subtotal: this.HandleDecimalPlaces(
					(VariableTotalAmount -= VariableTotalAmount * 0.12)
				),
				tax: this.HandleDecimalPlaces(VariableTotalAmount * 0.12),
			});
		}
	}
	render() {
		const { cartItems, changeCartValue, removeFromCart } = this.props;
		const { Subtotal, tax, totalAmount } = this.state;
		return (
			<>
				<div className='card card_cust mb-3 text-center'>
					<div className='card-body'>
						<div className='card-title'>
							<h2>Cart</h2>
						</div>
						<ul className='list-group list-group-flush'>
							<div>
								<li className='list-group-item d-flex justify-content-between'>
									<div className='text-center'>Quantity</div>
									<span className='text-center' style={{ width: '9rem' }}>
										Name
									</span>
									<span className='text-center'>Price</span>
									<span className='text-center'>Delete</span>
								</li>
							</div>
						</ul>
						<ul className='list-group list-group-flush'>
							<div className='overflow-auto' style={{ height: '25rem' }}>
								{cartItems.map((item) => (
									<li
										key={item.product_id}
										className='list-group-item d-flex align-items-center table-responsive'
									>
										<div className='d-flex align-items-center'>
											<button
												type='button'
												className='btn btn-light btn-sm d-inline'
												onClick={() => {
													changeCartValue('plus', item.product_id);
												}}
											>
												+
											</button>

											<input
												className='form-control d-inline'
												type='text'
												style={{
													width: '45px',
													fontSize: '10px',
													textAlign: 'center',
												}}
												value={item.quantity}
												onChange={this.onChange(item.product_id)}
											/>

											<button
												type='button'
												className='btn btn-light btn-sm d-inline'
												onClick={() => {
													changeCartValue('minus', item.product_id);
												}}
											>
												-
											</button>
										</div>
										<span
											className='d-flex align-items-center'
											style={{ width: '9rem' }}
										>
											{item.product_name}
										</span>
										<span className='d-flex align-items-center'>
											₱{item.price}
										</span>
										<span
											className='d-flex align-items-center '
											style={{ width: '4rem', height: '4rem' }}
										>
											{/* remove a item to the cart passing product item to be receive by removeFromCart in the cartActions */}
											<button
												type='button'
												style={{ fontSize: '1.5em' }}
												className='btn btn-block btn-outline-danger p-0'
												onClick={() => removeFromCart(item)}
											>
												<AiIcons.AiOutlineDelete />
											</button>
										</span>
									</li>
								))}
							</div>
						</ul>

						<ul className='list-group list-group-flush'>
							<li className='list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0'>
								Subtotal
								<span>₱ {this.numberWithCommas(Subtotal)}</span>
							</li>
							<li className='list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3'>
								<div>
									<strong>Tax</strong>
								</div>
								<span>
									<strong>₱{this.numberWithCommas(tax)}</strong>
								</span>
							</li>
						</ul>
						{/* Redirect to the checkout page */}
						<Link to='/checkout'>
							<button
								type='button'
								className='btn d-flex justify-content-between btn-primary btn-block waves-effect waves-light px-5 py-3'
							>
								<div>Pay</div>
								<span>₱{this.numberWithCommas(totalAmount)}</span>
							</button>
						</Link>
					</div>
				</div>
			</>
		);
	}
}
// get cartItems from cartReducer
const mapToStateToProps = (state) => ({
	cartItems: state.cartReducer.cartItems,
});
export default connect(mapToStateToProps, {
	removeFromCart,
	changeCartValue,
})(Cart);
