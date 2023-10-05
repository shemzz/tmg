/* eslint-disable react/no-unknown-property */
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
function SignIn() {
    return (
        <>
            <div className='dark'>

            <div className='signin'>
            <div className='logo-holder'>
                <img src={logo} alt="logo" />
                </div>
                <div className='form-holder'>
                    <h2>Login</h2>
                    <form>
                    <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" required />
            </div>
            <div className="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" required />
            </div>
            <button type="submit">Log In</button>
                    </form>
                    <p>Don't have an account? <Link>Sign Up</Link></p>
                </div>
            </div>
            </div>
        </>
    )
}
export default SignIn;