import React from 'react';
import { SearchIcon } from "@heroicons/react/outline";

function Navbar({ toggleAuth }) {
    return (
        <nav className="flex justify-between items-center p-6 h-20">
            {/* Navbar Logo and Menu */}
            <div className="flex items-center w-full sm:w-[740px]">
                <h2 className="font-bold text-xl">zashion</h2>
                <ul className="hidden sm:flex flex-1 justify-between ml-8 text-[14px] text-gray-700 font-bold">
                    <li>Inspiration</li>
                    <li>Find work</li>
                    <li>Learn design</li>
                    <li>Go Pro</li>
                    <li>Marketplace</li>
                    <li>Hire designers</li>
                </ul>
            </div>
            {/* Navbar Icons and Button */}
            <div className="flex items-center justify-between w-full sm:w-[28%] text-gray-600">
                <SearchIcon className="h-4 sm:h-4" />
                <h3 className="hidden sm:block text-sm">Sign in/Sign up</h3>
                <button
                    className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                    onClick={toggleAuth} // Toggle function passed as prop
                >
                    Start a free project
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
