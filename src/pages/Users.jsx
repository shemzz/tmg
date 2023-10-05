import UsersTable from '../components/Userstable'
import '../styles/user.css'
 


function Users() {

  return (
    <main className='main'>
      <div className='title'>
            <h3>Users</h3>
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
                  {/* table */}
                  <UsersTable />
        </div>
        
       </div>
    </main>
  )
}

export default Users