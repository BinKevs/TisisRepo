import React, { Component, Fragment } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import FormAdd from "./FormAdd"
import FormUpdate from "./FormUpdate"
import {
  getSupplierList,
  deleteSupplier,
  addSupplier,
  getSupplier,
  updateSupplier,
} from "../../../store/actions/Supplier/suppliers"
import * as AiIcons from "react-icons/ai"
import * as GrIcons from "react-icons/gr"
import * as BsIcons from "react-icons/bs"
let isEditButtonClicked = false

export class SupplierSetting extends Component {
  state = {
    name: "",
    address: "",
    phone_number: "",
    supplierID: 0,
    search: "",
  }
  static propTypes = {
    suppliers: PropTypes.array.isRequired,
    getSupplierList: PropTypes.func.isRequired,
    getSupplier: PropTypes.func.isRequired,
    deleteSupplier: PropTypes.func.isRequired,
    addSupplier: PropTypes.func.isRequired,
    updateSupplier: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.getSupplierList()
  }
  componentDidUpdate(prevProps, prevState) {
    if (isEditButtonClicked) {
      const { id, name, address, phone_number } = this.props.supplier
      this.setState({
        name,
        address,
        phone_number,
        supplierID: id,
      })
      isEditButtonClicked = false
    }
    if (this.props.supplier !== prevProps.supplier) {
      this.props.getSupplierList()
    }
  }
  onChange = (e) => this.setState({ [e.target.name]: e.target.value })

  onAddSubmit = (e) => {
    e.preventDefault()
    const { name, address, phone_number } = this.state
    const supplier = { name, address, phone_number }
    this.props.addSupplier(supplier)
    this.setState({
      name: "",
      address: "",
      phone_number: "",
    })
  }
  onUpdateSubmit = (supplierID) => {
    return (event) => {
      event.preventDefault()
      const { name, address, phone_number } = this.state
      const supplier = { name, address, phone_number }
      this.props.updateSupplier(supplierID, supplier)

      this.setState({
        name: "",
        address: "",
        phone_number: "",
      })
    }
  }
  onEditButtonClick(supplierID) {
    return (event) => {
      event.preventDefault()
      this.props.getSupplier(supplierID)
      isEditButtonClicked = true
    }
  }
  render() {
    const lowercasedFilter = this.state.search.toLowerCase()
    const filteredData = this.props.suppliers.filter((item) => {
      return Object.keys(item).some((key) =>
        item[key].toString().toLowerCase().includes(lowercasedFilter),
      )
    })
    return (
      <Fragment>
        <div className='container'>
          <div className='card_cust p-5'>
            <div className='d-flex align-items-center mb-3'>
              <h2>Supplier</h2>
              <button
                className='btn btn-outline-secondary ml-4 col-auto'
                data-toggle='modal'
                data-target='#SupplierModalFormAdd'
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
                {filteredData.map((supplier) => (
                  <tr key={supplier.id}>
                    <td>{supplier.id}</td>
                    <td>{supplier.name}</td>
                    <td>{supplier.address}</td>
                    <td>{supplier.phone_number}</td>
                    {/* <td>
                      <button
                        onClick={this.props.deleteSupplier.bind(
                          this,
                          supplier.id,
                        )}
                        className='btn btn-danger btn-sm'>
                        {" "}
                        Delete
                      </button>
                    </td> */}
                    <div className='form-group '>
                      <td className='align-middle'>
                        <button
                          onClick={this.onEditButtonClick(supplier.id)}
                          data-toggle='modal'
                          data-target='#SupplierModalFormUpdate'
                          className='btn btn-outline-secondary btn-xs'>
                          <GrIcons.GrEdit />
                        </button>
                      </td>
                    </div>
                  </tr>
                ))}
              </tbody>
            </table>
            <FormAdd
              state={this.state}
              onChange={this.onChange}
              onAddSubmit={this.onAddSubmit}
            />
            <FormUpdate
              state={this.state}
              onChange={this.onChange}
              onUpdateSubmit={this.onUpdateSubmit}
            />
          </div>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  suppliers: state.suppliers.suppliers,
  supplier: state.suppliers.supplier,
})

export default connect(mapStateToProps, {
  getSupplierList,

  getSupplier,
  updateSupplier,
  addSupplier,
  deleteSupplier,
})(SupplierSetting)
