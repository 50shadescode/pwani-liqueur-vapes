import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppFloat = () => {
  const phone = "254712345678"; // Replace with your actual number

  return (
    <motion.a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] flex items-center justify-center"
    >
      <MessageCircle size={28} fill="currentColor" />
      <span className="absolute right-full mr-3 bg-black/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-zinc-800">
        Chat with us
      </span>
    </motion.a>
  );
};

export default WhatsAppFloat;