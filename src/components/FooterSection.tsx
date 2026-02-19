import { useLanguage } from "@/context/LanguageContext";
import { personalData } from "@/data/portfolio-data";
import { Github, Linkedin, Heart } from "lucide-react";

const navKeys = ["about", "skills", "projects", "services", "education", "contact"] as const;

const FooterSection = () => {
  const { t } = useLanguage();

  return (
    <footer className="gradient-primary py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <p className="font-bold text-lg text-primary-foreground mb-2">
              {personalData.name.split(" ")[0]}<span className="text-accent">.</span>
            </p>
            <p className="text-primary-foreground/60 text-sm">Fullstack Developer</p>
          </div>
          <div>
            <p className="font-semibold text-primary-foreground mb-3">{t("footer.quick")}</p>
            <ul className="grid grid-cols-2 gap-1">
              {navKeys.map((k) => (
                <li key={k}>
                  <button
                    onClick={() => document.getElementById(k)?.scrollIntoView({ behavior: "smooth" })}
                    className="text-sm text-primary-foreground/60 hover:text-accent transition-colors"
                  >
                    {t(`nav.${k}`)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-start md:items-end gap-3">
            <div className="flex gap-3">
              <a href={personalData.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-primary-foreground/20 text-primary-foreground/60 hover:text-accent hover:border-accent transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href={personalData.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-primary-foreground/20 text-primary-foreground/60 hover:text-accent hover:border-accent transition-colors">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-primary-foreground/50">
          <p>© {new Date().getFullYear()} {personalData.name}. {t("footer.rights")}</p>
          <p className="flex items-center gap-1">{t("footer.made")} <Heart className="w-3.5 h-3.5 text-accent fill-accent" /> React + TailwindCSS</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
