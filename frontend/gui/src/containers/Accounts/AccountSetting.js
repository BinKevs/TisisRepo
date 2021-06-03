import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAccountList } from '../../store/actions/Accounts/auth';
import AccountModalForm from './AccountModalForm';
export class AccountSetting extends Component {
	static propTypes = {
		accounts: PropTypes.array.isRequired,
		getAccountList: PropTypes.func.isRequired,
	};

	componentDidMount() {
		this.props.getAccountList();
	}

	render() {
		return (
			<Fragment>
				<div className='container'>
					<div className='card_cust p-5'>
						<h2>Accounts</h2>
						<table className='table table-striped'>
							<thead>
								<tr>
									<th className='text-center'>ID</th>
									<th className='text-center'>Username</th>
									<th className='text-center'>First Name</th>
									<th className='text-center'>Last Name</th>
									<th className='text-center'>Email</th>
									<th className='text-center'>Account created</th>
									<th className='text-center'>Account Type</th>
									<th className='text-center'>Account Status</th>
									<th className='text-center'>Account Permissions</th>
									<th className='text-center'>Action</th>

									<th />
								</tr>
							</thead>
							<tbody>
								{this.props.accounts.map((account) => (
									<tr key={account.id}>
										<td className='text-center'>{account.id}</td>
										<td className='text-center'>{account.username}</td>
										<td className='text-center'>{account.first_name}</td>
										<td className='text-center'>{account.last_name}</td>
										<td className='text-center'>{account.email}</td>
										<td className='text-center'>{account.date_joined}</td>
										<td className='text-center'>
											{account.is_superuser ? 'Admin' : 'Employee'}
										</td>
										<td className='text-center'>
											{account.is_active ? 'Active' : 'Not activate'}
										</td>
										<td className='text-center'>
											{account.is_superuser
												? 'Super-User'
												: 'Transaction, Inventory, Supplier, Reports'}
										</td>
										<td className='align-middle'>
											<button
												// onClick={this.onEditButtonClick(product.id)}
												data-bs-toggle='modal'
												data-bs-target='#AccountModalForm'
												className='btn btn-outline-secondary btn-xs'
											>
												<i className='far fa-pencil-alt'></i>
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
				<AccountModalForm />
			</Fragment>
		);
	}
}

const mapStateToProps = (state) => ({
	accounts: state.AuthReducer.accounts,
});

export default connect(mapStateToProps, { getAccountList })(AccountSetting);
