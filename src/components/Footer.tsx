import Link from 'next/link';
import { Mail, Phone, MapPin, Shield } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-neutral-400 border-t border-neutral-800">
      <div className="container mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Brand & Mission (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">              
              <h2 className="text-white text-base font-extrabold tracking-tight font-mono">
                》AMIRUDDIN <span className="text-amber-500">D.</span>
              </h2>
            </div>

            <p className="text-xs leading-relaxed text-neutral-400 max-w-sm">
              Praktisi K3 yang berfokus pada pengelolaan risiko, investigasi insiden, analisis akar penyebab, dan penerapan keselamatan kerja di lingkungan industri.
            </p>

            <div className="text-[11px] font-mono text-neutral-500 border-l border-neutral-700 pl-3">
              UU No. 1 Tahun 1970 &bull; PP No. 50 Tahun 2012 (SMK3) &bull; ISO 45001:2018
            </div>
          </div>

          {/* Quick Menu (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-white text-xs font-mono font-bold uppercase tracking-widest mb-3">
              Menu Navigasi
            </h3>
            <ul className="space-y-1.5 text-xs font-mono">
              <li>
                <Link href="#about" className="hover:text-white transition-colors">
                  Tentang Saya
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="text-neutral-300 hover:text-white transition-colors">
                  Galeri Portofolio
                </Link>
              </li>
              <li>
                <Link href="#experience" className="hover:text-white transition-colors">
                  Pengalaman &amp; Kualifikasi
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-white text-xs font-mono font-bold uppercase tracking-widest mb-3">
              Kontak
            </h3>
            <ul className="space-y-2 text-xs font-mono">
              <li className="flex items-center gap-2">
                <Mail size={13} className="text-neutral-400" />
                <a
                  href="mailto:Amiruddindumi.tomaballo@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  Amiruddindumi.tomaballo@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={13} className="text-neutral-400" />
                <a
                  href="tel:+6282350156935"
                  className="hover:text-white transition-colors"
                >
                  +62 823-5015-6935
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={13} className="text-neutral-400" />
                <span>Morowali, Sulawesi Tengah, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 mt-10 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-neutral-500">
          <p>
            &copy; {currentYear} Amiruddin D. All rights reserved.
          </p>          
        </div>
      </div>
    </footer>
  );
}
