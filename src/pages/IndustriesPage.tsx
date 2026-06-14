import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { Palette, Building2, ShoppingBag, GraduationCap, Hotel, Cpu, Film, Globe, Landmark, TreePine, Home, Sparkles, UtensilsCrossed, Car, Trophy, Briefcase } from 'lucide-react';

const IndustriesPage = () => {
  const markets = [
    {
      icon: <Palette size={32} className="text-primary-600" />,
      title: "Luxury & Fashion",
      description: "Elevate brand perception with visual systems and cinematic storytelling that match the standard your audience expects.",
      capabilities: ["Brand identity & visual systems", "Cinematic brand films", "Editorial & publication design", "Global brand guidelines"]
    },
    {
      icon: <ShoppingBag size={32} className="text-primary-600" />,
      title: "E-commerce & Retail",
      description: "Create seamless brand experiences that drive conversions and build lasting customer relationships across channels.",
      capabilities: ["Ecommerce platform design", "Brand identity & packaging", "Content & social ecosystems", "Growth & performance marketing"]
    },
    {
      icon: <GraduationCap size={32} className="text-primary-600" />,
      title: "Education & Institutions",
      description: "Build institutional authority through brand systems, digital platforms, and content that communicates credibility and vision.",
      capabilities: ["Institutional brand systems", "Digital platform development", "Content & editorial strategy", "Cinematic institutional films"]
    },
    {
      icon: <Sparkles size={32} className="text-primary-600" />,
      title: "Beauty & Wellness",
      description: "Craft aspirational brand experiences that connect emotionally and convert consistently across digital and retail.",
      capabilities: ["Brand identity & packaging", "Content ecosystem management", "Social media systems", "Performance marketing"]
    },
    {
      icon: <Hotel size={32} className="text-primary-600" />,
      title: "Hospitality & Tourism",
      description: "Transform destinations into must-visit experiences through cinematic storytelling and immersive digital platforms.",
      capabilities: ["Destination storytelling", "Brand identity & design systems", "Digital experience platforms", "Content & social ecosystems"]
    },
    {
      icon: <Cpu size={32} className="text-primary-600" />,
      title: "Technology",
      description: "Position technology brands with clarity and cultural weight, moving beyond features to tell stories that resonate.",
      capabilities: ["Brand identity & positioning", "Digital platform design", "Content ecosystems", "Growth marketing systems"]
    },
    {
      icon: <Film size={32} className="text-primary-600" />,
      title: "Media & Entertainment",
      description: "Build content infrastructure and brand systems that scale across platforms, formats, and audiences.",
      capabilities: ["Brand identity & visual systems", "Content ecosystem architecture", "Social media management", "Cinematic production"]
    },
    {
      icon: <Landmark size={32} className="text-primary-600" />,
      title: "Finance & Investment",
      description: "Command credibility with brand systems and digital platforms that build trust and simplify complexity.",
      capabilities: ["Brand architecture & identity", "Digital platform design", "Content ecosystem management", "Performance marketing systems"]
    },
    {
      icon: <Home size={32} className="text-primary-600" />,
      title: "Architecture & Real Estate",
      description: "Elevate property brands with cinematic storytelling and visual systems that match the quality of your built work.",
      capabilities: ["Cinematic property films", "Brand identity & design systems", "Digital experience platforms", "Content ecosystems"]
    },
    {
      icon: <UtensilsCrossed size={32} className="text-primary-600" />,
      title: "Food & Beverage",
      description: "Build appetite and loyalty through brand systems, content ecosystems, and digital experiences that drive trial and retention.",
      capabilities: ["Brand identity & packaging", "Content & social ecosystems", "Cinematic brand films", "Growth marketing"]
    },
    {
      icon: <Car size={32} className="text-primary-600" />,
      title: "Automotive",
      description: "Position automotive brands with cinematic storytelling and digital experiences that match the engineering standard of your product.",
      capabilities: ["Cinematic brand films", "Brand identity & systems", "Digital experience design", "Content ecosystems"]
    },
    {
      icon: <Trophy size={32} className="text-primary-600" />,
      title: "Sports & Culture",
      description: "Build cultural brands that move audiences, from team identities to event ecosystems to athlete storytelling.",
      capabilities: ["Brand identity & visual systems", "Cinematic storytelling", "Content ecosystems", "Social media systems"]
    },
    {
      icon: <TreePine size={32} className="text-primary-600" />,
      title: "NGOs & Impact",
      description: "Amplify mission-driven organizations with strategic storytelling, brand systems, and content that drives awareness and action.",
      capabilities: ["Impact films & documentaries", "Brand identity & systems", "Content ecosystems", "Digital platforms"]
    },
    {
      icon: <Briefcase size={32} className="text-primary-600" />,
      title: "Startups & Scale-ups",
      description: "Build category-defining brands from day one, identity systems, digital platforms, and growth infrastructure designed to scale.",
      capabilities: ["Brand identity & positioning", "Digital platform build", "Growth marketing systems", "Content ecosystems"]
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-navy-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2"
            alt="Global markets"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-navy-900/40"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white leading-tight">
              Creative Excellence<br />Across Markets
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              We bring the same creative ambition to every market, because great brands are not defined by their industry, but by their refusal to be ordinary.
            </p>
          </div>
        </div>
      </section>

      {/* Markets */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading
            title="Markets We Serve"
            subtitle="Our creative capabilities are designed to address the unique challenges and opportunities of each sector."
            center={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {markets.map((market, index) => (
              <div key={index} className="card hover:shadow-md">
                <div className="p-3 rounded-full bg-primary-50 inline-flex mb-4">
                  {market.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{market.title}</h3>
                <p className="text-gray-600 mb-5">{market.description}</p>
                <h4 className="font-medium mb-3 text-sm text-gray-500 uppercase tracking-wider">Key Capabilities</h4>
                <ul className="space-y-2 mb-6">
                  {market.capabilities.map((cap, sIndex) => (
                    <li key={sIndex} className="flex items-start">
                      <div className="bg-success-100 rounded-full p-1 mt-1 mr-3">
                        <svg className="w-3 h-3 text-success-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{cap}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  to="/contact"
                  variant="primary"
                  size="sm"
                  withArrow
                >
                  Discuss Your Market
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Selected Work"
            subtitle="How we have helped brands across markets define their category."
            center={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Case Study"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mb-3">
                  Luxury & Fashion
                </div>
                <h3 className="text-xl font-semibold mb-2">Maison Aurelia: Global Brand System</h3>
                <p className="text-gray-600 mb-4">
                  Complete visual identity and cinematic brand film that repositioned a heritage house for a new generation of global consumers.
                </p>
                <Button
                  to="/contact"
                  variant="primary"
                  size="sm"
                  withArrow
                >
                  View Case Study
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Case Study"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mb-3">
                  Finance & Investment
                </div>
                <h3 className="text-xl font-semibold mb-2">Meridian Capital: Trust Architecture</h3>
                <p className="text-gray-600 mb-4">
                  Brand identity system and digital platform that increased client acquisition by 45% through strategic clarity and design precision.
                </p>
                <Button
                  to="/contact"
                  variant="primary"
                  size="sm"
                  withArrow
                >
                  View Case Study
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Case Study"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mb-3">
                  E-commerce & Retail
                </div>
                <h3 className="text-xl font-semibold mb-2">Velour DTC: Full Creative System</h3>
                <p className="text-gray-600 mb-4">
                  Brand, content, and growth transformation resulting in 215% increase in online sales and 85% improvement in customer retention.
                </p>
                <Button
                  to="/contact"
                  variant="primary"
                  size="sm"
                  withArrow
                >
                  View Case Study
                </Button>
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
              Ready to Define Your Market?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let us show you what creative excellence can do for your brand.
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

export default IndustriesPage;
