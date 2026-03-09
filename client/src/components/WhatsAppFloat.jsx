import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  const phone = "254712345678"; // Replace with your actual number

  return (
    <a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] flex items-center justify-center hover:scale-110 active:scale-95 transition-transform"
    >
      <MessageCircle size={28} fill="currentColor" />
      <span className="absolute right-full mr-3 bg-black/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest py-2 px-4 rounded-lg opacity-0 hover:opacity-100 transition-opacity whitespace-nowrap border border-zinc-800">
        Chat with us
      </span>
    </a>
  );
};

export default WhatsAppFloat;