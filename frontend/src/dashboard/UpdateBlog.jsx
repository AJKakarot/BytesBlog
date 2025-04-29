import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { BACKEND_URL } from "../utils.js";
function UpdateBlog() {
  const navigateTo = useNavigate();
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [about, setAbout] = useState("");
  const [blogImage, setBlogImage] = useState("");
  const [blogImagePreview, setBlogImagePreview] = useState("");
  const [initialBlogImage, setInitialBlogImage] = useState(""); // Store the initial image URL

  const changePhotoHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setBlogImagePreview(reader.result);
      setBlogImage(file);
    };
  };

  // Fetch existing blog data to pre-populate the form
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const { data } = await axios.get(
          `${BACKEND_URL}/api/blogs/single-blog/${id}`,
          {
            withCredentials: true,
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setTitle(data?.title);
        setCategory(data?.category);
        setAbout(data?.about);
        setBlogImage(data?.blogImage.url); // Set initial image
        setInitialBlogImage(data?.blogImage.url); // Store the initial blog image URL
      } catch (error) {
        console.log(error);
        toast.error("Failed to fetch blog data");
      }
    };
    fetchBlog();
  }, [id]);

  // Handle blog update
  const handleUpdate = async (e) => {
    e.preventDefault();

    // Prepare form data for fields that are changed
    const formData = new FormData();
    
    // Only append the updated fields
    if (title !== "") formData.append("title", title);
    if (category !== "") formData.append("category", category);
    if (about !== "") formData.append("about", about);

    // Only append the new image if it's different from the initial one
    if (blogImage && blogImage !== initialBlogImage) {
      formData.append("blogImage", blogImage);
    } else if (!blogImage && blogImagePreview === "") {
      // If the user removed the image
      formData.append("blogImage", "null");
    }

    try {
      const { data } = await axios.put(
        `http://localhost:4000/api/blogs/update/${id}`,
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success(data.message || "Blog updated successfully");
      navigateTo(`/blog/${id}`); // Redirect to the updated blog details page
    } catch (error) {
      toast.error(error.response?.data?.message || "Error updating the blog");
    }
  };

  // Function to handle image removal
  const handleImageRemove = () => {
    setBlogImage(null);
    setBlogImagePreview("");
  };

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black w-full min-h-screen flex flex-col">
      <div className="container mx-auto my-12 p-4 flex-grow">
        <section className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-yellow-400">UPDATE BLOG</h3>
          <form>
            <div className="mb-4">
              <label className="block mb-2 font-semibold text-black">Category</label>
              <select
                className="w-full p-2 border rounded-md text-gray-900"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select Category</option>
                <option value="Devotion">Devotion</option>
                <option value="Sports">Sports</option>
                <option value="Coding">Coding</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Business">Business</option>
              </select>
            </div>
            <input
              type="text"
              placeholder="BLOG MAIN TITLE"
              className="w-full p-2 mb-4 border rounded-md text-gray-900"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className="mb-4">
              <label className="block mb-2 font-semibold text-black">BLOG IMAGE</label>
              <img
                src={
                  blogImagePreview
                    ? blogImagePreview
                    : blogImage
                    ? blogImage
                    : "/imgPL.webp"
                }
                alt="Blog Main"
                className="w-full h-48 object-cover mb-4 rounded-md"
              />
              {blogImage && !blogImagePreview && (
                <button
                  type="button"
                  className="text-red-500 mt-2"
                  onClick={handleImageRemove}
                >
                  Remove Image
                </button>
              )}
              <input
                type="file"
                className="w-full p-2 border rounded-md text-gray-900"
                onChange={changePhotoHandler}
              />
            </div>
            <textarea
              rows="6"
              className="w-full p-2 mb-4 border rounded-md text-gray-900"
              placeholder="Something about your blog at least 200 characters!"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
            />

            <button
              className="w-full p-3 bg-black text-yellow-400 rounded-md hover:bg-gray-900"
              onClick={handleUpdate}
            >
              UPDATE
            </button>
          </form>
        </section>
      </div>
      {/* Footer section here */}
      <footer className="bg-black text-white p-4 text-center">
        <p>© 2025 ByteBlog. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default UpdateBlog;
