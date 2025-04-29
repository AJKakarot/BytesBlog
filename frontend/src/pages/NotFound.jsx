import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-black px-6">
      <h1 className="text-9xl font-extrabold text-yellow-400 drop-shadow-lg mb-6">
        404
      </h1>
      <h2 className="text-3xl md:text-5xl font-bold text-yellow-400 mb-4 text-center">
        Oops! Page Not Found
      </h2>
      <p className="text-white/80 mb-8 text-center max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-6 rounded-full shadow-lg transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;
