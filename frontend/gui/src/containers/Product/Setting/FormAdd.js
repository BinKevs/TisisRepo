import React, { Component } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import * as AiIcons from "react-icons/ai"
import { addProduct } from "../../../store/actions/Product/products"
import { addCategory } from "../../../store/actions/Product/products"
import { getCategoryList } from "../../../store/actions/Product/products"
import { getSupplierList } from "../../../store/actions/Supplier/suppliers"
import CategoryForm from "../ModalForms/CategoryForm"
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
    category: 0,
    stock: 0,
    image: null,
  }

  onSubmit = (e) => {
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
  onChange = (event) => {
    if (event.target.name === "image") {
      this.setState({ [event.target.name]: event.target.files[0] })
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
  componentDidMount() {
    this.props.getSupplierList()
    this.props.getCategoryList()
  }

  render() {
    const { name, description, price, stock } = this.state
    const { suppliers, categories } = this.props
    const { onChange, onSubmit, onSubmitCategory } = this
    return (
      <>
        <div
          className='modal fade'
          id='ProductModalFormAdd'
          tabIndex='-1'
          role='dialog'
          aria-labelledby='exampleModalCenterTitle'
          aria-hidden='true'>
          <div
            className='modal-dialog modal-dialog-centered modal-lg '
            role='document'>
            <div className='modal-content borderCust'>
              <div className='modal-header borderCustUpperBody2 borderCustGen'>
                <button
                  type='button'
                  className='close'
                  data-dismiss='modal'
                  aria-label='Close'>
                  <span aria-hidden='true'>&times;</span>
                </button>
              </div>
              <div className='card card-body mt-4 mb-4 p-5'>
                <CategoryForm
                  state={name}
                  onSubmitCategory={onSubmitCategory}
                  onChange={onChange}
                />
                <h2>Product</h2>

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
                  <label>Example file input</label>
                  <input
                    type='file'
                    name='image'
                    onChange={onChange}
                    className='form-control-file'
                  />
                </div>
                <div className='form-group'>
                  <div className='d-flex justify-content-start mb-3'>
                    <label>Select Category</label>
                    <div
                      className='btn btn-success p-0 px-2 ml-3'
                      data-toggle='modal'
                      data-target='#CategoryModalForm'
                      style={{ fontSize: "1.5em" }}>
                      <AiIcons.AiOutlinePlus />
                    </div>
                  </div>
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
                    name='stock'
                    onChange={onChange}
                    value={stock}
                  />
                </div>
                <div className='form-group'>
                  <button
                    type='submit'
                    onClick={onSubmit}
                    data-dismiss='modal'
                    className='btn btn-primary'>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
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
  addCategory,
})(Form)
