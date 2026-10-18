'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Globe, Send } from 'lucide-react';
import { cn } from '@/lib/utils';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'your.email@example.com',
    href: 'mailto:your.email@example.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+62 xxx xxx xxxx',
    href: 'tel:+62xxxxxxxxxx',
  },
  {
    icon: Globe,
    label: 'LinkedIn',
    value: 'linkedin.com/in/yourprofile',
    href: 'https://linkedin.com/in/yourprofile',
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

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Let&apos;s Make Every Workplace Safer</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Ready to strengthen your incident investigation capabilities or develop your
              workforce&apos;s safety awareness? Let&apos;s connect.
            </p>
            <div className="w-16 h-1 bg-[#F6AD60] mx-auto mt-4" />
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            className="grid md:grid-cols-3 gap-6 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {contactInfo.map((contact, index) => (
              <motion.a
                key={index}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={cn(
                  'flex flex-col items-center p-6',
                  'bg-gray-900 rounded-xl',
                  'hover:bg-gray-800 transition-colors duration-200',
                  'group'
                )}
                variants={fadeInUp}
              >
                <div className="w-12 h-12 bg-[#F6AD60]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#F6AD60]/20 transition-colors">
                  <contact.icon size={24} className="text-[#F6AD60]" />
                </div>
                <span className="text-sm text-gray-400 mb-1">{contact.label}</span>
                <span className="text-sm font-medium text-center">{contact.value}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p className="text-gray-400 mb-6">
              Prefer to send a message directly?
            </p>
            <a
              href="mailto:your.email@example.com"
              className={cn(
                'inline-flex items-center gap-2 px-8 py-4',
                'bg-[#F6AD60] text-black font-semibold rounded-lg',
                'hover:bg-[#E89B4E] transition-colors duration-200',
                'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-[#F6AD60]'
              )}
            >
              <Send size={20} />
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}