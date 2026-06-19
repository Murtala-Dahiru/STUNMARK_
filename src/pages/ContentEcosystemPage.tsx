import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import WhoWeServe from '../components/ui/WhoWeServe';
import { FileText, Share2, PenTool, Radio, BookOpen, Mic, ArrowRight, RefreshCw, Users, Calendar, BarChart3 } from 'lucide-react';

const capabilities = [
  { icon: <FileText size={24} className="text-success-600" />, title: 'Content Strategy & Architecture', description: 'Strategic frameworks that govern what gets made, where it lives, and how it compounds.' },
  { icon: <Share2 size={24} className="text-success-600" />, title: 'Social Media Ecosystem Management', description: 'Platform-native content systems that build audiences and drive cultural relevance.' },
  { icon: <PenTool size={24} className="text-success-600" />, title: 'Long & Short-Form Content Production', description: 'From 15-second reels to 5,000-word essays,content built for its platform.' },
  { icon: <Radio size={24} className="text-success-600" />, title: 'Platform Channel Development', description: 'Building owned channels that reduce dependency on rented audiences.' },
  { icon: <BookOpen size={24} className="text-success-600" />, title: 'Editorial Systems', description: 'Recurring content engines with editorial calendars, workflows, and quality standards.' },
  { icon: <Mic size={24} className="text-success-600" />, title: 'Podcast & Audio Production', description: 'Audio content that builds intimacy and authority with target audiences.' },
];

const markets = ['Consumer Brands', 'Media', 'Startups', 'Corporations', 'Public Figures', 'Hospitality', 'Education', 'Technology', 'Global Organizations', 'Retail & Fashion'];

const engagementModels = [
  {
    icon: <RefreshCw size={24} className="text-success-600" />,
    title: 'Content Retainer',
    description: 'Ongoing content production and management on a monthly basis. Your brand gets a dedicated content team that delivers consistently.',
    bestFor: 'Brands needing always-on content production',
    includes: ['Monthly content volume', 'Editorial calendar management', 'Platform management', 'Performance reporting'],
  },
  {
    icon: <Calendar size={24} className="text-success-600" />,
    title: 'Content System Build',
    description: 'We architect and build your content ecosystem,strategy, workflows, templates, and systems,then train your team to run it.',
    bestFor: 'Brands building internal content capability',
    includes: ['Content strategy & architecture', 'Workflow design', 'Template systems', 'Team training'],
  },
  {
    icon: <Users size={24} className="text-success-600" />,
    title: 'Platform Growth Program',
    description: 'Focused engagement to grow specific platforms,Instagram, YouTube, LinkedIn, or newsletter,with targeted content and growth strategies.',
    bestFor: 'Brands scaling specific channels',
    includes: ['Platform audit & strategy', 'Content production', 'Growth tactics', 'Monthly optimization'],
  },
  {
    icon: <BarChart3 size={24} className="text-success-600" />,
    title: 'Content Audit & Strategy',
    description: 'Deep analysis of your current content landscape with a strategic roadmap for building a compounding content ecosystem.',
    bestFor: 'Brands needing strategic clarity before execution',
    includes: ['Content audit', 'Competitive analysis', 'Strategy document', '90-day roadmap'],
  },
];

const contentOperations = [
  { title: 'Editorial Calendar', description: 'Structured content planning across platforms, formats, and themes,ensuring consistency and strategic alignment.' },
  { title: 'Production Workflows', description: 'Repeatable systems for ideation, creation, review, approval, and publishing,reducing friction and increasing output.' },
  { title: 'Quality Standards', description: 'Defined standards for every content type and platform,ensuring brand consistency regardless of who creates the content.' },
  { title: 'Performance Analytics', description: 'Monthly reporting on content performance, audience growth, and engagement,with actionable insights for optimization.' },
];

