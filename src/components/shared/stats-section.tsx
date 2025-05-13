
"use client";

import Image from 'next/image';
import React from 'react';

interface StatCardProps {
  imageUrl: string;
  largeText: string;
  smallText: string;
  aiHint: string;
}

const StatCard: React.FC<StatCardProps> = ({ imageUrl, largeText, smallText, aiHint }) => {
  return (
    <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-xl group">
      <Image
        src={imageUrl}
        alt={smallText}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-500 group-hover:scale-110"
        data-ai-hint={aiHint}
      />
      <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
        <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-md">
          {largeText}
        </h3>
        <p className="text-sm md:text-base font-semibold text-neutral-200 uppercase tracking-wider drop-shadow-sm">
          {smallText}
        </p>
      </div>
    </div>
  );
};

const statsData = [
  {
    imageUrl: 'https://picsum.photos/600/400?random=events',
    largeText: '1000+',
    smallText: 'Events and Counting',
    aiHint: 'crowd event',
  },
  {
    imageUrl: 'https://picsum.photos/600/400?random=stage',
    largeText: '11+',
    smallText: 'Years of Experience',
    aiHint: 'event stage',
  },
  {
    imageUrl: 'https://picsum.photos/600/400?random=audience',
    largeText: '1.5M+',
    smallText: 'Audience Engagement',
    aiHint: 'happy audience',
  },
];

export function StatsSection() {
  return (
    <section id="stats" className="py-16 md:py-24 bg-background min-h-screen flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {statsData.map((stat, index) => (
            <div key={index} className="animate-fadeInUp" style={{ animationDelay: `${0.2 + index * 0.15}s` }}>
              <StatCard
                imageUrl={stat.imageUrl}
                largeText={stat.largeText}
                smallText={stat.smallText}
                aiHint={stat.aiHint}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
