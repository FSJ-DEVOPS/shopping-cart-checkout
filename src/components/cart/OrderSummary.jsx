import React from "react";
import ProductImage from './Product.jpg';

function OrderSummary() {
    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
            <h1 className="text-2xl font-bold mb-6 border-b pb-2">Order Summary</h1>

            <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                <div className="w-40 h-40 overflow-hidden border rounded">
                    <img src={ProductImage} alt="Product" className="object-cover w-full h-full" />
                </div>
                <div className="flex-1">
                    <h2 className="text-lg font-semibold">Marshall Acton III Bluetooth Speaker - Cream</h2>
                    <p className="mt-2">Quantity: <span className="font-medium">2</span></p>
                    <p>Each Price: ₹<span className="font-medium">200</span></p>
                    <p>Total Price: ₹<span className="font-semibold text-green-600">400</span></p>
                </div>
            </div>

            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Delivery Address</h3>
                <p><span className="font-medium">Full Name:</span> Jishnu</p>
                <p><span className="font-medium">Mobile Number:</span> 6987654321</p>
                <p><span className="font-medium">Address:</span> Myleripalayam Village, Othakkal Mandapam, Tamil Nadu 641032</p>
                <div className="grid grid-cols-2 gap-4 mt-2">
                    <p><span className="font-medium">City:</span> Coimbatore</p>
                    <p><span className="font-medium">Pincode:</span> 641032</p>
                    <p><span className="font-medium">State:</span> Tamil Nadu</p>
                    <p><span className="font-medium">Country:</span> India</p>
                </div>
            </div>

            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Payment Information</h3>
                <p><span className="font-medium">Payment Method:</span> Cash on Delivery</p>
                <p><span className="font-medium">Order Status:</span> Payment will be collected upon delivery</p>
            </div>

            <div className="flex justify-between mt-6">
                <button className="px-6 py-2 bg-gray-300 text-black rounded hover:bg-gray-400">
                    Edit
                </button>
                <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                    Place Order
                </button>
            </div>
        </div>
    );
}

export default OrderSummary;
