import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useReviews } from '../context/ReviewContext';
import ReviewList from '../components/ReviewList';
import ReviewForm from '../components/ReviewForm';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { getProductReviews, getProductAverageRating } = useReviews();
  const [showReviewForm, setShowReviewForm] = useState(false);

  const product = products.find(p => p.id === parseInt(id));
  
  // Get reviews and average rating from ReviewContext
  const productReviews = getProductReviews(parseInt(id));
  const averageRating = getProductAverageRating(parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <button
            onClick={() => navigate('/shop')}
            className="bg-[rgb(182,215,204)] text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleBuyNow = () => {
    addToCart(product);
    navigate('/cart');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left side - Product Image */}
        <div className="md:w-1/2">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right side - Product Details */}
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-semibold text-[rgb(182,215,204)] mb-4">
            ${product.price.toFixed(2)}
          </p>
          
          {/* Description */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-gray-600">{product.description}</p>
          </div>

          {/* Rating and Reviews Summary */}
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className={`w-5 h-5 ${index < Math.floor(averageRating) ? 'fill-current' : 'fill-gray-300'}`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-gray-600">{averageRating.toFixed(1)} out of 5</span>
            </div>
            <p className="text-gray-600">{productReviews.length} reviews</p>
          </div>

          {/* Buttons in one row */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-[rgb(182,215,204)] text-white py-3 px-6 rounded-lg hover:bg-green-600 transition duration-200"
            >
              Add to Cart
            </button>
            <button
              onClick={handleBuyNow}
              className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition duration-200"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Review Section */}
      <div className="mt-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Customer Reviews</h2>
          {!showReviewForm && (
            <button 
              onClick={() => setShowReviewForm(true)}
              className="bg-[rgb(182,215,204)] text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-200"
            >
              Write a Review
            </button>
          )}
        </div>
        
        {showReviewForm ? (
          <div className="mb-8">
            <ReviewForm 
              productId={parseInt(id)} 
              onReviewSubmitted={() => setShowReviewForm(false)}
            />
          </div>
        ) : null}
        
        <ReviewList productId={parseInt(id)} />
      </div>
    </div>
  );
};
export default ProductDetail;