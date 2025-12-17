"use client";

import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ServicesSection from '@/components/ServicesSection';
import AchievementsSection from '@/components/AchievementsSection';
import ContactSection from '@/components/ContactSection';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] dark:bg-[#0a0a0a] light:bg-[#fafafa] relative overflow-x-hidden">
      {/* Subtle noise texture overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] dark:opacity-[0.03] light:opacity-[0.4]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
      
      <Navigation />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ServicesSection />
        <ProjectsSection />
        <AchievementsSection />
        <ContactSection />
      </motion.div>
    </div>
  );
}
