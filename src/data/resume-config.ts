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
      en: 'tbd',
      fr: 'Junior à la recherche d\'une belle expérience',
    },
    location: 'Strasbourg, France',
  },

  // ===== SEO (used in <head> meta tags) =====
  seo: {
    title: 'Enzo Berti - Game Developper',
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
        { name: 'Lua' },
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
      title: { en: 'Version Control', fr: 'Contrôle de version' },
      type: 'badges',
      items: [
        { name: 'Git' },
        { name: 'SVN' },
      ],
    },
    {
      title: { en: 'Tools', fr: 'Outils' },
      type: 'badges',
      items: [
        { name: '.NET' },
        { name: 'OpenGL' },
        { name: 'ImGUI' },
        { name: 'WPF' },
        { name: 'FMOD' },
        { name: 'Wwise' },
      ],
    },
    {
      title: { en: 'Pro tools', fr: 'Outils professionnels' },
      type: 'badges',
      items: [
        { name: 'Visual Studio' },
        { name: 'Rider' },
        { name: 'GitHub' },
        { name: 'Trello' },
        { name: 'Figma' },
        { name: 'Miro' },
        { name: 'Draw.io' },
      ],
    },
    //{
    //  title: { en: 'Methodologies', fr: 'Méthodologies' },
    //  type: 'text',
    //  items: [
    //    { name: { en: 'Scrum' } },
    //    { name: { en: 'Agile' } },
    // ],
    //},
  ],

  // ===== PROFESSIONAL EXPERIENCES =====
  experiences: [
    {
      id: 'company-a',
      company: { en: 'Freelance Developer', fr: 'Projet non annoncé' },
      role: { en: 'Software Developer', fr: 'Lead Développeur Unreal Engine' },
      type: { en: 'Freelance', fr: 'Freelance' },
      period: { en: '2026 - now', fr: '2026 - now' },
      description: {
        en: 'tbd.',
        fr: 'Aide une équipe de 7 personnes étudiantes',
      },
      techs: ['Unreal Engine 5', 'C++', 'Blueprint'],
      isHighlighted: true,
      details: {
        context: {
          en: 'tbd.',
          fr: '⚠️ Ce projet ne prend pas le dessus sur le professionnelles. J\'aide actuellement plusieurs étudiant du CNAM Enjmin à développer un jeu professionnelle sur Unreal Engine. Je vérifie, corrige les scripts et donne un nouveau point de vu sur comment développer un projet à long terme',
        },
        tasks: {
          en: [
            'tbd',
            'tbd',
          ],
          fr: [
            'Vérification des commits sur git',
            'Correction de bug',
            'Création d\'outils pour les développeurs',
          ],
        },
        env: {
          en: 'Rider, Git, Miro',
          fr: 'Rider, Git, Miro',
        },
      },
    },
    {
      id: 'company-b',
      company: { en: 'Freelance Developer', fr: 'Développeur Freelance' },
      role: { en: 'Software Developer', fr: 'Développeur Unity & Unreal' },
      type: { en: 'Freelance', fr: 'Freelance' },
      period: { en: '2024 - 2025', fr: '2024 - 2025' },
      description: {
        en: 'tbd.',
        fr: 'Développement gameplay en freelance pour plusieurs particulié.',
      },
      techs: ['Unity', 'C#', 'C++', 'WPF'],
      isHighlighted: false,
      details: {
        context: {
          en: 'tbd.',
          fr: 'Au cours de mes études je me suis lancé dans le développement freelance pour gagner de l\'expérience dans le développement de jeu vidéo. Grâce à cette expérience j\'ai pu apprendre plus concrètement comment travailler avec des clients.',
        },
        tasks: {
          en: [
            'tbd',
            'tbd',
            'tbd',
          ],
          fr: [
            'Réécriture d\'architecture de code',
            'Développement d\'outils',
            'Développement gameplay',
          ],
        },
        env: {
          en: 'Visual Studio Code, Git, TortoiseSVN, Trello',
          fr: 'Visual Studio Code, Git, TortoiseSVN, Trello',
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
        fr: 'Contribution au développement d\'un jeu vidéo. Acquisition d\'expérience en développement d\'outils sur Windows et Unity.',
      },
      techs: ['C#', '.NET', 'Unity'],
      details: {
        context: {
          en: 'tbd.',
          fr: 'Développement du character controller et des destructions procédurales d\'objets.',
        },
        tasks: {
          en: [
            'tbd',
          ],
          fr: [
            'Optimisation',
          ],
        },
        env: {
          en: 'tbd',
          fr: 'Visual Studio Code',
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
        fr: 'TatouEngine est un moteur de jeu ECS réalisé sur C++ avec OpenGL, réalisé en 2 semaines. Il est mon projet de soutenance de dernière année. Je m\'intéresse spécialement à l\'ECS et aux structures de données, pour avoir les meilleures performances possibles pour un jeux vidéo.',
      },
      techs: ['C++', 'OpenGL', 'ImGUI'],
    },
    {
      id: 'project-b',
      title: { en: 'SeedWagon', fr: 'SeedWagon' },
      description: {
        en: 'tbd',
        fr: 'SeedWagon est le premier projet Unreal Engine sur lequel j\'ai travaillé. J\'y ai pu concevoir le level design grâce au Terrain Tool et faire des outils de création d\'énigmes pour les game designers. J\'ai pu par la suite rentrer un peu plus dans les entrailles du moteur en optimisant le rendu du jeu et le monde ouvert.',
      },
      techs: ['Unreal Engine 5', 'C++', 'Blueprint'],
      url: 'https://toraenor.itch.io/seedwagon',
      github: 'https://github.com/SmoothBrainStudio/SeedWagon',
    },
    {
      id: 'project-c',
      title: { en: 'Netherveil', fr: 'Netherveil' },
      description: {
        en: 'tbd',
        fr: 'Durant ce projet, j\'ai développé la génération procédurale des niveaux et mis en place l\'intégration d\'Houdini dans Unity pour concevoir et tester les environnements. J\'ai également collaboré étroitement avec les graphistes responsables de l\'éclairage, en leur proposant une solution permettant de pré-calculer les lumières des prefabs.',
      },
      techs: ['Unity', 'C#', 'FMOD'],
      url: 'https://toraenor.itch.io/netherveil',
      github: 'https://github.com/SmoothBrainStudio/Netherveil',
    },
  ],

  // ===== EDUCATION =====
  education: [
    {
      school: { en: 'Creajeux', fr: 'Creajeux' },
      degree: { en: 'Bachelor Software engineer', fr: 'Licence informatique' },
      specialty: { en: 'C#, C++, Unity, Unreal Engine', fr: 'C#, C++, Unity, Unreal Engine' },
      period: '2022 - 2025',
    },
    {
      school: { en: 'Creajeux', fr: 'Creajeux' },
      degree: { en: 'Preparatory class', fr: 'Classe préparatoire aux grandes écoles' },
      specialty: { en: 'Mathematics and Computer Science', fr: 'Mathématiques et informatique' },
      period: '2021 - 2022',
    },
    {
      school: { en: 'Dhuoda', fr: 'Dhuoda' },
      degree: { en: 'tbd', fr: 'Baccalauréat Général S' },
      specialty: { en: 'Mathematics and Computer Science', fr: 'Mathématique, Numérique et Sciences Informatiques' },
      period: '2018 - 2021',
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
