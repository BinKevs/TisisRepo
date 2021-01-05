import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"

const FormAdd = (props) => {
  const { name, address, phone_number } = props.state
  const { onChange, onAddSubmit } = props
  return (
    <>
      <div
        className='modal fade'
        id='SupplierModalFormAdd'
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

            <div className='card card-body mt-4 mb-4'>
              <h2>Supplier</h2>
              <form onSubmit={onAddSubmit}>
                <div className='form-group'>
                  <label>Name</label>
                  <input
                    className='form-control'
                    type='text'
                    name='name'
                    onChange={onChange}
                    value={name}
                  />
                </div>
                <div className='form-group'>
                  <label>Address</label>
                  <textarea
                    className='form-control'
                    type='text'
                    name='address'
                    onChange={onChange}
                    value={address}
                  />
                </div>
                <div className='form-group '>
                  <label>Telephone</label>

                  <input
                    className='form-control'
                    type='tel'
                    name='phone_number'
                    id='example-tel-input'
                    onChange={onChange}
                    value={phone_number}
                  />
                </div>
                <div className='form-group'>
                  <button type='submit' className='btn btn-primary'>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default connect(null, {})(FormAdd)
