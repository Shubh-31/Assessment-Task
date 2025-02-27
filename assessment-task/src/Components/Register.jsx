import React , {useState} from "react";
import { Link } from "react-router-dom";
import loginPageLogo from "../assets/loginPageLogo.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="flex h-screen items-center justify-center relative ">
      <div className="w-9/10 h-full flex backdrop-blur-lg bg-white/30 shadow-2xl rounded-2xl relative p-5">
        <div className="w-1/2 flex items-center justify-center backdrop-blue-lg rounded-l-2xl">
          <img src={loginPageLogo} alt="Login" className="w-3/4" />
        </div>

        <div className="w-1 bg-orange-500 relative mx-6">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-orange-500 rounded-full"></div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-orange-500 rounded-full"></div>
        </div>

        <div className="w-1/2 flex flex-col justify-start items-left ml-6">
          <div className="w-4/5 h-auto bg-white shadow-lg rounded-lg p-8 flex flex-col">
            <div className="form-container flex flex-col flex-grow">
              <h2 className="text-2xl font-bold text-black text-left">
                Create New Account
              </h2>
              <p className="text-gray-600 mb-6 font-medium text-left">
                Welcome to the Free Shops App Controller
              </p>

              <label className="text-gray-700 font-semibold text-left text-sm">
                Your Name
              </label>
              <input
                type="text"
                className="w-full p-3 mb-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />

              <label className="text-gray-700 font-semibold text-left text-sm">
                Email
              </label>
              <input
                type="email"
                className="w-full p-3 mb-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />

              <label className="text-gray-700 font-semibold text-left text-sm">
                Phone Number
              </label>
              <input
                type="text"
                className="w-full p-3 mb-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />

              <div className="form-container flex flex-col flex-grow mb-4">
                <label className="text-gray-700 font-semibold text-left text-sm">
                  Password
                </label>
                <div className="relative w-full">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full p-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>

                <label className="text-gray-700 font-semibold text-left text-sm mt-4">
                  Confirm Password
                </label>
                <div className="relative w-full">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    className="w-full p-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center">
              <button className="w-3/5 bg-blue-600 text-white py-3 rounded-lg mb-4 hover:bg-blue-700 font-semibold text-sm cursor-pointer">
                Create Account
              </button>
              <button className="w-full text-blue-600 py-3 rounded-lg bg-transparent hover:underline text-sm">
                <Link to="/">Already have an account?</Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute w-32 h-20 right-2 bg-orange-300 -z-10 rounded-full blur-xl -top-12"></div>
      <div className="absolute w-24 h-24 bg-orange-300 -z-10 rounded-full blur-xl -top-12 -right-6"></div>
    </div>
  );
};

export default Register;
