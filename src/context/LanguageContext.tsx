import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";

type Language = "es" | "en";

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  es: {
    // Nav
    "nav.about": "Sobre Mí",
    "nav.skills": "Habilidades",
    "nav.projects": "Proyectos",
    "nav.services": "Servicios",
    "nav.education": "Educación",
    "nav.contact": "Contacto",
    "nav.cv": "Descargar CV",

    // Hero
    "hero.greeting": "Hola, soy",
    "hero.description": "Creando soluciones web completas con React en el frontend y Spring Boot en el backend.",
    "hero.cta.projects": "Ver Proyectos",
    "hero.cta.contact": "Contactar",

    // About
    "about.title": "Sobre Mí",
    "about.p1": "Estudiante de último año de Ingeniería en Ciencias Informáticas en La Habana, Cuba.",
    "about.p2": "A pesar de mi juventud, he dedicado más de 2 años a desarrollar proyectos web completos y funcionales, desplegados y listos para producción. Me especializo en crear aplicaciones fullstack con React en el frontend y Spring Boot en el backend, combinando diseño moderno con arquitecturas sólidas.",
    "about.p3": "Actualmente busco oportunidades para aportar valor mientras sigo creciendo profesionalmente.",
    "about.years": "Años de Experiencia",
    "about.projects_count": "Proyectos Completados",

    // Skills
    "skills.title": "Habilidades Técnicas",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.other": "Otros",
    "skills.tools": "Herramientas",

    // Projects
    "projects.title": "Proyectos Destacados",
    "projects.demo": "Ver Demo",
    "projects.code": "Código",
    "projects.p1.title": "E-Commerce Platform",
    "projects.p1.desc": "Plataforma de comercio electrónico fullstack con carrito de compras, autenticación y panel de administración.",
    "projects.p2.title": "Task Manager Pro",
    "projects.p2.desc": "Aplicación de gestión de tareas con tableros Kanban, colaboración en tiempo real y notificaciones.",
    "projects.p3.title": "Blog CMS",
    "projects.p3.desc": "Sistema de gestión de contenido con editor rich-text, categorías y sistema de comentarios.",
   
    // Services
    "services.title": "Servicios que Ofrezco",
    "services.s1.title": "Desarrollo Frontend",
    "services.s1.desc": "Aplicaciones web modernas y responsive con React y TailwindCSS. Interfaces intuitivas y de alto rendimiento.",
    "services.s2.title": "Desarrollo Backend",
    "services.s2.desc": "APIs REST robustas con Spring Boot y Java. Arquitecturas escalables y seguras.",
    "services.s3.title": "Fullstack Completo",
    "services.s3.desc": "Integración completa frontend-backend con bases de datos, autenticación y despliegue.",

    // Education
    "education.title": "Educación",
    "education.degree": "Ingeniería en Ciencias Informáticas",
    "education.institution": "Universidad de las Ciencias Informáticas (UCI)",
    "education.period": "2020 - Presente",
    "education.description": "Formación integral en desarrollo de software, algoritmos, bases de datos, ingeniería de software y gestión de proyectos tecnológicos.",

    // Contact
    "contact.title": "Contacto",
    "contact.subtitle": "¿Tienes un proyecto en mente? ¡Hablemos!",
    "contact.name": "Nombre",
    "contact.email": "Email",
    "contact.subject": "Asunto",
    "contact.message": "Mensaje",
    "contact.send": "Enviar Mensaje",
    "contact.sending": "Enviando...",
    "contact.success": "¡Mensaje enviado correctamente!",
    "contact.error": "Error al enviar. Inténtalo de nuevo.",
    "contact.location": "La Habana, Cuba",

    // Footer
    "footer.rights": "Todos los derechos reservados.",
    "footer.made": "Hecho con",
    "footer.quick": "Enlaces Rápidos",
  },
  en: {
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.services": "Services",
    "nav.education": "Education",
    "nav.contact": "Contact",
    "nav.cv": "Download CV",

    "hero.greeting": "Hi, I'm",
    "hero.description": "Building complete web solutions with React on the frontend and Spring Boot on the backend.",
    "hero.cta.projects": "View Projects",
    "hero.cta.contact": "Contact Me",

    "about.title": "About Me",
    "about.p1": "Final-year Computer Science Engineering student in Havana, Cuba.",
    "about.p2": "Despite my youth, I've dedicated over 2 years to developing complete, functional, production-ready web projects. I specialize in creating fullstack applications with React on the frontend and Spring Boot on the backend, combining modern design with solid architectures.",
    "about.p3": "I'm currently looking for opportunities to contribute value while continuing to grow professionally.",
    "about.years": "Years of Experience",
    "about.projects_count": "Completed Projects",

    "skills.title": "Technical Skills",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.other": "Other",
    "skills.tools": "Tools",

    "projects.title": "Featured Projects",
    "projects.demo": "Live Demo",
    "projects.code": "Source Code",
    "projects.p1.title": "E-Commerce Platform",
    "projects.p1.desc": "Fullstack e-commerce platform with shopping cart, authentication, and admin dashboard.",
    "projects.p2.title": "Task Manager Pro",
    "projects.p2.desc": "Task management app with Kanban boards, real-time collaboration, and notifications.",
    "projects.p3.title": "Blog CMS",
    "projects.p3.desc": "Content management system with rich-text editor, categories, and commenting system.",
    
    "services.title": "Services I Offer",
    "services.s1.title": "Frontend Development",
    "services.s1.desc": "Modern and responsive web applications with React and TailwindCSS. Intuitive, high-performance interfaces.",
    "services.s2.title": "Backend Development",
    "services.s2.desc": "Robust REST APIs with Spring Boot and Java. Scalable and secure architectures.",
    "services.s3.title": "Full Stack",
    "services.s3.desc": "Complete frontend-backend integration with databases, authentication, and deployment.",

    "education.title": "Education",
    "education.degree": "Computer Science Engineering",
    "education.institution": "University of Informatics Sciences (UCI)",
    "education.period": "2020 - Present",
    "education.description": "Comprehensive training in software development, algorithms, databases, software engineering, and technology project management.",

    "contact.title": "Contact",
    "contact.subtitle": "Have a project in mind? Let's talk!",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.sending": "Sending...",
    "contact.success": "Message sent successfully!",
    "contact.error": "Error sending. Please try again.",
    "contact.location": "Havana, Cuba",

    "footer.rights": "All rights reserved.",
    "footer.made": "Made with",
    "footer.quick": "Quick Links",
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem("portfolio-lang");
    return (saved === "en" || saved === "es") ? saved : "es";
  });

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const next = prev === "es" ? "en" : "es";
      localStorage.setItem("portfolio-lang", next);
      return next;
    });
  }, []);

  const t = useCallback(
    (key: string) => translations[lang][key] || key,
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
