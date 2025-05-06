import React from "react";
import { useAuth } from "../context/AuthProvider";

function MyProfile() {
  const { profile } = useAuth();
  console.log(profile?.user);
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="bg-white/10 backdrop-blur-md shadow-xl rounded-2xl overflow-hidden max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-full border border-white/20">
          <div className="relative">
            <img
              src={profile?.user?.photo?.url}
              alt="banner"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 transform translate-y-1/2">
              <img
                src={profile?.user?.photo?.url}
                alt="avatar"
                className="w-24 h-24 rounded-full mx-auto border-4 border-yellow-400"
              />
            </div>
          </div>
          <div className="px-6 py-10 mt-4 text-center text-white">
            <h2 className="text-2xl font-semibold text-yellow-400">
              {profile?.user?.name}
            </h2>
            <p className="text-white/80 mt-2">{profile?.user?.email}</p>
            <p className="text-white/80 mt-2">{profile?.user?.phone}</p>
            <p className="text-white/70 mt-2">{profile?.user?.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
