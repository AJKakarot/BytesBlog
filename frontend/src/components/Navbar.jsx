import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { useAuth } from "../context/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
import { BACKEND_URL } from "../utils.js";

function Navbar() {
  const [show, setShow] = useState(false);
  const { profile, isAuthenticated, setIsAuthenticated } = useAuth();
  const navigateTo = useNavigate();

  // Handle logout functionality
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `${BACKEND_URL}/api/users/logout`,
        { withCredentials: true }
      );
      console.log(data);
      localStorage.removeItem("jwt"); // Deleting token from localStorage
      toast.success(data.message);
      setIsAuthenticated(false);
      navigateTo("/login");
    } catch (error) {
      console.log(error);
      toast.error("Failed to logout");
    }
  };

  // Check if user is authenticated on page load (from localStorage)
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      // If token exists, set user as authenticated
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [setIsAuthenticated]);

  return (
    <>
      <nav className="bg-gradient-to-br from-black via-gray-900 to-black px-4 py-2">
        <div className="flex items-center justify-between container mx-auto">
          <div className="font-semibold text-xl text-yellow-400">
            Byte<span className="text-yellow-400">Blog</span>
          </div>
          {/* Desktop Navbar */}
          <div className="mx-6">
            <ul className="hidden md:flex space-x-6 text-yellow-300">
              <Link to="/" className="hover:text-yellow-400">
                HOME
              </Link>
              <Link to="/blogs" className="hover:text-yellow-400">
                BLOGS
              </Link>
              <Link to="/creators" className="hover:text-yellow-400">
                CREATORS
              </Link>
              <Link to="/about" className="hover:text-yellow-400">
                ABOUT
              </Link>
              <Link to="/contact" className="hover:text-yellow-400">
                CONTACT
              </Link>
            </ul>
            <div className="md:hidden" onClick={() => setShow(!show)}>
              {show ? (
                <IoCloseSharp size={24} color="#FACC15" />
              ) : (
                <AiOutlineMenu size={24} color="#FACC15" />
              )}
            </div>
          </div>
          {/* Desktop Authentication Links */}
          <div className="hidden md:flex space-x-2">
            {isAuthenticated && profile?.user?.role === "admin" ? (
              <Link
                to="/dashboard"
                className="bg-yellow-400 text-blue-900 font-semibold hover:bg-yellow-500 duration-300 px-4 py-2 rounded"
              >
                DASHBOARD
              </Link>
            ) : null}

            {!isAuthenticated ? (
              <Link
                to="/login"
                className="bg-blue-600 text-white font-semibold hover:bg-blue-800 duration-300 px-4 py-2 rounded"
              >
                LOGIN
              </Link>
            ) : (
              <div>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 text-white font-semibold hover:bg-red-800 duration-300 px-4 py-2 rounded"
                >
                  LOGOUT
                </button>
              </div>
            )}
          </div>
        </div>
        {/* Mobile Navbar */}
        {show && (
          <div className="bg-gradient-to-br from-black via-gray-900 to-black text-yellow-300">
            <ul className="flex flex-col h-screen items-center justify-center space-y-3 md:hidden text-xl">
              <Link
                to="/"
                onClick={() => setShow(!show)}
                className="hover:text-yellow-400"
              >
                HOME
              </Link>
              <Link
                to="/blogs"
                onClick={() => setShow(!show)}
                className="hover:text-yellow-400"
              >
                BLOGS
              </Link>
              <Link
                to="/creators"
                onClick={() => setShow(!show)}
                className="hover:text-yellow-400"
              >
                CREATORS
              </Link>
              <Link
                to="/about"
                onClick={() => setShow(!show)}
                className="hover:text-yellow-400"
              >
                ABOUT
              </Link>
              <Link
                to="/contact"
                onClick={() => setShow(!show)}
                className="hover:text-yellow-400"
              >
                CONTACT
              </Link>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
