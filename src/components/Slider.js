import React from 'react';

function Slider({ data }) {
  return (
    <div className="w-full bg-gradient-to-b from-gray-800 to-gray-900 text-white shadow-lg overflow-hidden hover:shadow-2xl mb-4 transition-shadow duration-300 transform hover:scale-95 border border-amber-100 rounded-lg flex flex-col">
      {/* Product Image */}
      <div className="w-[50%] h-[50%] mx-auto mt-4 bg-gray-800">
        <img
          className="w-full h-full object-cover rounded-t-lg"
          src={data.image} // Ensure this points to your image URL
          alt={data.name}
        />
      </div>

      {/* Card Content */}
      <div className="flex-1 p-4 flex flex-col justify-between">
        {/* Product Name */}
        <h2 className="text-2xl font-bold">{data.name}</h2>

        {/* Product Description */}
        {data.description && (
          <p className="text-gray-300 mb-2">{data.description}</p>
        )}

        {/* Price */}
        <div className="text-2xl font-semibold">
          {data.originalPrice && (
            <span className="line-through text-gray-400 mr-2">
              {data.originalPrice}
            </span>
          )}
          {data.price}
        </div>
      </div>

      {/* Action Button */}
      <div className="mx-auto mb-1">
        {data.description?(<button className="border-2 border-white text-white px-6 py-2 rounded-lg">
          Check out
        </button>):(<button className="border-2 border-white text-white px-6 py-2 rounded-lg">
          Add to Cart
        </button>)}
      </div>
    </div>
  );
}

export default Slider;
