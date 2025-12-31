import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-zinc-900 pt-12 pb-8 px-6 mt-auto">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-xl font-black italic text-[#ECC94B] mb-4 uppercase">Pwani Vapes & Liquor</h2>
        
        <div className="bg-zinc-950 border border-zinc-900 p-6 rounded-2xl max-w-2xl mx-auto mb-8">
          <p className="text-zinc-500 text-[10px] uppercase tracking-widest leading-loose">
            🔞 <span className="text-white font-bold text-xs">Strictly 18+ Only</span>. 
            We do not sell tobacco or alcohol products to minors. 
            Verification is required for all local deliveries in Mombasa. 
            Please consume responsibly.
          </p>
        </div>
        
        <p className="text-zinc-700 text-[9px] uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Pwani Retail. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;