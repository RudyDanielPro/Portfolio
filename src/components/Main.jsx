import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Main() {
    // Configuración de animaciones
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { 
                duration: 0.8,
                ease: "easeOut"
            } 
        }
    };

    const staggerContainer = {
        visible: {
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    // Textos para el efecto de reescritura
    const texts = ["Frontend Developer", "Rudy"];
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        let timeout;
        const currentText = texts[currentTextIndex];
        
        if (isTyping) {
            if (displayedText.length < currentText.length) {
                timeout = setTimeout(() => {
                    setDisplayedText(currentText.substring(0, displayedText.length + 1));
                }, 100); // Velocidad de escritura (100ms por letra)
            } else {
                timeout = setTimeout(() => setIsTyping(false), 2500); // Tiempo mostrando texto completo
            }
        } else {
            if (displayedText.length > 0) {
                timeout = setTimeout(() => {
                    setDisplayedText(displayedText.substring(0, displayedText.length - 1));
                }, 50); // Velocidad de borrado
            } else {
                setIsTyping(true);
                setCurrentTextIndex((prevIndex) => 
                    prevIndex === texts.length - 1 ? 0 : prevIndex + 1
                );
            }
        }

        return () => clearTimeout(timeout);
    }, [displayedText, isTyping, currentTextIndex]);

    return (
        <main className='relative flex items-center w-full h-screen bg-gray-800 pl-[16.666%]'>
            {/* Contenido principal con animación */}
            <motion.section 
                className='w-2/3 px-8'
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
            >
                <motion.div variants={fadeIn}>
                    <h1 className='text-4xl font-bold text-white md:text-5xl'>
                        Hi, I'm 
                    </h1>
                </motion.div>
                
                <motion.div variants={fadeIn}>
                    <h2 className='mt-3 text-2xl text-gray-300 md:text-3xl'>
                        {" "}
                        <span className='text-emerald-400'>
                            {displayedText}
                            <motion.span 
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ duration: 0.8, repeat: Infinity }}
                                className="inline-block ml-0.5"
                            >
                                |
                            </motion.span>
                        </span>
                    </h2>
                </motion.div>
                
                <motion.p 
                    className="mt-6 text-lg leading-relaxed text-gray-400"
                    variants={fadeIn}
                >
                    Crafting exceptional digital experiences with modern web technologies.
                </motion.p>
                
                <motion.div 
                    className="flex gap-4 mt-8"
                    variants={fadeIn}
                >
                    <Link to='/about'>
                        <motion.button 
                            className='px-6 py-3 font-medium text-white transition-all rounded-lg bg-emerald-600 hover:bg-emerald-500'
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Hire Me
                        </motion.button>
                    </Link>
                    <Link to='/contact'>
                        <motion.button 
                            className='px-6 py-3 font-medium text-white transition-all rounded-lg bg-emerald-600 hover:bg-emerald-500'
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Contact
                        </motion.button>
                    </Link>
                </motion.div>
            </motion.section>

            {/* Sección de imagen con animación */}
            <motion.section 
                className="flex justify-center w-1/3 pr-8"
                initial={{ opacity: 0, x: 20 }}
                animate={{ 
                    opacity: 1, 
                    x: 0,
                    transition: { 
                        delay: 0.5,
                        duration: 0.8,
                        ease: "easeOut"
                    } 
                }}
            >
                <div className="relative w-full max-w-lg">
                    <motion.div 
                        className="absolute opacity-75 -inset-4 bg-emerald-400/20 rounded-xl blur-lg"
                        animate={{
                            opacity: [0.5, 0.75, 0.5],
                            transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                        }}
                    />
                    <img 
                        src="src/assets/Paisaje.jpg" 
                        alt="Image of a landscape" 
                        className="relative w-full h-auto max-h-[70vh] object-cover rounded-lg shadow-2xl border border-emerald-400/10"
                    />
                </div>
            </motion.section>
        </main>
    );
}