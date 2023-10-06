/* eslint-disable react/prop-types */
import { useState } from 'react';
import {AreaChart, Area, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { chartData } from "../data/chart.data";
import '../styles/chart.css';

const CustomChart = ({ title, data, selectedFilter, handleFilterChange, color, fill }) => {
  const filteredData = data.filter(item => {
    switch (selectedFilter) {
      case '1D':
        return item.name === '1D';
      case '5D':
        return item.name === '5D';
      case '1M':
        return item.name === '1M';
      case '1Y':
        return item.name === '1Y';
      case 'Max':
        return true;
      default:
        return true;
    }
  });

  return (
    <div className='chart'>
      <div className='chart-detail'>
        <h5>{title}</h5>
        <div className='chart-dates'>
          <h6 onClick={() => handleFilterChange('1D')}>1D</h6>
          <h6 onClick={() => handleFilterChange('5D')}>5D</h6>
          <h6 onClick={() => handleFilterChange('1M')}>1M</h6>
          <h6 onClick={() => handleFilterChange('1Y')}>1Y</h6>
          <h6 onClick={() => handleFilterChange('Max')}>Max</h6>
        </div>
      </div>
      <ResponsiveContainer width="97%" height={200}>
        <AreaChart
          data={filteredData}
          margin={{ top: 5, right: 10, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 8" />
          <XAxis dataKey="name" hide={true} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="amt" name=' ' stroke={color} fill={fill} activeDot={{ r: 8 }} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default function Chart() {
  const [selectedFilter, setSelectedFilter] = useState('Max');

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <div className='charts'>
      <CustomChart title="Registered Profiles" data={chartData} selectedFilter={selectedFilter} handleFilterChange={handleFilterChange} color={'#ff0000'} fill={'#f3788074'}/>
      <CustomChart title="Company Profiles" data={chartData} selectedFilter={selectedFilter} handleFilterChange={handleFilterChange} color={'#0000ff'} fill={'#3a78d570'}/>
      <CustomChart title="Total Profiles" data={chartData} selectedFilter={selectedFilter} handleFilterChange={handleFilterChange} color={'#A89949'} fill={'#c5ba786d'} />
    </div>
  );
}
