import React, { Component } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { addSupplier } from "../../../store/actions/Supplier/suppliers"

export class Form extends Component {
  state = {
    name: "",
    address: "",
    phone_number: "",
  }

  static propTypes = {
    addSupplier: PropTypes.func.isRequired,
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value })

  onSubmit = (e) => {
    e.preventDefault()
    const { name, address, phone_number } = this.state
    const supplier = { name, address, phone_number }
    this.props.addSupplier(supplier)
    this.setState({
      name: "",
      address: "",
      phone_number: "",
    })
  }

  render() {
    const { name, address, phone_number } = this.state
    return (
      <div className='card card-body mt-4 mb-4'>
        <h2>Supplier</h2>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label>Name</label>
            <input
              className='form-control'
              type='text'
              name='name'
              onChange={this.onChange}
              value={name}
            />
          </div>
          <div className='form-group'>
            <label>Address</label>
            <textarea
              className='form-control'
              type='text'
              name='address'
              onChange={this.onChange}
              value={address}
            />
          </div>
          <div className='form-group row'>
            <label>Telephone</label>
            <div className='col-10'>
              <input
                className='form-control'
                type='tel'
                name='phone_number'
                id='example-tel-input'
                onChange={this.onChange}
                value={phone_number}
              />
            </div>
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

export default connect(null, { addSupplier })(Form)
