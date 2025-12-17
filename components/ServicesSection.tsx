"use client";

import { motion } from 'framer-motion';
import { Code, Smartphone, Palette, Database, Video, Brain, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: "web development",
      description: "full-stack apps with react/next.js and convex. clean code, fast sites.",
      tools: ["Next.js", "Convex", "Vercel", "TypeScript"]
    },
    {
      icon: Smartphone,
      title: "mobile apps",
      description: "cross-platform apps with react native. one codebase, both platforms.",
      tools: ["React Native", "Expo", "Convex"]
    },
    {
      icon: Brain,
      title: "AI Agents",
      description: "designing and deploying end-to-end AI agents that never hallucinate",
      tools: ["Python", "Langchain", "Supabase", "Render"]
    },
    {
      icon: Palette,
      title: "UI/UX design",
      description: "figma designs that actually make sense. user-first, always.",
      tools: ["Figma", "Prototyping", "Design Systems"]
    },
    {
      icon: Database,
      title: "backend & databases",
      description: "convex and clerk setup. auth, storage, the whole thing.",
      tools: ["Convex", "Clerk", "APIs"]
    },
    {
      icon: Video,
      title: "video editing",
      description: "davinci resolve for youtube content. travel vlogs, tutorials, whatever.",
      tools: ["DaVinci Resolve", "Content Strategy"]
    }
  ];

  return (
    <section id="services" className="py-24 relative font-outfit bg-gray-900/30 dark:bg-gray-900/30 light:bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* Section header */}
          <div className="text-center space-y-4">
            <p className="text-amber-400 dark:text-amber-400 light:text-amber-700 font-mono text-sm">what i can help with</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white dark:text-white light:text-gray-900">
              services
            </h2>
            <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 max-w-lg mx-auto">
              i build things for the web and mobile. here's what i'm good at.
            </p>
          </div>

          {/* Services grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 border border-gray-800 dark:border-gray-800 light:border-gray-200 rounded-xl hover:border-gray-700 dark:hover:border-gray-700 light:hover:border-gray-300 bg-[#0a0a0a] dark:bg-[#0a0a0a] light:bg-white transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 bg-gray-800 dark:bg-gray-800 light:bg-gray-100 rounded-lg text-amber-400 dark:text-amber-400 light:text-amber-700 group-hover:bg-amber-400/10 dark:group-hover:bg-amber-400/10 light:group-hover:bg-amber-100 transition-colors">
                    <service.icon size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-white dark:text-white light:text-gray-900 pt-1">
                    {service.title}
                  </h3>
                </div>

                <p className="text-gray-500 dark:text-gray-500 light:text-gray-600 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs text-gray-600 dark:text-gray-600 light:text-gray-500"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center pt-8"
          >
            <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 mb-6">
              have a project in mind?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-700 dark:border-gray-700 light:border-gray-300 text-gray-300 dark:text-gray-300 light:text-gray-700 rounded-full hover:border-amber-400/50 dark:hover:border-amber-400/50 light:hover:border-amber-600 hover:text-amber-400 dark:hover:text-amber-400 light:hover:text-amber-700 transition-all duration-300 group"
            >
              let's talk
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
