'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import SparkleBackground from '@/components/effects/SparkleBackground';
import { motion } from 'framer-motion';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // TODO: Implement newsletter subscription logic
    // This is a placeholder for the actual implementation
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus('success');
      setEmail('');
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <main className="relative min-h-screen">
      <SparkleBackground />
      <Header />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-32 pb-16">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
          >
            Subscribe to My Newsletter
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300"
          >
            Stay updated with the latest insights about web development, technology trends, and my journey as a developer.
          </motion.p>
          
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="mt-10 max-w-md mx-auto"
          >
            <div className="flex gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
                disabled={status === 'loading'}
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="flex-none rounded-md bg-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>
            
            {status === 'success' && (
              <p className="mt-4 text-sm text-green-600 dark:text-green-400">
                Thanks for subscribing! Please check your email to confirm your subscription.
              </p>
            )}
            
            {status === 'error' && (
              <p className="mt-4 text-sm text-red-600 dark:text-red-400">
                Something went wrong. Please try again later.
              </p>
            )}
            
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              I care about your data. Read my{' '}
              <a href="#" className="font-semibold text-purple-600 dark:text-purple-400 hover:text-purple-500">
                privacy policy
              </a>
              .
            </p>
          </motion.form>
        </div>
      </div>
    </main>
  );
} 