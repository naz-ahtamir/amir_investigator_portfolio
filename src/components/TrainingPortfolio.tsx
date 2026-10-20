'use client';

import { motion } from 'framer-motion';
import {
  ShieldCheck,
  AlertTriangle,
  Users2,
  Clock,
  CheckCircle2,
  Flame,
  FileCheck2,
  Layers,
  GraduationCap,
} from 'lucide-react';

const trainingPrograms = [
  {
    icon: ShieldCheck,
    title: 'Investigasi Kecelakaan Kerja & Root Cause Analysis (RCA)',
    target: 'HSE Officer, P2K3, Manajer Lapangan & Supervisor',
    duration: '2 - 3 Hari (Workshop & Olah TKP)',
    description:
      'Pelatihan metode penyelidikan insiden, pengamanan barang bukti fisik, teknik wawancara saksi objektif, serta perumusan CAPA SMART.',
    modules: [
      'Protokol tanggap darurat dan olah TKP',
      'Metode analisis 5-Whys, Fishbone Diagram, dan Tripod Beta',
      'Teknik wawancara saksi tanpa intimidasi (Cognitive Interviewing)',
      'Standar pelaporan resmi Kemnaker & notifikasi 1x24 jam',
    ],
  },
  {
    icon: FileCheck2,
    title: 'Penyusunan HIRADC / IBPR & Job Safety Analysis (JSA)',
    target: 'Site Engineer, Safety Officer & Pengawas Lapangan',
    duration: '2 Hari Terstruktur',
    description:
      'Membekali peserta kemampuan menyusun register risiko bahaya operasional secara kuantitatif dan kualitatif sesuai standar ISO 45001 dan SMK3.',
    modules: [
      'Karakterisasi bahaya fisik, kimia, biologi, ergonomi, dan psikososial',
      'Penentuan tingkat keparahan (severity) dan peluang (likelihood)',
      'Hierarki pengendalian risiko: Eliminasi hingga APD',
      'Praktik pembuatan JSA spesifik untuk pekerjaan kritis',
    ],
  },
  {
    icon: Flame,
    title: 'Simulasi Tanggap Darurat & Penanggulangan Kebakaran (APAR)',
    target: 'Regu Peran Kebakaran, Floor Warden, Seluruh Karyawan',
    duration: '1 Hari (Teori & Drill Lapangan)',
    description:
      'Latihan interaktif pemadaman api awal dengan APAR, fire blanket, manajemen evakuasi darurat, dan koordinasi muster point.',
    modules: [
      'Teori segitiga api dan klasifikasi kelas kebakaran (A, B, C, D)',
      'Praktik teknik PASS APAR Powder, CO2, dan foam',
      'Drill evakuasi simulasi asap dan penanganan korban panik',
      'Pemeriksaan rutin kelayakan APAR dan jaringan hidran',
    ],
  },
  {
    icon: Layers,
    title: 'Keselamatan Bekerja di Ketinggian & Ruang Terbatas',
    target: 'Teknisi Maintenance, Rigger, Operator Konstruksi',
    duration: '2 Hari (Sertifikasi Internal / Refreshment)',
    description:
      'Praktek kepatuhan regulasi bekerja pada elevasi tinggi dan ruang sempit berbahaya, dilengkapi inspeksi kelayakan APD khusus.',
    modules: [
      'Standar Permenaker No. 09/2016 tentang Bekerja di Ketinggian',
      'Inspeksi Full Body Harness, shock absorber, dan anchor points',
      'Prosedur izin kerja ruang terbatas (Confined Space Entry Permit)',
      'Pengujian gas berbahaya atmosfer (O2, H2S, CO, LEL)',
    ],
  },
  {
    icon: Users2,
    title: 'Safety Leadership & Dynamic Toolbox Meeting (TBM)',
    target: 'Mandor, Foreman, Site Supervisor & Kepala Regu',
    duration: '1 Hari Workshop Interaktif',
    description:
      'Membangun keterampilan komunikasi pengawas lini depan dalam memimpin briefing keselamatan harian yang persuasif dan melibatkan pekerja.',
    modules: [
      'Teknik intervensi bahaya dengan Stop Work Authority (SWA)',
      'Bedah bahaya harian (Daily Hazard Identification)',
      'Behavior-Based Safety (BBS): Menghilangkan unsafe act',
      'Memberikan umpan balik positif terhadap kepatuhan K3',
    ],
  },
  {
    icon: AlertTriangle,
    title: 'Isolasi Energi Berbahaya (Lockout / Tagout - LOTO)',
    target: 'Teknisi Elektrikal, Mekanik & Operator Mesin',
    duration: '1 Hari Workshop Praktik',
    description:
      'Pelatihan komprehensif 6 langkah isolasi sumber energi (listrik, hidrolik, pneumatik, termal) untuk mencegah pelepasan energi tidak terkendali.',
    modules: [
      'Identifikasi sumber energi primer dan sisa (residual energy)',
      'Pemasangan padlock, hasp, dan safety tag terstandarisasi',
      'Prosedur verifikasi zero energy state sebelum intervensi mesin',
      'Manajemen LOTO untuk pekerjaan regu gabungan (group lockout)',
    ],
  },
];

