
import React from 'react';
import { motion } from 'framer-motion';
import { SectionType } from '../types';

interface NavbarProps {
  activeSection: SectionType;
  onNavigate: (section: SectionType) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 w-full z-[80] p-8 flex justify-between items-center mix-blend-difference"
    >
      <div 
        className="text-xl font-bold cursor-pointer tracking-widest"
        onClick={() => onNavigate('landing')}
      >
        TEJAS PANDIT
      </div>

      <div className="flex gap-8 text-xs font-medium tracking-widest uppercase opacity-70">
        <button 
          onClick={() => onNavigate('portals')}
          className={`hover:opacity-100 transition-opacity ${activeSection === 'portals' ? 'opacity-100 border-b border-[#d4c3a1] pb-1' : ''}`}
        >
          Work
        </button>
        <button 
          onClick={() => onNavigate('about')}
          className={`hover:opacity-100 transition-opacity ${activeSection === 'about' ? 'opacity-100 border-b border-[#d4c3a1] pb-1' : ''}`}
        >
          About
        </button>
        <button 
          onClick={() => onNavigate('contact')}
          className={`hover:opacity-100 transition-opacity ${activeSection === 'contact' ? 'opacity-100 border-b border-[#d4c3a1] pb-1' : ''}`}
        >
          Contact
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
