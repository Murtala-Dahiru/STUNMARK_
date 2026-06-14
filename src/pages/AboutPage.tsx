import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { Eye, Heart, Target, Globe, Award, Zap, Layers, BarChart3 } from 'lucide-react';
import { useScrollReveal } from '../components/utils/useScrollReveal';

const AboutPage = () => {
  const values = [
    {
      icon: <Eye size={24} className="text-primary-600" />,
      title: "Vision",
      description: "We see brands before they exist. Our work begins with the end in mind: the cultural position you will own, not just the deliverables you need."
    },
    {
      icon: <Heart size={24} className="text-primary-600" />,
      title: "Conviction",
      description: "We do not create to please everyone. We create to move the people who matter. Strong brands are built on strong points of view."
    },
    {
      icon: <Award size={24} className="text-primary-600" />,
      title: "Craft",
      description: "Every detail is intentional. Every frame, every pixel, every word is considered. We do not ship work we are not proud of."
    },
    {
      icon: <Globe size={24} className="text-primary-600" />,
      title: "Reach",
      description: "We think across markets, cultures, and mediums. Great brands transcend borders, and so does our work."
    }
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-navy-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2"
            alt="Creative team"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-navy-900/40"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white leading-tight">
              The Creative Partner Behind<br />Category-Defining Brands
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Stunmark is a creative and growth company that builds brands with cultural weight. We design visual systems, craft cinematic stories, engineer digital experiences, and create content ecosystems as one integrated system.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-navy-900 text-white p-12 rounded-2xl">
              <h3 className="text-3xl font-bold mb-6 text-white">Our Mission</h3>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                To build brands that own their category through design, story, experience, and growth. We create the creative infrastructure that transforms how the world sees you.
              </p>
              <div className="h-1 w-24 bg-primary-600"></div>
            </div>

            <div className="bg-primary-600 text-white p-12 rounded-2xl">
              <h3 className="text-3xl font-bold mb-6 text-white">Our Vision</h3>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                To be the creative and growth company that defines how the world's most ambitious brands are built. Every category leader will have a Stunmark system at its foundation.
              </p>
              <div className="h-1 w-24 bg-white"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Core Values"
            subtitle="The principles that shape every brand we build, every story we tell, every result we deliver."
            center={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="bg-primary-50 p-4 rounded-xl inline-flex mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="section bg-navy-900 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 text-white">Global Perspective, Local Precision</h2>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                From Lagos to London, São Paulo to Singapore, we understand that great brands transcend borders. Our creative systems are designed for global scale while maintaining cultural intelligence.
              </p>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                We do not just build for today's market; we create for tomorrow's cultural landscape. Every brand system is future-ready, every story is built to evolve.
              </p>
              <Button
                to="/contact"
                variant="accent"
                size="lg"
              >
                Start a Project
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary-600/20 rounded-2xl transform translate-x-4 translate-y-4"></div>
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Global creative operations"
                className="rounded-2xl relative z-10 w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-navy-900 mb-2">150+</div>
              <div className="text-gray-600 font-medium">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-navy-900 mb-2">28</div>
              <div className="text-gray-600 font-medium">Countries Reached</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-navy-900 mb-2">5</div>
              <div className="text-gray-600 font-medium">Core Practices</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-navy-900 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Global Creative Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Stunmark Advantage */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="The Stunmark Advantage"
            subtitle="Where strategy, culture, and execution converge. The creative infrastructure modern brands require."
            center={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {[
              {
                icon: <Layers size={36} className="text-primary-500" />,
                title: "Integration",
                metric: "Unified System",
                description: "Brand, story, experience, content, and growth operating as one interconnected system, not separate vendors."
              },
              {
                icon: <Eye size={36} className="text-primary-500" />,
                title: "Clarity",
                metric: "Sharp Positioning",
                description: "We strip away the noise and build brands that communicate with unmistakable clarity and cultural weight."
              },
              {
                icon: <BarChart3 size={36} className="text-primary-500" />,
                title: "Performance",
                metric: "Measurable Impact",
                description: "Creative work that does not perform is failed creative. We build for results, not decoration."
              },
              {
                icon: <Zap size={36} className="text-primary-500" />,
                title: "Velocity",
                metric: "Faster to Market",
                description: "We move with urgency. Weeks, not months. Days, not quarters. Your brand cannot afford to wait."
              }
            ].map((item, index) => {
              const { ref, isVisible } = useScrollReveal(0.1);
              return (
                <div
                  key={index}
                  ref={ref}
                  className={`text-center group bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="bg-primary-50 p-5 rounded-2xl inline-flex mb-6 group-hover:bg-primary-100 transition-all duration-300">
                    {item.icon}
                  </div>
                  <div className="text-2xl font-bold text-navy-900 mb-2">{item.metric}</div>
                  <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-navy-900 to-black text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Ready to Build a Brand That Matters?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Whether you are launching something new or evolving something established, we have the creative infrastructure to make it impactful.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button
                to="/contact"
                variant="accent"
                size="lg"
                className="text-lg px-12 py-6 font-bold"
              >
                Start a Project
              </Button>
              <Button
                to="/services"
                variant="outline"
                size="lg"
                className="text-white border-white hover:bg-white/10 text-lg px-12 py-6 font-bold"
              >
                Explore Capabilities
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
