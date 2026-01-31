
import React from 'react';
import { motion } from 'framer-motion';
import { TIMELINE } from '../../constants';

const AboutSection: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className="w-full h-full pt-32 px-10 overflow-y-auto"
    >
      <div className="max-w-4xl mx-auto pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-24">
          <div className="sticky top-0">
            <h2 className="text-6xl font-bold leading-tight mb-8 uppercase tracking-tighter">VISIONARY SPACE</h2>
            <div className="relative group">
              {/* Cinematic Crop: Uses object-cover and center position to automatically remove black bars from the screenshot */}
              <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-[#1a1a1a]">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  src="/TejasPortfolio.png" 
                  className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-1000 brightness-110 contrast-125" 
                  alt="Tejas Pandit Portrait" 
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-[#d4c3a1] text-[#0a0a0a] px-6 py-2 rounded-sm text-[10px] font-bold tracking-[0.3em] uppercase shadow-xl z-10">
                Production Designer
              </div>
            </div>
          </div>
          
          <div className="pt-8">
            <p className="text-2xl font-light leading-relaxed mb-8 text-white/90">
              Tejas Pandit is a multidisciplinary creative professional specializing in Art Direction and Production Design.
            </p>
            <p className="text-lg leading-relaxed text-white/60 mb-8">
              With major credits including the art direction for <strong>Aantarpath</strong> on Colors Marathi and production design for the <strong>Radha Kisna</strong> music video, Tejas bridges the gap between traditional Indian spatial design and contemporary cinematic storytelling.
            </p>
            <p className="text-lg leading-relaxed text-white/60 mb-12">
              An alum of the National Institute of Design (NID), he approaches every set as a world-building exercise, ensuring that spatial psychology drives the narrative forward.
            </p>

            <div className="space-y-12">
              <h3 className="text-xs uppercase tracking-[0.4em] text-[#d4c3a1] border-b border-[#d4c3a1]/20 pb-4">Professional Timeline</h3>
              {TIMELINE.map((item, idx) => (
                <div key={idx} className="relative pl-8 border-l border-white/10">
                  <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-[#d4c3a1]" />
                  <span className="text-[#d4c3a1] text-sm font-bold block mb-1">{item.year}</span>
                  <h4 className="text-xl font-bold uppercase tracking-tight">{item.title}</h4>
                  <p className="text-sm opacity-50 mb-2">{item.organization}</p>
                  <p className="text-sm leading-relaxed opacity-70">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-12 rounded-3xl bg-[#d4c3a1] text-[#0a0a0a] flex flex-col md:flex-row justify-between items-center gap-8 shadow-2xl">
           <h3 className="text-3xl font-bold max-w-sm uppercase leading-tight">Crafting visual worlds for high-end productions.</h3>
           <div className="flex gap-4">
              <div className="text-center px-6 border-l border-[#0a0a0a]/20">
                 <span className="text-3xl font-bold">20+</span>
                 <p className="text-[10px] uppercase font-bold tracking-widest">Sets Built</p>
              </div>
              <div className="text-center px-6 border-l border-[#0a0a0a]/20">
                 <span className="text-3xl font-bold">01</span>
                 <p className="text-[10px] uppercase font-bold tracking-widest">Visionary</p>
              </div>
           </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutSection;
