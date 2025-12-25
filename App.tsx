
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Packages from './components/Packages';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LegalModal from './components/LegalModal';
import ContactOptionsModal from './components/ContactOptionsModal';
import ProjectDetailModal from './components/ProjectDetailModal';
import { Project } from './types';

export type LegalType = 'privacy' | 'terms' | 'cookies' | null;

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLegal, setActiveLegal] = useState<LegalType>(null);
  const [isContactOptionsOpen, setIsContactOptionsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openContactOptions = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setIsContactOptionsOpen(true);
  };

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <div className="min-h-screen selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar isScrolled={isScrolled} onContactClick={openContactOptions} />
      
      <main>
        <Hero onContactClick={openContactOptions} />
        <About />
        <Services />
        <Projects onProjectClick={handleProjectClick} />
        <Packages />
        <Testimonials />
        <Contact />
      </main>

      <Footer onLegalClick={setActiveLegal} />

      <LegalModal 
        isOpen={!!activeLegal} 
        type={activeLegal} 
        onClose={() => setActiveLegal(null)} 
      />

      <ContactOptionsModal 
        isOpen={isContactOptionsOpen} 
        onClose={() => setIsContactOptionsOpen(false)} 
      />

      <ProjectDetailModal 
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default App;
