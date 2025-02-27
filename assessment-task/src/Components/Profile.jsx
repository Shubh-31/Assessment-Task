import React, { useEffect, useState } from "react";
import { FaCamera } from "react-icons/fa";

const Profile = () => {
  const [profile, setProfile] = useState({ fullName: "", email: "", phone: "", profilePic: "" });
  const [selectedImage, setSelectedImage] = useState(null);
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MTYyM2U4ZjcyNmU3MTczYmE0MjQ1MSIsImlhdCI6MTcyOTUwNDI0MiwiZXhwIjoxNzYxMDQwMjQyfQ.u6dELPLGwiGa5SHmhOdREAciXsPkMl-vXu1GDji9pqw";
  const apiBaseUrl = window.location.origin.includes("localhost") ? "http://localhost:2018" : window.location.origin;

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`${apiBaseUrl}/api/v1/admin/getProfile`, {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!response.ok) throw new Error("Failed to fetch profile");
        const data = await response.json();
        setProfile(data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };
    fetchProfile();
  }, [apiBaseUrl, token]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-start bg-orange-100 p-10">
      <h2 className="text-2xl font-bold text-left w-full mb-4">Profile</h2>
      <div className="bg-white shadow-lg rounded p-8 w-full border  border-black">
        <div className="flex items-center mb-6">
          <div className="relative w-20 h-20 rounded-full overflow-hidden bg-gray-300 flex items-center justify-center">
            {selectedImage || profile.profilePic ? (
              <img src={selectedImage || profile.profilePic} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <FaCamera className="text-white text-3xl" />
            )}
          </div>
          <label className="ml-4 bg-none text-blue-400 px-4 py-2 rounded cursor-pointer border border-blue-400">
            Upload Profile Picture
            <input type="file" className="hidden" onChange={handleImageChange} />
          </label>
        </div>

        <div className="mb-4 text-left">
          <p className="text-md font-semibold">Personal Information:</p>
          <label className="text-gray-700 font-semibold block">Full Name</label>
          <input
            type="text"
            value={profile.fullName}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            readOnly
          />
        </div>

        <div className="mb-4 text-left">
          <label className="text-gray-700 font-semibold block">Email Address</label>
          <input
            type="email"
            value={profile.email}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            readOnly
          />
        </div>

        <div className="mb-4 text-left">
          <label className="text-gray-700 font-semibold block">Phone Number</label>
          <input
            type="text"
            value={profile.phone}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            readOnly
          />
        </div>

        <div className="mb-4 text-left">
          <p className="text-md font-semibold">Password Management:</p>
          <label className="text-gray-700 font-semibold block">Old Password</label>
          <input
            type="password"
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />

          <label className="text-gray-700 font-semibold block mt-2">New Password</label>
          <input
            type="password"
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />

          <label className="text-gray-700 font-semibold block mt-2">Confirm Password</label>
          <input
            type="password"
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button className="w-2/5 bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600">Save Changes</button>
      </div>
    </div>
  );
};

export default Profile;
