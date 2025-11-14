// src/data/projectsData.ts
export interface ProjectData {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  role: string;
  duration: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  heroImage: string;
  gallery: string[];
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
    image?: string;
  }[];
  technicalHighlights: string[];
  lessonsLearned: string[];
  nextSteps?: string[];
}

export const projectsData: Record<string, ProjectData> = {
  primefit: {
    slug: "primefit",
    title: "PrimeFit",
    subtitle: "Training Management System",
    description:
      "Plataforma SaaS full-stack para gestión de gimnasios con arquitectura multi-tenant, control de acceso basado en roles y seguimiento de entrenamientos en tiempo real.",
    role: "Fundador, UI/UX Designer & Full Stack Developer",
    duration: "2023 - Presente",
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
        description: "Gimnasios usando la plataforma en producción actualmente",
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
  dask: {
    slug: "dask",
    title: "Dask",
    subtitle: "Dancer Academy Administrator",
    description:
      "Sistema web completo para academias de baile que gestiona estudiantes, pagos mensuales, notificaciones y clases privadas.",
    role: "Full Stack Developer",
    duration: "2023",
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
  lumma: {
    slug: "lumma",
    title: "Lumma",
    subtitle: "Slot Machine Management System",
    description:
      "Sistema integral para gestionar múltiples locales de máquinas tragamonedas, tracking de ingresos, costos de mantenimiento y análisis financiero.",
    role: "Frontend Developer",
    duration: "2024",
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
};

// Helper para obtener un proyecto específico
export const getProject = (slug: string): ProjectData | undefined => {
  return projectsData[slug];
};

// Helper para obtener todos los proyectos
export const getAllProjects = (): ProjectData[] => {
  return Object.values(projectsData);
};

// Helper para obtener slugs de proyectos (útil para getStaticPaths)
export const getProjectSlugs = (): string[] => {
  return Object.keys(projectsData);
};
