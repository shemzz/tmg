import { Routes, Route} from 'react-router-dom'; 

import { useState } from 'react'
import Home from '../pages/Home';
import Users from '../pages/Users';

import Header from '../components/Header'
import UserDetail from '../components/UserDetail';
import Progress from '../components/Progress';
import Sidebar from '../components/Sidebar';

function Dashboard() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
        <Header OpenSidebar={OpenSidebar}/>
          <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
          
          <Routes>
              <Route path='/' element={<Home />} />
        <Route path='/users' element={<Users />} />
        <Route path='/users/user/:id' element={<UserDetail />} />
        <Route path='/users/user/:id/progress' element={<Progress />} />
                  <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
      <footer className='footer'>
        <p>&copy; 2023 D.O.P Programme</p>
      </footer>
  </div>
  )
}

export default Dashboard