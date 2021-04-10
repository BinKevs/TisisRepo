import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCategory } from '../../../store/actions/Product/products';
export class Form extends Component {
	state = {
		CategoryName: '',
	};

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmit = (e) => {
		e.preventDefault();
		let name = this.state.CategoryName;
		const category = { name };
		this.props.addCategory(category);
		this.setState({
			CategoryName: '',
		});
	};

	render() {
		const { CategoryName } = this.state;
		const { onChange, onSubmit } = this;
		return (
			<div className='card card-body mt-4 mb-4'>
				<h2>Categories</h2>
				<form onSubmit={onSubmit}>
					<div className='form-group'>
						<label>Name</label>
						<input
							className='form-control'
							type='text'
							name='CategoryName'
							onChange={onChange}
							value={CategoryName}
						/>
					</div>
					<div className='form-group'>
						<button
							type='submit'
							data-dismiss='modal'
							className='btn btn-primary'
						>
							Add
						</button>
					</div>
				</form>
			</div>
		);
	}
}
export default connect(null, {
	addCategory,
})(Form);
