'use client';

import React, { useState, useEffect } from 'react';
import { PackagePlus, Loader2, CheckCircle, Image as ImageIcon, Tag, Hash, Lock, Unlock, AlertCircle, Trash2, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const metadata = {
  title: 'Admin Panel - Pwani Liquor & Vapes',
  description: 'Manage products and inventory for Pwani Liquor & Vapes.',
  robots: 'noindex, nofollow',
};

const Admin = () => {
  // --- SECURITY STATES ---
  const [password, setPassword] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const MASTER_PASSWORD = "PWANI2026"; // Secure code for your client

  // --- FORM STATES ---
  const [formData, setFormData] = useState({
    name: '', price: '', category: 'Liquor', badge: '', image: '', desc: '', rating: 5, stock: 10
  });
  const [status, setStatus] = useState('idle');

  // --- PRODUCTS MANAGEMENT ---
  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === MASTER_PASSWORD) {
      setIsAuthorized(true);
    } else {
      alert("Unauthorized: Incorrect Access Code.");
      setPassword("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || ''}/api/products`, {

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', price: '', category: 'Liquor', badge: '', image: '', desc: '', rating: 5, stock: 10 });
        fetchProducts(); // Refresh the products list
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        throw new Error('Failed to add product');
      }
    } catch (err) {
      console.error('Error adding product:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const fetchProducts = async () => {
    setLoadingProducts(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || ''}/api/products`);
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      }
    } catch (err) {
      console.error('Error fetching products:', err);
    } finally {
      setLoadingProducts(false);
    }
  };

  useEffect(() => {
    if (isAuthorized) {
      fetchProducts();
    }
  }, [isAuthorized]);

  const deleteProduct = async (id) => {
    if (!confirm('Are you sure you want to delete this product?')) return;
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || ''}/api/products/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        fetchProducts();
      }
    } catch (err) {
      console.error('Error deleting product:', err);
    }
  };

  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#0F0F0F] border border-[#1F1F1F] rounded-3xl p-8 w-full max-w-md"
        >
          <div className="text-center mb-8">
            <Lock className="mx-auto mb-4 text-[#ECC94B]" size={48} />
            <h1 className="text-2xl font-black text-white uppercase tracking-tighter">Admin Access</h1>
            <p className="text-zinc-500 text-sm mt-2">Enter access code to continue</p>
          </div>

          <form onSubmit={handleLogin}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Access Code"
              className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#ECC94B] mb-6"
              required
            />
            <button
              type="submit"
              className="w-full bg-[#ECC94B] text-black font-bold py-3 rounded-2xl hover:bg-[#ECC94B]/80 transition-colors"
            >
              Unlock Panel
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-black italic text-[#ECC94B] uppercase tracking-tighter mb-4">
          Admin Panel
        </h1>
        <p className="text-zinc-500 text-xs uppercase tracking-[0.2em]">
          Manage Products & Inventory
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Add Product Form */}
        <div className="bg-[#0F0F0F] border border-[#1F1F1F] rounded-3xl p-8">
          <h2 className="text-[#ECC94B] font-black uppercase tracking-widest text-lg mb-8 border-b border-zinc-900 pb-4">
            Add New Product
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Product Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#ECC94B]"
                required
              />
              <input
                type="number"
                placeholder="Price (KES)"
                value={formData.price}
                onChange={(e) => setFormData({...formData, price: parseInt(e.target.value)})}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#ECC94B]"
                required
              />
            </div>

            <select
              value={formData.category}
              onChange={(e) => setFormData({...formData, category: e.target.value})}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-[#ECC94B]"
            >
              <option value="Vapes">Vapes</option>
              <option value="Adult Toys">Adult Toys</option>
            </select>

            <input
              type="text"
              placeholder="Badge (optional)"
              value={formData.badge}
              onChange={(e) => setFormData({...formData, badge: e.target.value})}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#ECC94B]"
            />

            <input
              type="url"
              placeholder="Image URL"
              value={formData.image}
              onChange={(e) => setFormData({...formData, image: e.target.value})}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#ECC94B]"
              required
            />

            <textarea
              placeholder="Description"
              value={formData.desc}
              onChange={(e) => setFormData({...formData, desc: e.target.value})}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#ECC94B] h-24 resize-none"
              required
            />

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-[#ECC94B] text-black font-bold py-4 rounded-2xl hover:bg-[#ECC94B]/80 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  Adding Product...
                </>
              ) : status === 'success' ? (
                <>
                  <CheckCircle size={20} />
                  Product Added!
                </>
              ) : (
                <>
                  <PackagePlus size={20} />
                  Add Product
                </>
              )}
            </button>
          </form>
        </div>

        {/* Products List */}
        <div className="bg-[#0F0F0F] border border-[#1F1F1F] rounded-3xl p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-[#ECC94B] font-black uppercase tracking-widest text-lg">
              Current Inventory ({products.length})
            </h2>
            <button
              onClick={fetchProducts}
              disabled={loadingProducts}
              className="p-2 hover:bg-zinc-800 rounded-full transition-colors text-[#ECC94B] disabled:opacity-50"
            >
              <RefreshCw size={20} className={loadingProducts ? 'animate-spin' : ''} />
            </button>
          </div>

          <div className="space-y-4 max-h-96 overflow-y-auto">
            {loadingProducts ? (
              <div className="text-center py-8">
                <Loader2 size={32} className="animate-spin mx-auto mb-4 text-[#ECC94B]" />
                <p className="text-zinc-500">Loading products...</p>
              </div>
            ) : products.length === 0 ? (
              <div className="text-center py-8">
                <PackagePlus size={48} className="mx-auto mb-4 text-zinc-600" />
                <p className="text-zinc-500">No products found</p>
              </div>
            ) : (
              products.map((product) => (
                <div key={product._id} className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img src={product.image} alt={product.name} className="w-12 h-12 rounded-lg object-cover" />
                    <div>
                      <p className="text-white font-bold">{product.name}</p>
                      <p className="text-zinc-500 text-sm">KES {product.price.toLocaleString()}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => deleteProduct(product._id)}
                    className="p-2 hover:bg-red-900/20 rounded-full transition-colors text-red-500 hover:text-red-400"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;