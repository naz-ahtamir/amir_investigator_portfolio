'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[88vh] flex items-center pt-24 pb-16 bg-white border-b border-neutral-200"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & Value Proposition (7 cols) */}
          <motion.div
            className="lg:col-span-7 space-y-7"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >

            {/* Name & Title */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-black leading-none uppercase">
                AMIRUDDIN <span className="text-amber-600">D.</span>
              </h1>
              {/* <p className="text-lg sm:text-xl font-bold text-neutral-700 mt-3 font-sans">
                OHS Lead Specialist &bull; Accident Investigator &bull; K3 Trainer
              </p> */}
            </div>
            {/* Accreditation Badge - Sharp Minimal */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 border border-neutral-300 text-xs font-mono uppercase tracking-widest text-neutral-800">
              <span className="w-1.5 h-1.5 bg-amber-500" />
              <span>Accident Investigator | Safety Trainer | OHS Expert</span>
            </div>

            {/* Core Narrative */}
            <p className="text-base text-neutral-600 max-w-2xl leading-relaxed">
                Saya memiliki fokus profesional pada investigasi kecelakaan kerja secara sistematis dan berbasis bukti, analisis akar penyebab (Root Cause Analysis), serta identifikasi dan mitigasi risiko melalui metode HIRADC (Hazard Identification, Risk Assessment, and Determining Control). Saya juga berpengalaman dalam mendukung penyelenggaraan program pelatihan keselamatan dan kesehatan kerja (K3) di sektor industri di Indonesia, dengan pendekatan yang berorientasi pada pencegahan insiden, peningkatan kompetensi tenaga kerja, dan penguatan budaya keselamatan. Fokus saya adalah menghasilkan rekomendasi perbaikan yang terukur, memperkuat efektivitas pengendalian risiko, serta mendorong peningkatan kinerja K3 yang berkelanjutan.
            </p>



            {/* Action Buttons - Sharp */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => scrollToSection('#gallery')}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-black text-white text-xs font-bold tracking-wider uppercase hover:bg-neutral-800 transition-colors"
              >
                <span>Lihat Galeri Portofolio</span>                
              </button>

              <button
                onClick={() => scrollToSection('#contact')}
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-black text-black text-xs font-bold tracking-wider uppercase hover:bg-black hover:text-white transition-colors"
              >                
                <span>Hubungi Saya</span>
              </button>
            </div>

            {/* Minimal Impact Stats Grid - Sharp Borders
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 pt-6 border-t border-neutral-200">
              <div className="p-3 border-r border-neutral-200 sm:border-r">
                <div className="text-2xl sm:text-3xl font-extrabold text-black font-mono">10+</div>
                <div className="text-[11px] font-mono text-neutral-500 uppercase mt-0.5">Tahun Pengalaman</div>
              </div>
              <div className="p-3 sm:border-r border-neutral-200">
                <div className="text-2xl sm:text-3xl font-extrabold text-black font-mono">150+</div>
                <div className="text-[11px] font-mono text-neutral-500 uppercase mt-0.5">Kasus Investigasi</div>
              </div>
              <div className="p-3 border-r border-neutral-200">
                <div className="text-2xl sm:text-3xl font-extrabold text-black font-mono">4.500+</div>
                <div className="text-[11px] font-mono text-neutral-500 uppercase mt-0.5">Peserta Pelatihan</div>
              </div>
              <div className="p-3">
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-600 font-mono">100%</div>
                <div className="text-[11px] font-mono text-neutral-500 uppercase mt-0.5">Evidence-Based</div>
              </div>
            </div> */}
          </motion.div>

          {/* Right Column: Profile Showcase - Sharp Architecture */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="relative mx-auto max-w-sm sm:max-w-md border border-neutral-300 p-2 bg-neutral-50">
              <div className="relative aspect-[4/5] overflow-hidden bg-neutral-900 border border-neutral-200">
                <Image
                  src="/profile.jpg"
                  alt="Amiruddin D. - Safety Professional"
                  fill
                  priority
                  className="object-cover object-top"
                />
              </div>

              {/* Minimalist Footnote Bar */}
              <div className="mt-2 p-3 bg-white border border-neutral-200 flex items-center justify-between text-xs font-mono">
                <span className="font-bold text-black uppercase"> </span>
                <span className="text-amber-700 font-semibold text-[11px]">AMIRUDDIN D. (2026)</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}