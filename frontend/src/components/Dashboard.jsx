import React from 'react';
import CourseList from './CourseList';

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-blue-900 text-white text-center py-4">
        <h1 className="text-3xl font-bold">Welcome to the Dashboard</h1>
        <p className="text-lg">Manage your courses and students here</p>
      </header>
      <main className="p-5 flex-grow">
        <CourseList />
      </main>
      <footer className="bg-gray-800 text-gray-400 py-4">
        <div className="container mx-auto text-center">
          TipTapLearn &copy; 2024
        </div>
      </footer>
    </div>
  );
}

export default Dashboard;
