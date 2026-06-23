import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { Monitor, LayoutGrid as Layout, ShoppingBag, Layers, Zap, BarChart3, ArrowRight, Users, RefreshCw, FileCheck } from 'lucide-react';

const capabilities = [
  { icon: <Monitor size={24} className="text-secondary-600" />, title: 'Web Experience', description: 'High-performance web platforms engineered for engagement, speed, and conversion.' },
  { icon: <Layout size={24} className="text-secondary-600" />, title: 'UX & Product Design', description: 'User-centered design systems that make complex interactions feel effortless.' },
  { icon: <ShoppingBag size={24} className="text-secondary-600" />, title: 'Ecommerce Development', description: 'Commerce platforms built to sell: checkout flows to inventory systems.' },
  { icon: <Layers size={24} className="text-secondary-600" />, title: 'Omnichannel Systems', description: 'Seamless experiences across web, mobile, retail, and every touchpoint in between.' },
  { icon: <Zap size={24} className="text-secondary-600" />, title: 'Motion Design', description: 'Interface animations and micro-interactions that elevate digital experiences.' },
  { icon: <BarChart3 size={24} className="text-secondary-600" />, title: 'Conversion Design', description: 'Data-driven design optimization that turns visitors into customers.' },
];

const processSteps = [
  {
    phase: '01',
    title: 'Discovery & Research',
    description: 'We audit your current digital presence, analyze user behavior, and map the competitive landscape to define the strategic foundation.',
    deliverables: ['UX audit', 'User research & interviews', 'Competitive analysis', 'Technical requirements'],
  },
  {
    phase: '02',
    title: 'Experience Design',
    description: 'We design the complete user experience including information architecture, wireframes, prototypes, and visual design, all built for conversion, not just aesthetics.',
    deliverables: ['Information architecture', 'Wireframes & user flows', 'Interactive prototypes', 'Visual design system'],
  },
  {
    phase: '03',
    title: 'Development & Integration',
    description: 'We build with modern frameworks, optimized for performance, accessibility, and scale. Every integration is engineered for reliability.',
    deliverables: ['Frontend development', 'Backend & API integration', 'CMS configuration', 'Third-party integrations'],
  },
  {
    phase: '04',
    title: 'Launch & Optimization',
    description: 'We deploy, monitor, and optimize. Post-launch CRO ensures your platform improves continuously based on real user data.',
    deliverables: ['Performance monitoring', 'A/B testing program', 'Conversion optimization', 'Ongoing iteration'],
  },
];

const engagementModels = [
  {
    icon: <Monitor size={24} className="text-secondary-600" />,
    title: 'Full Platform Build',
    description: 'Complete design and development from strategy through launch. Ideal for new platforms, major redesigns, or ecommerce builds.',
    bestFor: 'New platforms, redesigns, ecommerce launches',
  },
  {
    icon: <RefreshCw size={24} className="text-secondary-600" />,
    title: 'Experience Optimization',
    description: 'CRO-focused engagement to improve your existing platform. We identify friction, design solutions, and measure impact.',
    bestFor: 'Existing platforms with conversion issues',
  },
  {
    icon: <FileCheck size={24} className="text-secondary-600" />,
    title: 'Design System Build',
    description: 'Component library and design system for your development team. Ensures consistency and accelerates future development.',
    bestFor: 'Teams needing scalable design infrastructure',
  },
  {
    icon: <Users size={24} className="text-secondary-600" />,
    title: 'Development Retainer',
    description: 'Ongoing development capacity for continuous improvement, new features, and platform evolution.',
    bestFor: 'Brands with ongoing digital development needs',
  },
];


