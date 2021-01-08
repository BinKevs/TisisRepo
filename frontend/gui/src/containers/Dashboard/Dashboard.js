import React, { Component, Fragment } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { getProductList } from "../../store/actions/Product/products"
import { getTransactionList } from "../../store/actions/Transaction/transactions"
import { Line } from "react-chartjs-2"
let coloR = []
let transactionsFiltered = []
let dateSliced = []
export class Dashboard extends Component {
  static propTypes = {
    accounts: PropTypes.array.isRequired,
    getAccountList: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props)

    this.state = {
      labels: {},
      data: {},
    }
  }
  componentDidMount() {
    this.props.getProductList()
    this.props.getTransactionList()
  }

  render() {
    const DateNow = Date().toLocaleString().split(" ")
    transactionsFiltered = []
    this.props.transactions
      .filter(
        (transaction) =>
          transaction.created_at.includes(DateNow[1]) &&
          transaction.created_at.includes(DateNow[3]),
      )
      .map((filteredTransaction) =>
        transactionsFiltered.push({
          id: filteredTransaction.id,
          totalAmount: filteredTransaction.totalAmount,
          date:
            filteredTransaction.created_at.split(" ")[0] +
            " " +
            filteredTransaction.created_at.split(" ")[1],
        }),
      )

    var dynamicColors = function () {
      var r = Math.floor(Math.random() * 255)
      var g = Math.floor(Math.random() * 255)
      var b = Math.floor(Math.random() * 255)
      return "rgba(" + r + "," + g + "," + b + "," + 0.6 + ")"
    }
    for (let i = 0; i < transactionsFiltered.length; i++) {
      coloR.push(dynamicColors())
    }

    return (
      <Fragment>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-8'>
              <div className='card_cust p-5'>
                <h2 className='text-danger'>
                  We're running out of stock in the following items
                </h2>
                <table className='table table-striped'>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Stock</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.products
                      .filter((prod) => prod.stock < 10)
                      .map((product) => (
                        <tr key={product.id}>
                          <td>{product.id}</td>
                          <td>{product.name}</td>
                          <td>{product.stock}</td>
                          {/* <td>
                    <button
                      onClick={this.props.deleteAccount.bind(this, account.id)}
                      className='btn btn-danger btn-sm'>
                      {" "}
                      Delete
                    </button>
                  </td> */}
                        </tr>
                      ))}
                  </tbody>
                </table>
                {/* <Form /> */}
              </div>
            </div>
            <div className='col-xl-4'>
              <div className='card_cust p-5'>
                <h2 className='text-danger'>
                  We're running out of stock in the following items
                </h2>
                <table className='table table-striped'>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Stock</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.products
                      .filter((prod) => prod.stock < 10)
                      .map((product) => (
                        <tr key={product.id}>
                          <td>{product.id}</td>
                          <td>{product.name}</td>
                          <td>{product.stock}</td>
                          {/* <td>
                    <button
                      onClick={this.props.deleteAccount.bind(this, account.id)}
                      className='btn btn-danger btn-sm'>
                      {" "}
                      Delete
                    </button>
                  </td> */}
                        </tr>
                      ))}
                  </tbody>
                </table>
                {/* <Form /> */}
              </div>
            </div>
            <div className='col-xl-6'>
              <div className='card_cust p-5'>
                <h2>Monthly Sales Statistics</h2>
                <div className='chart'>
                  <Line
                    //   width={100}
                    //   height={50}
                    data={{
                      labels: transactionsFiltered.map((x) => x.date),
                      datasets: [
                        {
                          label: "Inventory",
                          fill: false,
                          data: transactionsFiltered.map((x) => x.totalAmount),
                          backgroundColor: coloR,
                        },
                      ],
                    }}
                    options={{
                      title: {
                        display: true,
                        text: "Monthly Statistics",
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
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  products: state.products.products,
  transactions: state.transactions.transactions,
})

export default connect(mapStateToProps, { getProductList, getTransactionList })(
  Dashboard,
)
