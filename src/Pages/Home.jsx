import { Nav_Var } from '../components/Nav_Var';
import { Main } from '../components/Main';
import { Project_desing } from '../components/Project_desing';
import { Services } from '../components/Services';
import { ContactMe } from '../components/ContactMe';
import { Hero } from '../components/Hero';
import { motion } from "framer-motion";
import { Footer } from '../components/Footer';

export function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Fondo fijo mejorado con mejor contraste */}
      <div className="fixed inset-0 z-0">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'linear-gradient(135deg, #0a0e1a 0%, #152547 25%, #0d3846 50%, #0a0e1a 100%)',
              'linear-gradient(135deg, #152547 0%, #0d3846 25%, #0a0e1a 50%, #152547 100%)',
              'linear-gradient(135deg, #0d3846 0%, #0a0e1a 25%, #152547 50%, #0d3846 100%)',
              'linear-gradient(135deg, #0a0e1a 0%, #152547 25%, #0d3846 50%, #0a0e1a 100%)',
            ],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/70 to-cyan-900/50"
          animate={{
            opacity: [0.7, 0.8, 0.7],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />

        <div className="absolute inset-0 opacity-15"
             style={{
               backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)',
               backgroundSize: '20px 20px'
             }}>
        </div>
      </div>

      <div className="sticky top-0 z-50">
          <Nav_Var />
        </div>
      <div className="relative z-10 max-w-full px-4 mx-auto sm:px-5 md:px-6 lg:px-8 xl:px-10">
        {/* Contenido con mejor espaciado y contraste */}
        <div className="flex flex-col mt-4 space-y-16 md:mt-6 md:space-y-20 lg:mt-8 lg:space-y-24">
          <div id="home">
            <Main />
          </div>
          <div id="about">
            <Hero />
          </div>
          <div id="skills">
            <Services />
          </div>
          <div id="projects">
            <Project_desing />
          </div>
          <div id="contact">
            <ContactMe />
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="relative z-20 mt-10 md:mt-12 lg:mt-16">
        <Footer />
      </div>
    </div>
  )
}