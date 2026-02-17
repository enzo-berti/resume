import type { ResumeConfig } from './types'

export const resumeConfig: ResumeConfig = {
  // ===== PERSONAL INFO =====
  personal: {
    name: 'Enzo Berti',
    photo: '/images/photo.jpg', // Place your photo in public/images/
    photoBackEmoji: '🦆', // Shown when clicking the photo (3D flip)
    title: {
      en: 'Game Developper',
      fr: 'Développeur Gameplay',
    },
    subtitle: {
      en: '5 years of experience',
      fr: '5 ans d\'expérience',
    },
    location: 'Strasbourg, France',
  },

  // ===== SEO (used in <head> meta tags) =====
  seo: {
    title: 'Enzo Berti — Game Developper',
    description: 'Interactive resume of Enzo Berti, Gameplay Developper specializing in c++, unity and unreal engine.',
  },

  // ===== LANGUAGES =====
  languages: {
    default: 'fr',
    available: ['en', 'fr'],
    labels: {
      en: 'EN',
      fr: 'FR',
    },
  },

  // ===== CONTACT =====
  contact: [
    { type: 'github', label: '/enzo-berti', href: 'https://github.com/enzo-berti' },
    { type: 'itch', label: 'enzoberti.itch.io', href: 'https://enzoberti.itch.io/' },
    { type: 'linkedin', label: 'in/Enzo-Berti', href: 'https://linkedin.com/in/enzo-berti/' },
    { type: 'email', label: 'enzoberti@protonmail.com' },
    { type: 'location', label: 'Strasbourg, France' },
  ],

  // ===== SKILLS =====
  skills: [
    {
      title: { en: 'Languages', fr: 'Langues' },
      type: 'languages',
      items: [
        { name: { en: 'French', fr: 'Français' }, level: { en: 'Native', fr: 'Natif' } },
        { name: { en: 'English', fr: 'Anglais' }, level: { en: 'Professional', fr: 'Professionnel' }, details: 'Passage du TOEIC en cours' },
      ],
    },
    {
      title: { en: 'Langage', fr: 'Language' },
      type: 'badges',
      items: [
        { name: 'C++' },
        { name: 'C#' },
        { name: 'C' },
        { name: 'Python' },
      ],
    },
    {
      title: { en: 'Game Engine', fr: 'Moteur de jeux' },
      type: 'badges',
      items: [
        { name: 'Unity' },
        { name: 'Godot' },
        { name: 'Unreal Engine 5' },
      ],
    },
    {
      title: { en: 'Other', fr: 'Autres' },
      type: 'badges',
      items: [
        { name: 'Sqlite' },
        { name: 'Wpf' },
        { name: 'Windows Forms' },
        { name: 'AWS' },
      ],
    },
    {
      title: { en: 'Methodologies', fr: 'Méthodologies' },
      type: 'text',
      items: [
        { name: { en: 'Agile/Scrum, TDD, Code Review, CI/CD', fr: 'Agile/Scrum, TDD, Code Review, CI/CD' } },
      ],
    },
  ],

  // ===== PROFESSIONAL EXPERIENCES =====
  experiences: [
    {
      id: 'company-a',
      company: { en: 'TechCorp', fr: 'TechCorp' },
      role: { en: 'Senior Fullstack Developer', fr: 'Développeuse Fullstack Senior' },
      type: { en: 'Permanent', fr: 'CDI' },
      period: { en: '2022 - Present', fr: '2022 - Présent' },
      description: {
        en: 'Led the development of a SaaS platform used by 10k+ users. Built microservices architecture and modern React frontend.',
        fr: 'Direction du développement d\'une plateforme SaaS utilisée par 10k+ utilisateurs. Architecture microservices et frontend React moderne.',
      },
      techs: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
      isHighlighted: true,
      details: {
        context: {
          en: 'Team of 8 developers within a 50-person product company. Agile/Scrum methodology with 2-week sprints, CI/CD pipeline with GitHub Actions, code reviews on every PR.',
          fr: 'Équipe de 8 développeurs au sein d\'une société produit de 50 personnes. Méthodologie Agile/Scrum avec sprints de 2 semaines, pipeline CI/CD avec GitHub Actions, code review sur chaque PR.',
        },
        tasks: {
          en: [
            'Designed and implemented the frontend architecture (monorepo, shared component library)',
            'Built a real-time notification system using WebSockets and Redis pub/sub',
            'Migrated legacy codebase from JavaScript to TypeScript (200+ files)',
            'Implemented role-based access control (RBAC) across the entire platform',
            'Set up automated testing with 85% code coverage (unit, integration, E2E)',
            'Led the migration from REST to GraphQL for the main API',
            'Built a dashboard analytics module with interactive charts and export features',
            'Mentored 3 junior developers through pair programming and weekly 1-on-1s',
          ],
          fr: [
            'Conception et implémentation de l\'architecture frontend (monorepo, bibliothèque de composants partagés)',
            'Création d\'un système de notifications temps réel via WebSockets et Redis pub/sub',
            'Migration du code legacy de JavaScript vers TypeScript (200+ fichiers)',
            'Implémentation d\'un contrôle d\'accès basé sur les rôles (RBAC) sur toute la plateforme',
            'Mise en place de tests automatisés avec 85% de couverture (unitaires, intégration, E2E)',
            'Pilotage de la migration de REST vers GraphQL pour l\'API principale',
            'Développement d\'un module de tableau de bord analytique avec graphiques interactifs et export',
            'Mentorat de 3 développeurs juniors via pair programming et 1-on-1 hebdomadaires',
          ],
        },
        training: {
          en: [
            'AWS Solutions Architect certification',
            'Internal training on Kubernetes orchestration',
          ],
          fr: [
            'Certification AWS Solutions Architect',
            'Formation interne sur l\'orchestration Kubernetes',
          ],
        },
        env: {
          en: 'React / TypeScript / Node.js / PostgreSQL / GraphQL / Redis / Docker / AWS / GitHub Actions / Datadog',
          fr: 'React / TypeScript / Node.js / PostgreSQL / GraphQL / Redis / Docker / AWS / GitHub Actions / Datadog',
        },
      },
    },
    {
      id: 'company-b',
      company: { en: 'WebAgency', fr: 'WebAgency' },
      role: { en: 'Frontend Developer', fr: 'Développeuse Frontend' },
      type: { en: 'Permanent', fr: 'CDI' },
      period: { en: '2019 - 2022', fr: '2019 - 2022' },
      description: {
        en: 'Developed responsive web applications for various clients. Specialized in React and Angular projects.',
        fr: 'Développement d\'applications web responsives pour divers clients. Spécialisée en projets React et Angular.',
      },
      techs: ['React', 'Angular', 'TypeScript', 'SCSS'],
      details: {
        context: {
          en: 'Digital agency with 20+ clients across various industries (retail, finance, healthcare). Team of 12 developers, working on 3-4 projects simultaneously.',
          fr: 'Agence digitale avec 20+ clients dans différents secteurs (retail, finance, santé). Équipe de 12 développeurs, travaillant sur 3-4 projets simultanément.',
        },
        tasks: {
          en: [
            'Built 15+ client-facing web applications from scratch',
            'Created and maintained a shared design system used across all agency projects',
            'Implemented complex form workflows with multi-step validation',
            'Optimized web performance achieving 90+ scores on Core Web Vitals',
            'Integrated third-party APIs (payment, CRM, analytics)',
            'Set up Storybook documentation for reusable components',
            'Collaborated closely with UX designers to translate Figma mockups into pixel-perfect UIs',
          ],
          fr: [
            'Développement de 15+ applications web clients from scratch',
            'Création et maintenance d\'un design system partagé utilisé sur tous les projets de l\'agence',
            'Implémentation de workflows de formulaires complexes avec validation multi-étapes',
            'Optimisation des performances web avec scores 90+ sur les Core Web Vitals',
            'Intégration d\'APIs tierces (paiement, CRM, analytics)',
            'Mise en place de la documentation Storybook pour les composants réutilisables',
            'Collaboration étroite avec les designers UX pour traduire les maquettes Figma en interfaces pixel-perfect',
          ],
        },
        training: {
          en: [
            'Angular Advanced workshop (2 days)',
            'Accessibility (WCAG 2.1) certification',
          ],
          fr: [
            'Workshop Angular Avancé (2 jours)',
            'Certification Accessibilité (WCAG 2.1)',
          ],
        },
        env: {
          en: 'React / Angular / TypeScript / SCSS / Tailwind CSS / Storybook / Figma / GitLab CI',
          fr: 'React / Angular / TypeScript / SCSS / Tailwind CSS / Storybook / Figma / GitLab CI',
        },
      },
    },
    {
      id: 'internship',
      company: { en: 'Paradox Polygon', fr: 'Paradox Polygon' },
      role: { en: 'Unity Developer Intern', fr: 'Stagiaire Développeur Unity' },
      type: { en: 'Internship', fr: 'Stage' },
      period: { en: '01/2025 - 06/2025', fr: '01/2025 - 06/2025' },
      description: {
        en: 'Contributed to the development of an e-commerce platform. Gained experience in fullstack development.',
        fr: 'Contribution au développement d\'un jeu vidéo. Acquisition d\'expérience en développement d\'outils sur windows et Unity.',
      },
      techs: ['C#', '.NET', 'WPF', 'Unity'],
      details: {
        context: {
          en: 'Early-stage startup (seed round), small team of 3 developers building an e-commerce platform from the ground up. Fast-paced environment with weekly releases.',
          fr: 'Startup en phase de démarrage, petite équipe de 3 développeurs construisant une plateforme e-commerce from scratch. Environnement rapide avec des releases hebdomadaires.',
        },
        tasks: {
          en: [
            'Developed the product catalog with advanced filtering and search',
            'Built the shopping cart with real-time inventory checking',
            'Integrated Stripe payment gateway with 3D Secure support',
            'Implemented user authentication with JWT and OAuth (Google, Facebook)',
            'Created an admin dashboard for order management and analytics',
            'Wrote API documentation with Swagger/OpenAPI',
          ],
          fr: [
            'Développement du catalogue produits avec filtrage avancé et recherche',
            'Création du panier d\'achat avec vérification de stock en temps réel',
            'Intégration de la passerelle de paiement Stripe avec support 3D Secure',
            'Implémentation de l\'authentification utilisateur avec JWT et OAuth (Google, Facebook)',
            'Création d\'un tableau de bord admin pour la gestion des commandes et les analytics',
            'Rédaction de la documentation API avec Swagger/OpenAPI',
          ],
        },
        env: {
          en: 'React / Node.js / Express / MongoDB / Stripe / JWT / Docker / Heroku',
          fr: 'React / Node.js / Express / MongoDB / Stripe / JWT / Docker / Heroku',
        },
      },
    },
  ],

  // ===== PROJECTS (optional) =====
  projects: [
    {
      id: 'project-a',
      title: { en: 'WeatherApp', fr: 'WeatherApp' },
      description: {
        en: 'A real-time weather dashboard built with React and OpenWeather API.',
        fr: 'Un tableau de bord météo en temps réel construit avec React et l\'API OpenWeather.',
      },
      techs: ['React', 'TypeScript'],
      url: 'https://weather-app.example.com',
      github: 'https://github.com/janedoe/weather-app',
    },
    {
      id: 'project-b',
      title: { en: 'TaskManager', fr: 'TaskManager' },
      description: {
        en: 'A Kanban-style task management tool with drag-and-drop.',
        fr: 'Un outil de gestion de tâches style Kanban avec glisser-déposer.',
      },
      techs: ['React', 'Node.js', 'PostgreSQL'],
      github: 'https://github.com/janedoe/task-manager',
    },
  ],

  // ===== EDUCATION =====
  education: [
    {
      school: { en: 'Creajeux', fr: 'Creajeux' },
      degree: { en: 'Bachelor Software engineer', fr: 'Licence informatique' },
      specialty: { en: 'tbd', fr: 'tbd' },
      period: '2022 - 2025',
    },
    {
      school: { en: 'Creajeux', fr: 'Creajeux' },
      degree: { en: 'Preparatory class', fr: 'Classe préparatoire aux grandes écoles' },
      specialty: { en: 'Mathematics and Computer Science', fr: 'Mathématiques et informatique' },
      period: '2021 - 2022',
    },
    {
      school: { en: 'University of Paris', fr: 'Université de Paris' },
      degree: { en: 'Bachelor in Computer Science', fr: 'Licence Informatique' },
      period: '2014 - 2017',
    },
  ],

  // ===== HOBBIES (optional) =====
  hobbies: [
    {
      title: { en: 'Photography', fr: 'Photographie' },
      details: [
        { en: ' Landscape photography', fr: 'Photographie paysage' },
      ],
    },
    {
      title: { en: 'Hiking', fr: 'Randonnée' },
      details: [
        { en: 'Mountain trails', fr: 'Sentiers de montagne' },
      ],
    },
    {
      title: { en: 'Open Source', fr: 'Open Source' },
    },
    {
      title: { en: 'Video editing', fr: 'Montage vidéo' },
      details: [
        { en: 'Game trailers, podcast', fr: 'Podcast, trailer de jeux vidéo' },
      ],
    },
  ],

  // ===== PDF (optional — place your PDF in public/cv/) =====
  // Use a string for the same PDF in all languages,
  // or a LocalizedString for one PDF per language (button is hidden if no PDF for the current language).
  pdf: {
    label: { en: 'Download PDF', fr: 'Télécharger le PDF' },
    path: { en: '/cv/resume-en.pdf', fr: '/cv/resume-fr.pdf' },
  },

  // ===== THEME =====
  theme: {
    preset: 'warm', // 'minimal' | 'warm' | 'ocean' | 'forest' | 'slate' | 'lilac'
    // You can override individual colors:
    // colors: {
    //   primary: '#8B5A2B',
    //   primaryLight: '#D4A574',
    // },
  },

  // ===== UI LABELS =====
  labels: {
    sections: {
      contact: { en: 'CONTACT', fr: 'CONTACT' },
      skills: { en: 'SKILLS', fr: 'COMPÉTENCES' },
      experience: { en: 'PROFESSIONAL EXPERIENCE', fr: 'EXPÉRIENCES PROFESSIONNELLES' },
      education: { en: 'EDUCATION', fr: 'FORMATION' },
      projects: { en: 'PROJECTS', fr: 'PROJETS' },
      hobbies: { en: 'HOBBIES', fr: 'LOISIRS' },
    },
    experience: {
      mainTasks: { en: 'Main tasks:', fr: 'Tâches principales :' },
      moreTasks: { en: 'more tasks...', fr: 'autres tâches...' },
      training: { en: 'Training:', fr: 'Formations :' },
      techEnv: { en: 'Tech environment:', fr: 'Env. technique :' },
      technologies: { en: 'Technologies', fr: 'Technologies' },
    },
    actions: {
      clickHint: { en: 'Click on experiences to see more details', fr: 'Cliquez sur les expériences pour voir plus de détails' },
      switchTheme: { en: 'Toggle dark mode', fr: 'Changer le thème' },
      downloadPdf: { en: 'Download PDF', fr: 'Télécharger le PDF' },
    },
  },
}
