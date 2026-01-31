
import React from 'react';
import { motion } from 'framer-motion';
import { SectionType } from '../types';

interface MiniMapProps {
  current: SectionType;
  onNavigate: (section: SectionType) => void;
}

const MiniMap: React.FC<MiniMapProps> = ({ current, onNavigate }) => {
  const points: { id: SectionType; label: string }[] = [
    { id: 'films', label: 'Films' },
    { id: 'ads', label: 'Ads' },
    { id: 'space', label: 'Space' },
    { id: 'events', label: 'Events' }
  ];

  return (
    <div className="fixed bottom-10 left-10 z-[90] flex items-end gap-3 group">
      <div className="flex flex-col gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity">
        {points.map(p => (
           <button 
            key={p.id}
            onClick={() => onNavigate(p.id)}
            className={`text-[8px] uppercase tracking-tighter text-left hover:text-[#d4c3a1] transition-colors ${current === p.id ? 'text-[#d4c3a1]' : 'opacity-40'}`}
           >
             {p.label}
           </button>
        ))}
      </div>
      <div className="flex gap-2 p-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10">
        {points.map((p) => (
          <motion.div
            key={p.id}
            onClick={() => onNavigate(p.id)}
            className={`w-2 h-2 rounded-full cursor-pointer transition-colors ${
              current === p.id ? 'bg-[#d4c3a1]' : 'bg-white/20 hover:bg-white/40'
            }`}
            whileHover={{ scale: 1.5 }}
          />
        ))}
      </div>
    </div>
  );
};

export default MiniMap;
