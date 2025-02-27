import React, { useState } from "react";
import { FaCamera } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const ProfileUpdateScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MTYyM2U4ZjcyNmU3MTczYmE0MjQ1MSIsImlhdCI6MTcyOTUwNDI0MiwiZXhwIjoxNzYxMDQwMjQyfQ.u6dELPLGwiGa5SHmhOdREAciXsPkMl-vXu1GDji9pqw";
      const response = await fetch(`${window.location.origin}/api/v1/admin/update`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to update profile");
      toast.success("Profile updated successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-400 to-orange-600 w-full">
      <div className="w-4/5 bg-white/20 backdrop-blur-lg rounded-2xl p-10 flex justify-center relative">
        <div className="w-3/5 bg-white shadow-lg rounded-xl p-8 relative">
          <button className="absolute top-4 right-4 text-gray-600 font-medium hover:underline text-sm cursor-pointer">
            <Link to = '/profile'> SKIP</Link>
            
          </button>
          <div className="flex justify-center mb-6">
            <label htmlFor="profile-upload" className="cursor-pointer">
              {profileImage ? (
                <img src={profileImage} alt="Profile" className="w-20 h-20 rounded-full" />
              ) : (
                <div className="w-20 h-20 bg-gray-400 rounded-full flex items-center justify-center">
                  <FaCamera className="text-white text-3xl" />
                </div>
              )}
            </label>
            <input
              type="file"
              id="profile-upload"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </div>

          <h4 className="text-sm font-light text-blue-400 text-center mb-4 cursor-pointer" onClick={() => document.getElementById('profile-upload').click()}>
            Upload Profile Picture
          </h4>

          <form className="flex flex-col">
            <label className="text-gray-700 font-semibold text-left mb-1">Your Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 "
            />

            <label className="text-gray-700 font-semibold text-left mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <label className="text-gray-700 font-semibold text-left mb-1">Phone Number</label>
            <input
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <label className="text-gray-700 font-semibold text-left text-sm">Password</label>

            <div className="relative w-full">
           
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 pr-10 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <div className="flex flex-col justify-center items-center">
              <button className="bg-none border-none text-gray-400 font-semibold mb-6 cursor-pointer">
                Change Password
              </button>
              <button onClick={handleSave} type="button" className="bg-blue-400 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-500 transition-all duration-300 cursor-pointer w-2/5">
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
