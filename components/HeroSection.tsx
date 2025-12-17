"use client";

import { motion } from 'framer-motion';
import { Github, Linkedin, Youtube, ArrowRight } from 'lucide-react';

const XIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.207-6.807-5.974 6.807H2.882l7.432-8.49-8.17-10.757h6.844l4.713 6.231 5.429-6.231zM17.002 18.807h1.844L6.844 3.556H4.897l12.105 15.251z"/>
  </svg>
);

const HeroSection = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/virat-mankali', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/virat-mankali/', label: 'LinkedIn' },
    { icon: Youtube, href: 'https://www.youtube.com/@viratmankali', label: 'YouTube' },
    { icon: XIcon, href: 'https://x.com/viratt_mankali', label: 'X' }
  ];

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden font-outfit pt-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 order-2 lg:order-1"
          >
            {/* Casual greeting */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-lg"
            >
              hey, i'm
            </motion.p>

            {/* Name - more personal typography */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold text-white dark:text-white light:text-gray-900 tracking-tight"
            >
              Virat Mankali
            </motion.h1>

            {/* Role - conversational */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-3"
            >
              <p className="text-xl md:text-2xl text-gray-300 dark:text-gray-300 light:text-gray-700">
                building <span className="text-amber-400 dark:text-amber-400 light:text-amber-700 font-medium">Snazzl</span> — quick commerce for fashion
              </p>
              <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-lg leading-relaxed max-w-lg">
                full-stack dev, AI/ML student at Woxsen, and former national level swimmer with 50+ medals. 
                i like building things that actually help people.
              </p>
            </motion.div>

            {/* What I do - casual tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              {['react native', 'next.js', 'convex', 'langchain', 'video editing'].map((skill, index) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm text-gray-300 dark:text-gray-300 light:text-gray-700 border border-gray-700 dark:border-gray-700 light:border-gray-300 rounded-full hover:border-amber-400/50 dark:hover:border-amber-400/50 light:hover:border-amber-600 transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </motion.div>

            {/* CTA - simple and direct */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <a 
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-white light:bg-gray-900 text-black dark:text-black light:text-white rounded-full font-medium hover:bg-gray-100 dark:hover:bg-gray-100 light:hover:bg-gray-800 transition-colors"
              >
                see my work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-600 dark:border-gray-600 light:border-gray-400 text-gray-300 dark:text-gray-300 light:text-gray-700 rounded-full font-medium hover:border-gray-400 dark:hover:border-gray-400 light:hover:border-gray-600 transition-colors"
              >
                let's talk
              </a>
            </motion.div>

            {/* Social links - minimal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4 pt-4"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-500 dark:text-gray-500 light:text-gray-500 hover:text-white dark:hover:text-white light:hover:text-gray-900 transition-colors duration-300"
                  aria-label={social.label}
                >
                  {social.label === 'X' ? (
                    <social.icon />
                  ) : (
                    <social.icon size={22} />
                  )}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative mx-auto w-72 h-72 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px]">
              {/* Simple border frame */}
              <div className="absolute inset-0 border-2 border-gray-700 dark:border-gray-700 light:border-gray-300 rounded-2xl transform rotate-3" />
              
              {/* Main image container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gray-800 dark:bg-gray-800 light:bg-gray-200">
                <img 
                  src="/lovable-uploads/086e62e4-bcd5-4165-85df-f5b99b386146.png" 
                  alt="Virat Mankali" 
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500" 
                />
              </div>

              {/* Floating accent */}
              <div className="absolute -bottom-4 -right-4 px-4 py-2 bg-amber-400 dark:bg-amber-400 light:bg-amber-600 text-black dark:text-black light:text-white rounded-full text-sm font-medium shadow-lg">
                co-founder @ snazzl
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
