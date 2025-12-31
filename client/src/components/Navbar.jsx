import React from 'react';
import { Link } from 'react-router-dom';
// Added LayoutGrid for the Catalog icon
import { ShoppingCart, CreditCard, MapPin, LayoutGrid } from 'lucide-react'; 

const Navbar = ({ cartCount, onCartClick }) => {
  return (
    <nav className="fixed top-0 w-full z-40 bg-black/80 backdrop-blur-md border-b border-zinc-900 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Brand Logo */}
        <Link to="/" className="text-2xl font-black italic text-[#ECC94B] tracking-tighter uppercase">
          Pwani
        </Link>

        {/* Navigation Menu */}
        <div className="flex gap-6 md:gap-8 items-center">
          {/* Catalog Link - Points to Home */}
          <Link to="/" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-[#ECC94B] transition-colors">
            <LayoutGrid size={14} />
            <span className="hidden sm:inline">Catalog</span>
          </Link>
          
          {/* NEW: Find Us Link - Points to /contact as set in App.jsx */}
          <Link to="/contact" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-[#ECC94B] transition-colors">
            <MapPin size={14} />
            <span className="hidden sm:inline">Find Us</span>
          </Link>

          {/* Payment Link */}
          <Link to="/payment" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-[#ECC94B] transition-colors">
            <CreditCard size={14} />
            <span className="hidden sm:inline">Payment</span>
          </Link>

          {/* Cart Toggle Button */}
          <button 
            onClick={onCartClick} 
            className="relative flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-[#ECC94B] transition-colors ml-2"
          >
            <ShoppingCart size={18} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#ECC94B] text-black text-[8px] font-black h-4 w-4 rounded-full flex items-center justify-center animate-pulse">
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