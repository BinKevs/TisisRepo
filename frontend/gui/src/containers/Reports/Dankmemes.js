import React, { useState, useEffect } from "react"
import { Line, Bar } from "react-chartjs-2"
import axios from "axios"

const Dankmemes = () => {
  const [chartData, setChartData] = useState({})
  const [employeeSalary, setEmployeeSalary] = useState([])
  const [employeeAge, setEmployeeAge] = useState([])

  const chart = () => {
    let prodname = []
    let prodstock = []
    axios
      .get("http://127.0.0.1:8000/api/products/")
      .then((res) => {
        console.log(res)
        for (const dataObj of res.data) {
          prodname.push(dataObj.name)
          prodstock.push(parseInt(dataObj.stock))
        }
        setChartData({
          labels: prodname,
          datasets: [
            {
              label: "level of thiccness",
              data: prodstock,
              backgroundColor: "rgba(75, 192, 192, 0.6)",
              borderWidth: 4,
            },
          ],
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    chart()
  }, [])
  return (
    <div className='App'>
      <h1>Dankmemes</h1>
      <div>
        <Bar
          data={chartData}
          options={{
            title: {
              display: true,
              text: "Number of stocks",
              fontSize: 25,
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    min: 0,
                    max: 1000,
                  },
                  gridLines: {
                    display: false,
                  },
                },
              ],
            },
            legend: {
              display: true,
              position: "bottom",
            },
          }}
        />
      </div>
    </div>
  )
}

export default Dankmemes
