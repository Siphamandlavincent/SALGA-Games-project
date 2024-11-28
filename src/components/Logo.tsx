import React from 'react';

export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        className="flex-shrink-0"
      >
        <circle cx="20" cy="20" r="20" fill="#22c55e" />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="white"
          fontSize="20"
          fontWeight="bold"
          fontFamily="Arial"
        >
          S
        </text>
      </svg>
      <span className="text-white font-bold text-xl">SPHA SOLUTIONS</span>
    </div>
  );
}