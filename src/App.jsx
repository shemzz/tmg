import { useState } from 'react'
import AuthLayout from './layouts/AuthLayout'
import './App.css'
import Header from './components/Header'
import SideBar from './components/Sidebar'
import Dashboard from './pages/Dashboard'

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
    console.log(openSidebarToggle)
  }

  return (
     <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <SideBar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Dashboard />
    </div>
  )
}

export default App
