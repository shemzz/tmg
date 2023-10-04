import { BsFileEarmarkFill, BsPeopleFill, BsBuildingFill } from "react-icons/bs";
import Chart from "../components/Chart";


function Dashboard() {
    return (
        <main className="main">
                <h3 className="title">Dashboard</h3>
            <div className="main-container">
            <div className="main-cards">
                <div className="card">
                    <div className="card-inner">
                        <BsFileEarmarkFill className="card_icon" />
                        <h3>Registered Profiles</h3>
                        <h1>2000</h1>
                    </div>
                </div>
                <div className="card">
                    <div className="card-inner">
                        <BsBuildingFill className="card_icon" />
                        <h3>Company Profiles</h3>
                        <h1>50</h1>
                    </div>
                </div>
                <div className="card">
                    <div className="card-inner">
                        <BsPeopleFill className="card_icon" />
                        <h3>Total Profiles</h3>
                        <h1>1000</h1>
                    </div>
                </div>
            </div>
            {/* chart */}
            <Chart />
            </div>
        </main>
    );
}

export default Dashboard;