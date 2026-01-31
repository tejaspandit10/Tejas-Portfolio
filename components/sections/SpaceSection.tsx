
import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../../constants';

interface SpaceSectionProps {
  onBack: () => void;
}

const SpaceSection: React.FC<SpaceSectionProps> = ({ onBack }) => {
  const spaceProjects = PROJECTS.filter(p => p.category === 'space');

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="w-full h-full pt-32 px-10 overflow-y-auto bg-[#141414]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-baseline border-b border-white/5 pb-8 mb-16">
          <h2 className="text-7xl font-bold">SPACE DESIGN</h2>
          <button onClick={onBack} className="text-xs tracking-widest opacity-50 hover:opacity-100 uppercase">Return</button>
        </div>

        {spaceProjects.map((project, idx) => (
          <div key={project.id} className="mb-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className={`lg:col-span-7 ${idx % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="relative aspect-[16/10] bg-white/5 rounded-sm overflow-hidden border border-white/10"
              >
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-4 py-2 text-[10px] tracking-widest rounded-full border border-white/10 uppercase">
                  Concept Visualization
                </div>
              </motion.div>
            </div>
            
            <div className={`lg:col-span-5 ${idx % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} lg:px-12`}>
              <span className="text-[#d4c3a1] uppercase text-xs tracking-[0.2em] mb-4 block">Exhibition & Spatial Storytelling</span>
              <h3 className="text-4xl font-bold mb-6">{project.title}</h3>
              <p className="text-lg text-white/60 leading-relaxed mb-8">
                {project.description} We utilized modular elements and interactive lighting to create a journey that responds to user movement.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-[1px] bg-[#d4c3a1]/50" />
                  <span className="text-xs uppercase tracking-widest opacity-40">Technical Specs</span>
                </div>
                <div className="grid grid-cols-2 gap-6 text-sm">
                   <div>
                      <p className="opacity-40 mb-1">Materials</p>
                      <p>Concrete, Frosted Glass, LED</p>
                   </div>
                   <div>
                      <p className="opacity-40 mb-1">Scale</p>
                      <p>2400 sq.ft</p>
                   </div>
                </div>
              </div>

              <button className="mt-12 px-8 py-3 border border-white/10 text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-colors rounded-sm">
                View Concept Boards
              </button>
            </div>
          </div>
        ))}
        
        <div className="py-24 border-t border-white/5 text-center">
           <p className="text-xl font-light opacity-50 italic">"Design is not just what it looks like, but how it feels to move through it."</p>
        </div>
      </div>
    </motion.div>
  );
};

export default SpaceSection;
