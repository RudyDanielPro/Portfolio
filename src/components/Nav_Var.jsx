import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function Nav_Var() {
  return (
    <nav className="fixed top-0 left-0 z-50 flex flex-row items-center justify-center w-full h-full gap-6 p-2 space-x-4 text-white md:flex-col md:w-1/6 md:p-4 md:space-x-0 md:space-y-4 bg-slate-950">
      <motion.div whileHover={{ scale: 1.05 }}>
        <Link to="/" className="text-base transition-colors md:text-base hover:text-slate-300">Home</Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.05 }}>
        <Link to="/about" className="text-base transition-colors md:text-base hover:text-slate-300">About Me</Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.05 }}>
        <Link to="/services" className="text-base transition-colors md:text-base hover:text-slate-300">Services</Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.05 }}>
        <Link to="/projects" className="text-base transition-colors md:text-base hover:text-slate-300">Projects</Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.05 }}>
        <Link to="/contact" className="text-base transition-colors md:text-base hover:text-slate-300">Contact</Link>
      </motion.div>
    </nav>
  );
}