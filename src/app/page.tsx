'use client';

import Header from '@/components/layout/Header';
import SparkleBackground from '@/components/effects/SparkleBackground';
import Abstract3DScene from '@/components/effects/Abstract3DScene';
import ExperienceSection from '@/components/sections/ExperienceSection';
import SkillsSection from '@/components/sections/SkillsSection';
import CertificatesSection from '@/components/sections/CertificatesSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';
import SkillsBelt from '@/components/sections/SkillsBelt';
import { motion } from "framer-motion";

export default function Home() {
  const summaryText = `Senior full-stack developer with 10+ years of experience building scalable web applications and digital products. I specialize in React, Node.js, and cloud architecture, delivering high-performance solutions that drive business growth. From startups to enterprise clients, I bring ideas to life with clean code and exceptional user experiences.`;

  return (
    <main className="relative min-h-screen">
      <SparkleBackground />
      <Header />
      
      {/* Hero Section */}
      <section id="about" className="relative my-24 pt-24 pb-16 px-6 lg:px-8 flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <Abstract3DScene position={[2.5, 2, -1.5]} />
        </div>
        <div className="mx-auto lg:w-4/5 flex flex-col lg:flex-row items-center justify-between gap-12 w-full relative z-10">
          <div className="lg:w-1/2 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-purple-500 to-blue-300 text-transparent bg-clip-text"
            >
              Crafting Intelligent Solutions for People & Technology
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
            >
              Full-Stack Solution Architect & Digital Innovation Specialist
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 text-lg leading-8 text-gray-700 dark:text-gray-200"
            >
              {summaryText}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-10 flex items-center justify-center gap-x-6"
            >
              <a
                href="#projects"
                className="rounded-md bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
              >
                View Work
              </a>
              <a href="#contact" className="text-sm font-semibold leading-6 text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300">
                Get In Touch <span aria-hidden="true">→</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <SkillsBelt />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Certificates Section */}
      <CertificatesSection />

      {/* Work Experience Section */}
      <ExperienceSection />

      {/* Contact Section */}
      <ContactSection />

      <footer className="relative py-6 text-center text-white dark:text-gray-400 text-sm" style={{ background: 'linear-gradient(90deg, rgba(25, 25, 112, 0.4), rgba(75, 0, 130, 0.5), rgba(25, 25, 112, 0.4))', opacity: 0.8 }}>
        &copy; {new Date().getFullYear()} Senat Selimoski. All rights reserved.
      </footer>
    </main>
  );
}
