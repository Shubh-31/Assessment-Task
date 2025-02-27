import React from "react";
import loginPageLogo from "../assets/loginPageLogo.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="flex w-3/4 h-5/6 bg-white shadow-lg rounded-lg overflow-hidden backdrop-blur-md bg-white/30">
        <div className="w-1/2 flex items-center justify-center bg-gray-200">
          <img src={loginPageLogo} alt="Login" className="w-3/4" />
        </div>

        <div className="w-1 bg-rust relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-rust rounded-full"></div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-rust rounded-full"></div>
        </div>

        <div className="w-1/2 flex flex-col justify-center p-10 bg-white">
          <h2 className="text-2xl font-bold text-left text-black">Log in</h2>
          <p className="text-gray-600 text-left mb-6 font-medium">
            Welcome to the Free Shops App Controller
          </p>

          <label className="text-left text-gray-700 font-semibold">
            User Name
          </label>
          <input
            type="text"
            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <label className="text-left text-gray-700 font-semibold">
            Password
          </label>
          <input
            type="password"
            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <p className="text-center text-gray-600 cursor-pointer mb-4 font-medium">
            Forgot Password
          </p>

          <button className="w-full bg-blue-600 text-white py-3 rounded-md mb-3 hover:bg-blue-700 mb-4">
            Log in
          </button>
          <button className="w-full text-blue-600 py-3 rounded-md bg-transparent mt-16 cursor-pointer hover:underline">
            <Link to="/register">Create New Account</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
