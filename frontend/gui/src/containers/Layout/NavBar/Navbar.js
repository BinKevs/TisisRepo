import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../../store/actions/Accounts/auth';

class Navbar extends React.Component {
	static propTypes = {
		logout: PropTypes.func.isRequired,
		AuthReducer: PropTypes.object.isRequired,
	};
	render() {
		const { sidebarStatus } = this.props;
		return (
			<>
				<nav id='sidebar'>
					<div id='dismiss'>
						<i className='fas fa-arrow-left fa-1x'></i>
					</div>
					<div className='sidebar-header'>
						<h3>ABC Motor Parts</h3>
						<strong>Online Sale's and Inventory</strong>
					</div>
					<ul className='list-unstyled components'>
						<li className='ps-3'>
							<Link to='/dashboard' class='dismiss'>
								<i className='fas fa-chart-line'></i> Dashboard
							</Link>

							<Link to='/products' class='dismiss'>
								<i className='fas fa-cart-plus'></i> Products
							</Link>

							<Link to='/reports' class='dismiss'>
								<i class='fas fa-file-alt'></i> Reports
							</Link>

							<Link to='/products/setting' class='dismiss'>
								<i className='fas fa-sliders-h'></i> Product Setting
							</Link>

							<Link to='/inventories/setting' class='dismiss'>
								<i className='fas fa-clipboard-list'></i> Inventory
							</Link>

							<Link to='/accounts/setting' class='dismiss'>
								<i className='fas fa-user-cog'></i> Account Setting
							</Link>

							<Link to='/supplier' class='dismiss'>
								<i className='fas fa-clipboard-list'></i> Supplier
							</Link>

							<Link to='/transactions' class='dismiss'>
								<i className='fas fa-coins'></i> Transaction History
							</Link>

							<Link to='/transactions/items' class='dismiss'>
								<i className='fas fa-sitemap'></i> Transaction Item's History
							</Link>
						</li>
					</ul>
				</nav>
				<nav className='navbar navbar-expand-lg navbar-light bg-light mb-2 '>
					<div className='container-fluid'>
						<button type='button' id='sidebarCollapse' className='navbar-btn'>
							<i class='fal fa-bars fa-2x'></i>
						</button>

						<ul className='nav navbar-nav ms-auto'>
							{this.props.AuthReducer.isAuthenticated ? (
								<>
									<li className='nav-item' onClick={this.props.logout}>
										<Link to='/login'>
											<a className='nav-link'>Logout</a>
										</Link>
									</li>
								</>
							) : (
								<>
									<li className='nav-item'>
										<Link to='/login' className='nav-link'>
											Login
										</Link>
									</li>
									<li className='nav-item'>
										<Link to='/register' className='nav-link'>
											Register
										</Link>
									</li>
								</>
							)}
						</ul>
					</div>
				</nav>
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		AuthReducer: state.AuthReducer,
	};
};
export default withRouter(connect(mapStateToProps, { logout })(Navbar));
