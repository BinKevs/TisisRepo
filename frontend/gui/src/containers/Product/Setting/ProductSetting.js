import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormAdd from './FormAdd';
import FormUpdate from './FormUpdate';
import CategoryForm from '../ModalForms/CategoryForm';
import {
	getProductList,
	deleteProduct,
	getProduct,
	updateProduct,
	addProduct,
	addCategory,
} from '../../../store/actions/Product/products';
import { getSupplierList } from '../../../store/actions/Supplier/suppliers';
import { getCategoryList } from '../../../store/actions/Product/products';
import * as AiIcons from 'react-icons/ai';
import * as GrIcons from 'react-icons/gr';
import * as BsIcons from 'react-icons/bs';
let products = [];
let isEditButtonClicked = false;
let isImageChanged = false;
let categoryEditValue = '';
let supplierEditValue = '';
export class ProductSetting extends Component {
	static propTypes = {
		products: PropTypes.array.isRequired,
		product: PropTypes.object.isRequired,
		categories: PropTypes.array.isRequired,
		getProductList: PropTypes.func.isRequired,
		getProduct: PropTypes.func.isRequired,
		deleteProduct: PropTypes.func.isRequired,
		addProduct: PropTypes.func.isRequired,
		updateProduct: PropTypes.func.isRequired,
	};
	state = {
		name: '',
		supplier: 0,
		description: '',
		price: 0,
		category: 0,
		stock: 0,
		image: null,
		productID: 0,
		search: '',
	};
	componentDidMount() {
		this.props.getProductList();
		this.props.getSupplierList();
		this.props.getCategoryList();
	}
	onChange = (e) => {
		if (e.target.name === 'image') {
			this.setState({ [e.target.name]: e.target.files[0] });
			isImageChanged = true;
		} else if (e.target.name === 'category' || e.target.name === 'supplier') {
			const ID = e.target.value.split(' ');
			this.setState({
				[e.target.name]: ID[0],
			});
		} else {
			this.setState({ [e.target.name]: e.target.value });
			console.log(this.state.search);
		}
	};

