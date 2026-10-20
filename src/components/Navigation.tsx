'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Shield, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '#about', label: 'TENTANG' },
  { href: '#gallery', label: 'GALERI' },
  { href: '#experience', label: 'PENGALAMAN' },
  { href: '#contact', label: 'KONTAK' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b',
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm border-neutral-200 py-3 shadow-none'
          : 'bg-white border-neutral-100 py-4'
      )}
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >            
            <div>
              <span className="text-base font-extrabold tracking-tight text-black">
                》AMIRUDDIN <span className="text-amber-600">D.</span>
              </span>              
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-xs font-bold tracking-widest text-neutral-700 hover:text-black transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-black hover:after:w-full after:transition-all"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Action */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => scrollToSection('#contact')}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-black text-white text-xs font-bold tracking-wider hover:bg-neutral-800 transition-colors"
            >
              <span>HUBUNGI</span>
              <ArrowUpRight size={14} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-black border border-neutral-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden border-t border-neutral-200 mt-3 pt-2 bg-white"
            >
              <div className="py-2 space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className="block px-3 py-2 text-xs font-bold tracking-widest text-neutral-800 hover:bg-neutral-100 transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="pt-2">
                  <button
                    onClick={() => scrollToSection('#contact')}
                    className="w-full py-2.5 bg-black text-white text-xs font-bold tracking-wider"
                  >
                    HUBUNGI
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}