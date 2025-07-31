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
  whatsapp: 'https://wa.me/573102726524',
  
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
    link: 'https://www.ucentral.edu.co/oferta-academica/ingenieria-sistemas-computacion',
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
    position: 'Systems Engineer and Systems Technician',
    start: '2022',
    link: 'https://www.carvajal.com/tecnologia/',
    end: 'Current',
    tasks: [
      'I provided support for computer equipment, printers, software applications, managed tools like GLPI, handled inventories, etc.',
      ,
    ],
  },
  
  {
    company: 'Alberto Merani Foundation Projects',
    location: 'Bogotá D C, Colombia',
    position: 'Graphic Designer, Multimedia and Specialized Technician',
    link: 'https://albertomerani.org',
    start: '2025',
    end: '2025',
    tasks: [
      'Developed interactive courses for the Ministry of Education, focusing on the creation of digital educational content.',
      'Used tools such as Storyline 360 for designing learning modules and Vyond for producing animations.',
      'Implemented multimedia learning strategies to enhance the educational experience for users.',
      'Performed testing and adjustments on courses to ensure functionality and accessibility across various platforms.',
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
