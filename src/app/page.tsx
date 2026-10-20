import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
// import { CoreExpertise } from '@/components/CoreExpertise';
import { ProfessionalGallery } from '@/components/ProfessionalGallery';
// import { TrainingPortfolio } from '@/components/TrainingPortfolio';
import { Experience } from '@/components/Experience';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      {/* <CoreExpertise /> */}
      <ProfessionalGallery />
      {/* <TrainingPortfolio /> */}
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}