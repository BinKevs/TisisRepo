import React, { Component } from "react"
import CustomForm from "../../components/Form"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import {
  getProductList,
  deleteProduct,
} from "../../store/actions/Product/products"

class ProductList extends Component {
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
      <div>
        <div className='container'>
          <div className='row'>
            {this.props.products.map((product) => (
              <div className='col-md-6 col-lg-3 mb-4' key={product.id}>
                <div className='card'>
                  <img
                    className='card-img-top'
                    src='https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png'
                    alt='Card cap'
                  />
                  <div className='card-body'>
                    <h2 className='card-title'>
                      <Link to={"/products/" + product.id + "/"}>
                        {product.name}
                      </Link>
                    </h2>
                    <h5 className='card-title'>{product.price}</h5>
                    <p className='card-text'>{product.description}</p>
                    <p className='card-text'>{product.quantity_stock}</p>
                    <button
                      type='submit'
                      className='btn btn-danger'
                      onClick={this.props.deleteProduct.bind(this, product.id)}>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <br />
        <CustomForm requestType='POST' productID={null} btnText='Submit' />
      </div>
    )
  }
}
const mapToStateToProps = (state) => ({
  products: state.products.products,
  token: state.AuthReducer.token,
})
export default connect(mapToStateToProps, { getProductList, deleteProduct })(
  ProductList,
)
