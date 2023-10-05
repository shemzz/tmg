import 
{XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
from 'recharts';

import { chartData } from "../data/chart.data";
import '../styles/chart.css'

function Chart() {
    return (
        <div className='charts'>
            <div className='chart'>
            <div className='chart-detail'>
                    <h5>Registered Profiles</h5>
                    <div className='chart-dates'>
                        <h6>1D</h6>
                        <h6>5D</h6>
                        <h6>1M</h6>
                        <h6>1Y</h6>
                    </div>
                </div> 
             <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={chartData}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="amt" stroke="#ff0000" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
            </div>

            <div className='chart'>
            <div className='chart-detail'>
                    <h5>Registered Profiles</h5>
                    <div className='chart-dates'>
                        <h6>1D</h6>
                        <h6>5D</h6>
                        <h6>1M</h6>
                        <h6>1Y</h6>
                    </div>
                </div> 

             <ResponsiveContainer >
                <LineChart
                width={30}
                height={20}
                data={chartData}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="amt" stroke="#ff0000" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
            </div>

            <div className='chart'>
            <div className='chart-detail'>
                    <h5>Registered Profiles</h5>
                    <div className='chart-dates'>
                        <h6>1D</h6>
                        <h6>5D</h6>
                        <h6>1M</h6>
                        <h6>1Y</h6>
                    </div>
                </div> 

             <ResponsiveContainer >
                <LineChart
                width={30}
                height={20}
                data={chartData}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="amt" stroke="#ff0000" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
            </div>

        </div>
    );
}

export default Chart;
