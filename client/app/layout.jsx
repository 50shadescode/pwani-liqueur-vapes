import './globals.css';
import ClientLayout from './ClientLayout';

export const metadata = {
  title: 'Pwani Liquor & Vapes - Premium Vape Products & Adult Toys',
  description: 'Discover premium vape products and adult toys at Pwani Liquor & Vapes. Shop our curated collection with fast delivery in Mombasa.',
  keywords: 'vapes, e-cigarettes, adult toys, liqueur vapes, premium vapes, Mombasa, Kenya',
  authors: [{ name: 'Pwani Liquor & Vapes' }],
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

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}