import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

function Register() {
  const { isAuthenticated, setIsAuthenticated, setProfile } = useAuth();

  const navigateTo = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [education, setEducation] = useState("");
  const [photo, setPhoto] = useState("");
  const [photoPreview, setPhotoPreview] = useState("");

  const changePhotoHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPhotoPreview(reader.result);
      setPhoto(file);
    
    };
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("password", password);
    formData.append("role", role);
    formData.append("education", education);
    formData.append("photo", photo);
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/users/register",
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(data);
      localStorage.setItem("jwt", data.token);
      toast.success(data.message || "User registered successfully");
      setProfile(data);
      setIsAuthenticated(true);
      setName("");
      setEmail("");
      setPhone("");
      setPassword("");
      setRole("");
      setEducation("");
      setPhoto("");
      setPhotoPreview("");
      navigateTo("/login");
    } catch (error) {
      console.log(error);
      toast.error(
        error.response.data.message || "Please fill the required fields"
      );
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800">
      <div className="w-full max-w-sm sm:max-w-sm bg-white/10 backdrop-blur-md shadow-xl rounded-2xl px-6 py-4 space-y-4 border border-white/20">
        <form onSubmit={handleRegister} className="space-y-5">
          <div className="text-3xl font-bold text-center text-white">
            Byte<span className="text-yellow-400">Blog</span>
          </div>
          <h1 className="text-xl font-semibold text-center text-white">Register</h1>

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full p-2 bg-white/20 text-black border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <option value="">Select Role</option>
            <option value="user">user</option>
            <option value="admin">admin</option>
          </select>

          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 bg-white/20 text-black placeholder-black border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <input
            type="email"
            placeholder="Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 bg-white/20 text-black placeholder-black border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <input
            type="number"
            placeholder="Your Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-2 bg-white/20 text-black placeholder-black border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <input
            type="password"
            placeholder="Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 bg-white/20  text-black placeholder-black border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <select
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            className="w-full p-2 bg-white/20 text-black placeholder-black border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <option value="">Select Your Education</option>
            <option value="BCA">B.TECH</option>
            <option value="MCA">M.TECH</option>
            <option value="MBA">MBA</option>
            <option value="BBA">BBA</option>
          </select>

          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white">
              <img
                src={photoPreview ? photoPreview : "https://via.placeholder.com/80"}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <input
              type="file"
              onChange={changePhotoHandler}
              className="w-full p-2 text-black file:bg-yellow-400 file:text-blue-900 file:rounded-md file:px-3 file:py-1"
            />
          </div>

          <p className="text-center text-sm text-white/80">
            Already registered?{" "}
            <Link to={"/login"} className="text-yellow-300 font-medium hover:underline">
              Login Now
            </Link>
          </p>

          <button
            type="submit"
            className="w-full p-3 bg-yellow-400 hover:bg-yellow-500 transition duration-300 rounded-md text-blue-900 font-bold"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
