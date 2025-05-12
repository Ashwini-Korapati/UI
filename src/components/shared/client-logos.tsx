
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
    />
  </div>
);

// Placeholder logos - replace with actual client logos
const logos = [
  { src: 'https://picsum.photos/120/60?random=1', alt: 'Client Logo 1' },
  { src: 'https://picsum.photos/120/60?random=2', alt: 'Client Logo 2' },
  { src: 'https://picsum.photos/120/60?random=3', alt: 'Client Logo 3' },
  { src: 'https://picsum.photos/120/60?random=4', alt: 'Client Logo 4' },
  { src: 'https://picsum.photos/120/60?random=5', alt: 'Client Logo 5' },
  { src: 'https://picsum.photos/120/60?random=6', alt: 'Client Logo 6' },
  { src: 'https://picsum.photos/120/60?random=7', alt: 'Client Logo 7' },
  { src: 'https://picsum.photos/120/60?random=8', alt: 'Client Logo 8' },
];

export function ClientLogos() {
  // Duplicate logos for seamless looping effect
  const extendedLogos = [...logos, ...logos];

  return (
    <div className="bg-secondary py-8 md:py-12">
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
    </div>
  );
}
