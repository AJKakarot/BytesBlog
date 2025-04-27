import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="spinner-border animate-spin inline-block w-16 h-16 border-4 border-solid border-gray-300 rounded-full border-t-blue-500" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