const DigitalCommercePage = () => {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-navy-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2"
            alt="Digital design"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-navy-900/40"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <p className="text-secondary-400 font-semibold text-sm uppercase tracking-widest mb-6">Digital Practice</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white leading-tight">
              Digital &<br />Commerce
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              We design and build digital experiences that convert, web platforms, commerce systems, and product interfaces engineered for seamless interaction and measurable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button to="/contact" variant="accent" size="lg">Build Your Platform</Button>
              <Button to="#engagement" variant="outline" size="lg" className="text-white border-white/20 hover:bg-white/5">Engagement Models</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Core Capabilities"
            subtitle="Every element of your digital presence, designed with intent."
            center={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {capabilities.map((cap, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="bg-secondary-50 p-4 rounded-xl inline-flex mb-5">{cap.icon}</div>
                <h3 className="text-lg font-bold mb-3">{cap.title}</h3>
                <p className="text-gray-600 leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="How We Build Platforms"
            subtitle="A structured process that ensures every digital experience is strategically grounded and built to perform."
            center={true}
          />

          <div className="mt-12 space-y-6">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-8 md:p-10 border border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl font-bold text-secondary-600/30 mr-4">{step.phase}</span>
                      <h3 className="text-xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Deliverables</p>
                    <ul className="space-y-2">
                      {step.deliverables.map((d, i) => (
                        <li key={i} className="flex items-start">
                          <div className="bg-success-100 rounded-full p-1 mt-1 mr-2 shrink-0">
                            <svg className="w-3 h-3 text-success-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-gray-700 text-sm">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section id="engagement" className="section bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Engagement Models"
            subtitle="Flexible structures designed to match your digital needs and growth stage."
            center={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {engagementModels.map((model, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="bg-secondary-50 p-3 rounded-xl inline-flex mb-4">{model.icon}</div>
                <h3 className="text-base font-bold mb-2">{model.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{model.description}</p>
                <div className="bg-white rounded-lg p-3">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Best For</p>
                  <p className="text-xs text-gray-700">{model.bestFor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design That Performs */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Design That Performs</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Beautiful interfaces that do not convert are failed designs. We build digital experiences where aesthetics and performance are inseparable; every interaction is intentional, every pixel serves a purpose.
              </p>
              <ul className="space-y-4 mb-8">
                {['Research-driven UX architecture', 'Performance-optimized development', 'Conversion-focused design decisions', 'Scalable component systems'].map((item, i) => (
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
              <div className="absolute inset-0 bg-secondary-500/20 rounded-2xl transform translate-x-4 translate-y-4"></div>
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Digital Experience"
                className="rounded-2xl relative z-10 w-full"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Results */}
      <section className="section bg-navy-900 text-white">
        <div className="container-custom">
          <SectionHeading
            title="Impact by Design"
            subtitle="Our digital platforms are built to perform, and the numbers prove it."
            center={true}
            lightMode={true}
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-secondary-400 mb-2">180%</div>
              <div className="text-gray-300 font-medium">Avg. Conversion Lift</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-secondary-400 mb-2">99.9%</div>
              <div className="text-gray-300 font-medium">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-secondary-400 mb-2">2.1s</div>
              <div className="text-gray-300 font-medium">Avg. Load Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-secondary-400 mb-2">40+</div>
              <div className="text-gray-300 font-medium">Platforms Launched</div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section className="section bg-navy-900 text-white">
        <div className="container-custom">
          <SectionHeading
            title="Selected Work"
            subtitle="High-performance digital platforms engineered for growth."
            center={true}
            lightMode={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="group relative overflow-hidden rounded-xl">
              <img
                src="https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Web Experience"
                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 to-transparent flex items-end p-8">
                <div>
                  <p className="text-secondary-400 text-sm font-semibold uppercase tracking-wider mb-2">Web Experience</p>
                  <h3 className="text-xl font-bold text-white">Institutional Web Platform</h3>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl">
              <img
                src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Ecommerce Platform"
                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 to-transparent flex items-end p-8">
                <div>
                  <p className="text-secondary-400 text-sm font-semibold uppercase tracking-wider mb-2">Ecommerce Platform</p>
                  <h3 className="text-xl font-bold text-white">Multi-Market Ecommerce Experience</h3>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl">
              <img
                src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="UX & Product Design"
                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 to-transparent flex items-end p-8">
                <div>
                  <p className="text-secondary-400 text-sm font-semibold uppercase tracking-wider mb-2">UX & Product Design</p>
                  <h3 className="text-xl font-bold text-white">Design System & Experience Architecture</h3>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl">
              <img
                src="https://images.pexels.com/photos/5076596/pexels-photo-5076596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Omnichannel Experience"
                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 to-transparent flex items-end p-8">
                <div>
                  <p className="text-secondary-400 text-sm font-semibold uppercase tracking-wider mb-2">Omnichannel Experience</p>
                  <h3 className="text-xl font-bold text-white">Retail Experience System</h3>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl">
              <img
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Commerce Innovation"
                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 to-transparent flex items-end p-8">
                <div>
                  <p className="text-secondary-400 text-sm font-semibold uppercase tracking-wider mb-2">Commerce Innovation</p>
                  <h3 className="text-xl font-bold text-white">DTC Subscription Commerce Platform</h3>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl">
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Digital Platform"
                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 to-transparent flex items-end p-8">
                <div>
                  <p className="text-secondary-400 text-sm font-semibold uppercase tracking-wider mb-2">Digital Platform</p>
                  <h3 className="text-xl font-bold text-white">Corporate Web Platform</h3>
                </div>
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
              Ready to Build a Platform That Performs?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Great digital experiences do not happen by accident. They are engineered.
            </p>
            <Button to="/contact" variant="accent" size="lg" className="text-lg px-12 py-6 font-bold">
              Start Your Platform
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalCommercePage;
