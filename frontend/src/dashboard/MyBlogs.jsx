import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { BACKEND_URL } from "../utils.js";
import { useAuth } from "../context/AuthProvider";

function MyBlogs() {
  const [myBlogs, setMyBlogs] = useState([]);

  useEffect(() => {
    const fetchMyBlogs = async () => {
      try {
        const { data } = await axios.get(
          `${BACKEND_URL}/api/blogs/my-blog`,
          { withCredentials: true }
        );
        setMyBlogs(data);
      } catch (error) {
        console.log(error);
        toast.error("Failed to fetch your blogs.");
      }
    };
    fetchMyBlogs();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `${BACKEND_URL}/api/blogs/delete/${id}`,
        { withCredentials: true }
      );
      toast.success(res.data.message || "Blog deleted successfully");
      setMyBlogs((prev) => prev.filter((blog) => blog._id !== id));
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Failed to delete blog");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-12 px-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-yellow-400 mb-10 text-center">
          My Blogs
        </h1>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {myBlogs && myBlogs.length > 0 ? (
            myBlogs.map((element) => (
              <div
                key={element._id}
                className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl border border-yellow-400 hover:scale-105 transform transition-all duration-300"
              >
                {element?.blogImage && (
                  <div className="w-full h-60 bg-black flex items-center justify-center overflow-hidden">
                    <img
                      src={element?.blogImage.url}
                      alt="Blog"
                      className="object-contain h-full hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-5">
                  <div className="text-xs uppercase tracking-wider text-yellow-300 mb-2">
                    {element.category}
                  </div>

                  <h4 className="text-xl font-semibold text-yellow-400 mb-4 break-words">
                    {element.title.length > 60
                      ? element.title.slice(0, 60) + "..."
                      : element.title}
                  </h4>

                  <div className="flex justify-between">
                    <Link
                      to={`/blog/update/${element._id}`}
                      className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-md shadow hover:bg-yellow-500 transition duration-300"
                    >
                      Update
                    </Link>
                    <button
                      onClick={() => handleDelete(element._id)}
                      className="bg-red-500 text-white font-semibold px-4 py-2 rounded-md shadow hover:bg-red-600 transition duration-300"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400 text-lg">
              You have not posted any blog yet!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyBlogs;
