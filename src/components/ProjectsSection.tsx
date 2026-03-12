import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { projects } from "@/data/portfolio-data";
import { motion } from "framer-motion";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";

const ProjectCard = ({ p, index, t }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const hasImages = p.images && p.images.length > 0;

  useEffect(() => {
    let interval;
    if (hasImages && p.images.length > 1 && !isHovered) {
      interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % p.images.length);
      }, 2500);
    }
    return () => clearInterval(interval);
  }, [hasImages, p.images, isHovered]);

  const nextImage = (e) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev + 1) % p.images.length);
  };

  const prevImage = (e) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev === 0 ? p.images.length - 1 : prev - 1));
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`h-48 relative flex items-center justify-center overflow-hidden ${!hasImages ? `bg-gradient-to-br ${p.color}` : "bg-black/5"}`}>
        
        {hasImages ? (
          <img 
            src={p.images[currentImageIndex]} 
            alt={`${t(p.titleKey)}`} 
            className="w-full h-full object-cover transition-opacity duration-300"
          />
        ) : (
          <span className="text-5xl font-bold text-accent-foreground/20 select-none">0{p.id}</span>
        )}

        {hasImages && p.images.length > 1 && (
          <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none">
            <button onClick={prevImage} className="p-1.5 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-sm transition-colors pointer-events-auto">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={nextImage} className="p-1.5 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-sm transition-colors pointer-events-auto">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 z-10">
          <a href={p.demo} target="_blank" rel="noreferrer" className="p-3 rounded-full bg-accent text-accent-foreground hover:scale-110 transition-transform" aria-label="Demo">
            <ExternalLink className="w-5 h-5" />
          </a>
          <a href={p.code} target="_blank" rel="noreferrer" className="p-3 rounded-full bg-accent text-accent-foreground hover:scale-110 transition-transform" aria-label="Code">
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-bold text-primary text-lg mb-2">{t(p.titleKey)}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">{t(p.descKey)}</p>
        <div className="flex flex-wrap gap-2">
          {p.techs.map((tech) => (
            <span key={tech} className="text-xs font-mono px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

const ProjectsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-20 lg:py-28 section-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-4">{t("projects.title")}</h2>
          <div className="w-16 h-1 gradient-accent mx-auto rounded-full mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} p={p} index={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;