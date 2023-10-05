
import '../styles/user.css'
 


export default function Progress() {
    const arr = '<';
  return (
    <main className='main'>
      <div className='title'>
              <h3>Users <small className='small'>{arr} Safaa {arr } Progress</small>  </h3>
        </div>
      <div className='main-container'>
              <div className='users-container'>
                  <div className='top'>
                      <div className='search'>
                          Search <input type='text' />
                      </div>
                      <div className='add-button'>
                          <button>Add New User</button>
                      </div>
                  </div>
        </div>
        
       </div>
    </main>
  )
}