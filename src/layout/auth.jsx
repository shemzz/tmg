import { Routes, Route} from 'react-router-dom'; 
import SignIn from '../pages/auth/Signin';

function Auth() {

  return (
    <div className='grid-container'>
      <Routes>
        <Route path='/' element={<SignIn />} />
      </Routes>
      
    </div>
  )
}

export default Auth