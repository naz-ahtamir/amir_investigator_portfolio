'use client';

import { motion } from 'framer-motion';
import {
  Search,
  ShieldCheck,
  Users2,
  CheckCircle2,
  ClipboardList,
  Compass,
} from 'lucide-react';

const expertiseAreas = [
  {
    icon: Search,
    title: 'Investigasi Insiden & Root Cause Analysis',
    badge: 'Spesialisasi Utama',
    description:
      'Investigasi kecelakaan kerja dan insiden berpotensi tinggi secara independen, objektif, dan berbasis bukti nyata untuk memutus mata rantai kecelakaan berulang.',
    capabilities: [
      'Olah TKP & Pengamanan Bukti Forensik K3',
      'Wawancara Saksi & Teknik Penggalian Informasi Fakta',
      'Rekonstruksi Kronologis & Timeline Kejadian',
      'Analisis Akar Masalah (5-Whys, Fishbone, Tripod Beta)',
      'Perumusan Tindakan Korektif & Preventif (CAPA)',
      'Penyusunan Laporan Investigasi Standar Kemnaker RI',
    ],
  },
  {
    icon: ClipboardList,
    title: 'Identifikasi Bahaya & Penilaian Risiko (HIRADC)',
    badge: 'Mitigasi Proaktif',
    description:
      'Penilaian risiko menyeluruh terhadap operasional lapangan, peralatan mekanis, dan lingkungan kerja guna mencegah timbulnya kerugian.',
    capabilities: [
      'Penyusunan Matriks HIRADC / IBPR Komprehensif',
      'Job Safety Analysis (JSA) untuk Pekerjaan Kritis',
      'Sistem Izin Kerja Khusus (Permit to Work - PTW)',
      'Program Isolasi Energi Berbahaya (Lockout / Tagout - LOTO)',
      'Audit Kepatuhan K3 (PP No. 50/2012 & ISO 45001:2018)',
      'Inspeksi Keselamatan Tempat Kerja & Housekeeping 5R',
    ],
  },
  {
    icon: Users2,
    title: 'Pelatihan K3 & Edukasi Keselamatan Kerja',
    badge: 'Pengembangan SDM',
    description:
      'Penyelenggaraan pelatihan praktis dan terstruktur untuk menanamkan budaya keselamatan kerja yang berkelanjutan di seluruh lini organisasi.',
    capabilities: [
      'Pelatihan Investigasi Insiden untuk Pengawas & P2K3',
      'Simulasi Tanggap Darurat & Pemadaman Api (APAR)',
      'Pelatihan Bekerja di Ketinggian & Ruang Terbatas',
      'Safety Leadership & Briefing Toolbox Meeting (TBM)',
      'Behavior-Based Safety (BBS) & Stop Work Authority',
      'Pengembangan Modul & Standard Operating Procedures (SOP)',
    ],
  },
];

const investigationSteps = [
  {
    step: '01',
    title: 'Tanggap Cepat & Olah TKP',
    desc: 'Pengamanan lokasi kejadian, isolasi bahaya residual, evakuasi, dan dokumentasi bukti fisik secara seksama.',
  },
  {
    step: '02',
    title: 'Pengumpulan Data & Saksi',
    desc: 'Dokumentasi fotografi forensik, data operasional alat, dan wawancara saksi terstruktur tanpa intimidasi.',
  },
  {
    step: '03',
    title: 'Analisis Akar Masalah (RCA)',
    desc: 'Pemetaan hubungan antara tindakan tidak aman, kondisi sub-standar, dan kegagalan sistem barier proteksi.',
  },
  {
    step: '04',
    title: 'Perumusan Rekomendasi (CAPA)',
    desc: 'Penyusunan tindakan korektif dan preventif yang realistis berbasis Hierarki Pengendalian Bahaya.',
  },
  {
    step: '05',
    title: 'Laporan & Lessons Learned',
    desc: 'Penyusunan dokumen resmi investigasi dan diseminasi pembelajaran agar kejadian serupa tidak terulang.',
  },
];

export function CoreExpertise() {
  return (
    <section id="expertise" className="py-20 bg-white border-b border-neutral-200 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 border border-neutral-300 text-neutral-800 text-xs font-mono uppercase tracking-widest mb-3">
            <Compass className="w-3.5 h-3.5 text-amber-600" />
            Bidang Kompetensi
          </div>
          <h2 className="text-3xl lg:text-4xl font-black tracking-tight text-black uppercase">
            Pilar Keahlian Utama
          </h2>
          <p className="text-neutral-600 text-sm mt-2">
            Kombinasi ketajaman investigatif forensik, manajemen risiko terstruktur, serta
            pendekatan praktis dalam edukasi keselamatan kerja.
          </p>
          <div className="w-16 h-0.5 bg-black mx-auto mt-4" />
        </div>

        {/* 3 Core Expertise Cards - Sharp Minimal */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {expertiseAreas.map((area, idx) => {
            const Icon = area.icon;
            return (
              <div
                key={idx}
                className="bg-white p-7 border border-neutral-200 hover:border-black transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 bg-neutral-100 flex items-center justify-center text-black">
                      <Icon size={20} />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-neutral-100 text-neutral-800 border border-neutral-200 uppercase">
                      {area.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-black mb-2 leading-snug">
                    {area.title}
                  </h3>

                  <p className="text-xs text-neutral-600 mb-6 leading-relaxed">
                    {area.description}
                  </p>

                  <div className="pt-4 border-t border-neutral-200">
                    <h4 className="text-[11px] font-mono font-bold text-neutral-900 uppercase tracking-wider mb-3">
                      Lingkup Kemampuan:
                    </h4>
                    <ul className="space-y-2">
                      {area.capabilities.map((cap, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-neutral-600">
                          <span className="w-1.5 h-1.5 bg-amber-500 mt-1.5 flex-shrink-0" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 5-Stage Investigation Workflow - Sharp Minimal */}
        <div className="bg-black text-white p-8 lg:p-10 border border-neutral-900">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
              Standard Methodology
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white uppercase mt-1">
              5 Tahapan Metodologi Investigasi & Mitigasi
            </h3>
            <p className="text-xs text-neutral-400 mt-2">
              Alur kerja teruji untuk memastikan setiap penyelidikan insiden berjalan secara
              akuntabel, menyeluruh, dan menghasilkan tindakan pencegahan yang terukur.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {investigationSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-4 bg-neutral-900 border border-neutral-800 hover:border-neutral-600 transition-colors"
              >
                <div className="text-2xl font-black text-amber-500 mb-2 font-mono">
                  {step.step}
                </div>
                <h4 className="text-xs font-bold text-white mb-2 uppercase leading-tight font-sans">
                  {step.title}
                </h4>
                <p className="text-[11px] text-neutral-400 leading-relaxed font-sans">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}