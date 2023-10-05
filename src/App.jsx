import { Routes, Route, Navigate} from 'react-router-dom'; 

import './App.css'


import Dashboard from './layout/dashboard';
import Auth from './layout/auth';
import NotFound from './pages/404';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to="/dashboard" replace />} />
        <Route path='/dashboard/*' element={<Dashboard />} />
        <Route path='/auth/*' element={<Auth />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App