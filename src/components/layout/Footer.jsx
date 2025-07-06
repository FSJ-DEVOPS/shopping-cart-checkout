import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-12" style={{ backgroundColor: 'rgb(182,215,204)' }}>
      {/* 
        Footer Component
        
        Purpose: Display footer information, links, and copyright
        
        Suggested Components to Implement:
        1. Logo
        2. Footer navigation
        3. Contact information
        4. Newsletter signup
        5. Social media links
        6. Copyright information
        7. Payment methods icons
      */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Shopverse</h3>
            <p className="text-gray-600">Fashion that speaks to your style.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link to="/shop" className="text-gray-600 hover:text-gray-900">All Products</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Information</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p className="text-gray-600">Email: info@shopverse.com</p>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Shopverse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;