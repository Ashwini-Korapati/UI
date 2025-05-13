
"use client";

import React from 'react';

interface StatCardProps {
  largeText: string;
  smallText: string;
}

const StatCard: React.FC<StatCardProps> = ({ largeText, smallText }) => {
  return (
    <div className="outer-stat-card">
      <div className="dot-stat-card"></div>
      <div className="inner-stat-card">
        <div className="ray-stat-card"></div>
        {/* Image removed */}
        <div className="text-stat-card">{largeText}</div>
        <div className="small-text-stat-card">{smallText}</div>
        <div className="line-stat-card topl-stat-card"></div>
        <div className="line-stat-card leftl-stat-card"></div>
        <div className="line-stat-card bottoml-stat-card"></div>
        <div className="line-stat-card rightl-stat-card"></div>
      </div>
    </div>
  );
};

const statsData: Omit<StatCardProps, 'imageSrc' | 'imageAlt' | 'imageHint'>[] = [ // Adjusted type
  {
    largeText: '1000+',
    smallText: 'Events and Counting',
  },
  {
    largeText: '11+',
    smallText: 'Years of Experience',
  },
  {
    largeText: '1.5M+',
    smallText: 'Audience Engagement',
  },
];

export function StatsSection() {
  return (
    <section id="stats" className="py-16 md:py-24 bg-background min-h-screen flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 justify-items-center">
          {statsData.map((stat, index) => (
            <div key={index} className="animate-fadeInUp" style={{ animationDelay: `${0.2 + index * 0.15}s` }}>
              <StatCard
                largeText={stat.largeText}
                smallText={stat.smallText}
                // imageSrc, imageAlt, imageHint props removed
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
