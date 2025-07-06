import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <section className="relative h-[600px] bg-gray-100">
      <div className="absolute inset-0">
        <img 
          src="https://via.placeholder.com/1920x600" 
          alt="Hero background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative container mx-auto px-6 h-full flex items-center">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold mb-4">New Season Arrivals</h1>
          <p className="text-xl mb-8">Discover the latest trends in fashion</p>
          <Link to="/shop">
            <Button variant="primary">SHOP NOW</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;