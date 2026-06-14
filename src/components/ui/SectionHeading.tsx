import React from 'react';

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  center?: boolean;
  lightMode?: boolean;
  className?: string;
};

const SectionHeading = ({
  title,
  subtitle,
  center = false,
  lightMode = false,
  className = '',
}: SectionHeadingProps) => {
  return (
    <div 
      className={`mb-12 ${center ? 'text-center mx-auto' : ''} ${className}`}
      style={{ maxWidth: center ? '768px' : 'none' }}
    >
      <h2 
        className={`text-3xl md:text-4xl font-bold mb-4 ${
          lightMode ? 'text-white' : 'text-navy-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg md:text-xl leading-relaxed ${
            lightMode ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;