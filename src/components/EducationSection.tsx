import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

const EducationSection = () => {
  const { t } = useLanguage();

  return (
    <section id="education" className="py-20 lg:py-28 section-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-4">{t("education.title")}</h2>
          <div className="w-16 h-1 gradient-accent mx-auto rounded-full mb-12" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto bg-card rounded-2xl p-8 shadow-card"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl gradient-accent shrink-0">
              <GraduationCap className="w-6 h-6 text-accent-foreground" />
            </div>
            <div>
              <h3 className="font-bold text-primary text-xl mb-1">{t("education.degree")}</h3>
              <p className="text-accent font-medium mb-2">{t("education.institution")}</p>
              <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                <Calendar className="w-4 h-4" />
                {t("education.period")}
              </div>
              <p className="text-foreground/80 leading-relaxed">{t("education.description")}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
