import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import {
  removeFromCart,
  changeCartValue,
} from "../../store/actions/Cart/cartActions"
import { addTransaction } from "../../store/actions/Transaction/transactions"

import { addTransactionItems } from "../../store/actions/Transaction/transactions"
import CheckOutPaymentModal from "./CheckOutPaymentModal"
class CheckOutForm extends Component {
  static propTypes = {
    removeFromCart: PropTypes.func.isRequired,
    changeCartValue: PropTypes.func.isRequired,
    addTransaction: PropTypes.func.isRequired,
    addTransactionItems: PropTypes.func.isRequired,
    cartItems: PropTypes.array.isRequired,
  }
  state = {
    totalAmount: 0,
    Subtotal: 0,
    tax: 0,
    amount_tendered: 0,
    change: 0,
    transanction_id: 0,
  }
  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }
  HandleDecimalPlaces = (Variable) => {
    return Math.round((Variable + Number.EPSILON) * 100) / 100
  }

  numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
  }

  handleClick = (event) => {
    event.preventDefault()
    let quantity = 0

    this.props.cartItems.map((item) => (quantity += item.quantity))
    const { totalAmount, amount_tendered, change } = this.state
    const items = this.props.cartItems
    const data = { totalAmount, amount_tendered, change, quantity, items }
    this.props.addTransactionItems(data)
    localStorage.clear()
    this.props.history.push("/products")
  }
  handleSetAmountTendered = (AmountTendered) => {
    return (event) => {
      event.preventDefault()
      this.setState({
        amount_tendered: AmountTendered,
      })
    }
  }
  componentDidMount() {
    let VariableTotalAmount = 0
    this.props.cartItems.map(
      (item) => (VariableTotalAmount += item.price * item.quantity),
    )
    this.setState({
      totalAmount: this.HandleDecimalPlaces(VariableTotalAmount),
      Subtotal: this.HandleDecimalPlaces(
        (VariableTotalAmount -= VariableTotalAmount * 0.12),
      ),
      tax: this.HandleDecimalPlaces(VariableTotalAmount * 0.12),
    })
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.amount_tendered !== prevState.amount_tendered) {
      this.setState({
        change: this.state.amount_tendered - this.state.totalAmount,
      })
      console.log(this.state)
    }
  }

  render() {
    const { cartItems } = this.props
    const { Subtotal, tax, totalAmount } = this.state
    return (
      <div>
        <CheckOutPaymentModal
          state={this.state}
          numberWithCommas={this.numberWithCommas}
          handleClick={this.handleClick}
          onChange={this.onChange}
          handleSetAmountTendered={this.handleSetAmountTendered}
        />
        <div className='row'>
          <div className='col-lg-5'>
            <div>
              <div className='card card_cust mb-3'>
                <div className='card-body'>
                  <div className='card-title'>
                    <h4>Sale Summary</h4>
                  </div>

                  <ul className='list-group list-group-flush'>
                    <div className='overflow-auto' style={{ height: "32rem" }}>
                      {cartItems.map((item) => (
                        <li
                          key={item.product_id}
                          className='list-group-item d-flex align-items-stretch border-0'>
                          <span className='d-flex align-items-center'>
                            {item.quantity}
                          </span>
                          <span
                            className='d-flex align-items-center'
                            style={{ width: "9rem" }}>
                            {item.product_name}
                          </span>
                          <span
                            className='d-flex align-items-center mr-3'
                            style={{ width: "5rem" }}>
                            ${item.price}
                          </span>
                          <span className='d-flex align-items-center'>
                            ${item.price * item.quantity}
                          </span>
                        </li>
                      ))}
                    </div>
                  </ul>

                  <ul className='list-group list-group-flush'>
                    <li className='list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0'>
                      Subtotal
                      <span>${this.numberWithCommas(Subtotal)}</span>
                    </li>
                    <li className='list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3'>
                      <div>Tax</div>
                      <span>${this.numberWithCommas(tax)}</span>
                    </li>
                    <li className='list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3'>
                      <div>
                        <h3>
                          <strong>Total</strong>
                        </h3>
                      </div>
                      <span>
                        <h3>
                          <strong>${this.numberWithCommas(totalAmount)}</strong>
                        </h3>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-7 '>
            <div className='card_cust p-5'>
              <div className='row'>
                <div className='col-lg-3'>
                  <h1 className='display-3 text-secondary'>Pay</h1>
                </div>
                <div className='col-lg-9'>
                  <div className='card text-center'>
                    <div className='card-body'>
                      <p className='card-text display-4'>
                        <span>
                          <strong>${this.numberWithCommas(totalAmount)}</strong>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row mt-5'>
                <div className='col-md-6 col-lg-4 '>
                  <button
                    type='button'
                    data-toggle='modal'
                    data-target='#exampleModalCenter'
                    className='btn btn-primary btn-lg btn-block mb-3'>
                    Cash
                  </button>
                </div>
                <div className='col-md-6 col-lg-4'>
                  <button
                    type='button'
                    className='btn btn-primary btn-lg btn-block mb-3'>
                    Gcash
                  </button>
                </div>
                <div className='col-lg-4'>
                  <button
                    type='button'
                    className='btn btn-primary btn-lg btn-block '>
                    Gift Card
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapToStateToProps = (state) => ({
  cartItems: state.cartReducer.cartItems,
})
export default connect(mapToStateToProps, {
  removeFromCart,
  changeCartValue,
  addTransaction,
  addTransactionItems,
})(CheckOutForm)
