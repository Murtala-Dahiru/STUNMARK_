import React from 'react';
import Button from '../../ui/Button';
import { useScrollReveal } from '../../utils/useScrollReveal';

const CtaSection = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section className="py-24 bg-gradient-to-r from-navy-900 via-black to-navy-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-primary-500 rounded-full animate-pulse"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              opacity: Math.random() * 0.5 + 0.1,
              animationDelay: Math.random() * 3 + 's',
            }}
          ></div>
        ))}
      </div>

      <div className="container-custom relative z-10">
        <div
          ref={ref}
          className={`max-w-4xl mx-auto text-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transition: 'opacity 900ms, transform 900ms' }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight">
            Ready to Build Something Remarkable?
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
            Tell us where you are. We will show you where your brand could be.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button
              to="/contact"
              variant="accent"
              size="lg"
              className="text-lg px-12 py-6 font-bold"
            >
              Start a Project
            </Button>
            <Button
              to="/services"
              variant="outline"
              size="lg"
              className="text-white border-white hover:bg-white/10 text-lg px-12 py-6 font-bold"
            >
              Explore Capabilities
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
