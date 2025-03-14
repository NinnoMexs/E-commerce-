import React, { useState } from "react";

const categories = [
  {
    name: "Home Decor",
    subcategories: [],
  },
  {
    name: "Industrial",
    subcategories: [],
  },
  {
    name: "Health & Personal Care",
    subcategories: [],
  },
  {
    name: "Fashion & Beauty",
    subcategories: [],
  },
  {
    name: "Sports & Entertainment",
    subcategories: [
      {
        name: "Gaming In-Ear Headphones",
        image: "/public/images/image1.avif", // Replace with real image URLs
      },
      {
        name: "Noise Cancelling Headphones",
        image: "/public/images/image10.avif",
      },
      {
        name: "Wireless Earbuds",
        image: "/public/images/image21.avif",
      },
    ],
  },
  {
    name: "Tools & Home Improvement",
    subcategories: [],
  },
  {
    name: "Raw Materials",
    subcategories: [],
  },
  {
    name: "Maintenance, Repair & Operations",
    subcategories: [],
  },
];

const MegaMenu4 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <div className="relative">
      {/* Hover Trigger */}
      <div
        className="px-4 py-2 font-semibold cursor-pointer hover:text-orange-500 transition"
        onClick={() => setIsMenuOpen(true)}
        onMouseLeave={() => setIsMenuOpen(false)}
      >
        ☰ All Categories
      </div>

      {/* Mega Menu Dropdown */}
      {isMenuOpen && (
        <div
          className="absolute left-0 top-full w-full bg-white shadow-lg border-t-1 border-gray-200 z-50 flex"
          onMouseEnter={() => setIsMenuOpen(true)}
          onMouseLeave={() => setIsMenuOpen(false)}
        >
          {/* Left Column: Main Categories */}
          <div className="w-1/3 bg-gray-100 p-4 overflow-y-auto">
            <h3 className="font-semibold text-lg mb-2">My Categories</h3>
            <ul>
              {categories.map((category, index) => (
                <li
                  key={index}
                  className={`py-2 px-4 cursor-pointer hover:bg-gray-200 ${
                    activeCategory === category ? "bg-gray-200" : ""
                  }`}
                  onMouseEnter={() => setActiveCategory(category)}
                >
                  {category.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Middle Column: Subcategories */}
          <div className="w-1/3 bg-gray-50 p-4 overflow-y-auto">
            {activeCategory ? (
              <>
                <h3 className="font-semibold text-lg mb-2">{activeCategory.name}</h3>
                <ul>
                  {activeCategory.subcategories.length > 0 ? (
                    activeCategory.subcategories.map((sub, index) => (
                      <li key={index} className="py-2 px-4 cursor-pointer hover:bg-gray-200">
                        {sub.name}
                      </li>
                    ))
                  ) : (
                    <p className="text-gray-500">No subcategories available.</p>
                  )}
                </ul>
              </>
            ) : (
              <p className="text-gray-500">Hover over a category to see details.</p>
            )}
          </div>

          {/* Right Column: Product Images */}
          <div className="w-1/3 p-4 overflow-y-auto">
            {activeCategory && activeCategory.subcategories.length > 0 ? (
              <>
                <h3 className="font-semibold text-lg mb-2">Related Products</h3>
                <div className="grid grid-cols-3 gap-4">
                  {activeCategory.subcategories.map((sub, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <img src={sub.image} alt={sub.name} className="w-16 h-16 rounded-full" />
                      <p className="text-sm text-center">{sub.name}</p>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <p className="text-gray-500">Select a category to see products.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MegaMenu4;
