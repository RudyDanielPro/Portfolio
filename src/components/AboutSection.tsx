import { useLanguage } from "@/context/LanguageContext";
import { personalData } from "@/data/portfolio-data";
import { motion } from "framer-motion";
import { MapPin, Briefcase, FolderOpen } from "lucide-react";

const AboutSection = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: Briefcase, value: `+${personalData.yearsExperience}`, label: t("about.years") },
    { icon: FolderOpen, value: `${personalData.projectsCompleted}+`, label: t("about.projects_count") },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 section-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-4">{t("about.title")}</h2>
          <div className="w-16 h-1 gradient-accent mx-auto rounded-full mb-12" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-center max-w-5xl mx-auto">
          <motion.div
            className="lg:col-span-2 flex justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-56 h-56 lg:w-64 lg:h-64 rounded-2xl overflow-hidden shadow-card bg-muted flex items-center justify-center text-6xl font-bold text-muted-foreground">
              <img
                src="/perfil.jpg"
                alt="Foto de perfil"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center' }}
              />
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-foreground/80 leading-relaxed mb-4">{t("about.p1")}</p>
            <p className="text-foreground/80 leading-relaxed mb-4">{t("about.p2")}</p>
            <p className="text-foreground/80 leading-relaxed mb-6">{t("about.p3")}</p>

            <div className="flex items-center gap-2 text-muted-foreground mb-8">
              <MapPin className="w-4 h-4 text-accent" />
              <span className="text-sm">{personalData.location}</span>
            </div>

            <div className="flex gap-6">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-3 p-4 rounded-xl bg-muted">
                  <div className="p-2 rounded-lg gradient-accent">
                    <Icon className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">{value}</p>
                    <p className="text-xs text-muted-foreground">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
