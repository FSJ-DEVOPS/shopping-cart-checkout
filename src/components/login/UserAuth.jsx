import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserAuth = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('login');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    role: 'Buyer'
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activeTab === 'register' && formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (activeTab === 'register' && !formData.termsAccepted) {
      alert("You must accept the terms & conditions.");
      return;
    }
    console.log(activeTab === 'login' ? 'Login' : 'Register', formData);
  };

  const handleAdminLogin = () => {
    navigate("/");
  };
  const handleLogin = () => {
    navigate("/");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e6f0eb] to-[#b7d8cc] font-sans">
      <div className="w-full max-w-6xl bg-white shadow-2xl rounded-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="md:w-1/2 bg-[#b7d8cc] flex flex-col justify-center items-center text-center p-10">
          <h1 className="text-4xl font-bold text-black mb-4">Welcome to ShopVerse</h1>
          <p className="text-black text-sm max-w-sm">
            Securely log in or register to start buying, selling, and growing with us.
          </p>
          <img
            src="https://cdn-icons-png.flaticon.com/512/891/891419.png"
            alt="ecommerce"
            className="w-64 mt-6"
          />
        </div>

        {/* Right Section - Form */}
        <div className="md:w-1/2 p-8 sm:p-12">
          {/* Tabs */}
          <div className="flex justify-center mb-6 border-b border-gray-300">
            <button
              onClick={() => setActiveTab('login')}
              className={`w-1/2 py-2 font-semibold ${
                activeTab === 'login' ? 'text-black border-b-2 border-[#b7d8cc]' : 'text-gray-400'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setActiveTab('register')}
              className={`w-1/2 py-2 font-semibold ${
                activeTab === 'register' ? 'text-black border-b-2 border-[#b7d8cc]' : 'text-gray-400'
              }`}
            >
              Register
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {activeTab === 'register' && (
              <>
                <div>
                  <label className="block text-sm text-gray-700">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full mt-1 px-4 py-2 border rounded-md border-gray-300"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full mt-1 px-4 py-2 border rounded-md border-gray-300"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-700">Role</label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full mt-1 px-4 py-2 border rounded-md border-gray-300"
                  >
                    <option value="Buyer">Buyer</option>
                    <option value="Seller">Seller</option>
                    <option value="Admin">Admin</option>
                  </select>
                </div>
              </>
            )}

            <div>
              <label className="block text-sm text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full mt-1 px-4 py-2 border rounded-md border-gray-300"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="w-full mt-1 px-4 py-2 border rounded-md border-gray-300"
              />
            </div>

            {activeTab === 'register' && (
              <div>
                <label className="block text-sm text-gray-700">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                  className="w-full mt-1 px-4 py-2 border rounded-md border-gray-300"
                />
              </div>
            )}

            <button
              type="submit"
              onClick={handleLogin}
              className="w-full py-2 bg-[#b7d8cc] hover:bg-[#a4c8b8] text-black font-semibold rounded-md"
            >
              {activeTab === 'login' ? 'Login' : 'Register'}
            </button>
          </form>

          {/* Login-only Extras */}
          {activeTab === 'login' && (
            <div className="flex justify-between items-center mt-4 text-sm">
              <button className="text-blue-600 hover:underline">Forgot Password?</button>
              <button
                onClick={handleAdminLogin}
                className="text-blue-600 hover:underline font-semibold"
              >
                Login as Admin
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};//
//
export default UserAuth;

// This code defines a UserAuth component that allows users to log in or register.