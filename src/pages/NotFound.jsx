import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="text-center py-16">
      <h1 className="text-4xl font-bold text-gray-800">404 - Page Not Found</h1>
      <p className="text-gray-600 mt-4">Sorry, the page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
      >
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
