import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SettingsIcon from '../assets/settings.png';
import UploadIcon from '../assets/upload-icon.png';
import CSVIcon from '../assets/csv-icon.png';
import ThreeDotsIcon from '../assets/three-dots-icon.png';
import ViewDetailIcon from '../assets/view-detail-icon.png'; // Import the view detail icon

const ImportLeads = () => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false); // State for modal visibility
  const navigate = useNavigate();

  const handlePrevious = () => {
    navigate('/new-campaign');
  };

  const handleNext = () => {
    navigate('/sequences');
  };

  const handleFileChange = (event) => {
    setUploadedFile(event.target.files[0]);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const openModal = () => {
    setShowModal(true);
    setShowDropdown(false);
  };

  const closeModal = () => {
    setShowModal(false);
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
            <div className="flex items-center space-x-2">
              <div className="flex items-center bg-purple-600 text-white rounded-full px-4 py-2">
                <span className="mr-2">01</span>
                <span className="font-semibold">My Campaign</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex items-center bg-purple-600 text-white rounded-full px-4 py-2">
                <span className="mr-2">02</span>
                <span className="font-semibold">Import Leads</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex items-center bg-gray-200 text-gray-500 rounded-full px-4 py-2">
                <span className="mr-2">03</span>
                <span>Sequences</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex items-center bg-gray-200 text-gray-500 rounded-full px-4 py-2">
                <span className="mr-2">04</span>
                <span>Schedule</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex items-center bg-gray-200 text-gray-500 rounded-full px-4 py-2">
                <span className="mr-2">05</span>
                <span>Preferences</span>
              </div>
            </div>
          </div>
          <button className="ml-7 bg-purple-600 p-3 rounded-full">
            <img src={SettingsIcon} alt="Settings" className="h-6 w-6" />
          </button>
        </div>

        <div className="flex-grow flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold mb-4">Add some leads to kick off your process.</h1>
          <p className="text-gray-600 text-xl mb-4">Upload your CSV files to import leads</p>
          <div className="relative w-full max-w-md mb-8">
            <div className="flex flex-col items-center justify-center border-4 border-dashed border-gray-300 rounded-lg py-12 px-4">
              <img src={UploadIcon} alt="Upload Icon" className="h-12 w-12 mb-4" />
              <input
                type="file"
                className="opacity-0 absolute top-0 left-0 w-full h-full cursor-pointer"
                onChange={handleFileChange}
              />
              <p className="text-gray-600 mb-4">Choose a file or drag and drop it here</p>
              <button className="mt-4 bg-purple-600 text-white py-2 px-4 rounded-full">Browse File</button>
            </div>
          </div>

          {uploadedFile && (
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-4 mt-6 relative">
              <h2 className="text-xl font-semibold mb-2">Leads History</h2>
              <div className="flex items-center space-x-4 p-2 border rounded-lg">
                <img src={CSVIcon} alt="CSV Icon" className="h-9 w-9" />
                <div className="flex-grow">
                  <p className="text-gray-800">{uploadedFile.name}</p>
                  <p className="text-gray-600">Leads: 20</p>
                </div>
                <button className="text-gray-500 hover:text-gray-700" onClick={toggleDropdown}>
                  <img src={ThreeDotsIcon} alt="More Options" className="h-5 w-5" />
                </button>
              </div>
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-10">
                  <button className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center" onClick={openModal}>
                    <img src={ViewDetailIcon} alt="View Detail" className="h-5 w-5 mr-2" />
                    View Lead Detail
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="bg-white py-5 px-7">
        <div className="max-w-8xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex flex-col items-start">
              <span className="text-gray-500 text-sm mb-2">Create Campaign Progress <span className="ml-3 text-gray-500 text-sm">75% Completed</span>
              </span>
              <div className="relative w-full bg-gray-200 rounded-full overflow-hidden" style={{ width: '280px', height: '8px' }}>
                <div className="absolute top-0 left-0 h-full bg-purple-600" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>
          <div className="flex space-x-5">
            <button onClick={handlePrevious} className="px-7 py-3 text-purple-600 border border-purple-600 rounded-full hover:bg-purple-50">
              Previous
            </button>
            <button onClick={handleNext} className="px-7 py-3 text-white bg-purple-600 rounded-full hover:bg-purple-700">
              Next
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-20">
          <div className="bg-white rounded-lg overflow-hidden shadow-xl w-96">
            <div className="flex justify-between items-center bg-purple-600 text-white px-4 py-2">
              <h2 className="text-lg font-semibold">File Summary Report</h2>
              <button onClick={closeModal} className="text-white hover:text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="px-4 py-6">
              <div className="flex justify-between mb-2">
                <span>Uploaded Leads</span>
                <span>20</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Duplicate Leads</span>
                <span>20</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Existing Count</span>
                <span>20</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Blocked Email Count</span>
                <span>20</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Empty Email Count</span>
                <span>20</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Invalid Email Count</span>
                <span>20</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Unsubscribed Leads</span>
                <span>20</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Duplicate Leads in Multiple Campaigns</span>
                <span>20</span>
              </div>
              <div className="flex justify-between border-t mt-2 pt-2">
                <span>Total Leads</span>
                <span>20</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImportLeads;










