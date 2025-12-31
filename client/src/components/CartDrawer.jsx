import React from 'react';
import { X, Trash2, MessageCircle, ShoppingBag } from 'lucide-react';

const CartDrawer = ({ isOpen, onClose, cart, onRemove }) => {
  // FIXED: No more .replace() needed because item.price is already a number
  const total = cart.reduce((acc, item) => {
    return acc + (item.price * item.qty);
  }, 0);

  // Formats the message for WhatsApp
  const sendWhatsApp = () => {
    // We use .toLocaleString() here to add commas back for the text message display
    const itemsList = cart.map(item => `- ${item.qty}x ${item.name} (KES ${item.price.toLocaleString()})`).join('\n');
    const message = `*NEW ORDER - PWANI LIQUEUR & VAPES*\n\n*Order Details:*\n${itemsList}\n\n*TOTAL: KES ${total.toLocaleString()}*\n\n_Please confirm delivery location and availability._`;
    
    // Replace with your actual business number
    const whatsappUrl = `https://wa.me/254712345678?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Dark Overlay - Clicking this also closes the cart */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose} 
      />

      {/* Drawer Panel */}
      <div className="relative w-full max-w-md bg-[#0F0F0F] border-l border-[#1F1F1F] h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="p-6 border-b border-[#1F1F1F] flex justify-between items-center bg-black">
          <div className="flex items-center gap-3">
            <ShoppingBag className="text-[#ECC94B]" size={20} />
            <h2 className="text-xl font-black italic text-white uppercase tracking-tighter">Your Cart</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-zinc-900 rounded-full text-zinc-500 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Cart Items List */}
        <div className="flex-grow overflow-y-auto p-6 space-y-4">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <p className="text-zinc-600 uppercase tracking-widest text-[10px] font-bold">Your cart is empty</p>
              <button onClick={onClose} className="mt-4 text-[#ECC94B] text-xs font-bold uppercase underline">Start Shopping</button>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.id} className="flex gap-4 bg-zinc-900/30 p-4 rounded-2xl border border-zinc-800/50 group">
                <div className="flex-grow">
                  <h4 className="font-bold text-white uppercase text-xs tracking-tight">{item.name}</h4>
                  <p className="text-[#ECC94B] text-[10px] font-black italic mt-1">
                    {/* FIXED: Using .toLocaleString() for display only */}
                    {item.qty} x KES {item.price.toLocaleString()}
                  </p>
                </div>
                <button 
                  onClick={() => onRemove(item.id)} 
                  className="text-zinc-700 hover:text-red-500 transition-colors self-center p-2"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer with Total and WhatsApp Checkout */}
        {cart.length > 0 && (
          <div className="p-8 border-t border-[#1F1F1F] bg-black">
            <div className="flex justify-between items-center mb-6">
              <span className="text-zinc-500 uppercase tracking-widest text-[10px] font-bold">Estimated Total</span>
              <span className="text-2xl font-black text-[#ECC94B] italic">KES {total.toLocaleString()}</span>
            </div>
            
            <button 
              onClick={sendWhatsApp}
              className="w-full bg-white text-black font-black py-4 rounded-2xl flex items-center justify-center gap-3 uppercase tracking-widest text-sm hover:bg-[#ECC94B] transition-all transform active:scale-95 shadow-[0_0_30px_rgba(236,201,75,0.2)]"
            >
              <MessageCircle size={20} fill="currentColor" />
              Order on WhatsApp
            </button>
            <p className="text-[9px] text-zinc-700 text-center mt-4 uppercase tracking-widest font-medium">
              Discreet Delivery within Mombasa
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;