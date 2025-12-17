"use client";

import { motion } from 'framer-motion';

const SkillsSection = () => {
  const techStack = {
    "build with": ["Next.js", "React Native", "Convex", "TypeScript"],
    "backend & data": ["Supabase", "LangChain", "Next.js", "Python"],
    "AI/ML stuff": ["TensorFlow", "Deep Learning", "Computer Vision"],
    "design & edit": ["Figma", "DaVinci Resolve", "CapCut"]
  };

  const highlights = [
    { number: "50+", label: "swimming medals", note: "30+ gold" },
    { number: "8+", label: "projects shipped", note: "and counting" },
    { number: "4", label: "startup's", note: "founded / 1 registered" },
    { number: "1K+", label: "linkedin connections", note: "growing network" },
  ];

  return (
    <section id="skills" className="py-24 relative font-outfit">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* Section label */}
          <div className="flex items-center gap-4">
            <span className="text-amber-400 dark:text-amber-400 light:text-amber-700 font-mono text-sm">02</span>
            <h2 className="text-2xl font-bold text-white dark:text-white light:text-gray-900">what i work with</h2>
            <div className="flex-1 h-px section-divider" />
          </div>

          {/* Tech stack - simple list style */}
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
            {Object.entries(techStack).map(([category, skills], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-gray-500 dark:text-gray-500 light:text-gray-500 text-sm uppercase tracking-wider">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm text-gray-300 dark:text-gray-300 light:text-gray-700 bg-gray-800/50 dark:bg-gray-800/50 light:bg-gray-100 rounded-lg border border-gray-700/50 dark:border-gray-700/50 light:border-gray-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Numbers that matter - casual presentation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="pt-8"
          >
            <p className="text-gray-500 dark:text-gray-500 light:text-gray-500 text-sm uppercase tracking-wider mb-8">
              some numbers
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center sm:text-left"
                >
                  <div className="text-4xl md:text-5xl font-bold text-white dark:text-white light:text-gray-900 mb-1">
                    {item.number}
                  </div>
                  <div className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-sm">
                    {item.label}
                  </div>
                  <div className="text-gray-600 dark:text-gray-600 light:text-gray-400 text-xs mt-1">
                    {item.note}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
