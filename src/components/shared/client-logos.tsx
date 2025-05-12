import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ClientLogoProps {
  src: string;
  alt: string;
  width?: number; // Add width prop
  height?: number; // Add height prop
}

// Updated default width and height for logos to 150
const ClientLogo: React.FC<ClientLogoProps> = ({ src, alt, width = 150, height = 150 }) => (
  <div className="relative mx-4 flex items-center justify-center" style={{ width: `${width}px`, height: `${height}px` }}> {/* Added mx-4 for spacing and centering */}
    <Image
      src={src} // Use the string path directly
      alt={alt}
      width={width} // Pass width prop
      height={height} // Pass height prop
      // Removed grayscale, added hover scale and transition
      className="transition-transform duration-300 ease-in-out hover:scale-110 object-contain"
      data-ai-hint="company logo"
      unoptimized // Add unoptimized prop to bypass Next.js optimization
    />
  </div>
);

// Updated logos to use local paths relative to the /public directory
// Assumes images named 1.jpeg, 2.jpeg, etc., exist directly in public/
// Updated alt text based on previous user input/context
// Removed 3rd logo (Archer) and one LSEG logo
const logos = [
  { src: '/1.jpeg', alt: 'Blackline Logo' },
  { src: '/2.jpeg', alt: 'Agilon Health Logo' },
  // { src: '/3.jpeg', alt: 'Archer Logo' }, // Removed 3rd logo
  { src: '/4.jpeg', alt: 'CDM Smith Logo' },
  { src: '/5.jpeg', alt: 'RSA Logo' },
  { src: '/6.jpeg', alt: 'Razorpay Logo' },
  { src: '/7.jpeg', alt: 'LSEG Logo' },
  // { src: '/8.jpeg', alt: 'LSEG Logo' }, // Removed duplicate LSEG logo
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
      <h3 className="text-center text-lg md:text-xl font-semibold text-muted-foreground mb-10">Trusted By</h3>
      {/* Re-introduce marquee structure */}
      <div className="marquee">
        <div className="marquee-content">
          {extendedLogos.map((logo, index) => ( // Iterate over duplicated logos for marquee
            <ClientLogo key={`${logo.alt}-${index}`} src={logo.src} alt={logo.alt} />
          ))}
        </div>
      </div>
    </div>
  );
}
