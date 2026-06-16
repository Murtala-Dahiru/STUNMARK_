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
    outcome: "Founder's Statement",
    quote: "We built Stunmark on a simple belief: great brands are not built through isolated deliverables. They are built through systems, stories, experiences, and consistent execution. Our goal is to help ambitious organizations communicate with clarity, grow with intention, and create work that endures.",
    author: "Murtala Dahiru Kawu",
    position: "Founder & CEO",
    company: "NextMav"
  },
  {
    outcome: "Platform Migration",
    quote: "Stunmark approached our commerce redesign not just as a design exercise, but as a core business driver. Their technical and design teams integrated seamlessly with our developers. The resulting platform didn't just improve load times; it clarified our offering and lifted average order value by 34%.",
    author: "Helena Rostova",
    position: "VP of Digital Commerce",
    company: "Aethel Research"
  },
  {
    outcome: "Narrative & Authority",
    quote: "Our brand narrative was fragmented across multiple product lines. Stunmark helped us synthesize our story into a singular, high-production cinematic campaign that resonated globally. Their creative team handled the production with an editorial rigor that respected our field's complexity.",
    author: "Dr. Aris Thorne",
    position: "Director of Brand & Communications",
    company: "Aether Bio"
  },
  {
    outcome: "Unit Economics",
    quote: "Rather than running ad-hoc marketing campaigns, Stunmark helped us build a systematic content ecosystem. By focusing on platform-native editorial content and structured growth channels, they helped stabilize our customer acquisition costs while significantly expanding our organic reach.",
    author: "Kemi Adebayo",
    position: "Co-Founder",
    company: "Kora Health"
  },
  {
    outcome: "Category Leadership",
    quote: "The collaborative workshops with Stunmark's strategists forced us to make difficult decisions about our market positioning. They didn't just deliver a brand book; they gave us a framework to think about our category, which has since guided our product and marketing teams across three continents.",
    author: "Sven Lindstrom",
    position: "CEO",
    company: "Norse Logistics"
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
