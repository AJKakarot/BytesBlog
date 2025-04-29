import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [profile, setProfile] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true); // 👈 important

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/users/my-profile",
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        );
        setProfile(data.user);
        setIsAuthenticated(true);
      } catch (error) {
        console.log("Profile fetch error:", error);
        setProfile(null);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    const fetchBlogs = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/blogs/all-blogs",
          { withCredentials: true }
        );
        setBlogs(data);
      } catch (error) {
        console.log("Blogs fetch error:", error);
      }
    };

    fetchProfile();
    fetchBlogs();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        blogs,
        profile,
        setProfile,
        isAuthenticated,
        setIsAuthenticated,
        loading,  // 👈 pass loading also
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
