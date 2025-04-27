import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Loading from "../components/Loading"; // Assuming you have a Loading component

function Trending() {
  const { blogs } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (blogs) {
      setLoading(false); // Set loading to false when blogs are available
    }
  }, [blogs]);

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 4 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
    tablet: { breakpoint: { max: 1024, min: 640 }, items: 2 },
    mobile: { breakpoint: { max: 640, min: 0 }, items: 1 },
  };

  return (
    <div className="bg-yellow-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Trending Blogs</h1>
        {loading ? (
          <div className="flex justify-center py-20">
            <Loading /> {/* Show loading spinner */}
          </div>
        ) : blogs?.length > 0 ? (
          <Carousel
            responsive={responsive}
            infinite
            autoPlay
            autoPlaySpeed={3000}
            containerClass="pb-10"
            itemClass="px-3"
          >
            {blogs.slice(0, 8).map((blog) => (
              <div
                key={blog._id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300"
              >
                <Link to={`/blog/${blog._id}`}>
                  <div className="relative">
                    <img
                      src={blog.blogImage.url}
                      alt=""
                      className="w-full h-56 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                      {blog.category}
                    </div>
                  </div>
                  <div className="p-4">
                    <h2 className="text-lg font-bold truncate">{blog.title}</h2>
                    <div className="flex items-center mt-3">
                      <img
                        src={blog.adminPhoto}
                        alt="admin"
                        className="w-10 h-10 rounded-full"
                      />
                      <p className="ml-3 text-sm text-gray-600">{blog.adminName}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </Carousel>
        ) : (
          <div className="flex justify-center py-20">
            <p className="text-gray-500 text-lg">No trending blogs available.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Trending;
