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
        <div className='container'>
          <h2>Products</h2>
          <table
            className='table table-striped align-middl'
            style={{ textAlign: "center" }}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {this.props.products.map((product) => (
                <tr key={product.id}>
                  <td className='align-middle'>{product.id}</td>
                  <td className='align-middle'>{product.name}</td>
                  <td className='align-middle'>{product.price}</td>
                  <td className='align-middle'>{product.stock}</td>
                  <td className='align-middle'>{product.description}</td>

                  <td className='align-middle'>
                    <button
                      onClick={this.props.deleteProduct.bind(this, product.id)}
                      className='btn btn-danger btn-xs'>
                      {" "}
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Form chartData={this.props.products} />
        </div>
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
