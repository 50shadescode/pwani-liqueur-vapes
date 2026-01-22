'use client';

import { useState, useEffect } from 'react';
import Head from 'next/head';
import './globals.css';
import { CartProvider } from './context/CartContext';
import AgeGate from '../src/components/AgeGate';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import CartDrawer from '../src/components/CartDrawer';
import WhatsAppFloat from '../src/components/WhatsAppFloat';

export const metadata = {
  title: 'Pwani Liquor & Vapes - Premium Vape Products & Adult Toys',
  description: 'Discover premium vape products and adult toys at Pwani Liquor & Vapes. Shop our curated collection with fast delivery in Mombasa.',
  keywords: 'vapes, e-cigarettes, adult toys, liqueur vapes, premium vapes, Mombasa, Kenya',
  authors: [{ name: 'Pwani Liquor & Vapes' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  icons: {
    icon: '/logo.jpeg',
  },
  openGraph: {
    title: 'Pwani Liquor & Vapes - Premium Vape Products',
    description: 'Shop premium vape products and adult toys with fast delivery in Mombasa.',
    url: 'https://pwani-liqueur-vapes.vercel.app',
    siteName: 'Pwani Liquor & Vapes',
    images: [
      {
        url: '/logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Pwani Liquor & Vapes Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pwani Liquor & Vapes - Premium Vape Products',
    description: 'Shop premium vape products and adult toys in Mombasa.',
    images: ['/logo.jpeg'],
  },
  verification: {
    google: 'your-google-site-verification-code', // Replace with actual code
  },
};

export default function RootLayout({ children }) {
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const status = localStorage.getItem('pwani_age_verified');
    if (status === 'true') setIsVerified(true);
  }, []);

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Pwani Liquor & Vapes",
              "url": "https://pwani-liqueur-vapes.vercel.app",
              "logo": "https://pwani-liqueur-vapes.vercel.app/logo.jpeg",
              "description": "Premium vape products and adult toys with fast delivery in Mombasa.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Mombasa",
                "addressCountry": "KE"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+254726063889",
                "contactType": "customer service",
                "availableLanguage": "English"
              }
            }),
          }}
        />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </head>
      <body>
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
      </body>
    </html>
  );
}