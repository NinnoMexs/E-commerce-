import React from 'react';
import { Link } from 'react-router-dom';

const GetStarted = () => {
  return (
    <div className="bg-amber-900 py-23">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to get started?</h2>
        <p className="text-lg text-white mb-8">
          Explore millions of products from trusted suppliers by signing up today!
        </p>
        <Link to={"/account"}>
        <button className="bg-amber-400 px-15 py-3 text-lg font-semibold rounded-full hover:bg-gray-100 transition duration-300 cursor-pointer">
          Sign up
        </button>
        </Link>
      </div>
    </div>
  );
};

export default GetStarted;