import React from 'react';

function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md text-center">
        <h1 className="text-4xl font-bold text-gray-800">404</h1>
        <p className="mt-2 text-lg font-semibold text-gray-600">Page Not Found</p>
        <p className="mt-2 text-sm text-gray-500">The page you are looking for does not exist.</p>
        <h3 className="mt-4 px-4 py-2  text-black font-semibold  ">
          Go Back
        </h3>
      </div>
    </div>
  );
}

export default NotFoundPage;
