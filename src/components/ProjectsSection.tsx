import { useLanguage } from "@/context/LanguageContext";
import { projects } from "@/data/portfolio-data";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

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
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all"
            >
              <div className={`h-48 bg-gradient-to-br ${p.color} relative flex items-center justify-center`}>
                <span className="text-5xl font-bold text-accent-foreground/20 select-none">0{p.id}</span>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a href={p.demo} className="p-3 rounded-full bg-accent text-accent-foreground hover:scale-110 transition-transform" aria-label="Demo">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a href={p.code} className="p-3 rounded-full bg-accent text-accent-foreground hover:scale-110 transition-transform" aria-label="Code">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
