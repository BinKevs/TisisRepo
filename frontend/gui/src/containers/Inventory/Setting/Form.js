import React, { Component } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { addInventory } from "../../../store/actions/Inventory/inventories"
import { getSupplierList } from "../../../store/actions/Supplier/suppliers"
import { getProductList } from "../../../store/actions/Product/products"

export class Form extends Component {
  state = {
    new_stock: 0,
    product_id: 0,
    supplier_id: 0,
  }

  static propTypes = {
    getSupplierList: PropTypes.func.isRequired,
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value })

  onSubmit = (event) => {
    event.preventDefault()
    const { new_stock, product_id, supplier_id } = this.state
    const inventory = { new_stock, product_id, supplier_id }
    this.props.addInventory(inventory)
    this.setState({
      new_stock: 0,
    })
  }

  componentDidMount() {
    this.props.getSupplierList()
    this.props.getProductList()
  }
  render() {
    const { new_stock } = this.state
    return (
      <div className='card card-body mt-4 mb-4'>
        <h2>Inventory</h2>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label>Stock quantity</label>
            <input
              className='form-control'
              type='number'
              id='example-number-input'
              name='new_stock'
              onChange={this.onChange}
              value={new_stock}
            />
          </div>
          <div className='form-group'>
            <label>Select product</label>

            <select
              className='form-control'
              name='product_id'
              id='exampleFormControlSelect1'
              onChange={this.onChange}>
              {this.props.products.map((product) => (
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
              name='supplier_id'
              id='exampleFormControlSelect1'
              onChange={this.onChange}>
              {this.props.suppliers.map((supplier) => (
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
    )
  }
}
const mapStateToProps = (state) => ({
  suppliers: state.suppliers.suppliers,
  products: state.products.products,
})

export default connect(mapStateToProps, {
  addInventory,
  getSupplierList,
  getProductList,
})(Form)
