import React from "react"
import { Link } from "react-router-dom"
import * as FaIcons from "react-icons/fa"
import * as BiIcons from "react-icons/bi"

import { SidebarData } from "./SidebarData"
import "./Navbar.css"
import { IconContext } from "react-icons"
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
                    <li
                      key={index}
                      className={item.cName}
                      data-toggle={item.toggle}
                      data-target={item.dataTarget}>
                      <Link to={item.path}>
                        <div>{item.icon}</div>
                        <span className='c'>{item.title}</span>
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

export default Navbar
