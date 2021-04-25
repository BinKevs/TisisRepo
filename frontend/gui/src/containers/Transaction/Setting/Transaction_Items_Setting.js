import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTransactionItemList } from '../../../store/actions/Transaction/transactions.js';
import * as BsIcons from 'react-icons/bs';
let TransactionItems = [];
export class TransanctionItemsSetting extends Component {
	static propTypes = {
		transaction_items: PropTypes.array.isRequired,
		getTransactionItemList: PropTypes.func.isRequired,
	};
	state = {
		search: '',
	};
	componentDidMount() {
		this.props.getTransactionItemList();
	}
	onChange = (e) => this.setState({ [e.target.name]: e.target.value });
	render() {
		//destructuring the dictionary for searching/ fetching purposes
		TransactionItems = [];
		this.props.transaction_items.map((trans) =>
			TransactionItems.push({
				id: trans.id,
				productName: trans.product_info.name,
				productPrice: trans.product_info.price,
				transactionDate: trans.transaction_date.created_at,
				quantity: trans.quantity,
			})
		);
		//returning the filtered data from search
		const lowercasedFilter = this.state.search.toLowerCase();
		const filteredData = TransactionItems.filter((item) => {
			return Object.keys(item).some((key) =>
				item[key].toString().toLowerCase().includes(lowercasedFilter)
			);
		});
		return (
			<Fragment>
				<div className='container'>
					<div className='card_cust p-5'>
						<div className='d-flex align-items-center mb-3 p-2 form-row'>
							<h2 className='col-auto'>Transaction Items History</h2>
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
						<table
							className='table table-striped align-middl'
							style={{ textAlign: 'center' }}
						>
							<thead>
								<tr>
									<th className='text-center'>ID</th>
									<th className='text-center'>Product Name</th>
									<th className='text-center'>Price</th>
									<th className='text-center'>Date</th>
									<th className='text-center'>Quantity</th>
								</tr>
							</thead>
							<tbody>
								{filteredData.map((item) => (
									<tr key={item.id}>
										<td className='align-middle'>{item.id}</td>
										<td className='align-middle'>{item.productName}</td>
										<td className='align-middle'>{item.productPrice}</td>
										<td className='align-middle'>{item.transactionDate}</td>
										<td className='align-middle'>{item.quantity}</td>
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
	transaction_items: state.transactions.transaction_item_list,
});

export default connect(mapStateToProps, {
	getTransactionItemList,
})(TransanctionItemsSetting);
