import React, { Component } from "react"
import { connect } from "react-redux"
import { addCategory } from "../../../store/actions/Product/products"
export class Form extends Component {
  state = {
    name: "",
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault()
    const { name } = this.state
    const category = { name }
    this.props.addCategory(category)
    this.setState({
      name: "",
    })
  }

  render() {
    const { name } = this.state
    const { onChange, onSubmit } = this
    return (
      <div className='card card-body mt-4 mb-4'>
        <h2>Categories</h2>
        <form onSubmit={onSubmit}>
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
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  }
}
export default connect(null, {
  addCategory,
})(Form)
