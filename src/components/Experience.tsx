'use client';

import { motion } from 'framer-motion';
import {
  Briefcase,
  Award,
  ShieldCheck,
  Calendar,
  Building2,
} from 'lucide-react';

const careerHistory = [
  {
    role: 'Wakil Manajer Safety',
    company: 'PT. MEIMING New Energy Materials',
    period: '2025 - Sekarang',
    location: 'Morowali, Sulawesi Tengah, Indonesia',
    keyPoints: [
      'Melakukan wawancara/ investigasi jika ada pelanggaran keselamatan atau case yang berkaitan dengan K3',
      'Memastikan data incident sudah terecord dengan baik',
      'Melakukan pengawasan safety aktivitas kerja kontraktor',
      'Ikut serta dalam program Inspeksi keselamatan (Joint Inspection)',
    ],
  },
  {
    role: 'Wakil Foreman Safety',
    company: 'PT. ESG New Energy Materials',
    period: '2023 - 2025',
    location: 'Morowali, Sulawesi Tengah, Indonesia',    
    keyPoints: [
      'Merencanakan dan mengoordinasikan program pengendalian keselamatan mingguan dan harian, menyosialisasikannya kepada seluruh departemen, serta mengevaluasi pelaksanaannya dan memberikan rekomendasi perbaikan untuk memastikan penerapan praktik keselamatan yang konsisten dan tindak lanjut temuan tepat waktu.',
      'Mengawasi sistem izin kerja berisiko tinggi (Permit to Work - PTW) untuk pekerjaan lifting, confined space, dan ketinggian.Mengoordinasikan respons awal terhadap insiden, penanganan keadaan darurat, investigasi, dan pelaporan insiden, serta mendukung pelaksanaan program simulasi keadaan darurat guna meningkatkan kecepatan respons dan pembelajaran berkelanjutan dari setiap insiden.',
      'Mengoordinasikan inspeksi APD, peralatan keselamatan, izin kerja, fasilitas tanggap darurat, dan area kerja berisiko tinggi. Mendokumentasikan hasil inspeksi untuk memastikan kepatuhan terhadap peraturan K3 dan prosedur perusahaan serta mengurangi risiko insiden.',
      'Mendampingi inspeksi K3 oleh instansi pemerintah dan pihak ketiga dengan menyiapkan dokumen serta bukti pendukung guna memastikan kesiapan audit dan pemenuhan persyaratan eksternal.',
    ],
  },
  {
    role: 'Safety Control',
    company: 'PT. QMB New Energy Materials',
    period: '2022 - 2023',
    location: 'Morowali, Sulawesi Tengah, Indonesia',    
    keyPoints: [
      'Melaksanakan inspeksi K3 harian dan mingguan sesuai instruksi kerja serta meningkatkan pelaksanaan program pengendalian keselamatan harian guna memastikan penerapan praktik keselamatan yang konsisten dan tindak lanjut temuan secara tepat waktu.',
      'Menangani respons awal terhadap insiden, penanganan keadaan darurat, investigasi, dan pelaporan, serta melaksanakan tindakan korektif dan pencegahan berdasarkan hasil investigasi untuk mengurangi kemungkinan terulangnya insiden.',
      'Melaksanakan simulasi tanggap darurat di lingkungan kerja guna meningkatkan kesiapsiagaan personel dan efektivitas prosedur penanganan keadaan darurat.',
      'Melakukan inspeksi terhadap APD, peralatan keselamatan, izin kerja, fasilitas tanggap darurat, dan area kerja berisiko tinggi, serta menindaklanjuti temuan melalui tindakan korektif dan pencegahan untuk memastikan bahaya terkendali dan fasilitas siap digunakan.',
    ],
  },
];

