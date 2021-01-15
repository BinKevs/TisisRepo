import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import * as AiIcons from "react-icons/ai"

const FormUpdate = (props) => {
  const { suppliers, categories } = props
  const { onChange, onUpdateSubmit } = props
  const {
    name,
    description,
    price,
    category,
    supplier,
    stock,
    image,
    productID,
  } = props.state
  return (
    <>
      <div
        className='modal fade'
        id='ProductModalFormUpdate'
        tabIndex='-1'
        role='dialog'
        aria-labelledby='exampleModalCenterTitle'
        aria-hidden='true'>
        <div
          className='modal-dialog modal-dialog-centered modal-lg '
          role='document'>
          <div className='modal-content borderCust'>
            <div className='modal-header borderCustUpperBody2 '>
              <h2 class='modal-title'>Product Update</h2>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'>
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div className='card card-body modal-body p-5'>
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
                <label>Description</label>

                <textarea
                  className='form-control'
                  type='text'
                  name='description'
                  onChange={onChange}
                  value={description}
                />
              </div>
              <div className='form-group'>
                <label>Image</label>
                <br />
                <img
                  style={{ width: "10rem", height: "10rem" }}
                  className='card-img-top img-fluid'
                  src={image}
                  alt='Card cap'
                />
                <br />
                <input
                  type='file'
                  name='image'
                  onChange={onChange}
                  className='form-control-file'
                />
              </div>
              <div className='form-group'>
                <div className='d-flex justify-content-start mb-3'>
                  <label>Select Category</label>

                  <div
                    className='btn btn-secondary p-0 px-2 mx-3'
                    data-toggle='modal'
                    data-target='#CategoryModalForm'
                    style={{ fontSize: "1.5em" }}>
                    <AiIcons.AiOutlinePlus />
                  </div>
                </div>
                <input
                  className='form-control custom-select custom-select-lg'
                  onChange={onChange}
                  placeholder='-------'
                  name='category'
                  list='category-list'
                  value={props.categoryEditValue}
                />
                <datalist id='category-list'>
                  {categories.map((category) => (
                    <option
                      value={category.id + " - " + category.name}
                      key={category.id}></option>
                  ))}
                </datalist>
              </div>
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
              <div className='form-group'>
                <label>Price</label>
                <input
                  className='form-control'
                  type='number'
                  id='example-number-input'
                  name='price'
                  onChange={onChange}
                  value={price}
                />
              </div>
              <div className='form-group'>
                <label>Stock quantity</label>
                <input
                  className='form-control'
                  type='number'
                  id='example-number-input'
                  name='stock'
                  value={stock}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className='form-group container'>
              <button
                type='submit'
                onClick={onUpdateSubmit(productID)}
                data-dismiss='modal'
                className='btn btn-primary'>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
FormUpdate.propTypes = {
  onUpdateSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
  suppliers: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
}
export default connect(null, {})(FormUpdate)
