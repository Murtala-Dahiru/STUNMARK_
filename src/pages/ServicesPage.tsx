import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { Film, Palette, Monitor, FileText, TrendingUp, ArrowRight } from 'lucide-react';

const practices = [
  {
    icon: <Film size={32} />,
    title: 'Cinematic Production',
    subtitle: 'Stories that move markets.',
    description: 'Brand films, documentaries, and cinematic campaigns that transform narratives into cultural moments. End-to-end production infrastructure from concept to distribution.',
    to: '/services/cinematic-production',
    color: 'bg-primary-600',
    lightColor: 'bg-primary-50',
    textColor: 'text-primary-600',
    capabilities: ['Brand Films', 'Documentaries', 'Product Launches', 'Tourism Storytelling', 'Cultural Heritage'],
  },
  {
    icon: <Palette size={32} />,
    title: 'Brand & Identity',
    subtitle: 'Visual operating systems.',
    description: 'Scalable identity infrastructure that governs how brands look, feel, and behave across every touchpoint. Languages, not just logos.',
    to: '/services/brand-identity',
    color: 'bg-accent-600',
    lightColor: 'bg-accent-50',
    textColor: 'text-accent-600',
    capabilities: ['Brand Identity', 'Design Systems', 'Art Direction', 'Packaging', 'Global Guidelines'],
  },
  {
    icon: <Monitor size={32} />,
    title: 'Digital & Commerce',
    subtitle: 'Experiences that convert.',
    description: 'Web platforms, UX design, and commerce systems engineered for seamless interaction and measurable growth. Beautiful and functional.',
    to: '/services/digital-commerce',
    color: 'bg-secondary-600',
    lightColor: 'bg-secondary-50',
    textColor: 'text-secondary-600',
    capabilities: ['Web Experience', 'UX Design', 'Ecommerce', 'Omnichannel', 'Conversion Design'],
  },
  {
    icon: <FileText size={32} />,
    title: 'Content Ecosystem',
    subtitle: 'Always-on cultural value.',
    description: 'Content ecosystems that grow audiences, own platforms, and compound cultural value over time. Living systems, not campaigns.',
    to: '/services/content-ecosystem',
    color: 'bg-success-600',
    lightColor: 'bg-success-50',
    textColor: 'text-success-600',
    capabilities: ['Content Strategy', 'Social Ecosystems', 'Editorial Systems', 'Podcast Production', 'Platform Growth'],
  },
  {
    icon: <TrendingUp size={32} />,
    title: 'Growth & Performance',
    subtitle: 'Creativity meets conversion.',
    description: 'Marketing systems that connect creative excellence with measurable commercial results at scale. Engineered growth, not hope.',
    to: '/services/growth-performance',
    color: 'bg-warning-600',
    lightColor: 'bg-warning-50',
    textColor: 'text-warning-600',
    capabilities: ['Marketing Strategy', 'Paid Media', 'Performance Creative', 'CRO', 'Growth Systems'],
  },
];

const howWeIntegrate = [
  {
    title: 'Shared Strategy',
    description: 'Every practice operates from a unified brand strategy. No silos. No conflicting directions. One brand, one system.',
  },
  {
    title: 'Interconnected Execution',
    description: 'Cinematic feeds content. Brand governs design. Digital hosts experience. Growth amplifies reach. Each practice strengthens the others.',
  },
  {
    title: 'Compounding Results',
    description: 'When brand, story, experience, content, and growth work together, results multiply rather than add. This is the integrated advantage.',
  },
];

const ServicesPage = () => {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-navy-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3182822/pexels-photo-3182822.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2"
            alt="Creative services"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-navy-900/40"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <p className="text-primary-400 font-semibold text-sm uppercase tracking-widest mb-6">What We Do</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white leading-tight">
              Creative Infrastructure<br />for Modern Brands.
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              We build brands, craft stories, design experiences, create content, and engineer growth as one integrated system designed to compound results.
            </p>
          </div>
        </div>
      </section>

      {/* Practices */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Our Creative Practices"
            subtitle="Each practice is a complete capability. Together, they form an interconnected creative ecosystem."
            center={true}
          />

          <div className="mt-16 space-y-8">
            {practices.map((practice, index) => (
              <Link
                key={index}
                to={practice.to}
                className="group block bg-white border border-gray-100 rounded-2xl p-8 md:p-12 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12">
                  <div className={`${practice.color} p-5 rounded-2xl text-white shrink-0`}>
                    {practice.icon}
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div className="flex-grow">
                        <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-primary-600 transition-colors">
                          {practice.title}
                        </h3>
                        <p className={`${practice.textColor} font-semibold text-sm uppercase tracking-wider mb-3`}>
                          {practice.subtitle}
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed max-w-xl mb-4">
                          {practice.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {practice.capabilities.map((cap, i) => (
                            <span key={i} className={`${practice.lightColor} ${practice.textColor} text-xs px-3 py-1.5 rounded-full font-medium`}>
                              {cap}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="shrink-0">
                        <span className="inline-flex items-center text-primary-600 font-semibold text-lg group-hover:translate-x-1 transition-transform">
                          Explore <ArrowRight size={20} className="ml-2" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How We Integrate */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="How We Integrate"
            subtitle="Interconnected practices working as one system, not separate vendors working in parallel."
            center={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {howWeIntegrate.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-8 border border-gray-100">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-6">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">How You Can Work With Us</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Every engagement is structured to match your needs: from focused practice engagement to a full creative system build. We are flexible in structure, uncompromising in quality.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Focused Practice: deep engagement within a single creative discipline',
                  'Multi-Practice Build: two or more practices working in concert',
                  'Full Creative System: all practices fully integrated as one ecosystem',
                  'Strategic Consultation: brand audit, growth audit, or creative review',
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="bg-success-100 rounded-full p-1 mt-1 mr-3 shrink-0">
                      <svg className="w-3 h-3 text-success-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Button to="/contact" variant="primary" size="lg" withArrow>Discuss Your Project</Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary-500/10 rounded-2xl transform translate-x-4 translate-y-4"></div>
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Creative team"
                className="rounded-2xl relative z-10 w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Integrated by Design</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              Most creative companies sell capabilities in isolation. We build creative systems where brand, story, experience, content, and growth reinforce each other. The result is a compounding advantage, not a campaign.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-navy-900 mb-2">5</div>
                <div className="text-gray-600 font-medium">Core Practices</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-navy-900 mb-2">1</div>
                <div className="text-gray-600 font-medium">Unified Creative Ecosystem</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-navy-900 mb-2">0</div>
                <div className="text-gray-600 font-medium">Siloed Deliverables</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-navy-900 to-black text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Ready to Build Something Remarkable?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Tell us where you are. We will show you where you could be.
            </p>
            <Button
              to="/contact"
              variant="accent"
              size="lg"
              className="text-lg px-12 py-6 font-bold"
            >
              Start a Project
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
