import React, { Component } from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import {
  getProductList,
  deleteProduct,
} from "../../store/actions/Product/products"
import { addToCart } from "../../store/actions/Cart/cartActions"
import Cart from "../Cart/Cart"
import * as FaIcons from "react-icons/fa"
import * as BsIcons from "react-icons/bs"
import "./style.css"
let products = []
class ProductList extends Component {
  static propTypes = {
    products: PropTypes.array.isRequired,
    getProductList: PropTypes.func.isRequired,
    deleteProduct: PropTypes.func.isRequired,
    addToCart: PropTypes.func.isRequired,
  }
  state = {
    search: "",
  }
  onChange = (e) => this.setState({ [e.target.name]: e.target.value })
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
    products = []
    this.props.products.map((product) =>
      products.push({
        id: product.id,
        name: product.name,
        price: product.price,
        category: product.category_info.name,
        supplier: product.supplier_info.name,
        stock: product.stock,
        description: product.description,
      }),
    )
    const lowercasedFilter = this.state.search.toLowerCase()
    const filteredData = products.filter((item) => {
      return Object.keys(item).some((key) =>
        item[key].toString().toLowerCase().includes(lowercasedFilter),
      )
    })
    return (
      <>
        <div className='row'>
          <div className='col-xl-8 d-flex align-items-center my-2 p-2 form-row'>
            <div className='col-xl-4 ml-auto form-inline'>
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

          <div className='col-lg-8'>
            <div className='row'>
              {filteredData.map((product) => (
                <div
                  className='col-xs-2 col-sm-4 col-md-3 col-lg-2 mx-3'
                  key={product.id}>
                  <div
                    className='card card_cust'
                    style={{ width: "12rem", height: "22rem" }}>
                    <img
                      className='card-img-top img-fluid'
                      src='https://st4.depositphotos.com/17828278/24401/v/600/depositphotos_244011872-stock-illustration-image-vector-symbol-missing-available.jpg'
                      alt='Card cap'
                    />
                    <div className='card-body'>
                      <p className='card-title'>{product.price}</p>
                      <p
                        className='card-title'
                        name='name'
                        onChange={this.onChange}
                        value={product.name}>
                        <Link to={"/products/setting/" + product.id + "/"}>
                          {product.name}
                        </Link>
                      </p>
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
                        className='btn btn-block btn-primary btnCust'>
                        <FaIcons.FaCartPlus />
                      </button>
                    </form>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='col-lg-4 mt-5'>
            <Cart />
          </div>
        </div>
      </>
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