	onSubmitCategory = (event) => {
		event.preventDefault();
		const { name } = this.state;
		const category = { name };
		this.props.addCategory(category);
		this.setState({
			name: '',
		});
	};
	componentDidUpdate(prevProps, prevState) {
		if (isEditButtonClicked) {
			const {
				id,
				name,
				description,
				price,
				supplier,
				category,
				stock,
				image,
				category_info,
				supplier_info,
			} = this.props.product;
			this.setState({
				name,
				description,
				price,
				supplier,
				category,
				stock,
				image,
				productID: id,
			});
			categoryEditValue = id + ' - ' + category_info.name;
			supplierEditValue = id + ' - ' + supplier_info.name;
			isEditButtonClicked = false;
		}
		if (this.props.product !== prevProps.product) {
			this.props.getProductList();
		}
	}
	onUpdateSubmit = (productID) => {
		return (e) => {
			e.preventDefault();
			const {
				name,
				description,
				price,
				category,
				supplier,
				stock,
				image,
			} = this.state;
			const formData = new FormData();

			formData.append('name', name);
			formData.append('description', description);
			formData.append('price', price);
			formData.append('category', category);
			formData.append('supplier', supplier);
			formData.append('stock', stock);
			if (isImageChanged) {
				formData.append('image', image);
			}

			this.props.updateProduct(productID, formData);
			this.setState({
				name: '',
				description: '',
				price: 0,
				supplier: 0,
				category: 0,
				new_stock: 0,
				image: null,
				productID: 0,
			});
			isImageChanged = false;
		};
	};
	onEditButtonClick(ProductID) {
		return (event) => {
			event.preventDefault();
			this.props.getProduct(ProductID);
			isEditButtonClicked = true;
		};
	}
	onAddSubmit = (e) => {
		e.preventDefault();
		console.log(this.state);
		const {
			name,
			description,
			price,
			category,
			supplier,
			stock,
			image,
		} = this.state;
		const formData = new FormData();

		formData.append('name', name);
		formData.append('description', description);
		formData.append('price', price);
		formData.append('category', category);
		formData.append('supplier', supplier);
		formData.append('stock', stock);
		formData.append('image', image);

		this.props.addProduct(formData);
		this.setState({
			name: '',
			description: '',
			price: 0,
			supplier: 0,
			category: 0,
			new_stock: 0,
			image: null,
		});
	};
	render() {
		products = [];
		this.props.products.map((product) =>
			products.push({
				id: product.id,
				name: product.name,
				price: product.price,
				category: product.category_info.name,
				supplier: product.supplier_info.name,
				stock: product.stock,
				description: product.description,
			})
		);
		const lowercasedFilter = this.state.search.toLowerCase();
		const filteredData = products.filter((item) => {
			return Object.keys(item).some((key) =>
				item[key].toString().toLowerCase().includes(lowercasedFilter)
			);
		});
		console.log(filteredData);
		return (
			<Fragment>
				<div className='container'>
					<div className='card_cust p-5'>
						<div className='d-flex align-items-center mb-3'>
							<h2>Products</h2>
							<button
								className='btn btn-outline-secondary ml-4 col-auto'
								data-toggle='modal'
								data-target='#ProductModalFormAdd'
								style={{ fontSize: '1.5em' }}
							>
								<AiIcons.AiOutlinePlus />
							</button>
							<div className='col-lg-3 ml-auto form-inline'>
								<div style={{ fontSize: '1.5em' }}>
									<BsIcons.BsSearch />
								</div>

								<input
									className='form-control ml-3'
									type='text'
									id='example-number-input'
									name='search'
									placeholder='Search'
									onChange={this.onChange}
									value={this.state.search}
								/>
							</div>
						</div>
						<div className='table-responsive'>
							<table
								className='table table-striped align-middle'
								style={{ textAlign: 'center' }}
							>
								<thead>
									<tr>
										<th>ID</th>
										<th>Name</th>
										<th>Price</th>
										<th>Category</th>
										<th>Supplier</th>
										<th>Stock</th>
										<th>Description</th>
									</tr>
								</thead>
								<tbody>
									{filteredData.map((product) => (
										<tr key={product.id}>
											<td className='align-middle'>{product.id}</td>
											<td className='align-middle'>{product.name}</td>
											<td className='align-middle'>{product.price}</td>
											<td className='align-middle'>{product.category}</td>
											<td className='align-middle'>{product.supplier}</td>
											<td className='align-middle'>{product.stock}</td>
											<td className='align-middle'>{product.description}</td>

											{/* <td className='align-middle'>
                        <button
                          onClick={this.props.deleteProduct.bind(
                            this,
                            product.id,
                          )}
                          className='btn btn-danger btn-xs'>
                          {" "}
                          Delete
                        </button>
                      </td> */}
											<td className='align-middle'>
												<button
													onClick={this.onEditButtonClick(product.id)}
													data-toggle='modal'
													data-target='#ProductModalFormUpdate'
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
					</div>
					<FormAdd
						state={this.state}
						onChange={this.onChange}
						suppliers={this.props.suppliers}
						categories={this.props.categories}
						onAddSubmit={this.onAddSubmit}
					/>
					<FormUpdate
						state={this.state}
						onChange={this.onChange}
						suppliers={this.props.suppliers}
						categoryEditValue={categoryEditValue}
						supplierEditValue={supplierEditValue}
						categories={this.props.categories}
						onUpdateSubmit={this.onUpdateSubmit}
					/>
					<CategoryForm
						state={this.state.name}
						onSubmitCategory={this.onSubmitCategory}
						onChange={this.onChange}
					/>
				</div>
			</Fragment>
		);
	}
}

const mapStateToProps = (state) => ({
	products: state.products.products,
	product: state.products.product,
	suppliers: state.suppliers.suppliers,
	categories: state.products.categories,
});

export default connect(mapStateToProps, {
	getProductList,
	getProduct,
	getSupplierList,
	getCategoryList,
	deleteProduct,
	updateProduct,
	addCategory,
	addProduct,
})(ProductSetting);
