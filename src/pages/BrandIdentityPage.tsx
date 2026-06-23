import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import WhoWeServe from '../components/ui/WhoWeServe';
import { Palette, PenTool, Package, BookOpen, RefreshCw, LayoutGrid as Layout, Globe, Archive, ArrowRight, Layers, Users, FileCheck, Repeat } from 'lucide-react';

const capabilities = [
  { icon: <Palette size={24} className="text-accent-600" />, title: 'Brand Identity & Logo Architecture', description: 'Strategic identity systems built to scale across markets and mediums.' },
  { icon: <Layout size={24} className="text-accent-600" />, title: 'Full Design System Development', description: 'Component-driven design languages that ensure consistency at any scale.' },
  { icon: <PenTool size={24} className="text-accent-600" />, title: 'Campaign Art Direction', description: 'Visual direction that makes every campaign unmistakably yours.' },
  { icon: <Package size={24} className="text-accent-600" />, title: 'Packaging & Product Visualization', description: 'Physical and digital packaging that elevates product perception.' },
  { icon: <BookOpen size={24} className="text-accent-600" />, title: 'Editorial & Publication Design', description: 'Print and digital publications designed with editorial precision.' },
  { icon: <RefreshCw size={24} className="text-accent-600" />, title: 'Brand Transformation & Refresh', description: 'Strategic evolution of existing brands for new markets and audiences.' },
  { icon: <Globe size={24} className="text-accent-600" />, title: 'Global Brand Guideline Systems', description: 'Comprehensive systems that protect brand integrity worldwide.' },
  { icon: <Archive size={24} className="text-accent-600" />, title: 'Digital Collateral & Asset Libraries', description: 'Production-ready asset systems that empower teams to execute consistently.' },
];

const markets = ['Luxury', 'Corporations', 'Technology', 'Startups', 'Financial Institutions', 'Retail & Fashion', 'Media', 'Education', 'Hospitality', 'Consumer Brands', 'Global Organizations'];

const processSteps = [
  {
    phase: '01',
    title: 'Brand Audit & Strategy',
    description: 'We analyze your current brand position, competitive landscape, and audience perception to define the strategic foundation for your identity system.',
    deliverables: ['Brand audit report', 'Competitive analysis', 'Positioning framework', 'Audience personas'],
  },
  {
    phase: '02',
    title: 'Identity Design',
    description: 'We design the core visual identity,logo, typography, color, and graphic language,built on strategic intent, not aesthetic preference.',
    deliverables: ['Logo system (primary, secondary, variants)', 'Typography system', 'Color architecture', 'Graphic language'],
  },
  {
    phase: '03',
    title: 'System Development',
    description: 'We extend the identity into a complete design system,components, templates, and rules that enable consistent execution across every touchpoint.',
    deliverables: ['Component library', 'Template system', 'Digital asset library', 'Application examples'],
  },
  {
    phase: '04',
    title: 'Guidelines & Launch',
    description: 'We codify everything into a comprehensive brand guideline system and support your team through launch with training and rollout assets.',
    deliverables: ['Brand guidelines (digital & print)', 'Team training sessions', 'Launch asset package', 'Ongoing support plan'],
  },
];

const engagementModels = [
  {
    icon: <Layers size={24} className="text-accent-600" />,
    title: 'Full Brand Build',
    description: 'Complete identity system from strategy through guidelines. Ideal for new brands, rebrands, or brands entering new markets.',
    bestFor: 'New brands, rebrands, market expansion',
  },
  {
    icon: <RefreshCw size={24} className="text-accent-600" />,
    title: 'Brand Evolution',
    description: 'Strategic refresh of existing identity elements while preserving brand equity. Evolution, not revolution.',
    bestFor: 'Established brands needing modernization',
  },
  {
    icon: <FileCheck size={24} className="text-accent-600" />,
    title: 'Design System Only',
    description: 'Component library and template system built from your existing identity. For brands that need executional consistency, not strategic change.',
    bestFor: 'Brands with strong identity but poor consistency',
  },
  {
    icon: <Repeat size={24} className="text-accent-600" />,
    title: 'Brand Retainer',
    description: 'Ongoing design capacity for brand execution,campaign assets, collateral, and design support on a monthly basis.',
    bestFor: 'Brands with ongoing design production needs',
  },
];

