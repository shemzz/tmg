import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/sidebar.css';
import '../styles/icons.css';
import logo from '../assets/logo.png';
import { BsXCircle } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState('Dashboard');

  useEffect(() => {
    const segments = location.pathname.split('/');
    const lastSegment = segments[segments.length - 1];
    setActiveItem(lastSegment || 'Dashboard');
  }, [location]);

  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <img src={logo} alt="logo" />
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}><BsXCircle /></span>
      </div>

      <NavLink to='/dashboard'>
        <div className={`sidebar-list-item ${activeItem === 'dashboard' ? 'active' : ''}`}>
          Dashboard
        </div>
      </NavLink>
      <NavLink to='/dashboard/users'>
        <div className={`sidebar-list-item ${activeItem === 'users' ? 'active' : ''}`}>
          Users
        </div>
      </NavLink>
      <NavLink to='/dashboard/profile'>
        <div className={`sidebar-list-item ${activeItem === 'profile' ? 'active' : ''}`}>
          Profile
        </div>
      </NavLink>
      <NavLink to='/dashboard/change-password'>
        <div className={`sidebar-list-item ${activeItem === 'change-password' ? 'active' : ''}`}>
          Change Password
        </div>
      </NavLink>
      <NavLink to='/dashboard/logout'>
        <div className={`sidebar-list-item ${activeItem === 'logout' ? 'active' : ''}`}>
          Logout
        </div>
      </NavLink>
    </aside>
  )
}

export default Sidebar;
