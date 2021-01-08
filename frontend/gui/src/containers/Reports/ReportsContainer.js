import React, { Component, Fragment } from "react"
import { connect } from "react-redux"
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2"
import PropTypes from "prop-types"
import { getProductList } from "../../store/actions/Product/products"
import { getInventoryList } from "../../store/actions/Inventory/inventories.js"
import ChartInv from "./Charts/chartInventory"
import ChartProd from "./Charts/chartProduct"
export class ReportsContainer extends Component {
  static propTypes = {
    products: PropTypes.array.isRequired,
    inventories: PropTypes.array.isRequired,
    getProductList: PropTypes.func.isRequired,
    getInventoryList: PropTypes.func.isRequired,
  }
  componentDidMount() {
    this.props.getProductList()
    this.props.getInventoryList()
  }
  ChartProd
  render() {
    return (
      <Fragment>
        <div className='container row'>
          <div className='col-5 m-auto'>
            <ChartInv
              chartData={this.props.inventories}
              label='Added in Inventory'
            />
          </div>
          <div className='col-5 m-auto'>
            <ChartProd
              chartData={this.props.products}
              label='Number of stocks'
            />
          </div>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  products: state.products.products,
  inventories: state.inventories.inventories,
})

export default connect(mapStateToProps, {
  getProductList,
  getInventoryList,
})(ReportsContainer)
