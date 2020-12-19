import React, { Component } from "react"
import { addTransaction } from "../../store/actions/Transaction/transactions"
import { connect } from "react-redux"
import {
  removeFromCart,
  changeCartValue,
} from "../../store/actions/Cart/cartActions"
import * as AiIcons from "react-icons/ai"
import { Link } from "react-router-dom"
export class Checkout extends Component {
  state = {
    totalAmount: 0,
    tempAmount: 0,
    tax: 0,
  }
  onChange(id) {
    return (event) => {
      this.props.changeCartValue("type", id, event.target.value)
      this.setState({ [this.state.quantity]: event.target.value })
    }
  }
  HandleDecimalPlaces = (Variable) => {
    return Math.round((Variable + Number.EPSILON) * 100) / 100
  }

  numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
  }

  // OnClick = (event) => {
  //   // let quantity = 0
  //   // event.preventDefault()
  //   // this.props.cartItems.map((item) => (quantity += item.quantity))
  //   // const items = this.props.cartItems
  //   // console.log(items)
  //   // const data = { items, quantity }

  //   // this.props.addTransaction(data)

  // }

  // componentDidUpdate(prevProps, prevState) {
  //   let VariableTotalAmount = 0
  //   this.props.cartItems.map((item) => (VariableTotalAmount += item.price * item.quantity))
  // }
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

  componentDidUpdate(prevProps) {
    if (this.props.cartItems !== prevProps.cartItems) {
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

    return true
  }
  render() {
    const { cartItems } = this.props
    return (
      <>
        {/* <div
          className='modal fade '
          id='staticBackdrop'
          data-backdrop='static'
          data-keyboard='false'
          tabIndex='-1'
          aria-labelledby='staticBackdropLabel'
          aria-hidden='true'> */}
        {/* <div className='modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl'> */}
        {/* <div className='modal-content'> */}
        {/* <div className='divCon'> */}
        {/* <div className='modal-header'> */}
        {/* <h5 className='modal-title' id='staticBackdropLabel'> */}
        {/* <h5>Cart</h5> */}
        {/* <button
            type='button'
            className='close'
            data-dismiss='modal'
            aria-label='Close'>
            <span aria-hidden='true'>&times;</span>
          </button> */}
        {/* 
          <table className='table' style={{ textAlign: "center" }}>
            <thead className='thead-dark'>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.prod_id}>
                  <td className='align-middle'>
                    <img
                      className='img-responsive'
                      src='http://placehold.it/120x80'
                      alt='prewiew'
                      width='120'
                      height='80'
                    />
                  </td>
                  <td className='align-middle'>{item.product_name}</td>
                  <td className='align-middle'>{item.price}</td>
                  <td className='align-middle'>
                    <button
                      type='button'
                      className='btn btn-light btn-sm d-inline'
                      onClick={() => {
                        this.props.changeCartValue("plus", item.prod_id)
                      }}>
                      +
                    </button>
                    <input
                      className='form-control d-inline'
                      type='text'
                      style={{ width: "45px", textAlign: "center" }}
                      value={item.quantity}
                      onChange={this.onChange(item.prod_id)}
                    />
                    <button
                      type='button'
                      className='btn btn-light btn-sm d-inline'
                      onClick={() => {
                        this.props.changeCartValue("minus", item.prod_id)
                      }}>
                      -
                    </button>
                  </td>
                  <td className='align-middle'>
                    <button
                      type='button'
                      className='btn btn-outline-danger btn-xs'
                      onClick={() => this.props.removeFromCart(item)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className='modal-footer'>
            <button
              type='button'
              className='btn btn-secondary'
              data-dismiss='modal'
              onClick={this.OnClick}>
              Check-Out
            </button>
          </div>
        </div> */}
        {/* </div> */}
        {/* </div> */}
        {/* </div> */}
        <div className='container'>
          <div className='card mb-3 text-center'>
            <div className='card-body'>
              <div className='card-title'>
                <h2>Cart</h2>
              </div>

              <ul className='list-group list-group-flush'>
                <div className='overflow-auto' style={{ height: "25rem" }}>
                  {cartItems.map((item) => (
                    <li
                      key={item.product_id}
                      className='list-group-item d-flex align-items-stretch'>
                      <div className='d-flex align-items-center'>
                        <button
                          type='button'
                          className='btn btn-light btn-sm d-inline'
                          onClick={() => {
                            this.props.changeCartValue("plus", item.product_id)
                          }}>
                          +
                        </button>

                        <input
                          className='form-control d-inline'
                          type='text'
                          style={{
                            width: "45px",
                            fontSize: "10px",
                            textAlign: "center",
                          }}
                          value={item.quantity}
                          onChange={this.onChange(item.product_id)}
                        />

                        <button
                          type='button'
                          className='btn btn-light btn-sm d-inline'
                          onClick={() => {
                            this.props.changeCartValue("minus", item.product_id)
                          }}>
                          -
                        </button>
                      </div>
                      <span
                        className='d-flex align-items-center'
                        style={{ width: "9rem" }}>
                        {item.product_name}
                      </span>
                      <span className='d-flex align-items-center'>
                        ${item.price}
                      </span>
                      <span
                        className='d-flex align-items-center '
                        style={{ width: "4rem", height: "4rem" }}>
                        <button
                          type='button'
                          className='btn btn-block btn-outline-danger btn-xs'
                          onClick={() => this.props.removeFromCart(item)}>
                          <AiIcons.AiOutlineDelete />
                        </button>
                      </span>
                    </li>
                  ))}
                </div>
              </ul>

              <ul className='list-group list-group-flush'>
                <li className='list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0'>
                  Subtotal
                  <span>${this.numberWithCommas(this.state.tempAmount)}</span>
                </li>
                <li className='list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3'>
                  <div>
                    <strong>Tax</strong>
                  </div>
                  <span>
                    <strong>${this.numberWithCommas(this.state.tax)}</strong>
                  </span>
                </li>
              </ul>
              <Link to='/checkout'>
                <button
                  type='button'
                  // onClick={this.OnClick}
                  className='btn d-flex justify-content-between btn-primary btn-block waves-effect waves-light px-5 py-3'>
                  <div>Pay</div>
                  <span>${this.numberWithCommas(this.state.totalAmount)}</span>
                </button>
              </Link>
            </div>
          </div>

          <div className='card mb-3'>
            <div className='card-body'>
              <a
                className='dark-grey-text d-flex justify-content-between'
                data-toggle='collapse'
                href='#collapseExample1'
                aria-expanded='false'
                aria-controls='collapseExample1'>
                Add a discount code (optional)
                <span>
                  <i className='fas fa-chevron-down pt-1'></i>
                </span>
              </a>

              <div className='collapse' id='collapseExample1'>
                <div className='mt-3'>
                  <div className='md-form md-outline mb-0'>
                    <input
                      type='text'
                      id='discount-code1'
                      className='form-control font-weight-light'
                      placeholder='Enter discount code'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

// export default connect(
//   (state) => ({
//     cartItems: state.cartReducer.cartItems,
//   }),
//   { removeFromCart, changeCartValue },
// )(Cart)

const mapToStateToProps = (state) => ({
  cartItems: state.cartReducer.cartItems,
})
export default connect(mapToStateToProps, {
  removeFromCart,
  changeCartValue,
  addTransaction,
})(Checkout)
