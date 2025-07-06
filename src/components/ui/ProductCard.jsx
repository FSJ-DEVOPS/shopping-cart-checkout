import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="group">
      <div className="relative overflow-hidden">
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
        <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 py-2 px-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button className="w-full text-sm font-medium py-1 hover:text-gray-600">ADD TO CART</button>
        </div>
      </div>
      <div className="mt-4 text-center">
        <Link to={`/product/${product.id}`} className="text-lg font-medium hover:text-gray-600">{product.name}</Link>
        <p className="mt-1 text-gray-700">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;