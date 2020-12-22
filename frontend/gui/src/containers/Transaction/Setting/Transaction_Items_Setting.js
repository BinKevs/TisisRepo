import React, { Component, Fragment } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { getTransactionItemList } from "../../../store/actions/Transaction/transactions.js"
export class TransanctionItemsSetting extends Component {
  static propTypes = {
    transaction_items: PropTypes.array.isRequired,
    getTransactionItemList: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.getTransactionItemList()
  }

  render() {
    return (
      <Fragment>
        <div className='container'>
          <h2>Transanction Items</h2>
          <table
            className='table table-striped align-middl'
            style={{ textAlign: "center" }}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Date</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {this.props.transaction_items.map((item) => (
                <tr key={item.id}>
                  <td className='align-middle'>{item.id}</td>
                  <td className='align-middle'>{item.product_info.name}</td>
                  <td className='align-middle'>{item.product_info.price}</td>
                  <td className='align-middle'>
                    {item.transaction_date.created_at}
                  </td>
                  <td className='align-middle'>{item.quantity}</td>
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
  transaction_items: state.transactions.transaction_item_list,
})

export default connect(mapStateToProps, {
  getTransactionItemList,
})(TransanctionItemsSetting)
