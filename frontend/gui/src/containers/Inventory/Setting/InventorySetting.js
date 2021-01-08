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
import * as BsIcons from "react-icons/bs"
import * as GrIcons from "react-icons/gr"

let isEditButtonClicked = false
let inventories = []
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
  onChangeTest = (e) => {
    const productID = e.target.value.split(" ")

    this.setState({
      [e.target.name]: productID[0],
    })
  }

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
    console.log(this.props.inventories)

    console.log(Date().toLocaleString())
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
  onEz = (event) => {
    // var topValues = .sort((a, b) => b - a).slice(0, 5)
    // console.log(topValues)
    const myData = []
      .concat(this.props.inventories)
      .sort((a, b) => b.new_stock - a.new_stock)
      .slice(0, 5)
      .map((item) => (
        <div key={item.id}>
          {item.id} {item.new_stock}
        </div>
      ))
    console.log(myData)
    // console.log(inventories)
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
    inventories = []
    this.props.inventories.map((inventory) =>
      inventories.push({
        id: inventory.id,
        supplier: inventory.supplier_info.name,
        product: inventory.product_info.name,
        new_stock: inventory.new_stock,
        created_at: inventory.created_at,
      }),
    )
    const lowercasedFilter = this.state.search.toLowerCase()
    const filteredData = inventories.filter((item) => {
      return Object.keys(item).some((key) =>
        item[key].toString().toLowerCase().includes(lowercasedFilter),
      )
    })
    return (
      <Fragment>
        <div className='container'>
          <div className='card_cust p-5'>
            <div className='d-flex align-items-center mb-3 p-2 form-row'>
              <h2 className='col-auto'>Inventories</h2>

              <button
                className='btn btn-outline-secondary ml-4 col-auto'
                data-toggle='modal'
                // onClick={this.onEz}
                data-target='#InventoryModalFormAdd'
                style={{ fontSize: "1.5em" }}>
                <AiIcons.AiOutlinePlus />
              </button>
              <div className='col-lg-3 ml-auto form-inline'>
                <div style={{ fontSize: "1.5em" }}>
                  <BsIcons.BsSearch />
                </div>

                <input
                  className='form-control ml-3'
                  type='text'
                  id='example-number-input'
                  name='search'
                  placeholder='Search'
                  onChange={this.onChange}
                  value={this.state.search}
                />
              </div>
            </div>

            <div className='table-responsive'>
              <table
                className='table table-striped align-middle'
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
                      <td className='align-middle'>{inventory.product}</td>
                      <td className='align-middle'>{inventory.new_stock}</td>
                      <td className='align-middle'>{inventory.supplier}</td>
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
                          className='btn btn-outline-secondary btn-xs'>
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
              onChangeTest={this.onChangeTest}
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