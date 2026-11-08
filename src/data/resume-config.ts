import type { ResumeConfig } from './types'

export const resumeConfig: ResumeConfig = {
  // ===== PERSONAL INFO =====
  personal: {
    name: 'Enzo Berti',
    photo: '/images/photo.jpg',
    photoBackEmoji: '🦆',
    title: {
      en: 'Gameplay Developer',
      fr: 'Développeur Gamepaly',
    },
    subtitle: {
      en: 'Developeur in the search of a new experience',
      fr: 'Freelance à la recherche de nouvelles expériences',
    },
    location: 'Strasbourg, France',
  },

  // ===== SEO (used in <head> meta tags) =====
  seo: {
    title: 'Enzo Berti - Gameplay Developer',
    description: 'Interactive resume of Enzo Berti, Gameplay Developer specializing in C++, C#, .NET, Unity and Unreal Engine.',
  },

  // ===== LANGUAGES =====
  languages: {
    default: 'fr',
    available: ['fr'],
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
    { type: 'email', label: 'contact@enzoberti.fr' },
    { type: 'location', label: 'Strasbourg, France' },
  ],

  // ===== SKILLS =====
  skills: [
    {
      title: { en: 'Languages', fr: 'Langues' },
      type: 'languages',
      items: [
        { name: { en: 'French', fr: 'Français' }, details: { en: '', fr: 'Natif' } },
        { name: { en: 'English', fr: 'Anglais' }, details: { en: '', fr: 'Professionnel' } },
        { name: { en: 'Spanish', fr: 'Espagnol' }, details: { en: 'School', fr: 'Scolaire' }},
        { name: { en: 'German', fr: 'Allemand' }, details: { en: 'School', fr: 'Scolaire' }},
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
        { name: 'SQL' },
      ],
    },
    {
      title: { en: 'Game Engines', fr: 'Moteurs de jeux' },
      type: 'badges',
      items: [
        { name: 'Unity' },
        { name: 'Unreal Engine 5' },
        { name: 'Godot' },
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
    {
      title: { en: 'Methodologies', fr: 'Méthodologies' },
      type: 'text',
      items: [
        { name: { en: 'Scrum' } },
        { name: { en: 'Agile' } },
     ],
    },
  ],

  // ===== PROFESSIONAL EXPERIENCES =====
  experiences: [
    {
      id: 'tatou-software-a',
      company: { en: 'Piki&Co', fr: 'Piki&Co' },
      role: { en: 'Unity Developer', fr: 'Développeur Unity' },
      type: { en: 'Freelance', fr: 'Freelance' },
      period: { en: 'sept. 2026 - oct. 2026', fr: 'sept. 2026 - oct. 2026' },
      description: {
        en: 'Gameplay development in freelance with multiple individuals',
        fr: 'Développement et intégration d\'un prototype de jeu mobile sur Unity',
      },
      techs: ['Unity', 'C#', '.NET'],
      isHighlighted: true,
      details: {
        context: {
          en: '',
          fr: 'Pendant 2 mois, j\'ai développé de A à Z un prototype de jeu pour Piki&Co. Ce prototype est une application mobile pour enfants leur apprenant l\'anglais.',
        },
        tasks: {
          en: [
          ],
          fr: [
            'Développement du gameplay',
            'Création des UI',
            'Développement d\'outils pour la game designer',
            'Intégration des sons, musiques et graphismes du jeu',
          ],
        },
        env: {
          en: '',
          fr: 'Visual Studio, Git',
        },
      },
    },
    {
      id: 'indy-a',
      company: { en: 'Non annonced project', fr: 'Projet non annoncé' },
      role: { en: 'Unreal Engine Programmer', fr: 'Développeur Unreal Engine' },
      type: { en: 'Indy', fr: 'Indépendant' },
      period: { en: 'mars 2026 - avril 2026', fr: 'mars 2026 - avril 2026' },
      description: {
        en: 'Help a team of 7 students.',
        fr: 'Aide un groupe de 7 personnes étudiants',
      },
      techs: ['Unreal Engine 5', 'C++', 'Blueprint'],
      isHighlighted: false,
      details: {
        context: {
          en: 'I\'m actually helping a group of student at CNAM Enjmin for developing a professional game. I check, fix the scripts and give a new point of view on how to develop a long term project',
          fr: 'J\'ai aidé plusieurs étudiants du CNAM Enjmin à développer un prototype de jeu. J\'ai vérifié et corrigé les scripts, mais aussi développé un Kinematic Character Controller pour le projet',
        },
        tasks: {
          en: [
            'Git master',
            'Character controler',
            'Fixing bugs',
            'Creation of tools for game designers',
          ],
          fr: [
            'Git master',
            'Character controler',
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
      id: 'internship',
      company: { en: 'Paradox Polygon', fr: 'Paradox Polygon' },
      role: { en: 'Unity Developer Intern', fr: 'Stagiaire Développeur Unity C# .NET' },
      type: { en: 'Internship', fr: 'Stage' },
      period: { en: 'janv. 2025 -  juin 2025', fr: 'janv. 2025 -  juin 2025' },
      description: {
        en: 'Contributing in the development of a video game. Acquisition of experience in tool\'s development in Windows and Unity',
        fr: 'Contribution au développement d\'un jeu vidéo. Acquisition d\'expérience en développement d\'outils sur Windows et Unity',
      },
      techs: ['C#', '.NET', 'Unity', 'WPF'],
      details: {
        context: {
          en: 'Professional internship of 6 month for my final year of bachelor\'s',
          fr: 'Stage professionnel de 6 mois pour confirmer ma dernière année de licence',
        },
        tasks: {
          en: [
            'Development of procedurals mesh destruction',
            'Character controller',
            'Optimisation',
          ],
          fr: [
            'Développement de destruction de meshs procéduraux',
            'Character controller',
            'Optimisation',
          ],
        },
        env: {
          en: 'tbd',
          fr: 'Visual Studio, Turtoise SVN',
        },
      },
    },
    {
      id: 'freelance-school',
      company: { en: 'Freelance Developer', fr: 'Développeur Freelance Fiverr' },
      role: { en: 'Software Developer', fr: 'Développeur Unity & Unreal' },
      type: { en: 'Freelance', fr: 'Freelance' },
      period: { en: '2024 - 2025', fr: '2024 - 2025' },
      description: {
        en: 'Gameplay development in freelance with multiple individuals',
        fr: 'Développement gameplay en freelance pour plusieurs particuliers pendant mes études',
      },
      techs: ['C++', 'C#', '.NET', 'Unity', 'Unreal Engine 5'],
      isHighlighted: false,
      details: {
        context: {
          en: 'During my studies I started developing in freelance to gain experience. Thanks to this I learn how to work with clients',
          fr: 'Au cours de mes études je me suis lancé dans le développement freelance pour gagner de l\'expérience. Grâce à cela j\'ai pu apprendre plus concrètement comment travailler avec des clients. Désormais je continue la freelance pour aider ceux dans le besoin',
        },
        tasks: {
          en: [
            'Rewrite architecture',
            'Tools development',
            'Gameplay development',
          ],
          fr: [
            'Réécriture d\'architecture de code',
            'Développement d\'outils',
            'Développement gameplay',
            'Game Design',
          ],
        },
        env: {
          en: 'Visual Studio, Rider, Git, Trello',
          fr: 'Visual Studio, Rider, Git, Trello',
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
        fr: 'TatouEngine est un moteur de jeu ECS réalisé en 2 semaines sur C++ avec OpenGL. Il est mon projet de soutenance de dernière année. Je m\'intéresse spécialement à l\'ECS et aux structures de données, pour tirer les meilleures performances possibles.',
      },
      techs: ['C++', 'OpenGL', 'ImGui'],
    },
    {
      id: 'school-project-a',
      title: { en: 'SeedWagon', fr: 'SeedWagon' },
      description: {
        en: 'tbd',
        fr: 'SeedWagon est le premier projet Unreal Engine sur lequel j\'ai travaillé. J\'ai pu concevoir le level design grâce au Terrain Tool et faire des outils de création d\'énigmes pour les game designers. J\'ai pu par la suite rentrer un peu plus dans les entrailles du moteur en optimisant le rendu du jeu et le monde ouvert.',
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
        fr: 'Durant ce projet, j\'ai développé la génération procédurale des niveaux et mis en place l\'intégration d\'Houdini dans Unity pour concevoir et tester les environnements. J\'ai également collaboré étroitement avec les graphistes responsables de l\'éclairage, en leur proposant une solution permettant de précalculer les lumières des prefabs.',
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
        fr: 'Ceci est le projet le plus technique que j\'ai réalisé. Nous avons codé, sans aucun moteur de jeux, une multitude d\'outils pour façonner notre jeu. Je me suis personnellement chargé de créer un outil d\'édition de map (un peu comme la view scene de godot) ainsi que de la création des managers des ressources ainsi que du système de sauvegarde du jeu.',
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
      title: { en: 'Une pure soirée', fr: 'Une pure soirée' },
      description: {
        en: 'tbd',
        fr: 'No Crunch Game Jam 6 de Creat\'N Connect à Strasbourg ! Nous avons eu 3 jours avec l\'interdiction de crunch pour développer ce jeu, tout ça en distanciel avec une équipe de 6 incroyables personnes',
      },
      images: ['/gamejams/unepuresoiree_a.png', '/gamejams/unepuresoiree_b.png'],
      techs: ['Godot', 'GDScript'],
      itchio: 'https://peterlebagarreur.itch.io/une-pure-soiree',
      github: 'https://github.com/enzo-berti/no-crunch-game-jam-6',
    },
    {
      id: 'gamejam-b',
      title: { en: 'SuperSpeed SPA', fr: 'SuperSpeed SPA' },
      description: {
        en: 'tbd',
        fr: 'Prix du Public The Global Game Jam 2026 à Strasbourg ! C\'est un jeu fait en 48h. Mon défi personnel pendant cette jam a été d\'apprendre et coder sur un langage et moteur de jeux complètement inconnu à mes yeux, Godot.',
      },
      images: ['/gamejams/superspeedspa_a.png', '/gamejams/superspeedspa_b.png', '/gamejams/superspeedspa_c.png'],
      techs: ['Godot', 'GDScript'],
      itchio: 'https://maitrerenardeau.itch.io/superspeed-spa',
      github: 'https://github.com/enzo-berti/superspeed-spa',
    },
    {
      id: 'gamejam-c',
      title: { en: 'Demons&Deadlines', fr: 'Demons&Deadlines' },
      description: {
        en: 'This game was made in 48 hours. The challenge of this jam was that I\'m the only developer of the group. Moreover the type of the game «type game» was completly stranger to me',
        fr: 'Jeu conçu en 48 heures. Le défi de cette jam a été d\'être le seul programmeur du groupe. De plus, le style du jeu qui est un «type game» était complètement inconnu à mes yeux',
      },
      images: ['/gamejams/demonsdeadlines_a.png', '/gamejams/demonsdeadlines_b.png', '/gamejams/demonsdeadlines_c.png'],
      techs: ['Unity', 'C#'],
      itchio: 'https://github.com/enzo-berti/demons-deadlines',
      github: 'https://github.com/enzo-berti/demons-deadlines',
    },
  ],

  // ===== EDUCATION =====
  education: [
    {
      school: { en: 'Creajeux', fr: 'Creajeux' },
      degree: { en: 'Bachelor computer science', fr: 'Licence informatique' },
      specialty: { en: 'C#, C++, Unity, Unreal Engine', fr: 'C#, C++, Unity, Unreal Engine' },
      period: '2022 - 2025',
    },
    {
      school: { en: 'Creajeux', fr: 'Creajeux' },
      degree: { en: 'Preparatory class', fr: 'Classe préparatoire aux grandes écoles' },
      specialty: { en: 'Mathematics and Computer Science', fr: 'Mathématiques et informatiques' },
      period: '2021 - 2022',
    },
    {
      school: { en: 'Dhuoda', fr: 'Dhuoda' },
      degree: { en: 'High School Diploma in Science', fr: 'Baccalauréat Général S' },
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
        { en: 'Livestream, game trailers, podcast', fr: 'Livestream, podcast, trailer de jeux vidéo' },
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