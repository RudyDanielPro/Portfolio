import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Monitor, Server, Layers, MessageSquare } from "lucide-react";

const services = [
  { icon: Monitor, titleKey: "services.s1.title", descKey: "services.s1.desc" },
  { icon: Server, titleKey: "services.s2.title", descKey: "services.s2.desc" },
  { icon: Layers, titleKey: "services.s3.title", descKey: "services.s3.desc" }
];

const ServicesSection = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-20 lg:py-28 section-alt">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-4">{t("services.title")}</h2>
          <div className="w-16 h-1 gradient-accent mx-auto rounded-full mb-12" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map(({ icon: Icon, titleKey, descKey }, i) => (
            <motion.div
              key={titleKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all text-center group"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl gradient-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="font-semibold text-primary mb-2">{t(titleKey)}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{t(descKey)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
