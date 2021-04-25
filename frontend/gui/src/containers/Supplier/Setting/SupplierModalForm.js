import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const SupplierModalForm = (props) => {
	const { name, address, phone_number, supplierID } = props.state;
	const {
		onChange,
		onAddSubmit,
		EditButtonIsClicked,
		onEditCloseButton,
		onUpdateSubmit,
	} = props;
	return (
		<>
			<div
				className='modal fade'
				id='SupplierModalForm'
				tabindex='-1'
				data-bs-backdrop='static'
				data-bs-keyboard='false'
				aria-labelledby='exampleModalLabel'
				aria-hidden='true'
			>
				<div className='modal-dialog modal-lg modal-dialog-scrollable'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title'>
								Supplier {!EditButtonIsClicked ? 'Add' : 'Update'}
							</h5>

							<button
								type='button'
								className='btn-light btn-close'
								onClick={!EditButtonIsClicked ? '' : onEditCloseButton}
								data-bs-dismiss='modal'
								aria-label='close'
							></button>
						</div>
						<div className='modal-body'>
							<div className='form-floating mb-3'>
								<input
									type='text'
									className='form-control'
									name='name'
									onChange={onChange}
									value={name}
									placeholder='Name'
								/>
								<label for='name' className='text-secondary'>
									Name
								</label>
							</div>
							<div className='form-floating mb-3'>
								<textarea
									className='form-control'
									name='address'
									onChange={onChange}
									value={address}
									placeholder='Address'
									style={{ height: '80px' }}
								></textarea>
								<label for='address' className='text-secondary'>
									Address
								</label>
							</div>
							<div className='form-floating mb-3'>
								<input
									type='tel'
									className='form-control'
									name='phone_number'
									onChange={onChange}
									value={phone_number}
									placeholder='Telephone'
								/>
								<label for='telephone' className='text-secondary'>
									Telephone
								</label>
							</div>
						</div>
						<div className='modal-footer'>
							<button
								type='submit'
								onClick={
									!EditButtonIsClicked
										? onAddSubmit
										: onUpdateSubmit(supplierID)
								}
								data-bs-dismiss='modal'
								className='btn btn-primary'
							>
								{!EditButtonIsClicked ? 'Add-Supplier' : 'Update-Supplier'}
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default connect(null, {})(SupplierModalForm);
