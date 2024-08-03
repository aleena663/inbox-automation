// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './component/LoginPage';
import Dashboard from './component/dashboard/dashboard';
import CampaignDashboard from './component/campaigns';
import NewCampaign from './component/NewCampaign';
import ImportLeads from './component/ImportLeads'; // Import the ImportLeads component

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/campaigns" element={<CampaignDashboard />} />
          <Route path="/new-campaign" element={<NewCampaign />} />
          <Route path="/import-leads" element={<ImportLeads />} /> {/* Add the new route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

