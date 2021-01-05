import React, { Component, Fragment } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import FormAdd from "./FormAdd"
import FormUpdate from "./FormUpdate"
import {
  getInventoryList,
  deleteInventory,
  getInventory,
  addInventory,
  updateInventory,
} from "../../../store/actions/Inventory/inventories"
import { getSupplierList } from "../../../store/actions/Supplier/suppliers"
import { getProductList } from "../../../store/actions/Product/products"
import * as AiIcons from "react-icons/ai"
import * as GrIcons from "react-icons/gr"
let isEditButtonClicked = false

export class InventorySetting extends Component {
  static propTypes = {
    inventories: PropTypes.array.isRequired,
    inventory: PropTypes.object.isRequired,
    getInventoryList: PropTypes.func.isRequired,
    getSupplierList: PropTypes.func.isRequired,
    getProductList: PropTypes.func.isRequired,
    deleteInventory: PropTypes.func.isRequired,
    updateInventory: PropTypes.func.isRequired,
    addInventory: PropTypes.func.isRequired,
  }
  state = {
    new_stock: 0,
    product: 0,
    supplier: 0,
    search: "",
    inventoryID: 0,
  }
  onChange = (e) => this.setState({ [e.target.name]: e.target.value })

  onAddSubmit = (event) => {
    event.preventDefault()
    const { new_stock, product, supplier } = this.state
    const inventory = { new_stock, product, supplier }
    this.props.addInventory(inventory)
    this.props.getInventoryList()

    this.setState({
      new_stock: 0,
      product: 0,
      supplier: 0,
      inventoryID: 0,
    })
  }

  componentDidMount() {
    this.props.getInventoryList()
    this.props.getSupplierList()
    this.props.getProductList()
    this.setState({
      search: "",
    })
  }
  componentDidUpdate(prevProps, prevState) {
    if (isEditButtonClicked) {
      const { new_stock, product, supplier, id } = this.props.inventory
      this.setState({
        new_stock,
        product,
        supplier,
        inventoryID: id,
      })
      console.log(this.state)
      isEditButtonClicked = false
    }
    if (this.props.inventory !== prevProps.inventory) {
      this.props.getProductList()
    }
  }
  onEditButtonClick(InventoryID) {
    return (event) => {
      event.preventDefault()
      this.props.getInventory(InventoryID)
      isEditButtonClicked = true
    }
  }

  onUpdateSubmit = (InventoryID) => {
    return (event) => {
      event.preventDefault()
      const { new_stock, product, supplier } = this.state
      const inventory = { new_stock, product, supplier }
      this.props.updateInventory(InventoryID, inventory)

      this.setState({
        new_stock: 0,
        product: 0,
        supplier: 0,
      })
    }
  }
  render() {
    const lowercasedFilter = this.state.search.toLowerCase()
    const filteredData = this.props.inventories.filter((item) => {
      return Object.keys(item).some((key) =>
        item[key].toString().toLowerCase().includes(lowercasedFilter),
      )
    })
    return (
      <Fragment>
        <div className='container'>
          <div className='card_cust p-5'>
            <div className='d-flex justify-content-start mb-3'>
              <h2>Inventories</h2>

              <div
                className='btn btn-success p-0 px-2 ml-3'
                data-toggle='modal'
                data-target='#InventoryModalFormAdd'
                style={{ fontSize: "1.5em" }}>
                <AiIcons.AiOutlinePlus />
              </div>
            </div>
            <input
              className='form-control'
              type='text'
              id='example-number-input'
              name='search'
              onChange={this.onChange}
              value={this.state.search}
            />
            <div className='table-responsive'>
              <table
                className='table table-striped align-middl'
                style={{ textAlign: "center" }}>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Product</th>
                    <th>Added stock</th>
                    <th>Supplier</th>
                    <th>Date</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((inventory) => (
                    <tr key={inventory.id}>
                      <td className='align-middle'>{inventory.id}</td>
                      <td className='align-middle'>
                        {inventory.product_info.name}
                      </td>
                      <td className='align-middle'>{inventory.new_stock}</td>
                      <td className='align-middle'>
                        {inventory.supplier_info.name}
                      </td>
                      <td className='align-middle'>{inventory.created_at}</td>
                      {/* <td className='align-middle'>
                        <button
                          onClick={this.props.deleteInventory.bind(
                            this,
                            inventory.id,
                          )}
                          className='btn btn-danger btn-xs'>
                          {" "}
                          <AiIcons.AiOutlineDelete />
                        </button>
                      </td> */}

                      <td className='align-middle'>
                        <button
                          onClick={this.onEditButtonClick(inventory.id)}
                          data-toggle='modal'
                          data-target='#InventoryModalFormUpdate'
                          className='btn btn-primary btn-xs'>
                          <GrIcons.GrEdit />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <FormAdd
              state={this.state}
              onAddSubmit={this.onAddSubmit}
              onChange={this.onChange}
              products={this.props.products}
              suppliers={this.props.suppliers}
            />
            <FormUpdate
              state={this.state}
              onUpdateSubmit={this.onUpdateSubmit}
              onChange={this.onChange}
              products={this.props.products}
              suppliers={this.props.suppliers}
            />
          </div>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  inventories: state.inventories.inventories,
  inventory: state.inventories.inventory,
  suppliers: state.suppliers.suppliers,
  products: state.products.products,
})

export default connect(mapStateToProps, {
  addInventory,
  getSupplierList,
  getProductList,
  getInventoryList,
  getInventory,
  deleteInventory,
  updateInventory,
})(InventorySetting)
