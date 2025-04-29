import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthProvider";
import Sidebar from "../dashboard/Sidebar";
import MyProfile from "../dashboard/MyProfile";
import MyBlogs from "../dashboard/MyBlogs";
import CreateBlog from "../dashboard/CreateBlog";
import UpdateBlog from "../dashboard/UpdateBlog";
import { Navigate } from "react-router-dom";

function Dashboard() {
  const { profile, isAuthenticated, loading } = useAuth();
  
  // Use state to store active component and sidebar state
  const [component, setComponent] = useState(localStorage.getItem("activeComponent") || "My Blogs");
  const [sidebarActive, setSidebarActive] = useState(JSON.parse(localStorage.getItem("sidebarActive")) || true);

  // Use useEffect to update localStorage whenever the component or sidebar state changes
  useEffect(() => {
    localStorage.setItem("activeComponent", component);
    localStorage.setItem("sidebarActive", JSON.stringify(sidebarActive));
  }, [component, sidebarActive]);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center text-yellow-400">
        Loading...
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Sidebar will always be active */}
      {sidebarActive && (
        <div className="w-1/4 bg-white/10 backdrop-blur-md shadow-lg p-6">
          <Sidebar
            setComponent={setComponent}
            setSidebarActive={setSidebarActive}
          />
        </div>
      )}
      <div className={`${sidebarActive ? "w-3/4" : "w-full"} p-6 text-white transition-all duration-300`}>
        {/* Render component based on the selected option */}
        {component === "My Profile" ? (
          <MyProfile />
        ) : component === "Create Blog" ? (
          <CreateBlog />
        ) : component === "Update Blog" ? (
          <UpdateBlog />
        ) : (
          <MyBlogs />
        )}
      </div>
    </div>
  );
}

export default Dashboard;
