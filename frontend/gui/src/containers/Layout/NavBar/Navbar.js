import React from "react"
import { Link } from "react-router-dom"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { logout } from "../../../store/actions/Accounts/auth"
import { SidebarData } from "./SidebarData"
import "./Navbar.css"
import { IconContext } from "react-icons"
import * as FiIcons from "react-icons/fi"
import * as FaIcons from "react-icons/fa"
import * as BiIcons from "react-icons/bi"
class Navbar extends React.Component {
  static propTypes = {
    logout: PropTypes.func.isRequired,
    AuthReducer: PropTypes.object.isRequired,
  }
  render() {
    const { sidebarStatus } = this.props
    return (
      <>
        <IconContext.Provider value={{ color: "#fff" }}>
          <Link to='#' className='menu-bars'>
            <div
              className='d-flex justify-content-between bg-dark pl-4'
              style={{ height: "50px", fontSize: "1.5em" }}>
              <div className='AddOn' onClick={this.props.handler}>
                <div className=' logoMinified'>
                  {sidebarStatus ? <BiIcons.BiLeftArrow /> : ""}
                </div>
                <FaIcons.FaBars />
                <div className='logoMinified'>
                  {sidebarStatus ? "" : <BiIcons.BiRightArrow />}
                </div>
              </div>
              <div>
                {this.props.AuthReducer.isAuthenticated ? (
                  <li className='nav-text' onClick={this.props.logout}>
                    <Link to='/login'>
                      <span>Logout</span>
                      <div>
                        <FiIcons.FiLogOut />
                      </div>
                    </Link>
                  </li>
                ) : (
                  <div>
                    <li className='nav-text'>
                      <Link to='/login'>
                        <span>Login</span>
                        <div>
                          <FiIcons.FiLogIn />
                        </div>
                      </Link>
                    </li>
                  </div>
                )}
              </div>
            </div>
          </Link>

          <nav
            className={
              sidebarStatus ? "nav-menu active bg-dark" : "nav-menu bg-dark"
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
                        <span>{item.title}</span>
                      </Link>
                    </li>
                  )
                })}
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
