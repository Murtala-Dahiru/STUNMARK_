import React from 'react';

const StunmarkFavicon = () => {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="64" height="64" rx="8" fill="#000" />

      {/* Yellow accent mark */}
      <path
        d="M16 32 L32 32 M32 16 L32 48 M48 32 L32 32"
        stroke="#FFD700"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* SM lettermark */}
      <text
        x="32"
        y="36"
        fontFamily="system-ui, -apple-system"
        fontSize="20"
        fontWeight="900"
        fill="#fff"
        textAnchor="middle"
        dominantBaseline="central"
      >
        S
      </text>
    </svg>
  );
};

export default StunmarkFavicon;
