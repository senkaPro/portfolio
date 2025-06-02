'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'About Me', href: '/#about' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Contact', href: '/#contact' },
  { name: 'Blog', href: '/blog' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header 
      ref={headerRef}
      className="fixed w-full bg-white dark:bg-gray-900 z-50 border-b border-gray-200 dark:border-gray-800 cursor-pointer"
      onClick={() => !mobileMenuOpen && setMobileMenuOpen(true)}
    >
      <nav className="mx-auto px-4 lg:w-4/5 lg:px-0 flex items-center justify-between h-14" aria-label="Global">
        <div className="flex-1">
          <Link href="/" className="-m-1.5 p-1.5" onClick={(e) => e.stopPropagation()}>
            <span className="text-lg font-bold text-gray-900 dark:text-white">
              Senat Selimoski
            </span>
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <div className="flex lg:hidden" onClick={(e) => e.stopPropagation()}>
          <button
            type="button"
            className="relative w-8 h-8 flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Close menu"
          >
            <motion.div
              className="absolute"
              initial={false}
              animate={mobileMenuOpen ? "open" : "closed"}
              variants={{
                open: { rotate: 45, y: 0 },
                closed: { rotate: 0, y: -4 }
              }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-5 h-0.5 bg-gray-900 dark:bg-white" />
            </motion.div>
            <motion.div
              className="absolute"
              initial={false}
              animate={mobileMenuOpen ? "open" : "closed"}
              variants={{
                open: { opacity: 0 },
                closed: { opacity: 1 }
              }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-5 h-0.5 bg-gray-900 dark:bg-white" />
            </motion.div>
            <motion.div
              className="absolute"
              initial={false}
              animate={mobileMenuOpen ? "open" : "closed"}
              variants={{
                open: { rotate: -45, y: 0 },
                closed: { rotate: 0, y: 4 }
              }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-5 h-0.5 bg-gray-900 dark:bg-white" />
            </motion.div>
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden fixed inset-x-0 top-14 z-40 mobile-menu-container"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            ref={mobileRef}
          >
            <motion.div
              className="relative bg-white dark:bg-gray-900 shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="px-6 py-4">
                <div className="space-y-1">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
} 