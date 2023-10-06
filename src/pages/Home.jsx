import Chart from '../components/Chart'
import '../styles/home.css'
 
import registered from '../assets/registered.png'
import building from '../assets/building.png'
  import team from '../assets/team.png'


function Home() {

  return (
    <main className='main'>
      <div className='title'>
            <h3>Dashboard</h3>
        </div>
      <div className='main-container'>

        <div className='main-cards'>
        <div className='card'>
        <div className='card-img'>
                <img src={registered} alt="registered profile" width={50} />
            </div>
                <div className='card-inner'>
                    <h5>Registered Profiles</h5>
                    <h2>2000</h2>
                </div>
          </div>
          <div className='card'>
            <div className='card-img'>
                <img src={building} alt="company profile" width={50} />
            </div>
                <div className='card-inner'>
                    <h5>Company Profiles</h5>
                    <h2>50</h2>
                </div>
            </div>
            <div className='card'>
            <div className='card-img'>
                <img src={team} alt="total profile" width={55} />
            </div>
                <div className='card-inner'>
                    <h5>Total Profiles</h5>
                    <h2>2050</h2>
                </div>
            </div>

        </div>

        <Chart />
       </div>
    </main>
  )
}

export default Home