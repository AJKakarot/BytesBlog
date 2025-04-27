import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";
import Loading from "../components/Loading"; // Assuming you have a Loading component

function Hero() {
  const { blogs } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (blogs) {
      setLoading(false); // Set loading to false when blogs are available
    }
  }, [blogs]);

  return (
    <div className="bg-yellow-100 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {loading ? (
          <div className="col-span-full flex justify-center py-20">
            <Loading /> {/* Show loading spinner */}
          </div>
        ) : blogs?.length > 0 ? (
          blogs.slice(0, 4).map((blog) => (
            <Link
              to={`/blog/${blog._id}`}
              key={blog._id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300"
            >
              <div className="relative">
                <img
                  src={blog?.blogImage?.url}
                  alt={blog?.title}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70" />
                <h1 className="absolute bottom-4 left-4 text-white text-xl font-bold">
                  {blog?.title}
                </h1>
              </div>
              <div className="flex items-center p-4">
                <img
                  src={blog?.adminPhoto}
                  alt="admin"
                  className="w-12 h-12 rounded-full border-2 border-yellow-400"
                />
                <div className="ml-3">
                  <p className="font-semibold text-gray-700">{blog?.adminName}</p>
                  <p className="text-gray-400 text-xs">New Post</p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-full flex justify-center py-20">
            <p className="text-gray-500 text-lg">No blogs available.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Hero;
