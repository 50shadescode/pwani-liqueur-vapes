import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AgeGate from './components/AgeGate';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import Catalog from './pages/Catalog';
import Payment from './pages/Payment';
import Contact from './pages/Contact';
import Admin from './pages/Admin'; // NEW: Import the Admin page

function App() {
  const [isVerified, setIsVerified] = useState(false);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const status = localStorage.getItem('pwani_age_verified');
    if (status === 'true') setIsVerified(true);
  }, []);

  // UPDATED: addToCart now uses _id (MongoDB standard)
  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item._id === product._id);
      if (existing) {
        return prev.map(item => 
          item._id === product._id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setIsCartOpen(true);
  };

  // UPDATED: removeFromCart now uses _id
  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item._id !== id));
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
            <Route path="/contact" element={<Contact />} />
            
            {/* NEW ADMIN ROUTE: Your client can access this at /admin */}
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;