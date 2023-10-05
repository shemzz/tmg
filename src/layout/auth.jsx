import { Routes, Route} from 'react-router-dom'; 
import SignIn from '../components/SignIn';

import '../styles/auth.css'

function Auth() {

  return (
    <div className='auth-container'>
      <Routes>
        <Route path='/sign-in' element={<SignIn />} />
      </Routes>
      
    </div>
  )
}

export default Auth