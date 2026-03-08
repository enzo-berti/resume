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
    available: ['fr', 'en'],
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
        { name: { en: 'English', fr: 'Anglais' }, level: { en: 'Professional', fr: 'Professionnel' }, details: { en: 'TOEIC exam in progress', fr: 'Passage du TOEIC en cours' } },
        { name: { en: 'Spanish', fr: 'Espagnol' }, level: { en: 'School', fr: 'Scolaire' }},
        { name: { en: 'German', fr: 'Allemand' }, level: { en: 'School', fr: 'Scolaire' }},
      ],
    },
    {
      title: { en: 'Programming Languages', fr: 'Langages Informatiques' },
      type: 'badges',
      items: [
        { name: 'C++' },
        { name: 'C#' },
        { name: 'C' },
        { name: 'Lua' },
        { name: 'Python' },
        { name: 'SQL'},
      ],
    },
    {
      title: { en: 'Game Engines', fr: 'Moteurs de jeux' },
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
        { name: 'ImGui' },
        { name: 'WPF' },
        { name: 'SQLite'},
        { name: 'WinForm' },
        { name: 'FMOD' },
        { name: 'Wwise' },
      ],
    },
    {
      title: { en: 'Professional tools', fr: 'Outils professionnel' },
      type: 'badges',
      items: [
        { name: 'Rider' },
        { name: 'Visual Studio' },
        { name: 'Visual Studio Code' },
        { name: 'Turtoise SVN' },
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
      id: 'freelance-a',
      company: { en: 'Non annonced project', fr: 'Projet non annoncé' },
      role: { en: 'Lead Unreal Engine Programmer', fr: 'Lead Développeur Unreal Engine' },
      type: { en: 'Freelance', fr: 'Freelance' },
      period: { en: '2026 - Now', fr: '2026 - Présent' },
      description: {
        en: 'Help a team of 7 students.',
        fr: 'Aide une équipe de 7 personnes étudiantes',
      },
      techs: ['Unreal Engine 5', 'C++', 'Blueprint'],
      isHighlighted: true,
      details: {
        context: {
          en: 'I\'m actually helping a group of student at CNAM Enjmin for developing a professional game. I check, fix the scripts and give a new point of view on how to develop a long term project',
          fr: 'J\'aide actuellement plusieurs étudiant du CNAM Enjmin à développer un jeu professionnelle. Je vérifie, corrige les scripts et donne un nouveau point de vu sur comment développer un projet à long terme',
        },
        tasks: {
          en: [
            'Git master',
            'Fixing bugs',
            'Creation of tools for game designers',
          ],
          fr: [
            'Vérification des commits sur git',
            'Correction de bug',
            'Création d\'outils pour les game designers',
          ],
        },
        env: {
          en: 'Rider, Git, Miro',
          fr: 'Rider, Git, Miro',
        },
      },
    },
    {
      id: 'freelance-school',
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
          fr: 'Au cours de mes études je me suis lancé dans le développement freelance pour gagner de l\'expérience. Grâce à cela j\'ai pu apprendre plus concrètement comment travailler avec des clients.',
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
          fr: 'Stage professionnel de 6 mois pour confirmer ma dernière année au sein de Creajeux.',
        },
        tasks: {
          en: [
            'tbd',
          ],
          fr: [
            'Développement de destruction de mesh procédurale',
            'Character controller',
            'Optimisation du moteur',
          ],
        },
        env: {
          en: 'tbd',
          fr: 'Visual Studio, Turtoise SVN, Unity',
        },
      },
    },
  ],

  // ===== PROJECTS =====
  projects: [
    {
      id: 'personal-project',
      title: { en: 'ECS Game Engine', fr: 'Moteur de jeu ECS' },
      description: {
        en: 'tbd',
        fr: 'TatouEngine est un moteur de jeu ECS réalisé en 2 semaines sur C++ avec OpenGL. Il est mon projet de soutenance de dernière année. Je m\'intéresse spécialement à l\'ECS et aux structures de données, pour avoir les meilleures performances possibles pour un jeux vidéo.',
      },
      techs: ['C++', 'OpenGL', 'ImGui'],
    },
    {
      id: 'school-project-a',
      title: { en: 'SeedWagon', fr: 'SeedWagon' },
      description: {
        en: 'tbd',
        fr: 'SeedWagon est le premier projet Unreal Engine sur lequel j\'ai travaillé. J\'y ai pu concevoir le level design grâce au Terrain Tool et faire des outils de création d\'énigmes pour les game designers. J\'ai pu par la suite rentrer un peu plus dans les entrailles du moteur en optimisant le rendu du jeu et le monde ouvert.',
      },
      techs: ['Unreal Engine 5', 'C++', 'Blueprint'],
      images: ['/projects/seedwagon_a.png', '/projects/seedwagon_b.png', '/projects/seedwagon_c.png'],
      itchio: 'https://toraenor.itch.io/seedwagon',
      github: 'https://github.com/SmoothBrainStudio/SeedWagon',
    },
    {
      id: 'school-project-b',
      title: { en: 'Netherveil', fr: 'Netherveil' },
      description: {
        en: 'tbd',
        fr: 'Durant ce projet, j\'ai développé la génération procédurale des niveaux et mis en place l\'intégration d\'Houdini dans Unity pour concevoir et tester les environnements. J\'ai également collaboré étroitement avec les graphistes responsables de l\'éclairage, en leur proposant une solution permettant de pré-calculer les lumières des prefabs.',
      },
      images: ['/projects/netherveil_a.png', '/projects/netherveil_b.png', '/projects/netherveil_c.png'],
      techs: ['Unity', 'C#', 'FMOD'],
      itchio: 'https://toraenor.itch.io/netherveil',
      github: 'https://github.com/SmoothBrainStudio/Netherveil',
    },
    {
      id: 'school-project-c',
      title: { en: 'Tie-d To The Past', fr: 'Tie-d To The Past' },
      description: {
        en: 'tbd',
        fr: 'tbd',
      },
      images: ['/projects/tiedtothepast_a.png', '/projects/tiedtothepast_b.png', '/projects/tiedtothepast_c.png'],
      techs: ['C++', 'SFML', 'Tiled'],
      itchio: 'https://toraenor.itch.io/tie-d-to-the-past',
      github: 'https://github.com/SmoothBrainStudio/tied-to-the-past',
    },
  ],

  gamejams: [
    {
      id: 'gamejam-a',
      title: { en: 'SuperSpeed SPA', fr: 'SuperSpeed SPA' },
      description: {
        en: 'tbd',
        fr: 'tbd',
      },
      images: ['/gamejams/superspeedspa_a.png', '/gamejams/superspeedspa_b.png', '/gamejams/superspeedspa_c.png'],
      techs: ['Godot', 'GD'],
      itchio: 'https://maitrerenardeau.itch.io/superspeed-spa',
      github: 'https://github.com/enzo-berti/superspeed-spa',
    },
    {
      id: 'gamejam-b',
      title: { en: 'Demons&Deadlines', fr: 'Demons&Deadlines' },
      description: {
        en: 'tbd',
        fr: 'tbd',
      },
      images: ['/gamejams/demonsdeadlines_a.png', '/gamejams/demonsdeadlines_b.png', '/gamejams/demonsdeadlines_c.png'],
      techs: ['Unity', 'C#'],
      itchio: 'https://github.com/enzo-berti/demons-deadlines',
      github: 'https://github.com/SmoothBrainStudio/tied-to-the-past',
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
    preset: 'forest',
    // You can override individual colors:
    colors: {
      primary: '#2b8b5e',
      primaryLight: '#74d4af',
    },
  },

  // ===== UI LABELS =====
  labels: {
    sections: {
      contact: { en: 'CONTACT', fr: 'CONTACT' },
      skills: { en: 'SKILLS', fr: 'COMPÉTENCES' },
      experience: { en: 'PROFESSIONAL EXPERIENCE', fr: 'EXPÉRIENCES PROFESSIONNELLES' },
      education: { en: 'EDUCATION', fr: 'FORMATION' },
      projects: { en: 'PROJECTS', fr: 'PROJETS' },
      gamejams: { en: 'GAME JAMS', fr: 'GAME JAMS'},
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
