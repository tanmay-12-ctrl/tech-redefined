import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';
import './Header.css';

export default function Navbar() {
  const { authUser, checkAuth, logout } = useAuthStore();

  useEffect(() => {
    checkAuth(); // Ensure the user's auth status is checked on component mount
  }, []);

  const handleLogout = async () => {
    await logout(); // Log the user out
  };

  return (
    <nav className="absolute z-10 top-0 left-0 right-0 bg-[#0F0D18] text-white py-4 px-6 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <Link to="/">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-18 w-20 inline-block"
            />
          </Link>
          <ul className="hidden md:flex space-x-6">
            <li className="hover:text-purple-300">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-purple-300">
              <Link to="/chat">Chat</Link>
            </li>
            <li className="hover:text-purple-300">
              <Link to="/trends">Trends</Link>
            </li>
            <li className="hover:text-purple-300">
              <Link to="/collaboration">Collaboration</Link>
            </li>
          </ul>
        </div>

        {/* Authentication and Actions */}
        <div className="space-x-4">
          {authUser ? (
            <button
              type="button"
              onClick={handleLogout}
              className="hidden md:inline-block px-4 py-2 border border-purple-500 text-purple-500 rounded hover:bg-purple-500 hover:text-white transition"
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button
                type="button"
                className="hidden md:inline-block px-4 py-2 border border-purple-500 text-purple-500 rounded hover:bg-purple-500 hover:text-white transition"
              >
                Login/SignUp
              </button>
            </Link>
          )}
          <Link to="/chat">
            {/* <button
              type="button"
              className="hidden md:inline-block px-4 py-2 border border-purple-500 text-purple-500 rounded hover:bg-purple-500 hover:text-white transition"
            >
              Chat
            </button> */}
          </Link>
          <Link to="/post/upload">
            <button
              type="button"
              className="hidden md:inline-block px-4 py-2 border border-purple-500 text-purple-500 rounded hover:bg-purple-500 hover:text-white transition"
            >
              Upload
            </button>
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden focus:outline-none text-purple-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}