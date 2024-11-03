// src/components/CourseManagement.jsx
import React, { useState } from 'react';
import axios from 'axios';

const CourseManagement = () => {
  const [courseName, setCourseName] = useState('');
  const [price, setPrice] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const createCourse = async () => {
    if (!courseName || !price) {
      setError('Please fill in all fields.');
      return;
    }
    
    setError('');
    try {
      const response = await axios.post('http://localhost:3000/api/courses', {
        name: courseName,
        price: Number(price),
      });
      setMessage('Course created successfully!');
      setCourseName('');
      setPrice('');
    } catch (err) {
      setError('Error creating course. Please try again.');
      console.error(err);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg border border-gray-300">
      <h2 className="text-2xl font-semibold mb-4 text-center">Create a New Course</h2>
      {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4">{error}</div>}
      {message && <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded mb-4">{message}</div>}
      <input
        type="text"
        placeholder="Enter Course Name"
        value={courseName}
        onChange={(e) => setCourseName(e.target.value)}
        className="border rounded p-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="number"
        placeholder="Enter Course Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="border rounded p-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        onClick={createCourse}
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 w-full"
      >
        Create Course
      </button>
    </div>
  );
};

export default CourseManagement;
