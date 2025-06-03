import React from 'react';
import Image from 'next/image';

interface Project {
  title: string;
  company: string;
  dates: string;
  description: string[];
  technologies: string[];
  link?: string;
  imagePath?: string;
  isNDA?: boolean;
}

const projectsData: Project[] = [
  {
    title: 'Integrations and Database Migration Tool',
    company: 'Dobi-Digital (Contract)',
    dates: 'April 2024 - Present',
    description: [
      'Architected, developed, tested, and deployed a robust database migration tool on Azure web services.',
      'Created a third-party integration adapter using Python and Django, enabling seamless data import and mapping.',
      'Automated complex database migration tasks, significantly streamlining client operations.',
    ],
    technologies: ['Python', 'Django', 'Azure', 'PostgreSQL'],
    link: '#', // Placeholder link
    imagePath: '/dobi.jpg',
  },
  {
    title: 'Digital Marketing Campaign Management (Ag Grid based)',
    company: 'Aleph holding - former httpool',
    dates: 'April 2023 - April 2024',
    description: [
      'Developed a cutting-edge super grid-like layer system for digital marketing campaign management, leveraging Ag Grid library.',
      'Created and documented a proprietary UI library with Storybook, focusing on component reusability and testing.',
      'Extended grid functionalities (vertical/horizontal modes) and implemented automatic release pipelines.',
      'Integrated analytics with charts and in-grid cell charts, and developed a shortcut system for enhanced user control.',
    ],
    technologies: ['React', 'TypeScript', 'Ag Grid', 'Storybook', 'Material-UI'],
    link: 'https://wise.blue',
    imagePath: '/wise-blue.webp',
  },
  {
    title: 'Custom Document Management System',
    company: 'Dobi-Digital',
    dates: 'January 2023 - April 2023',
    description: [
      'Responsible for tech stack selection and architecture setup for a Document Management System for a Swiss client.',
      'Implemented multi-role user access, document workflow tracking with statuses, and admin dashboards.',
      'Configured CI/CD, file storage on Azure, caching with Redis, and scheduling for events.',
    ],
    technologies: ['NestJS', 'Python', 'Django', 'React', 'Azure', 'Redis', 'Swagger'],
    link: '#', // Placeholder link
    imagePath: '/buro.png',
  },
  {
    title: 'Insurance Mobile Application',
    company: 'Lasting Dynamics',
    dates: 'August 2022 - January 2023',
    description: [
      'Developed a high-scale iOS/Android insurance application that achieved 350,000 users in few months.',
      'Worked in a complete agile environment with a strong MVP mindset, adapting to customer feedback.',
      'Contributed to all aspects of product development, ensuring high-quality, maintainable code.',
    ],
    technologies: ['React Native', 'iOS', 'Android', 'Agile Methodologies'],
    link: 'https://play.google.com/store/apps/details?id=global.fwd.omne&hl=en',
    imagePath: '/omne.webp'
  },
  {
    title: 'Complex ERP System Frontend',
    company: 'Quantox',
    dates: 'December 2020 - August 2022',
    description: [
      'Architected and built the frontend for a complex ERP system, leading a team of 3 developers.',
      'Implemented state management with Redux and Redux-Saga, API calls with Axios, and forms with Formik.',
      'Developed custom hooks, Higher Order Components (HOCs), and a unique suggestible dropdown feature.',
    ],
    technologies: ['React', 'Node.js', 'Redux', 'Redux-Saga', 'Axios', 'Formik', 'Material-UI'],
    isNDA: true,
  },
  {
    title: 'Headless API Frontend & AI System Backend',
    company: 'Ultrasoft',
    dates: 'March 2019 - December 2020',
    description: [
      'Developed a React frontend system integrated with a Strapi headless API, using Redux for state management.',
      'Incorporated JavaScript libraries like Isotope.js for dynamic filtering and layout of components.',
      'Built an AI system for entity recognition and metadata extraction using Python and Django, with IMAP protocol integration.',
      'Created an intuitive Django Templating Engine UI for admin application management.',
    ],
    technologies: ['React', 'Strapi', 'Redux', 'Isotope.js', 'Python', 'Django', 'IMAP', 'Exim4'],
    isNDA: true,
  },
  {
    title: 'Custom Library Management System',
    company: 'Private',
    dates: 'May 2019 - December 2020',
    description: [
      'Built a comprehensive library management system with a landing page, admin dashboard, and custom e-book readers.',
      'Developed backend functionalities with Python and Django, and frontend readers/admin panel with React, Redux Toolkit, and Material-UI.',
      'Extended reader features including bookmarking, highlighting, dark/light modes, and copy protection.',
    ],
    technologies: ['Python', 'Django', 'React', 'Redux Toolkit', 'Material-UI', 'PDF.js', 'MOBI.js', 'EPUB.js'],
    isNDA: true,
  },
  {
    title: 'Various Web Development Projects (Freelance)',
    company: 'Freelance',
    dates: 'January 2017',
    description: [
      'Developed a wide range of websites and full-stack applications, including e-commerce and appointment management systems.',
      'Managed projects through the full software development life cycle, from requirements to deployment.',
      'Optimized websites for maximum speed and scalability, ensuring client satisfaction.',
    ],
    technologies: ['Python', 'Django', 'HTML', 'CSS', 'JavaScript', 'Django Templating Engine'],
    isNDA: true,
  },
  {
    title: 'CI/CD Tools & Backend Systems',
    company: 'Ultrasoft systems',
    dates: 'January 2015 - January 2017',
    description: [
      'Built, maintained, and delivered custom CI/CD tools and automated workflows, including CLI tools.',
      'Managed databases and developed custom backend systems using Python (Flask).',
      'Created responsive designs and frontend systems with JavaScript and jQuery.',
    ],
    technologies: ['Python', 'Flask', 'JavaScript', 'jQuery', 'CSS', 'CI/CD', 'CLI Tools', 'Database Management'],
    isNDA: true,
  },
];

export default function ProjectsSection() {
  const featuredProjects = projectsData.filter(project => !project.isNDA);
  const ndaProjects = projectsData.filter(project => project.isNDA);

  return (
    <section id="projects" className="py-24 px-6 lg:px-8">
      <div className="mx-auto lg:w-4/5">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-12 text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mb-24">
          {featuredProjects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-8 flex flex-col">
              <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-2">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">{project.company} | {project.dates}</p>
              
              {project.imagePath && (
                <div className="relative w-full h-80 mb-4 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                  <Image
                    src={project.imagePath}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              )}

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-200 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center rounded-md bg-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
                >
                  View Project
                  <svg className="ml-2 -mr-0.5 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-12 text-center">
          Projects under NDA
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {ndaProjects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-8 flex flex-col">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">{project.company} | {project.dates}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm italic mt-auto">Details under NDA.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 