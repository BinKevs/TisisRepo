import React, { Component } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { addProduct } from "../../../store/actions/Product/products"
import { getSupplierList } from "../../../store/actions/Supplier/suppliers"
export class Form extends Component {
  state = {
    name: "",
    supplier: 0,
    description: "",
    price: 0,
    quantity_stock: 0,
  }

  static propTypes = {
    addProduct: PropTypes.func.isRequired,
    getSupplierList: PropTypes.func.isRequired,
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value })

  onSubmit = (e) => {
    e.preventDefault()
    const { name, description, price } = this.state
    const product = { name, description, price }
    this.props.addProduct(product)
    console.log(this.state)
    this.setState({
      name: "",
      description: "",
      price: 0,
    })
  }
  componentDidMount() {
    this.props.getSupplierList()
  }

  render() {
    const { name, description, price } = this.state
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
            <label>Description</label>
            <textarea
              className='form-control'
              type='text'
              name='description'
              onChange={this.onChange}
              value={description}
            />
          </div>
          <div className='form-group'>
            <label>Price</label>
            <input
              className='form-control'
              type='number'
              id='example-number-input'
              name='price'
              onChange={this.onChange}
              value={price}
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

export default connect(null, { addProduct, getSupplierList })(Form)
