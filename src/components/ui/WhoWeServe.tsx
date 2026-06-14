import React, { useRef, useEffect, useState } from 'react';

interface WhoWeServeProps {
  industries: string[];
  subtitle: string;
  variant?: 'light' | 'dark';
}

const MarqueeRow = ({ items, speed, direction }: { items: string[]; speed: number; direction: 'left' | 'right' }) => {
  const [offset, setOffset] = useState(direction === 'left' ? 0 : -50);
  const animRef = useRef<number | null>(null);

  useEffect(() => {
    let start: number | null = null;
    const pixelsPerFrame = speed;

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const px = (elapsed * pixelsPerFrame) / 1000;

      if (direction === 'left') {
        setOffset(-(px % 50));
      } else {
        setOffset(-50 + (px % 50));
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [speed, direction]);

  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden">
      <div
        className="flex gap-4 whitespace-nowrap"
        style={{ transform: `translateX(${offset}%)` }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium tracking-wide border transition-all duration-300 hover:scale-105 select-none"
            style={{
              borderColor: 'rgba(255,255,255,0.12)',
              background: 'rgba(255,255,255,0.04)',
              color: 'rgba(255,255,255,0.7)',
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

const StaticRow = ({ items, variant }: { items: string[]; variant: 'light' | 'dark' }) => {
  const isDark = variant === 'dark';

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {items.map((item, i) => (
        <span
          key={i}
          className={`inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium tracking-wide border transition-all duration-300 hover:scale-105 select-none ${
            isDark
              ? 'border-white/10 bg-white/[0.04] text-white/70 hover:bg-white/[0.08] hover:text-white/90'
              : 'border-gray-200 bg-white text-gray-700 hover:border-primary-200 hover:bg-primary-50 hover:text-primary-700 shadow-sm'
          }`}
        >
          {item}
        </span>
      ))}
    </div>
  );
};

const WhoWeServe = ({ industries, subtitle, variant = 'dark' }: WhoWeServeProps) => {
  const isDark = variant === 'dark';
  const midPoint = Math.ceil(industries.length / 2);
  const row1 = industries.slice(0, midPoint);
  const row2 = industries.slice(midPoint);

  return (
    <section className={`py-24 md:py-32 overflow-hidden ${isDark ? 'bg-navy-900' : 'bg-gray-50'}`}>
      <div className="container-custom mb-16">
        <p className={`text-xs font-semibold uppercase tracking-[0.3em] mb-4 ${isDark ? 'text-primary-400' : 'text-primary-600'}`}>
          Who We Serve
        </p>
        <h2 className={`text-3xl md:text-5xl font-bold mb-6 leading-tight max-w-3xl ${isDark ? 'text-white' : 'text-navy-900'}`}>
          Who We Serve
        </h2>
        <p className={`text-lg md:text-xl leading-relaxed max-w-2xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      </div>

      {/* Desktop: marquee rows */}
      <div className="hidden md:block space-y-4">
        <MarqueeRow items={row1} speed={12} direction="left" />
        <MarqueeRow items={row2} speed={9} direction="right" />
      </div>

      {/* Mobile: static pills */}
      <div className="md:hidden">
        <StaticRow items={industries} variant={variant} />
      </div>
    </section>
  );
};

export default WhoWeServe;
