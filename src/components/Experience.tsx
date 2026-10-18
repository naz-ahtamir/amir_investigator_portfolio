'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const experiences = [
  {
    type: 'experience',
    title: 'Safety Officer / HSE Specialist',
    company: 'Company Name',
    period: 'Present',
    responsibilities: [
      'Conduct workplace accident investigations and root cause analysis',
      'Perform hazard identification and risk assessments (HIRADC)',
      'Develop and deliver K3 training programs and toolbox talks',
      'Conduct safety inspections and workplace audits',
      'Coordinate emergency response drills and procedures',
      'Prepare investigation reports and safety documentation',
    ],
  },
  // Add more experience entries as needed
];

const qualifications = [
  {
    type: 'certification',
    title: 'K3 (Keselamatan dan Kesehatan Kerja) Certification',
    issuer: 'Relevant Certification Body',
    year: 'Year',
  },
  {
    type: 'certification',
    title: 'Accident Investigation Training',
    issuer: 'Training Provider',
    year: 'Year',
  },
  {
    type: 'certification',
    title: 'First Aid / Emergency Response Certification',
    issuer: 'Certifying Organization',
    year: 'Year',
  },
  {
    type: 'education',
    title: 'Degree in Occupational Health and Safety or Related Field',
    issuer: 'Educational Institution',
    year: 'Year',
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Professional Experience & Qualifications
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Verified experience and certifications in workplace safety and health.
          </p>
          <div className="w-16 h-1 bg-[#F6AD60] mx-auto mt-4" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Experience Section */}
          <motion.div
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-[#F6AD60]/10 rounded-lg flex items-center justify-center">
                <Briefcase size={20} className="text-[#F6AD60]" />
              </div>
              <h3 className="text-xl font-bold">Professional Experience</h3>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-8 border-l-2 border-gray-200"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#F6AD60] rounded-full" />

                  <div className="mb-2">
                    <h4 className="text-lg font-bold">{exp.title}</h4>
                    <p className="text-gray-600">{exp.company}</p>
                    <span className="text-sm text-gray-500">{exp.period}</span>
                  </div>

                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-[#F6AD60] rounded-full flex-shrink-0" />
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {experiences.length === 0 && (
                <div className="bg-gray-50 rounded-xl p-8 text-center">
                  <p className="text-gray-500">
                    Add your professional experience entries to{' '}
                    <code className="text-sm bg-gray-100 px-2 py-1 rounded">
                      src/components/Experience.tsx
                    </code>
                  </p>
                </div>
              )}
            </div>
          </motion.div>

          {/* Qualifications Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-[#F6AD60]/10 rounded-lg flex items-center justify-center">
                <Award size={20} className="text-[#F6AD60]" />
              </div>
              <h3 className="text-xl font-bold">Qualifications & Certifications</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {qualifications.map((qual, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-5 shadow-sm border border-gray-100"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      {qual.type === 'certification' ? (
                        <Award size={18} className="text-[#F6AD60]" />
                      ) : (
                        <GraduationCap size={18} className="text-[#F6AD60]" />
                      )}
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">{qual.title}</h4>
                      <p className="text-xs text-gray-500 mt-1">
                        {qual.issuer} • {qual.year}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}