const deliveryMethods = [
  {
    title: 'Materi Berbasis Risiko Nyata',
    desc: 'Kurikulum disesuaikan dengan proses kerja, alat, dan profil bahaya spesifik di tempat kerja.',
  },
  {
    title: 'Simulasi & Praktik Lapangan',
    desc: 'Menekankan drill langsung, evaluasi peralatan, dan skenario penanganan situasi darurat nyata.',
  },
  {
    title: 'Evaluasi & Tolok Ukur Kompetensi',
    desc: 'Dilengkapi pre-test, post-test, dan instrumen penilaian efektivitas pembelajaran andragogi.',
  },
];

export function TrainingPortfolio() {
  return (
    <section id="training" className="py-20 bg-neutral-50/60 border-b border-neutral-200 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-neutral-300 text-neutral-800 text-xs font-mono uppercase tracking-widest mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-amber-600" />
            Portofolio Edukasi K3
          </div>
          <h2 className="text-3xl lg:text-4xl font-black tracking-tight text-black uppercase">
            Program Pelatihan Keselamatan Kerja
          </h2>
          <p className="text-neutral-600 text-sm mt-2">
            Rangkaian kurikulum dan materi ajar praktis yang telah diselenggarakan
            untuk berbagai lini pekerja dan pengawas industri.
          </p>
          <div className="w-16 h-0.5 bg-black mx-auto mt-4" />
        </div>

        {/* 6 Training Modules Grid - Sharp Minimal */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {trainingPrograms.map((program, idx) => {
            const Icon = program.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 border border-neutral-200 hover:border-black transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 bg-neutral-100 flex items-center justify-center text-black">
                      <Icon size={18} />
                    </div>
                    <span className="flex items-center gap-1 text-[11px] font-mono text-neutral-600 bg-neutral-100 px-2 py-0.5 border border-neutral-200">
                      <Clock size={11} className="text-amber-600" />
                      {program.duration}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-black mb-1.5 leading-snug">
                    {program.title}
                  </h3>

                  <div className="mb-3 text-[11px] font-mono text-neutral-700 bg-neutral-50 border border-neutral-200 px-2 py-1 inline-block">
                    Target: {program.target}
                  </div>

                  <p className="text-xs text-neutral-600 mb-4 leading-relaxed">
                    {program.description}
                  </p>

                  <div className="pt-3 border-t border-neutral-100">
                    <h4 className="text-[10px] font-mono font-bold text-neutral-800 uppercase tracking-widest mb-2">
                      Silabus Utama:
                    </h4>
                    <ul className="space-y-1.5">
                      {program.modules.map((mod, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-neutral-600">
                          <span className="w-1.5 h-1.5 bg-black mt-1.5 flex-shrink-0" />
                          <span>{mod}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Training Methodology Summary - Sharp Minimal */}
        <div className="bg-white p-6 md:p-8 border border-neutral-200">
          <h3 className="text-xs font-mono font-bold text-neutral-900 uppercase tracking-widest mb-4 pb-2 border-b border-neutral-100">
            Karakteristik Metodologi Pengajaran
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {deliveryMethods.map((m, i) => (
              <div key={i} className="p-3 bg-neutral-50 border border-neutral-200">
                <h4 className="text-xs font-bold text-black mb-1 font-sans">{m.title}</h4>
                <p className="text-xs text-neutral-600 leading-normal">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}