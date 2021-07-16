import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../store/actions/account/auth';
import React from 'react';
import { loadUser } from '../../store/actions/account/auth';
import swal from 'sweetalert';
class MainLayout extends React.Component {
	state = {
		DashboardNavBtn: false,
		ProductsNavBtn: false,
		ReportsNavBtn: false,
		ProductSettingNavBtn: false,
		InventoryNavBtn: false,
		SupplierNavBtn: false,
		TransactionsNavBtn: false,
		TransactionsItemsNavBtn: false,
		showButtonScroll: false,
	};

	componentDidMount() {
		this.props.loadUser();
		window.addEventListener('scroll', this.handleScroll);
		// window.addEventListener('beforeunload', (ev) => {
		// 	ev.preventDefault();
		// 	swal('Write something here:', {
		// 		content: 'input',
		// 	}).then((value) => {
		// 		swal(`You typed: ${value}`);
		// 	});
		// });
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
		// window.addEventListener('beforeunload', (ev) => {
		// 	ev.preventDefault();
		// 	swal('Write something here:', {
		// 		content: 'input',
		// 	}).then((value) => {
		// 		swal(`You typed: ${value}`);
		// 	});
		// });
	}
	handleScroll = () => {
		if (!this.state.showButtonScroll && window.pageYOffset > 300) {
			this.setState({
				showButtonScroll: true,
			});
		} else if (this.state.showButtonScroll && window.pageYOffset <= 300) {
			this.setState({
				showButtonScroll: false,
			});
		}
	};

	setScrollTop = (e) => {
		e.preventDefault();
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};
	setActiveNav(NavBtn) {
		return (e) => {
			e.preventDefault();
			if (NavBtn === 'DashboardNavBtn') {
				this.setState({
					DashboardNavBtn: true,
					ProductsNavBtn: false,
					ReportsNavBtn: false,
					ProductSettingNavBtn: false,
					InventoryNavBtn: false,
					SupplierNavBtn: false,
					TransactionsNavBtn: false,
					TransactionsItemsNavBtn: false,
				});
			} else if (NavBtn === 'ProductsNavBtn') {
				this.setState({
					DashboardNavBtn: false,
					ProductsNavBtn: true,
					ReportsNavBtn: false,
					ProductSettingNavBtn: false,
					InventoryNavBtn: false,
					SupplierNavBtn: false,
					TransactionsNavBtn: false,
					TransactionsItemsNavBtn: false,
				});
			} else if (NavBtn === 'ReportsNavBtn') {
				this.setState({
					DashboardNavBtn: false,
					ProductsNavBtn: false,
					ReportsNavBtn: true,
					ProductSettingNavBtn: false,
					InventoryNavBtn: false,
					SupplierNavBtn: false,
					TransactionsNavBtn: false,
					TransactionsItemsNavBtn: false,
				});
			} else if (NavBtn === 'ProductSettingNavBtn') {
				this.setState({
					DashboardNavBtn: false,
					ProductsNavBtn: false,
					ReportsNavBtn: false,
					ProductSettingNavBtn: true,
					InventoryNavBtn: false,
					SupplierNavBtn: false,
					TransactionsNavBtn: false,
					TransactionsItemsNavBtn: false,
				});
			} else if (NavBtn === 'InventoryNavBtn') {
				this.setState({
					DashboardNavBtn: false,
					ProductsNavBtn: false,
					ReportsNavBtn: false,
					ProductSettingNavBtn: false,
					InventoryNavBtn: true,
					SupplierNavBtn: false,
					TransactionsNavBtn: false,
					TransactionsItemsNavBtn: false,
				});
			} else if (NavBtn === 'SupplierNavBtn') {
				this.setState({
					DashboardNavBtn: false,
					ProductsNavBtn: false,
					ReportsNavBtn: false,
					ProductSettingNavBtn: false,
					InventoryNavBtn: false,
					SupplierNavBtn: true,
					TransactionsNavBtn: false,
					TransactionsItemsNavBtn: false,
				});
			} else if (NavBtn === 'TransactionsNavBtn') {
				this.setState({
					DashboardNavBtn: false,
					ProductsNavBtn: false,
					ReportsNavBtn: false,
					ProductSettingNavBtn: false,
					InventoryNavBtn: false,
					SupplierNavBtn: false,
					TransactionsNavBtn: true,
					TransactionsItemsNavBtn: false,
				});
			} else if (NavBtn === 'TransactionsItemsNavBtn') {
				this.setState({
					DashboardNavBtn: false,
					ProductsNavBtn: false,
					ReportsNavBtn: false,
					ProductSettingNavBtn: false,
					InventoryNavBtn: false,
					SupplierNavBtn: false,
					TransactionsNavBtn: false,
					TransactionsItemsNavBtn: true,
				});
			}
		};
	}