const ContentEcosystemPage = () => {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-navy-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/7869106/pexels-photo-7869106.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2"
            alt="Content creation"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-navy-900/40"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <p className="text-success-400 font-semibold text-sm uppercase tracking-widest mb-6">Content Practice</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white leading-tight">
              Content Ecosystem &<br />Digital Media
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              Always-on content intelligence, building ecosystems that grow audiences, own platforms, and compound cultural value over time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button to="/contact" variant="accent" size="lg">Build Your Ecosystem</Button>
              <Button to="#engagement" variant="outline" size="lg" className="text-white border-white/20 hover:bg-white/5">Engagement Models</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mandate */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-success-50 border-l-4 border-success-500 p-8 md:p-12 rounded-r-xl">
              <p className="text-xl md:text-2xl text-navy-900 font-medium leading-relaxed italic">
                "Content is not a deliverable. It is a living ecosystem,built with strategy, maintained with precision, and compounding in value every single day."
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
            subtitle="Every component of a content ecosystem, engineered for compound growth."
            center={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {capabilities.map((cap, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="bg-success-50 p-4 rounded-xl inline-flex mb-5">{cap.icon}</div>
                <h3 className="text-lg font-bold mb-3">{cap.title}</h3>
                <p className="text-gray-600 leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem vs Campaign */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-success-500/20 rounded-2xl transform -translate-x-4 translate-y-4"></div>
              <img
                src="https://images.pexels.com/photos/7869106/pexels-photo-7869106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Content Ecosystem"
                className="rounded-2xl relative z-10 w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ecosystem, Not Campaign</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Most content strategies are campaign-based: start, push, stop. We build ecosystems,always-on content infrastructure that compounds audience, authority, and value over time.
              </p>
              <ul className="space-y-4 mb-8">
                {['Strategic content architecture', 'Platform-native production', 'Editorial systems & workflows', 'Audience growth & retention'].map((item, i) => (
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
              <Button to="/contact" variant="primary" size="lg" withArrow>Discuss Your Ecosystem</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Operations */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Content Operations"
            subtitle="The systems that turn content from a burden into a compounding asset."
            center={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {contentOperations.map((op, index) => (
              <div key={index} className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-lg font-bold mb-3">{op.title}</h3>
                <p className="text-gray-600 leading-relaxed">{op.description}</p>
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
            subtitle="Flexible structures designed to match your content needs and organizational capacity."
            center={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {engagementModels.map((model, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-success-50 p-3 rounded-xl shrink-0">{model.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold">{model.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mt-1">{model.description}</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 mb-3">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Best For</p>
                  <p className="text-sm text-gray-700">{model.bestFor}</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Includes</p>
                  <ul className="space-y-1">
                    {model.includes.map((item, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-center">
                        <div className="bg-success-100 rounded-full p-0.5 mr-2 shrink-0">
                          <svg className="w-2.5 h-2.5 text-success-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <WhoWeServe
        industries={markets}
        subtitle="We build content ecosystems for brands that understand attention is earned daily."
        variant="dark"
      />
      {/* Selected Work */}
      <section className="section bg-navy-900 text-white">
        <div className="container-custom">
          <SectionHeading
            title="Selected Work"
            subtitle="Compounding content engines and owned digital media platforms."
            center={true}
            lightMode={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="group relative overflow-hidden rounded-xl">
              <img
                src="https://images.pexels.com/photos/5185116/pexels-photo-5185116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Content Strategy"
                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 to-transparent flex items-end p-8">
                <div>
                  <p className="text-success-400 text-sm font-semibold uppercase tracking-wider mb-2">Content Strategy</p>
                  <h3 className="text-xl font-bold text-white">Global Content Architecture Framework</h3>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl">
              <img
                src="https://images.pexels.com/photos/6325984/pexels-photo-6325984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Editorial Platform"
                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 to-transparent flex items-end p-8">
                <div>
                  <p className="text-success-400 text-sm font-semibold uppercase tracking-wider mb-2">Editorial Platform</p>
                  <h3 className="text-xl font-bold text-white">Editorial Content Platform & Production Engine</h3>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl">
              <img
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Social Media Ecosystem"
                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 to-transparent flex items-end p-8">
                <div>
                  <p className="text-success-400 text-sm font-semibold uppercase tracking-wider mb-2">Social Media Ecosystem</p>
                  <h3 className="text-xl font-bold text-white">Multi-Channel Brand Social System</h3>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl">
              <img
                src="https://images.pexels.com/photos/6880158/pexels-photo-6880158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Audio Series"
                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 to-transparent flex items-end p-8">
                <div>
                  <p className="text-success-400 text-sm font-semibold uppercase tracking-wider mb-2">Audio Series</p>
                  <h3 className="text-xl font-bold text-white">Executive Thought Leadership Podcast</h3>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl">
              <img
                src="https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Channel Development"
                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 to-transparent flex items-end p-8">
                <div>
                  <p className="text-success-400 text-sm font-semibold uppercase tracking-wider mb-2">Channel Development</p>
                  <h3 className="text-xl font-bold text-white">Owned Media Channel Strategy</h3>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl">
              <img
                src="https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Digital Media"
                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 to-transparent flex items-end p-8">
                <div>
                  <p className="text-success-400 text-sm font-semibold uppercase tracking-wider mb-2">Digital Media</p>
                  <h3 className="text-xl font-bold text-white">Editorial Newsletter System</h3>
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
              Ready to Build a Content Engine?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Stop creating content. Start building an ecosystem.
            </p>
            <Button to="/contact" variant="accent" size="lg" className="text-lg px-12 py-6 font-bold">
              Start Your Ecosystem
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContentEcosystemPage;
