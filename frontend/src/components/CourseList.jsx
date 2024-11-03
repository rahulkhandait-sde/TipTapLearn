import React from 'react';
import { Link } from 'react-router-dom';

const CourseList = () => {
  // Sample data
  const courses = [
    {
      id: 1,
      title: "Introduction to Solidity",
      description: "Learn the basics of smart contract development using Solidity.",
      price: "0.05 ETH",
      instructor: "Alice",
    },
    {
      id: 2,
      title: "Decentralized Finance 101",
      description: "An introduction to DeFi and its applications in the blockchain space.",
      price: "0.03 ETH",
      instructor: "Bob",
    },
    {
      id: 3,
      title: "Building DApps",
      description: "Understand how to build decentralized applications using Ethereum.",
      price: "0.04 ETH",
      instructor: "Charlie",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-900 text-white text-center py-20">
        <h1 className="text-5xl font-bold mb-4">Course List</h1>
        <p className="text-xl mb-6">Explore our available courses</p>
      </header>

      <section className="py-12 px-6 bg-white text-gray-800">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Available Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {courses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-gray-400 py-8">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <div className="text-lg font-semibold text-white">
            TipTapLearn &copy; 2024
          </div>
        </div>
      </footer>
    </div>
  );
};

// CourseCard Component
const CourseCard = ({ course }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold mb-2">{course.title}</h3>
      <p className="text-gray-600 mb-4">{course.description}</p>
      <p className="font-bold">Instructor: {course.instructor}</p>
      <p className="text-lg font-bold">Price: {course.price}</p>
      <Link to={`/course/${course.id}`} className="mt-4 inline-block bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700">
        View Course
      </Link>
    </div>
  );
};

export default CourseList;
