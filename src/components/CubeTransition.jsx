import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export function CubeTransition({ children }) {
  const location = useLocation();
  const [prevPath, setPrevPath] = useState(location.pathname);
  const [direction, setDirection] = useState(1); // 1 para derecha, -1 para izquierda

  useEffect(() => {
    // Determinar la dirección de la animación comparando las rutas
    const paths = ["/", "/about", "/projects", "/contact"];
    const currentIndex = paths.indexOf(location.pathname);
    const prevIndex = paths.indexOf(prevPath);

    if (currentIndex > prevIndex) {
      setDirection(1); // Giro a la derecha
    } else if (currentIndex < prevIndex) {
      setDirection(-1); // Giro a la izquierda
    }

    setPrevPath(location.pathname);
  }, [location.pathname, prevPath]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={{ 
          rotateY: 90 * direction,
          opacity: 0,
          position: "absolute",
          width: "100%"
        }}
        animate={{ 
          rotateY: 0,
          opacity: 1,
          transition: { duration: 0.5, ease: "easeInOut" }
        }}
        exit={{ 
          rotateY: -90 * direction,
          opacity: 0,
          transition: { duration: 0.5, ease: "easeInOut" }
        }}
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
          backfaceVisibility: "hidden"
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}