'use client';

import Header from '@/components/layout/Header';
import SparkleBackground from '@/components/effects/SparkleBackground';
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <SparkleBackground />
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
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
        </div>
      </section>

      {/* Projects Section - Placeholder */}
      <section id="projects" className="py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Featured Projects
          </h2>
          {/* Project grid will go here */}
        </div>
      </section>

      {/* Contact Section - Placeholder */}
      <section id="contact" className="py-24 px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Get in Touch
          </h2>
          {/* Contact form will go here */}
        </div>
      </section>
    </main>
  );
}
