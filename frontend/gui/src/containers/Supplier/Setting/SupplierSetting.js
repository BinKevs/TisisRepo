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
				{/* <div className='container'>
					<div className='card_cust p-5'>
						<div className='d-flex align-items-center mb-3'>
							<h2>Supplier</h2>

							<div
								data-bs-toggle='modal'
								data-bs-target='#SupplierModalForm'
								className='ms-4 col-auto'
							>
								<i className='far fa-plus-circle fa-3x btn-bg text-dark'></i>
							</div>
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
												<i className='far fa-pencil-alt'></i>
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
				</div> */}
				<div class='bg-gray-100 flex-1 mt-20 md:mt-14 pb-24 md:pb-5'>
					<div class='bg-gray-800 pt-3'>
						<div
							class='
							rounded-tl-3xl
							bg-gradient-to-r
							from-teal_custom
							to-gray-800
							p-4
							shadow
							text-2xl text-white
						'
						>
							<h3 class='font-bold pl-2'>Products</h3>
						</div>
					</div>
					<div className='py-20 w-full'>
						<div className='mx-auto container bg-white dark:bg-gray-800 shadow rounded'>
							<div className='flex flex-col lg:flex-row p-4 lg:p-8 justify-end items-start lg:items-stretch w-full'>
								<div className='w-full lg:w-2/3 flex flex-col lg:flex-row items-start lg:items-center justify-end'>
									<div className='flex items-center lg:border-l lg:border-r border-gray-300 dark:border-gray-200 py-3 lg:py-0 lg:px-6'>
										<p
											className='text-base text-gray-600 dark:text-gray-400'
											id='page-view'
										>
											Viewing 1 - 20 of 60
										</p>
										<a
											className='text-gray-600 dark:text-gray-400 ml-2 border-transparent border cursor-pointer rounded mr-4'
											onclick='pageView(false)'
										>
											<i class='fad fa-angle-left fa-2x'></i>
										</a>
										<a
											className='text-gray-600 dark:text-gray-400 border-transparent border rounded focus:outline-none cursor-pointer'
											onclick='pageView(true)'
										>
											<i class='fad fa-angle-right fa-2x'></i>
										</a>
									</div>

									<div className='lg:ml-6 flex items-center'>
										<button className='bg-gray-200 transition duration-150 ease-in-out focus:outline-none border border-transparent focus:border-gray-800 focus:shadow-outline-gray hover:bg-gray-300 rounded text-indigo-700 px-5 h-8 flex items-center text-sm'>
											Download All
										</button>
										<div className='text-white ml-4 cursor-pointer focus:outline-none border border-transparent focus:border-gray-800 focus:shadow-outline-gray bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 w-8 h-8 rounded flex items-center justify-center'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												className='icon icon-tabler icon-tabler-plus'
												width={28}
												height={28}
												viewBox='0 0 24 24'
												strokeWidth='1.5'
												stroke='currentColor'
												fill='none'
												strokeLinecap='round'
												strokeLinejoin='round'
											>
												<path stroke='none' d='M0 0h24v24H0z' />
												<line x1={12} y1={5} x2={12} y2={19} />
												<line x1={5} y1={12} x2={19} y2={12} />
											</svg>
										</div>
									</div>
								</div>
							</div>
							<div className='w-full overflow-x-scroll xl:overflow-x-hidden'>
								<table className='min-w-full bg-white dark:bg-gray-800'>
									<thead>
										<tr className='w-full h-16 border-gray-300 dark:border-gray-200 border-b py-8'>
											<th className='pl-8 text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4'>
												<input
													type='checkbox'
													className='cursor-pointer relative w-5 h-5 border rounded border-gray-400 dark:border-gray-200 bg-white dark:bg-gray-800 outline-none'
													onclick='checkAll(this)'
												/>
											</th>
											<th className='text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4'>
												<div className='text-gray-600 dark:text-gray-400 opacity-0 cursor-default relative w-10'>
													<div className='absolute top-0 right-0 w-5 h-5 mr-2 -mt-1 rounded-full bg-indigo-700 text-white flex justify-center items-center text-xs'>
														3
													</div>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														className='icon icon-tabler icon-tabler-file'
														width={28}
														height={28}
														viewBox='0 0 24 24'
														strokeWidth='1.5'
														stroke='currentColor'
														fill='none'
														strokeLinecap='round'
														strokeLinejoin='round'
													>
														<path stroke='none' d='M0 0h24v24H0z' />
														<path d='M14 3v4a1 1 0 0 0 1 1h4' />
														<path d='M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z' />
													</svg>
												</div>
											</th>
											<th className='text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4'>
												Invoice Number
											</th>
											<th className='text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4'>
												Client
											</th>
											<th className='text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4'>
												Company Contact
											</th>
											<th className='text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4'>
												Amount
											</th>
											<th className='space-x-2 text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4'>
												<span>Date</span>
												<i class='fal fa-arrow-up fa-lg'></i>
												<i class='fal fa-arrow-down'></i>
											</th>
											<th className='text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4'>
												<div className='opacity-0 w-2 h-2 rounded-full bg-indigo-400' />
											</th>
											<td className='text-gray-600 dark:text-gray-400 font-normal pr-8 text-left text-sm tracking-normal leading-4'>
												More
											</td>
										</tr>
									</thead>
									<tbody>
										<tr className='h-24 border-gray-300 dark:border-gray-200 border-b'>
											<td className='pl-8 pr-6 text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4'>
												<input
													type='checkbox'
													className='cursor-pointer relative w-5 h-5 border rounded border-gray-400 dark:border-gray-200 bg-white dark:bg-gray-800 outline-none'
													onclick='tableInteract(this)'
												/>
											</td>
											<td className='text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4'>
												<div className='relative w-10 text-gray-600 dark:text-gray-400'>
													<div className='absolute top-0 right-0 w-5 h-5 mr-2 -mt-1 rounded-full bg-indigo-700 text-white flex justify-center items-center text-xs'>
														3
													</div>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														className='icon icon-tabler icon-tabler-file'
														width={28}
														height={28}
														viewBox='0 0 24 24'
														strokeWidth='1.5'
														stroke='currentColor'
														fill='none'
														strokeLinecap='round'
														strokeLinejoin='round'
													>
														<path stroke='none' d='M0 0h24v24H0z' />
														<path d='M14 3v4a1 1 0 0 0 1 1h4' />
														<path d='M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z' />
													</svg>
												</div>
											</td>
											<td className='text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4'>
												#MC10023
											</td>
											<td className='text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4'>
												Toyota Motors
											</td>
											<td className='pr-6 whitespace-no-wrap'>
												<div className='flex items-center'>
													<div className='h-8 w-8'>
														<img
															src='https://tuk-cdn.s3.amazonaws.com/assets/components/advance_tables/at_1.png'
															alt
															className='h-full w-full rounded-full overflow-hidden shadow'
														/>
													</div>
													<p className='ml-2 text-gray-800 dark:text-gray-100 tracking-normal leading-4 text-sm'>
														Carrie Anthony
													</p>
												</div>
											</td>
											<td className='text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4'>
												$2,500
											</td>
											<td className='text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4'>
												02.03.20
											</td>
											<td className='pr-6'>
												<div className='w-2 h-2 rounded-full bg-indigo-400' />
											</td>
											<td className='pr-8 relative'>
												<div className='dropdown-content mt-8 absolute left-0 -ml-12 shadow-md z-10 hidden w-32'>
													<ul className='bg-white dark:bg-gray-800 shadow rounded py-1'>
														<li className='cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal'>
															Edit
														</li>
														<li className='cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal'>
															Delete
														</li>
														<li className='cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal'>
															Duplicate
														</li>
													</ul>
												</div>
												<button className='text-gray-500 rounded cursor-pointer border border-transparent focus:outline-none'>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														onclick='dropdownFunction(this)'
														className='icon icon-tabler icon-tabler-dots-vertical dropbtn'
														width={28}
														height={28}
														viewBox='0 0 24 24'
														strokeWidth='1.5'
														stroke='currentColor'
														fill='none'
														strokeLinecap='round'
														strokeLinejoin='round'
													>
														<path stroke='none' d='M0 0h24v24H0z' />
														<circle cx={12} cy={12} r={1} />
														<circle cx={12} cy={19} r={1} />
														<circle cx={12} cy={5} r={1} />
													</svg>
												</button>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
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
