import React from 'react';
import { Link } from 'react-router-dom';

const CollectionCard = ({ collection }) => {
  return (
    <div className="relative group overflow-hidden">
      <img 
        src={collection.image} 
        alt={collection.title} 
        className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h3 className="text-xl font-medium text-white mb-4">{collection.title}</h3>
          <Link 
            to={`/collection/${collection.id}`}
            className="inline-block bg-white text-black px-6 py-2 hover:bg-gray-100 transition-colors"
          >
            SHOP NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;