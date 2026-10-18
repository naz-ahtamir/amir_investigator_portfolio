import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Safety Professional | Accident Investigation | K3 Trainer',
  description: 'Professional HSE portfolio specializing in workplace accident investigation, incident prevention, and K3 safety training.',
  keywords: ['safety professional', 'accident investigation', 'K3 training', 'occupational health and safety', 'workplace safety', 'risk assessment'],
  openGraph: {
    title: 'Safety Professional | Accident Investigation | K3 Trainer',
    description: 'Professional HSE portfolio specializing in workplace accident investigation, incident prevention, and K3 safety training.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${montserrat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}