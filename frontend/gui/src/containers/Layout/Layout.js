import React, { useState } from "react"
import { withRouter, NavLink } from "react-router-dom"
import { connect } from "react-redux"
import { logout } from "../../store/actions/Accounts/auth"
import Alerts from "../../components/Alerts"
import PropTypes from "prop-types"
import Navbar from "./NavBar/Navbar"

class CustomLayout extends React.Component {
  state = {
    sidebarStatus: false,
  }
  static propTypes = {
    AuthReducer: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
  }

  handler = () => {
    this.setState((prevState) => ({
      sidebarStatus: !prevState.sidebarStatus,
    }))
  }
  render() {
    const { user } = this.props.AuthReducer
    return (
      <>
        <Alerts />
        <Navbar
          handler={this.handler}
          sidebarStatus={this.state.sidebarStatus}
        />
        {/*
        {user ? (
          <span className='navbar-text mr-3 container'>
            Welcome {user.username}
          </span>
        ) : (
          ""
        )}
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
              ? "container container-active"
              : "container"
          }>
          {this.props.children}
        </div>
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
