
import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ClientLogoProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const ClientLogo: React.FC<ClientLogoProps> = ({ src, alt, width = 120, height = 60 }) => (
  <div className="relative" style={{ width: `${width}px`, height: `${height}px` }}>
    <Image
      src={src}
      alt={alt}
      layout="fill"
      objectFit="contain"
      className="grayscale hover:grayscale-0 transition-all duration-300"
      data-ai-hint="company logo"
      unoptimized // Added because local images might not be optimized by default build process
    />
  </div>
);

// Updated logos to use local paths relative to the /public directory
// Assumes images named 1.png, 2.png, etc., exist in public/assets/client/
const logos = [
  { src: '/assets/client/1.png', alt: 'Client Logo 1' },
  { src: '/assets/client/2.png', alt: 'Client Logo 2' },
  { src: '/assets/client/3.png', alt: 'Client Logo 3' },
  { src: '/assets/client/4.png', alt: 'Client Logo 4' },
  { src: '/assets/client/5.png', alt: 'Client Logo 5' },
  { src: '/assets/client/6.png', alt: 'Client Logo 6' },
  { src: '/assets/client/7.png', alt: 'Client Logo 7' },
  { src: '/assets/client/8.png', alt: 'Client Logo 8' },
];

export function ClientLogos() {
  // Duplicate logos for seamless looping effect
  const extendedLogos = [...logos, ...logos];

  return (
    // Removed bg-secondary and padding classes, moved to Footer component
    <div className="container mx-auto">
      <h3 className="text-center text-lg md:text-xl font-semibold text-muted-foreground mb-6">Trusted By</h3>
      <div className="marquee">
        <div className="marquee-content">
          {extendedLogos.map((logo, index) => (
            <ClientLogo key={`${logo.alt}-${index}`} src={logo.src} alt={logo.alt} />
          ))}
        </div>
      </div>
    </div>
  );
}

