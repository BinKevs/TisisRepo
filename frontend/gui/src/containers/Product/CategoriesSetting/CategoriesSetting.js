import React, { Component, Fragment } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import Form from "./Form"
import {
  getCategoryList,
  deleteCategory,
} from "../../../store/actions/Product/products"
export class CategoriesSetting extends Component {
  static propTypes = {
    categories: PropTypes.array.isRequired,
    getCategoryList: PropTypes.func.isRequired,
    deleteCategory: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.getCategoryList()
  }

  render() {
    return (
      <Fragment>
        <div className='container'>
          <h2>Categories</h2>
          <table
            className='table table-striped align-middl'
            style={{ textAlign: "center" }}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {this.props.categories.map((category) => (
                <tr key={category.id}>
                  <td className='align-middle'>{category.id}</td>
                  <td className='align-middle'>{category.name}</td>

                  <td className='align-middle'>
                    <button
                      onClick={this.props.deleteCategory.bind(
                        this,
                        category.id,
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
          <Form />
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  categories: state.products.categories,
})

export default connect(mapStateToProps, { getCategoryList, deleteCategory })(
  CategoriesSetting,
)
