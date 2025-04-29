import React, { useState } from "react";
import { useAuth } from "../context/AuthProvider";
import Sidebar from "../dashboard/Sidebar";
import MyProfile from "../dashboard/MyProfile";
import MyBlogs from "../dashboard/MyBlogs";
import CreateBlog from "../dashboard/CreateBlog";
import UpdateBlog from "../dashboard/UpdateBlog";
import { Navigate } from "react-router-dom";

function Dashboard() {
  const { profile, isAuthenticated, loading } = useAuth();
  const [component, setComponent] = useState("My Blogs");

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center text-yellow-400">
        Loading...
      </div>
    ); // loading spinner
  }

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="w-1/4 bg-white/10 backdrop-blur-md shadow-lg p-6">
        <Sidebar setComponent={setComponent} />
      </div>
      <div className="w-3/4 p-6 text-white">
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
