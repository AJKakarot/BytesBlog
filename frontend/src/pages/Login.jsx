import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { BACKEND_URL } from "../utils.js";

function Login() {
  const { isAuthenticated, setIsAuthenticated, setProfile } = useAuth();

  const navigateTo = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        `${BACKEND_URL}/api/users/login`,
        { email, password, role },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(data);
      localStorage.setItem("jwt", data.token);
      toast.success(data.message || "User logged in successfully", { duration: 3000 });
      setProfile(data);
      setIsAuthenticated(true);

      // Reset fields
      setEmail("");
      setPassword("");
      setRole("");

      navigateTo("/");
    } catch (error) {
      console.log(error);
      toast.error(
        error.response?.data?.message || "Please fill the required fields",
        { duration: 3000 }
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black p-6">
      <div className="w-full max-w-md md:max-w-lg lg:max-w-xl bg-white/10 backdrop-blur-md shadow-xl rounded-2xl px-8 py-10 space-y-6 border border-white/20 overflow-y-auto max-h-[90vh]">
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="text-4xl font-extrabold text-center text-yellow-400">
            Byte<span className="text-yellow-400">Blog</span>
          </div>
          <h1 className="text-2xl font-semibold text-center text-yellow-400">
            Login
          </h1>

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full p-3 bg-white/20 text-black border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <option value="">Select Role</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>

          <input
            type="email"
            placeholder="Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 bg-white/20 text-black placeholder-black border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <input
            type="password"
            placeholder="Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 bg-white/20 text-black placeholder-black border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <p className="text-center text-sm text-white/80">
            New User?{" "}
            <Link to={"/register"} className="text-yellow-300 font-medium hover:underline">
              Register Now
            </Link>
          </p>

          <button
            type="submit"
            className="w-full p-3 bg-yellow-400 hover:bg-yellow-500 transition duration-300 rounded-md text-blue-900 font-bold"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
