import React from "react";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";

function Blogs() {
  const { blogs } = useAuth();

  console.log(blogs);

  const getSubstring = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "..."; // Add ellipsis if content is too long
    }
    return text; // Return full content if it's short
  };

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black py-12">
      <div className="container mx-auto my-12 p-6 bg-white/20 backdrop-blur-md rounded-2xl shadow-2xl">
        <h1 className="text-4xl font-bold text-center text-yellow-400 mb-6">
          All Blogs
        </h1>
        <p className="text-center text-yellow-300 mb-10">
          Explore various blogs and dive into different cultures, religions, and ideas.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {blogs && blogs.length > 0 ? (
            blogs.map((blog, index) => (
              <Link
                to={`/blog/${blog._id}`}  // Corrected here: blog._id, not blog.id
                key={index}
                className="group relative rounded-2xl overflow-hidden bg-white/20 backdrop-blur-md shadow-lg transform hover:scale-105 transition-transform duration-300"
              >
                <div className="relative">
                  <img
                    src={blog?.blogImage?.url}
                    alt={blog?.title}
                    className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70" />
                  <h1 className="absolute bottom-4 left-4 text-yellow-400 text-xl font-bold z-10">
                    {blog?.title}
                  </h1>
                </div>
                <div className="p-4">
                  <p className="text-light-yellow text-sm">
                    {getSubstring(blog?.about, 100)} {/* Adjusted substring length */}
                  </p>
                  <div className="flex items-center mt-4">
                    <img
                      src={blog?.adminPhoto}  // Admin's photo for the blog
                      alt="admin"
                      className="w-12 h-12 rounded-full border-2 border-yellow-400"
                    />
                    <div className="ml-3">
                      <p className="font-semibold text-yellow-400">{blog?.adminName}</p>
                      <span className="text-yellow-300 text-xs">New Post</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="text-center text-yellow-300 text-lg col-span-full">
              No Blogs Found!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
