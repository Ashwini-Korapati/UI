
import React from 'react';
import Image, { type StaticImageData } from 'next/image';
import { cn } from '@/lib/utils';

// Images will be referenced by their public path strings

interface ClientLogoProps {
  src: string; // src will be a string path
  alt: string;
  width?: number;
  height?: number;
}

const ClientLogo: React.FC<ClientLogoProps> = ({ src, alt, width = 120, height = 60 }) => (
  <div className="relative mx-4" style={{ width: `${width}px`, height: `${height}px` }}> {/* Added mx-4 for spacing */}
    <Image
      src={src} // Use the string path directly
      alt={alt}
      width={width}
      height={height}
      className="grayscale hover:grayscale-0 transition-all duration-300 object-contain" // Added object-contain
      data-ai-hint="company logo"
    />
  </div>
);

// Use string paths relative to the /public directory
const logos: { src: string; alt: string }[] = [
  { src: '/assets/clients/1.jpeg', alt: 'Client Logo 1' },
  { src: '/assets/clients/2.jpeg', alt: 'Client Logo 2' },
  { src: '/assets/clients/3.jpeg', alt: 'Client Logo 3' },
  { src: '/assets/clients/4.jpeg', alt: 'Client Logo 4' },
  { src: '/assets/clients/5.jpeg', alt: 'Client Logo 5' },
  { src: '/assets/clients/6.jpeg', alt: 'Client Logo 6' },
  { src: '/assets/clients/7.jpeg', alt: 'Client Logo 7' },
  { src: '/assets/clients/8.jpeg', alt: 'Client Logo 8' },
  { src: '/assets/clients/9.jpeg', alt: 'Client Logo 9' },
  { src: '/assets/clients/10.jpeg', alt: 'Client Logo 10' },
  { src: '/assets/clients/11.jpeg', alt: 'Client Logo 11' },
  { src: '/assets/clients/12.jpeg', alt: 'Client Logo 12' },
  { src: '/assets/clients/13.jpeg', alt: 'Client Logo 13' },
];

export function ClientLogos() {
  // Duplicate logos for seamless looping effect
  const extendedLogos = [...logos, ...logos];

  return (
    <div className="container mx-auto">
      <h3 className="text-center text-lg md:text-xl font-semibold text-muted-foreground mb-6">Trusted By</h3>
      <div className="marquee">
        <div className="marquee-content flex items-center"> {/* Added flex items-center */}
          {extendedLogos.map((logo, index) => (
            <ClientLogo key={`${logo.alt}-${index}`} src={logo.src} alt={logo.alt} />
          ))}
        </div>
      </div>
    </div>
  );
}
