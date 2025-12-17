"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin, Youtube, ArrowUpRight } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const XIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.207-6.807-5.974 6.807H2.882l7.432-8.49-8.17-10.757h6.844l4.713 6.231 5.429-6.231zM17.002 18.807h1.844L6.844 3.556H4.897l12.105 15.251z"/>
  </svg>
);

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '1bfd35fe-0c90-4088-b657-58e273fe115c',
          ...formData
        }),
      });

      if (response.ok) {
        toast({
          title: "sent!",
          description: "i'll get back to you soon.",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send');
      }
    } catch {
      toast({
        title: "oops",
        description: "something went wrong. try emailing me directly?",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative font-outfit">
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
            <span className="text-amber-400 dark:text-amber-400 light:text-amber-700 font-mono text-sm">04</span>
            <h2 className="text-2xl font-bold text-white dark:text-white light:text-gray-900">let's connect</h2>
            <div className="flex-1 h-px section-divider" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left side - casual intro */}
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-xl text-gray-300 dark:text-gray-300 light:text-gray-700 leading-relaxed">
                  got an idea? want to collaborate? or just want to say hi?
                </p>
                <p className="text-gray-500 dark:text-gray-500 light:text-gray-600">
                  i'm always open to interesting conversations and new opportunities. 
                  whether it's about startups, tech, or anything else — drop me a message.
                </p>
              </div>

              {/* Contact info - minimal */}
              <div className="space-y-4 pt-4">
                <a 
                  href="mailto:viratmankali@gmail.com"
                  className="flex items-center gap-3 text-gray-400 dark:text-gray-400 light:text-gray-600 hover:text-white dark:hover:text-white light:hover:text-gray-900 transition-colors group"
                >
                  <Mail size={18} />
                  <span>viratmankali@gmail.com</span>
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                
                <div className="flex items-center gap-3 text-gray-500 dark:text-gray-500 light:text-gray-500">
                  <MapPin size={18} />
                  <span>Hyderabad, India</span>
                </div>
              </div>

              {/* Social links */}
              <div className="flex gap-4 pt-4">
                <a 
                  href="https://github.com/virat-mankali" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 border border-gray-800 dark:border-gray-800 light:border-gray-200 rounded-lg text-gray-500 hover:text-white dark:hover:text-white light:hover:text-gray-900 hover:border-gray-700 dark:hover:border-gray-700 light:hover:border-gray-300 transition-all"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/virat-mankali/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 border border-gray-800 dark:border-gray-800 light:border-gray-200 rounded-lg text-gray-500 hover:text-white dark:hover:text-white light:hover:text-gray-900 hover:border-gray-700 dark:hover:border-gray-700 light:hover:border-gray-300 transition-all"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://www.youtube.com/@viratmankali" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 border border-gray-800 dark:border-gray-800 light:border-gray-200 rounded-lg text-gray-500 hover:text-white dark:hover:text-white light:hover:text-gray-900 hover:border-gray-700 dark:hover:border-gray-700 light:hover:border-gray-300 transition-all"
                >
                  <Youtube size={20} />
                </a>
                <a 
                  href="https://x.com/viratt_mankali" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 border border-gray-800 dark:border-gray-800 light:border-gray-200 rounded-lg text-gray-500 hover:text-white dark:hover:text-white light:hover:text-gray-900 hover:border-gray-700 dark:hover:border-gray-700 light:hover:border-gray-300 transition-all"
                >
                  <XIcon />
                </a>
              </div>
            </div>

            {/* Right side - simple form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-gray-500 dark:text-gray-500 light:text-gray-500 text-sm mb-2">
                  name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-transparent border border-gray-800 dark:border-gray-800 light:border-gray-200 rounded-lg text-white dark:text-white light:text-gray-900 placeholder-gray-600 focus:border-amber-400/50 dark:focus:border-amber-400/50 light:focus:border-amber-600 focus:outline-none transition-colors"
                  placeholder="your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-500 dark:text-gray-500 light:text-gray-500 text-sm mb-2">
                  email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-transparent border border-gray-800 dark:border-gray-800 light:border-gray-200 rounded-lg text-white dark:text-white light:text-gray-900 placeholder-gray-600 focus:border-amber-400/50 dark:focus:border-amber-400/50 light:focus:border-amber-600 focus:outline-none transition-colors"
                  placeholder="you@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-500 dark:text-gray-500 light:text-gray-500 text-sm mb-2">
                  message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-transparent border border-gray-800 dark:border-gray-800 light:border-gray-200 rounded-lg text-white dark:text-white light:text-gray-900 placeholder-gray-600 focus:border-amber-400/50 dark:focus:border-amber-400/50 light:focus:border-amber-600 focus:outline-none transition-colors resize-none"
                  placeholder="what's on your mind?"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-white light:bg-gray-900 text-black dark:text-black light:text-white rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-100 light:hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span>sending...</span>
                ) : (
                  <>
                    <Send size={18} />
                    <span>send message</span>
                  </>
                )}
              </button>
            </motion.form>
          </div>

          {/* Footer */}
          <div className="pt-16 border-t footer-divider">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-600 dark:text-gray-600 light:text-gray-500 text-sm">
              <p>© 2025 virat mankali</p>
              <p>built with next.js & too much coffee ☕</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
