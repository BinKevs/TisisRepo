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
            <div className='modal-header borderCustUpperBody2'>
              <h2 class='modal-title'>Inventory Update</h2>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'>
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div className='card card-body modal-body'>
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
                <input
                  className='form-control custom-select custom-select-lg'
                  value={props.productEditValue}
                  onChange={onChange}
                  placeholder='-------'
                  name='product'
                  list='list'
                />
                <datalist id='list'>
                  {products.map((productItem) => (
                    <option
                      value={productItem.id + " - " + productItem.name}
                      key={productItem.id}></option>
                  ))}
                </datalist>
              </div>
              {/* <div className='form-group'>
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
              </div> */}
              {/* <div className='form-group'>
                <label>Select supplier</label>

                <select
                  className='form-control'
                  name='supplier'
                  id='exampleFormControlSelect1'
                  onChange={onChange}>
                  {suppliers.map((supplierItem) => (
                    <option
                      defaultValue={supplier}
                      selected={supplierItem.id === supplier ? "selected" : ""}
                      value={supplierItem.id}
                      key={supplierItem.id}>
                      {supplierItem.name}
                    </option>
                  ))}
                </select>
              </div> */}
              <div className='form-group'>
                <label>Select supplier</label>
                <input
                  className='form-control custom-select custom-select-lg'
                  value={props.supplierEditValue}
                  onChange={onChange}
                  placeholder='-------'
                  name='supplier'
                  list='list'
                />
                <datalist id='list'>
                  {suppliers.map((supplierItem) => (
                    <option
                      value={supplierItem.id + " - " + supplierItem.name}
                      key={supplierItem.id}></option>
                  ))}
                </datalist>
              </div>
            </div>
            <div className='form-group container'>
              <button
                type='submit'
                onClick={onUpdateSubmit(inventoryID)}
                className='btn btn-primary'>
                Update Inventory
              </button>
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
