import React from 'react'
import { Link } from "react-router-dom";
import PopupLogo  from "../.././src/popup-logo.png"
import DasboardLogo from "../.././src/dashboard.png"
import SidebarItem from "../.././src/sidebar-item.png"
import SidebarItemTwo from "../.././src/sidebar-item-2.png"
import SidebarItemThree from "../.././src/sidebar-item-3.png"
import SidebarItemFour from "../.././src/sidebar-item-4.png"
import SidebarItemFive from "../.././src/logout.png"

function Sidebar() {
  return (
    <div id="sidebar">
        <div className="sidebar-content">
            <img src={PopupLogo} id="site-logo" alt="logo" />
            <ul className="sidebar-item-container">
                <li className="sidebar-item"><img src={DasboardLogo} alt=""/><Link to="/dashboard">Dashboard</Link></li>
                <li className="sidebar-item"><img src={SidebarItem} alt=""/><Link to="/exchange">Exchange</Link> </li>
                <li className="sidebar-item"><img src={SidebarItemTwo} alt=""/><Link to="/libarary">Libarary</Link> </li>
                <li className="sidebar-item"><img src={SidebarItemThree} alt=""/><Link to="/payouts">Payouts</Link> </li>
                <li className="sidebar-item"><img src={SidebarItemFour} alt=""/><Link to="/settings">Settings</Link> </li>
                <li className="sidebar-item logout"><img src={SidebarItemFive} alt=""/><Link to="/">Logout</Link> </li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar