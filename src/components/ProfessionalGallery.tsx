'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export interface CategoryDocumentation {
  id: string;
  name: string;
  coverImage: string;
  photos: string[];
}

export const documentationCategories: CategoryDocumentation[] = [
  {
    id: 'meeting-konsolidasi',
    name: 'Meeting Konsolidasi',
    coverImage: '/Dokumentasi Aktivitas/Meeting Konsolidasi 1.jpg',
    photos: [
      '/Dokumentasi Aktivitas/Meeting Konsolidasi 1.jpg',
      '/Dokumentasi Aktivitas/Meeting Konsolidasi 2.jpg',
      '/Dokumentasi Aktivitas/Meeting Konsolidasi 3.jpg',
      '/Dokumentasi Aktivitas/Meeting Konsolidasi 4.jpg',
    ],
  },
  {
    id: 'meeting-p2k3',
    name: 'Meeting P2K3',
    coverImage: '/Dokumentasi Aktivitas/Meeting P2K3 1.jpg',
    photos: [
      '/Dokumentasi Aktivitas/Meeting P2K3 1.jpg',
      '/Dokumentasi Aktivitas/Meeting P2K3 2.jpg',
    ],
  },
  {
    id: 'induksi-keselamatan',
    name: 'Induksi Keselamatan',
    coverImage: '/Dokumentasi Aktivitas/Induksi Keselamatan 1.jpg',
    photos: [
      '/Dokumentasi Aktivitas/Induksi Keselamatan 1.jpg',
      '/Dokumentasi Aktivitas/Induksi Keselamatan 2.jpg',
      '/Dokumentasi Aktivitas/Induksi Keselamatan 3.jpg',
      '/Dokumentasi Aktivitas/Induksi Keselamatan 4.jpg',
      '/Dokumentasi Aktivitas/Induksi Keselamatan 5.jpg',
      '/Dokumentasi Aktivitas/Induksi Keselamatan 6.jpg',
      '/Dokumentasi Aktivitas/Induksi Keselamatan 7.jpg',
      '/Dokumentasi Aktivitas/Induksi Keselamatan 8.jpg',
      '/Dokumentasi Aktivitas/Induksi Keselamatan 9.jpg',
      '/Dokumentasi Aktivitas/Induksi Keselamatan 10.jpg',
      '/Dokumentasi Aktivitas/Induksi Keselamatan 11.jpg',
      '/Dokumentasi Aktivitas/Induksi Keselamatan 12.jpg',
    ],
  },
  {
    id: 'pelatihan-keselamatan',
    name: 'Pelatihan Keselamatan',
    coverImage: '/Dokumentasi Aktivitas/Pelatihan Keselamatan 1.jpg',
    photos: [
      '/Dokumentasi Aktivitas/Pelatihan Keselamatan 1.jpg',
      '/Dokumentasi Aktivitas/Pelatihan Keselamatan 2.jpg',
      '/Dokumentasi Aktivitas/Pelatihan Keselamatan 3.jpg',
      '/Dokumentasi Aktivitas/Pelatihan Keselamatan 4.jpg',
      '/Dokumentasi Aktivitas/Pelatihan Keselamatan 5.jpg',
      '/Dokumentasi Aktivitas/Pelatihan Keselamatan 8.jpg',
    ],
  },
  {
    id: 'inspeksi-keselamatan',
    name: 'Inspeksi Keselamatan',
    coverImage: '/Dokumentasi Aktivitas/Inspeksi Keselamatan 1.jpeg',
    photos: [
      '/Dokumentasi Aktivitas/Inspeksi Keselamatan 1.jpeg',
      '/Dokumentasi Aktivitas/Inspeksi Keselamatan 2.jpeg',
      '/Dokumentasi Aktivitas/Inspeksi Keselamatan 3.jpeg',
    ],
  },
  {
    id: 'safety-talk',
    name: 'Safety Talk',
    coverImage: '/Dokumentasi Aktivitas/Safety Talk 1.jpg',
    photos: [
      '/Dokumentasi Aktivitas/Safety Talk 1.jpg',
      '/Dokumentasi Aktivitas/Safety Talk 2.jpg',
    ],
  },
  {
    id: 'audit-internal-smk3',
    name: 'Audit Internal SMK3',
    coverImage: '/Dokumentasi Aktivitas/Audit Internal SMK3 1.jpg',
    photos: [
      '/Dokumentasi Aktivitas/Audit Internal SMK3 1.jpg',
      '/Dokumentasi Aktivitas/Audit Internal SMK3 2.jpg',
      '/Dokumentasi Aktivitas/Audit Internal SMK3 3.jpg',
      '/Dokumentasi Aktivitas/Audit Internal SMK3 4.jpg',
      '/Dokumentasi Aktivitas/Audit Internal SMK3 5.jpg',
    ],
  },
  {
    id: 'audit-eksternal-smk3',
    name: 'Audit Eksternal SMK3',
    coverImage: '/Dokumentasi Aktivitas/Audit Eksternal SMK3 1.jpeg',
    photos: [
      '/Dokumentasi Aktivitas/Audit Eksternal SMK3 1.jpeg',
      '/Dokumentasi Aktivitas/Audit Eksternal SMK3 2.jpeg',
      '/Dokumentasi Aktivitas/Audit Eksternal SMK3 3.jpeg',
      '/Dokumentasi Aktivitas/Audit Eksternal SMK3 4.jpeg',
      '/Dokumentasi Aktivitas/Audit Eksternal SMK3 5.jpeg',
      '/Dokumentasi Aktivitas/Audit Eksternal SMK3 6.jpeg',
      '/Dokumentasi Aktivitas/Audit Eksternal SMK3 7.jpeg',
      '/Dokumentasi Aktivitas/Audit Eksternal SMK3 8.jpeg',
      '/Dokumentasi Aktivitas/Audit Eksternal SMK3 9.jpeg',
      '/Dokumentasi Aktivitas/Audit Eksternal SMK3 10.jpeg',
      '/Dokumentasi Aktivitas/Audit Eksternal SMK3 11.jpeg',
      '/Dokumentasi Aktivitas/Audit Eksternal SMK3 12.jpeg',
      '/Dokumentasi Aktivitas/Audit Eksternal SMK3 13.jpeg',
      '/Dokumentasi Aktivitas/Audit Eksternal SMK3 14.jpeg',
      '/Dokumentasi Aktivitas/Audit Eksternal SMK3 15.jpeg',
      '/Dokumentasi Aktivitas/Audit Eksternal SMK3 16.jpeg',
      '/Dokumentasi Aktivitas/Audit Eksternal SMK3 17.jpeg',
      '/Dokumentasi Aktivitas/Audit Eksternal SMK3 18.jpeg',
    ],
  },
  {
    id: 'lain-lain',
    name: 'Lain-Lain',
    coverImage: '/Dokumentasi Aktivitas/Lain-Lain 1.jpg',
    photos: [
      '/Dokumentasi Aktivitas/Lain-Lain 1.jpg',
      '/Dokumentasi Aktivitas/Lain-Lain 2.jpg',
      '/Dokumentasi Aktivitas/Lain-Lain 3.jpg',
      '/Dokumentasi Aktivitas/Lain-Lain 4.jpeg',
      '/Dokumentasi Aktivitas/Lain-Lain 5.jpeg',
    ],
  },
];

