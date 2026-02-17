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
        { name: { en: 'tbd' } },
      ],
    },
  ],

  // ===== PROFESSIONAL EXPERIENCES =====
  experiences: [
    {
      id: 'company-a',
      company: { en: 'TechCorp', fr: 'TechCorp' },
      role: { en: 'Software Developer', fr: 'Développeur logiciel' },
      type: { en: 'Freelance', fr: 'Freelance' },
      period: { en: '2025 - Present', fr: '2025 - Présent' },
      description: {
        en: 'tbd.',
        fr: 'tbd.',
      },
      techs: ['C++', 'C#', 'Unity', 'Unreal', 'WPF'],
      isHighlighted: true,
      details: {
        context: {
          en: 'tbd.',
          fr: 'tbd.',
        },
        tasks: {
          en: [
            'tbd',
            'tbd',
          ],
          fr: [
            'tbd',
            'tbd',
          ],
        },
        env: {
          en: 'Visual Studio Code, Git, TortoiseSVN',
          fr: 'Visual Studio Code, Git, TortoiseSVN',
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
        en: 'tbd.',
        fr: 'Contribution au développement d\'un jeu vidéo. Acquisition d\'expérience en développement d\'outils sur windows et Unity.',
      },
      techs: ['C#', '.NET', 'WPF', 'Unity'],
      details: {
        context: {
          en: 'tbd.',
          fr: 'tbd.',
        },
        tasks: {
          en: [
            'tbd',
          ],
          fr: [
            'tbd',
          ],
        },
        env: {
          en: 'tbd',
          fr: 'tbd',
        },
      },
    },
  ],

  // ===== PROJECTS =====
  projects: [
    {
      id: 'project-a',
      title: { en: 'ECS Game Engine', fr: 'ECS Game Engine' },
      description: {
        en: 'tbd',
        fr: 'tbd',
      },
      techs: ['C++', 'OpenGL'],
    },
    {
      id: 'project-b',
      title: { en: 'Netherveil', fr: 'Netherveil' },
      description: {
        en: 'tbd',
        fr: 'tbd',
      },
      techs: ['Unity', 'C#', 'FMOD'],
      itch: 'https://toraenor.itch.io/netherveil',
      github: 'https://github.com/SmoothBrainStudio/Netherveil',
    },
    {
      id: 'project-c',
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

  // ===== HOBBIES =====
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
