import React, { Component, Fragment } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
// import Form from "./Form"
import { getAccountList } from "../../store/actions/Accounts/auth"

export class AccountSetting extends Component {
  static propTypes = {
    accounts: PropTypes.array.isRequired,
    getAccountList: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.getAccountList()
  }

  render() {
    return (
      <Fragment>
        <div className='container'>
          <div className='card_cust p-5'>
            <h2>Accounts</h2>
            <table className='table table-striped'>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>SuperUserStatus</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {this.props.accounts.map((account) => (
                  <tr key={account.id}>
                    <td>{account.id}</td>
                    <td>{account.first_name}</td>
                    <td>{account.last_name}</td>
                    <td>{account.email}</td>
                    <td>{account.is_superuser ? "True" : "False"}</td>
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
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  accounts: state.AuthReducer.accounts,
})

export default connect(mapStateToProps, { getAccountList })(AccountSetting)
