"use client";

import React, { useEffect, useState } from 'react';

const AgeGate = ({ onVerify }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Check if user is already verified on mount to avoid layout flashes
    if (localStorage.getItem('pwani_age_verified') === 'true') {
      onVerify();
    }
  }, [onVerify]);

  const handleConfirm = () => {
    localStorage.setItem('pwani_age_verified', 'true');
    onVerify();
  };

  const handleExit = () => {
    window.location.href = "https://www.google.com";
  };

  // Prevent server-side rendering mismatch
  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-neutral-950 flex flex-col items-center justify-center p-6 text-center antialiased">
      <div className="max-w-md w-full px-4 py-16 flex flex-col items-center space-y-12">
        
        {/* Editorial Luxury Branding */}
        <div className="space-y-3">
          <h1 className="text-white text-3xl font-extralight tracking-[0.2em] uppercase">
            Pwani
          </h1>
          <p className="text-neutral-500 text-xs tracking-[0.3em] uppercase font-light">
            Liqueur & Vapes
          </p>
        </div>

        <div className="w-12 h-[1px] bg-neutral-800" />

        {/* Messaging */}
        <div className="space-y-4">
          <h2 className="text-neutral-200 text-sm tracking-[0.15em] uppercase font-light">
            Age Verification
          </h2>
          <p className="text-neutral-400 text-xs tracking-wide leading-relaxed max-w-xs mx-auto font-light">
            You must be of legal smoking and drinking age within your jurisdiction to view this collection.
          </p>
        </div>

        {/* High-End Minimalist Action Buttons */}
        <div className="w-full max-w-xs space-y-4 pt-4">
          <button
            onClick={handleConfirm}
            className="w-full bg-white text-black text-xs tracking-[0.2em] uppercase font-medium py-4 px-6 border border-white hover:bg-transparent hover:text-white transition-all duration-300 ease-out cursor-pointer"
          >
            I am 18 or older
          </button>
          
          <button
            onClick={handleExit}
            className="w-full bg-transparent text-neutral-500 text-xs tracking-[0.2em] uppercase font-light py-3 px-6 hover:text-neutral-300 transition-colors duration-300 cursor-pointer"
          >
            Exit
          </button>
        </div>

        {/* Understated Legal Footer */}
        <p className="text-[10px] text-neutral-600 tracking-widest uppercase font-light pt-8">
          Enjoy Responsibly
        </p>

      </div>
    </div>
  );
};

export default AgeGate;
