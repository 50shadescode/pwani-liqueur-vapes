'use client';

import React, { useState } from 'react';
import { Copy, CheckCircle, Smartphone, ShieldCheck } from 'lucide-react';

const Payment = () => {
  const [copied, setCopied] = useState(false);
  const [tillData, setTillData] = useState({ tillNumber: "3052763", storeName: "PWANI VAPES" });
  const [loading, setLoading] = useState(false);

  // Using static till data for now

  const tillNumber = tillData.tillNumber;
  const storeName = tillData.storeName;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(tillNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };


  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <header className="text-center mb-12">
        <h1 className="text-3xl font-black italic text-[#ECC94B] uppercase tracking-tighter">
          Secure Payment
        </h1>
        <p className="text-zinc-500 text-xs uppercase tracking-[0.2em] mt-2">
          Lipa na M-Pesa Instructions
        </p>
      </header>


      {/* Till Display Card */}
      <div className="bg-[#0F0F0F] border border-[#1F1F1F] rounded-3xl p-8 mb-8 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4">
           <ShieldCheck className="text-zinc-800" size={40} />
        </div>

        <p className="text-zinc-500 text-[10px] uppercase tracking-widest mb-2 font-bold">
          Buy Goods Till Number
        </p>

        <div className="flex items-center justify-center gap-4 mb-2">
          <span className="text-5xl font-black text-white tracking-tighter">
            {tillNumber}
          </span>
          <button
            onClick={copyToClipboard}
            className="p-2 hover:bg-zinc-800 rounded-full transition-colors text-[#ECC94B]"
          >
            {copied ? <CheckCircle size={20} /> : <Copy size={20} />}
          </button>
        </div>

        <p className="text-zinc-400 text-sm mb-6">
          {storeName}
        </p>

        <div className="bg-zinc-900/50 rounded-2xl p-4 border border-zinc-800">
          <p className="text-zinc-300 text-sm leading-relaxed">
            1. Go to M-Pesa menu on your phone<br/>
            2. Select "Lipa na M-Pesa"<br/>
            3. Choose "Buy Goods and Services"<br/>
            4. Enter Till Number: <strong className="text-[#ECC94B]">{tillNumber}</strong><br/>
            5. Enter amount and complete payment<br/>
            6. You'll receive a confirmation SMS
          </p>
        </div>
      </div>

      {/* Security Notice */}
      <div className="bg-[#ECC94B]/5 border border-[#ECC94B]/20 rounded-2xl p-6 text-center">
        <ShieldCheck className="text-[#ECC94B] mx-auto mb-4" size={32} />
        <h3 className="text-[#ECC94B] font-bold uppercase tracking-widest text-sm mb-2">
          Secure & Trusted
        </h3>
        <p className="text-zinc-400 text-sm">
          All payments are processed securely through M-Pesa. Your order will be confirmed once payment is received.
        </p>
      </div>
    </div>
  );
};

export default Payment;