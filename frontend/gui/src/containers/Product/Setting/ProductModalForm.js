import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as AiIcons from 'react-icons/ai';

const ProductModalForm = (props) => {
	const {
		suppliers,
		categories,
		onChange,
		onAddSubmit,
		EditButtonIsClicked,
		onEditCloseButton,
		isImageChanged,
		onUpdateSubmit,
	} = props;
	const {
		name,
		description,
		price,
		category,
		supplier,
		stock,
		image,
		productID,
		urlFile,
	} = props.state;
	return (
		<>
			<div
				className='modal fade'
				id='ProductModalForm'
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
								Product {!EditButtonIsClicked ? 'Add' : 'Update'}
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
									id='name'
									placeholder='Name'
								/>
								<label for='name' className='text-secondary'>
									Name
								</label>
							</div>

							<div className='form-floating mb-3'>
								<textarea
									className='form-control'
									name='description'
									onChange={onChange}
									value={description}
									placeholder='Description'
									style={{ height: '100px' }}
								></textarea>
								<label for='description' className='text-secondary'>
									Description
								</label>
							</div>
							<div className='mb-3'>
								<label for='image' className='col-form-label'>
									Image
								</label>
								<input
									type='file'
									name='image'
									onChange={onChange}
									className='form-control mb-3'
								/>
								{!EditButtonIsClicked ? (
									''
								) : (
									<img
										style={{ width: '10rem', height: '10rem' }}
										className='img-fluid mb-3'
										src={isImageChanged ? urlFile : image}
									/>
								)}
							</div>
							<button
								data-bs-target='#CategoryModalForm'
								data-bs-toggle='modal'
								data-bs-dismiss='modal'
								className='btn btn-primary mb-3'
							>
								Add-New-Category
							</button>
							<div className='form-floating mb-3'>
								<select
									onChange={onChange}
									name='category'
									className={
										category === 0
											? 'form-select text-secondary'
											: 'form-select'
									}
								>
									{category === 0 ? (
										<option selected>Open this to select category</option>
									) : (
										''
									)}
									{categories.map((category1) => (
										<option
											selected={category1.id === category ? 'selected' : ''}
											value={category1.id}
											className='text-dark'
											key={category1.id}
										>
											{category1.name}
										</option>
									))}
								</select>
								<label for='category'>Select Category</label>
							</div>
							<div className='mb-3'>
								<label for='supplier'>Select Supplier</label>
								<select
									onChange={onChange}
									name='supplier'
									className={
										supplier === 0
											? 'form-select text-secondary'
											: 'form-select'
									}
								>
									{supplier === 0 ? (
										<option selected>Open this to select category</option>
									) : (
										''
									)}
									{suppliers.map((supplierItem) => (
										<option
											selected={supplierItem.id === supplier ? 'selected' : ''}
											value={supplierItem.id}
											className='text-dark'
											key={supplierItem.id}
										>
											{supplierItem.name}
										</option>
									))}
								</select>
							</div>
							<div className='form-floating mb-3'>
								<input
									className='form-control'
									type='number'
									name='price'
									onChange={onChange}
									value={price > 0 ? price : ''}
									placeholder='Price'
								/>
								<label for='price' className='text-secondary'>
									Price
								</label>
							</div>
							<div className='form-floating mb-3'>
								<input
									className='form-control mb-3'
									type='number'
									name='stock'
									onChange={onChange}
									value={stock > 0 ? stock : ''}
									placeholder='Stock'
								/>
								<label for='stock' className='text-secondary'>
									Stock
								</label>
							</div>
						</div>
						<div className='modal-footer'>
							<button
								type='submit'
								onClick={
									!EditButtonIsClicked ? onAddSubmit : onUpdateSubmit(productID)
								}
								data-bs-dismiss='modal'
								className='btn btn-primary'
							>
								{!EditButtonIsClicked ? 'Add-Product' : 'Update-Product'}
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
ProductModalForm.propTypes = {
	onAddSubmit: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	state: PropTypes.object.isRequired,
	suppliers: PropTypes.array.isRequired,
	categories: PropTypes.array.isRequired,
};
export default connect(null, {})(ProductModalForm);
