import React from 'react';
import PropTypes from 'prop-types';
import { numberWithCommas } from '../../Helpers/functions';
const PaypalPaymentModal = (props) => {
	const { onChange, handleSetAmountTendered, handleClick } = props;
	const { totalAmount, amount_tendered, change } = props.state;
	return (
		<div>
			<div
				className='modal fade'
				id='PaypalPaymentModal'
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
							<div id='paypal-button-container'></div>
						</div>

						<div className='modal-footer'></div>
					</div>
				</div>
			</div>
		</div>
	);
};
// PaypalPaymentModal.propTypes = {
// 	numberWithCommas: PropTypes.func.isRequired,
// 	handleClick: PropTypes.func.isRequired,
// 	onChange: PropTypes.func.isRequired,
// 	state: PropTypes.object.isRequired,
// };
export default PaypalPaymentModal;
