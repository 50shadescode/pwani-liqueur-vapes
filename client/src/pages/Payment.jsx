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
            {copied ? <CheckCircle size={24} /> : <Copy size={24} />}
          </button>
        </div>
        
        <p className="text-sm font-bold text-white uppercase tracking-tight">
          Store Name: <span className="text-[#ECC94B]">{storeName}</span>
        </p>
      </div>

      {/* Steps Grid */}
      <div className="grid gap-4">
        {[
          { step: "01", text: "Go to M-Pesa Menu & Select Lipa na M-Pesa" },
          { step: "02", text: `Select Buy Goods and enter Till: ${tillNumber}` },
          { step: "03", text: "Enter the amount as per your order" },
          { step: "04", text: "Send the M-Pesa confirmation message to us on WhatsApp" },
        ].map((item, index) => (
          <div key={index} className="flex items-center gap-6 bg-[#0F0F0F]/50 border border-[#1F1F1F] p-5 rounded-2xl">
            <span className="text-xl font-black italic text-zinc-800">{item.step}</span>
            <p className="text-sm text-zinc-300 font-medium">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button 
          onClick={() => window.open('https://wa.me/254712345678', '_blank')}
          className="bg-white text-black font-black py-4 px-8 rounded-2xl hover:bg-[#ECC94B] transition-all uppercase tracking-widest text-sm inline-flex items-center gap-3"
        >
          <Smartphone size={18} />
          Confirm via WhatsApp
        </button>
      </div>
    </div>
  );
};

export default Payment;