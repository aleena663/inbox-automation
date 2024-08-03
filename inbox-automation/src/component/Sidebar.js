// src/components/Sidebar.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import arrowIcon from '../assets/arrow.png';
import campaignsIcon from '../assets/campaigns.png';
import accountsIcon from '../assets/accounts.png';
import inboxIcon from '../assets/master-inbox.png';
import clientAccessIcon from '../assets/clientAccess.png';
import integrationIcon from '../assets/integration.png';
import leadManagementIcon from '../assets/lead-management.png';
import analyticsIcon from '../assets/global-analytics.png';
import supportIcon from '../assets/help-support.png';
import settingsIcon from '../assets/settings.png';

 
const Sidebar = ({toggleSidebar, isOpen}) => {
  // const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();
 
  // const toggleSidebar = () => {
  //   setIsOpen(!isOpen);
  // };
 
  const menuItems = [
    
    { name: 'Campaigns', icon: campaignsIcon, path: '/campaigns' },
    { name: 'Accounts', icon: accountsIcon, path: '/accounts' },
    { name: 'Master Inbox', icon: inboxIcon, path: '/master-inbox' },
    { name: 'Client Access', icon: clientAccessIcon, path: '/client-access' },
    { name: 'Integration', icon: integrationIcon, path: '/integration' },
    { name: 'Lead Management', icon: leadManagementIcon, path: '/lead-management' },
    { name: 'Global Analytics', icon: analyticsIcon, path: '/global-analytics' },
  ];
 
  const bottomItems = [
    { name: 'Help & Support', icon: supportIcon, path: '/help-support' },
    { name: 'Setting', icon: settingsIcon, path: '/settings' },
  ];
 
  return (
    <div
      className={`fixed top-0 left-0 h-full transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'} flex flex-col`}
      style={{
        background: 'linear-gradient(107.77deg, #684FFF 15.95%, #B871FE 100%)'
      }}
    >
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-8 h-8" />
          {isOpen && <span className="text-white text-xl font-semibold ml-2">Primary Inbox</span>}
        </div>
        <button
          onClick={toggleSidebar}
          className={`w-8 h-8 flex items-center justify-center bg-white/10 rounded-full transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        >
          <img src={arrowIcon} alt="Toggle" className="w-4 h-4" />
        </button>
      </div>
      <div className="flex-grow overflow-y-auto mt-6">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`flex items-center ${isOpen ? 'px-6' : 'justify-center'} py-4 text-white hover:bg-white/10 transition-colors duration-200 ${location.pathname === item.path ? 'bg-white text-[#684FFF]' : ''}`}
          >
            <img src={item.icon} alt={item.name} className={`w-6 h-6 ${location.pathname === item.path ? 'filter invert' : ''}`} />
            {isOpen && <span className={`ml-4 ${location.pathname === item.path ? 'font-semibold' : ''}`}>{item.name}</span>}
          </Link>
        ))}
      </div>
      <div className="mt-auto">
        {bottomItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`flex items-center ${isOpen ? 'px-6' : 'justify-center'} py-4 text-white hover:bg-white/10 transition-colors duration-200`}
          >
            <img src={item.icon} alt={item.name} className="w-6 h-6" />
            {isOpen && <span className="ml-4">{item.name}</span>}
          </Link>
        ))}
      </div>
    </div>
  );
};
 
export default Sidebar;



