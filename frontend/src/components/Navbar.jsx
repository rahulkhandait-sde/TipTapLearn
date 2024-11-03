// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import WalletConnect from './WalletConnect'; // Import the WalletConnect component

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-900 text-white p-4 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="navbar-logo flex items-center">
          <img src={logo} alt="TipTapLearn Logo" className="h-12 w-12 mr-2" />
          <h2 className="text-xl text-white font-bold">TipTapLearn</h2>
        </Link>
        <ul className="flex space-x-6">
          <li><Link to="/" className="text-white hover:text-gray-300">Home</Link></li>
          <li><Link to="/lessons" className="text-white hover:text-gray-300">Lessons</Link></li>
          <li><Link to="/about" className="text-white hover:text-gray-300">About</Link></li>
          <li><Link to="/contact" className="text-white hover:text-gray-300">Contact</Link></li>
          <li><Link to="/signup" className="text-white hover:text-gray-300">Sign Up</Link></li>
        </ul>
        <WalletConnect /> {/* Include WalletConnect here */}
      </div>
    </nav>
  );
};

export default Navbar;