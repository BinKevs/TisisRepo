import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SupplierModalForm from './SupplierModalForm';
import {
	getSupplierList,
	deleteSupplier,
	addSupplier,
	getSupplier,
	updateSupplier,
} from '../../../store/actions/Supplier/suppliers';
import * as AiIcons from 'react-icons/ai';
import * as GrIcons from 'react-icons/gr';
import * as BsIcons from 'react-icons/bs';
let isEditButtonClicked = false;
let EditButtonIsClicked = false;
export class SupplierSetting extends Component {
	state = {
		name: '',
		address: '',
		phone_number: '',
		supplierID: 0,
		search: '',
	};
	static propTypes = {
		suppliers: PropTypes.array.isRequired,
		getSupplierList: PropTypes.func.isRequired,
		getSupplier: PropTypes.func.isRequired,
		deleteSupplier: PropTypes.func.isRequired,
		addSupplier: PropTypes.func.isRequired,
		updateSupplier: PropTypes.func.isRequired,
	};

	componentDidMount() {
		this.props.getSupplierList();
	}
	// when the isEditButtonClicked status is change this.props.supplier
	// *the supplier that will be edited* is being fetch because we trigger it in the bottom
	// then we will set it to the state and being passed on the formupdate component
	componentDidUpdate(prevProps, prevState) {
		if (isEditButtonClicked) {
			EditButtonIsClicked = true;
			const { id, name, address, phone_number } = this.props.supplier;
			this.setState({
				name,
				address,
				phone_number,
				supplierID: id,
			});
			isEditButtonClicked = false;
		}
		if (this.props.supplier !== prevProps.supplier) {
			this.props.getSupplierList();
		}
	}
	onChange = (e) => this.setState({ [e.target.name]: e.target.value });
	// sending the product that will be added to this.props.addSupplier in the actions also reset the state
	onAddSubmit = (e) => {
		e.preventDefault();
		const { name, address, phone_number } = this.state;
		const supplier = { name, address, phone_number };
		this.props.addSupplier(supplier);
		this.setState({
			name: '',
			address: '',
			phone_number: '',
			supplierID: 0,
		});
	};
	//this will sent the updated product in the this.props.updateSupplier to the action and will reset the state
	onUpdateSubmit = (supplierID) => {
		return (event) => {
			console.log('asdasdsadsd');
			event.preventDefault();
			const { name, address, phone_number } = this.state;
			const supplier = { name, address, phone_number };
			this.props.updateSupplier(supplierID, supplier);

			this.setState({
				name: '',
				address: '',
				phone_number: '',
				supplierID: 0,
			});
			EditButtonIsClicked = false;
		};
	};
	// when edit button click this will fetch the supplier that will be edited and change the isEditButtonClicked status to true
	onEditButtonClick(supplierID) {
		return (event) => {
			event.preventDefault();
			this.props.getSupplier(supplierID);
			isEditButtonClicked = true;
		};
	}
	onEditCloseButton = (event) => {
		event.preventDefault();
		this.setState({
			name: '',
			address: '',
			phone_number: '',
			supplierID: 0,
		});
		EditButtonIsClicked = false;
		isEditButtonClicked = false;
	};
	render() {
		// This will filter the data from supplier
		const lowercasedFilter = this.state.search.toLowerCase();
		const filteredData = this.props.suppliers.filter((item) => {
			return Object.keys(item).some((key) =>
				item[key].toString().toLowerCase().includes(lowercasedFilter)
			);
		});
		return (
			<Fragment>
				<div className='container'>
					<div className='card_cust p-5'>
						<div className='d-flex align-items-center mb-3'>
							<h2>Supplier</h2>
							<button
								className='btn btn-outline-secondary ms-4 col-auto'
								data-bs-toggle='modal'
								data-bs-target='#SupplierModalForm'
								style={{ fontSize: '1.5em' }}
							>
								<AiIcons.AiOutlinePlus />
							</button>

							<div className='col-xl-3 d-flex justify-content-end align-items-center ms-auto'>
								<i className='fas fa-search fa-lg'></i>
								<div className='col-xl-8 col-12 ms-2'>
									<input
										className='form-control'
										type='text'
										id='example-number-input'
										name='search'
										placeholder='Search'
										onChange={this.onChange}
										value={this.state.search}
									/>
								</div>
							</div>
						</div>
						<table className='table table-striped'>
							<thead>
								<tr>
									<th className='text-center'>ID</th>
									<th className='text-center'>Name</th>
									<th className='text-center'>Address</th>
									<th className='text-center'>Phone Number</th>
									<th />
								</tr>
							</thead>
							<tbody>
								{filteredData.map((supplier) => (
									<tr key={supplier.id}>
										<td className='text-center'>{supplier.id}</td>
										<td className='text-center'>{supplier.name}</td>
										<td className='text-center'>{supplier.address}</td>
										<td className='text-center'>{supplier.phone_number}</td>

										<td className='align-middle'>
											<button
												onClick={this.onEditButtonClick(supplier.id)}
												data-bs-toggle='modal'
												data-bs-target='#SupplierModalForm'
												className='btn btn-outline-secondary btn-xs'
											>
												<GrIcons.GrEdit />
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
						<SupplierModalForm
							state={this.state}
							onChange={this.onChange}
							onAddSubmit={this.onAddSubmit}
							onUpdateSubmit={this.onUpdateSubmit}
							EditButtonIsClicked={EditButtonIsClicked}
							onEditCloseButton={this.onEditCloseButton}
						/>
					</div>
				</div>
			</Fragment>
		);
	}
}

const mapStateToProps = (state) => ({
	suppliers: state.suppliers.suppliers,
	supplier: state.suppliers.supplier,
});

export default connect(mapStateToProps, {
	getSupplierList,

	getSupplier,
	updateSupplier,
	addSupplier,
	deleteSupplier,
})(SupplierSetting);
