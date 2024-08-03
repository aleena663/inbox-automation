// src/components/Dashboard.js
import React from 'react';
import Sidebar from '../Sidebar';

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p>Welcome</p>
      </div>
    </div>
  );
};

export default Dashboard;
