import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="py-4 px-6 shadow-sm" style={{ backgroundColor: 'rgb(182,215,204)' }}>
      {/* 
        Header Component
        
        Purpose: Display navigation, logo, and user actions
        
        Suggested Components to Implement:
        1. Logo
        2. Navigation menu
        3. Mobile menu toggle
        4. Search icon/form
        5. User account icon/dropdown
        6. Wishlist icon with counter
        7. Cart icon with counter
      */}
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Shopverse</Link>
        
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-500">HOME</Link>
          <Link to="/shop" className="hover:text-gray-500">SHOP</Link>
          <Link to="/blog" className="hover:text-gray-500">BLOG</Link>
          <Link to="/contact" className="hover:text-gray-500">CONTACT</Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Link to="/wishlist" className="hover:text-gray-500">WISHLIST</Link>
          <Link to="/cart" className="hover:text-gray-500">CART</Link>
          <Link to="/login" className="hover:text-gray-500">LOGIN</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;