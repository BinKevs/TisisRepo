import React, { Component, Fragment } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import FormAdd from "./FormAdd"
import FormUpdate from "./FormUpdate"
import CategoryForm from "../ModalForms/CategoryForm"
import {
  getProductList,
  deleteProduct,
  getProduct,
  updateProduct,
  addProduct,
  addCategory,
} from "../../../store/actions/Product/products"
import { getSupplierList } from "../../../store/actions/Supplier/suppliers"
import { getCategoryList } from "../../../store/actions/Product/products"
import * as AiIcons from "react-icons/ai"
import * as GrIcons from "react-icons/gr"
let isEditButtonClicked = false
let isImageChanged = false
export class ProductSetting extends Component {
  static propTypes = {
    products: PropTypes.array.isRequired,
    product: PropTypes.object.isRequired,
    categories: PropTypes.array.isRequired,
    getProductList: PropTypes.func.isRequired,
    getProduct: PropTypes.func.isRequired,
    deleteProduct: PropTypes.func.isRequired,
    addProduct: PropTypes.func.isRequired,
    updateProduct: PropTypes.func.isRequired,
  }
  state = {
    name: "",
    supplier: 0,
    description: "",
    price: 0,
    category: 0,
    stock: 0,
    image: null,
    productID: 0,
  }
  componentDidMount() {
    this.props.getProductList()
    this.props.getSupplierList()
    this.props.getCategoryList()
  }
  onChange = (event) => {
    if (event.target.name === "image") {
      this.setState({ [event.target.name]: event.target.files[0] })
      isImageChanged = true
    } else {
      this.setState({ [event.target.name]: event.target.value })
    }
  }

  onSubmitCategory = (event) => {
    event.preventDefault()
    const { name } = this.state
    const category = { name }
    this.props.addCategory(category)
    this.setState({
      name: "",
    })
  }
  componentDidUpdate(prevProps, prevState) {
    if (isEditButtonClicked) {
      const {
        id,
        name,
        description,
        price,
        supplier,
        category,
        stock,
        image,
      } = this.props.product
      this.setState({
        name,
        description,
        price,
        supplier,
        category,
        stock,
        image,
        productID: id,
      })
      isEditButtonClicked = false
    }
    if (this.props.product !== prevProps.product) {
      this.props.getProductList()
    }
  }
  onUpdateSubmit = (productID) => {
    return (e) => {
      e.preventDefault()
      const {
        name,
        description,
        price,
        category,
        supplier,
        stock,
        image,
      } = this.state
      const formData = new FormData()

      formData.append("name", name)
      formData.append("description", description)
      formData.append("price", price)
      formData.append("category", category)
      formData.append("supplier", supplier)
      formData.append("stock", stock)
      if (isImageChanged) {
        formData.append("image", image)
      }

      this.props.updateProduct(productID, formData)
      this.setState({
        name: "",
        description: "",
        price: 0,
        supplier: 0,
        category: 0,
        new_stock: 0,
        image: null,
        productID: 0,
      })
      isImageChanged = false
    }
  }
  onEditButtonClick(ProductID) {
    return (event) => {
      event.preventDefault()
      this.props.getProduct(ProductID)
      isEditButtonClicked = true
    }
  }
  onAddSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
    const {
      name,
      description,
      price,
      category,
      supplier,
      stock,
      image,
    } = this.state
    const formData = new FormData()

    formData.append("name", name)
    formData.append("description", description)
    formData.append("price", price)
    formData.append("category", category)
    formData.append("supplier", supplier)
    formData.append("stock", stock)
    formData.append("image", image)

    this.props.addProduct(formData)
    this.setState({
      name: "",
      description: "",
      price: 0,
      supplier: 0,
      category: 0,
      new_stock: 0,
      image: null,
    })
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
            <div className='table-responsive'>
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

                      {/* <td className='align-middle'>
                        <button
                          onClick={this.props.deleteProduct.bind(
                            this,
                            product.id,
                          )}
                          className='btn btn-danger btn-xs'>
                          {" "}
                          Delete
                        </button>
                      </td> */}
                      <td className='align-middle'>
                        <button
                          onClick={this.onEditButtonClick(product.id)}
                          data-toggle='modal'
                          data-target='#ProductModalFormUpdate'
                          className='btn btn-primary btn-xs'>
                          <GrIcons.GrEdit />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <FormAdd
            state={this.state}
            onChange={this.onChange}
            suppliers={this.props.suppliers}
            categories={this.props.categories}
            onAddSubmit={this.onAddSubmit}
          />
          <FormUpdate
            state={this.state}
            onChange={this.onChange}
            suppliers={this.props.suppliers}
            categories={this.props.categories}
            onUpdateSubmit={this.onUpdateSubmit}
          />
          <CategoryForm
            state={this.state.name}
            onSubmitCategory={this.onSubmitCategory}
            onChange={this.onChange}
          />
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  products: state.products.products,
  product: state.products.product,
  suppliers: state.suppliers.suppliers,
  categories: state.products.categories,
})

export default connect(mapStateToProps, {
  getProductList,
  getProduct,
  getSupplierList,
  getCategoryList,
  deleteProduct,
  updateProduct,
  addCategory,
  addProduct,
})(ProductSetting)
