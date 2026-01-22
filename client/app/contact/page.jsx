import React from 'react';
import { Phone, MessageCircle, Clock, MapPin, Instagram, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Contact Us - Pwani Liquor & Vapes | Find Us in Mombasa',
  description: 'Get in touch with Pwani Liquor & Vapes for premium vape products and adult toys delivery in Mombasa. Call or WhatsApp for orders and inquiries.',
  keywords: 'contact Pwani Liquor Vapes, Mombasa delivery, vape store contact, adult toys contact',
  alternates: {
    canonical: 'https://pwani-liqueur-vapes.vercel.app/contact',
  },
  openGraph: {
    title: 'Contact Pwani Liquor & Vapes - Mombasa Delivery',
    description: 'Reach out for premium vape products and adult toys delivery in Mombasa.',
    url: 'https://pwani-liqueur-vapes.vercel.app/contact',
    siteName: 'Pwani Liquor & Vapes',
    images: [
      {
        url: '/logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Pwani Liquor & Vapes Contact',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Pwani Liquor & Vapes',
    description: 'Get in touch for vape products and adult toys in Mombasa.',
    images: ['/logo.jpeg'],
  },
};

const Contact = () => {
  const shopPhone = "254726063889"; // Updated phone number

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
                className="flex items-center gap-5 text-white hover:text-[#ECC94B] transition-all group/item"
              >
                <div className="bg-[#25D366] p-4 rounded-2xl shadow-lg group-hover/item:scale-105 transition-transform">
                  <MessageCircle size={24} fill="white" />
                </div>
                <div>
                  <p className="text-zinc-600 text-[9px] font-bold uppercase tracking-widest mb-1">WhatsApp Orders</p>
                  <span className="text-xl font-black tracking-tight">+{shopPhone}</span>
                </div>
              </a>
            </div>
          </div>

          {/* Hours Card */}
          <div className="bg-[#0F0F0F] border border-[#1F1F1F] p-8 rounded-3xl shadow-2xl">
            <h3 className="text-[#ECC94B] font-black uppercase tracking-widest text-xs mb-8 border-b border-zinc-900 pb-4 flex items-center gap-2">
              <Clock size={16} />
              Operating Hours
            </h3>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-zinc-400 text-sm">Monday - Friday</span>
                <span className="text-white font-bold">8:00 AM - 10:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-400 text-sm">Saturday</span>
                <span className="text-white font-bold">9:00 AM - 11:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-400 text-sm">Sunday</span>
                <span className="text-white font-bold">10:00 AM - 8:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Delivery Areas & Trust Signals */}
        <div className="space-y-8">
          {/* Delivery Areas */}
          <div className="bg-[#0F0F0F] border border-[#1F1F1F] p-8 rounded-3xl shadow-2xl">
            <h3 className="text-[#ECC94B] font-black uppercase tracking-widest text-xs mb-8 border-b border-zinc-900 pb-4 flex items-center gap-2">
              <MapPin size={16} />
              Delivery Areas
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {["Nyali", "Bamburi", "Mtwapa", "Shanzu", "Kizingo", "Mikindani"].map(area => (
                <div key={area} className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-[#ECC94B]"></div>
                  <span className="text-zinc-400 text-sm">{area}</span>
                </div>
              ))}
            </div>

            <p className="text-zinc-600 text-xs mt-6 leading-relaxed">
              Fast, discreet delivery within 30-60 minutes. Free delivery on orders over KES 5,000.
            </p>
          </div>

          {/* Trust Signals */}
          <div className="bg-[#0F0F0F] border border-[#1F1F1F] p-8 rounded-3xl shadow-2xl">
            <h3 className="text-[#ECC94B] font-black uppercase tracking-widest text-xs mb-8 border-b border-zinc-900 pb-4 flex items-center gap-2">
              <ShieldCheck size={16} />
              Why Choose Us
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <ShieldCheck size={16} className="text-[#ECC94B] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-bold text-sm mb-1">100% Discreet Packaging</p>
                  <p className="text-zinc-600 text-xs">Your privacy is our priority</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck size={16} className="text-[#ECC94B] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-bold text-sm mb-1">Authentic Products</p>
                  <p className="text-zinc-600 text-xs">Only genuine, premium brands</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck size={16} className="text-[#ECC94B] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-bold text-sm mb-1">24/7 Customer Support</p>
                  <p className="text-zinc-600 text-xs">Always here to help</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;