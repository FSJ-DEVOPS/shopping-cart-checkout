import React from 'react';
import ProductCard from '../ui/ProductCard';

const FeaturedProducts = () => {
  // Sample data - in a real app, this would come from an API or props
  const products = [
    {
      id: 1,
      name: 'Classic White Shirt',
      price: 49.99,
      image: 'https://via.placeholder.com/600x800',
    },
    {
      id: 2,
      name: 'Black Dress',
      price: 79.99,
      image: 'https://via.placeholder.com/600x800',
    },
    {
      id: 3,
      name: 'Denim Jacket',
      price: 89.99,
      image: 'https://via.placeholder.com/600x800',
    },
    {
      id: 4,
      name: 'Summer Hat',
      price: 29.99,
      image: 'https://via.placeholder.com/600x800',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-medium text-center mb-12">Featured Products</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;