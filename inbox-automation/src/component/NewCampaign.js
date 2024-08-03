// src/component/NewCampaign.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LaunchImage from '../assets/launch-image.png';
import SettingsIcon from '../assets/settings.png';
import CustomIcon from '../assets/custom-icon.png';


const NewCampaign = () => {
  const [campaignName, setCampaignName] = useState('My Campaign');
  const navigate = useNavigate();

  const steps = [
    { name: 'My Campaign', number: '01' },
    { name: 'Import Leads', number: '02' },
    { name: 'Sequences', number: '03' },
    { name: 'Schedule', number: '04' },
    { name: 'Preferences', number: '05' }
  ];

  const handlePrevious = () => {
    navigate(-1);
  };

  const handleNext = () => {
    navigate('/import-leads');
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <div className="flex-grow flex flex-col px-8 py-6">
        <div className="flex items-center mb-12">
          <button onClick={handlePrevious} className="bg-purple-200 p-2 rounded-full mr-8">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="flex space-x-4 flex-grow justify-center">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className={`flex items-center ${index === 0 ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-500'} rounded-full px-4 py-2`}>
                  <span className="mr-2">{step.number}</span>
                  <span className={index === 0 ? 'font-semibold' : ''}>{step.name}</span>
                </div>
                {index < steps.length - 1 && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </div>
            ))}
          </div>
          <button className="ml-7 bg-purple-600 p-3 rounded-full">
            <img src={SettingsIcon} alt="Settings" className="h-6 w-6" />
          </button>
        </div>

        <div className="flex-grow flex flex-col items-center justify-center">
          <img src={LaunchImage} alt="Launch" className="mb-10 w-70" />
          <h1 className="text-4xl font-bold mb-4">Let's launch a new campaign.</h1>
          <p className="text-gray-600 text-2xl mb-4">Is there a name you would like to give it?</p>
          <div className="relative w-full max-w-md">
            <img src={CustomIcon} alt="Custom Icon" className="absolute left-3 top-4 h-6 w-6 text-gray-400 rounded-full bg-gray-300" />
            <input
              type="text"
              value={campaignName}
              onChange={(e) => setCampaignName(e.target.value)}
              className="w-full py-3 pl-10 left-5 pr-3 text-gray-700 bg-white border border-gray-300 rounded-full focus:outline-none focus:border-purple-500 "
              placeholder="My Campaign"
            />
          </div>
        </div>
      </div>
      <div className="bg-white py-5 px-7">
        <div className="max-w-8xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex flex-col items-start">
              <span className="text-gray-500 text-sm mb-2">Create Campaign Progress <span className="ml-3 text-gray-500 text-sm">75% Completed</span></span>
              <div className="relative w-full bg-gray-200 rounded-full overflow-hidden" style={{ width: '280px', height: '8px' }}>
                <div className="absolute top-0 left-0 h-full bg-purple-600" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>
          <div className="flex space-x-5">
            <button onClick={handlePrevious} className="px-7 py-3 text-purple-600 border border-purple-600 rounded-full hover:bg-purple-50">Previous</button>
            <button onClick={handleNext} className="px-7 py-3 text-white bg-purple-600 rounded-full hover:bg-purple-700">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCampaign;













