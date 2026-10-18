'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, AlertTriangle, GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Amir <span className="text-[#F6AD60]">Safety</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 mt-2">
                Safety Professional | Accident Investigation | K3 Trainer
              </p>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 max-w-xl leading-relaxed"
            >
              I help organizations investigate workplace incidents systematically,
              identify contributing factors, recommend preventive actions, and
              develop workers' safety knowledge and practical awareness.
            </motion.p>

            {/* Labels */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">
                <Shield size={16} className="text-[#F6AD60]" />
                Accident Investigation
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">
                <AlertTriangle size={16} className="text-[#F6AD60]" />
                Root Cause Analysis
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">
                <GraduationCap size={16} className="text-[#F6AD60]" />
                K3 Training
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => scrollToSection('#expertise')}
                className={cn(
                  'inline-flex items-center gap-2 px-6 py-3',
                  'bg-black text-white font-medium rounded-lg',
                  'hover:bg-gray-800 transition-colors duration-200',
                  'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black'
                )}
              >
                Explore My Expertise
                <ArrowRight size={18} />
              </button>
              <button
                onClick={() => scrollToSection('#contact')}
                className={cn(
                  'inline-flex items-center gap-2 px-6 py-3',
                  'border-2 border-black text-black font-medium rounded-lg',
                  'hover:bg-black hover:text-white transition-colors duration-200',
                  'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black'
                )}
              >
                Contact Me
              </button>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div
              className="relative w-1/2 aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100 shadow-xl"
              style={{ transform: 'rotate(4deg)' }}
            >
              <Image
                src="/profile.jpg"
                alt="Amir Safety - Safety Professional"
                fill
                className="object-cover"
                priority
              />

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#F6AD60]/20 rounded-full" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-black/5 rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}