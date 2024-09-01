import React from 'react';

function Slider({ data }) {
  return (
    <div className="w-full bg-gradient-to-b from-gray-800 to-gray-900 text-white shadow-lg overflow-hidden hover:shadow-2xl mb-4 transition-shadow duration-300 transform hover:scale-95 border border-amber-100 rounded-lg">
      {/* Card Container */}
      <div className="flex items-start">
        {/* Product Image */}
        <div className="w-1/3 bg-gray-800 p-2">
          <img
            className="w-full h-full object-cover rounded-l-lg"
            src={data.image} // Ensure this points to your image URL
            alt={data.name}
          />
        </div>

        {/* Card Content */}
        <div className="w-2/3 p-4">
          {/* Product Name */}
          <h2 className="text-2xl font-bold mb-2">{data.name}</h2>

          {/* Product Description */}
          {data.description && (
            <p className="text-gray-300 mb-4">{data.description}</p>
          )}

          {/* Price */}
          <div className="text-2xl font-semibold mb-4">
            {data.originalPrice && (
              <span className="line-through text-gray-400 mr-2">
                {data.originalPrice}
              </span>
            )}
            {data.price}
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="flex items-center justify-center p-4">
        <button className="border-2 border-white text-white px-6 py-2 rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:bg-gradient-to-l hover:from-purple-600 hover:to-red-600 transition duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Slider;
