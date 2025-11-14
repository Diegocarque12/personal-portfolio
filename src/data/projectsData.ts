// src/data/projectsData.ts

import type { Locale } from "../i18n/translations";

export interface ProjectTranslations {
  title: string;
  subtitle: string;
  description: string;
  role: string;
  overview: string;
  challenge: string;
  solution: string;
  impact: {
    metric: string;
    value: string;
    description: string;
  }[];
  features: {
    title: string;
    description: string;
  }[];
  technicalHighlights: string[];
  lessonsLearned: string[];
  nextSteps?: string[];
}

export interface ProjectData {
  slug: string;
  duration: {
    en: string;
    es: string;
  };
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  heroImage: string;
  gallery: string[];
  featured?: boolean;
  translations: {
    en: ProjectTranslations;
    es: ProjectTranslations;
  };
}

export const projectsData: Record<string, ProjectData> = {
  primefit: {
    slug: "primefit",
    duration: {
      en: "2023 - Present",
      es: "2023 - Presente",
    },
    technologies: [
      "React 18",
      "TypeScript",
      "Redux Toolkit",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "Zustand",
      "React Hook Form",
    ],
    liveUrl: "https://primefit.coach",
    heroImage: "/projects/primefit.webp",
    gallery: [
      "/projects/primefit.webp",
      "/projects/primefit-dashboard.png",
      "/projects/primefit-workouts.png",
      "/projects/primefit-clients.png",
      "/projects/primefit-mobile.png",
    ],
    featured: true,
    translations: {
      en: {
        title: "PrimeFit",
        subtitle: "Training Management System",
        description:
          "Full-stack SaaS platform for gym management with multi-tenant architecture. Features role-based access control, real-time workout tracking, and optimized state management reducing re-renders by 80-90%. Currently serving active production clients.",
        role: "Founder, UI/UX Designer & Full Stack Developer",
        overview:
          "PrimeFit was born from the need of personal trainers to efficiently manage multiple clients. As a developer and someone involved in fitness, I identified the lack of accessible and comprehensive tools for this market. I developed PrimeFit as a complete solution that not only manages workouts but also improves communication between trainers and clients.",
        challenge:
          "The main challenge was creating an application that handled multiple gyms (multi-tenant) securely, with specific roles and permissions, while maintaining optimal performance. Additionally, I needed a state system that handled real-time updates without sacrificing user experience with unnecessary re-renders.",
        solution:
          "I implemented a robust multi-tenant architecture using Row Level Security (RLS) in Supabase, complemented with Redux Toolkit for optimized global state management. I used advanced memoization techniques and custom selectors that reduced re-renders by 80-90%. The authentication and authorization system was built with multiple layers of security, from frontend to database.",
        impact: [
          {
            metric: "Re-render Reduction",
            value: "80-90%",
            description:
              "Significant performance optimization through intelligent state management",
          },
          {
            metric: "Active Clients",
            value: "5+",
            description: "Gyms currently using the platform in production",
          },
          {
            metric: "Load Time",
            value: "<2s",
            description: "Optimized full application first load",
          },
        ],
        features: [
          {
            title: "Multi-Tenant Architecture",
            description:
              "System that allows multiple gyms to operate independently on the same platform, with complete data isolation and customization per tenant.",
          },
          {
            title: "Role-Based Access Control (RBAC)",
            description:
              "Granular permission system that distinguishes between Administrators, Trainers, and Clients, with specific capabilities for each role.",
          },
          {
            title: "Real-Time Workout Tracking",
            description:
              "Clients can see their updated routines instantly when trainers make changes, using Supabase Realtime subscriptions.",
          },
          {
            title: "Analytics Dashboard",
            description:
              "Visualization of client progress, attendance statistics, and performance metrics for informed decision-making.",
          },
          {
            title: "Workout Plan Management",
            description:
              "Creation, editing, and assignment of personalized routines with exercise library, sets, reps, and technical notes.",
          },
        ],
        technicalHighlights: [
          "Redux Toolkit implementation with RTK Query for automatic caching and state synchronization",
          "Row Level Security (RLS) in PostgreSQL for database-level security",
          "Reusable custom hooks for complex business logic",
          "Bundle optimization with code splitting and lazy loading",
          "Unit and integration testing with Jest and React Testing Library",
          "CI/CD pipeline with Vercel for automatic deployments",
          "Mobile-first responsive design with Tailwind CSS",
        ],
        lessonsLearned: [
          "The importance of planning multi-tenant architecture from the start - modifying it later is costly",
          "Redux Toolkit with memoized selectors can dramatically reduce unnecessary re-renders",
          "Row Level Security in the database is crucial for secure multi-tenant applications",
          "Early feedback from real users is invaluable for prioritizing features",
          "Documenting architectural decisions greatly facilitates future maintenance",
        ],
        nextSteps: [
          "Implement native mobile app with React Native",
          "Add push notification system for workout reminders",
          "Develop payment and subscription module",
          "Integrate with wearables and popular fitness apps",
        ],
      },
      es: {
        title: "PrimeFit",
        subtitle: "Training Management System",
        description:
          "Plataforma SaaS full-stack para gestión de gimnasios con arquitectura multi-tenant. Incluye control de acceso basado en roles, seguimiento de entrenamientos en tiempo real y gestión de estado optimizada que reduce re-renders en 80-90%. Actualmente sirviendo clientes activos en producción.",
        role: "Fundador, UI/UX Designer & Full Stack Developer",
        overview:
          "PrimeFit nació de la necesidad de entrenadores personales de gestionar múltiples clientes de manera eficiente. Como desarrollador y alguien involucrado en el fitness, identifiqué la falta de herramientas accesibles y completas para este mercado. Desarrollé PrimeFit como una solución completa que no solo gestiona entrenamientos, sino que también mejora la comunicación entre entrenadores y clientes.",
        challenge:
          "El desafío principal fue crear una aplicación que manejara múltiples gimnasios (multi-tenant) de forma segura, con roles y permisos específicos, mientras mantenía un rendimiento óptimo. Además, necesitaba un sistema de estado que manejara actualizaciones en tiempo real sin sacrificar la experiencia del usuario con re-renders innecesarios.",
        solution:
          "Implementé una arquitectura multi-tenant robusta usando Row Level Security (RLS) en Supabase, complementada con Redux Toolkit para gestión de estado global optimizada. Utilicé técnicas avanzadas de memoización y selectores personalizados que redujeron los re-renders en un 80-90%. El sistema de autenticación y autorización se construyó con capas múltiples de seguridad, desde el frontend hasta la base de datos.",
        impact: [
          {
            metric: "Reducción de re-renders",
            value: "80-90%",
            description:
              "Optimización significativa del rendimiento mediante gestión de estado inteligente",
          },
          {
            metric: "Clientes activos",
            value: "5+",
            description:
              "Gimnasios usando la plataforma en producción actualmente",
          },
          {
            metric: "Tiempo de carga",
            value: "<2s",
            description: "Primera carga completa de la aplicación optimizada",
          },
        ],
        features: [
          {
            title: "Arquitectura Multi-Tenant",
            description:
              "Sistema que permite a múltiples gimnasios operar de forma independiente en la misma plataforma, con completo aislamiento de datos y personalización por tenant.",
          },
          {
            title: "Control de Acceso Basado en Roles (RBAC)",
            description:
              "Sistema granular de permisos que distingue entre Administradores, Entrenadores y Clientes, con capacidades específicas para cada rol.",
          },
          {
            title: "Seguimiento de Entrenamientos en Tiempo Real",
            description:
              "Los clientes pueden ver sus rutinas actualizadas al instante cuando los entrenadores hacen cambios, usando subscripciones de Supabase Realtime.",
          },
          {
            title: "Dashboard Analítico",
            description:
              "Visualización de progreso de clientes, estadísticas de asistencia y métricas de rendimiento para toma de decisiones informadas.",
          },
          {
            title: "Gestión de Planes de Entrenamiento",
            description:
              "Creación, edición y asignación de rutinas personalizadas con biblioteca de ejercicios, series, repeticiones y notas técnicas.",
          },
        ],
        technicalHighlights: [
          "Implementación de Redux Toolkit con RTK Query para caching automático y sincronización de estado",
          "Row Level Security (RLS) en PostgreSQL para seguridad a nivel de base de datos",
          "Custom hooks reutilizables para lógica de negocio compleja",
          "Optimización de bundle con code splitting y lazy loading",
          "Testing unitario e integración con Jest y React Testing Library",
          "CI/CD pipeline con Vercel para despliegues automáticos",
          "Diseño responsive mobile-first con Tailwind CSS",
        ],
        lessonsLearned: [
          "La importancia de planificar la arquitectura multi-tenant desde el inicio - modificarla después es costoso",
          "Redux Toolkit con selectores memoizados puede reducir dramáticamente re-renders innecesarios",
          "Row Level Security en la base de datos es crucial para aplicaciones multi-tenant seguras",
          "El feedback temprano de usuarios reales es invaluable para priorizar features",
          "Documentar decisiones arquitectónicas facilita enormemente el mantenimiento futuro",
        ],
        nextSteps: [
          "Implementar aplicación móvil nativa con React Native",
          "Agregar sistema de notificaciones push para recordatorios de entrenamientos",
          "Desarrollar módulo de pagos y suscripciones",
          "Integrar con wearables y aplicaciones de fitness populares",
        ],
      },
    },
  },

  dask: {
    slug: "dask",
    duration: {
      en: "2023",
      es: "2023",
    },
    technologies: [
      "Next.js 13",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    heroImage: "/projects/mobile-dask-dashboard.png",
    gallery: [
      "/projects/mobile-dask-dashboard.png",
      "/projects/dask-students.png",
      "/projects/dask-payments.png",
    ],
    translations: {
      en: {
        title: "Dask",
        subtitle: "Dancer Academy Administrator",
        description:
          "Complete web system for dance academies that manages students, monthly payments, notifications, and private classes.",
        role: "Full Stack Developer",
        overview:
          "Dask was developed for a local dance academy that needed to digitize its administrative management. The academy handled everything on paper and spreadsheets, which generated errors and wasted time.",
        challenge:
          "Create an intuitive system that non-technical people could easily use, with monthly payment management, attendance control, and private class scheduling.",
        solution:
          "I developed a clean and intuitive interface with Next.js 13, leveraging Server Components for better performance. The payment system includes automatic reminders and monthly report generation.",
        impact: [
          {
            metric: "Time Saved",
            value: "10h/week",
            description: "Reduction in manual administrative tasks",
          },
          {
            metric: "Students Managed",
            value: "100+",
            description: "Active students in the system",
          },
        ],
        features: [
          {
            title: "Student Management",
            description:
              "Complete database with contact information, level, payment history, and attendance.",
          },
          {
            title: "Payment Control",
            description:
              "Automated monthly fee tracking system with reminders and reports.",
          },
          {
            title: "Private Class Scheduling",
            description:
              "Interactive calendar for scheduling and managing private classes.",
          },
          {
            title: "Automatic Notifications",
            description: "Reminder system via email and push notifications.",
          },
        ],
        technicalHighlights: [
          "Next.js 13 Server Components for optimized rendering",
          "Authentication system with Supabase Auth",
          "Automatic PDF report generation",
          "Responsive dashboard with interactive charts",
        ],
        lessonsLearned: [
          "Simplicity in UX is crucial when users aren't technical",
          "Automatic reminders significantly reduce late payments",
          "Next.js 13 Server Components improve perceived performance",
        ],
      },
      es: {
        title: "Dask",
        subtitle: "Dancer Academy Administrator",
        description:
          "Sistema web completo para academias de baile que gestiona estudiantes, pagos mensuales, notificaciones y clases privadas.",
        role: "Full Stack Developer",
        overview:
          "Dask fue desarrollado para una academia de baile local que necesitaba digitalizar su gestión administrativa. La academia manejaba todo en papel y hojas de cálculo, lo que generaba errores y pérdida de tiempo.",
        challenge:
          "Crear un sistema intuitivo que personas no técnicas pudieran usar fácilmente, con gestión de pagos mensuales, control de asistencia y agendamiento de clases privadas.",
        solution:
          "Desarrollé una interfaz limpia e intuitiva con Next.js 13, aprovechando Server Components para mejor rendimiento. El sistema de pagos incluye recordatorios automáticos y generación de reportes mensuales.",
        impact: [
          {
            metric: "Tiempo ahorrado",
            value: "10h/semana",
            description: "Reducción en tareas administrativas manuales",
          },
          {
            metric: "Estudiantes gestionados",
            value: "100+",
            description: "Estudiantes activos en el sistema",
          },
        ],
        features: [
          {
            title: "Gestión de Estudiantes",
            description:
              "Base de datos completa con información de contacto, nivel, historial de pagos y asistencia.",
          },
          {
            title: "Control de Pagos",
            description:
              "Sistema automatizado de seguimiento de mensualidades con recordatorios y reportes.",
          },
          {
            title: "Agenda de Clases Privadas",
            description:
              "Calendario interactivo para agendar y gestionar clases privadas.",
          },
          {
            title: "Notificaciones Automáticas",
            description:
              "Sistema de recordatorios por email y notificaciones push.",
          },
        ],
        technicalHighlights: [
          "Server Components de Next.js 13 para rendering optimizado",
          "Sistema de autenticación con Supabase Auth",
          "Generación automática de reportes en PDF",
          "Dashboard responsive con gráficos interactivos",
        ],
        lessonsLearned: [
          "La simplicidad en UX es crucial cuando los usuarios no son técnicos",
          "Los recordatorios automáticos reducen significativamente pagos atrasados",
          "Next.js 13 Server Components mejoran el rendimiento perceptible",
        ],
      },
    },
  },

  lumma: {
    slug: "lumma",
    duration: {
      en: "2024",
      es: "2024",
    },
    technologies: [
      "React 18",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Recharts",
    ],
    heroImage: "/projects/lumma.webp",
    gallery: [
      "/projects/lumma.webp",
      "/projects/lumma-dashboard.png",
      "/projects/lumma-reports.png",
    ],
    translations: {
      en: {
        title: "Lumma",
        subtitle: "Slot Machine Management System",
        description:
          "Comprehensive system for managing multiple slot machine venues, revenue tracking, maintenance costs, and financial analysis.",
        role: "Frontend Developer",
        overview:
          "Lumma was created for a company that operates slot machines in multiple locations and needed to centralize financial and operational management.",
        challenge:
          "Consolidate information from multiple locations into a unified view, with drill-down capability to individual level, including expenses, revenue, and maintenance.",
        solution:
          "I developed a centralized dashboard with interactive visualizations using Recharts, allowing analysis by location, machine, or specific time period.",
        impact: [
          {
            metric: "Locations Managed",
            value: "15+",
            description: "Locations with monitored machines",
          },
          {
            metric: "Decision Making",
            value: "3x faster",
            description: "Thanks to real-time visualization",
          },
        ],
        features: [
          {
            title: "Multi-Location Dashboard",
            description:
              "Consolidated view of all locations with key metrics and alerts.",
          },
          {
            title: "Financial Analysis",
            description:
              "Detailed reports of revenue, expenses, and profitability by location.",
          },
          {
            title: "Maintenance Control",
            description:
              "Tracking system for preventive and corrective maintenance.",
          },
          {
            title: "Interactive Visualizations",
            description: "Dynamic charts and tables for deep data analysis.",
          },
        ],
        technicalHighlights: [
          "Query optimization for large volumes of financial data",
          "Implementation of advanced filters and real-time searches",
          "Report export in multiple formats (PDF, Excel)",
          "Role system for different access levels",
        ],
        lessonsLearned: [
          "Data visualization is as important as the data itself",
          "Quick filters and searches are essential in financial dashboards",
          "Smart caching can dramatically improve performance with large data",
        ],
      },
      es: {
        title: "Lumma",
        subtitle: "Slot Machine Management System",
        description:
          "Sistema integral para gestionar múltiples locales de máquinas tragamonedas, tracking de ingresos, costos de mantenimiento y análisis financiero.",
        role: "Frontend Developer",
        overview:
          "Lumma fue creado para una empresa que opera máquinas tragamonedas en múltiples ubicaciones y necesitaba centralizar la gestión financiera y operativa.",
        challenge:
          "Consolidar información de múltiples locales en una vista unificada, con capacidad de drill-down a nivel individual, incluyendo gastos, ingresos y mantenimiento.",
        solution:
          "Desarrollé un dashboard centralizado con visualizaciones interactivas usando Recharts, permitiendo análisis por local, máquina o periodo de tiempo específico.",
        impact: [
          {
            metric: "Locales gestionados",
            value: "15+",
            description: "Ubicaciones con máquinas monitoreadas",
          },
          {
            metric: "Toma de decisiones",
            value: "3x más rápida",
            description: "Gracias a visualización en tiempo real",
          },
        ],
        features: [
          {
            title: "Dashboard Multi-Local",
            description:
              "Vista consolidada de todos los locales con métricas clave y alertas.",
          },
          {
            title: "Análisis Financiero",
            description:
              "Reportes detallados de ingresos, gastos y rentabilidad por ubicación.",
          },
          {
            title: "Control de Mantenimiento",
            description:
              "Sistema de tracking para mantenimientos preventivos y correctivos.",
          },
          {
            title: "Visualizaciones Interactivas",
            description:
              "Gráficos y tablas dinámicas para análisis profundo de datos.",
          },
        ],
        technicalHighlights: [
          "Optimización de queries para grandes volúmenes de datos financieros",
          "Implementación de filtros avanzados y búsquedas en tiempo real",
          "Exportación de reportes en múltiples formatos (PDF, Excel)",
          "Sistema de roles para diferentes niveles de acceso",
        ],
        lessonsLearned: [
          "La visualización de datos es tan importante como los datos mismos",
          "Los filtros y búsquedas rápidas son esenciales en dashboards financieros",
          "El caching inteligente puede mejorar dramáticamente el performance con datos grandes",
        ],
      },
    },
  },
};

// Helper to get a specific project with translations
export const getProject = (slug: string, locale: Locale = "en") => {
  const project = projectsData[slug];
  if (!project) return undefined;

  return {
    slug: project.slug,
    duration: project.duration[locale],
    technologies: project.technologies,
    liveUrl: project.liveUrl,
    githubUrl: project.githubUrl,
    heroImage: project.heroImage,
    gallery: project.gallery,
    featured: project.featured,
    ...project.translations[locale],
  };
};

// Helper to get all projects
export const getAllProjects = (locale: Locale = "en") => {
  return Object.keys(projectsData).map((slug) => getProject(slug, locale));
};

// Helper to get project slugs (useful for getStaticPaths)
export const getProjectSlugs = (): string[] => {
  return Object.keys(projectsData);
};
