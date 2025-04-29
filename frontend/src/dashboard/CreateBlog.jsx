import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function CreateBlog() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [about, setAbout] = useState("");
  const [blogImage, setBlogImage] = useState("");
  const [blogImagePreview, setBlogImagePreview] = useState("");

  const navigate = useNavigate();

  const changePhotoHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setBlogImagePreview(reader.result);
      setBlogImage(file);
    };
  };

  const handleCreateBlog = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("about", about);
    formData.append("blogImage", blogImage);

    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/blogs/create",
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success(data.message || "Blog created successfully");
      // Navigate to home page and refresh the page
      navigate("/");  // Navigate to home page
      window.location.reload();  // Refresh the page to display the new blog
    } catch (error) {
      toast.error(error.message || "Failed to create blog");
    }
  };

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black py-12">
      <div className="max-w-4xl bg-gradient-to-br from-black via-gray-900 to-black mx-auto p-6 border-2 border-yellow-400 rounded-lg shadow-lg bg-white">
        <h3 className="text-2xl font-semibold mb-8 text-center text-yellow-400">Create Blog</h3>
        <form onSubmit={handleCreateBlog} className="space-y-6">
          <div className="space-y-2 ">
            <label className="block text-lg text-yellow-400">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3 py-2 border bg-white/20 text-black placeholder-black rounded-md outline-none"
            >
              <option value="">Select Category</option>
              <option value="Devotion">Devotion</option>
              <option value="Sports">Sports</option>
              <option value="Coding">Coding</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Business">Business</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-lg text-yellow-400">Title</label>
            <input
              type="text"
              placeholder="Enter the title of your blog"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border bg-white/20 text-black placeholder-black rounded-md outline-none"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-lg text-yellow-400">Blog Image</label>
            <div className="flex items-center justify-center">
              <img
                src={blogImagePreview ? `${blogImagePreview}` : "/imgPL.webp"}
                alt=""
                className="w-full max-w-sm h-auto rounded-md object-cover"
              />
            </div>
            <input
              type="file"
              onChange={changePhotoHandler}
              className="w-full px-3 py-2 border bg-white/20 text-black placeholder-black rounded-md outline-none"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-lg text-yellow-400">About</label>
            <textarea
              rows="5"
              placeholder="Describe the content and purpose of your blog"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              className="w-full px-3 py-2 border bg-white/20 text-black placeholder-black rounded-md outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-yellow-500 hover:bg-yellow-600 text-black rounded-md transition-colors duration-200"
          >
            Post Blog
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateBlog;
