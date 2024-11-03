// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import SignUpPage from './components/SignUpPage';
import CourseManagement from './components/CourseManagement';
import Dashboard from './components/Dashboard';
import CourseList from './components/CourseList';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="mt-16"></div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/courses" element={<CourseManagement />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/courselist" element={<CourseList />} />
      </Routes>
    </Router>
  );
};

export default App;
