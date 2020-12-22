import React, { Component } from "react"
import { Bar, Line, Pie, Doughnut, HorizontalBar } from "react-chartjs-2"
import { connect } from "react-redux"
let coloR = []
class ChartProd extends Component {
  constructor(props) {
    super(props)
    this.state = {
      labels: this.props.chartData.map((x) => "Product : " + x.name),
      data: this.props.chartData.map((x) => x.stock),
    }
  }
  componentDidMount() {
    this.setState({
      labels: this.props.chartData.map((x) => "Product : " + x.name),
      data: this.props.chartData.map((x) => x.stock),
    })
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.chartData !== prevProps.chartData) {
      this.setState({
        labels: this.props.chartData.map((x) => "Product : " + x.name),
        data: this.props.chartData.map((x) => x.stock),
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
          <HorizontalBar
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
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                      autoSkip: true,
                    },
                    gridLines: {
                      display: false,
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

export default ChartProd
