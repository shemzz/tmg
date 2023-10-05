import { useState } from 'react';
import { Button } from '@mui/material';
import '../styles/user.css';
import photoIcon from '../assets/update-photo.png';
import user from '../assets/user.png';

export default function Profile() {
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true);
    }

    const handleSaveClick = () => {
        setIsEditing(false);
    }

    return (
        <main className='main'>
            <div className='title'>
                <h3>Profile</h3>
            </div>
            <div className='main-container'>
                <div className='user add'>
                    <div className='edit'>
                        <div className='img-holder'>
                            {isEditing ?
                                <img src={photoIcon} alt="user" width={100} />
                                :
                                <img src={user} alt="user" width={100} />
                            }
                        </div>
                        <div className='add-detail profile'>
                            <label>Name</label>
                            {isEditing ? <input type="text" defaultValue='Admin' /> : <p>Admin</p>}

                            <label>Email</label>
                            {isEditing ? <input type="email" defaultValue='admin@gmail.com' /> : <p>admin@gmail.com</p>}

                            <label>Phone Number</label>
                            {isEditing ? <input type="phone" defaultValue='123456' /> : <p>123456</p>}

                            {isEditing ?
                                <Button variant="contained" color="primary" onClick={handleSaveClick}>Save</Button> :
                                <Button variant="contained" color="primary" onClick={handleEditClick}>Edit Profile</Button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
