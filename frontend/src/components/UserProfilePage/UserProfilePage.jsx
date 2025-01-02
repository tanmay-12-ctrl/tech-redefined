import React from "react";

const UserProfile = () => {
  return (
    <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-indigo-600 text-white min-h-screen flex flex-col items-center py-12">
      <div className="bg-white text-black p-8 rounded-3xl shadow-2xl max-w-lg w-full text-center">
        {/* Profile Header */}
        <div className="relative">
          <img
            src="/background-image.jpg"
            alt="Background"
            className="w-full h-48 rounded-t-3xl object-cover shadow-lg"
          />
          <img
            src="/user-avatar.png"
            alt="User Avatar"
            className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-xl -mt-16"
          />
        </div>
        <h1 className="text-4xl font-extrabold mt-6 text-gray-800">Anna Smith</h1>
        <p className="text-gray-600 text-xl">UX/UI Designer</p>
        <p className="text-gray-500 text-sm mt-2">anna@example.com</p>

        {/* Stats */}
        <div className="flex justify-around bg-gray-50 p-6 rounded-3xl mt-8 shadow-xl">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-800">4,073</h3>
            <p className="text-gray-600 text-sm">Followers</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-800">322</h3>
            <p className="text-gray-600 text-sm">Following</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-800">200,543</h3>
            <p className="text-gray-600 text-sm">Attraction</p>
          </div>
        </div>

        {/* About Section */}
        <p className="text-gray-600 text-sm mt-6 px-4 leading-relaxed">
          Passionate UX/UI Designer with over 5 years of experience in designing user-centered solutions for web and mobile platforms. I believe in creating elegant, intuitive designs that enhance the user experience. Let's collaborate!
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-8 mt-8">
          <a
            href="#"
            className="text-gray-600 hover:text-purple-500 transition duration-300 transform hover:scale-110"
          >
            <i className="fab fa-twitter text-3xl"></i>
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-purple-500 transition duration-300 transform hover:scale-110"
          >
            <i className="fab fa-pinterest text-3xl"></i>
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-purple-500 transition duration-300 transform hover:scale-110"
          >
            <i className="fab fa-facebook text-3xl"></i>
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-purple-500 transition duration-300 transform hover:scale-110"
          >
            <i className="fab fa-dribbble text-3xl"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
