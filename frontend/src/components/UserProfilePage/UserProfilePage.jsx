import React from "react";

const UserProfile = () => {
  return (
    <div className="bg-[#0F0D18] text-white min-h-screen flex flex-col items-center py-10">
      <div className="bg-[#FFFFFF] text-black p-6 rounded-lg shadow-lg max-w-lg w-full text-center">
        {/* Profile Header */}
        <div className="relative">
          <img
            src="/background-image.jpg"
            alt="Background"
            className="w-full h-40 rounded-t-lg object-cover"
          />
          <img
            src="/user-avatar.png"
            alt="User Avatar"
            className="w-24 h-24 rounded-full mx-auto border-4 border-white -mt-12"
          />
        </div>
        <h1 className="text-2xl font-bold mt-4">Anna Smith</h1>
        <p className="text-gray-600">UX/UI Designer</p>
        <p className="text-gray-500 text-sm">anna@example.com</p>

        {/* Stats */}
        <div className="flex justify-around bg-gray-100 p-4 rounded-lg mt-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold">4,073</h3>
            <p className="text-gray-500 text-sm">Followers</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold">322</h3>
            <p className="text-gray-500 text-sm">Following</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold">200,543</h3>
            <p className="text-gray-500 text-sm">Attraction</p>
          </div>
        </div>

        {/* About Section */}
        <p className="text-gray-600 text-sm mt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat
          volutpat. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla.
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-4 mt-6">
          <a href="#" className="text-gray-600 hover:text-purple-500 transition">
            <i className="fab fa-twitter text-xl"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-purple-500 transition">
            <i className="fab fa-pinterest text-xl"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-purple-500 transition">
            <i className="fab fa-facebook text-xl"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-purple-500 transition">
            <i className="fab fa-dribbble text-xl"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
