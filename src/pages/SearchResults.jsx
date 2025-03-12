// SearchResults.js
import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { products } from '../components/products'; // Import the products array

const SearchResults = () => {
  const location = useLocation();
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Extract the search query from the URL
    const query = new URLSearchParams(location.search).get('q');
    console.log("Search Query:", query); // Log the search query
    if (query) {
      // Filter products based on the search query
      const results = products.filter((product) =>
        product.name.toLowerCase().includes(query.trim().toLowerCase())
      );
      console.log("Search Results:", results); // Log the search results
      setSearchResults(results);
    }
  }, [location.search]);

  return (
    <div className="container mx-auto px-4 py-7">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Search Results
      </h2>
      {searchResults.length === 0 ? (
        <p className="text-center text-gray-600">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {searchResults.map((product) => (
            <div
              key={product.id}
              className="border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600">${product.price}</p>
                <Link
                  to={`/products/${product.id}`}
                  className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;