
"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StatCardProps {
  largeText: string;
  smallText: string;
  backgroundImageUrl: string;
  aiHint: string;
}

const StatCard: React.FC<StatCardProps> = ({ largeText, smallText, backgroundImageUrl, aiHint }) => {
  return (
    <Card
      className="text-center border-border/50 shadow-xl h-full min-h-80 flex flex-col justify-center relative bg-cover bg-center rounded-lg overflow-hidden group transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      data-ai-hint={aiHint}
    >
      <div className="absolute inset-0 bg-black/60 z-0 group-hover:bg-black/75 transition-colors duration-300 ease-in-out"></div> {/* Overlay for text readability, darkens on hover */}
      <CardHeader className="relative z-10">
        {/* Ensure text color contrasts with the overlay/image */}
        <CardTitle className="text-4xl md:text-5xl font-bold text-primary-foreground">{largeText}</CardTitle>
      </CardHeader>
      <CardContent className="relative z-10">
         {/* Ensure text color contrasts with the overlay/image */}
        <p className="text-primary-foreground/80 text-sm md:text-base">{smallText}</p>
      </CardContent>
    </Card>
  );
};

const statsData: StatCardProps[] = [
  {
    largeText: '1000+',
    smallText: 'Events and Counting',
    backgroundImageUrl: 'https://picsum.photos/400/300?random=stat1',
    aiHint: 'event celebration',
  },
  {
    largeText: '11+',
    smallText: 'Years of Experience',
    backgroundImageUrl: 'https://picsum.photos/400/300?random=stat2',
    aiHint: 'business growth chart',
  },
  {
    largeText: '1.5M+',
    smallText: 'Audience Engagement',
    backgroundImageUrl: 'https://picsum.photos/400/300?random=stat3',
    aiHint: 'crowd concert',
  },
];

export function StatsSection() {
  return (
    <section
      id="stats"
      className="relative py-16 md:py-24 bg-background min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-primary animate-fadeInUp">
          Our Achievements
        </h2>
        <div className="grid md:grid-cols-3 gap-8 justify-items-stretch">
          {statsData.map((stat, index) => (
            <div key={index} className="animate-fadeInUp h-full" style={{ animationDelay: `${0.2 + index * 0.15}s` }}>
              <StatCard
                largeText={stat.largeText}
                smallText={stat.smallText}
                backgroundImageUrl={stat.backgroundImageUrl}
                aiHint={stat.aiHint}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

