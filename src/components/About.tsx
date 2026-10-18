'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Award } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-16 h-1 bg-[#F6AD60] mx-auto" />
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                I am a safety professional dedicated to helping organizations understand
                why workplace incidents occur and how to prevent them from happening again.
                My approach centers on systematic, evidence-based investigation that focuses
                on identifying hazards and contributing factors—not assigning blame.
              </p>

              <p>
                Through thorough root cause analysis, I help teams uncover the underlying
                conditions and behaviors that lead to accidents. This enables organizations
                to implement targeted corrective and preventive actions that address the
                real causes of incidents rather than just the symptoms.
              </p>

              <p>
                Beyond investigation, I specialize in K3 (Keselamatan dan Kesehatan Kerja)
                training that builds workers' practical safety awareness. I believe effective
                safety education goes beyond compliance—it develops the knowledge and habits
                that help workers recognize hazards, make safer decisions, and look out for
                one another on the job.
              </p>

              <p>
                Clear communication and analytical thinking are at the core of my work.
                Whether conducting an investigation, writing a report, or delivering training,
                I focus on clarity, precision, and practical application. My goal is to help
                workers adopt safer practices and help organizations break the cycle of
                recurring incidents.
              </p>
            </div>

            {/* Key Principles */}
            <div className="grid md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-100">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-[#F6AD60]/10 rounded-full flex items-center justify-center">
                  <Target size={24} className="text-[#F6AD60]" />
                </div>
                <h3 className="font-semibold mb-1">Evidence-Based</h3>
                <p className="text-sm text-gray-500">
                  Investigation grounded in facts and systematic analysis
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-[#F6AD60]/10 rounded-full flex items-center justify-center">
                  <Eye size={24} className="text-[#F6AD60]" />
                </div>
                <h3 className="font-semibold mb-1">Prevention Focused</h3>
                <p className="text-sm text-gray-500">
                  Actions that stop incidents from recurring
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-[#F6AD60]/10 rounded-full flex items-center justify-center">
                  <Award size={24} className="text-[#F6AD60]" />
                </div>
                <h3 className="font-semibold mb-1">Practical Training</h3>
                <p className="text-sm text-gray-500">
                  Real-world safety skills workers can apply
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}