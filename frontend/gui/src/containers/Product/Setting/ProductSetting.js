import React, { Component, Fragment } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import Form from "./FormAdd"
import {
  getProductList,
  deleteProduct,
} from "../../../store/actions/Product/products"
import * as AiIcons from "react-icons/ai"
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
          <div className='card_cust p-5'>
            <div className='d-flex justify-content-start mb-3'>
              <h2>Products</h2>
              <div
                className='btn btn-success p-0 px-2 ml-3'
                data-toggle='modal'
                data-target='#ProductModalFormAdd'
                style={{ fontSize: "1.5em" }}>
                <AiIcons.AiOutlinePlus />
              </div>
            </div>
            <div class='table-responsive'>
              <table
                className='table table-striped align-middl'
                style={{ textAlign: "center" }}>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Supplier</th>
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
                      <td className='align-middle'>
                        {product.category_info.name}
                      </td>
                      <td className='align-middle'>
                        {product.supplier_info.name}
                      </td>
                      <td className='align-middle'>{product.stock}</td>
                      <td className='align-middle'>{product.description}</td>

                      <td className='align-middle'>
                        <button
                          onClick={this.props.deleteProduct.bind(
                            this,
                            product.id,
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
            </div>
          </div>
          <Form />
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
