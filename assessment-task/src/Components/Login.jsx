import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginPageLogo from "../assets/loginPageLogo.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const apiBaseUrl = window.location.origin.includes("localhost")
    ? `http://localhost:${window.location.port}`
    : window.location.origin;

    const handleLogin = async (e) => {
      e.preventDefault();
    
      const loginData = { email, password };
    
      fetch(`${apiBaseUrl}/api/v1/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      }).finally(() => {
        navigate("/welcome", { state: { email, password } });
      });
    };

  return (
    <div className="flex h-screen items-center justify-center relative  ">
      <div className="w-9/10 h-full flex backdrop-blur-lg bg-white/30 shadow-2xl rounded-2xl relative p-5">
        <div className="w-1/2 flex items-center justify-center backdrop-blue-lg rounded-l-2xl">
          <img src={loginPageLogo} alt="Login" className="w-1/2" />
        </div>

        <div className="w-1 bg-orange-500 relative mx-6">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-orange-500 rounded-full"></div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-orange-500 rounded-full"></div>
        </div>

        <div className="w-1/2 flex flex-col justify-start items-left ml-6 mt-6">
          <div className="w-4/5 h-auto bg-white shadow-lg rounded-lg p-8 flex flex-col mt-6">
            <form onSubmit={handleLogin} className="form-container flex flex-col flex-grow mt-6">
              <h2 className="text-2xl font-bold text-black text-left">Log in</h2>
              <p className="text-gray-600 mb-6 font-medium text-left">
                Welcome to the Free Shops App Controller
              </p>

              <label className="text-gray-700 font-semibold text-left text-sm">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 mb-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                required
              />

              <label className="text-gray-700 font-semibold text-left text-sm">Password</label>
              <div className="relative w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              <button className="w-3/5 text-gray-400 py-3 rounded-lg mb-4 font-semibold text-sm cursor-pointer hover:text-gray-600 hover:underline self-center">
                Forgot Password
              </button>

              <button
                type="submit"
                className="w-3/5 text-white bg-blue-400 py-3 rounded-lg mb-4 font-semibold text-lg cursor-pointer hover:bg-blue-500 self-center"
              >
                Log in
              </button>
            </form>

            <button className="w-3/5 text-blue-400 py-3 rounded-lg mb-4 font-semibold text-sm cursor-pointer hover:text-blue-600 hover:underline self-center">
              <Link to="/register">Create an account</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="absolute w-32 h-20 right-2 bg-orange-300 -z-10 rounded-full blur-xl -top-12"></div>
      <div className="absolute w-24 h-24 bg-orange-300 -z-10 rounded-full blur-xl top-12 -right-6"></div>
      <div className="absolute w-32 h-20 right-2 bg-orange-300 -z-10 rounded-full blur-xl -top-12"></div>
      <div className="absolute w-24 h-24 bg-orange-300 -z-10 rounded-full blur-xl bottom-24 left-40"></div>
    </div>
  );
};

export default Login;
