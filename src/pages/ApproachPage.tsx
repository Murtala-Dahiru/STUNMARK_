import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { Search, Lightbulb, CheckCircle, RefreshCw, Eye, Heart, ArrowRight, Layers, Users, FileCheck } from 'lucide-react';

const ApproachPage = () => {
  const processSteps = [
    {
      icon: <Search size={28} className="text-white" />,
      title: "Strategic Discovery",
      description: "Every project begins with deep strategic immersion. We study your brand, your market, your audience, and your competitive landscape to identify the space only you can own.",
      details: [
        "Brand audit and positioning analysis",
        "Audience and cultural research",
        "Competitive landscape mapping",
        "Strategic opportunity identification",
        "Creative direction definition",
      ]
    },
    {
      icon: <Lightbulb size={28} className="text-white" />,
      title: "Creative Development",
      description: "Strategy becomes creative direction. We design brand systems, craft visual narratives, architect digital experiences, and build content frameworks with intention and strategic precision.",
      details: [
        "Visual identity and design systems",
        "Content and narrative frameworks",
        "Experience and interaction design",
        "Creative production and prototyping",
        "Cross-practice alignment",
      ]
    },
    {
      icon: <CheckCircle size={28} className="text-white" />,
      title: "Production & Delivery",
      description: "We produce with cinematic quality, launch with strategic intent, and ensure every touchpoint reflects the standard your brand demands. No detail is too small. No standard is too high.",
      details: [
        "Production execution across all practices",
        "Quality assurance and brand compliance",
        "Platform-specific optimization",
        "Strategic launch planning",
        "Cross-channel deployment",
      ]
    },
    {
      icon: <RefreshCw size={28} className="text-white" />,
      title: "Evolution & Scale",
      description: "We measure impact, refine creative, and scale what works. Your brand stays relevant, resonant, and ahead of the curve because standing still is falling behind.",
      details: [
        "Performance measurement and analytics",
        "Creative iteration and optimization",
        "Content ecosystem expansion",
        "Growth system scaling",
        "Strategic evolution planning",
      ]
    }
  ];

  const operatingPrinciples = [
    {
      icon: <Eye size={24} className="text-primary-600" />,
      title: "Creative with Intent",
      description: "Every creative decision serves a strategic purpose. We make things powerful, not just beautiful. Aesthetics follow strategy, never the reverse."
    },
    {
      icon: <Heart size={24} className="text-primary-600" />,
      title: "Partnership, Not Service",
      description: "We embed with your team. Your challenges become ours. Your wins become our standard. We build and evolve alongside you, never delivering and disappearing."
    },
    {
      icon: <Layers size={24} className="text-primary-600" />,
      title: "Systems Over Deliverables",
      description: "A brand film is a deliverable. A cinematic storytelling system is infrastructure. We build the latter because systems compound while deliverables depreciate."
    },
    {
      icon: <Users size={24} className="text-primary-600" />,
      title: "Integrated Execution",
      description: "Brand, story, experience, content, and growth are not separate disciplines; they are one creative system. We execute them together because that is how audiences experience them."
    },
  ];

  const collaborationFlow = [
    {
      phase: 'Alignment',
      description: 'We begin every engagement with a strategic alignment session: defining objectives, success metrics, and creative direction before any work begins.',
    },
    {
      phase: 'Immersion',
      description: 'Our team immerses in your brand, category, and audience. We study, question, and challenge assumptions to find the strategic space only you can own.',
    },
    {
      phase: 'Creation',
      description: 'Cross-practice teams work in parallel: brand, cinematic, digital, content, and growth, each reinforcing the other under unified creative direction.',
    },
    {
      phase: 'Review',
      description: 'Structured review cycles ensure quality, alignment, and strategic consistency. Every output is measured against the original strategic intent.',
    },
    {
      phase: 'Launch',
      description: 'Coordinated deployment across all channels and touchpoints. Launch is not the end; it is the beginning of the evolution cycle.',
    },
    {
      phase: 'Evolution',
      description: 'Post-launch measurement, creative iteration, and system scaling. The work improves continuously because standing still is falling behind.',
    },
  ];

  const principles = [
    {
      icon: <Eye size={24} className="text-primary-600" />,
      title: "Creative with Intent",
      description: "Every creative decision serves a strategic purpose. We make things powerful, not just pretty."
    },
    {
      icon: <Heart size={24} className="text-primary-600" />,
      title: "Partnership, Not Service",
      description: "We embed with your team. Your challenges become ours. Your wins become our standard."
    }
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-navy-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2"
            alt="Strategic process"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-navy-900/40"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white leading-tight">
              Where Strategy<br />Meets Craft
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              Our process is built for brands that refuse to be generic. We combine strategic rigor with creative ambition, ensuring every project is intentional, every result is measurable, and every brand we build has cultural weight.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading
            title="The Creative Framework"
            subtitle="A structured operational system that ensures strategic alignment, creative excellence, and measurable impact."
            center={true}
          />

          <div className="mt-16 space-y-20">
            {processSteps.map((step, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 items-center">
                <div className={index % 2 === 0 ? '' : 'md:order-2'}>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-600 mr-4 shadow-lg shadow-primary-500/20">
                      {step.icon}
                    </div>
                    <h3 className="text-2xl font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>
                  <ul className="space-y-3 mb-6">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start">
                        <div className="bg-success-100 rounded-full p-1 mt-1 mr-3">
                          <svg className="w-3 h-3 text-success-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`${index % 2 === 0 ? '' : 'md:order-1'} bg-gray-50 p-6 rounded-lg`}>
                  <img
                    src={`https://images.pexels.com/photos/${[3182746, 3182822, 3184296, 3184339][index]}/pexels-photo-${[3182746, 3182822, 3184296, 3184339][index]}.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`}
                    alt={step.title}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Flow */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Collaboration Flow"
            subtitle="How we work with you, from first conversation to ongoing evolution."
            center={true}
          />

          <div className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {collaborationFlow.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-xl p-6 h-full border border-gray-100 hover:border-primary-200 transition-colors">
                    <div className="text-3xl font-bold text-primary-600/20 mb-3">{String(index + 1).padStart(2, '0')}</div>
                    <h3 className="text-base font-bold mb-2">{step.phase}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                  {index < collaborationFlow.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                      <ArrowRight size={16} className="text-gray-300" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Operating Principles */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Operating Principles"
            subtitle="The beliefs that drive our process and ensure exceptional creative outcomes."
            center={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {operatingPrinciples.map((principle, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl border border-gray-100 h-full">
                <div className="bg-primary-100 p-3 rounded-full inline-flex mb-4">
                  {principle.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{principle.title}</h3>
                <p className="text-gray-600 leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Standards */}
      <section className="section bg-navy-900 text-white">
        <div className="container-custom">
          <SectionHeading
            title="Delivery Standards"
            subtitle="The non-negotiable standards that govern every project we deliver."
            center={true}
            lightMode={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-navy-800/70 border border-white/10 rounded-xl p-8">
              <div className="text-primary-400 font-bold text-4xl mb-4">01</div>
              <h3 className="text-xl font-bold mb-3 text-white">Strategic Alignment</h3>
              <p className="text-gray-300 leading-relaxed">Every output is measured against the original strategic intent. If it does not serve the strategy, it does not ship.</p>
            </div>
            <div className="bg-navy-800/70 border border-white/10 rounded-xl p-8">
              <div className="text-primary-400 font-bold text-4xl mb-4">02</div>
              <h3 className="text-xl font-bold mb-3 text-white">Cinematic Quality</h3>
              <p className="text-gray-300 leading-relaxed">Whether it is a brand film or a social post, the standard is the same: intentional, considered, and crafted to the highest level.</p>
            </div>
            <div className="bg-navy-800/70 border border-white/10 rounded-xl p-8">
              <div className="text-primary-400 font-bold text-4xl mb-4">03</div>
              <h3 className="text-xl font-bold mb-3 text-white">Measurable Impact</h3>
              <p className="text-gray-300 leading-relaxed">Creative work that does not perform is failed creative. Every project has defined success metrics, and we track them rigorously.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-navy-900 to-black text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Ready to Experience Our Process?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let us show you what strategic creativity can do for your brand.
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

export default ApproachPage;
