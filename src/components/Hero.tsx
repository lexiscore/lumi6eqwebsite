
import React, { memo, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import Logo from '@/components/ui/logo';

const Hero: React.FC = memo(() => {
  const handleScrollToFeatures = useCallback(() => {
    document.getElementById('features')?.scrollIntoView({
      behavior: 'smooth'
    });
  }, []);
  
  const handleScrollToExplainer = useCallback(() => {
    document.getElementById('explainer')?.scrollIntoView({
      behavior: 'smooth'
    });
  }, []);
  
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <Logo size="lg" className="mb-8" />
          
          <div className="relative">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight md:leading-tight bg-gradient-to-r from-rebuttl-blue via-rebuttl-purple to-rebuttl-orange bg-clip-text text-transparent max-w-4xl">
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-rebuttl-purple to-rebuttl-blue bg-clip-text text-transparent">Future of work runs on </span>
                <span className="bg-gradient-to-r from-rebuttl-orange to-rebuttl-red bg-clip-text text-transparent">Emotional Intelligence</span>
                {/* Simplified underline - removed complex SVG */}
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-rebuttl-blue via-rebuttl-purple to-rebuttl-orange rounded-full"></div>
              </span>
            </h1>
          </div>
          
          <p className="mt-8 text-xl md:text-2xl text-gray-600 max-w-3xl">
            Lumi6 helps teams turn emotional intelligence into a superpower because the best workplaces run on empathy, not just algorithms
          </p>
          
          <div className="mt-10 flex flex-col md:flex-row gap-4">
            <Button 
              className="bg-rebuttl-blue hover:bg-rebuttl-blue/90 text-white h-12 px-8 text-lg"
              onClick={handleScrollToFeatures}
            >
              Try Lumi6 Free
            </Button>
            <Button 
              variant="outline"
              className="h-12 px-8 text-lg border-rebuttl-blue text-rebuttl-blue hover:bg-rebuttl-blue/10"
              onClick={handleScrollToExplainer}
            >
              See It in Action →
            </Button>
          </div>
          
          <button onClick={handleScrollToFeatures} className="mt-20 group" aria-label="Scroll to features">
            <ArrowDown className="w-10 h-10 text-rebuttl-blue group-hover:text-rebuttl-purple transition-colors duration-300" />
          </button>
        </div>
      </div>
      
      {/* Simplified decorative elements - reduced blur and complexity */}
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-rebuttl-purple/10 rounded-full blur-2xl -z-10"></div>
      <div className="absolute top-1/4 -right-24 w-80 h-80 bg-rebuttl-blue/10 rounded-full blur-2xl -z-10"></div>
      <div className="absolute bottom-10 left-1/4 w-60 h-60 bg-rebuttl-orange/10 rounded-full blur-2xl -z-10"></div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
