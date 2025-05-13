
"use client";

import React from 'react';
import Image from 'next/image';

interface StatCardProps {
  largeText: string;
  smallText: string;
  imageSrc: string;
  imageAlt: string;
  imageHint: string;
}

const StatCard: React.FC<StatCardProps> = ({ largeText, smallText, imageSrc, imageAlt, imageHint }) => {
  return (
    <div className="outer-stat-card">
      <div className="dot-stat-card"></div>
      <div className="inner-stat-card">
        <div className="ray-stat-card"></div>
        <div className="mb-3 self-center"> {/* Added margin and centered the image */}
          <Image 
            src={imageSrc} 
            alt={imageAlt} 
            width={50} // Adjusted size
            height={50} // Adjusted size
            data-ai-hint={imageHint} 
            className="rounded-md" // Changed to rounded-md for a less circular look if preferred
          />
        </div>
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

const statsData: StatCardProps[] = [
  {
    largeText: '1000+',
    smallText: 'Events and Counting',
    imageSrc: 'https://picsum.photos/seed/events/60/60',
    imageAlt: 'Events icon',
    imageHint: 'calendar celebration',
  },
  {
    largeText: '11+',
    smallText: 'Years of Experience',
    imageSrc: 'https://picsum.photos/seed/experience/60/60',
    imageAlt: 'Experience icon',
    imageHint: 'trophy award',
  },
  {
    largeText: '1.5M+',
    smallText: 'Audience Engagement',
    imageSrc: 'https://picsum.photos/seed/audience/60/60',
    imageAlt: 'Audience icon',
    imageHint: 'people crowd',
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
                imageSrc={stat.imageSrc}
                imageAlt={stat.imageAlt}
                imageHint={stat.imageHint}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

