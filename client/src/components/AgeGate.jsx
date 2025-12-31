import React from 'react';

const AgeGate = ({ onVerify }) => {
  const handleConfirm = () => {
    // Save verification to browser storage to persist across sessions
    localStorage.setItem('pwani_age_verified', 'true');
    // Notify the parent App component that verification is complete
    onVerify();
  };

  const handleExit = () => {
    // Redirect minors to a neutral site to prevent access
    window.location.href = "https://www.google.com";
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center p-6 text-center">
      <div className="max-w-md w-full bg-[#0F0F0F] border border-[#1F1F1F] p-8 md:p-12 rounded-3xl shadow-2xl animate-in fade-in zoom-in duration-500">
        
        {/* Branding - Bold and Italicized for a premium feel */}
        <h2 className="text-6xl font-black italic text-[#ECC94B] tracking-tighter mb-2">
          PWANI
        </h2>
        <p className="text-[10px] text-zinc-500 uppercase tracking-[0.4em] mb-8 font-medium">
          Mombasa, Kenya
        </p>
        
        <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-widest">
          Legal Age Verification
        </h3>
        
        <p className="text-zinc-400 text-sm mb-10 leading-relaxed">
          Access is restricted to individuals of legal age. 
          This site features <span className="text-white font-semibold">liquor, vapes, and intimate lifestyle products</span>. 
          By entering, you confirm you are <span className="text-[#ECC94B] font-bold">18 years or older</span>.
        </p>
        
        <div className="flex flex-col gap-4">
          <button 
            onClick={handleConfirm}
            className="w-full bg-white text-black font-black py-4 rounded-xl hover:bg-[#ECC94B] transition-all transform active:scale-95 uppercase tracking-widest shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            I am 18+ Enter
          </button>
          
          <button 
            onClick={handleExit}
            className="text-zinc-600 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors"
          >
            Exit Site
          </button>
        </div>

        {/* Responsible Use Disclaimer Footer */}
        <div className="mt-12 pt-6 border-t border-[#1F1F1F]">
          <p className="text-[9px] text-zinc-700 uppercase tracking-widest leading-loose">
            🔞 18+ Only • Discreet Delivery • Quality Guaranteed <br />
            Drink and Vape Responsibly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AgeGate;