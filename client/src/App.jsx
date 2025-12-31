import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AgeGate from './components/AgeGate';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import Catalog from './pages/Catalog';
import Payment from './pages/Payment';
import Contact from './pages/Contact';

function App() {
  const [isVerified, setIsVerified] = useState(false);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const status = localStorage.getItem('pwani_age_verified');
    if (status === 'true') setIsVerified(true);
  }, []);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  return (
    <Router>
      <div className="min-h-screen bg-[#050505] text-white flex flex-col relative">
        {!isVerified && <AgeGate onVerify={() => setIsVerified(true)} />}
        
        <Navbar 
          cartCount={cart.reduce((acc, item) => acc + item.qty, 0)} 
          onCartClick={() => setIsCartOpen(true)} 
        />

        <CartDrawer 
          isOpen={isCartOpen} 
          onClose={() => setIsCartOpen(false)} 
          cart={cart} 
          onRemove={removeFromCart} 
        />

        <main className="flex-grow pt-24">
          <Routes>
            <Route path="/" element={<Catalog addToCart={addToCart} />} />
            <Route path="/payment" element={<Payment />} />
            {/* MATCHED PATH: Ensure this matches the link in your Navbar */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;