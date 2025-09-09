import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import video from "../assets/Foto.mp4";

export function Main() {
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
        }, 100);
      } else {
        timeout = setTimeout(() => setIsTyping(false), 2500);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.substring(0, displayedText.length - 1));
        }, 50);
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
    <main className='relative flex flex-col items-center w-full mt-10 min-h-max md:flex-row'>
      <motion.section 
        className='relative z-10 w-full md:w-2/3'
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div variants={fadeIn}>
          <h1 className='text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl'> 
            Hi, I'm 
          </h1>
        </motion.div>
        
        <motion.div variants={fadeIn}>
          <h2 className='mt-4 text-3xl text-gray-300 sm:text-4xl md:text-5xl lg:text-6xl'>
            {" "}
            <span className='text-emerald-400'>
              {displayedText}
              <motion.span 
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block ml-1"
              >
                |
              </motion.span>
            </span>
          </h2>
        </motion.div>
        
        <motion.p 
          className="mt-6 text-lg leading-relaxed text-gray-300 md:mt-8 md:text-xl lg:text-2xl"
          variants={fadeIn}
        >
          Crafting exceptional digital experiences with modern web technologies.
          <br className="hidden md:block" />
          Specializing in responsive design, performance optimization, and intuitive user interfaces.
        </motion.p>
        
        <motion.div 
          className="flex flex-row gap-4 mt-8 md:mt-10"
          variants={fadeIn}
        >
          <Link to='https://drive.google.com/uc?export=download&id=1iZl0OYtgNKpsy6GIV_ckQ147zmTTNU_I'>
            <motion.button 
              className='px-5 py-2 text-lg font-medium text-white transition-all rounded-lg sm:px-6 sm:py-3 sm:text-xl md:px-8 md:py-4 md:text-2xl bg-emerald-600 hover:bg-emerald-500' 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
            </motion.button>
          </Link>
          <Link to='/contact'>
            <motion.button 
              className='px-5 py-2 text-lg font-medium text-white transition-all rounded-lg sm:px-6 sm:py-3 sm:text-xl md:px-8 md:py-4 md:text-2xl bg-emerald-600 hover:bg-emerald-500' 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.button>
          </Link>
        </motion.div>
      </motion.section>

      <motion.section 
        className="relative z-10 justify-center hidden w-full pr-0 mt-8 md:flex md:w-1/3 md:pr-8 md:mt-0"
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
        <div className="relative w-full h-[55vh] overflow-hidden rounded-lg mt-10">
          <motion.div 
            className="absolute opacity-75 -inset-4 rounded-xl blur-lg"
            animate={{
              opacity: [0.5, 0.75, 0.5],
              transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
          />
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="relative object-contain w-full h-full"
          >
            <source src={video} type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>
      </motion.section>
    </main>
  );
}