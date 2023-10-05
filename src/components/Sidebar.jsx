/* eslint-disable react/prop-types */

import '../styles/sidebar.css'
import '../styles/icons.css'
 import logo from '../assets/logo.png';
import { BsXCircle } from 'react-icons/bs';

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <img src={logo} alt="logo" />
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}><BsXCircle /></span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item active'>
                <a href="">
                    Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                     Users
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    Profile
                  </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    Change Password
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    Logout
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar