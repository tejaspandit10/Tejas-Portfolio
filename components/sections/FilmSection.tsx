
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../../constants';

interface FilmSectionProps {
  onBack: () => void;
}

const FilmSection: React.FC<FilmSectionProps> = ({ onBack }) => {
  const filmProjects = PROJECTS.filter(p => p.category === 'film');
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const activeProject = filmProjects.find(p => p.id === selectedId);

  return (
    <motion.div 
      initial={{ opacity: 0, x: 500 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -500 }}
      className="w-full h-full flex flex-col pt-32 pb-16 px-10 overflow-y-auto"
    >
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-5xl font-bold mb-2 uppercase tracking-tighter">MOTION & CINEMA</h2>
          <p className="text-[#d4c3a1] tracking-widest text-xs uppercase">Art Direction • Production Design • Visual Strategy</p>
        </div>
        <button onClick={onBack} className="text-xs tracking-widest opacity-50 hover:opacity-100 uppercase mb-2 border-b border-transparent hover:border-white transition-all">Back to Portals</button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Main Reel / Featured (Aantarpath) */}
        <motion.div 
          onClick={() => setSelectedId(filmProjects[0].id)}
          className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 group cursor-pointer shadow-2xl"
        >
           <img src={filmProjects[0].image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0" alt={filmProjects[0].title} />
           <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-8">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-[1px] bg-[#d4c3a1]" />
                <span className="text-[#d4c3a1] text-xs uppercase tracking-widest">Latest Feature</span>
              </div>
              <h3 className="text-4xl font-bold">{filmProjects[0].title}</h3>
              <p className="max-w-md text-sm opacity-70 mt-2 font-light">{filmProjects[0].description}</p>
           </div>
           <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-md px-4 py-1 rounded-full text-[10px] uppercase tracking-widest border border-white/5">
              Colors Marathi
           </div>
        </motion.div>

        {/* Thumbnail Wall */}
        <div className="grid grid-cols-2 gap-4">
           {filmProjects.slice(1).map((project, idx) => (
             <motion.div 
               key={project.id}
               whileHover={{ y: -5, scale: 1.02 }}
               onClick={() => setSelectedId(project.id)}
               className="relative h-48 rounded-lg overflow-hidden cursor-pointer border border-white/5 group shadow-lg"
             >
                <img src={project.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt={project.title} />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-all p-4 flex flex-col justify-end">
                   <h4 className="text-xs font-bold uppercase tracking-widest mb-1">{project.title}</h4>
                   <p className="text-[10px] opacity-60 italic">{project.role}</p>
                </div>
             </motion.div>
           ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedId && activeProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-8"
          >
            <button 
              onClick={() => setSelectedId(null)}
              className="absolute top-12 right-12 text-white/50 hover:text-white text-3xl"
            >
              ×
            </button>
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="rounded-xl overflow-hidden shadow-[0_0_80px_rgba(212,195,161,0.15)] bg-white/5 border border-white/10">
                {activeProject.videoUrl ? (
                  <video src={activeProject.videoUrl} autoPlay loop muted className="w-full" />
                ) : (
                  <img src={activeProject.image} className="w-full" alt={activeProject.title} />
                )}
              </div>
              <div>
                <span className="text-[#d4c3a1] uppercase tracking-widest text-xs font-bold">{activeProject.year} | {activeProject.role}</span>
                <h3 className="text-5xl font-bold mt-4 mb-6 uppercase tracking-tighter">{activeProject.title}</h3>
                <p className="text-lg leading-relaxed text-white/70 mb-8 font-light italic">"{activeProject.description}"</p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-5 bg-white/5 rounded-xl border border-white/5">
                    <span className="text-[10px] uppercase opacity-40 block mb-2 tracking-[0.2em]">Industry</span>
                    <span className="text-sm font-medium">Broadcast & Digital</span>
                  </div>
                  <div className="p-5 bg-white/5 rounded-xl border border-white/5">
                    <span className="text-[10px] uppercase opacity-40 block mb-2 tracking-[0.2em]">Production</span>
                    <span className="text-sm font-medium">Art Department</span>
                  </div>
                </div>

                <div className="mt-12 flex items-center gap-6">
                   <button className="px-8 py-3 bg-[#d4c3a1] text-black text-xs font-bold uppercase tracking-widest rounded-sm hover:scale-105 transition-transform">
                     Request Reel
                   </button>
                   <span className="text-[10px] opacity-30 uppercase tracking-widest">Confidential IP — Request for full access</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FilmSection;
