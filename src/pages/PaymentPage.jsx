import React from 'react';
import ProductList from '../components/payment/ProductList';
import Address from '../components/payment/Address';
import PaymentOptions from '../components/payment/PaymentOptions';
import Layout from '../components/layout/Layout';

const PaymentPage = () => {
  return (
    <Layout>
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Payment Page
        </h1>
        <h2 className="text-lg text-gray-600 mb-6 text-center">
          Products Proceed For Payment
        </h2>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 bg-white shadow rounded-xl p-5">
            <ProductList />
          </div>
           <div className="flex-1 bg-white shadow rounded-xl p-5">
            <Address />
          </div>
          <div className="flex-1 bg-white shadow rounded-xl p-5">
            <PaymentOptions />
          </div>         
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default PaymentPage;
