
import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ClientLogoProps {
  src: string; // src will be a string path relative to the public folder
  alt: string;
  width?: number; // Add width prop
  height?: number; // Add height prop
}

// Updated default width and height for logos to 100
const ClientLogo: React.FC<ClientLogoProps> = ({ src, alt, width = 100, height = 100 }) => (
  <div className="relative mx-4 flex items-center justify-center"> {/* Added mx-4 for spacing and centering */}
    <Image
      src={src} // Use the string path directly
      alt={alt}
      width={width} // Pass width prop
      height={height} // Pass height prop
      className="grayscale hover:grayscale-0 transition-all duration-300 object-contain" // Ensure object-contain is used
      data-ai-hint="company logo"
      unoptimized // Add unoptimized prop to bypass Next.js optimization for debugging
    />
  </div>
);

// Updated logos to use local paths relative to the /public directory
// Assumes images named 1.jpeg, 2.jpeg, etc., exist directly in public/
const logos = [
  { src: '/1.jpeg', alt: 'Client Logo 1' },
  { src: '/2.jpeg', alt: 'Client Logo 2' },
  { src: '/3.jpeg', alt: 'Client Logo 3' },
  { src: '/4.jpeg', alt: 'Client Logo 4' },
  { src: '/5.jpeg', alt: 'Client Logo 5' },
  { src: '/6.jpeg', alt: 'Client Logo 6' },
  { src: '/7.jpeg', alt: 'Client Logo 7' },
  { src: '/8.jpeg', alt: 'Client Logo 8' },
  { src: '/9.jpeg', alt: 'Client Logo 9' },
  { src: '/10.jpeg', alt: 'Client Logo 10' },
  { src: '/11.jpeg', alt: 'Client Logo 11' },
  { src: '/12.jpeg', alt: 'Client Logo 12' },
  { src: '/13.jpeg', alt: 'Client Logo 13' },
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
            // Ensure width and height are explicitly passed here, using defaults from ClientLogo
             <ClientLogo key={`${logo.alt}-${index}`} src={logo.src} alt={logo.alt} />
          ))}
        </div>
      </div>
    </div>
  );
}
