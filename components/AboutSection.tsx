"use client";

import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative font-outfit">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Section label */}
          <div className="flex items-center gap-4">
            <span className="text-amber-400 dark:text-amber-400 light:text-amber-700 font-mono text-sm">01</span>
            <h2 className="text-2xl font-bold text-white dark:text-white light:text-gray-900">about me</h2>
            <div className="flex-1 h-px section-divider" />
          </div>

          {/* Main content - conversational style */}
          <div className="space-y-6 text-lg text-gray-300 dark:text-gray-300 light:text-gray-600 leading-relaxed">
            <p>
              so here's the thing — i've always been someone who can't sit still. 
              started swimming competitively when i was young, competed at the <span className="text-white dark:text-white light:text-gray-900 font-medium">national level</span>, and racked up <span className="text-white dark:text-white light:text-gray-900 font-medium">50+ medals</span> including 30+ golds. 
              learned that discipline and showing up every day actually works.
            </p>
            
            <p>
              now i channel that same energy into building stuff. currently co-founding{' '}
              <span className="text-amber-400 dark:text-amber-400 light:text-amber-700 font-medium">Snazzl</span> — 
              we're trying to fix how people shop for fashion online. think quick commerce meets "try before you buy." 
              it's chaotic, it's hard, and i love it.
            </p>

            <p>
              when i'm not coding or figuring out startup stuff, you'll find me making youtube videos about 
              travel and university life, or deep in some AI/ML rabbit hole at Woxsen University. 
              i genuinely believe tech should make life easier, not more complicated.
            </p>
          </div>

          {/* Quick facts - more human */}
          <div className="grid sm:grid-cols-2 gap-6 pt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-6 border border-gray-800 dark:border-gray-800 light:border-gray-200 rounded-xl hover:border-gray-700 dark:hover:border-gray-700 light:hover:border-gray-300 transition-colors"
            >
              <p className="text-gray-500 dark:text-gray-500 light:text-gray-500 text-sm mb-2">currently</p>
              <p className="text-white dark:text-white light:text-gray-900 font-medium">Building Snazzl & studying AI/ML</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-6 border border-gray-800 dark:border-gray-800 light:border-gray-200 rounded-xl hover:border-gray-700 dark:hover:border-gray-700 light:hover:border-gray-300 transition-colors"
            >
              <p className="text-gray-500 dark:text-gray-500 light:text-gray-500 text-sm mb-2">based in</p>
              <p className="text-white dark:text-white light:text-gray-900 font-medium">Hyderabad, India</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="p-6 border border-gray-800 dark:border-gray-800 light:border-gray-200 rounded-xl hover:border-gray-700 dark:hover:border-gray-700 light:hover:border-gray-300 transition-colors"
            >
              <p className="text-gray-500 dark:text-gray-500 light:text-gray-500 text-sm mb-2">past life</p>
              <p className="text-white dark:text-white light:text-gray-900 font-medium">National level swimmer (50+ medals)</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="p-6 border border-gray-800 dark:border-gray-800 light:border-gray-200 rounded-xl hover:border-gray-700 dark:hover:border-gray-700 light:hover:border-gray-300 transition-colors"
            >
              <p className="text-gray-500 dark:text-gray-500 light:text-gray-500 text-sm mb-2">also into</p>
              <p className="text-white dark:text-white light:text-gray-900 font-medium">YouTube, video editing, travel</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
