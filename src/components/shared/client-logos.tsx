
"use client";
import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ClientLogoProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

// Updated default width and height for logos to 150
const ClientLogo: React.FC<ClientLogoProps> = ({ src, alt, width = 150, height = 150 }) => (
  <div className="relative mx-4 flex items-center justify-center" style={{ width: `${width}px`, height: `${height}px` }}> {/* Added mx-4 for spacing and centering */}
    <Image
      src={src} // Use the string path directly
      alt={alt}
      width={width} // Pass width prop
      height={height} // Pass height prop
      // Use object-fit: cover to fill container and clip, simulating crop
      className="transition-transform duration-300 ease-in-out hover:scale-110 object-cover"
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
  // { src: '/13.jpeg', alt: 'Client Logo 13' },
];

export function ClientLogos() {
  // Duplicate logos for seamless looping effect
  const extendedLogos = [...logos, ...logos];

  return (
    // Removed container mx-auto, using full width with padding from parent section
    <div className="w-full">
      {/* Increased font size and ensured boldness */}
      <h3 className="text-center text-3xl md:text-4xl font-bold text-primary mb-40 animate-fade-in">
        Trusted By
      </h3>
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 2s ease-in-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .marquee {
          overflow: hidden;
          display: flex; /* Use flexbox for horizontal alignment */
          align-items: center; /* Center items vertically */
          width: 100%; /* Ensure marquee takes full width */
        }
        .marquee-content {
          display: flex;
          align-items: center; /* Ensure items within marquee-content are vertically aligned */
        }
        /* Optional: Add vertical alignment to the images or their containers */
        .marquee-content > div { /* Target the container div for each logo */
          vertical-align: middle;
        }
      `}</style>
      {/* Re-introduce marquee structure */}
      <div className="marquee">
        <div className="marquee-content">
          {extendedLogos.map((logo, index) => ( // Iterate over duplicated logos for marquee
 <ClientLogo
 key={`${logo.alt}-${index}`}
 src={logo.src}
 alt={logo.alt}
 // Define specific sizes for certain logos if needed, otherwise use default
 width={['/1.jpeg', '/4.jpeg', '/5.jpeg', '/11.jpeg', '/12.jpeg'].includes(logo.src) ? 200 : 150}
 height={['/1.jpeg', '/4.jpeg', '/5.jpeg', '/11.jpeg', '/12.jpeg'].includes(logo.src) ? 200 : 150}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