export function ProfessionalGallery() {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [activeCategory, setActiveCategory] = useState<CategoryDocumentation | null>(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState<number>(0);
  const activeThumbRef = useRef<HTMLButtonElement | null>(null);

  const filteredCategories =
    selectedFilter === 'all'
      ? documentationCategories
      : documentationCategories.filter((cat) => cat.id === selectedFilter);

  const openCategoryGallery = (category: CategoryDocumentation, startIndex: number = 0) => {
    setActiveCategory(category);
    setActivePhotoIndex(startIndex);
  };

  const closeCategoryGallery = () => {
    setActiveCategory(null);
    setActivePhotoIndex(0);
  };

  const handleNextPhoto = useCallback(() => {
    if (!activeCategory) return;
    setActivePhotoIndex((prev) => (prev + 1) % activeCategory.photos.length);
  }, [activeCategory]);

  const handlePrevPhoto = useCallback(() => {
    if (!activeCategory) return;
    setActivePhotoIndex((prev) => (prev - 1 + activeCategory.photos.length) % activeCategory.photos.length);
  }, [activeCategory]);

  // Scroll active thumbnail into view
  useEffect(() => {
    if (activeThumbRef.current) {
      activeThumbRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [activePhotoIndex]);

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (!activeCategory) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        handleNextPhoto();
      } else if (e.key === 'ArrowLeft') {
        handlePrevPhoto();
      } else if (e.key === 'Escape') {
        closeCategoryGallery();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [activeCategory, handleNextPhoto, handlePrevPhoto]);

  return (
    <section id="gallery" className="py-20 bg-white border-b border-neutral-200 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center px-3 py-1 bg-neutral-100 border border-neutral-300 text-neutral-800 text-xs font-mono uppercase tracking-widest mb-3">
            Galeri Portofolio Lapangan
          </div>
          <h2 className="text-3xl lg:text-4xl font-black tracking-tight text-black uppercase">
            Dokumentasi Aspek Profesional
          </h2>          
          <div className="w-16 h-0.5 bg-black mx-auto mt-4" />
        </div>

        {/* Filter Tabs - Clean Sharp Typography Without Small Icons */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mb-12">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-bold tracking-wider uppercase border transition-colors ${
              selectedFilter === 'all'
                ? 'bg-black text-white border-black'
                : 'bg-white text-neutral-700 border-neutral-300 hover:border-black hover:text-black'
            }`}
          >
            <span>SEMUA</span>
            <span
              className={`text-[10px] font-mono px-1.5 py-0.2 ${
                selectedFilter === 'all' ? 'bg-neutral-800 text-amber-400' : 'bg-neutral-100 text-neutral-600'
              }`}
            >
              {documentationCategories.length}
            </span>
          </button>

          {documentationCategories.map((cat) => {
            const isActive = selectedFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedFilter(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-bold tracking-wider uppercase border transition-colors ${
                  isActive
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-neutral-700 border-neutral-300 hover:border-black hover:text-black'
                }`}
              >
                <span>{cat.name}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.2 ${
                    isActive ? 'bg-neutral-800 text-amber-400' : 'bg-neutral-100 text-neutral-600'
                  }`}
                >
                  {cat.photos.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Gallery Grid - Sharp Minimal Architecture */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredCategories.map((cat) => (
              <motion.div
                key={cat.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={() => openCategoryGallery(cat, 0)}
                className="group cursor-pointer bg-white border border-neutral-200 hover:border-black transition-colors flex flex-col"
              >
                {/* Best Representative Photo Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                  <Image
                    src={cat.coverImage}
                    alt={cat.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-103 transition-transform duration-300 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-colors" />

                  {/* Photo Count Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider bg-black/90 text-white border border-neutral-700 backdrop-blur-sm">
                      {cat.photos.length} Foto
                    </span>
                  </div>

                  {/* Hover Overlay Hint */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 backdrop-blur-[2px]">
                    <div className="inline-flex items-center px-3.5 py-1.5 bg-white text-black text-xs font-mono font-bold uppercase tracking-wider shadow-lg">
                      <span>Buka Galeri</span>
                    </div>
                  </div>
                </div>

                {/* Card Body - Category Name Only */}
                <div className="p-4 bg-white border-t border-neutral-200 flex items-center justify-between">
                  <h3 className="text-base font-bold text-black uppercase tracking-wide group-hover:text-amber-700 transition-colors">
                    {cat.name}
                  </h3>
                  <span className="text-xs font-mono font-bold text-neutral-500 group-hover:text-black uppercase transition-colors">
                    Lihat
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal / Lightbox with Left & Right Navigation */}
        <AnimatePresence>
          {activeCategory && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-black/85 backdrop-blur-sm"
              onClick={closeCategoryGallery}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.15 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white max-w-5xl w-full max-h-[95vh] flex flex-col border border-black shadow-2xl relative overflow-hidden"
              >
                {/* Modal Top Bar - Clean & Sharp */}
                <div className="bg-white px-5 py-3.5 border-b border-neutral-200 flex items-center justify-between z-10">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider bg-black text-white">
                      {activeCategory.name}
                    </span>
                    <span className="text-xs font-mono font-semibold text-neutral-600">
                      Foto {activePhotoIndex + 1} dari {activeCategory.photos.length}
                    </span>
                  </div>

                  {/* Navigation & Close Buttons */}
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={handlePrevPhoto}
                      className="p-1.5 border border-neutral-300 text-black hover:bg-neutral-100 transition-colors"
                      title="Foto Sebelumnya (Panah Kiri)"
                      aria-label="Sebelumnya"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      onClick={handleNextPhoto}
                      className="p-1.5 border border-neutral-300 text-black hover:bg-neutral-100 transition-colors"
                      title="Foto Selanjutnya (Panah Kanan)"
                      aria-label="Selanjutnya"
                    >
                      <ChevronRight size={18} />
                    </button>
                    <button
                      onClick={closeCategoryGallery}
                      className="p-1.5 bg-black text-white hover:bg-neutral-800 transition-colors ml-2"
                      title="Tutup Galeri (Esc)"
                      aria-label="Tutup"
                    >
                      <X size={18} />
                    </button>
                  </div>
                </div>

                {/* Main Image Display with Side Navigation Buttons */}
                <div className="relative flex-1 min-h-[380px] md:min-h-[520px] bg-neutral-950 flex items-center justify-center overflow-hidden">
                  <Image
                    key={activeCategory.photos[activePhotoIndex]}
                    src={activeCategory.photos[activePhotoIndex]}
                    alt={`${activeCategory.name} - Foto ${activePhotoIndex + 1}`}
                    fill
                    priority
                    className="object-contain"
                    sizes="(max-width: 1200px) 100vw, 1200px"
                  />

                  {/* Left Navigation Overlay Button */}
                  <button
                    onClick={handlePrevPhoto}
                    className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 p-2.5 md:p-3 bg-black/60 hover:bg-black text-white border border-white/20 transition-all rounded-none backdrop-blur-sm group"
                    title="Foto Sebelumnya"
                    aria-label="Foto Sebelumnya"
                  >
                    <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
                  </button>

                  {/* Right Navigation Overlay Button */}
                  <button
                    onClick={handleNextPhoto}
                    className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 p-2.5 md:p-3 bg-black/60 hover:bg-black text-white border border-white/20 transition-all rounded-none backdrop-blur-sm group"
                    title="Foto Selanjutnya"
                    aria-label="Foto Selanjutnya"
                  >
                    <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>

                {/* Bottom Bar: Thumbnail Navigation Strip */}
                <div className="bg-neutral-50 px-4 py-3 border-t border-neutral-200 flex items-center justify-between gap-3 overflow-x-auto">
                  <div className="flex items-center gap-2 overflow-x-auto py-1">
                    {activeCategory.photos.map((photo, idx) => (
                      <button
                        key={idx}
                        ref={idx === activePhotoIndex ? activeThumbRef : null}
                        onClick={() => setActivePhotoIndex(idx)}
                        className={`relative w-16 h-12 md:w-20 md:h-14 flex-shrink-0 border-2 overflow-hidden transition-all ${
                          idx === activePhotoIndex
                            ? 'border-black ring-1 ring-amber-500 scale-102 opacity-100'
                            : 'border-neutral-300 opacity-60 hover:opacity-100'
                        }`}
                        title={`Lihat Foto ${idx + 1}`}
                      >
                        <Image
                          src={photo}
                          alt={`${activeCategory.name} thumbnail ${idx + 1}`}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                        <span className="absolute bottom-0.5 right-0.5 bg-black/80 text-white text-[9px] font-mono px-1">
                          {idx + 1}
                        </span>
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={closeCategoryGallery}
                    className="px-4 py-2 bg-black text-white text-xs font-mono uppercase font-bold hover:bg-neutral-800 transition-colors flex-shrink-0"
                  >
                    Tutup
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
