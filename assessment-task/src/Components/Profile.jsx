import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaCamera } from "react-icons/fa";
import { toast,Toaster } from "react-hot-toast";

const Profile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const updatedProfile = location.state || {};

  const [profile, setProfile] = useState({
    fullName: updatedProfile.fullName || "",
    email: updatedProfile.email || "",
    phone: updatedProfile.phone || "",
    password: updatedProfile.password || "",
    profilePic: updatedProfile.profileImage || "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfile((prev) => ({ ...prev, profilePic: imageUrl }));
    }
  };

  const handleSave = async () => {
    if (profile.newPassword !== profile.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const token = "your-auth-token";
    const updatedData = { ...profile };

    fetch(`${window.location.origin}/api/v1/admin/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updatedData),
    }).finally(() => {
      navigate("/");
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-start bg-orange-100 p-10">
      <h2 className="text-2xl font-bold text-left w-full mb-4">Profile</h2>
      <Toaster/>
      <div className="bg-white shadow-lg rounded p-8 w-full border border-black">
        <div className="flex items-center mb-6">
          <div
            className="relative w-20 h-20 rounded-full overflow-hidden bg-gray-300 flex items-center justify-center cursor-pointer"
            onClick={() => document.getElementById("fileInput").click()}
          >
            {profile.profilePic ? (
              <img src={profile.profilePic} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <FaCamera className="text-white text-3xl" />
            )}
          </div>
          <label className="ml-4 bg-none text-blue-400 px-4 py-2 rounded cursor-pointer border border-blue-400">
            Upload Profile Picture
            <input
              type="file"
              className="hidden"
              id="fileInput"
              accept="image/*"
              onChange={handleImageChange}
            />
          </label>
        </div>

        <div className="mb-4 text-left">
          <label className="text-gray-700 font-semibold block">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={profile.fullName}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4 text-left">
          <label className="text-gray-700 font-semibold block">Email Address</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4 text-left">
          <label className="text-gray-700 font-semibold block">Phone Number</label>
          <input
            type="text"
            name="phone"
            value={profile.phone}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4 text-left">
          <p className="text-md font-semibold">Password Management:</p>
          <label className="text-gray-700 font-semibold block">Old Password</label>
          <input
            type="password"
            value={profile.password}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            readOnly
          />
          <label className="text-gray-700 font-semibold block">New Password</label>
          <input
            type="password"
            name="newPassword"
            value={profile.newPassword}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />

          <label className="text-gray-700 font-semibold block mt-2">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={profile.confirmPassword}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          onClick={handleSave}
          className="w-2/5 bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600"
        >
          Save Changes
        </button>
      </div>
      <div className="absolute w-32 h-20 right-2 bg-orange-300 -z-10 rounded-full blur-xl -top-12"></div>
      <div className="absolute w-24 h-24 bg-orange-300 -z-10 rounded-full blur-xl top-12 -right-6"></div>
      <div className="absolute w-32 h-20 right-2 bg-orange-300 -z-10 rounded-full blur-xl -top-12"></div>
      <div className="absolute w-24 h-24 bg-orange-300 -z-10 rounded-full blur-xl bottom-24 left-40"></div>
    </div>
  );
};

export default Profile;
