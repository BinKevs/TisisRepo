import React from 'react';
import PropTypes from 'prop-types';
const TransactionFinish = (props) => {
	const { numberWithCommas, handleClick } = props;
	const { change } = props.state;
	return (
		<div>
			<div
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
							<h2 class='modal-title'>Change</h2>
							<button
								type='button'
								className='close'
								onClick={handleClick}
								data-dismiss='modal'
								aria-label='Close'
							>
								<span aria-hidden='true'>&times;</span>
							</button>
						</div>
						<div className='card card-body modal-body p-5'>
							<h1 class='container'>${numberWithCommas(change)}</h1>
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
