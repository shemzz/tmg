import { Routes, Route} from 'react-router-dom'; 

import { useState } from 'react'
import Home from '../pages/Home';
import Users from '../pages/Users';

import Header from '../components/Header'
import SideBar from '../components/SideBar'
import UserDetail from '../components/UserDetail';

function Dashboard() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
        <Header OpenSidebar={OpenSidebar}/>
          <SideBar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
          
          <Routes>
              <Route path='/' element={<Home />} />
        <Route path='/users' element={<Users />} />
        <Route path='/users/user/:id' element={<UserDetail />} />
                  <Route path='*' element={<h1>Not Found</h1>} />
            </Routes>
  </div>
  )
}

export default Dashboard