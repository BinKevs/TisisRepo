import React, { Component } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { addProduct } from "../../../store/actions/Inventory/inventories"
import { getSupplierList } from "../../../store/actions/Supplier/suppliers"
import { getProductList } from "../../../store/actions/Product/products"

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
    const inventory = { name, description, price }
    this.props.addProduct(inventory)
    console.log(this.state)
    this.setState({
      name: "",
      description: "",
      price: 0,
    })
  }
  componentDidMount() {
    this.props.getSupplierList()
    this.props.getProductList()
  }
  render() {
    const { name, description, price } = this.state
    return (
      <div className='card card-body mt-4 mb-4'>
        <h2>Inventory</h2>
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
          <div class='form-group'>
            <label>Select product</label>
            {this.props.products.map((product) => (
              <select className='form-control' id='exampleFormControlSelect1'>
                <option value={product.id} key={product.id}>
                  {product.name}
                </option>
              </select>
            ))}
          </div>
          <div class='form-group'>
            <label>Select supplier</label>
            {this.props.suppliers.map((supplier) => (
              <select className='form-control' id='exampleFormControlSelect1'>
                <option value={supplier.id} key={supplier.id}>
                  {supplier.name}
                </option>
              </select>
            ))}
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
const mapStateToProps = (state) => ({
  suppliers: state.suppliers.suppliers,
  products: state.products.products,
})

export default connect(mapStateToProps, {
  addProduct,
  getSupplierList,
  getProductList,
})(Form)
