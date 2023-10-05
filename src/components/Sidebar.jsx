/* eslint-disable react/prop-types */

import '../styles/sidebar.css'
import '../styles/icons.css'
 import logo from '../assets/logo.png';
import { BsXCircle } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

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
              <li className='sidebar-list-item'>
                <NavLink to='/'>
                    Dashboard
                </NavLink>
            </li>
            <li className='sidebar-list-item'>
            <NavLink to='/dashboard/users'>
                    Users
                </NavLink>
            </li>
            <li className='sidebar-list-item'>
            <NavLink to='/dashboard/profile'>
                    Profile
                </NavLink>
            </li>
            <li className='sidebar-list-item'>
            <NavLink to='/dashboard/change-password'>
                    Change Password
                </NavLink>
            </li>
            <li className='sidebar-list-item'>
            <NavLink to='/dashboard/logout'>
                    Logout
                </NavLink>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar