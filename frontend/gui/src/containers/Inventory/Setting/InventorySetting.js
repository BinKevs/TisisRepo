import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import InventoryModalForm from './InventoryModalForm';

import {
	getInventoryList,
	deleteInventory,
	getInventory,
	addInventory,
	updateInventory,
} from '../../../store/actions/Inventory/inventories';
import { getSupplierList } from '../../../store/actions/Supplier/suppliers';
import { getProductList } from '../../../store/actions/Product/products';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import * as GrIcons from 'react-icons/gr';

let EditButtonIsClicked = false;
let isEditButtonClicked = false;
let inventories = [];
export class InventorySetting extends Component {
	static propTypes = {
		inventories: PropTypes.array.isRequired,
		inventory: PropTypes.object.isRequired,
		getInventoryList: PropTypes.func.isRequired,
		getSupplierList: PropTypes.func.isRequired,
		getProductList: PropTypes.func.isRequired,
		deleteInventory: PropTypes.func.isRequired,
		updateInventory: PropTypes.func.isRequired,
		addInventory: PropTypes.func.isRequired,
	};
	state = {
		new_stock: 0,
		product: 0,
		supplier: 0,
		search: '',
		inventoryID: 0,
	};
	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	// this will be passed to the form add component
	// when this function called it will get the state values and pass it
	// to addInventory action and it called the getInventoryList where it updated the current list
	// and clear the state for adding a new inventory
	onAddSubmit = (event) => {
		event.preventDefault();
		const { new_stock, product, supplier } = this.state;
		const inventory = { new_stock, product, supplier };
		this.props.addInventory(inventory);

		this.setState({
			new_stock: 0,
			product: 0,
			supplier: 0,
			inventoryID: 0,
		});
	};

	onEditCloseButton = (event) => {
		event.preventDefault();
		this.setState({
			new_stock: 0,
			product: 0,
			supplier: 0,
			inventoryID: 0,
		});
		EditButtonIsClicked = false;
		isEditButtonClicked = false;
	};
	componentDidMount() {
		this.props.getInventoryList();
		this.props.getSupplierList();
		this.props.getProductList();
		this.setState({
			search: '',
		});
	}

	componentDidUpdate(prevProps, prevState) {
		if (isEditButtonClicked) {
			EditButtonIsClicked = true;
			const { new_stock, product, supplier, id } = this.props.inventory;
			this.setState({
				new_stock,
				product,
				supplier,
				inventoryID: id,
			});

			isEditButtonClicked = false;
		}
		if (this.props.inventories !== prevProps.inventories) {
			this.props.getInventoryList();
		}
	}
	onEditButtonClick(InventoryID) {
		return (event) => {
			event.preventDefault();
			this.props.getInventory(InventoryID);
			isEditButtonClicked = true;
		};
	}

	// When Updating this will sent the new stock, product and supplier together with id
	// to the updateInventory in the action and reset the state.
	onUpdateSubmit = (InventoryID) => {
		return (event) => {
			event.preventDefault();
			const { new_stock, product, supplier } = this.state;
			const inventory = { new_stock, product, supplier };

			this.props.updateInventory(InventoryID, inventory);

			this.setState({
				new_stock: 0,
				product: 0,
				supplier: 0,
				inventoryID: 0,
			});
		};
	};
	render() {
		// destructure the inventories that came from the reducer so it will be easier to filter and show
		inventories = [];
		this.props.inventories.map((inventory) =>
			inventories.push({
				id: inventory.id,
				supplier: inventory.supplier_info.name,
				product: inventory.product_info.name,
				new_stock: inventory.new_stock,
				created_at: inventory.created_at,
			})
		);
		// This will filter the data from inventories array filtered at the top
		const lowercasedFilter = this.state.search.toLowerCase();
		const filteredData = inventories.filter((item) => {
			return Object.keys(item).some((key) =>
				item[key].toString().toLowerCase().includes(lowercasedFilter)
			);
		});
		return (
			<Fragment>
				<div className='container'>
					<div className='card_cust p-5'>
						<div className='d-flex align-items-center mb-3'>
							<h2>Inventories</h2>

							<button
								className='btn btn-outline-secondary ms-4 col-auto'
								data-bs-toggle='modal'
								data-bs-target='#InventoryModalForm'
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

						<div className='table-responsive'>
							<table
								className='table table-striped align-middle'
								style={{ textAlign: 'center' }}
							>
								<thead>
									<tr>
										<th className='text-center'>ID</th>
										<th className='text-center'>Product</th>
										<th className='text-center'>Added stock</th>
										<th className='text-center'>Supplier</th>
										<th className='text-center'>Date</th>
										<th className='text-center'></th>
									</tr>
								</thead>
								<tbody>
									{filteredData.map((inventory) => (
										<tr key={inventory.id}>
											<td className='align-middle'>{inventory.id}</td>
											<td className='align-middle'>{inventory.product}</td>
											<td className='align-middle'>{inventory.new_stock}</td>
											<td className='align-middle'>{inventory.supplier}</td>
											<td className='align-middle'>{inventory.created_at}</td>

											<td className='align-middle'>
												<button
													onClick={this.onEditButtonClick(inventory.id)}
													data-bs-toggle='modal'
													data-bs-target='#InventoryModalForm'
													className='btn btn-outline-secondary btn-xs'
												>
													<GrIcons.GrEdit />
												</button>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
						{/* passing the state, onaddSubmit,onchange,products,suppliers as props to form add component */}
						<InventoryModalForm
							state={this.state}
							onUpdateSubmit={this.onUpdateSubmit}
							onAddSubmit={this.onAddSubmit}
							onChange={this.onChange}
							products={this.props.products}
							suppliers={this.props.suppliers}
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
	inventories: state.inventories.inventories,
	inventory: state.inventories.inventory,
	suppliers: state.suppliers.suppliers,
	products: state.products.products,
});

export default connect(mapStateToProps, {
	addInventory,
	getSupplierList,
	getProductList,
	getInventoryList,
	getInventory,
	deleteInventory,
	updateInventory,
})(InventorySetting);
