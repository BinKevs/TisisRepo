import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
	getInventoryList,
	deleteInventory,
	getInventory,
	addInventory,
	updateInventory,
} from '../../store/actions/inventory/inventories';
import { getSupplierList } from '../../store/actions/supplier/suppliers';
import {
	getProductList,
	getCategoryList,
} from '../../store/actions/product/products';
import InventoryModal from './InventoryModal';
import DatePicker from 'react-datepicker';
// import ExportTable from '../Layouts/ExportTable';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import ReactToPrint from 'react-to-print';
import { InventoryTablePrint } from './InventoryTablePrint';

let EditButtonIsClicked = false;
let ItemAdded = false;
let inventories = [];
let filteredData = [];
class InventorySettingIndex extends React.Component {
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
		modal: false,
		table_export_modal: false,
		InputDate: '',
		productForDropDownSelect: '',
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
		const action_done = 'Inventory Added';
		const inventory = { new_stock, product, supplier, action_done };
		this.props.addInventory(inventory);

		this.setState({
			new_stock: 0,
			product: 0,
			supplier: 0,
			inventoryID: 0,
		});
		this.ModalFunction();
		ItemAdded = true;
		this.props.getInventoryList();
	};

	componentDidMount() {
		this.props.getInventoryList();
		this.props.getSupplierList();
		this.props.getProductList();
		this.props.getCategoryList();
		// this.props.getInventory(1);
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.props.inventory !== prevProps.inventory) {
			const { new_stock, product, supplier, id } = this.props.inventory;
			this.setState({
				new_stock,
				product,
				supplier,
				inventoryID: id,
			});
			this.props.getInventoryList();
		}
		if (ItemAdded === true) {
			this.props.getInventoryList();
			ItemAdded = false;
		}
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
			this.ModalFunction();
		};
	};

	// when edit button click this will fetch the supplier that will be edited and change the isEditButtonClicked status to true
	onEditCloseButton = (event) => {
		event.preventDefault();
		this.setState({
			new_stock: 0,
			product: 0,
			supplier: 0,
			inventoryID: 0,
		});
		EditButtonIsClicked = false;
		this.ModalFunction();
	};
	//this will toggle the add modal form
	onModalToggleAdd = (e) => {
		e.preventDefault();
		this.ModalFunction();
	};
	//this will toggle the edit modal form
	onModalToggleEdit(InventoryID) {
		return (event) => {
			event.preventDefault();
			this.props.getInventory(InventoryID);
			this.ModalFunction();
			EditButtonIsClicked = true;
		};
	}
	// function that called to open or close modal
	ModalFunction() {
		this.setState({ modal: !this.state.modal });
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
		document.getElementById('Body').classList.toggle('overflow-hidden');
	}

	OnToggleExportTable = (event) => {
		event.preventDefault();
		this.setState({ table_export_modal: !this.state.table_export_modal });
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
		document.getElementById('Body').classList.toggle('overflow-hidden');
	};
	render() {
		// destructure the inventories that came from the reducer so it will be easier to filter and show
		inventories = [];
		filteredData = [];
		this.props.inventories.map((inventory) =>
			inventories.push({
				id: inventory.id,
				inventory_id: inventory.inventory_id,
				supplier: inventory.supplier_info.name,
				product: inventory.product_info.name,
				new_stock: inventory.new_stock,
				created_at: inventory.created_at,
			})
		);
		// This will filter the data from inventories array filtered at the top
		const lowercasedFilter = this.state.search.toLowerCase();
		filteredData = inventories.filter((item) => {
			if (lowercasedFilter === '') {
				return item;
			} else {
				return item.product.toString().toLowerCase().includes(lowercasedFilter);
			}
		});
		if (this.state.InputDate !== null) {
			let InputDateDateSeparated = this.state.InputDate.toString().split(' ');
			if (this.state.InputDate === '') {
				if (this.state.productForDropDownSelect !== '') {
					if (this.state.productForDropDownSelect === 'Select Product') {
						filteredData = inventories.filter((item) => {
							return Object.keys(item).some((key) =>
								item[key].toString().includes('')
							);
						});
					} else {
						filteredData = inventories.filter((item) => {
							return Object.keys(item).some((key) =>
								item[key]
									.toString()
									.includes(this.state.productForDropDownSelect)
							);
						});
					}
				}
			} else {
				filteredData = inventories.filter((item) => {
					return Object.keys(item).some((key) =>
						item[key]
							.toString()
							.includes(
								InputDateDateSeparated[1] +
									' ' +
									InputDateDateSeparated[2] +
									' ' +
									InputDateDateSeparated[3]
							)
					);
				});
			}
		}

		console.log(this.props.suppliers);
		return (
			<>
				<div class="bg-gray-100 flex-1 mt-20 md:mt-14 pb-24 md:pb-5">
					<div class="bg-gray-800 pt-3">
						<div
							class="
				rounded-tl-3xl
				bg-gradient-to-r
				from-teal_custom
				to-gray-800
				p-4
				shadow
				text-2xl text-white
			"
						>
							<h3 class="font-bold pl-2">Inventories</h3>
						</div>
					</div>
					<div className="p-5 w-full">
						<div className="mx-auto bg-white dark:bg-gray-800 shadow rounded">
							<div className="flex flex-col lg:flex-row p-4 lg:p-8 justify-end items-start lg:items-stretch w-full">
								<div className="w-full lg:w-2/3 flex flex-col lg:flex-row items-start lg:items-center justify-end">
									<div className="lg:ml-6 flex items-start w-full">
										<div
											onClick={this.OnToggleExportTable}
											className="text-white cursor-pointer focus:outline-none border border-transparent focus:border-gray-800 focus:shadow-outline-gray bg-teal_custom transition duration-150 ease-in-out hover:bg-gray-600 w-12 h-12 rounded flex items-center justify-center"
										>
											<i class="fal fa-print fa-lg"></i>
										</div>
										<div
											onClick={this.onModalToggleAdd}
											className="text-white ml-4 cursor-pointer focus:outline-none border border-transparent focus:border-gray-800 focus:shadow-outline-gray bg-teal_custom transition duration-150 ease-in-out hover:bg-gray-600 w-12 h-12 rounded flex items-center justify-center"
										>
											<i class="fal fa-plus fa-lg"></i>
										</div>
									</div>
								</div>
								<div className="w-full lg:w-2/3 flex flex-col lg:flex-row items-start lg:items-center justify-end">
									<div className="flex items-center lg:border-l lg:border-r border-gray-300 dark:border-gray-200 py-3 lg:py-0 lg:px-6">
										<p
											className="text-base text-gray-600 dark:text-gray-400"
											id="page-view"
										>
											Viewing 1 - 20 of 60
										</p>
										<div
											className="text-gray-600 dark:text-gray-400 ml-2 border-transparent border cursor-pointer rounded mr-4"
											onclick="pageView(false)"
										>
											<i class="fad fa-angle-left fa-2x"></i>
										</div>
										<div
											className="text-gray-600 dark:text-gray-400 border-transparent border rounded focus:outline-none cursor-pointer"
											onclick="pageView(true)"
										>
											<i class="fad fa-angle-right fa-2x"></i>
										</div>
									</div>
									<div className="lg:ml-6 flex items-center">
										<div class="relative w-full">
											<input
												type="text"
												name="search"
												placeholder=" "
												required
												class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-700 border-gray-200"
												onChange={this.onChange}
												value={this.state.search}
											/>
											<label
												for="search"
												class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
											>
												Search
											</label>
										</div>
										<i class="fad fa-search fa-lg"></i>
									</div>
								</div>
							</div>
							<div className="w-full overflow-x-auto">
								<table
									id="inventory-table"
									className="min-w-full bg-white dark:bg-gray-800"
								>
									<thead>
										<tr className="w-full h-16 border-gray-300 dark:border-gray-200 border-b py-8">
											<th className="pl-14 text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
												Inventory No.
											</th>
											<th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
												Product Name
												{/* <select
													onChange={this.onChange}
													name="productForDropDownSelect"
													class="w-full h-8 border rounded-lg text-xs my-2"
												>
													<option>Select Product</option>
													{this.props.products.map((productFetch) => (
														<option value={productFetch.name}>
															{productFetch.name}{' '}
														</option>
													))}
												</select> */}
											</th>
											<th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
												Stock Added
											</th>
											<th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
												Supplier
											</th>
											<th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
												<div>Date : </div>
												<DatePicker
													selected={this.state.InputDate}
													onChange={(date) =>
														this.setState({ InputDate: date })
													}
													value={this.state.InputDate}
													closeOnScroll={true}
													placeholderText="Select Date"
													className="my-1 px-1 py-1 border-2 rounded-l"
												/>
											</th>
											{/* <th className="space-x-2 text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
									<span>Date</span>
									<i class="fal fa-arrow-up fa-lg"></i>
									<i class="fal fa-arrow-down"></i>
								</th> */}
											<th className="text-gray-600 dark:text-gray-400 font-normal text-left text-sm tracking-normal leading-4">
												More
											</th>
										</tr>
									</thead>
									<tbody>
										{filteredData.map((inventory) => (
											<tr
												key={inventory.id}
												className="h-24 border-gray-300 dark:border-gray-200 border-b"
											>
												<td className="pl-14 text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
													{inventory.inventory_id}
												</td>
												<td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
													{inventory.product}
												</td>
												<td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
													{inventory.new_stock}
												</td>
												{/* <td className="pr-6 whitespace-no-wrap">
									<div className="flex items-center">
										<div className="h-8 w-8">
											<img
												src="https://tuk-cdn.s3.amazonaws.com/assets/components/advance_tables/at_1.png"
												alt
												className="h-full w-full rounded-full overflow-hidden shadow"
											/>
										</div>
										<p className="ml-2 text-gray-800 dark:text-gray-100 tracking-normal leading-4 text-sm">
											Carrie Anthony
										</p>
									</div>
								</td> */}
												<td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
													{inventory.supplier}
												</td>
												<td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
													{inventory.created_at}
												</td>
												<td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
													{inventory.description}
												</td>
												<td className="pr-8 relative">
													<button className="button-see-more text-gray-500 rounded cursor-pointer border border-transparent focus:outline-none">
														<div className="seeMore absolute left-0 top-0 mt-2 -ml-20 shadow-md z-10 w-32">
															<ul className="bg-white dark:bg-gray-800 shadow rounded p-2">
																<li
																	onClick={this.onModalToggleEdit(inventory.id)}
																	className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-teal_custom hover:text-white px-3 font-normal"
																>
																	Edit
																</li>
															</ul>
														</div>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															className="icon icon-tabler icon-tabler-dots-vertical dropbtn"
															width={28}
															height={28}
															viewBox="0 0 24 24"
															strokeWidth="1.5"
															stroke="currentColor"
															fill="none"
															strokeLinecap="round"
															strokeLinejoin="round"
														>
															<path stroke="none" d="M0 0h24v24H0z" />
															<circle cx={12} cy={12} r={1} />
															<circle cx={12} cy={19} r={1} />
															<circle cx={12} cy={5} r={1} />
														</svg>
													</button>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<InventoryModal
					modal={this.state.modal}
					onModalToggleAdd={this.onModalToggleAdd}
					state={this.state}
					onChange={this.onChange}
					suppliers={this.props.suppliers}
					products={this.props.products}
					onAddSubmit={this.onAddSubmit}
					onUpdateSubmit={this.onUpdateSubmit}
					EditButtonIsClicked={EditButtonIsClicked}
					onEditCloseButton={this.onEditCloseButton}
				/>
				<div
					class={
						this.state.table_export_modal ? 'h-screen ' : 'h-screen hidden'
					}
				>
					<div class="mx-auto max-w-screen-lg h-full">
						<div
							className="z-20 absolute top-0 right-0 bottom-0 left-0"
							id="modal"
						>
							<div class="modal-overlay absolute w-full h-full z-25 bg-gray-900 opacity-50"></div>
							<div className="h-full overflow-auto w-1/2 mx-auto flex flex-col">
								<div className="m-2 md:m-12">
									<form class="mt-9">
										<div className="relative p-4 md:p-8 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-md rounded border border-gray-400 ">
											<div class="text-left p-0 mb-8">
												<div>
													<i class="far fa-motorcycle fa-3x mb-3 inline-block"></i>{' '}
													<h1 class="font-Montserrat text-gray-800 text-2xl inline-block">
														ABC Motor Parts
													</h1>
												</div>

												<h1 class="text-gray-800 text-3xl font-medium">
													Export to :{' '}
												</h1>
											</div>
											<ReactHTMLTableToExcel
												className="bg-green-600 h-12 rounded text-white w-full"
												table="inventory-table"
												filename="inventory-table"
												sheet="inventory-table"
												buttonText="Excel"
											/>
											<button className="bg-blue-500 h-12 rounded text-white w-full my-8">
												Word
											</button>
											<div class="text-left p-0 mb-8">
												<h1 class="text-gray-800 text-3xl font-medium">
													Or print it :{' '}
												</h1>
											</div>
											<ReactToPrint
												trigger={() => {
													// NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
													// to the root node of the returned component as it will be overwritten.
													return (
														<div className="text-white cursor-pointer bg-gray-500 w-full h-12 rounded flex items-center justify-center">
															Print
														</div>
													);
												}}
												content={() => this.componentRef}
											/>
											<div
												onClick={this.OnToggleExportTable}
												className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 dark:text-gray-400 transition duration-150 ease-in-out"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													aria-label="Close"
													className="icon icon-tabler icon-tabler-x"
													width={35}
													height={35}
													viewBox="0 0 24 24"
													strokeWidth="2.5"
													stroke="currentColor"
													fill="none"
													strokeLinecap="round"
													strokeLinejoin="round"
												>
													<path stroke="none" d="M0 0h24v24H0z" />
													<line x1={18} y1={6} x2={6} y2={18} />
													<line x1={6} y1={6} x2={18} y2={18} />
												</svg>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="hidden">
					<InventoryTablePrint
						inventories={filteredData}
						ref={(el) => (this.componentRef = el)}
					/>
				</div>
			</>
		);
	}
}
const mapStateToProps = (state) => ({
	inventories: state.inventories.inventories,
	inventory: state.inventories.inventory,
	suppliers: state.suppliers.suppliers,
	products: state.products.products,
	categories: state.products.categories,
});

export default connect(mapStateToProps, {
	addInventory,
	getSupplierList,
	getProductList,
	getInventoryList,
	getInventory,
	deleteInventory,
	updateInventory,
	getCategoryList,
})(InventorySettingIndex);
