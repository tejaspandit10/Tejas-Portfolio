
import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../../constants';

interface AdSectionProps {
  onBack: () => void;
}

const AdSection: React.FC<AdSectionProps> = ({ onBack }) => {
  const adProjects = PROJECTS.filter(p => p.category === 'ad');

  return (
    <motion.div 
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      className="w-full h-full pt-32 px-10 overflow-y-auto"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-6xl font-black italic tracking-tighter">ADVERTISEMENTS</h2>
          <button onClick={onBack} className="text-xs tracking-widest opacity-50 hover:opacity-100 uppercase">Close</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {adProjects.map((project) => (
            <motion.div 
              key={project.id}
              whileHover={{ y: -10 }}
              className="bg-[#111] p-6 rounded-2xl border border-white/5 hover:border-[#d4c3a1]/40 transition-colors"
            >
              <div className="relative aspect-video rounded-xl overflow-hidden mb-6">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-[#d4c3a1] text-[#0a0a0a] px-3 py-1 rounded-full text-[10px] font-bold uppercase">
                  Campaign
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <div className="flex gap-4 text-[10px] uppercase tracking-widest text-[#d4c3a1] mb-4 font-bold">
                 <span>Set Design</span>
                 <span>Visual Strategy</span>
                 <span>Production</span>
              </div>
              <p className="text-sm opacity-60 leading-relaxed mb-6">{project.description}</p>
              <div className="flex justify-between items-center">
                 <span className="text-[10px] opacity-30">{project.year}</span>
                 <button className="text-xs font-bold border-b border-white/20 pb-1 hover:border-white transition-all">View Deliverables</button>
              </div>
            </motion.div>
          ))}
          
          <div className="flex items-center justify-center border-2 border-dashed border-white/5 rounded-2xl p-12 text-center opacity-30">
             <p className="text-xs tracking-widest uppercase">More projects loading for 2025...</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AdSection;
