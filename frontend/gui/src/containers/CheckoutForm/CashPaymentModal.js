import React from 'react';
import PropTypes from 'prop-types';
import { numberWithCommas } from '../../Helpers/functions';
const CashPaymentModal = (props) => {
	const { onChange, handleSetAmountTendered, handleClick } = props;
	const { totalAmount, amount_tendered, change } = props.state;
	return (
		<div>
			{/* <div
				className='modal fade'
				id='CheckoutPaymentMOdal'
				tabIndex='-1'
				role='dialog'
				aria-labelledby='exampleModalCenterTitle'
				aria-hidden='true'
			>
				<div
					className='modal-dialog modal-dialog-centered modal-lg '
					role='document'
				>
					<div className='modal-content borderCust'>
						<div className='modal-header borderCustUpperBody2 borderCustGen'>
							<button
								type='button'
								className='close'
								data-dismiss='modal'
								aria-label='Close'
							>
								<span aria-hidden='true'>&times;</span>
							</button>
						</div>

						<div className='modal-body d-flex justify-content-between borderCustUpperBody borderCustGen'>
							<h2 className='pl-5' id='exampleModalLongTitle'>
								Amount To Pay
							</h2>
							<h2 className='pr-5' id='exampleModalLongTitle'>
								<strong>₱{numberWithCommas(totalAmount)}</strong>
							</h2>
						</div>
						<div className='modal-body borderCustGen'>
							<h2 className='pl-5' id='exampleModalLongTitle'>
								Amount given by Customer
							</h2>
							<div className='form-inline mt-5'>
								<div className='input-group col-lg-3'>
									<input
										type='text'
										className='form-control mb-3 text-center'
										onChange={onChange}
										value={amount_tendered}
										name='amount_tendered'
										style={{ height: '4.5rem', fontSize: '2em' }}
										aria-label='Amount (to the nearest dollar)'
									/>
								</div>
								<div className='col-lg-3'>
									<button
										type='button'
										onClick={handleSetAmountTendered(totalAmount)}
										className='btn btn-secondary btn-lg btn-block mb-3'
									>
										<strong>₱{numberWithCommas(totalAmount)}</strong>
									</button>
								</div>
								<div className='col-lg-3'>
									<button
										type='button'
										onClick={handleSetAmountTendered(
											Math.ceil(totalAmount / 100) * 100
										)}
										className='btn btn-secondary btn-lg btn-block mb-3'
									>
										<strong>
											₱{numberWithCommas(Math.ceil(totalAmount / 100) * 100)}
										</strong>
									</button>
								</div>
								<div className='col-lg-3'>
									<button
										type='button'
										onClick={handleSetAmountTendered(
											Math.ceil(totalAmount / 1000) * 1000
										)}
										className='btn btn-secondary btn-lg btn-block '
									>
										<strong>
											₱{numberWithCommas(Math.ceil(totalAmount / 1000) * 1000)}
										</strong>
									</button>
								</div>
							</div>
							<button
								type='button'
								data-dismiss='modal'
								data-toggle='modal'
								data-target='#TransactionFinishModal'
								className='btn btn-secondary btn-lg btn-block '
							>
								<strong>Confirm Payment</strong>
							</button>
						</div>
					</div>
				</div>
			</div> */}

			<div
				className='modal fade'
				id='CashPaymentModal'
				tabindex='-1'
				data-bs-backdrop='static'
				data-bs-keyboard='false'
				aria-labelledby='exampleModalLabel'
				aria-hidden='true'
			>
				<div className='modal-dialog modal-lg'>
					<div className='modal-content'>
						<div className='modal-header'>
							<button
								type='button'
								className='btn-light btn-close'
								data-bs-dismiss='modal'
								aria-label='Close'
							></button>
						</div>
						<div className='modal-body'>
							<div className='d-flex justify-content-around'>
								<h2 className=''>Amount To Pay</h2>
								<h2 className=''>
									₱<strong>{numberWithCommas(totalAmount)}</strong>
								</h2>
							</div>
							<div className='d-flex justify-content-between'>
								<input
									className='form-control form-control-lg text-center'
									type='text'
									placeholder='Amount tendered by the customer'
									onChange={onChange}
									value={amount_tendered > 0 ? amount_tendered : ''}
									name='amount_tendered'
								/>
							</div>
							<div className='d-flex justify-content-between mt-3'>
								<button
									type='button'
									onClick={handleSetAmountTendered(totalAmount)}
									className='btn btn-secondary btn-lg col-xl-3'
								>
									₱<strong>{numberWithCommas(totalAmount)}</strong>
								</button>
								<button
									type='button'
									onClick={handleSetAmountTendered(
										Math.ceil(totalAmount / 100) * 100
									)}
									className='btn btn-secondary btn-lg col-xl-3'
								>
									<strong>
										₱{numberWithCommas(Math.ceil(totalAmount / 100) * 100)}
									</strong>
								</button>
								<button
									type='button'
									onClick={handleSetAmountTendered(
										Math.ceil(totalAmount / 1000) * 1000
									)}
									className='btn btn-secondary btn-lg col-xl-3'
								>
									<strong>
										₱{numberWithCommas(Math.ceil(totalAmount / 1000) * 1000)}
									</strong>
								</button>
							</div>
						</div>

						<div className='modal-footer'>
							<button
								type='button'
								data-bs-target='#TransactionFinishModal'
								data-bs-toggle='modal'
								data-bs-dismiss='modal'
								onClick={handleClick}
								disabled={change < 0 ? true : false}
								className='btn btn-primary btn-lg col-12'
							>
								<strong>Confirm Payment</strong>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
CashPaymentModal.propTypes = {
	numberWithCommas: PropTypes.func.isRequired,
	handleClick: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	state: PropTypes.object.isRequired,
};
export default CashPaymentModal;
