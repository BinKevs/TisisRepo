import React, { Component } from "react"
import Cart from "../Cart/Cart"
import { Link, Redirect } from "react-router-dom"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import {
  getProductList,
  deleteProduct,
} from "../../store/actions/Product/products"
import { addToCart } from "../../store/actions/Cart/cartActions"
import * as FaIcons from "react-icons/fa"
import "./style.css"
class ProductList extends Component {
  static propTypes = {
    products: PropTypes.array.isRequired,
    getProductList: PropTypes.func.isRequired,
    deleteProduct: PropTypes.func.isRequired,
  }

  onSubmit(product_id, product_name, price) {
    return (event) => {
      event.preventDefault()
      const product = { product_id, product_name, price }
      this.props.addToCart(product)
    }
  }
  componentDidMount() {
    this.props.getProductList()
  }
  onChange = (e) => this.setState({ [e.target.name]: e.target.value })

  render() {
    return (
      <div className='custom_container'>
        <div>
          {/* <ul className='navbar-nav'>
            <li
              className='nav-item nav-link'
              data-toggle='modal'
              data-target='#staticBackdrop'>
              Cart
            </li>
          </ul> */}
        </div>
        <div className='row pt-5'>
          <div className='col-lg-8'>
            <div className='row'>
              {this.props.products.map((product) => (
                <div className='col-md-6 col-lg-2 mx-3' key={product.id}>
                  <div
                    className='card card_cust'
                    style={{ width: "12rem", height: "22rem" }}>
                    <img
                      className='card-img-top img-fluid'
                      src='https://st4.depositphotos.com/17828278/24401/v/600/depositphotos_244011872-stock-illustration-image-vector-symbol-missing-available.jpg'
                      alt='Card cap'
                    />
                    <div className='card-body'>
                      <p
                        className='card-title'
                        name='name'
                        onChange={this.onChange}
                        value={product.name}>
                        <Link to={"/products/" + product.id + "/"}>
                          {product.name}
                        </Link>
                      </p>
                      <p className='card-title'>{product.price}</p>
                    </div>
                    <form
                      onSubmit={this.onSubmit(
                        product.id,
                        product.name,
                        product.price,
                      )}
                      className='m-3'>
                      <button
                        type='submit'
                        className='btn btn-block btn-primary'>
                        <FaIcons.FaCartPlus />
                      </button>
                    </form>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='col-lg-4'>
            <Cart />
          </div>
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
