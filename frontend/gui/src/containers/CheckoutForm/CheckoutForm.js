import React, { Component } from "react"
import { addTransaction } from "../../store/actions/Transaction/transactions"
import { addTransactionItems } from "../../store/actions/Transaction/transactions"
import { connect } from "react-redux"
import {
  removeFromCart,
  changeCartValue,
} from "../../store/actions/Cart/cartActions"
import * as AiIcons from "react-icons/ai"

export class Cart extends Component {
  state = {
    totalAmount: 0,
    tempAmount: 0,
    tax: 0,
    amount_tendered: 0,
    change: 0,
    transanction_id: 0,
  }
  onChange() {
    return (event) => {
      this.setState({ [event.target.name]: event.target.value })
    }
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
    this.setState({
      change: this.state.amount_tendered - this.state.totalAmount,
    })

    this.props.cartItems.map((item) => (quantity += item.quantity))
    const { totalAmount, amount_tendered, change } = this.state
    const items = this.props.cartItems
    const data = { totalAmount, amount_tendered, change, quantity, items }
    this.props.addTransactionItems(data)
  }

  componentDidMount() {
    let VariableTotalAmount = 0
    this.props.cartItems.map(
      (item) => (VariableTotalAmount += item.price * item.quantity),
    )
    this.setState({
      totalAmount: this.HandleDecimalPlaces(VariableTotalAmount),
      tempAmount: this.HandleDecimalPlaces(
        (VariableTotalAmount -= VariableTotalAmount * 0.12),
      ),
      tax: this.HandleDecimalPlaces(VariableTotalAmount * 0.12),
    })
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.props.cartItems !== prevProps.cartItems) {
  //     let VariableTotalAmount = 0
  //     this.props.cartItems.map(
  //       (item) => (VariableTotalAmount += item.price * item.quantity),
  //     )
  //     this.setState({
  //       totalAmount: this.HandleDecimalPlaces(VariableTotalAmount),
  //       tempAmount: this.HandleDecimalPlaces(
  //         (VariableTotalAmount -= VariableTotalAmount * 0.12),
  //       ),
  //       tax: this.HandleDecimalPlaces(VariableTotalAmount * 0.12),
  //     })
  //   }
  // }
  render() {
    const { cartItems } = this.props
    return (
      <>
        <div
          className='modal fade'
          id='exampleModalCenter'
          tabIndex='-1'
          role='dialog'
          aria-labelledby='exampleModalCenterTitle'
          aria-hidden='true'>
          <div
            className='modal-dialog modal-dialog-centered modal-lg'
            role='document'>
            <div className='modal-content'>
              <div className='modal-header'>
                <button
                  type='button'
                  className='close'
                  data-dismiss='modal'
                  aria-label='Close'>
                  <span aria-hidden='true'>&times;</span>
                </button>
              </div>
              <div className='modal-body d-flex justify-content-between'>
                <h2 className='pl-5' id='exampleModalLongTitle'>
                  Amount To Pay
                </h2>
                <h2 className='pr-5' id='exampleModalLongTitle'>
                  <strong>
                    ${this.numberWithCommas(this.state.totalAmount)}
                  </strong>
                </h2>
              </div>
              <div className='modal-body'>
                <h2 className='pl-5' id='exampleModalLongTitle'>
                  Amount given by Customer
                </h2>
                <div className='row mt-5'>
                  <div className='input-group col-lg-3'>
                    <div className='input-group-prepend'>
                      <div className='input-group-text'>$</div>
                    </div>
                    <input
                      type='text'
                      className='form-control'
                      value={this.state.amount_tendered}
                      name='amount_tendered'
                      onChange={this.onChange()}
                      style={{ height: "3rem" }}
                      aria-label='Amount (to the nearest dollar)'
                    />
                  </div>
                  <div className='col-lg-3'>
                    <button
                      type='button'
                      className='btn btn-secondary btn-lg btn-block'>
                      <strong>
                        ${this.numberWithCommas(this.state.totalAmount)}
                      </strong>
                    </button>
                  </div>
                  <div className='col-lg-3'>
                    <button
                      type='button'
                      className='btn btn-secondary btn-lg btn-block'>
                      {this.state.change}
                    </button>
                  </div>
                  <div className='col-lg-3'>
                    <button
                      type='button'
                      onClick={this.handleClick}
                      className='btn btn-secondary btn-lg btn-block'>
                      1000
                    </button>
                  </div>
                </div>
              </div>
              <div className='modal-footer pb-5'></div>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-lg-4'>
            <div className='container'>
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
                      <span>
                        ${this.numberWithCommas(this.state.tempAmount)}
                      </span>
                    </li>
                    <li className='list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3'>
                      <div>Tax</div>
                      <span>${this.numberWithCommas(this.state.tax)}</span>
                    </li>
                    <li className='list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3'>
                      <div>
                        <h3>
                          <strong>Total</strong>
                        </h3>
                      </div>
                      <span>
                        <h3>
                          <strong>
                            ${this.numberWithCommas(this.state.totalAmount)}
                          </strong>
                        </h3>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-8 '>
            <div className='container'>
              <div className='row mt-5'>
                <div className='col-lg-3'>
                  <h1 className='display-3 text-secondary'>Pay</h1>
                </div>
                <div className='col-lg-9'>
                  <div className='card text-center'>
                    <div className='card-body'>
                      <p className='card-text display-4'>
                        <span>
                          <strong>
                            ${this.numberWithCommas(this.state.totalAmount)}
                          </strong>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row mt-5'>
                <div className='col-lg-4'>
                  <button
                    type='button'
                    data-toggle='modal'
                    data-target='#exampleModalCenter'
                    className='btn btn-primary btn-lg btn-block'>
                    Cash
                  </button>
                </div>
                <div className='col-lg-4'>
                  <button
                    type='button'
                    className='btn btn-primary btn-lg btn-block'>
                    Gcash
                  </button>
                </div>
                <div className='col-lg-4'>
                  <button
                    type='button'
                    className='btn btn-primary btn-lg btn-block'>
                    Gift Card
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

const mapToStateToProps = (state) => ({
  get_transaction: state.transactions.get_transaction,
  cartItems: state.cartReducer.cartItems,
})
export default connect(mapToStateToProps, {
  removeFromCart,
  changeCartValue,
  addTransaction,
  addTransactionItems,
})(Cart)
