import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollReveal } from '../../utils/useScrollReveal';

interface Testimonial {
  outcome: string;
  quote: string;
  author: string;
  position: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    outcome: "+187% Revenue",
    quote: "Stunmark transformed our brand into a complete operating system for growth. The impact was visible across every market we entered.",
    author: "Sarah Johnson",
    position: "CMO",
    company: "Vertex Global"
  },
  {
    outcome: "12.4M Views",
    quote: "The cinematic storytelling system they created became our brand's most powerful asset. Our flagship film reached 12.4M views organically, establishing us as a cultural authority.",
    author: "Michael Chen",
    position: "Brand Director",
    company: "Lumina Group"
  },
  {
    outcome: "-43% CAC",
    quote: "Their content ecosystem strategy fundamentally changed our unit economics. By building an always-on system, we reduced customer acquisition cost while increasing lifetime value.",
    author: "Jennifer Martinez",
    position: "Head of Growth",
    company: "Elevate Brands"
  },
  {
    outcome: "+320% Leads",
    quote: "The integrated brand and digital system positioned us as the premium choice in our category. Our qualified lead volume increased significantly, creating pricing power.",
    author: "David Park",
    position: "VP Marketing",
    company: "Meridian Financial"
  },
  {
    outcome: "4x ROAS",
    quote: "Everything was integrated under one strategic vision. Our return on ad spend improved dramatically. The brand system we now own scales infinitely.",
    author: "Alexandria Wei",
    position: "Director, Demand Gen",
    company: "Aurelia Tech"
  }
];

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!isAutoplay) return;

    autoplayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);

    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [isAutoplay]);

  const handlePrevious = () => {
    setIsAutoplay(false);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsAutoplay(false);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleMouseEnter = () => {
    setIsAutoplay(false);
    if (autoplayRef.current) clearInterval(autoplayRef.current);
  };

  const handleMouseLeave = () => {
    setIsAutoplay(true);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setTouchEnd(e.changedTouches[0].clientX);
    handleSwipe();
  };

  const handleSwipe = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrevious();
    }
  };

  const current = testimonials[activeIndex];

  return (
    <div
      className="w-full max-w-2xl mx-auto"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Editorial Testimonial Card */}
      <div className="bg-white border border-gray-200 rounded-lg p-10 space-y-6">
        {/* Outcome Badge */}
        <div className="text-xs font-semibold text-primary-600 uppercase tracking-wider">
          {current.outcome}
        </div>

        {/* Quote */}
        <blockquote>
          <p className="text-xl md:text-2xl font-light text-gray-900 leading-relaxed">
            "{current.quote}"
          </p>
        </blockquote>

        {/* Client Info - Editorial Format */}
        <div className="pt-4 border-t border-gray-100">
          <div className="text-base font-semibold text-gray-900 leading-tight">
            {current.author}
          </div>
          <div className="text-sm text-gray-600 leading-tight mt-1">
            {current.position}
          </div>
          <div className="text-sm font-medium text-navy-900 leading-tight mt-1">
            {current.company}
          </div>
        </div>
      </div>

      {/* Navigation Controls - Minimal */}
      <div className="flex items-center justify-between gap-4 mt-6 px-2">
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrevious}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={16} className="text-gray-600" />
          </button>
          <button
            onClick={handleNext}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight size={16} className="text-gray-600" />
          </button>
        </div>

        {/* Progress Dots */}
        <div className="flex items-center gap-1.5">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveIndex(index);
                setIsAutoplay(false);
              }}
              className={`rounded-full transition-all duration-500 ${
                index === activeIndex
                  ? 'bg-primary-600 w-5 h-1.5'
                  : 'bg-gray-300 w-1.5 h-1.5 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section
      ref={ref}
      className={`py-16 md:py-20 bg-white transition-all duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="px-4 md:px-6">
        <div className="max-w-2xl mx-auto mb-8">
          <p className="text-center text-sm font-semibold text-primary-600 uppercase tracking-wider mb-2">
            Client Outcomes
          </p>
          <p className="text-center text-gray-600 text-sm leading-relaxed">
            Measured in business results, not deliverables.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <TestimonialCarousel />
      </div>
    </section>
  );
};

export default TestimonialsSection;
