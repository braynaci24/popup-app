import React from 'react'
import { Link } from "react-router-dom";
import PopupLogo  from "../.././src/images/popup-logo.png"
import DasboardLogo from "../.././src/images/dashboard.png"
import SidebarItem from "../.././src/images/sidebar-item.png"
import SidebarItemTwo from "../.././src/images/sidebar-item-2.png"
import SidebarItemFour from "../.././src/images/sidebar-item-4.png"
import SidebarItemFive from "../.././src/images/logout.png"

function Sidebar() {
  return (
    <div id="sidebar">
        <div className="sidebar-content">
            <img src={PopupLogo} id="site-logo" alt="logo" />
            <ul className="sidebar-item-container">
                <li className="sidebar-item"><img src={SidebarItem} alt=""/><Link to="/popup">Create Popup</Link> </li>
                <li className="sidebar-item"><img src={DasboardLogo} alt=""/><Link to="/PopupList">List Popup</Link></li>
                <li className="sidebar-item"><img src={SidebarItemTwo} alt=""/><Link to="/libarary">Libarary</Link> </li>
                <li className="sidebar-item"><img src={SidebarItemFour} alt=""/><Link to="/settings">Settings</Link> </li>
                <li className="sidebar-item logout"><img src={SidebarItemFive} alt=""/><Link to="/">Logout</Link> </li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar