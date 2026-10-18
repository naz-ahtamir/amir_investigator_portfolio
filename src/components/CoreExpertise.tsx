'use client';

import { motion } from 'framer-motion';
import {
  Search,
  FileText,
  AlertTriangle,
  Users,
  Eye,
  ClipboardCheck,
} from 'lucide-react';

const expertiseAreas = [
  {
    icon: Search,
    title: 'Workplace Accident Investigation',
    description:
      'Systematic incident investigation that identifies causes and helps prevent recurrence.',
    capabilities: [
      'Incident Documentation',
      'Evidence Collection',
      'Incident Timeline Reconstruction',
      'Hazard and Contributing Factor Analysis',
      'Root Cause Analysis',
      'Corrective and Preventive Action Recommendations',
      'Investigation Reporting',
      'Lessons Learned',
    ],
  },
  {
    icon: Users,
    title: 'K3 Training and Safety Education',
    description:
      'Practical safety training that builds workers knowledge and develops safety habits.',
    capabilities: [
      'Safety Induction',
      'Toolbox Talks',
      'Workplace Hazard Awareness',
      'Accident Prevention Training',
      'Safe Work Procedures',
      'Emergency Response Training',
      'Training Material Development',
      'Training Evaluation',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Hazard Identification and Risk Assessment',
    description:
      'Proactive identification of workplace hazards and evaluation of associated risks.',
    capabilities: [
      'Hazard Identification',
      'HIRADC',
      'Job Safety Analysis',
      'Risk Evaluation',
      'Control Measures',
      'Safety Inspection',
      'Incident Prevention',
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function CoreExpertise() {
  return (
    <section id="expertise" className="py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Core Expertise</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Specialized capabilities in workplace safety, incident investigation, and
            workforce training.
          </p>
          <div className="w-16 h-1 bg-[#F6AD60] mx-auto mt-4" />
        </motion.div>

        {/* Expertise Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {expertiseAreas.map((expertise, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
              variants={cardVariants}
            >
              <div className="w-14 h-14 bg-[#F6AD60]/10 rounded-xl flex items-center justify-center mb-6">
                <expertise.icon size={28} className="text-[#F6AD60]" />
              </div>

              <h3 className="text-xl font-bold mb-3">{expertise.title}</h3>

              <p className="text-gray-600 mb-6">{expertise.description}</p>

              <ul className="space-y-2">
                {expertise.capabilities.slice(0, 5).map((capability, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-[#F6AD60] rounded-full flex-shrink-0" />
                    {capability}
                  </li>
                ))}
                {expertise.capabilities.length > 5 && (
                  <li className="text-sm text-gray-400">
                    + {expertise.capabilities.length - 5} more capabilities
                  </li>
                )}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}