const BrandIdentityPage = () => {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-navy-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2"
            alt="Brand design"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-navy-900/40"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <p className="text-accent-400 font-semibold text-sm uppercase tracking-widest mb-6">Brand Practice</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white leading-tight">
              Visual Systems &<br />Brand Architecture
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              We build visual operating systems, scalable identity infrastructure that governs how brands look, feel, and behave across every touchpoint.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button to="/contact" variant="accent" size="lg">Build Your Brand System</Button>
              <Button to="#engagement" variant="outline" size="lg" className="text-white border-white/20 hover:bg-white/5">Engagement Models</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mandate */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-accent-50 border-l-4 border-accent-500 p-8 md:p-12 rounded-r-xl">
              <p className="text-xl md:text-2xl text-navy-900 font-medium leading-relaxed italic">
                "A logo is a mark. A brand system is a language. We build languages,complete visual operating systems engineered to scale without losing their soul."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Core Capabilities"
            subtitle="Every element of your visual identity, systematized for scale."
            center={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {capabilities.map((cap, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="bg-accent-50 p-3 rounded-xl inline-flex mb-4">{cap.icon}</div>
                <h3 className="text-base font-bold mb-2">{cap.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading
            title="How We Build Brand Systems"
            subtitle="A structured process that ensures your identity is strategically grounded and built to scale."
            center={true}
          />

          <div className="mt-12 space-y-6">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 md:p-10 border border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl font-bold text-accent-600/30 mr-4">{step.phase}</span>
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
      <section id="engagement" className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Engagement Models"
            subtitle="Flexible structures designed to match your brand needs and growth stage."
            center={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {engagementModels.map((model, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="bg-accent-50 p-3 rounded-xl inline-flex mb-4">{model.icon}</div>
                <h3 className="text-base font-bold mb-2">{model.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{model.description}</p>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Best For</p>
                  <p className="text-xs text-gray-700">{model.bestFor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <WhoWeServe
        industries={markets}
        subtitle="We work with brands that understand identity is not decoration,it is infrastructure. From luxury houses to ambitious startups, we build visual systems for companies that refuse to be generic."
        variant="dark"
      />

      {/* Selected Work */}
      <section className="section bg-navy-900 text-white">
        <div className="container-custom">
          <SectionHeading
            title="Selected Work"
            subtitle="Visual systems built for brands that refuse to blend in."
            center={true}
            lightMode={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="group relative overflow-hidden rounded-xl">
              <img
                src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Brand Architecture"
                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 to-transparent flex items-end p-8">
                <div>
                  <p className="text-accent-400 text-sm font-semibold uppercase tracking-wider mb-2">Brand Architecture</p>
                  <h3 className="text-xl font-bold text-white">Brand Architecture System</h3>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl">
              <img
                src="https://images.pexels.com/photos/6476260/pexels-photo-6476260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Design System"
                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 to-transparent flex items-end p-8">
                <div>
                  <p className="text-accent-400 text-sm font-semibold uppercase tracking-wider mb-2">Design System</p>
                  <h3 className="text-xl font-bold text-white">Multi-Market Design System & Guidelines</h3>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl">
              <img
                src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Brand Evolution"
                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 to-transparent flex items-end p-8">
                <div>
                  <p className="text-accent-400 text-sm font-semibold uppercase tracking-wider mb-2">Brand Evolution</p>
                  <h3 className="text-xl font-bold text-white">Heritage Brand Refresh Program</h3>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Packaging System"
                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 to-transparent flex items-end p-8">
                <div>
                  <p className="text-accent-400 text-sm font-semibold uppercase tracking-wider mb-2">Packaging System</p>
                  <h3 className="text-xl font-bold text-white">Premium Consumer Packaging System</h3>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Corporate Identity"
                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 to-transparent flex items-end p-8">
                <div>
                  <p className="text-accent-400 text-sm font-semibold uppercase tracking-wider mb-2">Corporate Identity</p>
                  <h3 className="text-xl font-bold text-white">Brand Repositioning Program</h3>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl">
              <img
                src="https://images.pexels.com/photos/298842/pexels-photo-298842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Visual Identity"
                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 to-transparent flex items-end p-8">
                <div>
                  <p className="text-accent-400 text-sm font-semibold uppercase tracking-wider mb-2">Visual Identity</p>
                  <h3 className="text-xl font-bold text-white">Luxury Hospitality Identity System</h3>
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
              Ready to Build a Brand Language?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Your brand deserves more than a logo. It deserves a system.
            </p>
            <Button to="/contact" variant="accent" size="lg" className="text-lg px-12 py-6 font-bold">
              Start Your Brand System
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandIdentityPage;
