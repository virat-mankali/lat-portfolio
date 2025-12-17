"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'about', href: '#about' },
    { label: 'skills', href: '#skills' },
    { label: 'projects', href: '#projects' },
    { label: 'contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-outfit ${
        scrolled 
          ? 'bg-[#0a0a0a]/90 dark:bg-[#0a0a0a]/90 light:bg-white/95 backdrop-blur-md border-b border-gray-800/50 dark:border-gray-800/50 light:border-gray-100 light:shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo - simple text */}
          <a href="#" className="text-lg font-semibold text-white dark:text-white light:text-gray-900">
            vm<span className="text-amber-400 dark:text-amber-400 light:text-amber-700">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-600 hover:text-white dark:hover:text-white light:hover:text-gray-900 transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
            
            {/* Resume button */}
            <a
              href="/resume.pdf"
              target="_blank"
              className="text-sm px-4 py-2 border border-gray-700 dark:border-gray-700 light:border-gray-300 text-gray-300 dark:text-gray-300 light:text-gray-700 rounded-full hover:border-amber-400/50 dark:hover:border-amber-400/50 light:hover:border-amber-700 hover:text-amber-400 dark:hover:text-amber-400 light:hover:text-amber-700 transition-all duration-200"
            >
              resume
            </a>

            {/* Theme Toggle - integrated into nav */}
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 text-gray-400 dark:text-gray-400 light:text-gray-600 hover:text-amber-400 dark:hover:text-amber-400 light:hover:text-amber-700 transition-colors duration-200"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}
          </div>

          {/* Mobile - Theme toggle + Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 text-gray-400 dark:text-gray-400 light:text-gray-600"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-400 dark:text-gray-400 light:text-gray-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4 border-t border-gray-800 dark:border-gray-800 light:border-gray-200">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-400 dark:text-gray-400 light:text-gray-600 hover:text-white dark:hover:text-white light:hover:text-gray-900 transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  className="inline-block text-sm px-4 py-2 border border-gray-700 dark:border-gray-700 light:border-gray-300 text-gray-300 dark:text-gray-300 light:text-gray-700 rounded-full"
                >
                  resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
