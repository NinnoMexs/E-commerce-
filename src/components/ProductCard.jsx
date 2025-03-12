import React from 'react';

function ProductCard({ image, name, price, category, description }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 relative group">
        <div className="relative group">
            {/* Product Image */}
            <img
                src={image}
                alt={name}
                className="w-full h-48 object-cover transition-all duration-300 group-hover:brightness-95"
            />

            
            
            {/* "Add to Cart" Button */}
            <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 text-white font-semibold py-2 px-4 transition-all duration-300 cursor-pointer">
                View product
            </button>
        </div>
        
        {/* Product Details */}
        <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
            <p className="text-gray-600">{category}</p>
            <p className="text-gray-600">{description}</p>
            <p className="mt-2 text-lg font-bold text-blue-500">${price.toFixed(2)}</p>
        </div>
    </div>

  );
}

export default ProductCard;