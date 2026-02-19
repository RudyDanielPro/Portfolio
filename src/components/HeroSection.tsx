import { useState, useEffect, useCallback } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { personalData, rotatingTitles } from "@/data/portfolio-data";
import { motion } from "framer-motion";
import { Github, Linkedin, ChevronDown } from "lucide-react";

const HeroSection = () => {
  const { t, lang } = useLanguage();
  const [titleIdx, setTitleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const titles = rotatingTitles[lang];

  const tick = useCallback(() => {
    const full = titles[titleIdx];
    if (!isDeleting) {
      setDisplayed(full.substring(0, displayed.length + 1));
      if (displayed.length + 1 === full.length) {
        setTimeout(() => setIsDeleting(true), 1800);
      }
    } else {
      setDisplayed(full.substring(0, displayed.length - 1));
      if (displayed.length - 1 === 0) {
        setIsDeleting(false);
        setTitleIdx((prev) => (prev + 1) % titles.length);
      }
    }
  }, [displayed, isDeleting, titleIdx, titles]);

  useEffect(() => {
    const speed = isDeleting ? 40 : 80;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting]);

  // Reset typing on language change
  useEffect(() => {
    setDisplayed("");
    setTitleIdx(0);
    setIsDeleting(false);
  }, [lang]);

  return (
    <section className="relative min-h-screen flex items-center gradient-primary overflow-hidden" id="hero">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--accent)) 1px, transparent 0)",
        backgroundSize: "40px 40px",
      }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-accent font-mono text-sm mb-4 tracking-wider">{t("hero.greeting")}</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-4">
              {personalData.name}
            </h1>
            <div className="h-10 mb-6">
              <span className="text-xl sm:text-2xl text-accent font-semibold">
                {displayed}
              </span>
              <span className="inline-block w-0.5 h-6 ml-1 bg-accent animate-typing-cursor align-middle" />
            </div>
            <p className="text-primary-foreground/70 text-lg max-w-lg mb-8 leading-relaxed">
              {t("hero.description")}
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="rounded-lg px-6 py-3 font-semibold text-accent-foreground gradient-accent hover:opacity-90 transition-opacity"
                style={{ boxShadow: "var(--shadow-button)" }}
              >
                {t("hero.cta.projects")}
              </button>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="rounded-lg px-6 py-3 font-semibold border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
              >
                {t("hero.cta.contact")}
              </button>
            </div>
            <div className="flex gap-4">
              <a href={personalData.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-primary-foreground/20 text-primary-foreground/70 hover:text-accent hover:border-accent transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={personalData.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-primary-foreground/20 text-primary-foreground/70 hover:text-accent hover:border-accent transition-colors" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              <div className="w-72 h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden border-4 border-accent/30 shadow-2xl animate-float">
                <video
                  src="/foto.mp4"
                  className="w-full h-full object-cover bg-secondary"
                  style={{ objectPosition: 'center' }}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl gradient-accent flex items-center justify-center text-accent-foreground font-bold text-sm shadow-lg">
                +{personalData.yearsExperience} años
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <button
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/50 hover:text-accent transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default HeroSection;
