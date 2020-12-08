import React, { Component } from "react"
import Cart from "../Cart/Cart"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import {
  getProductList,
  deleteProduct,
} from "../../store/actions/Product/products"
import { addToCart } from "../../store/actions/Cart/cartActions"
class ProductList extends Component {
  static propTypes = {
    products: PropTypes.array.isRequired,
    getProductList: PropTypes.func.isRequired,
    deleteProduct: PropTypes.func.isRequired,
  }

  onSubmit(id, name, price) {
    return (event) => {
      event.preventDefault()
      const product = { id, name, price }
      this.props.addToCart(product)
    }
  }
  componentDidMount() {
    this.props.getProductList()
  }
  onChange = (e) => this.setState({ [e.target.name]: e.target.value })

  render() {
    return (
      <div>
        <div>
          <Cart />
        </div>
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
                  <h2
                    className='card-title'
                    name='name'
                    onChange={this.onChange}
                    value={product.name}>
                    <Link to={"/products/" + product.id + "/"}>
                      {product.name}
                    </Link>
                  </h2>
                  <h5 className='card-title'>{product.price}</h5>
                  <p className='card-text'>{product.description}</p>
                  <form
                    onSubmit={this.onSubmit(
                      product.id,
                      product.name,
                      product.description,
                    )}>
                    <button type='submit' className='btn btn-primary'>
                      Add to cart
                    </button>
                  </form>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
const mapToStateToProps = (state) => ({
  products: state.products.products,
  token: state.AuthReducer.token,
})
export default connect(mapToStateToProps, {
  getProductList,
  deleteProduct,
  addToCart,
})(ProductList)
