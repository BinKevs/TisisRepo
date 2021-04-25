import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
const CategoryModalForm = (props) => {
	const { onChange, onSubmitCategory } = props;
	const { CategoryName } = props.state;
	return (
		<>
			<div
				className='modal fade'
				id='CategoryModalForm'
				data-bs-backdrop='static'
				data-bs-keyboard='false'
				tabindex='-1'
				aria-hidden='true'
			>
				<div className='modal-dialog'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title'>Add Category</h5>
							<button
								type='button'
								className='btn-close'
								data-bs-target='#ProductModalForm'
								data-bs-toggle='modal'
								data-bs-dismiss='modal'
								aria-label='Close'
							></button>
						</div>
						<div className='modal-body'>
							<div className='mb-3'>
								<label for='name' className='col-form-label'>
									Name
								</label>
								<input
									className='form-control'
									type='text'
									onChange={onChange}
									name='CategoryName'
									value={CategoryName}
								/>
							</div>
						</div>
						<div className='modal-footer'>
							<button
								type='submit'
								onClick={onSubmitCategory}
								data-bs-target='#ProductModalForm'
								data-bs-toggle='modal'
								data-bs-dismiss='modal'
								className='btn btn-primary'
							>
								Add-Category
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
CategoryModalForm.propTypes = {};
export default connect(null, {})(CategoryModalForm);
