'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

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
    <section id="experience" className="py-24 px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 min-h-[600px]">
      <div className="mx-auto lg:w-4/5">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-16 text-center bg-gradient-to-r from-purple-500 to-blue-300 text-transparent bg-clip-text">
          Work Experience
        </h2>
        
        <VerticalTimeline 
          lineColor="linear-gradient(to bottom, #8b5cf6, #3b82f6, #8b5cf6)"
          className="custom-timeline"
        >
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ 
                background: 'white',
                color: '#1f2937',
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                borderRadius: '12px',
                border: 'none'
              }}
              contentArrowStyle={{ 
                borderRight: '7px solid white',
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
              }}
              date={exp.dates}
              dateClassName="text-purple-600 dark:text-purple-400 font-semibold"
              iconStyle={{ 
                background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
                color: '#fff',
                boxShadow: '0 4px 12px rgba(139, 92, 246, 0.3)'
              }}
              icon={<FaBriefcase />}
            >
              <motion.div
                layout
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {exp.title}
                </h3>
                <div className="flex items-center mb-3">
                  <p className="text-purple-600 dark:text-purple-400 font-semibold">{exp.company}</p>
                  <span className="mx-2 text-gray-400">•</span>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{exp.location}</p>
                </div>
                <ul className="space-y-2">
                  {exp.description.map((point, i) => (
                    <li key={i} className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed flex items-start">
                      <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
      
      <style jsx>{`
        .custom-timeline .vertical-timeline-element {
          margin-bottom: 2rem;
        }
        
        .custom-timeline .vertical-timeline-element--work .vertical-timeline-element-content {
          border-left: 4px solid #8b5cf6;
        }
        
        .custom-timeline .vertical-timeline-element--work:hover {
          transform: translateY(-2px);
          transition: transform 0.3s ease;
        }
        
        .custom-timeline .vertical-timeline-element-date {
          font-weight: 600;
          color: #8b5cf6;
        }
        
        @media (prefers-color-scheme: dark) {
          .custom-timeline .vertical-timeline-element--work .vertical-timeline-element-content {
            background: #374151 !important;
            color: #f9fafb !important;
          }
          
          .custom-timeline .vertical-timeline-element--work .vertical-timeline-element-content-arrow {
            border-right: 7px solid #374151 !important;
          }
        }
      `}</style>
    </section>
  );
} 