import React from "react"
import { Link } from "react-router-dom"
import * as FaIcons from "react-icons/fa"
import * as BiIcons from "react-icons/bi"
import { logout } from "../../../store/actions/Accounts/auth"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import { SidebarData } from "./SidebarData"
import "./Navbar.css"
import { IconContext } from "react-icons"
import * as FiIcons from "react-icons/fi"
class Navbar extends React.Component {
  render() {
    return (
      <>
        <IconContext.Provider value={{ color: "#fff" }}>
          <Link to='#' className='menu-bars'>
            <div className='navbar bg-dark' onClick={this.props.handler}>
              <div className='logoMinified'>
                {this.props.sidebarStatus ? <BiIcons.BiLeftArrow /> : ""}
              </div>
              <FaIcons.FaBars />
              <div className='logoMinified'>
                {this.props.sidebarStatus ? "" : <BiIcons.BiRightArrow />}
              </div>
            </div>
          </Link>

          <nav
            className={
              this.props.sidebarStatus
                ? "nav-menu active bg-dark"
                : "nav-menu bg-dark"
            }>
            <ul className='nav-menu-items '>
              <div className='wrapper'>
                <li className='navbar-toggle'>
                  <Link to='#' className='menu-account-picture'>
                    <BiIcons.BiUserCircle />
                  </Link>
                </li>
              </div>
              <div className='wrapper-li'>
                {SidebarData.map((item, index) => {
                  return (
                    <li key={index} className={item.cName}>
                      <Link to={item.path}>
                        <div>{item.icon}</div>
                        <span className='c'>{item.title}</span>
                      </Link>
                    </li>
                  )
                })}
                {this.props.AuthReducer.isAuthenticated ? (
                  <li className='nav-text' onClick={this.props.logout}>
                    <Link to='/login'>
                      <div>
                        <FiIcons.FiLogOut />
                      </div>
                      <span className='c'>Logout</span>
                    </Link>
                  </li>
                ) : (
                  <div>
                    <li
                      className='nav-text dropdown-toggle '
                      type='button'
                      id='dropdownMenuButton'>
                      <Link to='/login'>
                        <div>
                          <FiIcons.FiLogIn />
                        </div>
                        <span className='c'>Login</span>
                      </Link>
                    </li>
                    <div
                      class='dropdown-menu'
                      aria-labelledby='dropdownMenuButton'>
                      <a class='dropdown-item' href='#'>
                        Action
                      </a>
                      <a class='dropdown-item' href='#'>
                        Another action
                      </a>
                      <a class='dropdown-item' href='#'>
                        Something else here
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </ul>
          </nav>
        </IconContext.Provider>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    AuthReducer: state.AuthReducer,
  }
}
export default withRouter(connect(mapStateToProps, { logout })(Navbar))
