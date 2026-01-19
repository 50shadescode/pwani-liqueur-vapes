import React, { useState } from 'react';
import { PackagePlus, Loader2, CheckCircle, Image as ImageIcon, Tag, Hash, Lock, Unlock, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Admin = () => {
  // --- SECURITY STATES ---
  const [password, setPassword] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const MASTER_PASSWORD = "PWANI2026"; // Secure code for your client

  // --- FORM STATES ---
  const [formData, setFormData] = useState({
    name: '', price: '', category: 'Liquor', badge: '', image: '', desc: '', rating: 5, stock: 10
  });
  const [status, setStatus] = useState('idle');

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === MASTER_PASSWORD) {
      setIsAuthorized(true);
    } else {
      alert("Unauthorized: Incorrect Access Code.");
      setPassword("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/products`, {

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', price: '', category: 'Liquor', badge: '', image: '', desc: '', rating: 5, stock: 10 });
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        throw new Error('Failed to add product');
      }
    } catch (err) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  // --- RENDER 1: LOCK SCREEN ---
  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-zinc-900/40 border border-zinc-800/50 p-10 rounded-[2.5rem] text-center backdrop-blur-xl"
        >
          <div className="bg-[#ECC94B]/10 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
            <Lock className="text-[#ECC94B]" size={36} />
          </div>
          <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter mb-2">Owner Access</h2>
          <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-10">Inventory Management Protocol</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              required
              type="password" 
              placeholder="ENTER PIN CODE" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-black/60 border border-zinc-800 rounded-2xl p-6 text-center text-white text-xl tracking-[0.8em] focus:border-[#ECC94B]/50 outline-none transition-all placeholder:tracking-normal placeholder:text-[10px]"
            />
            <button type="submit" className="w-full bg-[#ECC94B] text-black font-black py-5 rounded-2xl uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-[#ECC94B]/10">
              Unlock Dashboard
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  // --- RENDER 2: AUTHORIZED ADMIN PANEL ---
  return (
    <div className="min-h-screen bg-black pt-32 px-6 pb-20">
      <div className="max-w-3xl mx-auto flex justify-end mb-6">
        <button 
          onClick={() => setIsAuthorized(false)} 
          className="bg-zinc-900/50 border border-zinc-800 px-6 py-3 rounded-xl text-zinc-500 hover:text-white hover:border-red-500/50 transition-all text-[10px] font-black uppercase tracking-widest flex items-center gap-2 group"
        >
          <Unlock size={14} className="group-hover:rotate-12 transition-transform" /> Logout Session
        </button>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto bg-zinc-900/30 border border-zinc-800/50 p-8 md:p-12 rounded-[2.5rem] backdrop-blur-xl shadow-2xl"
      >
        <div className="flex items-center gap-6 mb-10">
          <div className="bg-[#ECC94B] p-4 rounded-2xl shadow-[0_0_20px_rgba(236,201,75,0.3)]">
            <PackagePlus className="text-black" size={32} />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-black italic text-white uppercase tracking-tighter">Inventory Manager</h1>
            <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.3em] mt-1 text-[#25D366]">Status: Authorized Session Active</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">
                <Tag size={12} className="text-[#ECC94B]" /> Product Name
              </label>
              <input required type="text" placeholder="e.g. Martell V.S.O.P" className="w-full bg-black/50 border border-zinc-800 rounded-2xl p-5 text-white focus:border-[#ECC94B]/50 transition-all outline-none" onChange={(e) => setFormData({...formData, name: e.target.value})} value={formData.name} />
            </div>
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">
                <Hash size={12} className="text-[#ECC94B]" /> Price (KES)
              </label>
              <input required type="number" placeholder="8500" className="w-full bg-black/50 border border-zinc-800 rounded-2xl p-5 text-white focus:border-[#ECC94B]/50 transition-all outline-none" onChange={(e) => setFormData({...formData, price: e.target.value})} value={formData.price} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">Category</label>
              <select className="w-full bg-black/50 border border-zinc-800 rounded-2xl p-5 text-white focus:border-[#ECC94B]/50 transition-all outline-none appearance-none" onChange={(e) => setFormData({...formData, category: e.target.value})} value={formData.category}>
                <option value="Liquor">Liquor</option>
                <option value="Vapes">Vapes</option>
                <option value="Wellness">Wellness</option>
              </select>
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">Special Badge (Optional)</label>
              <input type="text" placeholder="e.g. Best Seller" className="w-full bg-black/50 border border-zinc-800 rounded-2xl p-5 text-white focus:border-[#ECC94B]/50 transition-all outline-none" onChange={(e) => setFormData({...formData, badge: e.target.value})} value={formData.badge} />
            </div>
          </div>

          <div className="space-y-3">
            <label className="flex items-center gap-2 text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">
              <ImageIcon size={12} className="text-[#ECC94B]" /> Image URL
            </label>
            <input required type="text" placeholder="https://..." className="w-full bg-black/50 border border-zinc-800 rounded-2xl p-5 text-white focus:border-[#ECC94B]/50 transition-all outline-none" onChange={(e) => setFormData({...formData, image: e.target.value})} value={formData.image} />
          </div>

          <div className="space-y-3">
            <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">Description</label>
            <textarea required rows="3" className="w-full bg-black/50 border border-zinc-800 rounded-2xl p-5 text-white focus:border-[#ECC94B]/50 transition-all outline-none resize-none" onChange={(e) => setFormData({...formData, desc: e.target.value})} value={formData.desc} />
          </div>

          <button 
            type="submit" 
            disabled={status === 'loading'} 
            className={`w-full font-black py-6 rounded-[1.5rem] uppercase tracking-[0.3em] text-xs transition-all duration-500 transform active:scale-95 flex justify-center items-center gap-4 ${
              status === 'success' ? 'bg-[#25D366] text-black shadow-[0_0_20px_rgba(37,211,102,0.2)]' : 
              status === 'error' ? 'bg-red-600 text-white' : 
              'bg-[#ECC94B] text-black hover:shadow-[0_0_30px_rgba(236,201,75,0.2)]'
            }`}
          >
            {status === 'loading' ? <Loader2 className="animate-spin" /> : 
             status === 'success' ? <><CheckCircle size={18} /> Catalog Updated</> : 
             status === 'error' ? <><AlertCircle size={18} /> Server Error</> : "Update Pwani Inventory"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Admin;