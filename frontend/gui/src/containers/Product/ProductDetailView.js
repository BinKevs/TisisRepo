import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { getProduct, deleteProduct } from "../../store/actions/Product/products"

class ProductDetail extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
    getProduct: PropTypes.func.isRequired,
    deleteProduct: PropTypes.func.isRequired,
  }
  componentDidMount() {
    const productID = this.props.match.params.productID
    this.props.getProduct(productID)
  }

  onHandles = () => {
    this.props.history.push("/products")
  }
  render() {
    const { product } = this.props
    return (
      <>
        <div className='card'>
          <img
            className='card-img-top'
            src='https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png'
            alt='Card cap'
          />
          <div className='card-body'>
            <h2 className='card-title'>{product.name}</h2>
            <h5 className='card-title'>{product.price}</h5>
            <p className='card-text'>{product.description}</p>
            <form onSubmit={this.onHandles}>
              <button
                type='submit'
                className='btn btn-danger'
                onClick={deleteProduct.bind(this, product.id)}>
                {" "}
                Delete
              </button>
            </form>
          </div>
        </div>
      </>
    )
  }
}
const mapToStateToProps = (state) => ({
  product: state.products.product,
})
export default connect(mapToStateToProps, { getProduct, deleteProduct })(
  ProductDetail,
)
