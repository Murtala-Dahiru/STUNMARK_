import React from 'react';
import { Film, Palette, Monitor, FileText, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../../ui/SectionHeading';
import { useScrollReveal } from '../../utils/useScrollReveal';

const practices = [
  {
    icon: <Film size={32} />,
    title: 'Cinematic Production',
    subtitle: 'Stories that move markets.',
    description: 'Brand films, documentaries, and cinematic campaigns that transform narratives into cultural moments.',
    to: '/services/cinematic-production',
    iconBg: 'bg-primary-100',
    iconBgHover: 'bg-primary-600',
    iconColor: 'text-primary-600',
    items: ['Brand Films & Commercial Campaigns', 'Documentary & Impact Films', 'Product Launch Films', 'Tourism & Destination Storytelling'],
  },
  {
    icon: <Palette size={32} />,
    title: 'Brand & Identity',
    subtitle: 'Visual operating systems.',
    description: 'Scalable identity infrastructure that governs how brands look, feel, and behave across every touchpoint.',
    to: '/services/brand-identity',
    iconBg: 'bg-accent-100',
    iconBgHover: 'bg-accent-600',
    iconColor: 'text-accent-600',
    items: ['Brand Identity & Logo Architecture', 'Full Design System Development', 'Campaign Art Direction', 'Global Brand Guidelines'],
  },
  {
    icon: <Monitor size={32} />,
    title: 'Digital & Commerce',
    subtitle: 'Experiences that convert.',
    description: 'Web platforms, UX design, and commerce systems engineered for seamless interaction and measurable growth.',
    to: '/services/digital-commerce',
    iconBg: 'bg-secondary-100',
    iconBgHover: 'bg-secondary-600',
    iconColor: 'text-secondary-600',
    items: ['Web Experience', 'UX & Product Design', 'Ecommerce Development', 'Conversion Design'],
  },
  {
    icon: <FileText size={32} />,
    title: 'Content Ecosystem',
    subtitle: 'Always-on cultural value.',
    description: 'Content ecosystems that grow audiences, own platforms, and compound cultural value over time.',
    to: '/services/content-ecosystem',
    iconBg: 'bg-success-100',
    iconBgHover: 'bg-success-600',
    iconColor: 'text-success-600',
    items: ['Content Strategy & Architecture', 'Social Media Ecosystem', 'Editorial Systems', 'Podcast & Audio Production'],
  },
  {
    icon: <TrendingUp size={32} />,
    title: 'Growth & Performance',
    subtitle: 'Creativity meets conversion.',
    description: 'Marketing systems that connect creative excellence with measurable commercial results at scale.',
    to: '/services/growth-performance',
    iconBg: 'bg-warning-100',
    iconBgHover: 'bg-warning-600',
    iconColor: 'text-warning-600',
    items: ['Integrated Marketing Strategy', 'Paid Media & Performance Creative', 'Growth Marketing Systems', 'Analytics & Attribution'],
  },
];

const PracticeCard = ({ practice, index }: { practice: typeof practices[0]; index: number }) => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <div
      ref={ref}
      className={`group bg-gray-50 rounded-2xl p-10 transition-all duration-500 hover:bg-navy-900 hover:text-white hover:shadow-2xl hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ transitionProperty: 'opacity, transform, background-color, color, box-shadow', transitionDuration: '700ms', transitionDelay: `${index * 100}ms` }}
    >
      <div className={`${practice.iconBg} group-hover:${practice.iconBgHover} p-4 rounded-xl inline-flex mb-6 transition-all duration-500`}>
        <span className={`${practice.iconColor} group-hover:text-white transition-all duration-500`}>{practice.icon}</span>
      </div>
      <p className="text-sm font-semibold uppercase tracking-wider text-gray-500 group-hover:text-primary-400 mb-2 transition-colors">{practice.subtitle}</p>
      <h3 className="text-2xl font-bold mb-4 group-hover:text-white">{practice.title}</h3>
      <p className="text-gray-600 group-hover:text-gray-300 mb-8 text-lg leading-relaxed">
        {practice.description}
      </p>

      <div className="space-y-4 mb-8">
        {practice.items.map((item, i) => (
          <div key={i} className="flex items-start">
            <div className="bg-success-100 group-hover:bg-success-600 rounded-full p-1 mt-1 mr-3 transition-all duration-500 shrink-0">
              <svg className="w-3 h-3 text-success-600 group-hover:text-white transition-all duration-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="group-hover:text-gray-300">{item}</span>
          </div>
        ))}
      </div>

      <Link
        to={practice.to}
        className="inline-flex items-center font-semibold text-primary-600 group-hover:text-primary-400 transition-colors text-lg"
      >
        Learn More
        <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <SectionHeading
          title="Core Capabilities"
          subtitle="Strategy, storytelling, and growth,unified. Five practices working as one integrated system to compound results."
          center={true}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
          {practices.slice(0, 3).map((practice, index) => (
            <PracticeCard key={practice.title} practice={practice} index={index} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
          {practices.slice(3).map((practice, index) => (
            <PracticeCard key={practice.title} practice={practice} index={index + 3} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
