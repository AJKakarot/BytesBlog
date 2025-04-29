import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="spinner-border animate-spin inline-block w-16 h-16 border-4 border-solid border-gray-300 rounded-full border-t-yellow-400" role="status">
        <span className="visually-hidden text-yellow-400">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
