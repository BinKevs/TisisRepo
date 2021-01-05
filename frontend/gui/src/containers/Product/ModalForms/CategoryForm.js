import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
const CategoryForm = (props) => {
  const { onChange, onSubmitCategory } = props
  const { name } = props.state
  return (
    <>
      <div
        className='modal fade'
        id='CategoryModalForm'
        tabIndex='1'
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
                data-toggle='modal'
                data-target='#ProductModalFormUpdate'
                aria-label='Close'>
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div className='card card-body mt-4 mb-4'>
              <h2>Categories</h2>

              <div className='form-group'>
                <label>Name</label>
                <input
                  className='form-control'
                  type='text'
                  onChange={onChange}
                  name='name'
                  value={name}
                />
              </div>
              <div className='form-group'>
                <button
                  type='submit'
                  onClick={onSubmitCategory}
                  className='btn btn-primary'>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
CategoryForm.propTypes = {
  // numberWithCommas: PropTypes.func.isRequired,
  // handleClick: PropTypes.func.isRequired,
  // onChange: PropTypes.func.isRequired,
  // state: PropTypes.object.isRequired,
}
export default connect(null, {})(CategoryForm)
