import React, { Component } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import {
  getInventory,
  updateInventory,
} from "../../../store/actions/Inventory/inventories"
import { getSupplierList } from "../../../store/actions/Supplier/suppliers"
import { getProductList } from "../../../store/actions/Product/products"

class FormUpdate extends Component {
  constructor(props) {
    super(props)

    this.state = {
      new_stock: 0,
      product: 0,
      supplier: 0,
    }
  }
  static propTypes = {
    inventory: PropTypes.array.isRequired,
    updateInventory: PropTypes.func.isRequired,
    suppliers: PropTypes.array.isRequired,
    products: PropTypes.array.isRequired,
  }
  onChange = (e) => this.setState({ [e.target.name]: e.target.value })

  componentDidMount() {
    const InventoryID = this.props.match.params.inventoryID
    this.props.getInventory(InventoryID)
    this.props.getSupplierList()
    this.props.getProductList()
  }

  onSubmit = (event) => {
    event.preventDefault()
    let { new_stock, product, supplier } = this.state
    let inventory
    if (this.state.product === 0 && this.state.supplier === 0) {
      product = this.props.inventory.product
      supplier = this.props.inventory.supplier
    } else if (this.state.product === 0) {
      product = this.props.inventory.product
    } else if (this.state.supplier === 0) {
      supplier = this.props.inventory.supplier
    }
    inventory = { new_stock, product, supplier }
    const InventoryID = this.props.match.params.inventoryID

    this.props.updateInventory(InventoryID, inventory)
    this.setState({
      new_stock: 0,
      product: 0,
      supplier: 0,
    })
    this.props.history.push("/inventories/setting/")
  }
  render() {
    const { new_stock, product, supplier } = this.props.inventory
    return (
      <div>
        <div className='card card-body mt-4 mb-4'>
          <h2>Inventory Update</h2>
          <form onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label>Stock quantity</label>
              <br />
              <label>{this.props.inventory.new_stock}</label>
              <input
                className='form-control'
                type='number'
                id='example-number-input'
                name='new_stock'
                onChange={this.onChange}
                defaultValue={this.props.inventory.new_stock}
              />
            </div>
            <div className='form-group'>
              <label>Select product</label>

              <select
                className='form-control'
                name='product'
                id='exampleFormControlSelect1'
                onChange={this.onChange}>
                {this.props.products.map((productItem) => (
                  <option
                    selected={productItem.id === product ? "selected" : ""}
                    value={productItem.id}
                    key={productItem.id}>
                    {productItem.name}
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
                onChange={this.onChange}>
                {this.props.suppliers.map((supplierItem) => (
                  <option
                    defaultValue={supplier}
                    selected={supplierItem.id === supplier ? "selected" : ""}
                    value={supplierItem.id}
                    key={supplierItem.id}>
                    {supplierItem.name}
                  </option>
                ))}
              </select>
            </div>
            <div className='form-group'>
              <button
                type='submit'
                onClick={this.EditButtonHandle}
                className='btn btn-primary'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  inventory: state.inventories.inventory,
  suppliers: state.suppliers.suppliers,
  products: state.products.products,
})
export default connect(mapStateToProps, {
  getInventory,
  getSupplierList,
  getProductList,
  updateInventory,
})(FormUpdate)
