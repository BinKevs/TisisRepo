import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"

const FormAdd = (props) => {
  const { products, suppliers } = props
  const { new_stock } = props.state
  const { onChange, onSubmit } = props
  return (
    <div>
      <div
        className='modal fade'
        id='InventoryModalFormAdd'
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
              <h2>Inventory</h2>
              <form onSubmit={onSubmit}>
                <div className='form-group'>
                  <label>Stock quantity</label>
                  <input
                    className='form-control'
                    type='number'
                    id='example-number-input'
                    name='new_stock'
                    onChange={onChange}
                    value={new_stock}
                  />
                </div>
                <div className='form-group'>
                  <label>Select product</label>

                  <select
                    className='form-control'
                    name='product'
                    id='exampleFormControlSelect1'
                    onChange={onChange}>
                    <option>-------</option>
                    {products.map((product) => (
                      <option value={product.id} key={product.id}>
                        {product.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className='form-group'>
                  <label>Select supplier</label>

                  <select
                    className='form-control'
                    name='supplier'
                    id='exampleFormControlSelect1'
                    onChange={onChange}>
                    <option>-------</option>
                    {suppliers.map((supplier) => (
                      <option value={supplier.id} key={supplier.id}>
                        {supplier.name}
                      </option>
                    ))}
                  </select>
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
    </div>
  )
}
FormAdd.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
  suppliers: PropTypes.array.isRequired,
  products: PropTypes.array.isRequired,
}

export default connect(null, {})(FormAdd)
