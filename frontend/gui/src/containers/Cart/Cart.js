import React, { Component } from "react"
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
                      <tr key={item.id}>
                        <td className='align-middle'>
                          <img
                            className='img-responsive'
                            src='http://placehold.it/120x80'
                            alt='prewiew'
                            width='120'
                            height='80'
                          />
                        </td>
                        <td className='align-middle'>{item.name}</td>
                        <td className='align-middle'>{item.price}</td>
                        <td className='align-middle'>
                          <button
                            type='button'
                            className='btn btn-light btn-sm d-inline'
                            onClick={() => {
                              this.props.changeCartValue("plus", item.id)
                            }}>
                            +
                          </button>
                          <input
                            className='form-control d-inline'
                            type='text'
                            style={{ width: "45px", textAlign: "center" }}
                            value={item.quantity}
                            onChange={this.onChange(item.id)}
                          />
                          <button
                            type='button'
                            className='btn btn-light btn-sm d-inline'
                            onClick={() => {
                              this.props.changeCartValue("minus", item.id)
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
                  data-dismiss='modal'>
                  Close
                </button>
                <button type='button' className='btn btn-primary'>
                  Understood
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default connect(
  (state) => ({
    cartItems: state.cartReducer.cartItems,
  }),
  { removeFromCart, changeCartValue },
)(Cart)
