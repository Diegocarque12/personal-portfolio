// src/data/experienceData.ts

import type { Locale } from "../i18n/translations";

export interface ExperienceTranslations {
  title: string;
  company: string;
  achievements: string[];
}

export interface ExperienceData {
  date: {
    en: string;
    es: string;
  };
  technologies: string[];
  link?: string;
  translations: {
    en: ExperienceTranslations;
    es: ExperienceTranslations;
  };
}

export const experienceData: ExperienceData[] = [
  {
    date: {
      en: "May 2024 - Present",
      es: "Mayo 2024 - Presente",
    },
    link: "https://www.transunion.com/",
    technologies: [
      "React",
      "Vue 3",
      "TypeScript",
      "Storybook",
      "Sass",
      "Module Federation",
      "WCAG 2.2",
      "Pinia",
      "Node.js",
    ],
    translations: {
      en: {
        title: "Mid Senior Frontend Engineer",
        company: "TransUnion",
        achievements: [
          "Led UI migration from monolithic to microfrontend architecture using Module Federation, improving performance and reducing deployment friction",
          "Contributed to research, documentation, and development of core product improvements, focusing on scalability and maintainability",
          "Implemented WCAG 2.2 accessibility standards across entire modules, improving usability and regulatory compliance",
          "Developed scalable and accessible components with React, Vue 3, TypeScript, Storybook, and Sass for the design system",
        ],
      },
      es: {
        title: "Mid Senior Frontend Engineer",
        company: "TransUnion",
        achievements: [
          "Lideré la migración de UI monolítica a arquitectura microfrontend usando Module Federation, mejorando el rendimiento y reduciendo la fricción en despliegues",
          "Contribuí en investigación, documentación y desarrollo de mejoras core del producto, enfocándome en escalabilidad y mantenibilidad",
          "Implementé estándares de accesibilidad WCAG 2.2 en módulos completos, mejorando usabilidad y cumplimiento normativo",
          "Desarrollé componentes escalables y accesibles con React, Vue 3, TypeScript, Storybook y Sass para el sistema de diseño",
        ],
      },
    },
  },
  {
    date: {
      en: "April 2023 - Present",
      es: "Abril 2023 - Presente",
    },
    link: "https://www.qora.dev/",
    technologies: [
      "React 18",
      "TypeScript",
      "Redux Toolkit",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "React Native",
      "Next.js",
      "Zustand",
    ],
    translations: {
      en: {
        title: "Freelancer - Founder & Developer",
        company: "Qora",
        achievements: [
          "Developed PrimeFit: full-stack SaaS gym management platform with React 18, TypeScript, Redux Toolkit, and Supabase (PostgreSQL)",
          "Implemented multi-tenant architecture with role-based access control and real-time workout tracking",
          "Optimized state management reducing re-renders by 80-90%, significantly improving performance",
          "Currently serving active production clients with multiple gyms using the platform",
        ],
      },
      es: {
        title: "Freelancer - Fundador & Desarrollador",
        company: "Qora",
        achievements: [
          "Desarrollé PrimeFit: plataforma SaaS full-stack para gestión de gimnasios con React 18, TypeScript, Redux Toolkit y Supabase (PostgreSQL)",
          "Implementé arquitectura multi-tenant con control de acceso basado en roles y seguimiento de entrenamientos en tiempo real",
          "Optimicé gestión de estado reduciendo re-renders en 80-90%, mejorando significativamente el rendimiento",
          "Actualmente sirviendo clientes activos en producción con múltiples gimnasios usando la plataforma",
        ],
      },
    },
  },
  {
    date: {
      en: "May 2021 - February 2023",
      es: "Mayo 2021 - Febrero 2023",
    },
    technologies: [
      "React",
      "Vue.js",
      "PHP",
      "Laravel",
      "Statamic",
      "TypeScript",
      "Node.js",
      "HTML5",
      "CSS3",
    ],
    translations: {
      en: {
        title: "Full Stack Developer",
        company: "5e Creative Labs",
        achievements: [
          "Responsible for development and maintenance of CMS and main site for La República, one of Costa Rica's leading media outlets",
          "Improved site performance by 16% by reducing CSS from 18,000 to 12,000 lines through optimization and modularization",
          "Developed and maintained electronic invoicing system integrated with Costa Rica's Ministry of Finance API",
          "Worked with full stack including React, Vue.js, Laravel, and Statamic CMS",
        ],
      },
      es: {
        title: "Full Stack Developer",
        company: "5e Creative Labs",
        achievements: [
          "Responsable del desarrollo y mantenimiento del CMS y sitio principal de La República, uno de los principales medios de Costa Rica",
          "Mejoré el rendimiento del sitio en un 16% reduciendo CSS de 18,000 a 12,000 líneas mediante optimización y modularización",
          "Desarrollé y mantuve sistema de facturación electrónica integrado con API del Ministerio de Hacienda de Costa Rica",
          "Trabajé con stack completo incluyendo React, Vue.js, Laravel y Statamic CMS",
        ],
      },
    },
  },
];

// Helper to get all experience data with translations
export const getAllExperience = (locale: Locale = "en") => {
  return experienceData.map((exp) => ({
    date: exp.date[locale],
    technologies: exp.technologies,
    link: exp.link,
    title: exp.translations[locale].title,
    company: exp.translations[locale].company,
    achievements: exp.translations[locale].achievements,
  }));
};
