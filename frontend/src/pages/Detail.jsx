import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { BACKEND_URL } from "../utils.js";

function Detail() {
  const { id } = useParams();
  const [blogs, setBlogs] = useState({});

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data } = await axios.get(
          `${BACKEND_URL}/api/blogs/single-blog/${id}`,
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setBlogs(data);
      } catch (error) {
        console.log(error);
        toast.error("Failed to fetch blog details.");
      }
    };
    fetchBlogs();
  }, [id]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-12 px-4">
      {blogs && (
        <section className="max-w-5xl mx-auto bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-white/20">
          {/* Category */}
          <div className="text-yellow-400 uppercase text-xs font-bold mb-4 tracking-wider">
            {blogs?.category}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-yellow-400 break-words">
            {blogs?.title}
          </h1>

          {/* Author Info */}
          <div className="flex items-center mb-8">
            <img
              src={blogs?.adminPhoto}
              alt="Author Avatar"
              className="w-12 h-12 rounded-full mr-4 border-2 border-yellow-400 object-cover"
            />
            <p className="text-lg font-semibold text-white">
              {blogs?.adminName}
            </p>
          </div>

          {/* Blog Content */}
          <div className="flex flex-col md:flex-row gap-8">
            {blogs?.blogImage && (
              <div className="w-full md:w-1/2">
                <img
                  src={blogs?.blogImage?.url}
                  alt="Blog"
                  className="rounded-xl w-full h-64 md:h-80 object-cover shadow-lg border border-yellow-400 transition-transform duration-300 hover:scale-105"
                />
              </div>
            )}
            <div className="w-full md:w-1/2 flex items-center">
              <p className="text-base md:text-lg text-white/80 leading-relaxed">
                {blogs?.about}
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default Detail;
