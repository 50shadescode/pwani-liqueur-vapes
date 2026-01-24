'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ShoppingCart, Search, Flame, Star, ArrowUpDown, X, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from './context/CartContext';
import Image from 'next/image';

const Page = () => {
  const router = useRouter();
  const { addToCart } = useCart();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  // NEW: Backend integration states
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const categories = ["All", "Vapes", "Adult Toys"];

  // NEW: Fetch data from your Express server
  useEffect(() => {
    const fetchCatalog = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || '';
        console.log('Fetching from:', `${apiUrl}/api/products`);
        const response = await fetch(`${apiUrl}/api/products`);
        console.log('Response status:', response.status);
        if (!response.ok) throw new Error("Failed to load catalog");
        const data = await response.json();
        console.log('Received data:', data.length, 'products');
        setProducts(data);
      } catch (err) {
        console.error("Fetch Error:", err);
        setError("Unable to connect to Pwani Servers. Check if backend is running.");
      } finally {
        setLoading(false);
      }
    };
    fetchCatalog();
  }, []);


  const filteredProducts = products
    .filter(p => (activeCategory === "All" || p.category === activeCategory) && p.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === "low") return a.price - b.price;
      if (sortBy === "high") return b.price - a.price;
      return 0;
    });

  // Loading State for UX
  if (loading) return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center">
      <div className="h-12 w-12 border-4 border-[#ECC94B]/20 border-t-[#ECC94B] rounded-full animate-spin mb-4" />
      <p className="text-[#ECC94B] font-black uppercase tracking-[0.3em] text-[10px]">Refreshing Inventory...</p>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* 1. LOCALIZED TRUST SIGNAL */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 bg-[#ECC94B]/5 border border-[#ECC94B]/20 rounded-2xl p-4 flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <div className="h-2 w-2 rounded-full bg-[#25D366] animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#ECC94B]">
            Currently Delivering: Nyali • Bamburi • Mtwapa • Shanzu
          </span>
        </div>
        <div className="hidden md:flex items-center gap-2 text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
          <CheckCircle2 size={14} className="text-[#25D366]" />
          Verified Live Stock
        </div>
      </motion.div>

      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="flex-1">
          <h1 className="text-4xl font-black italic text-[#ECC94B] uppercase tracking-tighter mb-6">Live Inventory</h1>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-[#ECC94B] transition-colors" size={18} />
              <input
                type="text"
                value={searchQuery}
                placeholder="Search premium spirits & vapes..."
                className="w-full bg-[#0F0F0F] border border-[#1F1F1F] rounded-2xl py-4 pl-12 pr-12 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#ECC94B]/50 transition-all shadow-inner"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <X
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 cursor-pointer hover:text-white"
                  size={16}
                />
              )}
            </div>

            <div className="relative">
              <select
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-[#0F0F0F] border border-[#1F1F1F] text-zinc-400 text-[10px] font-bold uppercase tracking-widest py-4 px-8 rounded-2xl appearance-none focus:outline-none focus:border-[#ECC94B] cursor-pointer transition-all pr-12"
              >
                <option value="default">Sort By</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
              </select>
              <ArrowUpDown className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-600 pointer-events-none" size={14} />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all border ${
                activeCategory === cat
                ? "bg-[#ECC94B] text-black border-[#ECC94B] shadow-[0_0_20px_rgba(236,201,75,0.2)]"
                : "bg-transparent text-zinc-500 border-[#1F1F1F] hover:border-zinc-700 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid with MongoDB IDs */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode='popLayout'>
          {filteredProducts.map((product, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: index * 0.05 }}
              key={product._id} // CHANGED: Using MongoDB _id
              className="group bg-[#0F0F0F] border border-[#1F1F1F] rounded-3xl overflow-hidden hover:border-[#ECC94B]/30 transition-all duration-500 flex flex-col shadow-2xl"
            >
              <div className="aspect-square bg-zinc-900/30 overflow-hidden relative p-8 flex items-center justify-center">
                {product.badge && (
                  <div className="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur-md border border-[#ECC94B]/30 px-3 py-1 rounded-full flex items-center gap-1.5">
                    <Flame size={12} className="text-[#ECC94B]" />
                    <span className="text-[9px] font-black uppercase tracking-tighter text-white">{product.badge}</span>
                  </div>
                )}
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="max-h-full max-w-full object-contain opacity-90 transition-all"
                  priority={index < 6} // Prioritize first 6 images
                />
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] font-bold text-[#ECC94B] uppercase tracking-[0.2em]">{product.category}</span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={10} fill={i < product.rating ? "#ECC94B" : "none"} className={i < product.rating ? "text-[#ECC94B]" : "text-zinc-800"} />
                    ))}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white uppercase tracking-tight leading-tight mb-2 group-hover:text-[#ECC94B] transition-colors">
                  {product.name}
                </h3>

                <p className="text-zinc-500 text-[10px] font-medium leading-relaxed uppercase tracking-wide mb-6 flex-grow">
                  {product.desc}
                </p>

                <div className="pt-4 border-t border-zinc-900 flex justify-between items-center mt-auto">
                  <div>
                    <p className="text-[9px] text-zinc-600 uppercase font-black tracking-widest mb-1">Price</p>
                    <p className="text-xl font-black text-white italic">
                      <span className="text-[10px] text-[#ECC94B] not-italic mr-1">KES</span>
                      {product.price.toLocaleString()}
                    </p>
                  </div>

                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => addToCart(product)}
                    className="bg-white text-black p-4 rounded-2xl hover:bg-[#ECC94B] transition-all transform shadow-xl"
                  >
                    <ShoppingCart size={20} fill="currentColor" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Testimonials section remains the same... */}
    </div>
  );
};

export default Page;