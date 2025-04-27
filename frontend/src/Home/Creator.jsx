import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../components/Loading"; // Import the Loading component

function Creator() {
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/users/admins",
          { withCredentials: true }
        );
        setAdmins(data.admins);
      } catch (error) {
        console.log("Error fetching admins", error);
      } finally {
        setLoading(false); // Stop loading when data is fetched
      }
    };
    fetchAdmins();
  }, []);

  return (
    <div className="bg-yellow-100 py-12">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-10">Popular Creators</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
          {loading ? ( // Display the loading component if loading is true
            <div className="col-span-full flex justify-center py-20">
              <Loading /> {/* Show loading spinner */}
            </div>
          ) : admins.length > 0 ? (
            admins.slice(0, 4).map((admin) => (
              <div key={admin._id} className="text-center">
                <img
                  src={admin.photo.url}
                  alt={admin.name}
                  className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full border-4 border-yellow-400 mx-auto mb-4"
                />
                <h2 className="text-lg font-semibold">{admin.name}</h2>
                <p className="text-gray-500 text-sm">{admin.role}</p>
              </div>
            ))
          ) : (
            <div className="col-span-full flex justify-center py-20">
              <p className="text-gray-500 text-lg">No creators available.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Creator;
