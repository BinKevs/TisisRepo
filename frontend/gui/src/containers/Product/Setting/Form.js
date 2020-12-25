import React, { Component } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { addProduct } from "../../../store/actions/Product/products"
import { getCategoryList } from "../../../store/actions/Product/products"
import { getSupplierList } from "../../../store/actions/Supplier/suppliers"
export class Form extends Component {
  static propTypes = {
    addProduct: PropTypes.func.isRequired,
    getSupplierList: PropTypes.func.isRequired,
  }
  state = {
    name: "",
    supplier: 0,
    description: "",
    price: 0,
    quantity_stock: 0,
    category: 0,
    new_stock: 0,
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault()
    const {
      name,
      description,
      price,
      category,
      supplier,
      new_stock,
    } = this.state
    const product = { name, description, price, category, supplier, new_stock }
    this.props.addProduct(product)
    this.setState({
      name: "",
      description: "",
      price: 0,
      supplier: 0,
      category: 0,
      new_stock: 0,
    })
  }
  componentDidMount() {
    this.props.getSupplierList()
    this.props.getCategoryList()
  }

  render() {
    const { name, description, price, new_stock } = this.state
    const { suppliers, categories } = this.props
    const { onChange, onSubmit } = this
    return (
      <div className='card card-body mt-4 mb-4'>
        <h2>Product</h2>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <label>Name</label>
            <input
              className='form-control'
              type='text'
              name='name'
              onChange={onChange}
              value={name}
            />
          </div>

          <div className='form-group'>
            <label>Description</label>
            <textarea
              className='form-control'
              type='text'
              name='description'
              onChange={onChange}
              value={description}
            />
          </div>
          <div className='form-group'>
            <label>Select Category</label>

            <select
              className='form-control'
              name='category'
              id='exampleFormControlSelect1'
              onChange={onChange}>
              {categories.map((category) => (
                <option value={category.id} key={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div className='form-group'>
            <label>Select Supplier</label>

            <select
              className='form-control'
              name='supplier'
              id='exampleFormControlSelect1'
              onChange={onChange}>
              {suppliers.map((supplier) => (
                <option value={supplier.id} key={supplier.id}>
                  {supplier.name}
                </option>
              ))}
            </select>
          </div>
          <div className='form-group'>
            <label>Price</label>
            <input
              className='form-control'
              type='number'
              id='example-number-input'
              name='price'
              onChange={onChange}
              value={price}
            />
          </div>
          <div className='form-group'>
            <label>Stock quantity</label>
            <input
              className='form-control'
              type='number'
              id='example-number-input'
              name='new_stock'
              onChange={onChange}
              value={new_stock}
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  suppliers: state.suppliers.suppliers,
  categories: state.products.categories,
})
export default connect(mapStateToProps, {
  addProduct,
  getSupplierList,
  getCategoryList,
})(Form)
