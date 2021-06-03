import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTransactionList } from '../../../store/actions/Transaction/transactions.js';
export class TransanctionSetting extends Component {
	static propTypes = {
		transanctions: PropTypes.array.isRequired,
		getTransanctionList: PropTypes.func.isRequired,
	};
	state = {
		search: '',
	};
	onChange = (e) => this.setState({ [e.target.name]: e.target.value });
	componentDidMount() {
		this.props.getTransactionList();
	}

	render() {
		//returning the search filtered
		const lowercasedFilter = this.state.search.toLowerCase();
		const filteredData = this.props.transactions.filter((item) => {
			return Object.keys(item).some((key) =>
				item[key].toString().toLowerCase().includes(lowercasedFilter)
			);
		});
		return (
			<Fragment>
				<div className='container'>
					<div className='card_cust p-5'>
						<div className='d-flex align-items-center mb-3 p-2 form-row'>
							<h2 className='col-auto'>Transaction History</h2>
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
						<table
							className='table table-striped align-middl'
							style={{ textAlign: 'center' }}
						>
							<thead>
								<tr>
									<th className='text-center'>ID</th>
									<th className='text-center'>Date</th>
									<th className='text-center'>Total Amount</th>
									<th className='text-center'>Amount Tendered</th>
									<th className='text-center'>Change</th>
									<th className='text-center'>Total Number of items</th>
								</tr>
							</thead>
							<tbody>
								{filteredData.map((transaction) => (
									<tr key={transaction.id}>
										<td className='align-middle'>{transaction.id}</td>
										<td className='align-middle'>{transaction.created_at}</td>
										<td className='align-middle'>{transaction.totalAmount}</td>
										<td className='align-middle'>
											{transaction.amount_tendered}
										</td>
										<td className='align-middle'>{transaction.change}</td>
										<td className='align-middle'>{transaction.quantity}</td>
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
	transactions: state.transactions.transactions,
});

export default connect(mapStateToProps, {
	getTransactionList,
})(TransanctionSetting);
