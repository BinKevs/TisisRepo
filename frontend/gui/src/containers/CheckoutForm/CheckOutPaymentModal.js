import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
const CheckOutPaymentModal = (props) => {
  const {
    numberWithCommas,
    onChange,
    handleClick,
    handleSetAmountTendered,
  } = props
  const { totalAmount, amount_tendered, change } = props.state
  return (
    <div>
      <div
        className='modal fade'
        id='exampleModalCenter'
        tabIndex='-1'
        role='dialog'
        aria-labelledby='exampleModalCenterTitle'
        aria-hidden='true'>
        <div
          className='modal-dialog modal-dialog-centered modal-lg '
          role='document'>
          <div className='modal-content borderCust'>
            <div className='modal-header borderCustUpperBody2 borderCustGen'>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'>
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>

            <div className='modal-body d-flex justify-content-between borderCustUpperBody borderCustGen'>
              <h2 className='pl-5' id='exampleModalLongTitle'>
                Amount To Pay
              </h2>
              <h2 className='pr-5' id='exampleModalLongTitle'>
                <strong>${numberWithCommas(totalAmount)}</strong>
              </h2>
            </div>
            <div className='modal-body borderCustGen'>
              <h2 className='pl-5' id='exampleModalLongTitle'>
                Amount given by Customer
              </h2>
              <div className='form-inline mt-5'>
                <div className='input-group col-lg-3'>
                  <input
                    type='text'
                    className='form-control mb-3'
                    onChange={onChange}
                    value={amount_tendered}
                    name='amount_tendered'
                    style={{ height: "4.5rem" }}
                    aria-label='Amount (to the nearest dollar)'
                  />
                </div>
                <div className='col-lg-3'>
                  <button
                    type='button'
                    onClick={totalAmount}
                    className='btn btn-secondary btn-lg btn-block mb-3'>
                    <strong>${numberWithCommas(totalAmount)}</strong>
                  </button>
                </div>
                <div className='col-lg-3'>
                  <button
                    type='button'
                    onClick={handleSetAmountTendered(
                      Math.ceil(totalAmount / 100) * 100,
                    )}
                    className='btn btn-secondary btn-lg btn-block mb-3'>
                    <strong>
                      ${numberWithCommas(Math.ceil(totalAmount / 100) * 100)}
                    </strong>
                  </button>
                </div>
                <div className='col-lg-3'>
                  <button
                    type='button'
                    onClick={handleSetAmountTendered(
                      Math.ceil(totalAmount / 1000) * 1000,
                    )}
                    className='btn btn-secondary btn-lg btn-block '>
                    <strong>
                      ${numberWithCommas(Math.ceil(totalAmount / 1000) * 1000)}
                    </strong>
                  </button>
                </div>
              </div>
              <button
                type='button'
                onClick={handleClick}
                data-dismiss='modal'
                className='btn btn-secondary btn-lg btn-block '>
                <strong>Confirm Payment</strong>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
CheckOutPaymentModal.propTypes = {
  numberWithCommas: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
}
export default connect(null, {})(CheckOutPaymentModal)
