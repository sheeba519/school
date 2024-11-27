import React, { useState } from 'react';

const AdminNotification = () => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const notification = { title, message };
    
    try {
      const response = await fetch('http://localhost:5000/notifications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(notification),
      });

      if (response.ok) {
        alert('Notification added successfully!');
        setTitle('');
        setMessage('');
      } else {
        alert('Failed to add notification.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error adding notification.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white shadow-md rounded-md space-y-4">
      <h2 className="text-2xl font-bold mb-4">Add Notification</h2>
      <div>
        <label className="block text-sm font-medium mb-1">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border-gray-300 rounded-md p-2"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Message</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full border-gray-300 rounded-md p-2"
          rows="4"
          required
        ></textarea>
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
        Submit
      </button>
    </form>
  );
};

export default AdminNotification;