import React from 'react';

const ExploreOfferings = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Explore millions of offerings tailored to your business needs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="text-center p-6">
            <h3 className="text-5xl font-bold text-blue-600 mb-4">200M+</h3>
            <p className="text-gray-600 text-lg">products</p>
          </div>

          {/* Card 2 */}
          <div className="text-center p-6">
            <h3 className="text-5xl font-bold text-blue-600 mb-4">5,900</h3>
            <p className="text-gray-600 text-lg">product categories</p>
          </div>

          {/* Card 3 */}
          <div className="text-center p-6">
            <h3 className="text-5xl font-bold text-blue-600 mb-4">200K+</h3>
            <p className="text-gray-600 text-lg">suppliers</p>
          </div>

          {/* Card 4 */}
          <div className="text-center p-6">
            <h3 className="text-5xl font-bold text-blue-600 mb-4">200+</h3>
            <p className="text-gray-600 text-lg">countries and regions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreOfferings;