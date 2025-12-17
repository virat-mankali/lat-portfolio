"use client";

import { motion } from 'framer-motion';
import { ArrowUpRight, Github, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

const ProjectsPage = () => {
  const allProjects = [
    {
      title: "Snazzl",
      tagline: "fashion delivered in 30 minutes",
      description: "Quick commerce for fashion with virtual try-on. See how clothes look on you before buying, then get them delivered in under 30 minutes.",
      tech: ["React Native", "Next.js", "Convex", "Expo", "Clerk"],
      status: "🚀 active startup",
      link: "https://snazzl.shop",
      github: null,
    },
    {
      title: "Cortexa",
      tagline: "journaling that remembers everything",
      description: "AI journaling companion that remembers everything you've shared. Talk to it when you're feeling low, and it responds with full context — no hallucinations.",
      tech: ["Next.js", "Convex", "Vector DB", "NLP", "Clerk"],
      status: "📱 shipped",
      link: "https://cortexa.fun",
      github: null,
    },
    {
      title: "Styrae",
      tagline: "daily outfits from your wardrobe",
      description: "Upload your wardrobe, get Pinterest-worthy outfit combinations daily. AI curates fresh looks from clothes you already own.",
      tech: ["Next.js", "Computer Vision", "Convex", "Clerk"],
      status: "📱 shipped",
      link: "https://styrae.vercel.app",
      github: null,
    },
    {
      title: "Caricart",
      tagline: "turn yourself into a caricature",
      description: "Upload any photo and get a funny caricature-style version you can share on social media. AI-powered cartoon transformations that actually look good.",
      tech: ["Next.js", "Vercel", "Nano-banana pro"],
      status: "📱 shipped",
      link: "https://caricart.vercel.app",
      github: null,
    }
  ];

  const otherProjects = [
    {
      title: "YouTube Channel",
      description: "Travel vlogs and university life content. Learning video editing and storytelling along the way.",
      tech: ["DaVinci Resolve", "Content Strategy"],
      link: "#"
    },
    {
      title: "Photography",
      description: "Capturing retro and modern portraits with crazy edits. Exploring the intersection of analog aesthetics and digital creativity.",
      tech: ["Photography", "Luminar"],
      link: "#"
    },
    {
      title: "AI Agents",
      description: "Building sophisticated AI agents with LangGraph. Exploring autonomous workflows and intelligent task automation.",
      tech: ["Python", "LangGraph", "OpenAI API"],
      link: "#"
    }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-[#0a0a0a] font-outfit">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-24 pt-32">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 dark:text-gray-400 light:text-gray-600 hover:text-white dark:hover:text-white light:hover:text-gray-900 transition-colors mb-12"
          >
            <ArrowLeft size={18} />
            back home
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white dark:text-white light:text-gray-900">
              all projects
            </h1>
            <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-lg">
              stuff i've built, shipped, and learned from
            </p>
          </div>

          {/* Main Projects */}
          <div className="space-y-8">
            {allProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="p-8 border border-gray-800 dark:border-gray-800 light:border-gray-200 rounded-2xl hover:border-gray-700 dark:hover:border-gray-700 light:hover:border-gray-300 transition-all duration-300 hover:bg-gray-900/30 dark:hover:bg-gray-900/30 light:hover:bg-gray-50">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-white dark:text-white light:text-gray-900 group-hover:text-amber-400 dark:group-hover:text-amber-400 light:group-hover:text-amber-700 transition-colors">
                          {project.title}
                        </h3>
                        <span className="text-xs px-2 py-1 bg-gray-800 dark:bg-gray-800 light:bg-gray-100 text-gray-400 dark:text-gray-400 light:text-gray-600 rounded-full">
                          {project.status}
                        </span>
                      </div>
                      <p className="text-amber-400/80 dark:text-amber-400/80 light:text-amber-700 text-sm">
                        {project.tagline}
                      </p>
                    </div>
                    
                    <div className="flex gap-3">
                      {project.github && (
                        <a href={project.github} className="p-2 text-gray-500 hover:text-white dark:hover:text-white light:hover:text-gray-900 transition-colors">
                          <Github size={20} />
                        </a>
                      )}
                      <a href={project.link} className="p-2 text-gray-500 hover:text-white dark:hover:text-white light:hover:text-gray-900 transition-colors">
                        <ArrowUpRight size={20} />
                      </a>
                    </div>
                  </div>

                  <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs text-gray-400 dark:text-gray-400 light:text-gray-600 border border-gray-700 dark:border-gray-700 light:border-gray-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Projects */}
          <div className="pt-8">
            <p className="text-gray-500 dark:text-gray-500 light:text-gray-500 text-sm uppercase tracking-wider mb-8">
              other stuff
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <motion.a
                  key={project.title}
                  href={project.link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="group p-6 border border-gray-800 dark:border-gray-800 light:border-gray-200 rounded-xl hover:border-gray-700 dark:hover:border-gray-700 light:hover:border-gray-300 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-semibold text-white dark:text-white light:text-gray-900 group-hover:text-amber-400 dark:group-hover:text-amber-400 light:group-hover:text-amber-700 transition-colors">
                      {project.title}
                    </h4>
                    <ArrowUpRight size={16} className="text-gray-600 group-hover:text-amber-400 dark:group-hover:text-amber-400 light:group-hover:text-amber-700 transition-colors" />
                  </div>
                  
                  <p className="text-gray-500 dark:text-gray-500 light:text-gray-600 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs text-gray-600 dark:text-gray-600 light:text-gray-500">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
