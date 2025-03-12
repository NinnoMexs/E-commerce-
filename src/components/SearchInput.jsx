import React, { useState, useCallback } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import debounce from "lodash.debounce"; // Import debounce

function SearchInput() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const toggleSearch = () => {
    setIsExpanded(!isExpanded);
  };

  // Debounced search function
  const debouncedSearch = useCallback(
    debounce((query) => {
      if (query.trim()) {
        navigate(`/search?q=${encodeURIComponent(query)}`);
      }
    }, 300), // 300ms delay
    [navigate]
  );

  const handleSearch = (e) => {
    e.preventDefault();
    debouncedSearch(searchQuery); // Trigger the debounced search
  };

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    debouncedSearch(query); // Trigger the debounced search on input change
  };

  return (
    <div className="relative">
      {/* Search Icon (Visible when search bar is collapsed) */}
      {!isExpanded && (
        <button
          onClick={toggleSearch}
          className="text-gray-800 hover:text-blue-500 focus:outline-none"
        >
          <FaSearch className="cursor-pointer" />
        </button>
      )}

      {/* Expanded Search Bar (Covers the top of the screen like a megamenu) */}
      {isExpanded && (
        <div className="fixed inset-x-0 top-0 bg-white z-50 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-9">
            <form onSubmit={handleSearch} className="flex items-center">
              {/* Input Field with Search Icon */}
              <div className="relative flex-grow">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  value={searchQuery}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-all duration-300"
                  autoFocus // Automatically focus the input when expanded
                />
              </div>
              {/* Close Button (X) */}
              <button
                type="button"
                onClick={toggleSearch}
                className="ml-4 text-gray-800 hover:text-blue-500 focus:outline-none"
              >
                <FaTimes className="w-6 h-6" />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchInput;