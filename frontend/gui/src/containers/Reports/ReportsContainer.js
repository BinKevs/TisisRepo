import React, { Component, Fragment } from "react"
import { connect } from "react-redux"
import { getProductList } from "../../store/actions/Product/products"
import { getInventoryList } from "../../store/actions/Inventory/inventories.js"
import ChartInv from "./Charts/chartInventory"
import ChartProd from "./Charts/chartProduct"

import { Bar, Line, Pie, Doughnut } from "react-chartjs-2"
export class ReportsContainer extends Component {
  componentDidMount() {
    this.props.getProductList()
    this.props.getInventoryList()
  }
  ChartProd
  render() {
    return (
      <Fragment>
        <div className='container'>
          <ChartInv
            chartData={this.props.inventories}
            label='Added in Inventory'
          />
          <ChartProd chartData={this.props.products} label='Number of stocks' />
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
