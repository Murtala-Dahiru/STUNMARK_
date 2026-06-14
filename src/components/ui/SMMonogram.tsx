import React from 'react';

interface SMMonogramProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const SMMonogram = ({ size = 'md', className = '' }: SMMonogramProps) => {
  const sizeMap = {
    sm: 24,
    md: 32,
    lg: 48,
  };

  const sz = sizeMap[size];

  return (
    <svg
      width={sz}
      height={sz}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer circle frame */}
      <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />

      {/* S - curved letterform */}
      <path
        d="M 24 20 Q 20 20 20 24 Q 20 27 24 28 Q 28 29 28 32 Q 28 35 24 36 Q 20 36 20 40 Q 20 44 24 44 Q 28 44 32 42"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* M - vertical letterforms */}
      <path
        d="M 42 44 L 42 20 M 42 20 L 50 32 L 58 20 M 58 20 L 58 44"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Center accent dot */}
      <circle cx="32" cy="32" r="2" fill="currentColor" opacity="0.6" />
    </svg>
  );
};

export default SMMonogram;
