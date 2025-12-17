"use client";

import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';

const ProjectsSection = () => {
  const featuredProjects = [
    {
      title: "Snazzl",
      tagline: "fashion delivered in 30 minutes",
      description: "Quick commerce for fashion with virtual try-on. See how clothes look on you before buying, then get them delivered in under 30 minutes.",
      tech: ["React Native", "Next.js", "Convex", "Expo", "Clerk"],
      status: "🚀 active startup",
      link: "https://snazzl.shop",
      github: null,
      featured: true
    },
    {
      title: "Cortexa",
      tagline: "journaling that remembers everything",
      description: "AI journaling companion that remembers everything you've shared. Talk to it when you're feeling low, and it responds with full context — no hallucinations.",
      tech: ["Next.js", "Convex", "Vector DB", "NLP", "Clerk"],
      status: "📱 shipped",
      link: "https://cortexa.fun",
      github: null,
      featured: true
    },
    {
      title: "Styrae",
      tagline: "daily outfits from your wardrobe",
      description: "Upload your wardrobe, get Pinterest-worthy outfit combinations daily. AI curates fresh looks from clothes you already own.",
      tech: ["Next.js", "Computer Vision", "Convex", "Clerk"],
      status: "📱 shipped",
      link: "https://styrae.vercel.app",
      github: null,
      featured: true
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
      title: "Emotion Detection AI",
      description: "Deep learning models for understanding human emotions. Academic project that got me hooked on AI.",
      tech: ["Python", "TensorFlow", "Computer Vision"],
      link: "#"
    },
    {
      title: "AI Agents Platform",
      description: "Experimenting with autonomous AI agents for task automation. Still figuring this one out.",
      tech: ["Python", "LangChain", "OpenAI API"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 relative font-outfit">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* Section label */}
          <div className="flex items-center gap-4">
            <span className="text-amber-400 dark:text-amber-400 light:text-amber-700 font-mono text-sm">03</span>
            <h2 className="text-2xl font-bold text-white dark:text-white light:text-gray-900">things i've built</h2>
            <div className="flex-1 h-px section-divider" />
          </div>

          {/* Featured Projects */}
          <div className="space-y-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
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

          {/* View More Button */}
          <div className="flex justify-center pt-4">
            <motion.a
              href="/projects"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="px-4 py-2 text-sm border border-gray-700 dark:border-gray-700 light:border-gray-300 text-gray-400 dark:text-gray-400 light:text-gray-600 rounded-full hover:border-amber-400/50 dark:hover:border-amber-400/50 light:hover:border-amber-600 hover:text-amber-400 dark:hover:text-amber-400 light:hover:text-amber-700 transition-all duration-300"
            >
              View more
            </motion.a>
          </div>

          {/* Other Projects - simpler cards */}
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
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
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
    </section>
  );
};

export default ProjectsSection;
