import { motion } from "framer-motion";
import { FaGlobe, FaBars, FaTimes } from 'react-icons/fa';
import { useState, useEffect } from "react";

export function Nav_Var() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`sticky top-0 z-50 flex flex-row items-center justify-between transition-all duration-300 w-full py-3 px-4 ${
      isScrolled ? 'backdrop-blur-md' : 'backdrop-blur-sm'
    }`}>
      <div 
        className="flex flex-row items-center gap-3 text-2xl font-bold text-white cursor-pointer hover:text-emerald-400 md:text-3xl"
        onClick={() => scrollToSection('home')}
      >
        <FaGlobe className="text-3xl text-emerald-400" />
        <span className="hidden sm:inline">Web Developer Portfolio</span>
        <span className="sm:hidden">Portfolio</span>
      </div>
      
      {/* Menu PC */}
      <div className="items-center justify-end flex-1 hidden gap-8 md:flex lg:gap-10">            
        <motion.div whileHover={{ scale: 1.05 }}>
          <div 
            className="py-2 text-xl text-white transition-colors cursor-pointer hover:text-emerald-400 whitespace-nowrap lg:text-2xl"
            onClick={() => scrollToSection('about')}
          >
            About
          </div>
        </motion.div>
                
        <motion.div whileHover={{ scale: 1.05 }}>
          <div 
            className="py-2 text-xl text-white transition-colors cursor-pointer hover:text-emerald-400 lg:text-2xl"
            onClick={() => scrollToSection('skills')}
          >
            Skills
          </div>
        </motion.div>
        
        <motion.div whileHover={{ scale: 1.05 }}>
          <div 
            className="py-2 text-xl text-white transition-colors cursor-pointer hover:text-emerald-400 lg:text-2xl"
            onClick={() => scrollToSection('projects')}
          >
            Projects
          </div>
        </motion.div>
        
        <motion.div whileHover={{ scale: 1.05 }}>
          <div 
            className="py-2 text-xl text-white transition-colors cursor-pointer hover:text-emerald-400 lg:text-2xl"
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </div>
        </motion.div>
      </div>

      
      <button 
        className="z-50 text-white md:hidden focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
      </button>

      
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 md:hidden" onClick={toggleMenu} />
      )}

      {/* Menu Telefono */}
      {isMenuOpen && (
        <motion.div 
          className="fixed left-0 z-50 w-screen border-t shadow-lg top-full bg-slate-900 border-slate-700/50 md:hidden"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex flex-col items-center py-6 space-y-6">
            <div 
              className="px-4 py-2 text-xl font-medium text-white transition-colors cursor-pointer hover:text-emerald-400" 
              onClick={() => scrollToSection('about')}
            >
              About
            </div>
            <div 
              className="px-4 py-2 text-xl font-medium text-white transition-colors cursor-pointer hover:text-emerald-400" 
              onClick={() => scrollToSection('skills')}
            >
              Skills
            </div>
            <div 
              className="px-4 py-2 text-xl font-medium text-white transition-colors cursor-pointer hover:text-emerald-400" 
              onClick={() => scrollToSection('projects')}
            >
              Projects
            </div>
            <div 
              className="px-4 py-2 text-xl font-medium text-white transition-colors cursor-pointer hover:text-emerald-400" 
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}