import React, { Component, Fragment } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import Form from "./Form"
import {
  getInventoryList,
  deleteInventory,
} from "../../../store/actions/Inventory/inventories"

export class InventorySetting extends Component {
  static propTypes = {
    inventories: PropTypes.array.isRequired,
    getInventoryList: PropTypes.func.isRequired,
    deleteInventory: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.getInventoryList()
  }
  // componentDidUpdate(prevProps, prevState) {
  //   this.props.getInventoryList()
  // }
  render() {
    return (
      <Fragment>
        <div className='container'>
          <h2>Inventories</h2>
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
              {this.props.inventories.map((inventory) => (
                <tr key={inventory.id}>
                  <td className='align-middle'>{inventory.id}</td>
                  <td className='align-middle'>{inventory.product.name}</td>
                  <td className='align-middle'>{inventory.new_stock}</td>
                  <td className='align-middle'>{inventory.supplier.name}</td>
                  <td className='align-middle'>{inventory.created_at}</td>
                  <td className='align-middle'>
                    <button
                      onClick={this.props.deleteInventory.bind(
                        this,
                        inventory.id,
                      )}
                      className='btn btn-danger btn-xs'>
                      {" "}
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Form />
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  inventories: state.inventories.inventories,
})

export default connect(mapStateToProps, { getInventoryList, deleteInventory })(
  InventorySetting,
)
