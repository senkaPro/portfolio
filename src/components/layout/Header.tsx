'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'About Me', href: '/#about' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Certificates', href: '/#certificates' },
  { name: 'Work Experience', href: '/#experience' },
  { name: 'Contact', href: '/#contact' },
  // { name: 'Blog', href: '/blog' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const router = useRouter();
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map(item => {
        const id = item.href.substring(item.href.indexOf('#') + 1);
        return document.getElementById(id);
      }).filter(Boolean) as HTMLElement[];

      const currentScrollPos = window.scrollY + 100;

      let foundActive = false;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        
        if (section && section.offsetTop <= currentScrollPos) {
          setActiveSection(section.id);
          foundActive = true;
          break;
        }
      }

      if (!foundActive) {
        setActiveSection(''); // Clear active section if no section is in view
      }

      // Additional check for contact section when at the very bottom
      if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 50) {
        setActiveSection('contact');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call on mount to set initial active section
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const handleNavLinkClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    const id = href.substring(href.indexOf('#') + 1);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - (headerRef.current?.offsetHeight || 0),
        behavior: 'smooth',
      });
      router.push(href); // Update the URL in the browser
    }
    setMobileMenuOpen(false);
  };

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
              onClick={(e) => handleNavLinkClick(item.href, e)}
              className={`text-sm font-semibold leading-6 ${activeSection === item.href.substring(item.href.indexOf('#') + 1) ? 'text-purple-600 dark:text-purple-400' : 'text-gray-900 dark:text-white'} hover:text-purple-600 dark:hover:text-purple-400 transition-colors`}
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
                      onClick={(e) => handleNavLinkClick(item.href, e)}
                      className={`block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${activeSection === item.href.substring(item.href.indexOf('#') + 1) ? 'text-purple-600 dark:text-purple-400' : 'text-gray-900 dark:text-white'} hover:bg-gray-50 dark:hover:bg-gray-800`}
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