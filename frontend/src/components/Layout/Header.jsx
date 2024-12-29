import React, { useEffect } from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Avatar from '@mui/material/Avatar';

import { Link } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';

export default function Header() {
  const { authUser, checkAuth, logout } = useAuthStore();

  useEffect(() => {
    checkAuth(); // Ensure the user's auth status is checked on component mount
  }, []);

  const handleLogout = async () => {
    await logout(); // Log the user out
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__icon"
          src="/zashion.png"
          alt="Logo"
        />
      </Link>

      <div className="header__center">
        <input type="text" placeholder="Search" />
        <SearchIcon />
      </div>

      <div className="header__right">
      {authUser ? (
          <button
            type="button"
            onClick={handleLogout}
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button
              type="button"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Login/SignUp
            </button>
          </Link>
        )}
        <Link to="/chat">
        <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">chat</button>
        </Link>
        <Link to="/post/upload">
        <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Upload</button>
        </Link>
       </div>
    </div>
  );
}
