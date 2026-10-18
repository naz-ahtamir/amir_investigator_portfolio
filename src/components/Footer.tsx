import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <Link href="#" className="text-lg font-bold">
            AMIR<span className="text-[#F6AD60]">.SAFETY</span>
          </Link>

          {/* Quick Links */}
          <nav className="flex items-center gap-6 text-sm text-gray-400">
            <Link href="#about" className="hover:text-[#F6AD60] transition-colors">
              About
            </Link>
            <Link href="#expertise" className="hover:text-[#F6AD60] transition-colors">
              Expertise
            </Link>
            <Link href="#contact" className="hover:text-[#F6AD60] transition-colors">
              Contact
            </Link>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-gray-500">
            © {currentYear} Amir Safety. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}