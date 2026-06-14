import React from 'react';
import SectionHeading from '../../ui/SectionHeading';
import { Layers, Eye, BarChart3, Zap } from 'lucide-react';
import { useScrollReveal } from '../../utils/useScrollReveal';

const benefits = [
  {
    icon: <Layers size={40} className="text-accent-600" />,
    title: "Integration",
    metric: "Unified System",
    description: "Brand, story, experience, content, and growth operating as one interconnected system, not separate vendors."
  },
  {
    icon: <Eye size={40} className="text-accent-600" />,
    title: "Clarity",
    metric: "Sharp Positioning",
    description: "We strip away the noise and build brands that communicate with unmistakable clarity and cultural weight."
  },
  {
    icon: <BarChart3 size={40} className="text-accent-600" />,
    title: "Performance",
    metric: "Measurable Impact",
    description: "Creative work that does not perform is failed creative. We build for results, not decoration."
  },
  {
    icon: <Zap size={40} className="text-accent-600" />,
    title: "Velocity",
    metric: "Faster to Market",
    description: "We move with urgency. Weeks, not months. Days, not quarters. Your brand cannot afford to wait."
  }
];

const BenefitCard = ({ benefit, index }: { benefit: typeof benefits[0]; index: number }) => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <div
      ref={ref}
      className={`text-center group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transition: 'opacity 700ms, transform 700ms', transitionDelay: `${index * 120}ms` }}
    >
      <div className="bg-accent-50 p-6 rounded-2xl inline-flex mb-6 group-hover:bg-accent-100 transition-all duration-300">
        {benefit.icon}
      </div>
      <div className="text-3xl font-bold text-navy-900 mb-2">{benefit.metric}</div>
      <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
      <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
    </div>
  );
};

const BenefitsSection = () => {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <SectionHeading
          title="The Stunmark Advantage"
          subtitle="Where strategy, culture, and execution converge. The creative infrastructure modern brands require."
          center={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} benefit={benefit} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
