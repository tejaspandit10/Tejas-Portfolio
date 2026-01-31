
import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../../constants';

interface EventSectionProps {
  onBack: () => void;
}

const EventSection: React.FC<EventSectionProps> = ({ onBack }) => {
  const eventProjects = PROJECTS.filter(p => p.category === 'event');

  return (
    <motion.div 
      initial={{ opacity: 0, filter: 'blur(20px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0 }}
      className="w-full h-full pt-32 px-10 overflow-y-auto"
    >
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 text-center">
          <h2 className="text-5xl md:text-8xl font-bold opacity-10 absolute left-0 right-0 -translate-y-1/2 select-none">INSTALLATIONS</h2>
          <h2 className="text-4xl md:text-6xl font-bold relative z-10">EVENTS & EXHIBITIONS</h2>
          <p className="text-[#d4c3a1] mt-4 tracking-widest text-xs uppercase">Transforming spaces through temporary art</p>
        </header>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {eventProjects.concat(eventProjects).map((project, idx) => (
            <motion.div 
              key={`${project.id}-${idx}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-lg overflow-hidden cursor-crosshair group shadow-xl"
            >
              <img src={project.image} alt={project.title} className="w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                 <h3 className="text-xl font-bold">{project.title}</h3>
                 <p className="text-xs opacity-70 mt-2">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 flex justify-center pb-20">
           <button onClick={onBack} className="px-12 py-4 rounded-full border border-white/10 hover:bg-[#d4c3a1] hover:text-[#0a0a0a] transition-all uppercase tracking-widest text-xs">
             Go Back to Overview
           </button>
        </div>
      </div>
    </motion.div>
  );
};

export default EventSection;
