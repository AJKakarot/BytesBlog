import React from "react";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";

function Blogs() {
  const { blogs } = useAuth();

  console.log(blogs);
  return (
    <div className="min-h-screen bg-gradient-to-br bg-yellow-100 p-8">
      <div className="container mx-auto my-12 p-6 bg-white bg-opacity-90 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          All Blogs
        </h1>
        <p className="text-center text-gray-600 mb-10">
          The concept of gods varies widely across different cultures,
          religions, and belief systems.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {blogs && blogs.length > 0 ? (
            blogs.map((blog, index) => (
              <Link
                to={`/blog/${blog.id}`}
                key={index}
                className="relative rounded-xl overflow-hidden shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <img
                  src={blog?.blogImage?.url}
                  alt={blog?.title}
                  className="w-full h-60 object-cover p-4 transition-transform duration-300 transform hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h2 className="text-lg font-bold">{blog?.title}</h2>
                  <p className="text-sm">{blog?.category}</p>
                </div>
              </Link>
            ))
          ) : (
            <div className="text-center text-gray-500 col-span-full">
              No Blogs Found!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
