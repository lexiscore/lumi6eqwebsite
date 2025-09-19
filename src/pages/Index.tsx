
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import SectionContinuous from '@/components/SectionContinuous';
import SectionInsights from '@/components/SectionInsights';
import SectionProof from '@/components/SectionProof';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-rebuttl-lightBg">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <SectionContinuous />
        <SectionInsights />
        <SectionProof />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
