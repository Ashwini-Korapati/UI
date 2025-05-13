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
  <div className="flex items-center justify-center p-2"> {/* Removed mx-4, padding added for spacing within cell */}
    <Image
      src={src} // Use the string path directly
      alt={alt}
      width={width} // Pass width prop
      height={height} // Pass height prop
      className="transition-transform duration-300 ease-in-out hover:scale-110 object-contain" // Kept hover effect, changed to object-contain
      data-ai-hint="company logo"
      unoptimized // Add unoptimized prop to bypass Next.js optimization
    />
  </div>
);

const logos = [
  { src: '/1.jpeg', alt: 'Blackline Logo' },
  { src: '/2.jpeg', alt: 'Agilon Health Logo' },
  // { src: '/3.jpeg', alt: 'Archer Logo' }, // Removed 3rd logo as per previous request
  { src: '/4.jpeg', alt: 'CDM Smith Logo' },
  { src: '/5.jpeg', alt: 'RSA Logo' },
  { src: '/6.jpeg', alt: 'Razorpay Logo' },
  { src: '/7.jpeg', alt: 'LSEG Logo' },
  // { src: '/8.jpeg', alt: 'LSEG Logo' }, // Removed duplicate LSEG logo as per previous request
  { src: '/9.jpeg', alt: 'Client Logo 9' },
  { src: '/10.jpeg', alt: 'Client Logo 10' },
  { src: '/11.jpeg', alt: 'Client Logo 11' },
  { src: '/12.jpeg', alt: 'Client Logo 12' },
];

export function ClientLogos() {
  return (
    <div className="w-full max-w-screen-xl mx-auto"> {/* Added max-width and mx-auto for centering */}
      <h3 className="text-center text-3xl md:text-4xl font-bold text-primary mb-16 animate-fadeInUp"> {/* Reduced mb, changed animation class */}
        Trusted By
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-10 place-items-center"> {/* Responsive grid with gaps */}
        {logos.map((logo, index) => (
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
  );
}