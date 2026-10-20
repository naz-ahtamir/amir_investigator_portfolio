'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Target,
  FileSearch,
  Users2,
  CheckCircle2,
  Quote,
} from 'lucide-react';

const corePillars = [
  {
    icon: FileSearch,
    title: 'Investigasi Berbasis Bukti (Blame-Free)',
    description:
      'Fokus menemukan kegagalan sistemik dan faktor kontributor laten, bukan mencari siapa yang bersalah, guna menciptakan iklim pelaporan yang transparan dan jujur.',
  },
  {
    icon: Target,
    title: 'Akurasi Root Cause Analysis (RCA)',
    description:
      'Menerapkan metode 5-Whys, Ishikawa Diagram, dan Tripod-Beta untuk membedah akar permasalahan hingga lapis terdalam sebelum menyusun rekomendasi mitigasi.',
  },
  {
    icon: ShieldCheck,
    title: 'Tindakan Korektif Terukur (SMART CAPA)',
    description:
      'Merumuskan Corrective & Preventive Action yang realistis, terjangkau, dan berdampak langsung pada eliminasi bahaya di lapangan.',
  },
  {
    icon: Users2,
    title: 'Transformasi Budaya Keselamatan (BBS)',
    description:
      'Mengedukasi pekerja dan jajaran manajemen agar memprioritaskan keselamatan sebagai nilai inti (core value), bukan sekadar kepatuhan administratif.',
  },
];

export function About() {
  return (
    <section id="about" className="py-20 bg-neutral-50/60 border-b border-neutral-200 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-neutral-300 text-neutral-800 text-xs font-mono uppercase tracking-widest mb-3">              
              Profil & Filosofi K3
            </div>
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight text-black uppercase">
              Tentang Saya & Komitmen Keselamatan
            </h2>
            <div className="w-16 h-0.5 bg-black mx-auto mt-4" />
          </div>

          {/* Main Story Grid */}
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Left Photo & Fast Facts Card (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white p-6 border border-neutral-200 shadow-none">
                <div className="relative aspect-[4/5] overflow-hidden bg-neutral-900 mb-6 border border-neutral-200">
                  <Image
                    src="/profile.jpg"
                    alt="Amiruddin D."
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-black/80 text-white font-mono text-xs">
                    {/* <p className="text-amber-400 font-bold uppercase">Amiruddin D.</p>
                    <p className="text-neutral-300 text-[11px]">Praktisi &amp; Instruktur K3</p> */}
                  </div>
                </div>

                {/* Key Credentials List */}
                <h4 className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-widest mb-3 pb-2 border-b border-neutral-200">
                  Kualifikasi Resmi
                </h4>
                <ul className="space-y-2.5 text-xs text-neutral-700 font-sans">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-amber-500 mt-1.5 flex-shrink-0" />
                    <span>Ahli K3 Umum (Kemnaker RI)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-amber-500 mt-1.5 flex-shrink-0" />
                    <span>Accident Investigator (BNSP)</span>
                  </li>                  
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-amber-500 mt-1.5 flex-shrink-0" />
                    <span>Training of Trainer Lv 4 (BNSP)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Story & Vision Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">             

              {/* Detailed Bio Narrative */}
              <div className="space-y-4 text-neutral-600 leading-relaxed text-sm">
                <p>
                  Saya merupakan praktisi Keselamatan dan Kesehatan Kerja (K3) dengan pengalaman selama 4 tahun di lingkungan industri, dengan fokus pada penerapan sistem keselamatan kerja, investigasi kecelakaan dan insiden, analisis akar penyebab (Root Cause Analysis), serta identifikasi dan pengendalian risiko melalui metode HIRADC (Hazard Identification, Risk Assessment, and Determining Control). Dalam menjalankan tanggung jawab profesional, saya berupaya mengedepankan pendekatan yang sistematis, objektif, dan berbasis bukti untuk mengidentifikasi potensi bahaya, mengevaluasi efektivitas pengendalian risiko, serta merumuskan rekomendasi perbaikan yang berorientasi pada pencegahan insiden. Saya juga memiliki perhatian terhadap pengembangan kompetensi tenaga kerja melalui edukasi dan pelatihan K3 yang aplikatif, guna mendorong kepatuhan terhadap prosedur kerja aman dan memperkuat budaya keselamatan. Dengan mengandalkan pengalaman lapangan, kolaborasi, dan pembelajaran berkelanjutan, saya berkomitmen untuk terus meningkatkan kompetensi serta memberikan kontribusi nyata dalam menciptakan lingkungan kerja yang aman, produktif, dan berkelanjutan.
                </p>
              </div>              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
