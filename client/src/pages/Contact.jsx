import React from 'react';
import { Phone, MessageCircle, Clock, MapPin, Instagram, ShieldCheck } from 'lucide-react';

const Contact = () => {
  const shopPhone = "254712345678"; // Replace with your actual phone number

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header Section */}
      <header className="text-center mb-16">
        <h1 className="text-4xl font-black italic text-[#ECC94B] uppercase tracking-tighter mb-4 drop-shadow-[0_0_15px_rgba(236,201,75,0.3)]">
          Find Us
        </h1>
        <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.25em]">
          Premium Liqueur & Vape Delivery — Mombasa
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact & Hours Card */}
        <div className="space-y-8">
          <div className="bg-[#0F0F0F] border border-[#1F1F1F] p-8 rounded-3xl shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <MessageCircle size={80} className="text-[#ECC94B]" />
            </div>
            
            <h3 className="text-[#ECC94B] font-black uppercase tracking-widest text-xs mb-8 border-b border-zinc-900 pb-4">
              Direct Contact
            </h3>
            
            <div className="space-y-6">
              {/* Phone Button */}
              <a 
                href={`tel:+${shopPhone}`}
                className="flex items-center gap-5 text-white hover:text-[#ECC94B] transition-all group/item"
              >
                <div className="bg-zinc-900 p-4 rounded-2xl border border-zinc-800 group-hover/item:border-[#ECC94B]/50 shadow-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-zinc-600 text-[9px] font-bold uppercase tracking-widest mb-1">Call for Orders</p>
                  <span className="text-xl font-black tracking-tight">+{shopPhone}</span>
                </div>
              </a>

              {/* WhatsApp Button */}
              <a 
                href={`https://wa.me/${shopPhone}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-5 text-white hover:text-[#25D366] transition-all group/item"
              >
                <div className="bg-zinc-900 p-4 rounded-2xl border border-zinc-800 group-hover/item:border-[#25D366]/50 shadow-lg">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <p className="text-zinc-600 text-[9px] font-bold uppercase tracking-widest mb-1">Instant Chat</p>
                  <span className="text-xl font-black tracking-tight">WhatsApp Us</span>
                </div>
              </a>
            </div>

            <div className="mt-12 pt-8 border-t border-zinc-900">
              <div className="flex items-start gap-4">
                <Clock className="text-[#ECC94B] mt-1" size={20} />
                <div>
                  <h4 className="text-white font-black uppercase text-xs tracking-widest mb-2">Delivery Hours</h4>
                  <p className="text-zinc-400 text-sm font-medium leading-relaxed">
                    Mon — Sun: 10:00 AM — 2:00 AM <br />
                    <span className="text-[#ECC94B] text-[10px] font-bold italic uppercase mt-1 block tracking-tighter">
                      Late night deliveries available on weekends
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Delivery Zones Card */}
        <div className="bg-[#0F0F0F] border border-[#1F1F1F] rounded-3xl p-8 shadow-2xl relative">
          <div className="flex items-center gap-4 mb-8 border-b border-zinc-900 pb-4">
            <div className="bg-[#ECC94B]/10 p-3 rounded-xl">
              <MapPin size={24} className="text-[#ECC94B]" />
            </div>
            <h3 className="font-black uppercase tracking-widest text-xs text-white">Coverage Zones</h3>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-6">
            {['Nyali', 'Bamburi', 'Mtwapa', 'Shanzu', 'Tudor', 'CBD'].map((zone) => (
              <div key={zone} className="flex items-center gap-3 group">
                <div className="h-1.5 w-1.5 rounded-full bg-zinc-800 group-hover:bg-[#ECC94B] transition-colors" />
                <span className="text-zinc-400 font-bold uppercase text-[11px] tracking-widest group-hover:text-white transition-colors">
                  {zone}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-zinc-900/50 rounded-2xl p-6 border border-zinc-800/50">
            <div className="flex items-center gap-3 mb-3">
              <ShieldCheck size={16} className="text-[#ECC94B]" />
              <p className="text-[10px] text-white font-black uppercase tracking-widest">Delivery Policy</p>
            </div>
            <p className="text-[10px] text-zinc-500 uppercase leading-loose font-medium">
              Standard time: 30 - 45 Mins <br />
              Fees vary by distance <br />
              <span className="text-[#ECC94B]">ID Verification required upon arrival</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;