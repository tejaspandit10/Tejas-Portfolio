
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      className="w-full h-full flex items-center justify-center pt-24 px-10"
    >
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-7xl font-bold mb-8">LET'S<br/>CREATE.</h2>
          <p className="text-xl text-white/50 leading-relaxed mb-12">
            Currently available for select freelance opportunities and full-time creative roles within Art Departments.
          </p>
          
          <div className="space-y-6">
            <div>
              <p className="text-[10px] uppercase tracking-widest opacity-40 mb-2">Social Hub</p>
              <div className="flex gap-6 text-lg font-medium">
                <a href="#" className="hover:text-[#d4c3a1] transition-colors">Instagram</a>
                <a href="#" className="hover:text-[#d4c3a1] transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-[#d4c3a1] transition-colors">Behance</a>
              </div>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest opacity-40 mb-2">Direct Contact</p>
              <p className="text-lg">hello@tejaspandit.design</p>
              <p className="text-lg">+91 98765 43210</p>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/10"
        >
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest opacity-40 block">Name</label>
              <input 
                type="text" 
                placeholder="Tejas Pandit"
                className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-[#d4c3a1] transition-colors placeholder:text-white/10"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest opacity-40 block">Email</label>
              <input 
                type="email" 
                placeholder="art@studio.com"
                className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-[#d4c3a1] transition-colors placeholder:text-white/10"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest opacity-40 block">Message</label>
              <textarea 
                rows={4}
                placeholder="Tell me about your vision..."
                className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-[#d4c3a1] transition-colors placeholder:text-white/10 resize-none"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>
            <button className="w-full py-5 bg-[#d4c3a1] text-[#0a0a0a] font-bold rounded-xl tracking-widest uppercase text-xs hover:scale-[1.02] transition-transform">
              Send Proposal
            </button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactSection;
