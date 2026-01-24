'use client';

import { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import AgeGate from '../src/components/AgeGate';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import CartDrawer from '../src/components/CartDrawer';
import WhatsAppFloat from '../src/components/WhatsAppFloat';

export default function ClientLayout({ children }) {
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const status = localStorage.getItem('pwani_age_verified');
    if (status === 'true') setIsVerified(true);
  }, []);

  return (
    <CartProvider>
      <div className="min-h-screen bg-[#050505] text-white flex flex-col relative">
        {!isVerified && <AgeGate onVerify={() => setIsVerified(true)} />}

        <Navbar />

        <CartDrawer />

        <main className="flex-grow pt-24">
          {children}
        </main>

        <Footer />
        <WhatsAppFloat />
      </div>
    </CartProvider>
  );
}