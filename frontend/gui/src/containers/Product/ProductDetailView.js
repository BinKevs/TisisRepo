import React, { Component } from "react"
import CustomForm from "../../components/Form"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { getProduct, deleteProduct } from "../../store/actions/Product/products"

class ProductDetail extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
    getProduct: PropTypes.func.isRequired,
  }
  componentDidMount() {
    const productID = this.props.match.params.productID
    this.props.getProduct(productID)
  }
  componentDidUpdate() {
    console.log("State update")
  }

  onHandles = () => {
    this.props.history.push("/products")
  }
  render() {
    return (
      <>
        <div className='card'>
          <img
            className='card-img-top'
            src='https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png'
            alt='Card cap'
          />
          <div className='card-body'>
            <h2 className='card-title'>{this.props.product.name}</h2>
            <h5 className='card-title'>{this.props.product.price}</h5>
            <p className='card-text'>{this.props.product.description}</p>
            <p className='card-text'>{this.props.product.quantity_stock}</p>
            <form onSubmit={this.onHandles}>
              <button
                type='submit'
                className='btn btn-danger'
                onClick={this.props.deleteProduct.bind(
                  this,
                  this.props.product.id,
                )}>
                {" "}
                Delete
              </button>
            </form>
          </div>
        </div>
        <CustomForm
          requestType='PUT'
          productID={this.props.match.params.productID}
          btnText='Update'
          title={this.props.product.title}
          content={this.props.product.content}
        />
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
