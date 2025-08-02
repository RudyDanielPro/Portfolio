// Nav_Var.js - Versión modificada
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function Nav_Var() {
  return (
    <nav className="fixed top-0 left-0 z-50 flex flex-row items-center justify-around w-full h-16 gap-2 p-2 text-sm md:text-lg lg:text-xl md:w-1/6 bg-slate-950 md:flex-col md:justify-center md:gap-6 md:h-full md:p-4">
      {/* Home Link */}
      <motion.div 
        whileHover={{ scale: 1.05 }} 
        className="flex items-center justify-center w-full h-full md:h-auto"
      >
        <Link 
          to="/" 
          className="text-white transition-colors hover:text-emerald-400 md:py-2"
        >
          Home
        </Link>
      </motion.div>
      
      {/* About Link */}
      <motion.div 
        whileHover={{ scale: 1.05 }} 
        className="flex items-center justify-center w-full h-full md:h-auto"
      >
        <Link 
          to="/about" 
          className="text-white transition-colors hover:text-emerald-400 md:py-2 whitespace-nowrap"
        >
          About Me
        </Link>
      </motion.div>
      
      {/* Services Link */}
      <motion.div 
        whileHover={{ scale: 1.05 }} 
        className="flex items-center justify-center w-full h-full md:h-auto"
      >
        <Link 
          to="/services" 
          className="text-white transition-colors hover:text-emerald-400 md:py-2"
        >
          Services
        </Link>
      </motion.div>
      
      {/* Projects Link */}
      <motion.div 
        whileHover={{ scale: 1.05 }} 
        className="flex items-center justify-center w-full h-full md:h-auto"
      >
        <Link 
          to="/projects" 
          className="text-white transition-colors hover:text-emerald-400 md:py-2"
        >
          Projects
        </Link>
      </motion.div>
      
      {/* Contact Link */}
      <motion.div 
        whileHover={{ scale: 1.05 }} 
        className="flex items-center justify-center w-full h-full md:h-auto"
      >
        <Link 
          to="/contact" 
          className="text-white transition-colors hover:text-emerald-400 md:py-2"
        >
          Contact
        </Link>
      </motion.div>
    </nav>
  );
}