'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Send,
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(`[Portofolio Amiruddin D.] ${formData.subject || 'Pesan Baru'} - ${formData.organization || formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Nama: ${formData.name}\nEmail: ${formData.email}\nNomor Telepon: ${formData.phone}\nInstansi/Perusahaan: ${formData.organization}\n\nPesan:\n${formData.message}`
    );
    window.location.href = `mailto:amiruddin.safety@example.com?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSubmitted(true);
  };

  const openWhatsApp = () => {
    const waText = encodeURIComponent(
      `Halo Pak Amiruddin, saya melihat portofolio K3 Anda dan ingin terhubung.`
    );
    window.open(`https://wa.me/+6282350156935?text=${waText}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-neutral-50/60 border-b border-neutral-200 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-neutral-300 text-neutral-800 text-xs font-mono uppercase tracking-widest mb-3">            
            Kontak &amp; Korespondensi
          </div>
          <h2 className="text-3xl lg:text-4xl font-black tracking-tight text-black uppercase">
            Hubungi Saya
          </h2>
          {/* <p className="text-neutral-600 text-sm mt-2">
            Terbuka untuk diskusi profesional, undangan pemateri pelatihan K3,
            maupun kolaborasi terkait keselamatan kerja.
          </p> */}
          <div className="w-16 h-0.5 bg-black mx-auto mt-4" />
        </div>

        <div className="w-full grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Info (5 cols) - Sharp Minimal */}
          <div className="lg:col-span-5 space-y-4">
            {/* Direct WhatsApp Callout - Sharp Minimal */}
            <div className="bg-black text-white p-6 border border-neutral-800">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-400">
                Akses Langsung
              </span>
              <h3 className="text-base font-bold mt-1 mb-2">
                Pesan Cepat via WhatsApp
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                Untuk pertanyaan langsung atau undangan diskusi, Anda dapat menghubungi via chat WhatsApp.
              </p>
              <button
                type="button"
                onClick={openWhatsApp}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white text-black text-xs font-mono font-bold uppercase hover:bg-neutral-100 transition-colors"
              >
                <MessageSquare size={14} />
                <span>Kirim Pesan WhatsApp</span>
                <ExternalLink size={12} />
              </button>
            </div>

            {/* Direct Contact Cards - Sharp */}
            <div className="bg-white p-6 border border-neutral-200 space-y-4 text-xs font-sans">
              <div className="flex items-start gap-3">
                <Mail size={16} className="text-black flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block font-mono font-bold text-neutral-800 uppercase text-[11px]">
                    Email:
                  </span>
                  <a
                    href="mailto:Amiruddindumi.tomaballo@gmail.com"
                    className="text-neutral-700 hover:text-black hover:underline"
                  >
                    Amiruddindumi.tomaballo@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-neutral-100">
                <Phone size={16} className="text-black flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block font-mono font-bold text-neutral-800 uppercase text-[11px]">
                    Telepon / WhatsApp:
                  </span>
                  <a href="tel:+6282350156935" className="text-neutral-700 hover:text-black hover:underline">
                    +62 823-5015-6935
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-neutral-100">
                <MapPin size={16} className="text-black flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block font-mono font-bold text-neutral-800 uppercase text-[11px]">
                    Lokasi:
                  </span>
                  <span className="text-neutral-700">Indonesia</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Modern Sharp Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 md:p-8 border border-neutral-200">
              <h3 className="text-base font-bold text-black uppercase mb-1">
                Kirimkan Pesan
              </h3>
              <p className="text-xs text-neutral-500 mb-6">
                Isi formulir di bawah ini untuk mengirimkan pesan atau pertanyaan langsung.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-[11px] font-mono font-bold text-neutral-700 uppercase tracking-wider mb-1"
                    >
                      Nama Lengkap <span className="text-amber-600">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Nama Anda"
                      className="w-full px-3 py-2 bg-white border border-neutral-300 text-xs text-black focus:outline-none focus:border-black"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[11px] font-mono font-bold text-neutral-700 uppercase tracking-wider mb-1"
                    >
                      Alamat Email <span className="text-amber-600">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="nama@email.com"
                      className="w-full px-3 py-2 bg-white border border-neutral-300 text-xs text-black focus:outline-none focus:border-black"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-[11px] font-mono font-bold text-neutral-700 uppercase tracking-wider mb-1"
                    >
                      Nomor Telepon
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="08xxxxxxxxxx"
                      className="w-full px-3 py-2 bg-white border border-neutral-300 text-xs text-black focus:outline-none focus:border-black"
                    />
                  </div>

                  {/* Organization */}
                  <div>
                    <label
                      htmlFor="organization"
                      className="block text-[11px] font-mono font-bold text-neutral-700 uppercase tracking-wider mb-1"
                    >
                      Perusahaan / Instansi
                    </label>
                    <input
                      id="organization"
                      name="organization"
                      type="text"
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="Nama instansi"
                      className="w-full px-3 py-2 bg-white border border-neutral-300 text-xs text-black focus:outline-none focus:border-black"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-[11px] font-mono font-bold text-neutral-700 uppercase tracking-wider mb-1"
                  >
                    Subjek Pesan <span className="text-amber-600">*</span>
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Contoh: Undangan Diskusi Pelatihan K3"
                    className="w-full px-3 py-2 bg-white border border-neutral-300 text-xs text-black focus:outline-none focus:border-black"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-[11px] font-mono font-bold text-neutral-700 uppercase tracking-wider mb-1"
                  >
                    Isi Pesan <span className="text-amber-600">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tuliskan pesan Anda..."
                    className="w-full px-3 py-2 bg-white border border-neutral-300 text-xs text-black focus:outline-none focus:border-black resize-none"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors"
                  >
                    <Send size={13} />
                    <span>Kirim Pesan</span>
                  </button>
                </div>

                {submitted && (
                  <div className="p-3 bg-neutral-100 border border-neutral-300 text-neutral-800 text-xs flex items-center gap-2 mt-3 font-mono">
                    <CheckCircle2 size={15} className="text-black flex-shrink-0" />
                    <span>
                      Pesan Anda telah disiapkan di aplikasi email untuk dikirimkan.
                    </span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
