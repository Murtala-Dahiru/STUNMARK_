import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import WhoWeServe from '../components/ui/WhoWeServe';
import { TrendingUp, Target, Zap, BarChart3, Search, Mail, LineChart, PieChart, ArrowRight, RefreshCw, Users, FileCheck, Layers } from 'lucide-react';

const capabilities = [
  { icon: <TrendingUp size={24} className="text-warning-600" />, title: 'Integrated Marketing Strategy', description: 'Unified strategies that align brand, content, and performance into one growth system.' },
  { icon: <Target size={24} className="text-warning-600" />, title: 'Paid Media Planning & Buying', description: 'Data-driven media investment that maximizes reach and minimizes waste.' },
  { icon: <Zap size={24} className="text-warning-600" />, title: 'Performance Creative', description: 'Ad creative engineered for clicks, conversions, and scale,not just aesthetics.' },
  { icon: <BarChart3 size={24} className="text-warning-600" />, title: 'Conversion Rate Optimization', description: 'Systematic testing and optimization that turns more visitors into customers.' },
  { icon: <LineChart size={24} className="text-warning-600" />, title: 'Growth Marketing Systems', description: 'Repeatable growth engines that scale acquisition without scaling cost.' },
  { icon: <Search size={24} className="text-warning-600" />, title: 'SEO & Organic Acquisition', description: 'Search strategies that build sustainable traffic and domain authority.' },
  { icon: <Mail size={24} className="text-warning-600" />, title: 'Email & Lifecycle Marketing', description: 'Automated sequences that nurture, convert, and retain at every stage.' },
  { icon: <PieChart size={24} className="text-warning-600" />, title: 'Analytics & Attribution', description: 'Measurement systems that reveal what works, what does not, and what to scale.' },
];

const markets = ['Consumer Brands', 'Technology', 'Startups', 'Financial Institutions', 'Retail & Fashion', 'E-Commerce', 'Hospitality', 'Media', 'Education', 'Global Organizations'];

const engagementModels = [
  {
    icon: <TrendingUp size={24} className="text-warning-600" />,
    title: 'Growth System Build',
    description: 'Complete growth infrastructure from strategy through automation. We build the engine, then train your team to operate it.',
    bestFor: 'Brands building growth infrastructure from scratch',
    includes: ['Growth strategy', 'Channel setup & integration', 'Automation systems', 'Team training'],
  },
  {
    icon: <RefreshCw size={24} className="text-warning-600" />,
    title: 'Performance Retainer',
    description: 'Ongoing media management, creative testing, and optimization. Your brand gets a dedicated performance team that delivers results monthly.',
    bestFor: 'Brands with active paid media budgets',
    includes: ['Media management', 'Creative testing', 'Weekly optimization', 'Monthly reporting'],
  },
  {
    icon: <FileCheck size={24} className="text-warning-600" />,
    title: 'Growth Audit',
    description: 'Deep analysis of your current marketing performance with a prioritized roadmap for improvement. Fast, actionable, and strategic.',
    bestFor: 'Brands needing clarity on growth opportunities',
    includes: ['Performance audit', 'Competitive benchmarking', 'Prioritized roadmap', 'Implementation plan'],
  },
  {
    icon: <Users size={24} className="text-warning-600" />,
    title: 'CRO Program',
    description: 'Systematic conversion rate optimization through continuous testing. We identify friction, design experiments, and implement winners.',
    bestFor: 'Brands with traffic but low conversion rates',
    includes: ['UX analysis', 'Test design & execution', 'Statistical analysis', 'Implementation of winners'],
  },
];

const performanceLoop = [
  { step: '01', title: 'Measure', description: 'Comprehensive analytics setup and baseline measurement. We establish what success looks like before we start optimizing.' },
  { step: '02', title: 'Hypothesize', description: 'Data-driven hypotheses for improvement. Every test is grounded in evidence, not guesswork.' },
  { step: '03', title: 'Test', description: 'Controlled experiments across creative, targeting, landing pages, and funnels. Rigorous statistical standards.' },
  { step: '04', title: 'Scale', description: 'Winners get scaled. Losers get archived. Every dollar moves toward what works.' },
  { step: '05', title: 'Repeat', description: 'The loop never stops. Markets change, audiences evolve, and platforms shift. Continuous optimization is the only sustainable strategy.' },
];

