import React from "react"
import { withRouter, NavLink } from "react-router-dom"
import { connect } from "react-redux"
import { logout } from "../../store/actions/Accounts/auth"
import Alerts from "../../components/Alerts"
import PropTypes from "prop-types"
class CustomLayout extends React.Component {
  static propTypes = {
    AuthReducer: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
  }
  componentDidMount() {
    console.log(this.props.children)
  }

  render() {
    const { user } = this.props.AuthReducer
    return (
      <>
        <Alerts />
        {user ? (
          <span className='navbar-text mr-3 container'>
            Welcome {user.username}
          </span>
        ) : (
          ""
        )}
        <nav className='navbar navbar-expand-sm navbar-dark bg-primary '>
          <button
            className='navbar-toggler collapsed'
            type='button'
            data-toggle='collapse'
            data-target='#navbarsExample10'
            aria-controls='navbarsExample10'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>

          <div
            className='navbar-collapse justify-content-sm-center collapse'
            id='navbarsExample10'>
            <ul className='navbar-nav'>
              {this.props.AuthReducer.isAuthenticated ? (
                <li className='nav-item active'>
                  <NavLink
                    className='nav-link'
                    onClick={this.props.logout}
                    to='/login'>
                    Logout <span className='sr-only'>(current)</span>
                  </NavLink>
                </li>
              ) : (
                <li className='nav-item active'>
                  <NavLink className='nav-link' to='/login'>
                    Login <span className='sr-only'>(current)</span>
                  </NavLink>
                </li>
              )}
              <li className='nav-item'>
                <NavLink className='nav-link' to={"/articles"}>
                  Posts
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to={"/products"}>
                  Products
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>

        <div className='container pt-5'>{this.props.children}</div>
      </>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    AuthReducer: state.AuthReducer,
  }
}
export default withRouter(connect(mapStateToProps, { logout })(CustomLayout))
