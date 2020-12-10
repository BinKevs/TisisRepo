import React, { Component } from "react"
import { Bar, Line, Pie } from "react-chartjs-2"
import { connect } from "react-redux"
import {
  getProductList,
  deleteProduct,
} from "../../store/actions/Product/products"
let coloR = []
class Chart extends Component {
  componentDidMount() {
    this.props.getProductList()
  }

  constructor(props) {
    super(props)
    this.state = {
      chartData: {
        labels: props.products.map((product) => product.name),
        datasets: [
          {
            label: "Population",
            data: props.products.map((product) => product.stock),
            backgroundColor: coloR,
          },
        ],
      },
    }
  }
  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "bottom",
  }

  render() {
    var dynamicColors = function () {
      var r = Math.floor(Math.random() * 255)
      var g = Math.floor(Math.random() * 255)
      var b = Math.floor(Math.random() * 255)
      return "rgba(" + r + "," + g + "," + b + "," + 0.6 + ")"
    }
    for (let i = 0; i < this.state.chartData.labels.length; i++) {
      coloR.push(dynamicColors())
    }
    return (
      <div className='container'>
        <div className='chart'>
          <Bar
            data={this.state.chartData}
            //   width={100}
            //   height={50}
            options={{
              title: {
                display: this.props.displayTitle,
                text: "Largest Cities In ",
                fontSize: 25,
              },
              legend: {
                display: this.props.displayLegend,
                position: this.props.legendPosition,
              },
            }}
          />
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  products: state.products.products,
})

export default connect(mapStateToProps, { getProductList })(Chart)
