import React, { Component, Fragment } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import Form from "./Form"
import {
  getProductList,
  deleteProduct,
} from "../../../store/actions/Product/products"

export class ProductSetting extends Component {
  static propTypes = {
    products: PropTypes.array.isRequired,
    getProductList: PropTypes.func.isRequired,
    deleteProduct: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.getProductList()
  }

  render() {
    return (
      <Fragment>
        <h2>Products</h2>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Supplier</th>
              <th>Description</th>
              <th>Price</th>
              <th>Quantity stock</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.supplier.name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{product.quantity_stock}</td>
                <td>
                  <button
                    onClick={this.props.deleteProduct.bind(this, product.id)}
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
  products: state.products.products,
})

export default connect(mapStateToProps, { getProductList, deleteProduct })(
  ProductSetting,
)