const testingFramework = [
  { category: 'Creative Testing', items: ['Ad copy variations', 'Visual format testing', 'Headline optimization', 'CTA experimentation'] },
  { category: 'Audience Testing', items: ['Segment discovery', 'Lookalike expansion', 'Interest stacking', 'Retargeting layers'] },
  { category: 'Funnel Testing', items: ['Landing page variants', 'Checkout flow optimization', 'Email sequence testing', 'Upsell path optimization'] },
  { category: 'Channel Testing', items: ['Platform allocation', 'Budget redistribution', 'Bid strategy testing', 'Seasonal adjustment'] },
];

const GrowthPerformancePage = () => {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-navy-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2"
            alt="Growth analytics"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-navy-900/40"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <p className="text-warning-400 font-semibold text-sm uppercase tracking-widest mb-6">Growth Practice</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white leading-tight">
              Marketing, Growth &<br />Performance
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              This practice connects creative excellence with measurable commercial results, ensuring everything built performs and scales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button to="/contact" variant="accent" size="lg">Launch Your Growth System</Button>
              <Button to="#engagement" variant="outline" size="lg" className="text-white border-white/20 hover:bg-white/5">Engagement Models</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mandate */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-warning-50 border-l-4 border-warning-500 p-8 md:p-12 rounded-r-xl">
              <p className="text-xl md:text-2xl text-navy-900 font-medium leading-relaxed italic">
                "Creativity without conversion is art. Conversion without creativity is noise. We engineer both,and make them inseparable."
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
            subtitle="Every lever of growth, pulled with precision and measured with rigor."
            center={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {capabilities.map((cap, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="bg-warning-50 p-3 rounded-xl inline-flex mb-4">{cap.icon}</div>
                <h3 className="text-base font-bold mb-2">{cap.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Performance Loop */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading
            title="The Performance Loop"
            subtitle="A continuous optimization cycle that compounds results over time. This is not a campaign,it is a system."
            center={true}
          />

          <div className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {performanceLoop.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-gray-50 rounded-xl p-6 h-full border border-gray-100 hover:border-warning-200 transition-colors">
                    <div className="text-3xl font-bold text-warning-600/20 mb-3">{step.step}</div>
                    <h3 className="text-base font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                  {index < performanceLoop.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                      <ArrowRight size={16} className="text-gray-300" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testing Framework */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Testing Framework"
            subtitle="Systematic experimentation across every dimension of performance. No guesswork. Only evidence."
            center={true}
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {testingFramework.map((framework, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="text-sm font-bold text-navy-900 mb-4 uppercase tracking-wider">{framework.category}</h3>
                <ul className="space-y-2">
                  {framework.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="bg-warning-100 rounded-full p-0.5 mt-1 mr-2 shrink-0">
                        <svg className="w-2.5 h-2.5 text-warning-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
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
            subtitle="Flexible structures designed to match your growth needs and investment level."
            center={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {engagementModels.map((model, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-warning-50 p-3 rounded-xl shrink-0">{model.icon}</div>
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
                        <div className="bg-warning-100 rounded-full p-0.5 mr-2 shrink-0">
                          <svg className="w-2.5 h-2.5 text-warning-600" fill="currentColor" viewBox="0 0 20 20">
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

      {/* Growth as a System */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Growth as a System</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We do not run campaigns. We build growth systems,repeatable, measurable, and scalable engines that connect creative work to commercial outcomes. Every dollar invested is tracked. Every channel is optimized. Every result compounds.
              </p>
              <ul className="space-y-4 mb-8">
                {['Full-funnel strategy and execution', 'Creative + data integration', 'Automated optimization systems', 'Transparent reporting and attribution'].map((item, i) => (
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
              <Button to="/contact" variant="primary" size="lg" withArrow>Discuss Your Growth</Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-warning-500/20 rounded-2xl transform translate-x-4 translate-y-4"></div>
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Growth Systems"
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
            title="Growth That Compounds"
            subtitle="Our performance systems deliver measurable results that accelerate over time."
            center={true}
            lightMode={true}
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-warning-400 mb-2">300%</div>
              <div className="text-gray-300 font-medium">Avg. ROAS Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-warning-400 mb-2">85%</div>
              <div className="text-gray-300 font-medium">Automation Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-warning-400 mb-2">60%</div>
              <div className="text-gray-300 font-medium">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-warning-400 mb-2">24/7</div>
              <div className="text-gray-300 font-medium">System Operation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <WhoWeServe
        industries={markets}
        subtitle="We build growth systems for brands ready to scale with precision."
        variant="dark"
      />

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-navy-900 to-black text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Ready to Engineer Growth?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Growth is not a campaign. It is a system. Let us build yours.
            </p>
            <Button to="/contact" variant="accent" size="lg" className="text-lg px-12 py-6 font-bold">
              Start Growing
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default GrowthPerformancePage;
