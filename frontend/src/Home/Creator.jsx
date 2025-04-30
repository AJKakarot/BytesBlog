import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { motion } from "framer-motion";
import { BACKEND_URL } from "../utils.js";

function Creator() {
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const { data } = await axios.get(
          `https://bytesblog.onrender.com/api/users/admins`,
          { withCredentials: true }
        );
        setAdmins(data.admins);
      } catch (error) {
        console.log("Error fetching admins", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAdmins();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <Loading />
      </div>
    );
  }

  return (
    <div className="py-12 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="container mx-auto p-4">
        

        {admins.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
            {admins.slice(0, 4).map((admin, index) => (
              <motion.div
                key={admin._id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300"
              >
                <img
                  src={admin.photo.url}
                  alt={admin.name}
                  className="w-32 h-32 md:w-36 md:h-36 object-cover rounded-full border-4 border-yellow-400 mx-auto mb-4 shadow-md"
                />
                <h2 className="text-lg font-semibold text-yellow-300">{admin.name}</h2>
                <p className="text-yellow-500 text-sm">{admin.role}</p>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center py-20">
            <p className="text-gray-400 text-lg">No creators available.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Creator;
