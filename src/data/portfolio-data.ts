export const personalData = {
  name: "Rudy Daniel Carballo Miranda",
  email: "rudydanielcarballo@gmail.com",
  location: "La Habana, Cuba",
  linkedin: "https://www.linkedin.com/in/rudy-carballo-357239315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  github: "https://github.com/RudyDanielPro",
  yearsExperience: 2,
  projectsCompleted: 10,
};

export const rotatingTitles = {
  es: ["Estudiante de Ingeniería", "Fullstack Developer", "React + Spring Boot"],
  en: ["Engineering Student", "Fullstack Developer", "React + Spring Boot"],
};

export const skills = {
  frontend: [
    { name: "React", level: 98 },
    { name: "JavaScript", level: 85 },
    { name: "HTML5", level: 95 },
    { name: "TailwindCSS", level: 88 },
  ],
  backend: [
    { name: "Java", level: 85 },
    { name: "Spring Boot", level: 80 },
    { name: "REST APIs", level: 85 },
  ],
  other: [
    { name: "SQL", level: 80 },
    { name: "PostgreSQL", level: 80 },
  ],
  tools: [
    { name: "VS Code", level: 90 },
    { name: "Git", level: 85 },
    { name: "GitHub", level: 88 },
  ],
};

export const projects = [
  {
    id: 1,
    titleKey: "projects.p1.title",
    descKey: "projects.p1.desc",
    techs: ["React", "Spring Boot", "PostgreSQL", "TailwindCSS"],
    demo: "#",
    code: "#",
    color: "from-accent to-secondary",
  },
  {
    id: 2,
    titleKey: "projects.p2.title",
    descKey: "projects.p2.desc",
    techs: ["React", "Java", "WebSockets", "MySQL"],
    demo: "#",
    code: "#",
    color: "from-secondary to-primary",
  },
  {
    id: 3,
    titleKey: "projects.p3.title",
    descKey: "projects.p3.desc",
    techs: ["React", "Spring Boot", "MongoDB", "REST API"],
    demo: "#",
    code: "#",
    color: "from-primary to-accent",
  },
  {
    id: 4,
    titleKey: "projects.p4.title",
    descKey: "projects.p4.desc",
    techs: ["React", "TailwindCSS", "Chart.js", "API REST"],
    demo: "#",
    code: "#",
    color: "from-accent to-primary",
  },
];
