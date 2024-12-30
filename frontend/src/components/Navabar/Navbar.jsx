import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#0F0D18] text-white py-4 px-6 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="text-xl font-bold text-purple-400">
            <img
              src="/logo.svg"
              alt="Brainwave Logo"
              className="h-8 inline-block"
            />
            ZASHION
          </div>
          <ul className="hidden md:flex space-x-6">
            <li className="hover:text-purple-300">
              <a href="#features">Features</a>
            </li>
            <li className="hover:text-purple-300">
              <a href="#pricing">Pricing</a>
            </li>
            <li className="hover:text-purple-300">
              <a href="#how-to-use">How to Use</a>
            </li>
            <li className="hover:text-purple-300">
              <a href="#roadmap">Roadmap</a>
            </li>
          </ul>
        </div>
        <div className="space-x-4">
          <a
            href="#sign-in"
            className="hidden md:inline-block px-4 py-2 border border-purple-500 text-purple-500 rounded hover:bg-purple-500 hover:text-white transition"
          >
            Sign In
          </a>
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
};

export default Navbar;
