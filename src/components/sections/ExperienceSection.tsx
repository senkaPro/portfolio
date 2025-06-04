import React from 'react';

interface Experience {
  title: string;
  company: string;
  location: string;
  dates: string;
  description: string[]; // Array of strings for bullet points or paragraphs
}

const experiences: Experience[] = [
  {
    title: 'Full Stack Developer on Integrations and database migration tool',
    company: 'Dobi-Digital (Contract)',
    location: 'Struga',
    dates: 'April 2024 - Present',
    description: [
      'Built a database migration tool from the ground up, including architecture, development, testing, and deployment on Azure web services.',
      'Utilized Python and Django for the service side, creating a third-party integration adapter for seamless data import and mapping.',
      'Automated complex database migration tasks, enabling clients to import, map, and migrate third-party data into their systems with ease.'
    ],
  },
  {
    title: 'Senior React Engineer',
    company: 'Aleph holding - former httpool, Aleph hoding',
    location: 'Skopje',
    dates: 'April 2023 - April 2024',
    description: [
      'Developed cutting-edge technology for digital marketing, featuring a super grid-like layer system for campaign management based on Ag Grid open library.',
      'Created and documented a proprietary UI library system with Storybook, including component creation and testing.',
      'Extended grid functionalities to support vertical and horizontal modes, and set up automatic release pipelines for the library and version management.',
      'Implemented analytics layers with charts and in-grid cell charts, and developed a shortcut system for grid control.'
    ],
  },
  {
    title: 'Lead Full-Stack engineer',
    company: 'Dobi-Digital',
    location: 'Struga',
    dates: 'January 2023 - April 2023',
    description: [
      'Responsible for tech stack selection for a custom Document Management System for a Swiss client, enabling secure document uploads and workflow tracking.',
      'Utilized NestJS for backend, Python, Django, and Django Rest Framework for microservices, and React for frontend.',
      'Set up architecture, CI/CD pipelines, backend with Swagger documentation, internationalization, database layer, and development, staging, and production environments.'
    ],
  },
  {
    title: 'Senior React Native developer',
    company: 'Lasting Dynamics',
    location: 'Remote',
    dates: 'August 2022 - January 2023',
    description: [
      'Developed an iOS/Android insurance application that achieved 350,000 users within months, working in an agile environment with a Most Viable Product (MVP) mindset.',
      'Coded software changes based on design specifications and solved complex problems using Cloud, Mobile, and Web Technologies.',
      'Analyzed and designed new systems and applications, participated in all aspects of product development, and planned, developed, tested, and maintained React Native applications.'
    ],
  },
  {
    title: 'Senior Software Engineer',
    company: 'Quantox',
    location: 'Skopje',
    dates: 'December 2020 - August 2022',
    description: [
      'Architected and built the frontend for a complex ERP system using React, Redux with Redux-Saga for state management, Axios for API calls, and Formik for form building and validation.',
      'Led a team of 3 frontend developers, ensuring on-time and high-quality project delivery.',
      'Developed custom hooks and higher-order components, including a suggestible dropdown feature that delivered backend data to users.'
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Ultrasoft',
    location: 'Skopje',
    dates: 'March 2019 - December 2020',
    description: [
      'Built a React frontend system based on a headless API (Strapi), implementing React with Redux state management and integrating JavaScript libraries like Isotope.js for filtering and layout.',
      'Developed an artificial intelligence system for entity recognition and metadata extraction using Python and Django, incorporating IMAP protocol with Exim4 for email processing.',
      'Built an intuitive UI with Django Templating Engine for admin management of application functionalities.'
    ],
  },
  {
    title: 'Library management system engineer',
    company: 'Private',
    location: 'Remote',
    dates: 'May 2019 - December 2020',
    description: [
      'Contracted to build a custom library management system, including a landing page for book rentals, an admin dashboard for managing books, users, and memberships, and custom PDF, MOBI, and EPUB readers.',
      'Used Python and Django for parts of the application, and React with Redux Toolkit and Material-UI for the online readers and admin panel.',
      'Extended reader functionalities with bookmarking, highlighting, dark/light mode themes, and copy protection.'
    ],
  },
  {
    title: 'Web Developer',
    company: 'Freelance',
    location: 'Remote',
    dates: 'January 2017',
    description: [
      'Developed a wide range of websites and full-stack applications using Python, Django, HTML, CSS, and JavaScript, including shopping applications and appointment management systems.',
      'Maintained web applications for various clients, participated in the full software development life cycle, and optimized websites for speed and scalability.'
    ],
  },
  {
    title: 'Full-stack developer',
    company: 'Ultrasoft systems',
    location: 'Nova Gorica',
    dates: 'January 2015 - January 2017',
    description: [
      'Built, maintained, and delivered custom CI/CD tools and automated workflows, including custom CLI tools.',
      'Managed databases, developed templates and templating engines, and built and deployed custom backend systems in Python (Flask).',
      'Developed frontend systems in JavaScript and jQuery, and created responsive designs with CSS.'
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="mx-auto lg:w-4/5">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-12 text-center bg-gradient-to-r from-purple-500 to-blue-300 text-transparent bg-clip-text">
          Work Experience
        </h2>
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-start lg:space-x-8">
              <div className="lg:w-1/4 text-gray-600 dark:text-gray-400 text-sm mb-4 lg:mb-0">
                <p className="font-semibold">{exp.dates}</p>
                <p>{exp.location}</p>
              </div>
              <div className="lg:w-3/4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                <p className="text-purple-600 dark:text-purple-400 mb-2">{exp.company}</p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  {exp.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 