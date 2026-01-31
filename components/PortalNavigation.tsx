
import React from 'react';
import { motion } from 'framer-motion';
import { SectionType } from '../types';

interface PortalNavigationProps {
  onSelect: (section: SectionType) => void;
}

const portals: { id: SectionType; title: string; img: string; subtitle: string }[] = [
  { 
    id: 'films', 
    title: 'Films', 
    subtitle: 'Cinematic Storytelling',
    img: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80' 
  },
  { 
    id: 'ads', 
    title: 'Ads', 
    subtitle: 'Brand Realities',
    img: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80' 
  },
  { 
    id: 'space', 
    title: 'Space', 
    subtitle: 'Architectural Worlds',
    img: 'https://images.unsplash.com/photo-1518005020410-d98ec524982c?auto=format&fit=crop&q=80' 
  },
  { 
    id: 'events', 
    title: 'Events', 
    subtitle: 'Immersive Stages',
    img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80' 
  },
];

const PortalNavigation: React.FC<PortalNavigationProps> = ({ onSelect }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.8, z: -500 }}
      className="w-full h-full flex items-center justify-center relative overflow-hidden px-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-7xl h-3/4">
        {portals.map((portal, idx) => (
          <motion.div
            key={portal.id}
            initial={{ opacity: 0, y: 100, rotateY: 20 }}
            animate={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.8 }}
            whileHover={{ scale: 1.05, translateZ: 50 }}
            onClick={() => onSelect(portal.id)}
            className="group relative cursor-pointer overflow-hidden rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm"
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
            <img 
              src={portal.img} 
              alt={portal.title} 
              className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            
            <div className="absolute bottom-8 left-8 z-20">
              <span className="text-[10px] uppercase tracking-widest text-[#d4c3a1] block mb-2">{portal.subtitle}</span>
              <h3 className="text-3xl font-bold">{portal.title}</h3>
            </div>
            
            <div className="absolute top-8 right-8 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
               <div className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center">
                  <span className="text-xl">→</span>
               </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="absolute bottom-12 text-xs tracking-widest opacity-30">
        SCROLL OR DRAG TO EXPLORE SPATIAL NAVIGATION
      </div>
    </motion.div>
  );
};

export default PortalNavigation;
