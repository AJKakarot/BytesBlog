import axios from "axios";
import React, { useEffect, useState } from "react";
import { BACKEND_URL } from "../utils.js";
function Creators() {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const fetchCreators = async () => {
      try {
        const { data } = await axios.get(
          `https://bytesblog.onrender.com/api/users/admins`,
          {
            withCredentials: true,
          }
        );
        setCreators(data.admins);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCreators();
  }, []);

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black pt-20 min-h-[calc(100vh-64px)] flex flex-wrap justify-center items-start">
      {creators.map((creator) => (
        <div
          key={creator._id}
          className="bg-white/20 backdrop-blur-md shadow-lg rounded-2xl overflow-hidden max-w-xs w-full sm:max-w-sm md:max-w-md lg:max-w-lg m-4 p-4"
        >
          <div className="flex flex-col items-center">
            <img
              src={creator.photo.url}
              alt="avatar"
              className="w-24 h-24 rounded-full border-4 border-yellow-400 shadow-md mb-4 object-cover"
            />
            <h2 className="text-xl font-semibold text-yellow-400">
              {creator.name}
            </h2>
            <p className="text-yellow-300 text-sm mt-1">{creator.email}</p>
            <p className="text-yellow-300 text-sm">{creator.phone}</p>
            <p className="text-yellow-300 text-sm font-medium">{creator.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Creators;
