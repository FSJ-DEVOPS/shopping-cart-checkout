import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/layout/Layout';

const ProductDetail = () => {
  const { id } = useParams(); // Get product ID from URL
  
  return (
    <Layout>
      <div className="container mx-auto px-6 py-12">
        {/* 
          Product Detail Page
          
          Purpose: Display detailed information about a specific product
          
          Suggested Components to Implement:
          1. Product image gallery
          2. Product information (name, price, description)
          3. Size and color selection
          4. Quantity selector
          5. Add to cart button
          6. Add to wishlist button
          7. Product reviews
          8. Related products
        */}
        <h1 className="text-3xl font-medium mb-8 text-center">Product Detail Page</h1>
        <p className="text-center text-gray-600">This is a placeholder for the Product Detail page content.</p>
        <p className="text-center text-gray-600">Product ID: {id}</p>
      </div>
    </Layout>
  );
};

export default ProductDetail;