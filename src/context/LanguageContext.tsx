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
    "Baby clothing store": "Tienda de ropa para bebés",
    "E-commerce platform designed for the marketing of baby items, baby clothing, accessories, and personal care products. The project focuses on providing a smooth user experience, prioritizing ease of navigation and a visually cute but professional design, in line with the children's market niche.": "Plataforma de comercio electrónico diseñada para la comercialización de artículos para bebés, ropa de bebé, accesorios y productos de cuidado personal. El proyecto se centra en ofrecer una experiencia de usuario fluida, priorizando la facilidad de navegación y un diseño visualmente agradable pero profesional, en línea con el nicho de mercado infantil.",
    "Personal notes manager": "Administrador de notas personales",
    "projects.p2.desc": "Aplicación web robusta diseñada para la organización y gestión eficiente de notas personales. El proyecto pone un énfasis crítico en la seguridad del lado del servidor y una experiencia de usuario (UX) minimalista y funcional, permitiendo a los usuarios almacenar, editar y organizar información de manera privada y rápida.",
    "projects.p3.title": "Gestor de recetas web",
    "projects.p3.desc": "Una plataforma interactiva diseñada para entusiastas de la cocina y profesionales del sector gastronómico. Chef Zone actúa como un centro de recursos donde los usuarios pueden explorar recetas detalladas, técnicas de cocina y tendencias culinarias, todo bajo una interfaz moderna y optimizada para el descubrimiento de contenido.",
    "projects.p4.title": "Portafolio Web",
    "projects.p4.desc": "Ecosistema digital centralizado que actúa como un demostrador de capacidades en el desarrollo web. Este hub profesional implementa soluciones de internacionalización (i18n), optimización de paquetes para máxima velocidad de respuesta y una interfaz premium desarrollada con bibliotecas de animación de vanguardia. Representa la convergencia entre un diseño técnico riguroso y una experiencia de usuario excepcional.",
    "projects.p5.title": "Administrador de trabajos web",
    "projects.p5.desc": "Administrador de Empleo – Plataforma Empresarial de Gestión de Reclutamiento Arquitecté y desarrollé una solución completa de pila completa para optimizar y centralizar los flujos de trabajo de adquisición de talento. Construida sobre un robusto backend de Spring Boot y un frontend de React de alto rendimiento, la plataforma aprovecha APIs RESTful para gestionar datos complejos de reclutamiento con alta disponibilidad. El sistema integra una base de datos PostgreSQL optimizada para un modelado de datos seguro y escalable, mientras utiliza Tailwind CSS para ofrecer una interfaz de usuario profesional, accesible y responsiva, centrada en la eficiencia operativa para la gestión de ofertas de empleo y ciclos de vida de los candidatos.",
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
    "Baby clothing store": "Baby clothing store",
    "projects.p1.desc": "E-commerce platform designed for the marketing of baby items, baby clothing, accessories, and personal care products. The project focuses on providing a smooth user experience, prioritizing ease of navigation and a visually cute but professional design, in line with the children's market niche.",
    "Personal notes manager": "Personal Notes Manager",
    "projects.p2.desc": "Robust web application designed for the organization and efficient management of personal notes. The project places a critical emphasis on server-side security and a minimalist and functional user experience (UX), allowing users to store, edit, and organize information privately and quickly.",
    "projects.p3.title": "Web Recipe Manager",
    "projects.p3.desc": "An interactive platform designed for cooking enthusiasts and professionals in the gastronomic sector. Chef Zone acts as a resource center where users can explore detailed recipes, cooking techniques, and culinary trends, all within a modern interface optimized for content discovery.",
    "projects.p4.title":"Web Portfolio",
    "projects.p4.desc": "Centralized digital ecosystem that acts as a capability demonstrator in web development. This professional hub implements internationalization (i18n) solutions, bundle optimization for maximum response speed, and a premium interface developed with cutting-edge animation libraries. It represents the convergence between rigorous technical design and an exceptional user experience.",
    "projects.p5.title":"Job Manager Web",
    "projects.p5.desc": "Job Manager – Enterprise Recruitment Management Platform Architected and developed a comprehensive full-stack solution to streamline and centralize talent acquisition workflows. Built on a robust Spring Boot backend and a high-performance React frontend, the platform leverages RESTful APIs to manage complex recruitment data with high availability. The system integrates an optimized PostgreSQL database for secure and scalable data modeling, while utilizing Tailwind CSS to deliver a professional, accessible, and responsive user interface focused on operational efficiency for managing job listings and candidate lifecycles.",
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
