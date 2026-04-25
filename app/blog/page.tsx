"use client";

import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, BookOpen, CalendarDays, Clock3, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

const featuredPost = {
  title: "building things that feel useful, not just impressive",
  date: "Apr 2026",
  readTime: "6 min read",
  category: "build log",
  excerpt:
    "A small note on shipping products, staying close to real users, and why the best ideas usually start as messy little experiments.",
};

const posts = [
  {
    title: "what quick commerce can learn from fashion",
    date: "Mar 2026",
    readTime: "4 min read",
    category: "snazzl",
    excerpt:
      "Fashion is emotional, fast, and weirdly personal. That changes how you think about delivery, discovery, and trust.",
  },
  {
    title: "my tiny stack for moving fast",
    date: "Feb 2026",
    readTime: "5 min read",
    category: "engineering",
    excerpt:
      "Next.js, Convex, React Native, a few stubborn opinions, and the joy of keeping the first version simple enough to actually ship.",
  },
  {
    title: "notes from learning AI by building",
    date: "Jan 2026",
    readTime: "7 min read",
    category: "ai/ml",
    excerpt:
      "The difference between reading about models and wiring them into something a person can use is where the learning really starts.",
  },
];

const highlights = [
  "startup notes",
  "shipping logs",
  "ai experiments",
  "design thoughts",
];

const BlogPage = () => {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#0a0a0a] dark:bg-[#0a0a0a] light:bg-[#fafafa] font-outfit relative overflow-x-hidden">
        <div
          className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] dark:opacity-[0.03] light:opacity-[0.4]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 py-24 pt-32">
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
            <section className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 items-end">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-gray-800 dark:border-gray-800 light:border-gray-200 rounded-full text-xs text-gray-400 dark:text-gray-400 light:text-gray-600">
                  <Sparkles size={14} className="text-amber-400 dark:text-amber-400 light:text-amber-700" />
                  notes from the messy middle
                </div>

                <div className="space-y-4">
                  <h1 className="text-4xl md:text-6xl font-bold text-white dark:text-white light:text-gray-900 tracking-tight">
                    writing about what i&apos;m building
                  </h1>
                  <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-lg leading-relaxed max-w-2xl">
                    thoughts on startups, AI, product taste, and the little lessons that show up while shipping real things.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {highlights.map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 text-sm text-gray-300 dark:text-gray-300 light:text-gray-700 border border-gray-700 dark:border-gray-700 light:border-gray-300 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="border border-gray-800 dark:border-gray-800 light:border-gray-200 rounded-2xl p-6 bg-gray-900/20 dark:bg-gray-900/20 light:bg-white"
              >
                <div className="flex items-center justify-between mb-10">
                  <BookOpen size={24} className="text-amber-400 dark:text-amber-400 light:text-amber-700" />
                  <span className="text-xs text-gray-500 dark:text-gray-500 light:text-gray-500 uppercase tracking-wider">
                    latest draft
                  </span>
                </div>

                <div className="space-y-5">
                  <div className="flex flex-wrap gap-3 text-xs text-gray-500 dark:text-gray-500 light:text-gray-600">
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays size={14} />
                      {featuredPost.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock3 size={14} />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <div>
                    <p className="text-amber-400/80 dark:text-amber-400/80 light:text-amber-700 text-sm mb-2">
                      {featuredPost.category}
                    </p>
                    <h2 className="text-2xl font-bold text-white dark:text-white light:text-gray-900 leading-tight">
                      {featuredPost.title}
                    </h2>
                  </div>

                  <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                </div>
              </motion.div>
            </section>

            <section className="space-y-8">
              <div className="flex items-center gap-4">
                <span className="text-amber-400 dark:text-amber-400 light:text-amber-700 font-mono text-sm">01</span>
                <h2 className="text-2xl font-bold text-white dark:text-white light:text-gray-900">mock posts</h2>
                <div className="flex-1 h-px section-divider" />
              </div>

              <div className="space-y-6">
                {posts.map((post, index) => (
                  <motion.article
                    key={post.title}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="group"
                  >
                    <div className="p-6 md:p-8 border border-gray-800 dark:border-gray-800 light:border-gray-200 rounded-2xl hover:border-gray-700 dark:hover:border-gray-700 light:hover:border-gray-300 transition-all duration-300 hover:bg-gray-900/30 dark:hover:bg-gray-900/30 light:hover:bg-gray-50">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5">
                        <div className="space-y-3">
                          <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 dark:text-gray-500 light:text-gray-600">
                            <span className="text-amber-400/80 dark:text-amber-400/80 light:text-amber-700">{post.category}</span>
                            <span>{post.date}</span>
                            <span>{post.readTime}</span>
                          </div>

                          <div className="space-y-3">
                            <h3 className="text-2xl font-bold text-white dark:text-white light:text-gray-900 group-hover:text-amber-400 dark:group-hover:text-amber-400 light:group-hover:text-amber-700 transition-colors">
                              {post.title}
                            </h3>
                            <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 leading-relaxed max-w-3xl">
                              {post.excerpt}
                            </p>
                          </div>
                        </div>

                        <a
                          href="#sample-article"
                          className="shrink-0 inline-flex items-center justify-center w-10 h-10 border border-gray-700 dark:border-gray-700 light:border-gray-300 rounded-full text-gray-500 dark:text-gray-500 light:text-gray-500 group-hover:text-amber-400 dark:group-hover:text-amber-400 light:group-hover:text-amber-700 group-hover:border-amber-400/50 dark:group-hover:border-amber-400/50 light:group-hover:border-amber-600 transition-all"
                          aria-label={`Open ${post.title}`}
                        >
                          <ArrowUpRight size={18} />
                        </a>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </section>

            <section id="sample-article" className="grid md:grid-cols-[0.65fr_1.35fr] gap-8 pt-4 scroll-mt-28">
              <div>
                <p className="text-gray-500 dark:text-gray-500 light:text-gray-500 text-sm uppercase tracking-wider mb-3">
                  sample article
                </p>
                <h2 className="text-2xl font-bold text-white dark:text-white light:text-gray-900">
                  a place for longer thoughts
                </h2>
              </div>

              <article className="space-y-5 text-gray-400 dark:text-gray-400 light:text-gray-600 leading-relaxed">
                <p>
                  I want this space to feel like a notebook that slowly becomes useful. Some posts will be clean build logs, some will be tiny product observations, and some will probably be me figuring out what I actually think while writing it.
                </p>
                <p>
                  The first real version can pull from MDX or a small content folder. For now, this mock page gives the site a home for writing without committing to a heavy CMS too early.
                </p>
              </article>
            </section>
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default BlogPage;
