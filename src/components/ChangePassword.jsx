import { useState } from 'react';
import { Button, InputAdornment, IconButton, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from "@mui/icons-material";
import '../styles/user.css';
import blueLogo from '../assets/logo-blue.png';

export default function ChangePassword() {
    const [showPassword, setShowPassword] = useState(false);


    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <main className='main'>
            <div className='title'>
                <h3>Change Password</h3>
            </div>
            <div className='main-container'>
                <div className='user add'>
                    <div className='edit'>
                        <div className='img-holder blue-logo'>
                            <img src={blueLogo} alt="user" width={100} />
                        </div>
                        <div className='add-detail'>

                            <label>Old Password</label>
                            <input type="password" placeholder='Admin' />
                            <label>New Password</label>
                            <div className='password'>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="●●●●●●"
                                    style={{
                                        background: '#f5f5f5',
                                        borderRadius: '4px',
                                        width: '100%',
                                        padding: '10px',
                                    }}
                                />
                                <InputAdornment position="end" style={{ position: 'absolute', right: '0', top: '35%', transform: 'translateY(-50%)' }}>
                                    <IconButton onClick={handleShowPassword}>
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            </div>

                            <label>Confirm Password</label>
                            <div className='password'>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="●●●●●●"
                                    style={{
                                        background: '#f5f5f5',
                                        borderRadius: '4px',
                                        width: '100%',
                                        padding: '10px',
                                    }}
                                />
                                <InputAdornment position="end" style={{ position: 'absolute', right: '0', top: '35%', transform: 'translateY(-50%)' }}>
                                    <IconButton onClick={handleShowPassword}>
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            </div>
                           

                            <Button variant="contained" color="primary">Update</Button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
