import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const FormAdd = (props) => {
	const { products, suppliers } = props;
	const { new_stock } = props.state;
	const { onChange, onAddSubmit } = props;
	return (
		<div>
			<div
				className='modal fade'
				id='InventoryModalFormAdd'
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
							<h2 class='modal-title'>Add Inventory</h2>
							<button
								type='button'
								className='close'
								data-dismiss='modal'
								aria-label='Close'
							>
								<span aria-hidden='true'>&times;</span>
							</button>
						</div>
						<div className='card card-body modal-body'>
							<div className='form-group'>
								<label>Stock quantity</label>
								<input
									className='form-control'
									type='number'
									id='example-number-input'
									name='new_stock'
									onChange={onChange}
									value={new_stock}
								/>
							</div>
							<div className='form-group'>
								<label>Select product</label>
								{/* <input
									className='form-control custom-select custom-select-lg'
									onChange={onChange}
									placeholder='-------'
									name='product'
									list='list'
								/>
								<datalist id='list'>
									{products.map((product) => (
										<option
											value={product.id + ' - ' + product.name}
											key={product.id}
										></option>
									))}
								</datalist> */}
								<select
									className='form-control'
									name='product'
									id='exampleFormControlSelect1'
									onChange={onChange}
								>
									{/* render lists of products */}
									{products.map((productItem) => (
										<option value={productItem.id} key={productItem.id}>
											{productItem.name}
										</option>
									))}
								</select>
							</div>
							<div className='form-group'>
								<label>Select supplier</label>
								{/* <input
                  className='form-control custom-select custom-select-lg'
                  onChange={onChange}
                  placeholder='-------'
                  name='supplier'
                  list='supplier-list'
                />
                <datalist id='supplier-list'>
                  {suppliers.map((supplier) => (
                    <option
                      value={supplier.id + " - " + supplier.name}
                      key={supplier.id}></option>
                  ))}
                </datalist> */}
								<select
									onChange={onChange}
									name='supplier'
									className='form-control selectpickers'
									id='exampleFormControlSelect1'
								>
									{/* render the list of supplier */}
									{suppliers.map((supplierItem) => (
										<option value={supplierItem.id} key={supplierItem.id}>
											{supplierItem.name}
										</option>
									))}
								</select>
							</div>
						</div>

						<div className='form-group container'>
							<button onClick={onAddSubmit} className='btn btn-primary'>
								Add
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
FormAdd.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	state: PropTypes.object.isRequired,
	suppliers: PropTypes.array.isRequired,
	products: PropTypes.array.isRequired,
};

export default connect(null, {})(FormAdd);
