import React from 'react';
import { useScrollReveal } from '../../utils/useScrollReveal';

const principles = [
  {
    title: "Vision Over Trend",
    line: "We build for cultural weight, not fleeting relevance."
  },
  {
    title: "Story as Strategy",
    line: "Narrative is the architecture of perception."
  },
  {
    title: "Precision in Execution",
    line: "Every pixel, every frame, every word is intentional."
  },
  {
    title: "Impact Over Output",
    line: "We measure by the difference we make, not the volume we produce."
  }
];

const PrincipleCard = ({ principle, index }: { principle: typeof principles[0]; index: number }) => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <div
      ref={ref}
      className={`text-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ transition: 'opacity 700ms, transform 700ms', transitionDelay: `${index * 100}ms` }}
    >
      <div className="text-primary-500/30 text-5xl font-bold mb-4">{String(index + 1).padStart(2, '0')}</div>
      <h3 className="text-xl font-bold text-navy-900 mb-3">{principle.title}</h3>
      <p className="text-gray-500 leading-relaxed">{principle.line}</p>
    </div>
  );
};

const PrinciplesSection = () => {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <p className="text-center text-primary-600 font-semibold text-xs uppercase tracking-[0.3em] mb-4">What We Believe</p>
        <h2 className="text-3xl md:text-4xl font-bold text-navy-900 text-center mb-16">Guiding Principles</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-5xl mx-auto">
          {principles.map((principle, index) => (
            <PrincipleCard key={index} principle={principle} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrinciplesSection;
