import React, { Component } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { addProduct } from "../../../store/actions/Product/products"

export class Form extends Component {
  state = {
    name: "",
    supplier: {},
    description: "",
    price: 0,
    quantity_stock: 0,
  }

  static propTypes = {
    addProduct: PropTypes.func.isRequired,
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value })

  onSubmit = (e) => {
    e.preventDefault()
    const { name, supplier, description, price, quantity_stock } = this.state
    const product = { name, supplier, description, price, quantity_stock }
    this.props.addProduct(product)
    this.setState({
      name: "",
      supplier: {},
      description: "",
      price: 0,
      quantity_stock: 0,
    })
  }

  render() {
    const { name, description, price, quantity_stock } = this.state
    return (
      <div className='card card-body mt-4 mb-4'>
        <h2>Product</h2>
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
            <label>Select Supplier</label>
            <select
              className='form-control'
              id='exampleFormControlSelect1'
              name='supplier'
              onChange={this.onChange}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className='form-group'>
            <label>Description</label>
            <textarea
              className='form-control'
              type='text'
              name='description'
              onChange={this.onChange}
              value={description}
            />
          </div>
          <div className='form-group row'>
            <label className='col-2 col-form-label'>Price</label>
            <div className='col-10'>
              <input
                className='form-control'
                type='number'
                id='example-number-input'
                name='price'
                onChange={this.onChange}
                value={price}
              />
            </div>
          </div>
          <div className='form-group row'>
            <label className='col-2 col-form-label'>Quantity Stock</label>
            <div className='col-10'>
              <input
                className='form-control'
                type='number'
                id='example-number-input'
                name='quantity_stock'
                onChange={this.onChange}
                value={quantity_stock}
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

export default connect(null, { addProduct })(Form)
