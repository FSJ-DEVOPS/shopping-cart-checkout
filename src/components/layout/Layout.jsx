import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 
        Layout Component
        
        Purpose: Provide consistent layout structure for all pages
        
        Components:
        1. Header - Top navigation and branding
        2. Main content area - Renders the page content
        3. Footer - Bottom information and links
      */}
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;