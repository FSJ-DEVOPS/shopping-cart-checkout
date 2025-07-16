import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { 
  ShoppingBag, 
  Users, 
  TrendingUp, 
  Package, 
  Plus, 
  Edit, 
  Trash2,
  LogOut,
  BarChart3
} from 'lucide-react';

const AdminDashboard = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');

  React.useEffect(() => {
    if (!isAuthenticated || !user?.isAdmin) {
      navigate('/login');
    }
  }, [isAuthenticated, user, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!isAuthenticated || !user?.isAdmin) {
    return null;
  }

  const stats = [
    {
      name: 'Total Sales',
      value: '$12,345',
      change: '+12%',
      icon: TrendingUp,
      color: 'bg-green-100 text-green-600'
    },
    {
      name: 'Orders',
      value: '234',
      change: '+8%',
      icon: ShoppingBag,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      name: 'Products',
      value: '1,234',
      change: '+3%',
      icon: Package,
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      name: 'Customers',
      value: '567',
      change: '+15%',
      icon: Users,
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  const recentOrders = [
    { id: 'ORD-001', customer: 'John Doe', amount: '$89.99', status: 'Completed' },
    { id: 'ORD-002', customer: 'Jane Smith', amount: '$156.50', status: 'Processing' },
    { id: 'ORD-003', customer: 'Bob Johnson', amount: '$43.25', status: 'Shipped' },
    { id: 'ORD-004', customer: 'Alice Brown', amount: '$234.75', status: 'Pending' }
  ];

  const products = [
    { id: 1, name: 'Classic T-Shirt', price: '$29.99', stock: 45, sales: 123 },
    { id: 2, name: 'Bluetooth Headphones', price: '$89.99', stock: 12, sales: 89 },
    { id: 3, name: 'Leather Bag', price: '$79.99', stock: 8, sales: 67 },
    { id: 4, name: 'Running Shoes', price: '$119.99', stock: 23, sales: 156 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-md">
          <div className="p-6">
            <h1 className="text-xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-sm text-gray-600">Welcome, {user.name}</p>
          </div>
          <nav className="mt-6">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`w-full flex items-center px-6 py-3 text-left hover:bg-gray-50 transition-colors ${
                activeTab === 'dashboard' ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600' : 'text-gray-700'
              }`}
            >
              <BarChart3 className="h-5 w-5 mr-3" />
              Dashboard
            </button>
            <button
              onClick={() => setActiveTab('products')}
              className={`w-full flex items-center px-6 py-3 text-left hover:bg-gray-50 transition-colors ${
                activeTab === 'products' ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600' : 'text-gray-700'
              }`}
            >
              <Package className="h-5 w-5 mr-3" />
              Products
            </button>
            <button
              onClick={() => setActiveTab('orders')}
              className={`w-full flex items-center px-6 py-3 text-left hover:bg-gray-50 transition-colors ${
                activeTab === 'orders' ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600' : 'text-gray-700'
              }`}
            >
              <ShoppingBag className="h-5 w-5 mr-3" />
              Orders
            </button>
            <button
              onClick={() => setActiveTab('customers')}
              className={`w-full flex items-center px-6 py-3 text-left hover:bg-gray-50 transition-colors ${
                activeTab === 'customers' ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600' : 'text-gray-700'
              }`}
            >
              <Users className="h-5 w-5 mr-3" />
              Customers
            </button>
          </nav>
          <div className="absolute bottom-0 w-64 p-6">
            <button
              onClick={handleLogout}
              className="w-full flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <LogOut className="h-5 w-5 mr-3" />
              Logout
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {activeTab === 'dashboard' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Dashboard Overview</h2>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat) => (
                  <div key={stat.name} className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                        <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      </div>
                      <div className={`p-3 rounded-full ${stat.color}`}>
                        <stat.icon className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="mt-4">
                      <span className="text-sm text-green-600">{stat.change} from last month</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Recent Orders */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Orders</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Order ID</th>
                        <th className="text-left py-2">Customer</th>
                        <th className="text-left py-2">Amount</th>
                        <th className="text-left py-2">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentOrders.map((order) => (
                        <tr key={order.id} className="border-b">
                          <td className="py-2 font-medium">{order.id}</td>
                          <td className="py-2">{order.customer}</td>
                          <td className="py-2">{order.amount}</td>
                          <td className="py-2">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              order.status === 'Completed' ? 'bg-green-100 text-green-800' :
                              order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                              order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {order.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'products' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Products</h2>
                <button className="flex items-center px-4 py-2 bg-[rgb(182,215,204)] text-white rounded-lg hover:bg-green-600 transition-colors">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Product
                </button>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Product Name</th>
                        <th className="text-left py-2">Price</th>
                        <th className="text-left py-2">Stock</th>
                        <th className="text-left py-2">Sales</th>
                        <th className="text-left py-2">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((product) => (
                        <tr key={product.id} className="border-b">
                          <td className="py-2 font-medium">{product.name}</td>
                          <td className="py-2">{product.price}</td>
                          <td className="py-2">{product.stock}</td>
                          <td className="py-2">{product.sales}</td>
                          <td className="py-2">
                            <div className="flex space-x-2">
                              <button className="p-1 text-blue-600 hover:text-blue-800">
                                <Edit className="h-4 w-4" />
                              </button>
                              <button className="p-1 text-red-600 hover:text-red-800">
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'orders' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Orders Management</h2>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Order ID</th>
                        <th className="text-left py-2">Customer</th>
                        <th className="text-left py-2">Date</th>
                        <th className="text-left py-2">Amount</th>
                        <th className="text-left py-2">Status</th>
                        <th className="text-left py-2">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentOrders.map((order) => (
                        <tr key={order.id} className="border-b">
                          <td className="py-2 font-medium">{order.id}</td>
                          <td className="py-2">{order.customer}</td>
                          <td className="py-2">2024-01-15</td>
                          <td className="py-2">{order.amount}</td>
                          <td className="py-2">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              order.status === 'Completed' ? 'bg-green-100 text-green-800' :
                              order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                              order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {order.status}
                            </span>
                          </td>
                          <td className="py-2">
                            <button className="text-blue-600 hover:text-blue-800 text-sm">
                              View Details
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'customers' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Customer Management</h2>
              <div className="bg-white rounded-lg shadow-md p-6">
                <p className="text-gray-600">Customer management features coming soon...</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;