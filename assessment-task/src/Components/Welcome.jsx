import React from "react";
import loginPageLogo from "../assets/loginPageLogo.png";
import { Link } from "react-router-dom";
import { useLocation,useNavigate } from "react-router-dom";

const Welcome = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { fullName, firstName, lastName, phone, email, password } = location.state || {};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-400 to-orange-600 w-full">
      <div className="w-4/5 bg-white/20 backdrop-blur-lg rounded-2xl p-10 flex justify-center">
        <div className="w-3/5 bg-white shadow-lg rounded-xl p-8 text-center">
          <div className="flex justify-center mb-4">
            <img src={loginPageLogo} alt="Logo" className="w-20" />
          </div>

          <h2 className="text-2xl font-bold text-black">Welcome</h2>
          <h3 className="text-xl font-bold text-orange-500 mb-4">
            to the Free Shops Admin Panel
          </h3>

          <p className="text-gray-600 mb-6 text-sm leading-relaxed px-4">
            Manage and monitor all aspects of your app seamlessly from one
            place. Use the tools below to get started.
          </p>

          <button
            className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 cursor-pointer text-sm"
            onClick={() => navigate("/profileUpdate", { state: { email, password,fullName,firstName,lastName,phone } })}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
