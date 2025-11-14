// src/i18n/translations.ts

export const translations = {
  en: {
    // Navigation
    nav: {
      home: "Home",
      experience: "Experience",
      projects: "Projects",
      about: "About Me",
    },

    // Hero Section
    hero: {
      badge: "Available for Work",
      title: "Senior Frontend Engineer",
      specialization: "UI/UX Focused | +5 Years Experience",
      description:
        "Passionate about creating innovative and creative solutions. I specialize in Frontend Development and UI/UX design, with experience building microfrontend architectures, implementing WCAG 2.2 standards, and developing scalable design systems.",
      downloadCV: "Download CV",
    },

    // Section Headings
    sections: {
      experience: "Work Experience",
      projects: "Featured Projects",
      aboutMe: "About Me",
    },

    // About Me Section
    about: {
      paragraph1:
        "As a senior frontend developer, my approach goes beyond writing functional code. I'm passionate about creating exceptional user experiences that are intuitive, accessible, and visually appealing.",
      paragraph2:
        "My experience ranges from architecting scalable applications to implementing pixel-perfect designs. I've led migrations from monolithic architectures to microfrontend, established WCAG 2.2 accessibility standards in enterprise products, and developed design systems used by entire teams.",
      paragraph3:
        "I'm currently expanding my knowledge in UX Design with Google, because I firmly believe that the best products are born when we combine technical excellence with a deep understanding of the user.",
      paragraph4:
        "Outside of code, I maintain an active balance with Latin dance (salsa and bachata), which has taught me about discipline, teamwork, and the importance of constant practice—skills I apply directly to my professional development.",
    },

    // Experience Section
    experience: {
      role: "Role",
      company: "Company",
      present: "Present",
      visitWebsite: "Visit Website",
    },

    // Projects Section
    projects: {
      featured: "Featured",
      viewLive: "View Live Project",
      viewGithub: "View on GitHub",
      viewCaseStudy: "View case study",
      backToProjects: "View all projects",
    },

    // Case Study Page
    caseStudy: {
      breadcrumb: {
        home: "Home",
        projects: "Projects",
      },
      sections: {
        role: "Role",
        duration: "Duration",
        techStack: "Tech Stack",
        overview: "Overview",
        challenge: "The Challenge",
        solution: "The Solution",
        impact: "Impact & Results",
        features: "Key Features",
        technicalHighlights: "Technical Highlights",
        lessonsLearned: "Key Learnings",
        nextSteps: "Next Steps",
      },
    },

    // Toast
    toast: {
      message: "Spanish version available",
    },

    // Footer
    footer: {
      madeWith: "Made with",
      by: "by",
    },
  },

  es: {
    // Navigation
    nav: {
      home: "Inicio",
      experience: "Experiencia",
      projects: "Proyectos",
      about: "Sobre mí",
    },

    // Hero Section
    hero: {
      badge: "Disponible para Trabajar",
      title: "Senior Frontend Engineer",
      specialization: "Especializado en UI/UX | +5 años de experiencia",
      description:
        "Apasionado por crear soluciones innovadoras y creativas. Me especializo en Frontend Development y diseño UI/UX, con experiencia construyendo arquitecturas microfrontend, implementando estándares WCAG 2.2 y desarrollando sistemas de diseño escalables.",
      downloadCV: "Descargar CV",
    },

    // Section Headings
    sections: {
      experience: "Experiencia Laboral",
      projects: "Proyectos Destacados",
      aboutMe: "Sobre Mí",
    },

    // About Me Section
    about: {
      paragraph1:
        "Como desarrollador frontend senior, mi enfoque va más allá de escribir código funcional. Me apasiona crear experiencias de usuario excepcionales que sean intuitivas, accesibles y visualmente atractivas.",
      paragraph2:
        "Mi experiencia abarca desde la arquitectura de aplicaciones escalables hasta la implementación de diseños pixel-perfect. He liderado migraciones de arquitecturas monolíticas a microfrontend, establecido estándares de accesibilidad WCAG 2.2 en productos empresariales, y desarrollado sistemas de diseño utilizados por equipos completos.",
      paragraph3:
        "Actualmente estoy expandiendo mis conocimientos en UX Design con Google, porque creo firmemente que los mejores productos nacen cuando combinamos excelencia técnica con un profundo entendimiento del usuario.",
      paragraph4:
        "Fuera del código, mantengo un equilibrio activo con el baile latino (salsa y bachata), lo que me ha enseñado sobre disciplina, trabajo en equipo y la importancia de la práctica constante, habilidades que aplico directamente en mi desarrollo profesional.",
    },

    // Experience Section
    experience: {
      role: "Rol",
      company: "Empresa",
      present: "Presente",
      visitWebsite: "Visitar Sitio Web",
    },

    // Projects Section
    projects: {
      featured: "Destacado",
      viewLive: "Ver Proyecto Live",
      viewGithub: "Ver en GitHub",
      viewCaseStudy: "Ver caso de estudio",
      backToProjects: "Ver todos los proyectos",
    },

    // Case Study Page
    caseStudy: {
      breadcrumb: {
        home: "Inicio",
        projects: "Proyectos",
      },
      sections: {
        role: "Rol",
        duration: "Duración",
        techStack: "Stack Tecnológico",
        overview: "Visión General",
        challenge: "El Desafío",
        solution: "La Solución",
        impact: "Impacto y Resultados",
        features: "Características Principales",
        technicalHighlights: "Destacados Técnicos",
        lessonsLearned: "Aprendizajes Clave",
        nextSteps: "Próximos Pasos",
      },
    },

    // Toast
    toast: {
      message: "Versión en español disponible",
    },

    // Footer
    footer: {
      madeWith: "Hecho con",
      by: "por",
    },
  },
};

export type Locale = keyof typeof translations;
export type TranslationKeys = typeof translations.en;

export function getTranslations(locale: Locale): TranslationKeys {
  return translations[locale] || translations.en;
}
