import React from 'react';
import { skillIcons, skillsData } from '@/data/skills';
import { FaCode } from 'react-icons/fa';

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 lg:px-8">
      <div className="mx-auto lg:w-4/5">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-12 text-center bg-gradient-to-r from-purple-500 to-blue-300 text-transparent bg-clip-text">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {skillsData.map((category, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 flex flex-col">
              <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-4 text-left w-full">{category.category}</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 w-full pl-8">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center">
                    <span className="h-5 w-5 mr-2">{skillIcons[skill] || <FaCode className="text-gray-500" />}</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 