import React, { Component } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { addInventory } from "../../../store/actions/Inventory/inventories"
import { getSupplierList } from "../../../store/actions/Supplier/suppliers"
import { getProductList } from "../../../store/actions/Product/products"

export class Form extends Component {
  state = {
    new_stock: 0,
    product: 0,
    supplier: 0,
  }

  static propTypes = {
    addInventory: PropTypes.func.isRequired,
    getSupplierList: PropTypes.func.isRequired,
    getProductList: PropTypes.func.isRequired,
    suppliers: PropTypes.array.isRequired,
    products: PropTypes.array.isRequired,
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value })

  onSubmit = (event) => {
    event.preventDefault()
    const { new_stock, product, supplier } = this.state
    const inventory = { new_stock, product, supplier }
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
    const { products, suppliers } = this.props
    const { new_stock } = this.state
    const { onChange, onSubmit } = this
    return (
      <div className='card card-body mt-4 mb-4'>
        <h2>Inventory</h2>
        <form onSubmit={onSubmit}>
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
              {products.map((product) => (
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
              name='supplier'
              id='exampleFormControlSelect1'
              onChange={onChange}>
              {suppliers.map((supplier) => (
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
