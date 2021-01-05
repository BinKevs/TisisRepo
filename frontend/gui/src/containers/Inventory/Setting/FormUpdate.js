import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"

const FormUpdate = (props) => {
  const { products, suppliers } = props
  const { new_stock, product, supplier, inventoryID } = props.state
  const { onChange, onUpdateSubmit } = props
  return (
    <div>
      <div
        className='modal fade'
        id='InventoryModalFormUpdate'
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
              <form onSubmit={onUpdateSubmit(inventoryID)}>
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
                    {products.map((productItem) => (
                      <option
                        selected={productItem.id === product ? "selected" : ""}
                        value={productItem.id}
                        key={productItem.id}>
                        {productItem.name}
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
                    {suppliers.map((supplierItem) => (
                      <option
                        defaultValue={supplier}
                        selected={
                          supplierItem.id === supplier ? "selected" : ""
                        }
                        value={supplierItem.id}
                        key={supplierItem.id}>
                        {supplierItem.name}
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
FormUpdate.propTypes = {
  onEditSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
  suppliers: PropTypes.array.isRequired,
  products: PropTypes.array.isRequired,
  updateInventory: PropTypes.func.isRequired,
}

export default connect(null, {})(FormUpdate)
