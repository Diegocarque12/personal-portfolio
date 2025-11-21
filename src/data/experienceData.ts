// src/data/experienceData.ts

import type { Locale } from "../i18n/translations";

export interface ProjectItem {
  name: string;
  description: string;
  achievements: string[];
  technologies?: string[];
}

export interface ExperienceTranslations {
  title: string;
  company: string;
  description?: string;
  achievements?: string[];
  projects?: ProjectItem[];
}

export interface ExperienceData {
  date: {
    en: string;
    es: string;
  };
  technologies: string[];
  link?: string;
  hasNestedProjects?: boolean;
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
    hasNestedProjects: true,
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
        description:
          "As a freelance developer under the Qora brand, I design and build high-quality software solutions, ranging from complete SaaS products to specific client projects. Qora is my seal of guarantee for scalable, maintainable, and user-centered code.",
        projects: [
          {
            name: "PrimeFit",
            description: "Full-stack SaaS platform for gym management",
            achievements: [
              "Developed a complete multi-tenant gym management platform with role-based access control and real-time workout tracking",
              "Optimized state management reducing re-renders by 80-90%, significantly improving performance",
              "Implemented robust authentication and authorization with multiple security layers from frontend to database",
              "Currently serving multiple active production clients with several gyms using the platform",
            ],
            technologies: [
              "React 18",
              "TypeScript",
              "Redux Toolkit",
              "Supabase",
              "PostgreSQL",
            ],
          },
          {
            name: "Dask",
            description: "Dance academy management system",
            achievements: [
              "Built complete student management system with payment tracking, attendance control, and automated notifications",
              "Reduced administrative tasks by 10 hours per week through process automation",
              "Designed intuitive interface for non-technical users with Next.js 13 Server Components",
            ],
            technologies: ["React 18", "Supabase", "Tailwind CSS", "Zustant"],
          },
          {
            name: "Client Development",
            description: "Custom solutions and landing pages",
            achievements: [
              "Created custom landing pages and websites for various clients, focused on performance optimization and UX",
              "Delivered tailored solutions using modern technologies and best practices",
            ],
          },
        ],
      },
      es: {
        title: "Freelancer - Fundador & Desarrollador",
        company: "Qora",
        description:
          "Como desarrollador freelance bajo la marca Qora, diseño y construyo soluciones de software de alta calidad, abarcando desde productos SaaS completos hasta proyectos específicos para clientes. Qora es mi sello de garantía en cuanto a código escalable, mantenible y centrado en el usuario.",
        projects: [
          {
            name: "PrimeFit",
            description: "Plataforma SaaS full-stack para gestión de gimnasios",
            achievements: [
              "Desarrollé plataforma completa multi-tenant para gestión de gimnasios con control de acceso basado en roles y seguimiento de entrenamientos en tiempo real",
              "Optimicé gestión de estado reduciendo re-renders en 80-90%, mejorando significativamente el rendimiento",
              "Implementé autenticación y autorización robusta con múltiples capas de seguridad desde frontend hasta base de datos",
              "Actualmente sirviendo múltiples clientes activos en producción con varios gimnasios usando la plataforma",
            ],
            technologies: [
              "React 18",
              "TypeScript",
              "Redux Toolkit",
              "Supabase",
              "PostgreSQL",
            ],
          },
          {
            name: "Dask",
            description: "Sistema de gestión para academias de baile",
            achievements: [
              "Construí sistema completo de gestión de estudiantes con seguimiento de pagos, control de asistencia y notificaciones automatizadas",
              "Reduje tareas administrativas en 10 horas por semana mediante automatización de procesos",
              "Diseñé interfaz intuitiva para usuarios no técnicos con Next.js 13 Server Components",
            ],
            technologies: ["Next.js 13", "Supabase", "Tailwind CSS"],
          },
          {
            name: "Lumma",
            description: "Sistema de gestión de máquinas tragamonedas",
            achievements: [
              "Desarrollé dashboard centralizado para gestionar 15+ ubicaciones con tracking financiero en tiempo real",
              "Implementé visualizaciones interactivas para análisis de ingresos y control de mantenimiento",
              "Mejoré velocidad de toma de decisiones 3x mediante visualización de datos",
            ],
            technologies: ["React 18", "Recharts", "Tailwind CSS"],
          },
          {
            name: "Desarrollo para Clientes",
            description: "Soluciones personalizadas y landing pages",
            achievements: [
              "Creé landing pages y sitios web personalizados para diversos clientes, enfocados en optimización de rendimiento y UX",
              "Entregué soluciones a medida usando tecnologías modernas y mejores prácticas",
            ],
          },
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
    hasNestedProjects: exp.hasNestedProjects,
    title: exp.translations[locale].title,
    company: exp.translations[locale].company,
    description: exp.translations[locale].description,
    achievements: exp.translations[locale].achievements,
    projects: exp.translations[locale].projects,
  }));
};
