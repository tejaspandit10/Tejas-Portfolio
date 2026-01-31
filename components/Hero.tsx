
import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  onEnter: () => void;
}

const Hero: React.FC<HeroProps> = ({ onEnter }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, z: -1000 }}
      animate={{ opacity: 1, z: 0 }}
      exit={{ opacity: 0, scale: 2, filter: 'blur(20px)' }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="w-full h-full flex flex-col items-center justify-center relative px-4 text-center overflow-hidden"
    >
      {/* Background Profile Element (Ghost Image using the new portrait) */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <motion.img 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 3, delay: 0.5 }}
          src="me.jpg" 
          className="absolute right-0 top-0 w-full h-full object-cover object-center blur-[120px] grayscale brightness-50 contrast-125"
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />
      
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="z-10"
      >
        <motion.div 
          initial={{ letterSpacing: '0.5em', opacity: 0 }}
          animate={{ letterSpacing: '0.1em', opacity: 1 }}
          transition={{ duration: 1.5, ease: "circOut" }}
          className="text-xs uppercase tracking-[1em] text-[#d4c3a1] mb-6 block font-medium"
        >
          Art Direction & Production Design
        </motion.div>
        <h1 className="text-6xl md:text-[10rem] font-bold mb-4 drop-shadow-2xl leading-none tracking-tight uppercase">TEJAS PANDIT</h1>
        <p className="text-sm md:text-lg text-[#d4c3a1]/60 tracking-[0.3em] uppercase max-w-2xl mx-auto leading-relaxed mt-6">
          Aantarpath • Radha Kisna • Colors Marathi • NID
        </p>
      </motion.div>

      <motion.button
        onClick={onEnter}
        whileHover={{ scale: 1.05, backgroundColor: 'rgba(212, 195, 161, 1)', color: '#0a0a0a' }}
        whileTap={{ scale: 0.95 }}
        className="mt-20 px-12 py-5 border border-[#d4c3a1]/30 hover:shadow-[0_0_30px_rgba(212,195,161,0.3)] transition-all duration-700 rounded-none tracking-[0.4em] text-[10px] uppercase z-10 backdrop-blur-sm"
      >
        View Portfolio
      </motion.button>

      {/* Ambient particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[1px] h-[50px] bg-gradient-to-b from-transparent via-[#d4c3a1]/10 to-transparent"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: "-10%",
              opacity: 0 
            }}
            animate={{ 
              y: ["-10%", "110%"],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: Math.random() * 5 + 5, 
              repeat: Infinity,
              delay: Math.random() * 10 
            }}
          />
        ))}
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20 text-[8px] tracking-[0.5em] uppercase pointer-events-none">
        Mumbai — India // Est. 2024
      </div>
    </motion.div>
  );
};

export default Hero;
