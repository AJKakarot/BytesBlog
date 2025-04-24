import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { useAuth } from "../context/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";

function Navbar() {
  const [show, setShow] = useState(false);

  const { profile, isAuthenticated, setIsAuthenticated } = useAuth();
  console.log(profile?.user);
  const navigateTo = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        "http://localhost:4000/api/users/logout",
        { withCredentials: true }
      );
      console.log(data);
      localStorage.removeItem("jwt"); // deleting token in localStorage so that if user logged out it will goes to login page
      toast.success(data.message);
      setIsAuthenticated(false);
      navigateTo("/login");
    } catch (error) {
      console.log(error);
      toast.error("Failed to logout");
    }
  };

  return (
    <>
      <nav className="shadow-lg px-4 py-2">
        <div className="flex items-center justify-between container mx-auto">
          <div className="font-semibold text-xl">
            Byte<span className="text-yellow-400">Blog</span>
          </div>
          {/* Desktop */}
          <div className=" mx-6">
            <ul className="hidden md:flex space-x-6">
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
              {show ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
            </div>
          </div>
          <div className="hidden md:flex space-x-2">
            {isAuthenticated && profile?.user?.role === "admin" ? (
              <Link
                to="/dashboard"
                className="bg-yellow-400 text-blue-900 font-semibold hover:bg-yellow-500 duration-300 px-4 py-2 rounded"
              >
                DASHBOARD
              </Link>
            ) : (
              ""
            )}

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
        {/* mobile navbar */}
        {show && (
          <div className="bg-white">
            <ul className="flex flex-col h-screen items-center justify-center space-y-3 md:hidden text-xl">
              <Link
                to="/"
                onClick={() => setShow(!show)}
                smooth="true"
                duration={500}
                offset={-70}
                activeClass="active"
                className="hover:text-yellow-400"
              >
                HOME
              </Link>
              <Link
                to="/blogs"
                onClick={() => setShow(!show)}
                smooth="true"
                duration={500}
                offset={-70}
                activeClass="active"
                className="hover:text-yellow-400"
              >
                BLOGS
              </Link>
              <Link
                to="/creators"
                onClick={() => setShow(!show)}
                smooth="true"
                duration={500}
                offset={-70}
                activeClass="active"
                className="hover:text-yellow-400"
              >
                CREATORS
              </Link>
              <Link
                to="/about"
                onClick={() => setShow(!show)}
                smooth="true"
                duration={500}
                offset={-70}
                activeClass="active"
                className="hover:text-yellow-400"
              >
                ABOUT
              </Link>
              <Link
                to="/contact"
                onClick={() => setShow(!show)}
                smooth="true"
                duration={500}
                offset={-70}
                activeClass="active"
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
