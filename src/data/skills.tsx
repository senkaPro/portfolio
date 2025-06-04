import React from 'react';
import { 
  SiPython,
  SiDjango,
  SiFlask,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiNestjs,
  SiTailwindcss,
  SiGit,
  SiDocker,
  SiPostgresql,
  SiLinux,
  SiCss3,
  SiHtml5,
  SiJquery,
  SiSass,
  SiRedis,
} from 'react-icons/si';
import { FaCode } from 'react-icons/fa';
import {
  FiFlag,
} from 'react-icons/fi';

interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillIcons: { [key: string]: React.ReactElement } = {
  'Python': <SiPython className="text-blue-500" />,
  'Django': <SiDjango className="text-green-700" />,
  'Django Rest Framework': <SiDjango className="text-green-700" />,
  'Django templating engine': <SiDjango className="text-green-700" />,
  'Jinja templating engine': <FaCode className="text-gray-500" />,
  'Flask': <SiFlask className="text-gray-900 dark:text-white" />,
  'Javascript': <SiJavascript className="text-yellow-500" />,
  'TypeScript': <SiTypescript className="text-blue-600" />,
  'React': <SiReact className="text-blue-400" />,
  'React Native': <SiReact className="text-blue-400" />,
  'HTML': <SiHtml5 className="text-orange-600" />,
  'CSS': <SiCss3 className="text-blue-500" />,
  'Node.js': <SiNodedotjs className="text-green-500" />,
  'NestJS': <SiNestjs className="text-red-600" />,
  'Tailwind': <SiTailwindcss className="text-teal-400" />,
  'Git': <SiGit className="text-orange-600" />,
  'Docker': <SiDocker className="text-blue-500" />,
  'Software Design': <FaCode className="text-gray-500" />,
  'Web Application Security': <FaCode className="text-gray-500" />,
  'Redis': <SiRedis className="text-red-600" />,
  'PostgreSQL': <SiPostgresql className="text-blue-600" />,
  'Linux': <SiLinux className="text-yellow-500" />,
  'Sass': <SiSass className="text-pink-500" />,
  'Material-UI': <FaCode className="text-blue-500" />,
  'jQuery': <SiJquery className="text-blue-700" />,
  'Agile': <FaCode className="text-gray-500" />,
  'Testing': <FaCode className="text-gray-500" />,
  'Problem-Solving': <FaCode className="text-gray-500" />,
  'Design Patterns': <FaCode className="text-gray-500" />,
  'Work ethic': <FaCode className="text-gray-500" />,
  'CI/CD': <FaCode className="text-gray-500" />,
  'Macedonian': <FiFlag className="text-red-600" />,
  'English': <FiFlag className="text-blue-600" />,
  'Slovenian': <FiFlag className="text-green-600" />,
  'Serbian': <FiFlag className="text-red-700" />,
  'Croatian': <FiFlag className="text-blue-700" />,
  'Bulgarian': <FiFlag className="text-green-700" />,
};

export const skillsData: SkillCategory[] = [
  {
    category: 'Backend Development',
    skills: [
      'Python',
      'Django',
      'Flask',
      'Node.js',
      'NestJS',
      'PostgreSQL',
      'Redis',
    ],
  },
  {
    category: 'Frontend Development',
    skills: [
      'Javascript',
      'TypeScript',
      'React',
      'React Native',
      'HTML',
      'CSS',
      'Tailwind',
      'Material-UI',
      'jQuery',
      'Sass',
    ],
  },
  {
    category: 'Tools & Methodologies',
    skills: [
      'Git',
      'Docker',
      'Linux',
      'Agile',
      'Testing',
      'Problem-Solving',
      'Design Patterns',
      'Work ethic',
      'CI/CD',
    ],
  },
  {
    category: 'Languages',
    skills: [
      'Macedonian',
      'English',
      'Slovenian',
      'Serbian',
      'Croatian',
      'Bulgarian',
    ],
  },
];

export const allSkills = skillsData.flatMap(category => category.skills); 