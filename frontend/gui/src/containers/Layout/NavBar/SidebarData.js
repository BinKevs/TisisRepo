import React from "react"
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"
import * as VscIcons from "react-icons/vsc"
import * as FiIcons from "react-icons/fi"

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Reports",
    path: "/",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Products",
    path: "/products",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "Inventory",
    path: "/inventories/setting",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Account Settings",
    path: "/account",
    icon: <VscIcons.VscAccount />,
    cName: "nav-text",
  },
  {
    title: "Login",
    path: "/login",
    icon: <FiIcons.FiLogIn />,
    cName: "nav-text",
  },
  {
    title: "Logout",
    path: "/logout",
    icon: <FiIcons.FiLogOut />,
    cName: "nav-text",
  },
]
