import React from 'react';
import PropTypes from 'prop-types';
import { HandleDecimalPlaces, numberWithCommas } from '../../Helpers/functions';

const TransactionFinish = (props) => {
	const { change } = props.state;
	const { handleClickFinish } = props;
	return (
		<div>
			{/* <div
				className='modal fade'
				id='TransactionFinishModal'
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
						<div className='modal-header borderCustUpperBody2 '>
							<h2 class='modal-title '>Transaction Successfully Completed</h2>
							<button
								type='button'
								className='close'
								data-dismiss='modal'
								aria-label='Close'
							>
								<span aria-hidden='true'>&times;</span>
							</button>
						</div>
						<div className='card card-body modal-body p-auto text-center'>
							<div style={{ fontSize: '8em' }}>
								<BsIcons.BsCheckCircle />
							</div>
							<h1>Change : ₱{numberWithCommas(HandleDecimalPlaces(change))}</h1>
						</div>
					</div>
				</div>
			</div> */}

			<div
				className='modal fade'
				data-bs-backdrop='static'
				data-bs-keyboard='false'
				id='TransactionFinishModal'
				tabindex='-1'
			>
				<div className='modal-dialog'>
					<div className='modal-content'>
						<div className='modal-header'>
							<button
								type='button'
								className='btn-close'
								data-bs-dismiss='modal'
								aria-label='Close'
								onClick={handleClickFinish}
							></button>
						</div>
						<div className='modal-body text-center'>
							<h2>Transaction Successfully Completed</h2>
							<h1>Change : ₱{numberWithCommas(HandleDecimalPlaces(change))}</h1>
							<div style={{ fontSize: '8em' }}>
								<i className='far fa-check-circle'></i>
							</div>
						</div>
						<div className='modal-footer'>
							<button
								type='button'
								className='btn btn-secondary'
								data-bs-dismiss='modal'
								onClick={handleClickFinish}
							>
								Close
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
TransactionFinish.propTypes = {
	state: PropTypes.object.isRequired,
};
export default TransactionFinish;
