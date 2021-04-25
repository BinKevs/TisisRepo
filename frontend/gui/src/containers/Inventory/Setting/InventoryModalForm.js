import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const InventoryModalForm = (props) => {
	const {
		products,
		suppliers,
		onChange,
		onAddSubmit,
		onUpdateSubmit,
		EditButtonIsClicked,
		onEditCloseButton,
	} = props;
	const { new_stock, product, supplier, inventoryID } = props.state;
	return (
		<div>
			<div
				className='modal fade'
				id='InventoryModalForm'
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
								Inventory {!EditButtonIsClicked ? 'Add' : 'Update'}
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
									type='number'
									className='form-control'
									name='new_stock'
									onChange={onChange}
									placeholder='New Stock'
									value={new_stock > 0 ? new_stock : ''}
								/>
								<label for='stock quantity' className='text-secondary'>
									Stock quantity
								</label>
							</div>
							<div className='form-floating mb-3'>
								<select
									className={
										product === 0 ? 'form-select text-secondary' : 'form-select'
									}
									name='product'
									onChange={onChange}
								>
									{/* render lists of products */}
									{product === 0 ? (
										<option selected>Open this to select product</option>
									) : (
										''
									)}

									{products.map((productItem) => (
										<option
											selected={productItem.id === product ? 'selected' : ''}
											value={productItem.id}
											className='text-dark'
											key={productItem.id}
										>
											{productItem.name}
										</option>
									))}
								</select>
								<label for='product'>Select product</label>
							</div>
							<div className='mb-3'>
								<label for='supplier' className='col-form-label'>
									Select supplier
								</label>

								<select
									onChange={onChange}
									name='supplier'
									className='form-select'
								>
									{supplier === 0 ? (
										<option selected>Open this to select category</option>
									) : (
										''
									)}

									{/* render the list of supplier */}
									{suppliers.map((supplierItem) => (
										<option
											selected={supplierItem.id === supplier ? 'selected' : ''}
											value={supplierItem.id}
											key={supplierItem.id}
										>
											{supplierItem.name}
										</option>
									))}
								</select>
							</div>
						</div>
						<div className='modal-footer'>
							<button
								type='submit'
								onClick={
									!EditButtonIsClicked
										? onAddSubmit
										: onUpdateSubmit(inventoryID)
								}
								data-bs-dismiss='modal'
								className='btn btn-primary'
							>
								{!EditButtonIsClicked ? 'Add-Inventory' : 'Update-Inventory'}
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
InventoryModalForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	state: PropTypes.object.isRequired,
	suppliers: PropTypes.array.isRequired,
	products: PropTypes.array.isRequired,
};

export default connect(null, {})(InventoryModalForm);
