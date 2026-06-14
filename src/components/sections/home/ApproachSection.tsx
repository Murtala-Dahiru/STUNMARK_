import React from 'react';
import SectionHeading from '../../ui/SectionHeading';
import { Search, Lightbulb, CheckCircle, RefreshCw } from 'lucide-react';
import Button from '../../ui/Button';
import { useScrollReveal } from '../../utils/useScrollReveal';

const steps = [
  {
    icon: <Search size={28} className="text-white" />,
    title: "Discover",
    description: "We immerse ourselves in your brand, audience, and market to uncover the strategic opportunities that will define your creative direction."
  },
  {
    icon: <Lightbulb size={28} className="text-white" />,
    title: "Create",
    description: "We design brand systems, craft visual narratives, and build creative infrastructure that communicates with precision and power."
  },
  {
    icon: <CheckCircle size={28} className="text-white" />,
    title: "Deliver",
    description: "We produce with cinematic quality, launch with strategic intent, and ensure every touchpoint reflects the standard your brand demands."
  },
  {
    icon: <RefreshCw size={28} className="text-white" />,
    title: "Evolve",
    description: "We measure impact, refine creative, and scale what works, ensuring your brand stays relevant, resonant, and ahead of the curve."
  },
];

const StepCard = ({ step, index }: { step: typeof steps[0]; index: number }) => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <div
      ref={ref}
      className={`relative group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transition: 'opacity 800ms, transform 800ms', transitionDelay: `${index * 150}ms` }}
    >
      {index < steps.length - 1 && (
        <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-primary-500/20 z-0"></div>
      )}

      <div className="relative bg-navy-800/70 backdrop-blur-sm border border-white/10 p-8 rounded-xl hover:border-primary-500/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-900/20">
        <div className="absolute -top-4 -left-4 bg-primary-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg shadow-primary-500/30">
          {index + 1}
        </div>

        <div className="bg-primary-500 p-4 rounded-xl inline-flex mb-6 shadow-lg shadow-primary-500/20">
          {step.icon}
        </div>

        <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>
        <p className="text-gray-300 leading-relaxed">{step.description}</p>
      </div>
    </div>
  );
};

const ApproachSection = () => {
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollReveal(0.1);

  return (
    <section className="section bg-navy-900 text-white">
      <div className="container-custom">
        <SectionHeading
          title="How We Work"
          subtitle="Four phases. One creative system. Built to compound results over time."
          center={true}
          lightMode={true}
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>

        <div
          ref={ctaRef}
          className={`mt-16 text-center ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transition: 'opacity 600ms, transform 600ms', transitionDelay: '600ms' }}
        >
          <Button to="/approach" variant="accent" size="lg" withArrow>
            See Our Process
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
