import React from 'react';
import { useScrollReveal } from '../../utils/useScrollReveal';

const PhilosophySection = () => {
  const { ref: headingRef, isVisible: headingVisible } = useScrollReveal(0.1);
  const { ref: ref1, isVisible: vis1 } = useScrollReveal(0.05);
  const { ref: ref2, isVisible: vis2 } = useScrollReveal(0.05);
  const { ref: ref3, isVisible: vis3 } = useScrollReveal(0.05);
  const { ref: ref4, isVisible: vis4 } = useScrollReveal(0.05);

  const principles = [
    {
      number: '01',
      title: 'Systems Over Deliverables',
      body: 'A brand film is a deliverable. A cinematic storytelling system is infrastructure. A logo is a mark. A brand language is an operating system. We build the latter because systems compound while deliverables depreciate.',
    },
    {
      number: '02',
      title: 'Culture Is the Medium',
      body: 'Brands do not exist in markets. They exist in culture. We build brands that understand the cultural currents they operate within, not chasing trends, but creating positions that audiences gravitate toward naturally.',
    },
    {
      number: '03',
      title: 'Integration Is the Advantage',
      body: 'When brand, story, experience, content, and growth work together, results multiply rather than add. This is not a theory. It is how the world\'s most powerful brands were built. We simply systematized it.',
    },
  ];

  return (
    <section className="relative bg-navy-900 text-white overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500 rounded-full blur-[128px]"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary-400 rounded-full blur-[128px]"></div>
      </div>

      <div className="relative container-custom py-24 md:py-36">
        {/* Opening statement */}
        <div
          ref={headingRef}
          className={`max-w-4xl mx-auto text-center mb-24 md:mb-32 transition-all duration-1000 ${headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="text-primary-400 font-semibold text-xs uppercase tracking-[0.35em] mb-8">Our Philosophy</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight">
            We do not make content.
          </h2>
          <div className="mt-4 h-1 w-16 bg-primary-500 mx-auto rounded-full"></div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight mt-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-primary-500">
              We build creative infrastructure.
            </span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mt-10">
            The difference between a creative vendor and a creative partner is the difference between a deliverable and a system. We build systems because systems compound while deliverables depreciate.
          </p>
        </div>

        {/* Principles */}
        <div className="max-w-5xl mx-auto">
          {principles.map((p, i) => {
            const refs = [ref1, ref2, ref3];
            const vis = [vis1, vis2, vis3];
            return (
              <React.Fragment key={p.number}>
                <div
                  ref={refs[i]}
                  className={`grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start transition-all duration-1000 ${vis[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="md:col-span-1 flex md:justify-center">
                    <span className="text-primary-500/30 text-6xl md:text-7xl font-bold leading-none">{p.number}</span>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">{p.title}</h3>
                  </div>
                  <div className="md:col-span-7">
                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed">{p.body}</p>
                  </div>
                </div>
                {i < principles.length - 1 && (
                  <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent my-14 md:my-20"></div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Closing statement */}
        <div
          ref={ref4}
          className={`max-w-3xl mx-auto text-center mt-24 md:mt-32 transition-all duration-1000 ${vis4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent mb-12"></div>
          <p className="text-primary-300 text-xl md:text-2xl font-semibold leading-relaxed italic">
            "The brands that endure are not the ones with the most content; they are the ones with the most coherent creative systems."
          </p>
          <div className="h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent mt-12"></div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
