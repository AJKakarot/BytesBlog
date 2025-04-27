import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection

function CreateBlog() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [about, setAbout] = useState("");
  const [blogImage, setBlogImage] = useState("");
  const [blogImagePreview, setBlogImagePreview] = useState("");
  const navigate = useNavigate(); // useNavigate hook for redirection

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

      // Reset the form fields
      setTitle("");
      setCategory("");
      setAbout("");
      setBlogImage("");
      setBlogImagePreview("");

      // Redirect to home page and refresh the page to show new blogs
      navigate("/");
      window.location.reload(); // Refresh to load the new blog
    } catch (error) {
      toast.error(error.message || "Please fill the required fields");
    }
  };

  return (
    <div className="min-h-screen bg-yellow-100 py-10">
      <div className="max-w-4xl mx-auto p-6 bg-white border rounded-lg shadow-lg transition-all duration-300 hover:scale-105">
        <h3 className="text-3xl font-semibold mb-8 text-center text-gray-800">Create Blog</h3>
        <form onSubmit={handleCreateBlog} className="space-y-6">
          {/* Category Dropdown */}
          <div className="space-y-2">
            <label className="block text-lg font-medium text-gray-800">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
            >
              <option value="">Select Category</option>
              <option value="Devotion">Devotion</option>
              <option value="Sports">Sports</option>
              <option value="Coding">Coding</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Business">Business</option>
            </select>
          </div>

          {/* Title Input */}
          <div className="space-y-2">
            <label className="block text-lg font-medium text-gray-800">Title</label>
            <input
              type="text"
              placeholder="Enter your blog title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
            />
          </div>

          {/* Blog Image Preview and File Input */}
          <div className="space-y-2">
            <label className="block text-lg font-medium text-gray-800">Blog Image</label>
            <div className="flex justify-center items-center">
              <img
                src={blogImagePreview ? `${blogImagePreview}` : "/imgPL.webp"}
                alt="Image Preview"
                className="w-full max-w-sm h-auto rounded-md object-cover transition-all duration-300 transform hover:scale-105"
              />
            </div>
            <input
              type="file"
              onChange={changePhotoHandler}
              className="w-full px-4 py-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
            />
          </div>

          {/* About Textarea */}
          <div className="space-y-2">
            <label className="block text-lg font-medium text-gray-800">About</label>
            <textarea
              rows="5"
              placeholder="Write something about your blog"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              className="w-full px-4 py-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 px-4 bg-yellow-500 hover:bg-yellow-600 text-white rounded-md transition-all duration-300 transform hover:scale-105"
          >
            Post Blog
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateBlog;
