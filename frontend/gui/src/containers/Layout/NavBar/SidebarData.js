import React from "react"
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"
import * as VscIcons from "react-icons/vsc"
import * as FiIcons from "react-icons/fi"
import * as RiIcons from "react-icons/ri"
import * as GrIcons from "react-icons/gr"

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <AiIcons.AiOutlineDashboard />,
    cName: "nav-text",
  },
  {
    title: "Products",
    path: "/products",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "Reports",
    path: "/reports",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },

  {
    title: "Product Setting",
    path: "/products/setting",
    icon: <RiIcons.RiFileSettingsFill />,
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
    path: "/accounts/setting",
    icon: <VscIcons.VscAccount />,
    cName: "nav-text",
  },

  {
    title: "Supplier",
    path: "/supplier",
    icon: <FiIcons.FiTruck />,
    cName: "nav-text",
  },
  {
    title: "Transaction History",
    path: "/transactions",
    icon: <AiIcons.AiOutlineTransaction />,
    cName: "nav-text",
  },
  {
    title: "Transaction item",
    path: "/transactions/items",
    icon: <FaIcons.FaSitemap />,
    cName: "nav-text",
  },
]
