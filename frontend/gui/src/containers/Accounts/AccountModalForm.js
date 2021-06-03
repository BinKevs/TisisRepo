import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const AccountModalForm = (props) => {
	// const {
	// 	suppliers,
	// 	categories,
	// 	onChange,
	// 	onAddSubmit,
	// 	EditButtonIsClicked,
	// 	onEditCloseButton,
	// 	isImageChanged,
	// 	onUpdateSubmit,
	// } = props;
	// const {
	// 	name,
	// 	description,
	// 	price,
	// 	category,
	// 	supplier,
	// 	stock,
	// 	image,
	// 	productID,
	// 	urlFile,
	// } = props.state;
	return (
		<>
			<div
				className='modal fade'
				id='AccountModalForm'
				tabindex='-1'
				data-bs-backdrop='static'
				data-bs-keyboard='false'
				aria-labelledby='exampleModalLabel'
				aria-hidden='true'
			>
				<div className='modal-dialog modal-lg modal-dialog-scrollable'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title'>Account Add</h5>

							<button
								type='button'
								className='btn-close'
								// onClick={!EditButtonIsClicked ? '' : onEditCloseButton}
								data-bs-dismiss='modal'
								aria-label='close'
							></button>
						</div>
						<div className='modal-body'>
							<div className='form-floating mb-3'>
								<input
									type='text'
									className='form-control'
									name='username'
									// onChange={onChange}
									// value={name}
									id='username'
									placeholder='Username'
								/>
								<label for='username' className='text-secondary'>
									Username
								</label>
							</div>
							<div class='row g-2 mb-3'>
								<div className='col-md'>
									<div className='form-floating'>
										<input
											type='text'
											className='form-control'
											name='FirstName'
											// onChange={onChange}
											// value={name}
											id='FirstName'
											placeholder='First Name'
										/>
										<label for='First name' className='text-secondary'>
											First Name
										</label>
									</div>
								</div>
								<div className='col-md'>
									<div className='form-floating'>
										<input
											type='text'
											className='form-control'
											name='LastName'
											// onChange={onChange}
											// value={name}
											id='LastName'
											placeholder='Last Name'
										/>
										<label for='Last Name' className='text-secondary'>
											Last Name
										</label>
									</div>
								</div>
							</div>
							<div className='form-floating mb-3'>
								<input
									type='email'
									className='form-control'
									name='email'
									// onChange={onChange}
									// value={name}
									id='email'
									placeholder='Email'
								/>
								<label for='email' className='text-secondary'>
									Email
								</label>
							</div>
							<div className='mb-3'>
								<label for='category'>Select Account Type</label>
								<select
									// onChange={onChange}
									name='category'
									className='form-select text-secondary'
								>
									<option selected>Open this to select Account Type</option>
								</select>
							</div>
							<div className=' mb-3'>
								<label for='Permissions' className='text-dark'>
									Permissions
								</label>
								<div className='d-grid gap-2 d-md-flex justify-content-md-around'>
									<button
										className='btn btn-secondary border border-primary border-3'
										type='button'
									>
										Transactions
									</button>
									<button className='btn btn-primary' type='button'>
										Reports
									</button>
									<button
										className='btn btn-secondary border border-primary border-3'
										type='button'
									>
										Dashboard
									</button>
									<button className='btn btn-primary' type='button'>
										Inventories
									</button>
									<button className='btn btn-primary' type='button'>
										Products
									</button>
									<button className='btn btn-primary' type='button'>
										Suppliers
									</button>
									<button className='btn btn-primary' type='button'>
										Accounts
									</button>
								</div>
							</div>
						</div>
						<div className='modal-footer'>
							<button
								type='submit'
								// onClick={
								// 	!EditButtonIsClicked ? onAddSubmit : onUpdateSubmit(productID)
								// }
								data-bs-dismiss='modal'
								className='btn btn-primary'
							>
								{/* {!EditButtonIsClicked ? 'Add-Product' : 'Update-Product'} */}
								Add Account
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
// AccountModalForm.propTypes = {
// 	onAddSubmit: PropTypes.func.isRequired,
// 	onChange: PropTypes.func.isRequired,
// 	state: PropTypes.object.isRequired,
// 	suppliers: PropTypes.array.isRequired,
// 	categories: PropTypes.array.isRequired,
// };
export default connect(null, {})(AccountModalForm);
