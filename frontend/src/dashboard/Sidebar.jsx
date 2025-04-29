import React, { useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { BiSolidLeftArrowAlt } from "react-icons/bi";
import axios from "axios";
import toast from "react-hot-toast";

function Sidebar({ setComponent, setSidebarActive }) {
  const { profile, setIsAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleComponents = (value) => {
    setComponent(value);
    setSidebarActive(false); // Close sidebar on mobile after selecting
  };

  const gotoHome = () => {
    navigate("/");
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        "http://localhost:4001/api/users/logout",
        { withCredentials: true }
      );
      toast.success(data.message);
      localStorage.removeItem("jwt");
      setIsAuthenticated(false);
      navigate("/login");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to logout");
    }
  };

  return (
    <div className="h-full w-full bg-gradient-to-br from-black via-gray-900 to-black p-6 flex flex-col justify-between">
      {/* Top part */}
      <div>
        {/* Close button (only visible on small screens) */}
        <div className="sm:hidden flex justify-end mb-4">
          <button onClick={() => setSidebarActive(false)} className="text-yellow-400 text-2xl">
            <BiSolidLeftArrowAlt />
          </button>
        </div>

        {/* Profile Image */}
        <div className="text-center mb-6">
        <img
  className="w-20 h-20 rounded-full mx-auto mb-2 object-cover shadow-md"
  src={
    profile?.user?.photo?.url ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(
      profile?.user?.name || "User"
    )}&background=FFEB3B&color=000000&size=128`
  }
  alt="User Profile"
/>

          <p className="text-lg font-semibold mt-2 text-yellow-400">{profile?.user?.name || "User"}</p>
        </div>

        {/* Navigation Buttons */}
        <ul className="space-y-4">
          <li>
            <button
              onClick={() => handleComponents("My Blogs")}
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg transition duration-200"
            >
              MY BLOGS
            </button>
          </li>
          <li>
            <button
              onClick={() => handleComponents("Create Blog")}
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg transition duration-200"
            >
              CREATE BLOG
            </button>
          </li>
          <li>
            <button
              onClick={() => handleComponents("My Profile")}
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg transition duration-200"
            >
              MY PROFILE
            </button>
          </li>
          <li>
            <button
              onClick={gotoHome}
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg transition duration-200"
            >
              HOME
            </button>
          </li>
        </ul>
      </div>

      {/* Logout button at bottom */}
      <div className="mt-6">
        <button
          onClick={handleLogout}
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg transition duration-200"
        >
          LOGOUT
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
