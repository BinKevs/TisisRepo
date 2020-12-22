import React, { Component, Fragment } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { getTransactionList } from "../../../store/actions/Transaction/transactions.js"
export class TransanctionSetting extends Component {
  static propTypes = {
    transanctions: PropTypes.array.isRequired,
    getTransanctionList: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.getTransactionList()
  }

  render() {
    return (
      <Fragment>
        <div className='container'>
          <h2>Transanctions</h2>
          <table
            className='table table-striped align-middl'
            style={{ textAlign: "center" }}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Date</th>
                <th>Total Amount</th>
                <th>Amount Tendered</th>
                <th>Change</th>
                <th>Total Number of items</th>
              </tr>
            </thead>
            <tbody>
              {this.props.transactions.map((transaction) => (
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
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  transactions: state.transactions.transactions,
})

export default connect(mapStateToProps, {
  getTransactionList,
})(TransanctionSetting)
