import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = products.find(p => p.id === parseInt(id));

  // Sample customer reviews
  const customerReviews = [
    {
      id: 1,
      name: "John D.",
      rating: 5,
      date: "December 15, 2023",
      title: "Excellent quality and value",
      review: "This product exceeded my expectations. The quality is outstanding and it's exactly as described. Would definitely recommend!",
      verified: true,
      helpful: 45
    },
    {
      id: 2,
      name: "Sarah M.",
      rating: 4,
      date: "December 10, 2023",
      title: "Great product with minor issues",
      review: "Overall very satisfied with the purchase. The only small issue is the size runs a bit large. Consider ordering one size down.",
      verified: true,
      helpful: 28
    },
    {
      id: 3,
      name: "Mike R.",
      rating: 5,
      date: "December 5, 2023",
      title: "Perfect for my needs",
      review: "Exactly what I was looking for. Fast delivery and great customer service. Will buy again!",
      verified: true,
      helpful: 15
    }
  ];

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
                    className={`w-5 h-5 ${index < Math.floor(product.rating) ? 'fill-current' : 'fill-gray-300'}`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-gray-600">{product.rating} out of 5</span>
            </div>
            <p className="text-gray-600">{product.reviews} reviews</p>
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

          {/* Review Compartment */}
          <div className="mt-8 bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
            <div className="space-y-6">
              {customerReviews.map(review => (
                <div key={review.id} className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <span className="font-medium text-gray-800">{review.name}</span>
                      {review.verified && (
                        <span className="ml-2 text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
                          Verified Purchase
                        </span>
                      )}
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        className={`w-4 h-4 ${index < review.rating ? 'fill-current' : 'fill-gray-200'}`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">{review.title}</h4>
                  <p className="text-gray-600 mb-3">{review.review}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>{review.helpful} people found this helpful</span>
                    <button className="ml-4 text-[rgb(182,215,204)] hover:text-green-600">
                      Helpful
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;