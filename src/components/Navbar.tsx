import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { personalData } from "@/data/portfolio-data";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, Globe } from "lucide-react";

const navKeys = ["about", "skills", "projects", "services", "education", "contact"] as const;

const Navbar = () => {
  const { t, lang, toggleLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-card/95 backdrop-blur-md shadow-card" : "bg-transparent"
        }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 h-[var(--nav-height)]">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-bold text-lg tracking-tight flex items-center gap-2 px-3 py-1 rounded-lg bg-gradient-to-r from-accent to-primary text-white shadow-lg hover:from-primary hover:to-accent transition-colors duration-200"
        >
          <Globe className="w-6 h-6 text-white drop-shadow-md" />
          <span>
            {personalData.name.split(" ")[0]}
            <span className="text-accent">.</span>
          </span>
        </button>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navKeys.map((k) => (
            <li key={k}>
              <button onClick={() => scrollTo(k)} className="text-muted-foreground hover:text-accent transition-colors">
                {t(`nav.${k}`)}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <button onClick={toggleLang} className="flex items-center gap-1 text-sm text-muted-foreground hover:text-accent transition-colors" aria-label="Toggle language">
            <Globe className="w-4 h-4" />
            {lang === "es" ? "EN" : "ES"}
          </button>
          <a href="https://drive.google.com/uc?export=download&id=10eRDJfWTQW1bciOho-RCT7Bw3-lyCRXE" className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground hover:opacity-90 transition-opacity" style={{ boxShadow: "var(--shadow-button)" }}>
            <Download className="w-4 h-4" />
            {t("nav.cv")}
          </a>
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button onClick={toggleLang} className="p-2 text-muted-foreground">
            <Globe className="w-5 h-5" />
          </button>
          <button onClick={() => setOpen(!open)} className="p-2 text-foreground" aria-label="Menu">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card/95 backdrop-blur-md border-t border-border overflow-hidden"
          >
            <ul className="flex flex-col gap-1 p-4">
              {navKeys.map((k) => (
                <li key={k}>
                  <button onClick={() => scrollTo(k)} className="w-full text-left px-4 py-3 rounded-lg text-foreground hover:bg-muted transition-colors">
                    {t(`nav.${k}`)}
                  </button>
                </li>
              ))}
              <li>
                <a href="https://drive.google.com/uc?export=download&id=10eRDJfWTQW1bciOho-RCT7Bw3-lyCRXE" className="flex items-center gap-2 px-4 py-3 rounded-lg bg-accent text-accent-foreground font-semibold mt-2" >
                  <Download className="w-4 h-4" />
                  {t("nav.cv")}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
