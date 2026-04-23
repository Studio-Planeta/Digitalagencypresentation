import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { Hero } from '../components/Hero';
import { StatsStrip } from '../components/StatsStrip';
import { ServicesSection } from '../components/ServicesSection';
import { AboutSection } from '../components/AboutSection';
import { PortfolioSection } from '../components/PortfolioSection';
import { ProcessSection } from '../components/ProcessSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { ContactSection } from '../components/ContactSection';

export function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 120);
    }
  }, [location.hash]);

  return (
    <>
      <Hero />
      <StatsStrip />
      <ServicesSection />
      <AboutSection />
      <PortfolioSection />
      <ProcessSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
