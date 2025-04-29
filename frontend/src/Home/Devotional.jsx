import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

function Devotional() {
  const { blogs } = useAuth();
  const [loading, setLoading] = useState(true);
  const devotionalBlogs = blogs?.filter((blog) => blog.category === "Devotion");

  useEffect(() => {
    if (blogs) {
      setLoading(false);
    }
  }, [blogs]);

  // Function to shorten the title if too long
  const truncateTitle = (title, maxLength) => {
    return title.length > maxLength ? title.substring(0, maxLength) + "..." : title;
  };

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black py-12">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {loading ? (
            <div className="col-span-full flex justify-center py-20">
              <Loading />
            </div>
          ) : devotionalBlogs?.length > 0 ? (
            devotionalBlogs.map((blog) => (
              <Link
                to={`/blog/${blog._id}`}
                key={blog._id}
                className="bg-black rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300"
              >
                <img
                  src={blog?.blogImage?.url}
                  alt={blog?.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-yellow-400">
                    {truncateTitle(blog?.title, 70)}
                  </h2>
                  <p className="text-light-yellow text-sm mt-2">
                  {blog?.about?.substring(0, 80)}...
                </p>
                  <p className="text-yellow text-sm">{blog?.category}</p>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full flex justify-center py-20">
              <p className="text-yellow text-lg">No devotional blogs available.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Devotional;
