import { useLanguage } from "@/context/LanguageContext";
import { skills } from "@/data/portfolio-data";
import { motion } from "framer-motion";
import { Code2, Server, Wrench, Settings } from "lucide-react";

const iconMap = { frontend: Code2, backend: Server, other: Wrench, tools: Settings };
const categories = ["frontend", "backend", "other", "tools"] as const;

const SkillsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-20 lg:py-28 section-alt">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-4">{t("skills.title")}</h2>
          <div className="w-16 h-1 gradient-accent mx-auto rounded-full mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {categories.map((cat, ci) => {
            const Icon = iconMap[cat];
            return (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: ci * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg gradient-accent">
                    <Icon className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <h3 className="font-semibold text-primary text-lg">{t(`skills.${cat}`)}</h3>
                </div>
                <div className="space-y-4">
                  {skills[cat].map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-muted-foreground font-mono text-xs">{skill.level}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-muted overflow-hidden">
                        <motion.div
                          className="h-full rounded-full gradient-accent"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.3 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
