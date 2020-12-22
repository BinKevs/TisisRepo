import React from "react"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import { logout } from "../../store/actions/Accounts/auth"
import Alerts from "../../components/Alerts"
import PropTypes from "prop-types"
import Navbar from "./NavBar/Navbar"
import { loadUser } from "../../store/actions/Accounts/auth"
class CustomLayout extends React.Component {
  state = {
    sidebarStatus: false,
  }
  static propTypes = {
    AuthReducer: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
  }
  // componentDidMount() {
  //   // this.props.loadUser()
  //   console.log(this.props.AuthReducer)
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.props.AuthReducer != prevProps.AuthReducer) {
  //     this.props.loadUser()
  //   }
  // }

  handlerTest = () => {
    console.log(this.props.AuthReducer)
  }
  handler = () => {
    this.setState((prevState) => ({
      sidebarStatus: !prevState.sidebarStatus,
    }))
  }
  render() {
    return (
      <>
        <Alerts />
        <Navbar
          handler={this.handler}
          sidebarStatus={this.state.sidebarStatus}
        />

        {/*
        
       <div
          className='navbar navbar-expand-sm navbar-dark sticky-top bg-dark '
          id='sidebar-wrapper'>
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
              <li>
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
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <NavLink className='nav-link' to={"/products/setting"}>
                <img src='https://img.icons8.com/windows/30/ffffff/gear.png' />
              </NavLink>
            </li>
            <li
              className='nav-item nav-link'
              data-toggle='modal'
              data-target='#staticBackdrop'>
              Cart
            </li>
          </ul>
        </div> */}
        <div
          className={
            this.state.sidebarStatus
              ? "container-active"
              : "container-non-active"
          }>
          <div className='overflow-hidden'>{this.props.children}</div>
        </div>
        {/* {this.props.AuthReducer.user.is_superuser === null ? (
          <span className='navbar-text mr-3 container'>
            Welcome {this.props.AuthReducer.user.username}
          </span>
        ) : (
          "qweqwe"
        )} 

        <button
          type='submit'
          className='btn btn-primary'
          onClick={this.handlerTest}>
          Submit
        </button>
        */}
      </>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    AuthReducer: state.AuthReducer,
  }
}
export default withRouter(
  connect(mapStateToProps, { logout, loadUser })(CustomLayout),
)
