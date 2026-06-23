import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { Film, Clapperboard, Camera, Video, MapPin, Building2, BookOpen, Globe, Calendar, ArrowRight, Play, Users, Clock, RefreshCw } from 'lucide-react';

const productions = [
  { icon: <Film size={24} className="text-primary-600" />, title: 'Brand Films & Commercial Campaigns', description: 'Cinematic brand narratives that move audiences and redefine categories. From 30-second spots to long-form brand stories.' },
  { icon: <Video size={24} className="text-primary-600" />, title: 'Documentary & Impact Films', description: 'Authentic stories that create cultural resonance and drive meaningful change. Investigative, observational, and impact-driven.' },
  { icon: <Clapperboard size={24} className="text-primary-600" />, title: 'Product Launch Films', description: 'High-impact launch content that turns releases into cultural events. Designed to generate attention and drive action.' },
  { icon: <Calendar size={24} className="text-primary-600" />, title: 'Event Film Production', description: 'Premium event filmmaking for executive summits, global conferences, leadership events, and institutional gatherings. Cinematic documentation of moments that matter.' },
  { icon: <MapPin size={24} className="text-primary-600" />, title: 'Tourism & Destination Storytelling', description: 'Place-based narratives that transform locations into must-visit experiences. Country-level, city-level, and property-level.' },
  { icon: <Building2 size={24} className="text-primary-600" />, title: 'Corporate & Institutional Films', description: 'Strategic films that communicate vision, values, and institutional purpose with cinematic quality and emotional depth.' },
  { icon: <BookOpen size={24} className="text-primary-600" />, title: 'Narrative Campaign Series', description: 'Episodic content that builds audience investment over time. Serialized storytelling across platforms and seasons.' },
  { icon: <Globe size={24} className="text-primary-600" />, title: 'Cultural & Heritage Storytelling', description: 'Stories rooted in identity, tradition, and cultural significance. Preserving heritage through cinematic craft.' },
];

const capabilities = [
  {
    phase: 'Pre-Production',
    description: 'Where the story takes shape before a single frame is shot.',
    items: [
      { name: 'Concept Development', detail: 'Strategic narrative frameworks rooted in brand positioning and audience insight' },
      { name: 'Scriptwriting', detail: 'Screenplay-quality writing for brand, documentary, and narrative formats' },
      { name: 'Storyboarding', detail: 'Visual shot planning that aligns creative vision with production reality' },
      { name: 'Creative Direction', detail: 'Unified visual and narrative direction across every production element' },
    ],
  },
  {
    phase: 'Production',
    description: 'Where vision becomes reality,captured at the highest standard.',
    items: [
      { name: 'Cinematography', detail: 'Feature-quality camera work with ARRI, RED, and Sony cinema systems' },
      { name: 'Directing', detail: 'Performance direction that draws authentic, compelling moments from talent' },
      { name: 'Drone & Aerial Filming', detail: 'Licensed aerial cinematography for establishing, transitional, and dramatic shots' },
      { name: 'Production Design', detail: 'Set design, location styling, and visual environment engineering' },
    ],
  },
  {
    phase: 'Post-Production',
    description: 'Where raw footage becomes a finished story,polished to cinematic standard.',
    items: [
      { name: 'Editing', detail: 'Narrative assembly, pacing, and rhythm,the invisible art that makes stories work' },
      { name: 'Color Grading', detail: 'DaVinci Resolve color science that establishes mood, tone, and visual consistency' },
      { name: 'Sound Design', detail: 'Immersive audio landscapes,foley, ambience, and atmospheric design' },
      { name: 'Motion Graphics', detail: 'Title sequences, data visualization, and animated visual elements' },
      { name: 'Music Scoring', detail: 'Original composition and licensed music curation for emotional precision' },
    ],
  },
];

const engagementModels = [
  {
    icon: <Clapperboard size={24} className="text-primary-600" />,
    title: 'Project-Based Production',
    description: 'Full production from concept to delivery for a single film, campaign, or series. Ideal for launches, brand films, and one-time productions.',
    bestFor: 'Brand launches, campaign films, product releases',
  },
  {
    icon: <RefreshCw size={24} className="text-primary-600" />,
    title: 'Production Retainer',
    description: 'Ongoing production capacity on a monthly or quarterly basis. Your brand gets a dedicated production pipeline that delivers content consistently.',
    bestFor: 'Brands with recurring content needs, always-on campaigns',
  },
  {
    icon: <Users size={24} className="text-primary-600" />,
    title: 'Co-Production Partnership',
    description: 'Shared investment and creative ownership for high-value productions. We co-create and co-own the content, reducing your upfront cost while maintaining quality.',
    bestFor: 'Documentary features, series, high-budget brand films',
  },
];

const workflow = [
  { step: '01', title: 'Brief & Strategy', description: 'We align on brand objectives, audience, distribution strategy, and creative direction before production begins.' },
  { step: '02', title: 'Pre-Production', description: 'Script, storyboard, cast, location, and schedule,every detail planned to ensure a smooth shoot.' },
  { step: '03', title: 'Principal Photography', description: 'On-set or on-location production with full crew, equipment, and creative direction.' },
  { step: '04', title: 'Post-Production', description: 'Editing, color, sound, graphics, and music,crafted to cinematic standard.' },
  { step: '05', title: 'Delivery & Distribution', description: 'Final assets delivered in all required formats, with distribution strategy and platform optimization.' },
];

