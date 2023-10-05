/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/sidebar.css';
import '../styles/icons.css';
import logo from '../assets/logo.png';
import { BsXCircle } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import logoutIcon from '../assets/logout-icon.png';
import { Button } from '@mui/material';

export default function Sidebar({ openSidebarToggle, OpenSidebar }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeItem, setActiveItem] = useState('Dashboard');

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

      <NavLink onClick={handleOpen}>
      <div className={`sidebar-list-item`}>
          Logout
        </div>
      </NavLink>

      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="logout-modal">
          <img src={logoutIcon} alt="logout" width={20} />
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mt: 2 }}>
            Log Out
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Are you sure you want to logout of your account?
          </Typography>
          <div className='buttons'>
            <Button color="primary" variant="contained" onClick={()=>navigate('/')}>Yes</Button>
            <Button color="grey" variant="contained" sx={{bgcolor:'grey'}} onClick={handleClose}>No</Button>
          </div>
        </Box>
      </Modal>

    </aside>
  )
}