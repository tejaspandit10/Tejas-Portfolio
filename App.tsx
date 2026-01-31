
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionType } from './types';
import Hero from './components/Hero';
import PortalNavigation from './components/PortalNavigation';
import FilmSection from './components/sections/FilmSection';
import AdSection from './components/sections/AdSection';
import SpaceSection from './components/sections/SpaceSection';
import EventSection from './components/sections/EventSection';
import AboutSection from './components/sections/AboutSection';
import ContactSection from './components/sections/ContactSection';
import Navbar from './components/Navbar';
import MiniMap from './components/MiniMap';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionType>('landing');
  const [isNavigating, setIsNavigating] = useState(false);

  const navigateTo = useCallback((section: SectionType) => {
    setIsNavigating(true);
    setActiveSection(section);
    setTimeout(() => setIsNavigating(false), 1200);
  }, []);

  // Global cursor movement effect for the background 3D feel
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative w-screen h-screen bg-[#0a0a0a] overflow-hidden text-[#f0f0f0]">
      {/* Background Ambience */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30 transition-transform duration-1000 ease-out"
        style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
      >
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#d4c3a1] rounded-full blur-[180px] opacity-20" />
        <div className="absolute bottom-1/4 right-1/4 w-[800px] h-[800px] bg-[#3a3028] rounded-full blur-[250px] opacity-20" />
      </div>

      <Navbar activeSection={activeSection} onNavigate={navigateTo} />
      
      {activeSection !== 'landing' && <MiniMap current={activeSection} onNavigate={navigateTo} />}

      <main className="relative w-full h-full perspective-stage">
        <AnimatePresence mode="wait">
          {activeSection === 'landing' && (
            <Hero key="landing" onEnter={() => navigateTo('portals')} />
          )}
          {activeSection === 'portals' && (
            <PortalNavigation key="portals" onSelect={navigateTo} />
          )}
          {activeSection === 'films' && (
            <FilmSection key="films" onBack={() => navigateTo('portals')} />
          )}
          {activeSection === 'ads' && (
            <AdSection key="ads" onBack={() => navigateTo('portals')} />
          )}
          {activeSection === 'space' && (
            <SpaceSection key="space" onBack={() => navigateTo('portals')} />
          )}
          {activeSection === 'events' && (
            <EventSection key="events" onBack={() => navigateTo('portals')} />
          )}
          {activeSection === 'about' && (
            <AboutSection key="about" />
          )}
          {activeSection === 'contact' && (
            <ContactSection key="contact" />
          )}
        </AnimatePresence>
      </main>

      {/* Transition Overlay */}
      {isNavigating && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-[#0a0a0a]/80 backdrop-blur-md pointer-events-none"
        />
      )}
    </div>
  );
};

export default App;
