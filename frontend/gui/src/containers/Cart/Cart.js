import React, { Component } from "react"
import { addTransaction } from "../../store/actions/Transaction/transactions"
import { connect } from "react-redux"
import {
  removeFromCart,
  changeCartValue,
} from "../../store/actions/Cart/cartActions"
export class Cart extends Component {
  onChange(id) {
    return (event) => {
      this.props.changeCartValue("type", id, event.target.value)
    }
  }

  OnClick = (event) => {
    let quantity = 0
    event.preventDefault()
    this.props.cartItems.map((item) => (quantity += item.quantity))
    const items = this.props.cartItems
    console.log(items)
    const data = { items, quantity }

    this.props.addTransaction(data)
  }
  render() {
    const { cartItems } = this.props
    return (
      <>
        <div
          className='modal fade '
          id='staticBackdrop'
          data-backdrop='static'
          data-keyboard='false'
          tabIndex='-1'
          aria-labelledby='staticBackdropLabel'
          aria-hidden='true'>
          <div className='modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title' id='staticBackdropLabel'>
                  Cart
                </h5>
                <button
                  type='button'
                  className='close'
                  data-dismiss='modal'
                  aria-label='Close'>
                  <span aria-hidden='true'>&times;</span>
                </button>
              </div>
              <div className='modal-body '>
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
                      <tr key={item.product_id}>
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
                              this.props.changeCartValue(
                                "plus",
                                item.product_id,
                              )
                            }}>
                            +
                          </button>
                          <input
                            className='form-control d-inline'
                            type='text'
                            style={{ width: "45px", textAlign: "center" }}
                            value={item.quantity}
                            onChange={this.onChange(item.product_id)}
                          />
                          <button
                            type='button'
                            className='btn btn-light btn-sm d-inline'
                            onClick={() => {
                              this.props.changeCartValue(
                                "minus",
                                item.product_id,
                              )
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
              </div>
              <div className='modal-footer'>
                <button
                  type='button'
                  className='btn btn-secondary'
                  data-dismiss='modal'
                  onClick={this.OnClick}>
                  Check-Out
                </button>
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
})(Cart)