const credentialsList = [
  {
    title: 'Lisensi Ahli K3 Umum (AK3U)',
    issuer: 'Kementerian Ketenagakerjaan RI (Kemnaker)',
    year: 'Reg. Resmi Kemnaker RI',
    badge: 'Regulasi',
    desc: 'Penunjukan resmi pengawas K3 perusahaan sesuai ketentuan UU No. 1/1970 dan Permenaker No. 02/1992.',
  },
  {
    title: 'Sertifikasi Accident Investigation',
    issuer: 'Badan Nasional Sertifikasi Profesi (BNSP)',
    year: 'SKKNI K3 Nasional',
    badge: 'Kompetensi',
    desc: 'Standar kompetensi penyelidikan insiden kerja, pengumpulan bukti forensik, dan pemetaan faktor sistemik.',
  },
  // {
  //   title: 'Auditor Sistem Manajemen K3 (SMK3 PP 50/2012)',
  //   issuer: 'Kementerian Ketenagakerjaan RI',
  //   year: '166 Kriteria Lanjutan',
  //   badge: 'Auditor',
  //   desc: 'Kompetensi pelaksanaan audit kepatuhan SMK3 nasional untuk sertifikasi tingkat lanjutan.',
  // },
  {
    title: 'Certified Training of Trainer (ToT Instruktur K3)',
    issuer: 'Badan Nasional Sertifikasi Profesi (BNSP)',
    year: 'SKKNI K3 Nasional',
    badge: 'Instruktur',
    desc: 'Penguasaan metodologi andragogi, perancangan silabus pelatihan vokasi K3, dan evaluasi hasil ajar.',
  },
  // {
  //   title: 'Sertifikasi Bekerja Aman di Ketinggian (TKBT)',
  //   issuer: 'Kemnaker RI',
  //   year: 'Permenaker 09/2016',
  //   badge: 'Teknis',
  //   desc: 'Teknik akses tali, inspeksi alat pelindung jatuh (full body harness), horizontal lifeline, dan rescue ketinggian.',
  // },
  // {
  //   title: 'Sertifikasi First Aider & Tanggap Darurat Medis',
  //   issuer: 'Lembaga Resmi Terakreditasi',
  //   year: 'Standar Medis K3',
  //   badge: 'Tanggap Darurat',
  //   desc: 'Resusitasi Jantung Paru (CPR/RJP), penggunaan AED, penanganan cedera trauma kerja, dan triase evakuasi.',
  // },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-white border-b border-neutral-200 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 border border-neutral-300 text-neutral-800 text-xs font-mono uppercase tracking-widest mb-3">            
            Rekam Jejak & Kualifikasi
          </div>
          <h2 className="text-3xl lg:text-4xl font-black tracking-tight text-black uppercase">
            Riwayat Profesional & Lisensi
          </h2>          
          <div className="w-16 h-0.5 bg-black mx-auto mt-4" />
        </div>

        <div className="w-full space-y-20">
          {/* Career Timeline - Alternating Stepped Ladder */}
          <div>
            <div className="flex items-center gap-3 mb-12 pb-3 border-b border-neutral-200">
              <div className="w-8 h-8 bg-black flex items-center justify-center text-white">                
              </div>
              <div>
                <h3 className="text-lg font-bold text-black uppercase">
                  Riwayat Pengalaman Kerja
                </h3>
              </div>
            </div>

            {/* Alternating Ladder Timeline Container */}
            <div className="relative py-4">
              {/* Desktop Center Vertical Spine */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-neutral-300 -translate-x-1/2">
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black rotate-45" />
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black rotate-45" />
              </div>

              {/* Mobile Left Vertical Spine */}
              <div className="md:hidden absolute left-5 sm:left-6 top-0 bottom-0 w-[2px] bg-neutral-300 -translate-x-1/2">
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black rotate-45" />
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black rotate-45" />
              </div>

              {/* Timeline Items */}
              <div className="space-y-12 md:space-y-16">
                {careerHistory.map((item, idx) => {
                  const isRight = idx % 2 === 0;

                  return (
                    <div key={idx} className="relative group">
                      {/* Center Node (Spine Junction) */}
                      <div className="absolute top-8 -translate-y-1/2 z-10 left-5 sm:left-6 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-black border-2 border-white group-hover:bg-amber-600 group-hover:scale-110 transition-all duration-200 shadow-sm flex items-center justify-center">
                        <div className="w-1 h-1 bg-white" />
                      </div>

                      {/* Horizontal Rung (|—— for right, ——| for left) */}
                      <div
                        className={`absolute top-8 -translate-y-1/2 h-[2px] bg-neutral-300 group-hover:bg-amber-600 transition-colors left-5 sm:left-6 w-7 sm:w-10 ${
                          isRight
                            ? 'md:left-1/2 md:right-auto md:w-12'
                            : 'md:left-auto md:right-1/2 md:w-12'
                        }`}
                      />

                      {/* Card Position Wrapper */}
                      <div className="w-full pl-12 sm:pl-16 md:pl-0">
                        <div
                          className={`w-full ${
                            isRight
                              ? 'md:w-1/2 md:ml-auto md:pl-12'
                              : 'md:w-1/2 md:mr-auto md:pr-12'
                          }`}
                        >
                          <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.45, ease: 'easeOut', delay: idx * 0.08 }}
                            className="bg-white p-6 md:p-7 border border-neutral-200 group-hover:border-black transition-all duration-200 shadow-sm group-hover:shadow-md"
                          >
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                              <span className="text-[11px] font-mono font-bold px-2 py-0.5 bg-neutral-100 text-neutral-800 border border-neutral-200 uppercase tracking-wider inline-block self-start">
                                POSISI 0{idx + 1}
                              </span>
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-mono font-bold bg-neutral-900 text-white self-start sm:self-auto">
                                <Calendar size={12} className="text-amber-400" />
                                {item.period}
                              </span>
                            </div>

                            <h4 className="text-base md:text-lg font-bold text-black uppercase tracking-tight">
                              {item.role}
                            </h4>
                            <div className="flex items-center gap-2 text-xs font-mono text-neutral-600 mt-1 mb-3">
                              <Building2 size={13} className="text-amber-600 flex-shrink-0" />
                              <span>{item.company} &bull; {item.location}</span>
                            </div>
                            <div className="pt-3 border-t border-neutral-100">
                              <h5 className="text-[10px] font-mono font-bold text-neutral-800 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 bg-amber-500 inline-block" />
                                Pencapaian &amp; Ruang Lingkup:
                              </h5>
                              <ul className="grid sm:grid-cols-2 gap-2">
                                {item.keyPoints.map((point, i) => (
                                  <li key={i} className="flex items-start gap-2 text-xs text-neutral-600 leading-normal">
                                    <span className="w-1.5 h-1.5 bg-amber-500 mt-1.5 flex-shrink-0" />
                                    <span>{point}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Certifications & Qualifications Grid - Sharp Minimal */}
          <div>
            <div className="flex items-center gap-3 mb-8 pb-3 border-b border-neutral-200">
              <div className="w-8 h-8 bg-black flex items-center justify-center text-white">
                <ShieldCheck size={16} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-black uppercase">
                  Lisensi & Kualifikasi Resmi
                </h3>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {credentialsList.map((cred, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 border border-neutral-200 hover:border-black transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-neutral-100 text-neutral-800 border border-neutral-200 uppercase">
                        {cred.badge}
                      </span>
                      <Award size={16} className="text-amber-600" />
                    </div>

                    <h4 className="text-sm font-bold text-black mb-1 leading-snug">
                      {cred.title}
                    </h4>

                    <p className="text-xs font-mono text-neutral-500 mb-2">
                      {cred.issuer}
                    </p>

                    <p className="text-xs text-neutral-600 leading-relaxed font-sans">
                      {cred.desc}
                    </p>
                  </div>

                  <div className="pt-3 mt-4 border-t border-neutral-100 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                    <span className="text-emerald-700 font-bold uppercase text-[10px]">
                      &bull; Terverifikasi
                    </span>
                    <span>{cred.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}