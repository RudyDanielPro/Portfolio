import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function Nav_Var() {
  return (
    <nav className="fixed top-0 left-0 z-50 flex flex-row items-center justify-around w-full h-16 gap-4 p-4 md:w-1/6 bg-slate-950 md:flex-col md:justify-center md:gap-8 md:h-full">
      
      {/* Home Link */}
      <motion.div 
        whileHover={{ scale: 1.05 }} 
        className="flex items-center justify-center w-full h-full md:h-auto"
      >
        <Link 
          to="/" 
          className="text-sm text-white transition-colors hover:text-emerald-400 md:text-lg md:py-4"
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
          className="text-sm text-white transition-colors hover:text-emerald-400 md:text-lg md:py-4"
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
          className="text-sm text-white transition-colors hover:text-emerald-400 md:text-lg md:py-4"
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
          className="text-sm text-white transition-colors hover:text-emerald-400 md:text-lg md:py-4"
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
          className="text-sm text-white transition-colors hover:text-emerald-400 md:text-lg md:py-4"
        >
          Contact
        </Link>
      </motion.div>
    </nav>
  );
}