const CinematicProductionPage = () => {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-navy-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2"
            alt="Cinematic production"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-navy-900/40"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <p className="text-primary-400 font-semibold text-sm uppercase tracking-widest mb-6">Cinematic Practice</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white leading-tight">
              Cinematic Storytelling &<br />Global Production
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              The cinematic storytelling engine of the company, transforming brand narratives into powerful visual stories that move audiences emotionally and culturally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button to="/contact" variant="accent" size="lg">Discuss Your Vision</Button>
              <Button to="#engagement" variant="outline" size="lg" className="text-white border-white/20 hover:bg-white/5">Engagement Models</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Productions */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Core Productions"
            subtitle="From brand films to cultural documentaries,every production is engineered for impact."
            center={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {productions.map((prod, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="bg-primary-50 p-3 rounded-xl inline-flex mb-5">{prod.icon}</div>
                <h3 className="text-lg font-bold mb-3">{prod.title}</h3>
                <p className="text-gray-600 leading-relaxed">{prod.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Capabilities */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Production Capabilities"
            subtitle="End-to-end production infrastructure,from concept to final delivery."
            center={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {capabilities.map((cap, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-2">{cap.phase}</h3>
                <p className="text-gray-500 text-sm mb-6">{cap.description}</p>
                <ul className="space-y-4">
                  {cap.items.map((item, i) => (
                    <li key={i}>
                      <div className="flex items-start">
                        <div className="bg-success-100 rounded-full p-1 mt-1 mr-3 shrink-0">
                          <svg className="w-3 h-3 text-success-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <span className="text-gray-900 font-semibold text-sm">{item.name}</span>
                          <p className="text-gray-500 text-xs mt-0.5">{item.detail}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* From Concept to Distribution */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading
            title="From Concept to Distribution"
            subtitle="A structured workflow that ensures every production is strategically aligned and cinematically executed."
            center={true}
          />

          <div className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {workflow.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-gray-50 rounded-xl p-6 h-full border border-gray-100 hover:border-primary-200 transition-colors">
                    <div className="text-3xl font-bold text-primary-600/20 mb-3">{step.step}</div>
                    <h3 className="text-base font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                  {index < workflow.length - 1 && (
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

      {/* Engagement Models */}
      <section id="engagement" className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Engagement Models"
            subtitle="Flexible structures designed to match your production needs and budget reality."
            center={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {engagementModels.map((model, index) => (
              <div key={index} className="bg-white rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="bg-primary-50 p-3 rounded-xl inline-flex mb-5">{model.icon}</div>
                <h3 className="text-lg font-bold mb-3">{model.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{model.description}</p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Best For</p>
                  <p className="text-sm text-gray-700">{model.bestFor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Rollout */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Campaign Rollout Systems</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                A great film is only as powerful as its distribution. We do not just produce,we architect the rollout. Every cinematic asset is designed for multi-platform deployment, from theatrical to social, from broadcast to digital.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Multi-platform format optimization (16:9, 9:16, 1:1, square)',
                  'Platform-specific cutdowns and variations',
                  'Distribution strategy and media planning integration',
                  'Performance tracking and creative iteration',
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
              <Button to="/contact" variant="primary" size="lg" withArrow>Discuss Your Campaign</Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary-500/10 rounded-2xl transform translate-x-4 translate-y-4"></div>
              <img
                src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Production environment"
                className="rounded-2xl relative z-10 w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section className="section bg-navy-900 text-white">
        <div className="container-custom">
          <SectionHeading
            title="Selected Work"
            subtitle="Stories that moved audiences and redefined categories."
            center={true}
            lightMode={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="group relative overflow-hidden rounded-xl">
              <img
                src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Brand Narrative"
                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 to-transparent flex items-end p-8">
                <div>
                  <p className="text-primary-400 text-sm font-semibold uppercase tracking-wider mb-2">Brand Narrative</p>
                  <h3 className="text-xl font-bold text-white">Brand Launch Campaign</h3>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl">
              <img
                src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Documentary Film"
                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 to-transparent flex items-end p-8">
                <div>
                  <p className="text-primary-400 text-sm font-semibold uppercase tracking-wider mb-2">Documentary Film</p>
                  <h3 className="text-xl font-bold text-white">Cultural Heritage Film Series</h3>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl">
              <img
                src="https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Commercial Film"
                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 to-transparent flex items-end p-8">
                <div>
                  <p className="text-primary-400 text-sm font-semibold uppercase tracking-wider mb-2">Commercial Film</p>
                  <h3 className="text-xl font-bold text-white">Automotive Brand Launch Campaign</h3>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl">
              <img
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Place-Based Narrative"
                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 to-transparent flex items-end p-8">
                <div>
                  <p className="text-primary-400 text-sm font-semibold uppercase tracking-wider mb-2">Place-Based Narrative</p>
                  <h3 className="text-xl font-bold text-white">Destination Storytelling Series</h3>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Institutional Film"
                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 to-transparent flex items-end p-8">
                <div>
                  <p className="text-primary-400 text-sm font-semibold uppercase tracking-wider mb-2">Institutional Film</p>
                  <h3 className="text-xl font-bold text-white">Executive Leadership Documentary</h3>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl">
              <img
                src="https://images.pexels.com/photos/3379934/pexels-photo-3379934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Product Narrative"
                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 to-transparent flex items-end p-8">
                <div>
                  <p className="text-primary-400 text-sm font-semibold uppercase tracking-wider mb-2">Product Narrative</p>
                  <h3 className="text-xl font-bold text-white">Luxury Product Release Film</h3>
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
              Have a Story Worth Telling?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              We turn vision into cinema. Let us show you what your story could become.
            </p>
            <Button to="/contact" variant="accent" size="lg" className="text-lg px-12 py-6 font-bold">
              Start a Production
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CinematicProductionPage;
