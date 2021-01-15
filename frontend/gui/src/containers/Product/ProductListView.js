import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
	getProductList,
	deleteProduct,
} from '../../store/actions/Product/products';
import { addToCart } from '../../store/actions/Cart/cartActions';
import Cart from '../Cart/Cart';
import * as FaIcons from 'react-icons/fa';
import * as BsIcons from 'react-icons/bs';
import * as GrIcons from 'react-icons/gr';
import './style.css';
let products = [];
class ProductList extends Component {
	static propTypes = {
		products: PropTypes.array.isRequired,
		getProductList: PropTypes.func.isRequired,
		deleteProduct: PropTypes.func.isRequired,
		addToCart: PropTypes.func.isRequired,
	};
	state = {
		search: '',
	};
	numberWithCommas(x) {
		return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
	}
	onChange = (e) => this.setState({ [e.target.name]: e.target.value });
	onSubmit(product_id, product_name, price) {
		return (event) => {
			event.preventDefault();
			const product = { product_id, product_name, price };
			this.props.addToCart(product);
		};
	}
	componentDidMount() {
		this.props.getProductList();
	}
	onChange = (e) => this.setState({ [e.target.name]: e.target.value });

	render() {
		products = [];
		this.props.products.map((product) =>
			products.push({
				id: product.id,
				name: product.name,
				price: product.price,
				image: product.image,
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

		return (
			<>
				<div className='row'>
					<div className='col-xl-8 d-flex align-items-center my-2 p-2 form-row'>
						<ul class='nav nav-tabs ml-5' id='myTab' role='tablist'>
							<li class='nav-item'>
								<a
									class='nav-link active'
									id='catalog-tab'
									data-toggle='tab'
									href='#catalog'
									role='tab'
								>
									Catalog
								</a>
							</li>
							<li class='nav-item'>
								<a
									class='nav-link'
									id='table-tab'
									data-toggle='tab'
									href='#table'
									role='tab'
								>
									Table
								</a>
							</li>
						</ul>
						<div className='col-xl-4 ml-auto form-inline'>
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

					<div
						className='col-xl-8 tab-content overflow-auto'
						style={{ height: '55rem' }}
						id='myTabContent'
					>
						<div className='row tab-pane active' id='catalog' role='tabpanel'>
							{filteredData.map((product) => (
								<div
									className='col-xs-2 col-sm-4 col-md-3 col-lg-2 mx-3 '
									key={product.id}
								>
									<div
										className='card card_cust'
										style={{ width: '12rem', height: '22rem' }}
									>
										<img
											className='card-img-top img-fluid p-3'
											src={product.image}
											alt='Card cap'
										/>
										<div className='card-body'>
											<p className='card-title text-primary h4'>
												₱{this.numberWithCommas(product.price)}
											</p>
											<p
												className='card-title overflow-auto'
												style={{ height: '4rem' }}
												name='name'
											>
												{product.name}
											</p>
										</div>
										<form
											onSubmit={this.onSubmit(
												product.id,
												product.name,
												product.price
											)}
											className='m-3'
										>
											<button
												type='submit'
												className='btn btn-block btn-primary btnCust'
											>
												<FaIcons.FaCartPlus />
											</button>
										</form>
									</div>
								</div>
							))}
						</div>
						<div className='tab-pane fade show' id='table' role='tabpanel'>
							<div className='table-responsive card_cust p-5'>
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
												<td className='align-middle'>{product.stock}</td>
												<td className='align-middle'>{product.description}</td>
												<td className='align-middle'>
													<button
														onClick={this.onSubmit(
															product.id,
															product.name,
															product.price
														)}
														className='btn btn-outline-secondary btn-xs'
													>
														<div style={{ fontSize: '2em' }}>
															<FaIcons.FaCartPlus />
														</div>
													</button>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
					<div className='col-lg-4'>
						<Cart />
					</div>
				</div>
			</>
		);
	}
}
const mapToStateToProps = (state) => ({
	products: state.products.products,
	token: state.AuthReducer.token,
});
export default connect(mapToStateToProps, {
	getProductList,
	deleteProduct,
	addToCart,
})(ProductList);
