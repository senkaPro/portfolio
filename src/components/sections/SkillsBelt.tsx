import React from 'react';
import { skillIcons, allSkills } from '@/data/skills';

const SkillsBelt: React.FC = () => {
  // Duplicate the skills to create a seamless loop
  const duplicatedSkills = [...allSkills, ...allSkills];

  return (
    <section className="py-12 bg-transparent overflow-hidden relative">
      <div className="absolute inset-0 z-0 opacity-80" style={{ 
        background: 'linear-gradient(90deg, rgba(25, 25, 112, 0.4), rgba(75, 0, 130, 0.5), rgba(25, 25, 112, 0.4))',
      }}></div>
      <div 
        className="flex flex-nowrap items-center whitespace-nowrap"
        style={{
          animation: 'scroll-left 20s linear infinite',
          animationDelay: '0s',
        }}
      >
        {duplicatedSkills.map((skill, index) => (
          <div key={index} className="flex items-center space-x-2 px-6 py-3 border border-gray-200 dark:border-gray-700 rounded-full mx-3 bg-white dark:bg-gray-800 shadow-md flex-shrink-0">
            <span className="h-6 w-6 text-purple-600 dark:text-purple-400">
              {skillIcons[skill] || null}
            </span>
            <span className="text-gray-800 dark:text-gray-200 text-sm font-medium">{skill}</span>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes scroll-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default SkillsBelt; 