import React from 'react';
import HeroSection from '../components/sections/home/HeroSection';
import ServicesSection from '../components/sections/home/ServicesSection';
import PhilosophySection from '../components/sections/home/PhilosophySection';
import ApproachSection from '../components/sections/home/ApproachSection';
import PrinciplesSection from '../components/sections/home/PrinciplesSection';
import TestimonialsSection from '../components/sections/home/TestimonialsSection';
import CtaSection from '../components/sections/home/CtaSection';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ApproachSection />
      <PrinciplesSection />
      <PhilosophySection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
};

export default HomePage;
