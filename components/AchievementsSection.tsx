"use client";

import { motion } from 'framer-motion';

const AchievementsSection = () => {
  const journey = [
    {
      period: "2014 - 2020",
      title: "competitive swimming",
      highlight: "50+ medals",
      description: "trained at LB Stadium, learned discipline the hard way. 30+ gold medals later, i realized showing up every day actually works.",
      emoji: "🏊‍♂️"
    },
    {
      period: "2023",
      title: "started university",
      highlight: "AI/ML @ Woxsen",
      description: "began my B.Tech in AI & Machine Learning. finally getting to understand how the tech i use actually works.",
      emoji: "🎓"
    },
    {
      period: "2024",
      title: "full-stack development",
      highlight: "8+ projects",
      description: "went from 'what is react' to building actual apps people use. the learning curve was steep but worth it.",
      emoji: "💻"
    },
    {
      period: "2024",
      title: "co-founded snazzl",
      highlight: "startup life",
      description: "took the leap into entrepreneurship. building something from scratch is terrifying and exciting at the same time.",
      emoji: "🚀"
    },
    {
      period: "now",
      title: "content creation",
      highlight: "youtube channel",
      description: "documenting the journey through travel vlogs and tech content. still figuring out the youtube algorithm.",
      emoji: "📹"
    }
  ];

  return (
    <section id="achievements" className="py-24 relative font-outfit">
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
            <span className="text-amber-400 dark:text-amber-400 light:text-amber-700 font-mono text-sm">05</span>
            <h2 className="text-2xl font-bold text-white dark:text-white light:text-gray-900">the journey so far</h2>
            <div className="flex-1 h-px section-divider" />
          </div>

          {/* Timeline - simple vertical */}
          <div className="space-y-0">
            {journey.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8 pb-12 last:pb-0"
              >
                {/* Timeline line */}
                {index !== journey.length - 1 && (
                  <div className="absolute left-[11px] top-8 w-px h-full timeline-line" />
                )}
                
                {/* Timeline dot */}
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full timeline-dot flex items-center justify-center text-xs">
                  {item.emoji}
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-gray-600 dark:text-gray-600 light:text-gray-400 text-sm font-mono">
                      {item.period}
                    </span>
                    <span className="text-xs px-2 py-0.5 bg-amber-400/10 dark:bg-amber-400/10 light:bg-amber-100 text-amber-400 dark:text-amber-400 light:text-amber-700 rounded-full">
                      {item.highlight}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white dark:text-white light:text-gray-900">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-500 dark:text-gray-500 light:text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Current status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="p-6 border border-gray-800 dark:border-gray-800 light:border-gray-200 rounded-xl bg-gray-900/30 dark:bg-gray-900/30 light:bg-gray-50"
          >
            <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-sm mb-2">currently focused on</p>
            <p className="text-white dark:text-white light:text-gray-900 text-lg">
              scaling Snazzl, finishing my degree, and trying to post more consistently on YouTube. 
              <span className="text-gray-500 dark:text-gray-500 light:text-gray-500"> (the last one is the hardest)</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
