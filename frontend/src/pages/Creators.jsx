import axios from "axios";
import React, { useEffect, useState } from "react";

function Creators() {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const fetchCreators = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/users/admins",
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
    <div className="bg-yellow-100 pt-20 min-h-[calc(100vh-64px)] flex flex-wrap justify-center items-start">
      {creators.map((creator) => (
        <div
          key={creator._id}
          className="bg-white shadow-lg rounded-2xl overflow-hidden max-w-xs w-full m-4 p-4"
        >
          <div className="flex flex-col items-center">
            <img
              src={creator.photo.url}
              alt="avatar"
              className="w-24 h-24 rounded-full border-4 border-yellow-400 shadow-md mb-4 object-cover"
            />
            <h2 className="text-xl font-semibold text-blue-800">
              {creator.name}
            </h2>
            <p className="text-gray-700 text-sm mt-1">{creator.email}</p>
            <p className="text-gray-700 text-sm">{creator.phone}</p>
            <p className="text-gray-700 text-sm font-medium">{creator.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Creators;
