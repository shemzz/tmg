import { useState } from 'react';
import { Button } from '@mui/material';
import '../styles/user.css'
import user from '../assets/user.png';
import photoIcon from '../assets/update-photo.png'


export default function UserDetail() {
    const [isEditing, setIsEditing] = useState(false);
    const [isUpdated, setIsUpdated] = useState(false);

    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };

    const handleUpdate = () => {
        setIsUpdated(!isUpdated);

        setTimeout(() => {
            setIsUpdated(false);
            setIsEditing(false);
        }, 2000);
    }

  return (
    <main className='main'>
    <div className='title'>
          <h3>User <small className='small'> View/Edit Details</small></h3>
      </div>
    <div className='main-container'>
                <div className='user'>
                    <div className='edit'>
                      <div className='img-holder'>
                          <img src={user} alt="user" width={100} />
                      </div>
                      <div className='detail'>
                          <label>Name</label>
                          <p className='small'>Safaa</p>

                          <label>Email</label>
                          <p className='small'>davidshemang@gmail.com</p>
                          
                          <label>Phone Number</label>
                          <p className='small'>123456789</p>
                          
                          <Button variant="contained" color="primary" onClick={toggleEdit}>{ isEditing ? 'Cancel Editing' : 'Edit Detail'}</Button>
                      </div>
                    </div>
                  {isEditing && (
                       <div className='edit'>
                       <div className='img-holder'>
                           <img src={photoIcon} alt="user" width={100} />
                       </div>
                       <div className='detail'>
                           <label>Name</label>
                           <input type="text" placeholder='Safaa' />
 
                           <label>Email</label>
                           <input type="email" placeholder='davidshemang@gmail.com'/>
                           
                           <label>Phone Number</label>
                           <input type="phone" placeholder='123456789' />
                           
                           <Button variant="contained" color="primary" onClick={handleUpdate}>Update</Button>
                       </div>
                     </div>
                  )}
                  {isUpdated && (
            <div className='update-successful'>
              Update Successful!
            </div>
          )}
                </div>
      
     </div>
  </main>
  );
}