	handleLogout = (e) => {
		e.preventDefault();
		this.props.history.push('/login');
		this.props.logout();
	};
	setDropDown(e) {
		e.preventDefault();
		document.getElementById('myDropdown').classList.toggle('invisible');
	}

	render() {
		const {
			DashboardNavBtn,
			ProductsNavBtn,
			ReportsNavBtn,
			ProductSettingNavBtn,
			InventoryNavBtn,
			SupplierNavBtn,
			TransactionsNavBtn,
			TransactionsItemsNavBtn,
		} = this.state;

		return (
			<>
				<div
					className={
						!this.state.showButtonScroll
							? 'hidden '
							: 'flex justify-center w-full'
					}
				>
					<div
						onClick={this.setScrollTop}
						className="text-white cursor-pointer hover:bg-teal_custom bg-gray-600 w-10 h-10 lg:w-14 lg:h-14 fixed bottom-24 lg:bottom-8  z-10 rounded flex items-center justify-center "
					>
						<i class="fad fa-arrow-up fa-2x"></i>
					</div>
				</div>
				<nav
					class="bg-gray-800 pt-2 pb-1 px-1 mt-0 h-auto fixed w-full
			z-20 top-0"
				>
					<div class="flex flex-wrap justify-between items-center">
						<div class="flex pt-2 w-1/2 md:w-1/3 justify-start text-white">
							<i class="far fa-motorcycle fa-2x px-3 "></i>
							<h1 class="font-Montserrat text-base">ABC Motor Parts</h1>
						</div>

						<div
							class="flex
						pt-2
						content-center
						w-1/3
						justify-end"
						>
							<div
								class="flex
							justify-around
							flex-none
							items-center"
							>
								<div class="relative inline-block lg:mr-2 py-2">
									<button
										onClick={this.setDropDown}
										class=" text-white focus:outline-none"
									>
										{' '}
										<span class="pr-2">
											<i class="fad fa-user-friends"></i>
										</span>{' '}
										Hi, User{' '}
										<svg
											class="h-3 fill-current inline"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
										>
											<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
										</svg>
									</button>
									<div
										id="myDropdown"
										class="dropdownlist absolute bg-gray-800 text-white right-0 mt-3 p-3 overflow-auto z-30 w-36 invisible"
									>
										<div className="">
											{this.props.AuthReducer.is_superuser ? (
												<Link
													to="/accounts/settings/menu"
													class="p-2 hover:bg-gray-800 text-white text-sm hover:no-underline inline-block"
												>
													<i class="fa fa-cog fa-fw"></i> Settings
												</Link>
											) : (
												''
											)}
											{/* {this.props.AuthReducer.is_superuser ? (
												<Link
													to="/registerAccount"
													class="p-2 hover:bg-gray-800 text-white text-sm hover:no-underline inline-block"
												>
													<i class="fa fa-user-plus fa-fw"></i> Create User
												</Link>
											) : (
												''
											)} */}
											{/* <div class="border border-gray-800"></div> */}
											{/* {!this.props.AuthReducer.isAuthenticated ? (
												<Link
													to="Login"
													class="p-2 hover:bg-gray-800 text-white text-sm hover:no-underline inline-block"
												>
													<i class="fas fa-sign-in-alt fa-fw"></i> Login
												</Link>
											) : ( */}
											<div
												onClick={this.handleLogout}
												class="p-2 hover:bg-gray-800 text-white text-sm hover:no-underline inline-block cursor-pointer"
											>
												<i class="fas fa-sign-out-alt fa-fw"></i> Logout
											</div>
											{/* )} */}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</nav>

				<div class="flex flex-col lg:flex-row bg-gray-800">
					{this.props.AuthReducer.is_superuser ? (
						<div class="shadow-xl h-16 fixed bottom-0 lg:relative lg:h-screen w-full lg:w-48 z-10 bg-gray-800">
							<div class="lg:mt-20 overflow-x-scroll md:overflow-x-hidden lg:w-48 lg:fixed lg:left-0 lg:top-0 text-left bg-gray-800">
								<ul
									id="NavDiv"
									class="flex flex-row lg:flex-col py-0 lg:py-3 px-1 lg:px-2 text-center lg:text-left"
								>
									<li
										class="mr-3 flex-1 NavBtn"
										onClick={this.setActiveNav('DashboardNavBtn')}
									>
										<Link
											to="/dashboard"
											class={
												DashboardNavBtn
													? 'block py-1 lg:py-3 pl-1 align-middle text-teal_custom no-underline border-b-2 border-teal_custom'
													: 'block py-1 lg:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-teal_custom'
											}
										>
											<i className="fas fa-chart-line pr-0 lg:pr-3"></i>
											<span
												class={
													DashboardNavBtn
														? 'pb-1 lg:pb-0 text-xs lg:text-base text-white  block lg:inline-block'
														: 'pb-1 lg:pb-0 text-xs lg:text-base text-gray-400 hover:text-white block lg:inline-block'
												}
											>
												Dashboard
											</span>
										</Link>
									</li>
									<li
										class="mr-3 flex-1 NavBtn"
										onClick={this.setActiveNav('ProductsNavBtn')}
									>
										<Link
											to="/products"
											class={
												ProductsNavBtn
													? 'block py-1 lg:py-3 pl-1 align-middle text-teal_custom no-underline border-b-2 border-teal_custom'
													: 'block py-1 lg:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-teal_custom'
											}
										>
											<i className="fas fa-cart-plus pr-0 lg:pr-3"></i>
											<span
												class={
													ProductsNavBtn
														? 'pb-1 lg:pb-0 text-xs lg:text-base text-white  block lg:inline-block'
														: 'pb-1 lg:pb-0 text-xs lg:text-base text-gray-400 hover:text-white block lg:inline-block'
												}
											>
												Products
											</span>
										</Link>
									</li>
									<li
										class="mr-3 flex-1 NavBtn"
										onClick={this.setActiveNav('ReportsNavBtn')}
									>
										<div
											class={
												ReportsNavBtn
													? 'block py-1 lg:py-3 pl-1 align-middle text-teal_custom no-underline border-b-2 border-teal_custom'
													: 'block py-1 lg:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-teal_custom'
											}
										>
											<i class="fas fa-file-alt  pr-0 lg:pr-3 "></i>
											<span
												class={
													ReportsNavBtn
														? 'pb-1 lg:pb-0 text-xs lg:text-base text-white  block lg:inline-block'
														: 'pb-1 lg:pb-0 text-xs lg:text-base text-gray-400 hover:text-white block lg:inline-block'
												}
											>
												Reports
											</span>
										</div>
									</li>
									<li
										class={
											ReportsNavBtn
												? 'mr-3 flex-1 flex-col ml-10'
												: 'mr-3 flex-1 hidden'
										}
										onClick={this.setActiveNav('ReportsNavBtn')}
									>
										<div className="flex justify-start ">
											<Link
												to="/reports/sales"
												class={
													'py-3 text-white no-underline hover:text-white border-b-2 border-gray-800  hover:border-teal_custom'
												}
											>
												<i class="fad fa-money-check-edit pr-0 lg:pr-3 "></i>

												<span
													class={
														'pb-1 lg:pb-0 text-xs lg:text-base text-gray-400 hover:text-white  block lg:inline-block'
													}
												>
													Sales
												</span>
											</Link>
										</div>

										<div className="flex justify-start ">
											<Link
												to="/reports/inventories"
												class={
													'py-3 text-white no-underline hover:text-white border-b-2 border-gray-800  hover:border-teal_custom'
												}
											>
												<i class="fad fa-dolly-flatbed-alt  pr-0 lg:pr-3 "></i>
												<span
													class={
														'pb-1 lg:pb-0 text-xs lg:text-base text-gray-400 hover:text-white  block lg:inline-block'
													}
												>
													Inventory
												</span>
											</Link>
										</div>
										<div className="flex justify-start ">
											<Link
												to="/reports/products"
												class={
													'py-3 text-white no-underline hover:text-white border-b-2 border-gray-800  hover:border-teal_custom'
												}
											>
												<i class="fas fa-file-alt  pr-0 lg:pr-3 "></i>
												<span
													class={
														'pb-1 lg:pb-0 text-xs lg:text-base text-gray-400 hover:text-white  block lg:inline-block'
													}
												>
													Stocks
												</span>
											</Link>
										</div>
									</li>
									<li
										class="mr-3 flex-1 NavBtn"
										onClick={this.setActiveNav('ProductSettingNavBtn')}
									>
										<Link
											to="/products/settings"
											class={
												ProductSettingNavBtn
													? 'block py-1 lg:py-3 pl-1 align-middle text-teal_custom no-underline border-b-2 border-teal_custom'
													: 'block py-1 lg:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-teal_custom'
											}
										>
											<i className="fas fa-sliders-h pr-0 lg:pr-3"></i>

											<div
												class={
													ProductSettingNavBtn
														? 'pb-1 lg:pb-0 text-xs lg:text-base text-white  block lg:inline-block'
														: 'pb-1 lg:pb-0 text-xs lg:text-base text-gray-400 hover:text-white block lg:inline-block'
												}
											>
												Product Setting
											</div>
										</Link>
									</li>
									<li
										class="mr-3 flex-1 NavBtn"
										onClick={this.setActiveNav('InventoryNavBtn')}
									>
										<Link
											to="/inventories"
											class={
												InventoryNavBtn
													? 'block py-1 lg:py-3 pl-1 align-middle text-teal_custom no-underline border-b-2 border-teal_custom'
													: 'block py-1 lg:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-teal_custom'
											}
										>
											<i className="fad fa-dolly-flatbed-alt pr-0 lg:pr-3"></i>
											<span
												class={
													InventoryNavBtn
														? 'pb-1 lg:pb-0 text-xs lg:text-base text-white  block lg:inline-block'
														: 'pb-1 lg:pb-0 text-xs lg:text-base text-gray-400 hover:text-white block lg:inline-block'
												}
											>
												Inventory
											</span>
										</Link>
									</li>
									<li
										class="mr-3 flex-1 NavBtn"
										onClick={this.setActiveNav('SupplierNavBtn')}
									>
										<Link
											to="/supplier"
											class={
												SupplierNavBtn
													? 'block py-1 lg:py-3 pl-1 align-middle text-teal_custom no-underline border-b-2 border-teal_custom'
													: 'block py-1 lg:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-teal_custom'
											}
										>
											<i className="fas fa-clipboard-list pr-0 lg:pr-3"></i>
											<span
												class={
													SupplierNavBtn
														? 'pb-1 lg:pb-0 text-xs lg:text-base text-white  block lg:inline-block'
														: 'pb-1 lg:pb-0 text-xs lg:text-base text-gray-400 hover:text-white block lg:inline-block'
												}
											>
												Supplier
											</span>
										</Link>
									</li>
									<li
										class="mr-3 flex-1 NavBtn"
										onClick={this.setActiveNav('TransactionsNavBtn')}
									>
										<Link
											to="/transactions"
											class={
												TransactionsNavBtn
													? 'block py-1 lg:py-3 pl-1 align-middle text-teal_custom no-underline border-b-2 border-teal_custom'
													: 'block py-1 lg:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-teal_custom'
											}
										>
											<i className="fas fa-coins pr-0 lg:pr-3"></i>
											<span
												class={
													TransactionsNavBtn
														? 'pb-1 lg:pb-0 text-xs lg:text-base text-white  block lg:inline-block'
														: 'pb-1 lg:pb-0 text-xs lg:text-base text-gray-400 hover:text-white block lg:inline-block'
												}
											>
												Transactions
											</span>
										</Link>
									</li>
									<li
										class="mr-3 flex-1 NavBtn"
										onClick={this.setActiveNav('TransactionsItemsNavBtn')}
									>
										<Link
											to="/transactions/items"
											class={
												TransactionsItemsNavBtn
													? 'block py-1 lg:py-3 pl-1 align-middle text-teal_custom no-underline border-b-2 border-teal_custom'
													: 'block py-1 lg:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-teal_custom'
											}
										>
											<i className="fas fa-coins pr-0 lg:pr-3"></i>
											<span
												class={
													TransactionsItemsNavBtn
														? 'pb-1 lg:pb-0 text-xs align-middle lg:text-base text-white  block lg:inline-block'
														: 'pb-1 lg:pb-0 text-xs align-middle lg:text-base text-gray-400 hover:text-white block lg:inline-block'
												}
											>
												Transaction <div>Item's History</div>
											</span>
										</Link>
									</li>

									{/* <li class="mr-3 flex-1">
								<a
									href="#"
									class="block py-1 lg:py-3 pl-0 lg:pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-red-500"
								>
									<i className="fas fa-sitemap pr-0 lg:pr-3"></i>
									<span class="pb-1 lg:pb-0 text-xs lg:text-base text-gray-600 lg:text-gray-400 block lg:inline-block">
										Transaction Item's History
									</span>
								</a>
							</li> */}
								</ul>
							</div>
						</div>
					) : (
						''
					)}

					{this.props.children}
				</div>
			</>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		AuthReducer: state.AuthReducer,
	};
};
export default withRouter(
	connect(mapStateToProps, { logout, loadUser })(MainLayout)
);
