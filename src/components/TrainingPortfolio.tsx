'use client';

import { motion } from 'framer-motion';
import { BookOpen, Shield, AlertOctagon, Users, FileCheck, Phone } from 'lucide-react';

const trainingTopics = [
  {
    icon: Shield,
    title: 'Workplace Safety Fundamentals',
    description: 'Core principles of occupational safety and health.',
    objectives: 'Understand hazard recognition, risk awareness, and safe work practices.',
  },
  {
    icon: AlertOctagon,
    title: 'Hazard Identification and Risk Assessment',
    description: 'Proactive identification and evaluation of workplace hazards.',
    objectives: 'Conduct HIRADC, perform job safety analysis, and implement controls.',
  },
  {
    icon: FileCheck,
    title: 'Accident Prevention',
    description: 'Strategies to identify and eliminate potential incident causes.',
    objectives: 'Apply preventive measures and develop safety-conscious work habits.',
  },
  {
    icon: BookOpen,
    title: 'Safe Work Procedures',
    description: 'Establishing and following safe operational methods.',
    objectives: 'Develop, communicate, and enforce safe work procedures.',
  },
  {
    icon: Phone,
    title: 'Emergency Response',
    description: 'Preparing for and responding to workplace emergencies.',
    objectives: 'Execute evacuation procedures, first response, and emergency reporting.',
  },
  {
    icon: Users,
    title: 'Safety Awareness and Reporting',
    description: 'Building a culture of vigilance and proactive reporting.',
    objectives: 'Recognize hazards, report incidents, and participate in safety programs.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function TrainingPortfolio() {
  return (
    <section id="training" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">K3 Training Portfolio</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Practical training programs focused on building workforce safety competency and awareness.
          </p>
          <div className="w-16 h-1 bg-[#F6AD60] mx-auto mt-4" />
        </motion.div>

        {/* Training Cards */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {trainingTopics.map((topic, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F6AD60]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <topic.icon size={24} className="text-[#F6AD60]" />
                </div>

                <div className="flex-1">
                  <h3 className="font-bold mb-2">{topic.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{topic.description}</p>

                  <div className="pt-3 border-t border-gray-100">
                    <p className="text-xs text-gray-500">
                      <span className="font-medium text-gray-700">Learning Objectives:</span>{' '}
                      {topic.objectives}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Training Materials Placeholder */}
        <motion.div
          className="mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-100">
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold mb-2">Training Materials</h3>
              <p className="text-gray-600">
                Presentation decks, training photographs, and certificates can be showcased here.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {/* Placeholder thumbnails */}
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center"
                >
                  <div className="text-center text-gray-400">
                    <BookOpen size={32} className="mx-auto mb-2" />
                    <p className="text-xs">Training Material {i}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-sm text-gray-500 mt-6">
              Add actual training photos, presentation previews, and certificates to{' '}
              <code className="text-xs bg-gray-100 px-2 py-1 rounded">/public/training/</code>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}