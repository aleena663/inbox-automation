import React, { useState } from 'react';

const CreateTagPopup = ({ onCancel, onConfirm }) => {
  const [newTag, setNewTag] = useState('');

  const handleInputChange = (e) => {
    setNewTag(e.target.value);
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6" style={{ width: '400px', height: '200px' }}>
        <h2 className="text-xl font-bold mb-4">Create Tag</h2>
        <input
          type="text"
          value={newTag}
          onChange={handleInputChange}
          className="w-full mb-4 p-2 border rounded-lg"
          placeholder="Enter tag name"
        />
        <div className="flex justify-end space-x-4">
          <button onClick={onCancel} className="bg-gray-200 px-4 py-2 rounded-lg">Cancel</button>
          <button
            onClick={() => {
              onConfirm(newTag);
              setNewTag('');
            }}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateTagPopup;
