'use client';

import Header from '@/components/layout/Header';
import SparkleBackground from '@/components/effects/SparkleBackground';
import Abstract3DScene from '@/components/effects/Abstract3DScene';
import ExperienceSection from '@/components/sections/ExperienceSection';
import SkillsSection from '@/components/sections/SkillsSection';
import CertificatesSection from '@/components/sections/CertificatesSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';
import { motion } from "framer-motion";

export default function Home() {
  const summaryText = `Bringing over a decade of expertise in full-stack software development, I specialize in crafting innovative and secure web applications. From architectural design to seamless deployment, I deliver high-quality solutions that drive business success. Let's build something remarkable together.`;

  return (
    <main className="relative min-h-screen">
      <SparkleBackground />
      <Header />
      
      {/* Hero Section */}
      <section id="about" className="relative pt-24 pb-16 px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 min-h-screen">
        <div className="mx-auto lg:w-4/5 flex flex-col lg:flex-row items-center justify-between gap-12 w-full">
          <div className="lg:w-1/2 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl"
            >
              Senat Selimoski
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
            >
              Frontend Developer & Creative Technologist
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
                className="rounded-md bg-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
              >
                View Projects
              </a>
              <a href="#contact" className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                Contact Me <span aria-hidden="true">→</span>
              </a>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="w-full lg:w-1/2 h-80 lg:h-[60vh] relative"
          >
            <Abstract3DScene />
          </motion.div>
        </div>
      </section>

      <ExperienceSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Certificates Section */}
      <CertificatesSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
}
