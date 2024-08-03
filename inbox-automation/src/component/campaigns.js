import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Import custom icons as images
import RenameIcon from '../assets/rename.png';
import ClientInfoIcon from '../assets/update.png';
import AssignTagIcon from '../assets/tag.png';
import CloneIcon from '../assets/clone.png';
import ArchiveIcon from '../assets/archive.png';
import DeleteIcon from '../assets/delete.png';
import TagIcon from '../assets/tag.png'; // Assuming this is the tag icon
import AllStatusIcon from '../assets/all-status.png';
import ActiveIcon from '../assets/active.png';
import DraftIcon from '../assets/draft.png';
import ErrorIcon from '../assets/error.png';
import CompletedIcon from '../assets/completed.png';
import EverGreenIcon from '../assets/evergreen.png';
import PauseIcon from '../assets/pause.png';
import DropdownIcon from '../assets/dropdown.png'; // Assuming this is the dropdown icon
import Layout from '../layout';

// CircularProgress Component
const CircularProgress = ({ progress }) => (
  <div className="relative w-12 h-12">
    <svg className="w-full h-full" viewBox="0 0 100 100">
      <circle
        className="text-purple-100 stroke-current"
        strokeWidth="8"
        cx="50"
        cy="50"
        r="46"
        fill="transparent"
      ></circle>
      <circle
        className="text-purple-600 progress-ring stroke-current"
        strokeWidth="8"
        strokeLinecap="round"
        cx="50"
        cy="50"
        r="46"
        fill="transparent"
        strokeDasharray={`${progress * 2.89} 289`}
        strokeDashoffset="0"
        transform="rotate(-90 50 50)"
      ></circle>
    </svg>
    <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-purple-700">
      {progress}%
    </span>
  </div>
);

// FilterPopup Component
const FilterPopup = () => {
  return (
    <div className="absolute right-0 top-full mt-2 w-96 bg-white shadow-lg rounded-lg p-4 z-10">
      <div className="grid grid-cols-3 gap-4">
        <button className="flex items-center justify-center py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50">
          <img src={AllStatusIcon} alt="All Status" className="h-5 colour-black-700 w-5 mr-2" />
          All Status
        </button>
        <button className="flex items-center justify-center py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50">
          <img src={ActiveIcon} alt="Active" className="h-5 w-5 mr-2" />
          Active
        </button>
        <button className="flex items-center justify-center py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50">
          <img src={DraftIcon} alt="Draft" className="h-5 w-5 mr-2" />
          Draft
        </button>
        <button className="flex items-center justify-center py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50">
          <img src={PauseIcon} alt="Pause" className="h-5 w-5 mr-2" />
          Pause
        </button>
        <button className="flex items-center justify-center py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50">
          <img src={ErrorIcon} alt="Error" className="h-5 w-5 mr-2" />
          Error
        </button>
        <button className="flex items-center justify-center py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50">
          <img src={CompletedIcon} alt="Completed" className="h-5 w-5 mr-2" />
          Completed
        </button>
        <button className="flex items-center justify-center py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 col-span-3">
          <img src={EverGreenIcon} alt="Ever Green" className="h-5 w-5 mr-2" />
          Ever Green
        </button>
        <button className="mt-4 flex items-center justify-center w-full py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 col-span-3">
          Apply
        </button>
      </div>
    </div>
  );
};

// SortPopup Component
const SortPopup = () => {
  return (
    <div className="absolute right-0 top-full mt-2 w-64 bg-white shadow-lg rounded-lg p-4 z-10">
      <div className="grid grid-cols-2 gap-4">
        <button className="flex items-center justify-center py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50">
          Newest First
        </button>
        <button className="flex items-center justify-center py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50">
          Oldest First
        </button>
        <button className="flex items-center justify-center py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50">
          A-Z (Name)
        </button>
        <button className="flex items-center justify-center py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50">
          Z-A (Name)
        </button>
        <button className="mt-4 flex items-center justify-center w-full py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700">
          Apply
        </button>
      </div>
    </div>
  );
};

// DeleteConfirmationPopup Component
const DeleteConfirmationPopup = ({ onCancel, onConfirm }) => (
  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
    <div className="bg-white rounded-lg p-6 w-80">
      <h2 className="text-xl font-bold mb-4">Delete</h2>
      <p className="mb-4">Are you sure you want to delete?</p>
      <div className="flex justify-end space-x-4">
        <button onClick={onCancel} className="bg-gray-200 px-4 py-2 rounded-lg">Cancel</button>
        <button onClick={onConfirm} className="bg-red-500 text-white px-4 py-2 rounded-lg">Delete</button>
      </div>
    </div>
  </div>
);

