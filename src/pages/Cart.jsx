import React from 'react';
import Layout from '../components/layout/Layout';
import CartBody from '../components/Cart/CartBody';

const Cart = () => {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-12">
        {/* 
          Cart Page
          
          Purpose: Display and manage items in the shopping cart
          
          Suggested Components to Implement:
          1. Cart items list
          2. Quantity adjusters
          3. Remove item buttons
          4. Cart summary
          5. Coupon code input
          6. Checkout button
          7. Continue shopping button
        */}
        <h1 className="text-3xl font-medium mb-8 text-center">Your Cart</h1>
        <CartBody />
      </div>
    </Layout>
  );
};

export default Cart;