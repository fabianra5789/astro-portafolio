import type { Site, Page } from './types'

export const loaderAnimation = [
  '.loader',
  { opacity: [1, 0], pointerEvents: 'none' },
  { easing: 'ease-out' },
]

export const LINKS = {
  github: 'https://github.com/fabianra5789',
  linkedin: 'https://www.linkedin.com/in/eric-fabian-ramirez-aguilar-8b0063230/',
  mail: 'mailto:fabianra5789@gmail.com',
  instagram: 'https://www.instagram.com/Ericc.raw/',
  
}

// Global
export const SITE: Site = {
  TITLE: 'Astro Sphere',
  DESCRIPTION:
    'Welcome to Astro Sphere, a portfolio and blog for designers and developers.',
  AUTHOR: 'Mark Horn',
}

// Work Page
export const WORK: Page = {
  TITLE: 'Work',
  DESCRIPTION: 'Places I have worked.',
}

// Blog Page
export const BLOG: Page = {
  TITLE: 'Blog',
  DESCRIPTION: 'Writing on topics I am passionate about.',
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: 'Projects',
  DESCRIPTION: 'Recent projects I have worked on.',
}

// Search Page
export const SEARCH: Page = {
  TITLE: 'Search',
  DESCRIPTION: 'Search all posts and projects by keyword.',
}

// Study Page
export const STUDIES = [
  {
    title: 'Computer Science',
    institution: 'Universidad Central',
    link: 'https://www.ucentral.edu.co/',
    date: '2020 - 2025',
  },
  {
    title: 'Technician in Computer Equipment Maintenance',
    institution: 'Sena',
    link: 'https://sofiaplus-edu.com/tecnico-matenimiento-equipos-computo/#google_vignette/',
    date: '2018 - 2020',
  },
  
  {
    title: '...',
    institution: 'Youtube',
    link: 'https://www.youtube.com/@midulive',
    date: '2018 - 2025',
  },
  
]

export const EXPERIENCE = [
  {
    company: 'Carvajal tecnologia y servicios',
    location: 'Bogotá D C, Colombia',
    position: 'Systems Technician',
    start: '2022',
    link: 'https://www.carvajaltys.com/',
    end: 'Current',
    tasks: [
      'I provided support for computer equipment, printers, software applications, managed tools like GLPI, handled inventories, etc.',
      ,
    ],
  },
  {
    company: 'Carvajal tecnologia y servicios',
    location: 'Bogotá D C, Colombia',
    position: 'Systems Engineer',
    link: 'https://www.carvajaltys.com/',
    start: '2022',
    end: 'Current',
    tasks: [
      'Development  platform with the use of React, Redux, and Material UI',
      'Development internal platform with the use of React, Redux, and Material UI',
      'Testing and debugging',
    ],
  },
  {
    company: 'Avista',
    link: 'https://avista.co/',
    location: 'Bogotá D C, Colombia',
    position: 'Systems Technician',
    start: '2019',
    end: '2020',
    tasks: [
      'I provided support for computer equipment, printers, software applications, managed tools like GLPI, handled inventories, etc.',
      ,
    ],
  },
  
]