// RenameCampaignPopup Component
const RenameCampaignPopup = ({ currentName, onCancel, onConfirm }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
    <div className="bg-white rounded-lg p-8 shadow-lg" style={{
      width: '618px',
      height: '277px',
      padding: '32px',
      borderRadius: '32px 32px 32px 32px',
      boxShadow: '1px 10px 25px 0px rgba(3, 2, 41, 0.07)'
    }}>
      <h2 className="text-xl font-bold mb-4 flex items-center">
        Rename Campaign
      </h2>
      <div className="relative mb-8">
        <input
          type="text"
          defaultValue={currentName}
          className="w-full p-3 border rounded-full pl-12"
          style={{ height: '52px' }}
        />
        <div className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full" style={{
          width: '36px',
          height: '36px',
          padding: '6.47px 5.76px 7.03px 7.74px',
          borderRadius: '100px 100px 100px 100px',
          backgroundColor: '#F2F2F7'
        }}>
          <img
            src={RenameIcon}
            alt="Icon"
            className="h-5 w-5"
          />
        </div>
      </div>
      <div className="flex justify-between gap-10">
        <button onClick={onCancel} className="border px-6 py-3 rounded-full text-gray-700" style={{
          width: '259px',
          height: '52px',
          borderRadius: '60px'
        }}>Cancel</button>
        <button onClick={onConfirm} className="text-white px-6 py-3 rounded-full" style={{
          backgroundColor: 'var(--Blue-500, #684FFF)',
          width: '259px',
          height: '52px',
          borderRadius: '60px'
        }}>Rename</button>
      </div>
    </div>
  </div>
);

