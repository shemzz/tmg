/* eslint-disable react/no-unknown-property */
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom';
function SignIn() {
    const navigate = useNavigate();
    return (
        <>
            <div className='dark'>

            <div className='signin'>
            <div className='logo-holder'>
                <img src={logo} width={140} alt="logo" />
                </div>
                <div className='form-holder'>
                    <h2>Login</h2>
                    <form>
                    <div className="form-group">
                <label htmlFor="username">Email</label>
                <input type="email" placeholder='Enter Email' id="username" required />
            </div>
            <div className="form-group">
                <label for="password">Password</label>
                <input type="password" placeholder='●●●●●●' id="password" required />
            </div>
                            <button type="button" onClick={()=>navigate('/dashboard')}>Log In</button>
                    </form>
                    <p>Don't have an account? <Link className='link'>Sign Up</Link></p>
                </div>
            </div>
            </div>
        </>
    )
}
export default SignIn;