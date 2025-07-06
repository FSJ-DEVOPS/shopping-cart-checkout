import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseClasses = 'px-6 py-2 rounded font-medium transition-colors duration-200';
  
  const variants = {
    primary: 'bg-black text-white hover:bg-gray-800',
    secondary: 'bg-white text-black border border-black hover:bg-gray-100',
    outline: 'bg-transparent text-black border border-black hover:bg-gray-100',
  };
  
  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;