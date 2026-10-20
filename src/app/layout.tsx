import type { Metadata } from 'next';
import { Merriweather_Sans } from 'next/font/google';
import './globals.css';

const merriweatherSans = Merriweather_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-merriweather-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Amiruddin D. | Ahli K3 Umum & Spesialis Investigasi Kecelakaan Kerja',
  description:
    'Portofolio profesional Amiruddin D. - Praktisi K3, Spesialis Investigasi Insiden, Root Cause Analysis (RCA), dan Pelatihan K3 Industri terverifikasi Kemnaker RI & BNSP.',
  keywords: [
    'Amiruddin D',
    'Ahli K3 Umum',
    'Investigasi Kecelakaan Kerja',
    'Root Cause Analysis',
    'Pelatihan K3',
    'HSE Specialist Indonesia',
    'SMK3 PP 50 2012',
    'HIRADC',
    'Safety Officer Indonesia',
  ],
  openGraph: {
    title: 'Amiruddin D. | Ahli K3 Umum & Spesialis Investigasi Kecelakaan Kerja',
    description:
      'Portofolio profesional Amiruddin D. - Praktisi K3, Spesialis Investigasi Insiden, Root Cause Analysis (RCA), dan Pelatihan K3 Industri.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${merriweatherSans.variable} antialiased selection:bg-amber-400 selection:text-gray-950`}>
        {children}
      </body>
    </html>
  );
}