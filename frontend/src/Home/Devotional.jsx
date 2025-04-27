import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";
import Loading from "../components/Loading"; // Importing the Loading component

function Devotional() {
  const { blogs } = useAuth();
  const [loading, setLoading] = useState(true); // Loading state
  const devotionalBlogs = blogs?.filter((blog) => blog.category === "Devotion");

  useEffect(() => {
    if (blogs) {
      setLoading(false); // Set loading to false when blogs are available
    }
  }, [blogs]);

  return (
    <div className="bg-yellow-100 py-12">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-6">Devotional</h1>
        <p className="text-center text-gray-600 mb-10">
          The concept of gods varies widely across different cultures, religions, and belief systems.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {loading ? (
            <div className="col-span-full flex justify-center py-20">
              <Loading /> {/* Show loading spinner while blogs are being fetched */}
            </div>
          ) : devotionalBlogs?.length > 0 ? (
            devotionalBlogs.map((blog) => (
              <Link
                to={`/blog/${blog._id}`}
                key={blog._id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300"
              >
                <img
                  src={blog?.blogImage?.url}
                  alt={blog?.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold">{blog?.title}</h2>
                  <p className="text-gray-500 text-sm">{blog?.category}</p>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full flex justify-center py-20">
              <p className="text-gray-500 text-lg">No devotional blogs available.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Devotional;
