
import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ClientLogoProps {
  src: string;
  alt: string;
  width?: number; // Add width prop
  height?: number; // Add height prop
}

// Updated default width and height for logos to 100
const ClientLogo: React.FC<ClientLogoProps> = ({ src, alt, width = 100, height = 100 }) => (
  <div className="relative mx-4 flex items-center justify-center" style={{ width: `${width}px`, height: `${height}px` }}> {/* Added mx-4 for spacing and centering */}
    <Image
      src={src} // Use the string path directly
      alt={alt}
      width={width} // Pass width prop
      height={height} // Pass height prop
      className="grayscale hover:grayscale-0 transition-all duration-300 object-contain" // Ensure object-contain is used
      data-ai-hint="company logo"
      unoptimized // Add unoptimized prop to bypass Next.js optimization
    />
  </div>
);

// Updated logos to use local paths relative to the /public directory
// Assumes images named 1.jpeg, 2.jpeg, etc., exist directly in public/
// Updated alt text based on previous user input/context
const logos = [
  { src: '/1.jpeg', alt: 'Blackline Logo' }, // Assuming 1.jpeg is Blackline based on previous context
  { src: '/2.jpeg', alt: 'Agilon Health Logo' }, // Assuming 2.jpeg is Agilon Health
  { src: '/3.jpeg', alt: 'Archer Logo' }, // Updated alt text
  { src: '/4.jpeg', alt: 'CDM Smith Logo' }, // Assuming 4.jpeg is CDM Smith
  { src: '/5.jpeg', alt: 'RSA Logo' }, // Assuming 5.jpeg is RSA
  { src: '/6.jpeg', alt: 'Razorpay Logo' }, // Assuming 6.jpeg is Razorpay
  { src: '/7.jpeg', alt: 'Client Logo 7' }, // Keep generic or provide specific name
  { src: '/8.jpeg', alt: 'Client Logo 8' },
  { src: '/9.jpeg', alt: 'Client Logo 9' },
  { src: '/10.jpeg', alt: 'Client Logo 10' },
  { src: '/11.jpeg', alt: 'Client Logo 11' },
  { src: '/12.jpeg', alt: 'Client Logo 12' },
  { src: '/13.jpeg', alt: 'Client Logo 13' },
];

export function ClientLogos() {
  // Duplicate logos for seamless looping effect - kept in case needed later
  const extendedLogos = [...logos, ...logos];

  return (
    <div className="container mx-auto">
      <h3 className="text-center text-lg md:text-xl font-semibold text-muted-foreground mb-6">Trusted By</h3>
      {/* Removed marquee container and content wrapper */}
      <div className="flex flex-wrap items-center justify-center gap-4"> {/* Use flex-wrap for responsiveness */}
        {logos.map((logo, index) => ( // Iterate over original logos
          // Ensure width and height are explicitly passed here, using defaults from ClientLogo
           <ClientLogo key={`${logo.alt}-${index}`} src={logo.src} alt={logo.alt} width={100} height={100} />
        ))}
      </div>
    </div>
  );
}
