import React from 'react';

function PaymentOptions() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl mx-auto">
      <h2 className="text-lg font-semibold mb-4">Select Payment Method</h2>
      <ul className="space-y-4">
        <li className="flex items-center gap-2">
          <input type="radio" name="payment" value="cod" />
          <span>Cash on Delivery</span>
        </li>
        <li>
          <div className="flex items-center gap-2">
            <input type="radio" name="payment" value="upi" />
            <span>Pay Using UPI</span>
          </div>
          <ul className="ml-6 mt-2 space-y-2">
            <li>
              <input
                type="text"
                placeholder="Enter UPI ID"
                className="w-full border px-3 py-2 rounded"
              />
            </li>
            <li>
              <select className="w-full border px-3 py-2 rounded">
                <option value="">Select UPI App</option>
                <option value="Google Pay">Google Pay</option>
                <option value="PhonePe">PhonePe</option>
                <option value="Paytm">Paytm</option>
                <option value="Amazon Pay">Amazon Pay</option>
                <option value="Other">Other UPI</option>
              </select>
            </li>
          </ul>
        </li>
        <li>
          <div className="flex items-center gap-2">
            <input type="radio" name="payment" value="card" />
            <span>Debit / Credit / ATM Card</span>
          </div>
          <ul className="ml-6 mt-2 space-y-2">
            <li>
              <input
                type="text"
                placeholder="Card Number"
                className="w-full border px-3 py-2 rounded"
              />
            </li>
            <li>
              <input
                type="text"
                placeholder="Valid Through (MM/YY)"
                className="w-full border px-3 py-2 rounded"
              />
            </li>
            <li>
              <input
                type="password"
                placeholder="CVV"
                className="w-full border px-3 py-2 rounded"
              />
            </li>
          </ul>
        </li>
        <li>
          <div className="flex items-center gap-2">
            <input type="radio" name="payment" value="netbanking" />
            <span>Net Banking</span>
          </div>
          <ul className="ml-6 mt-2">
            <li>
              <select className="w-full border px-3 py-2 rounded">
                <option value="">Select Bank</option>
                <option value="HDFC">HDFC Bank</option>
                <option value="ICICI">ICICI Bank</option>
                <option value="IOB">IOB</option>
                <option value="SBI">State Bank Of India</option>
                <option value="Axis">Axis Bank</option>
                <option value="Indian">Indian Bank</option>
                <option value="others">Other bank</option>
              </select>
            </li>
          </ul>
        </li>
        <li>
          <button className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800">
            Place Order
          </button>
        </li>

      </ul>
    </div>
  );
}

export default PaymentOptions;