// AssignTagPopup Component
const AssignTagPopup = ({ onCancel, onConfirm }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const [isCreateTagPopupOpen, setCreateTagPopupOpen] = useState(false); // Add state for CreateTagPopup

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  const handleTagSelect = (tag) => {
    setSelectedTags([...selectedTags, tag]);
    setDropdownOpen(false);
  };

  const handleTagRemove = (tag) => {
    setSelectedTags(selectedTags.filter((t) => t !== tag));
  };

  const tags = [
    { label: 'Warm Up - Ramp Up', color: 'bg-red-200' },
    { label: 'Nouvi', color: 'bg-purple-200' },
    { label: 'Warm up - Attivo', color: 'bg-green-200' },
    { label: 'Warm', color: 'bg-yellow-200' },
    { label: 'Warm-up', color: 'bg-blue-200' }
  ];

  return (
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6" style={{ width: '500px', height: '250px' }}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Assign Tag</h2>
          <button onClick={() => setCreateTagPopupOpen(true)} className="text-purple-600 hover:text-purple-800">Create Tag +</button> {/* Open CreateTagPopup */}
        </div>
        <div className="relative mb-4">
          <div
            className="w-full p-2 border rounded-lg flex items-center cursor-pointer"
            onClick={toggleDropdown}
          >
            <span className="flex-grow">Select Tag or Create Tag</span>
            <svg
              className={`w-4 h-4 bg-purple-500  transform transition-transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
              style={{
              borderRadius: '1oopx',
              }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          {isDropdownOpen && (
            <div className="absolute mt-2 w-full bg-white border rounded-lg shadow-lg z-10">
              <div className="grid grid-cols-2 gap-2 p-2">
                {tags.map((tag) => (
                  <button
                    key={tag.label}
                    className={`flex items-center justify-between p-2 bg-gray-100 rounded-full hover:bg-gray-200`}
                    onClick={() => handleTagSelect(tag)}
                  >
                    <img src={TagIcon} alt="tag" className={`h-4 w-4 mr-2 ${tag.color}`} />
                    {tag.label}
                    <span className="text-purple-600 text-xl">+</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {selectedTags.map((tag) => (
              <div key={tag.label} className={`flex items-center px-2 py-1 rounded-full ${tag.color}`}>
                <span className="mr-2">{tag.label}</span>
                <button onClick={() => handleTagRemove(tag)} className="text-red-600">×</button>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-end space-x-4">
          <button onClick={onCancel} className="bg-gray-200 px-12 py-2 rounded-full">Cancel</button>
          <button onClick={onConfirm} className="bg-purple-600 text-white px-12 py-2 rounded-full">Save</button>
        </div>
      </div>
      {isCreateTagPopupOpen && <CreateTagPopup onCancel={() => setCreateTagPopupOpen(false)} onConfirm={() => setCreateTagPopupOpen(false)} />} {/* Render CreateTagPopup */}
    </div>
  );
};

// AddClientPopup Component
const AddClientPopup = ({ onCancel, onConfirm }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  const handleClientSelect = (client) => {
    setSelectedClient(client);
    setDropdownOpen(false);
  };

  const clients = [
    'Jeremey-Beatrice27@yahoo.com',
    'Jeremey-Mustafa.Torphy34@yahoo.com',
    'Layne_Osinski@gmail.com',
    'Shaniya_Mraz97@hotmail.com',
    'Myrtie_Harris4@gmail.com',
    'Murphy_Ullrich37@hotmail.com',
    'Benny_Haley@hotmail.com',
    'Rosa_Fadel51@gmail.com',
    'Donald_Bruen72@yahoo.com'
  ];

  return (
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6" style={{ width: '500px', height: '300px' }}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Add Client</h2>
        </div>
        <div className="relative mb-4">
          <div
            className="w-full p-2 border rounded-lg flex items-center cursor-pointer "
            onClick={toggleDropdown}
          >
            <span className="flex-grow">{selectedClient || 'Please Select Client'}</span>
            <svg
              className={`w-4 h-4 transform transition-transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          {isDropdownOpen && (
            <div className="absolute mt-2 w-full bg-white border rounded-lg shadow-lg z-10 bg-purple-600">
              <div className="p-2">
                {clients.map((client) => (
                  <div
                    key={client}
                    className={`p-2 cursor-pointer hover:bg-gray-100 ${selectedClient === client ? 'bg-purple-600 text-white' : ''}`}
                    onClick={() => handleClientSelect(client)}
                  >
                    {client}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="mb-4">
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-purple-600" />
            <span className="ml-2">Prevent leads from being contacted using the client's global block list.</span>
          </label>
        </div>
        <div className="flex justify-end space-x-4">
          <button onClick={onCancel} className="bg-gray-200 px-12 py-2 rounded-full">Cancel</button>
          <button onClick={onConfirm} className="bg-purple-600 text-white px-12 py-2 rounded-full">Save</button>
        </div>
      </div>
    </div>
  );
};

// CreateTagPopup Component
const CreateTagPopup = ({ onCancel, onConfirm }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
    <div className="bg-white rounded p-6 shadow-lg" style={{ width: '450px', height: '220px', padding: '32px', borderRadius: '16px' }}>
      <h2 className="text-xl font-bold mb-4">Create Tag</h2>
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Create Campaign Tag"
          className="w-full p-2 border rounded-lg pl-12"
        />
        <div className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full">
          <img
            src={TagIcon}
            alt="Icon"
            className="h-5 w-5"
          />
        </div>
      </div>
      <div className="flex justify-end space-x-4">
        <button onClick={onCancel} className="border px-6 py-2 rounded-lg text-gray-700">Cancel</button>
        <button onClick={onConfirm} className="bg-purple-600 text-white px-6 py-2 rounded-lg">Create</button>
      </div>
    </div>
  </div>
);

// ActionPopup Component
const ActionPopup = ({ onRenameClick, onUpdateClientClick, onAssignTagClick, onDeleteClick }) => {
  return (
    <div className="absolute right-0 mt-2 w-60 bg-white shadow-lg rounded-lg p-4 z-10">
      <button className="flex items-center justify-start w-full py-2 text-gray-700 hover:bg-gray-50 rounded-full" onClick={onRenameClick}>
        <img src={RenameIcon} alt="Rename" className="h-5 w-5 mr-1" />
        Rename Campaign
      </button>
      <button className="flex items-center justify-start w-full py-2 text-gray-700 hover:bg-gray-50 rounded-full" onClick={onUpdateClientClick}>
        <img src={ClientInfoIcon} alt="Update" className="h-5 w-5 " />
        Update Client Information
      </button>
      <button className="flex items-center justify-start w-full py-2 text-gray-700 hover:bg-gray-50 rounded-full" onClick={onAssignTagClick}>
        <img src={AssignTagIcon} alt="Tag" className="h-5 w-5 mr-2" />
        Assign Tag
      </button>
      <button className="flex items-center justify-start w-full py-2 text-gray-700 hover:bg-gray-50 rounded-full">
        <img src={CloneIcon} alt="Clone" className="h-5 w-5 mr-2" />
        Clone Campaign
      </button>
      <button className="flex items-center justify-start w-full py-2 text-gray-700 hover:bg-gray-50 rounded-full">
        <img src={ArchiveIcon} alt="Archive" className="h-5 w-5 mr-2" />
        Archive Campaign
      </button>
      <button className="flex items-center justify-start w-full py-2 text-red-600 hover:bg-gray-50 rounded-full" onClick={onDeleteClick}>
        <img src={DeleteIcon} alt="Delete" className="h-5 w-5 mr-2" />
        Delete Campaign
      </button>
    </div>
  );
};

// CampaignRow Component
const CampaignRow = ({ campaign, index, onDelete, onRename, onUpdateClient, onAssignTag }) => {
  const [isActionPopupOpen, setActionPopupOpen] = useState(false);

  const getStatusStyle = (status) => {
    const styles = {
      'Active': 'bg-blue-500 text-white',
      'Completed': 'bg-green-500 text-white',
      'Pause': 'bg-orange-400 text-white',
      'Draft': 'bg-gray-800 text-white',
      'Error': 'bg-red-500 text-white'
    };
    return styles[status] || 'bg-gray-500 text-white';
  };

  return (
    <div className="relative flex items-center py-4 px-6 bg-white shadow-sm rounded-lg mb-3">
      <div className="w-8 text-center text-gray-500 font-medium">{index}</div>
      <div className="flex-grow">
        <div className="text-sm font-medium text-gray-900">{campaign.name}</div>
        <div className="text-xs text-gray-400">{campaign.createdAt}</div>
      </div>
      <div className="w-28 flex justify-center">
        <CircularProgress progress={campaign.progress} />
      </div>
      <div className="w-28 text-center text-sm">{campaign.outcomes}</div>
      <div className="w-24 text-center text-sm">{campaign.sent}</div>
      <div className="w-24 text-center text-sm text-blue-600">{campaign.clicks}</div>
      <div className="w-28 text-center text-sm">{campaign.replied}</div>
      <div className="w-28 text-center">
        <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusStyle(campaign.status)}`}>
          {campaign.status}
        </span>
      </div>
      <div className="relative w-28 flex justify-end space-x-2">
        <button className="text-gray-400 hover:text-gray-600" onClick={() => setActionPopupOpen(!isActionPopupOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </button>
        {isActionPopupOpen && (
          <ActionPopup
            onRenameClick={() => {
              setActionPopupOpen(false);
              onRename(campaign.name);
            }}
            onUpdateClientClick={() => {
              setActionPopupOpen(false);
              onUpdateClient(campaign.name);
            }}
            onAssignTagClick={() => {
              setActionPopupOpen(false);
              onAssignTag(campaign.name);
            }}
            onDeleteClick={() => {
              setActionPopupOpen(false);
              onDelete(campaign.name);
            }}
          />
        )}
      </div>
    </div>
  );
};

// CampaignDashboard Component
const CampaignDashboard = () => {
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [isSortOpen, setSortOpen] = useState(false);
  const [campaigns] = useState([
    { name: '2nd Campaign HC Leads No Response', createdAt: 'Created At: 08 Nov, 10:45 Am', progress: 25, outcomes: '-', sent: 200, clicks: 142, replied: '157(0.5%)', status: 'Active' },
    { name: '2nd Campaign HC Leads No Response', createdAt: 'Created At: 08 Nov, 10:45 Am', progress: 100, outcomes: 'NA', sent: 200, clicks: 142, replied: '157(0.5%)', status: 'Completed' },
    { name: '2nd Campaign HC Leads No Response', createdAt: 'Created At: 08 Nov, 10:45 Am', progress: 25, outcomes: 'NA', sent: 200, clicks: 142, replied: '157(0.5%)', status: 'Pause' },
    { name: '2nd Campaign HC Leads No Response', createdAt: 'Created At: 08 Nov, 10:45 Am', progress: 0, outcomes: '-', sent: '-', clicks: '-', replied: '-', status: 'Draft' },
    { name: '2nd Campaign HC Leads No Response', createdAt: 'Created At: 08 Nov, 10:45 Am', progress: 25, outcomes: 'NA', sent: 200, clicks: 142, replied: '157(0.5%)', status: 'Error' },
    { name: '2nd Campaign HC Leads No Response', createdAt: 'Created At: 08 Nov, 10:45 Am', progress: 25, outcomes: '-', sent: 200, clicks: 142, replied: '157(0.5%)', status: 'Active' },
    { name: '2nd Campaign HC Leads No Response', createdAt: 'Created At: 08 Nov, 10:45 Am', progress: 25, outcomes: 'NA', sent: 200, clicks: 142, replied: '157(0.5%)', status: 'Pause' },
    { name: '2nd Campaign HC Leads No Response', createdAt: 'Created At: 08 Nov, 10:45 Am', progress: 25, outcomes: '-', sent: 200, clicks: 142, replied: '157(0.5%)', status: 'Active' },
  ]);

  const [selectedCampaignName, setSelectedCampaignName] = useState('');
  const [isRenamePopupOpen, setRenamePopupOpen] = useState(false);
  const [isDeletePopupOpen, setDeletePopupOpen] = useState(false);
  const [isUpdateClientPopupOpen, setUpdateClientPopupOpen] = useState(false);
  const [isAssignTagPopupOpen, setAssignTagPopupOpen] = useState(false);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleRename = (campaignName) => {
    setSelectedCampaignName(campaignName);
    setRenamePopupOpen(true);
  };

  const handleDelete = (campaignName) => {
    setSelectedCampaignName(campaignName);
    setDeletePopupOpen(true);
  };

  const handleUpdateClient = (campaignName) => {
    setSelectedCampaignName(campaignName);
    setUpdateClientPopupOpen(true);
  };

  const handleAssignTag = (campaignName) => {
    setSelectedCampaignName(campaignName);
    setAssignTagPopupOpen(true);
  };

  const handleAddNewClick = () => {
    navigate('/new-campaign'); // Navigate to the new campaign page
  };

  return (
    <Layout> 
    
      
      <div className="flex-1 p-6 bg-gray-100 min-h-screen">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Campaigns</h2>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Campaigns"
                className="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
            </div>
            <button onClick={handleAddNewClick} className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
              + Add New
            </button>
          </div>
        </div>
        
        <div className="relative flex justify-end space-x-2 mb-6 rounded-lg">
          <button
            className="px-4 py-2 text-sm bg-white border border-gray-300 rounded-full hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent flex items-center"
            onClick={() => setFilterOpen(!isFilterOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            Filter
            <img src={DropdownIcon} alt="Dropdown" className="h-4 w-4 ml-2" />
          </button>
          <button
            className="px-4 py-2 text-sm bg-white border border-gray-300 rounded-full hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent flex items-center"
            onClick={() => setSortOpen(!isSortOpen)}
          >
            Newest First
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {isFilterOpen && <FilterPopup />}
          {isSortOpen && <SortPopup />}
        </div>
        
        <div className="bg-white shadow rounded-lg overflow-hidden mb-6">
          <div className="flex text-xs font-medium text-gray-500 bg-gray-50 py-4 px-6">
            <div className="w-8"></div>
            <div className="flex-grow">NAME</div>
            <div className="w-28 text-center">PROGRESS</div>
            <div className="w-28 text-center">OUTCOMES</div>
            <div className="w-24 text-center">SENT</div>
            <div className="w-24 text-center">CLICKS</div>
            <div className="w-28 text-center">REPLIED</div>
            <div className="w-28 text-center">STATUS</div>
            <div className="w-28 text-center">ACTIONS</div>
          </div>
        </div>
        
        <div className="space-y-3">
          {campaigns.map((campaign, index) => (
            <CampaignRow
              key={index}
              campaign={campaign}
              index={index + 1}
              onRename={handleRename}
              onDelete={handleDelete}
              onUpdateClient={handleUpdateClient}
              onAssignTag={handleAssignTag}
            />
          ))}
        </div>

        {isRenamePopupOpen && (
          <RenameCampaignPopup
            currentName={selectedCampaignName}
            onCancel={() => setRenamePopupOpen(false)}
            onConfirm={() => {
              // Handle rename logic here
              setRenamePopupOpen(false);
            }}
          />
        )}

        {isDeletePopupOpen && (
          <DeleteConfirmationPopup
            onCancel={() => setDeletePopupOpen(false)}
            onConfirm={() => {
              // Handle delete logic here
              setDeletePopupOpen(false);
            }}
          />
        )}

        {isUpdateClientPopupOpen && (
          <AddClientPopup
            onCancel={() => setUpdateClientPopupOpen(false)}
            onConfirm={() => {
              // Handle add client logic here
              setUpdateClientPopupOpen(false);
            }}
          />
        )}

        {isAssignTagPopupOpen && (
          <AssignTagPopup
            onCancel={() => setAssignTagPopupOpen(false)}
            onConfirm={() => {
              // Handle assign tag logic here
              setAssignTagPopupOpen(false);
            }}
          />
        )}
        </div>
      </Layout>
  
  );
};
  
export default CampaignDashboard;




































