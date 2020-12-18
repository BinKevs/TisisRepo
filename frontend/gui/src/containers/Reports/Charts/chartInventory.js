import React, { Component } from "react"
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2"
import { connect } from "react-redux"
import axios from "axios"
let coloR = []
let prodname = []
let prodstock = []
class ChartInv extends Component {
  constructor(props) {
    super(props)
    this.state = {
      labels: this.props.chartData.map(
        (x) =>
          "Supplier : " +
          x.supplier_info.name +
          "  |  Product : " +
          x.product_info.name +
          "  |  Date : " +
          x.created_at,
      ),
      data: this.props.chartData.map((x) => x.new_stock),
    }
  }
  componentDidMount() {
    this.setState({
      labels: this.props.chartData.map(
        (x) =>
          "Supplier : " +
          x.supplier_info.name +
          "  |  Product : " +
          x.product_info.name +
          "  |  Date : " +
          x.created_at,
      ),
      data: this.props.chartData.map((x) => x.new_stock),
    })
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.chartData !== prevProps.chartData) {
      this.setState({
        labels: this.props.chartData.map(
          (x) =>
            // "Supplier : " +
            // x.supplier.name +
            // "  |  Product : " +
            // x.product.name +
            // "  |  Date : " +
            x.created_at,
        ),
        data: this.props.chartData.map((x) => x.new_stock),
      })
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
    for (let i = 0; i < this.state.data.length; i++) {
      coloR.push(dynamicColors())
    }
    return (
      <div className='container'>
        <div className='chart'>
          <Line
            //   width={100}
            //   height={50}
            options={{
              title: {
                display: this.props.displayTitle,
                text: this.props.label,
                fontSize: 25,
              },
              legend: {
                display: this.props.displayLegend,
                position: this.props.legendPosition,
              },
              scales: {
                xAxes: [
                  {
                    // type: "time",
                    // time: {
                    //   unit: "week",
                    // },
                  },
                ],
                yAxes: [
                  {
                    ticks: {
                      min: 0,
                    },
                  },
                ],
              },
            }}
            data={{
              labels: this.state.labels,
              datasets: [
                {
                  data: this.state.data,
                  backgroundColor: coloR,
                },
              ],
            }}
          />
        </div>
      </div>
    )
  }
}

export default ChartInv
