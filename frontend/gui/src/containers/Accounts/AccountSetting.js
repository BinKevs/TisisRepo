import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAccountList } from '../../store/actions/Accounts/auth';

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
									<th className='text-center'>First Name</th>
									<th className='text-center'>Last Name</th>
									<th className='text-center'>Email</th>
									<th className='text-center'>SuperUserStatus</th>
									<th />
								</tr>
							</thead>
							<tbody>
								{this.props.accounts.map((account) => (
									<tr key={account.id}>
										<td className='text-center'>{account.id}</td>
										<td className='text-center'>{account.first_name}</td>
										<td className='text-center'>{account.last_name}</td>
										<td className='text-center'>{account.email}</td>
										<td className='text-center'>
											{account.is_superuser ? 'True' : 'False'}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</Fragment>
		);
	}
}

const mapStateToProps = (state) => ({
	accounts: state.AuthReducer.accounts,
});

export default connect(mapStateToProps, { getAccountList })(AccountSetting);
