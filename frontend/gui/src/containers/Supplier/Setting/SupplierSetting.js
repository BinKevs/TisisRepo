import React, { Component, Fragment } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import Form from "./Form"
import {
  getSupplierList,
  deleteSupplier,
} from "../../../store/actions/Supplier/suppliers"

export class SupplierSetting extends Component {
  static propTypes = {
    suppliers: PropTypes.array.isRequired,
    getSupplierList: PropTypes.func.isRequired,
    deleteSupplier: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.getSupplierList()
  }

  render() {
    return (
      <Fragment>
        <h2>Suppliers</h2>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.suppliers.map((supplier) => (
              <tr key={supplier.id}>
                <td>{supplier.id}</td>
                <td>{supplier.name}</td>
                <td>{supplier.address}</td>
                <td>{supplier.phone_number}</td>
                <td>
                  <button
                    onClick={this.props.deleteSupplier.bind(this, supplier.id)}
                    className='btn btn-danger btn-sm'>
                    {" "}
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Form />
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  suppliers: state.suppliers.suppliers,
})

export default connect(mapStateToProps, { getSupplierList, deleteSupplier })(
  SupplierSetting,
)
