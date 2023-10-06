import { useState } from 'react';
import { Button, InputAdornment, IconButton, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from "@mui/icons-material";
import '../styles/user.css';
import photoIcon from '../assets/update-photo.png';

export default function AddUser() {
    const [showPassword, setShowPassword] = useState(false);


    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <main className='main'>
            <div className='title'>
                <h3>Add New User</h3>
            </div>
            <div className='main-container'>
                <div className='user add'>
                    <div className='edit'>
                    <div style={{width: '100%'}}>
                        <p style={{ textAlign: 'left' } } >Add New User</p>
                        </div>
                        <div className='img-holder'>
                            <img src={photoIcon} alt="user" width={100} />
                        </div>
                        <div className='add-detail'>
                            <label>Full Name</label>
                            <input type="text" placeholder='Lorem' />

                            <label>Phone Number</label>
                            <input type="phone" placeholder='123' />

                            <label>Email</label>
                            <input type="email" placeholder='lorem@gmail.com' />
                            <label>Password</label>
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
                           

                            <Button variant="contained" color="primary">Submit</Button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
