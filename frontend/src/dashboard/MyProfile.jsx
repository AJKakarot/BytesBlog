import React, { useEffect, useState } from "react";
import axios from "axios";

function MyProfile() {
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const { data } = await axios.get("http://localhost:4000/api/users/admins", {
          withCredentials: true,
        });
        setAdmin(data.admins[0]); // Show first admin
      } catch (error) {
        console.log(error);
      }
    };
    fetchAdmin();
  }, []);

  if (!admin) {
    return <p className="text-yellow-400 text-center mt-10">Loading...</p>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="bg-black shadow-lg rounded-2xl overflow-hidden w-full max-w-sm p-6 border-2 border-yellow-500">
        {/* Only Profile Image */}
        <div className="flex flex-col items-center">
          <img
            src={admin.photo.url}
            alt="Admin Profile"
            className="w-28 h-28 rounded-full border-4 border-yellow-500 bg-black p-1 object-cover mb-4"
          />
          <h2 className="text-2xl font-bold text-yellow-400">{admin.name}</h2>
          <div className="mt-4 space-y-2 text-center text-yellow-300">
            <p><span className="font-semibold">Email:</span> {admin.email}</p>
            <p><span className="font-semibold">Phone:</span> {admin.phone}</p>
            <p><span className="font-semibold">Role:</span> {admin.role}</p>
            <p><span className="font-semibold">Joined:</span> {new Date(admin.createdAt).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
