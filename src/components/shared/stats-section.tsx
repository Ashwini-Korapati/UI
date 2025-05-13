
"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StatCardProps {
  largeText: string;
  smallText: string;
}

const StatCard: React.FC<StatCardProps> = ({ largeText, smallText }) => {
  return (
    <Card className="text-center bg-card/80 backdrop-blur-sm border-border/50 shadow-xl h-full flex flex-col justify-center">
      <CardHeader>
        <CardTitle className="text-4xl md:text-5xl font-bold text-primary">{largeText}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm md:text-base">{smallText}</p>
      </CardContent>
    </Card>
  );
};

const statsData: StatCardProps[] = [
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
    <section
      id="stats"
      className="relative py-16 md:py-24 bg-background min-h-screen flex flex-col items-center justify-center px-4 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('https://picsum.photos/1920/1080?random=stats-background')" }}
      data-ai-hint="business metrics" // AI hint for background image
    >
      <div className="absolute inset-0 bg-black/60 z-0"></div> {/* Overlay for better text contrast */}
      <div className="relative z-10 w-full max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-primary-foreground animate-fadeInUp">
          Our Achievements
        </h2>
        <div className="grid md:grid-cols-3 gap-8 justify-items-stretch">
          {statsData.map((stat, index) => (
            <div key={index} className="animate-fadeInUp h-full" style={{ animationDelay: `${0.2 + index * 0.15}s` }}>
              <StatCard
                largeText={stat.largeText}
                smallText={stat.smallText}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
