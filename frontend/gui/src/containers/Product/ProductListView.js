import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
	getProductList,
	deleteProduct,
} from '../../store/actions/Product/products';
import { addToCart } from '../../store/actions/Cart/cartActions';
import Cart from '../Cart/Cart';
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

	trimmedString(stringX) {
		if (stringX.length === 24) {
			return stringX;
		} else {
			return stringX.substring(0, 24) + '...';
		}
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
					{/* <div className='col-xl-8 d-flex align-items-center my-2 p-2'>
						<ul class='nav nav-tabs ml-5' id='myTab' role='tablist'>
							<li class='nav-item'>
								<a
									class='nav-link active'
									id='catalog-tab'
									data-toggle='tab'
									href='#catalog'
									role='tab'
								>
									<GrIcons.GrCatalog />
									{'     '}
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
									<GrIcons.GrTable />
									{'     '}
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
											<p className='overflow-auto' name='name'>
												{this.trimmedString(product.name)}
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
											<th className='text-center'>ID</th>
											<th className='text-center'>Name</th>
											<th className='text-center'>Price</th>
											<th className='text-center'>Category</th>
											<th className='text-center'>Supplier</th>
											<th className='text-center'>Stock</th>
											<th className='text-center'>Description</th>
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
					<div className='col-xl-4'>
						<Cart />
					</div> */}
					<div className='col-xl-7 col-12 d-flex justify-content-between'>
						<div>
							<ul className='nav nav-tabs' id='myTab' role='tablist'>
								<li className='nav-item'>
									<a
										className='nav-link active'
										id='home-tab'
										data-bs-toggle='tab'
										data-bs-target='#home'
										type='button'
										role='tab'
										aria-controls='home'
										aria-selected='true'
									>
										<i className='fas fa-book-open'></i>
										Catalog
									</a>
								</li>
								<li className='nav-item'>
									<a
										className='nav-link'
										id='profile-tab'
										data-bs-toggle='tab'
										data-bs-target='#profile'
										type='button'
										role='tab'
										aria-controls='profile'
										aria-selected='false'
									>
										<i className='fas fa-table'></i>
										Table
									</a>
								</li>
							</ul>
						</div>
						<div className='d-flex justify-content-end align-items-center'>
							<i className='fas fa-search fa-lg'></i>
							<div className='col-xl-8 col-12 ms-2'>
								<input
									className='form-control'
									type='text'
									id='example-number-input'
									name='search'
									placeholder='Search'
								/>
							</div>
						</div>
					</div>
					<div className='col-xl-7 p-0 tab-content' id='myTabContent'>
						<div
							class='tab-pane fade show active'
							id='home'
							role='tabpanel'
							aria-labelledby='home-tab'
						>
							<div className='row justify-content-center m-0 px-3'>
								{this.props.isLoading ? (
									<div className='vh-100 vw-100'>
										<span className='loader'>
											<span className='loader-inner'></span>
										</span>
									</div>
								) : (
									<>
										{filteredData.map((product) => (
											<div
												className='col-xl-3 col-md-3 col-sm-4 col-12 px-2 mt-3'
												key={product.id}
											>
												<div className='card container-for-hover'>
													<img
														src={product.image}
														className='card-img-top p-1'
														alt='...'
													/>
													<div className='card-body pt-0 '>
														<div className='card-title'>
															{this.trimmedString(product.name)}
														</div>
														<p className='card-text'>
															₱{this.numberWithCommas(product.price)}
														</p>
													</div>
													<button
														type='submit'
														className='btn btn-primary btn-sm btn-block m-1'
														onClick={this.onSubmit(
															product.id,
															product.name,
															product.price
														)}
													>
														<i className='fas fa-cart-plus fa-lg'></i>
													</button>
												</div>
											</div>
										))}
									</>
								)}
							</div>
						</div>
						<div
							class='tab-pane fade'
							id='profile'
							role='tabpanel'
							aria-labelledby='profile-tab'
						>
							<div className='table-responsive p-5'>
								{this.props.isLoading ? (
									<div className='vh-100 vw-100'>
										<span className='loader'>
											<span className='loader-inner'></span>
										</span>
									</div>
								) : (
									<table
										className='table table-striped align-middle'
										style={{ textAlign: 'center' }}
									>
										<thead>
											<tr>
												<th className='text-center'>ID</th>
												<th className='text-center'>Name</th>
												<th className='text-center'>Price</th>
												<th className='text-center'>Category</th>
												<th className='text-center'>Supplier</th>
												<th className='text-center'>Stock</th>
												<th className='text-center'>Description</th>
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
													<td className='align-middle'>
														{product.description}
													</td>
													<td className='align-middle'>
														<button
															onClick={this.onSubmit(
																product.id,
																product.name,
																product.price
															)}
															className='btn btn-outline-secondary btn-xs'
														>
															<i className='fas fa-cart-plus fa-lg'></i>
														</button>
													</td>
												</tr>
											))}
										</tbody>
									</table>
								)}
							</div>
						</div>
					</div>
					<div className='col-xl-5 p-0 p-3'>
						<div className='card text-center container-fluid pb-3'>
							<Cart />
						</div>
					</div>
				</div>
			</>
		);
	}
}
const mapToStateToProps = (state) => ({
	products: state.products.products,
	// token: state.AuthReducer.token,
	isLoading: state.products.isLoading,
});
export default connect(mapToStateToProps, {
	getProductList,
	deleteProduct,
	addToCart,
})(ProductList);
