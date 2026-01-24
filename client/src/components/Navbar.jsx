'use client';

import React from 'react';
import Link from 'next/link';
// Added Settings for the Admin/Management icon
import { ShoppingCart, CreditCard, MapPin, LayoutGrid, Settings } from 'lucide-react';
import { useCart } from '../../app/context/CartContext';

const Navbar = () => {
  const { cart, setIsCartOpen } = useCart();
  const cartCount = cart.reduce((acc, item) => acc + item.qty, 0);
  return (
    <nav className="fixed top-0 w-full z-40 bg-black/80 backdrop-blur-md border-b border-zinc-900 px-6 py-2">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* BRAND LOGO: Using your Pwani-Liquor Vapes Image */}
        <Link href="/" className="flex items-center group py-2">
          <img 
            src="/logo.jpeg" 
            alt="Pwani Liquor & Vapes" 
            className="h-12 md:h-16 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              e.target.style.display = 'none';
              console.error("Logo not found in public/logo.jpeg");
            }}
          />
          {/* Subtle text fallback if needed or brand reinforcement */}
          <span className="hidden xs:block ml-2 text-xl font-black italic text-[#ECC94B] tracking-tighter uppercase lg:hidden">
            Pwani
          </span>
        </Link>

        {/* Navigation Menu */}
        <div className="flex gap-4 md:gap-8 items-center">
          {/* Catalog Link */}
          <Link href="/" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-[#ECC94B] transition-colors">
            <LayoutGrid size={14} />
            <span className="hidden sm:inline">Catalog</span>
          </Link>

          {/* Find Us Link */}
          <Link href="/contact" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-[#ECC94B] transition-colors">
            <MapPin size={14} />
            <span className="hidden sm:inline">Find Us</span>
          </Link>

          {/* Payment Link */}
          <Link href="/payment" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-[#ECC94B] transition-colors">
            <CreditCard size={14} />
            <span className="hidden sm:inline">Payment</span>
          </Link>

          {/* Admin/Management Link */}
          <Link href="/admin" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-[#ECC94B] transition-colors border-l border-zinc-800 pl-4 md:pl-8">
            <Settings size={14} />
            <span className="hidden sm:inline">Manage</span>
          </Link>

          {/* Cart Toggle Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-[#ECC94B] transition-colors ml-2"
          >
            <ShoppingCart size={18} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#ECC94B] text-black text-[8px] font-black h-4 w-4 rounded-full flex items-center justify-center animate-pulse shadow-[0_0_10px_rgba(236,201,75,0.5)]">
                {cartCount}
              </span>
            )}
            <span className="hidden md:inline">Cart</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;