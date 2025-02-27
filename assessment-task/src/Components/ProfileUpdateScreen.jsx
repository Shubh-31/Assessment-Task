import React from "react";
import { FaCamera } from "react-icons/fa";

const ProfileUpdateScreen = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-400 to-orange-600 w-full">
      <div className="w-4/5 bg-white/20 backdrop-blur-lg rounded-2xl p-10 flex justify-center relative">
        <div className="w-3/5 bg-white shadow-lg rounded-xl p-8 relative">
        <button className="absolute top-4 right-4 text-gray-600 font-medium hover:underline text-sm cursor-pointer">
      SKIP
    </button>
          <div className="flex justify-center mb-6">
         
            <div className="w-20 h-20 bg-gray-400 rounded-full flex items-center justify-center">
              <FaCamera className="text-white text-3xl" />
            </div>
          </div>

          <h4 className="text-sm font-light text-blue-400 text-center mb-4 cursor-pointer">
            Upload Profile Picture
          </h4>

          <form className="flex flex-col">
            <label className="text-gray-700 font-semibold text-left mb-1">
              Your Name
            </label>
            <input
              type="text"
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 "
            />

            <label className="text-gray-700 font-semibold text-left mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <label className="text-gray-700 font-semibold text-left mb-1">
              Phone Number
            </label>
            <input
              type="text"
              maxLength="12"
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <label className="text-gray-700 font-semibold text-left mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="flex flex-col justify-center items-center">
              <button className="bg-none border-none text-gray-400 font-semibold mb-6 cursor-pointer">
                Change Password
              </button>
              <button className="bg-blue-400 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-500 transition-all duration-300 cursor-pointer w-2/5">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdateScreen;
