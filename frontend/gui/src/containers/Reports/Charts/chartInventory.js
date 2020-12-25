import React, { Component } from "react"
import PropTypes from "prop-types"
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2"
let coloR = []
class ChartInv extends Component {
  static propTypes = {
    chartData: PropTypes.array.isRequired,
    label: PropTypes.string.isRequired,
  }
  constructor(props) {
    super(props)
    this.state = {
      labels: this.props.chartData.map((x) => x.created_at),
      data: this.props.chartData.map((x) => x.new_stock),
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.chartData !== prevProps.chartData) {
      this.setState({
        labels: this.props.chartData.map((x) => x.created_at),
        data: this.props.chartData.map((x) => x.new_stock),
      })
    }
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
            data={{
              labels: this.state.labels,
              datasets: [
                {
                  label: "Inventory",
                  fill: false,
                  data: this.state.data,
                  backgroundColor: coloR,
                },
              ],
            }}
            options={{
              title: {
                display: true,
                text: this.props.label,
                fontSize: 25,
              },
              legend: {
                display: true,
                position: "bottom",
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
          />
        </div>
      </div>
    )
  }
}

export default ChartInv
