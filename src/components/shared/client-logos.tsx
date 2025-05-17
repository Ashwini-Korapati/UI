
"use client";
import React from 'react';
import Image from 'next/image';

interface ClientLogoProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

const ClientLogo: React.FC<ClientLogoProps> = ({ src, alt, width = 150, height = 150, className }) => (
  <div className={`${className} border-2 border-red-500 p-1 flex items-center justify-center`}> {/* Temporary border for debugging */}
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="transition-transform duration-300 ease-in-out hover:scale-110 object-contain"
      data-ai-hint="company logo"
      unoptimized // Good for external placeholders and if local images have issues
    />
  </div>
);

// IMPORTANT: Please rename files with spaces or commas in your /public directory
// For example, 'BEL ,LOGO.png' should be 'BEL-LOGO.png'
// Then update the paths below to match the new filenames.
const logosList = [
  { src: 'https://placehold.co/150x150.png', alt: 'Placeholder Logo Test' }, // Test placeholder
  { src: '/ABB.png', alt: 'ABB Logo' },
  { src: '/ADARSH.png', alt: 'ADARSH Logo' },
  { src: '/AGILON HEALTH LOGO.png', alt: 'AGILON HEALTH LOGO' },
  { src: '/AKMI.png', alt: 'AKMI Logo' },
  { src: '/ANTHOLOGY LOGO.png', alt: 'ANTHOLOGY LOGO' },
  { src: '/AUTOLIV.png', alt: 'AUTOLIV Logo' },
  { src: '/AVPL LOGO.png', alt: 'AVPL LOGO' },
  { src: '/BEL-LOGO.png', alt: 'BEL LOGO' }, // Assumed rename
  { src: '/CARELON-LOGO.png', alt: 'CARELON LOGO' }, // Assumed rename
  { src: '/CDM-LOGO.png', alt: 'CDM LOGO' }, // Assumed rename
  { src: '/FORTERRRO.png', alt: 'FORTERRRO Logo' },
  { src: '/HDFC.png', alt: 'HDFC Logo' },
  { src: '/INDIA FIRST LOGO.png', alt: 'INDIA FIRST LOGO' },
  { src: '/INDUS LOGO.png', alt: 'INDUS LOGO' },
  { src: '/kennametal-logo.png', alt: 'Kennametal Logo' }, // Assumed rename
  { src: '/LSEG.png', alt: 'LSEG Logo' },
  { src: '/MERCARI LOGO.png', alt: 'MERCARI LOGO' },
  { src: '/MUTHOOT LOGO.png', alt: 'MUTHOOT LOGO' },
  { src: '/NINE DOTS.png', alt: 'NINE DOTS Logo' },
  { src: '/QLAR.png', alt: 'QLAR Logo' },
  { src: '/quadragen.png', alt: 'Quadragen Logo' },
  { src: '/RSA LOGO.png', alt: 'RSA LOGO' },
  { src: '/RUSH.png', alt: 'RUSH Logo' },
  { src: '/STG LAB.png', alt: 'STG LAB Logo' },
  { src: '/TALISMA.png', alt: 'TALISMA Logo' },
  { src: '/TR LOGO.png', alt: 'TR LOGO' },
  { src: '/UI PATH LOGO.png', alt: 'UI PATH LOGO' },
  { src: '/UST LOGO.png', alt: 'UST LOGO' },
  { src: '/WENGER LOGO.png', alt: 'WENGER LOGO' },
  { src: '/YES BANK LOGO.png', alt: 'YES BANK LOGO' }
];

export function ClientLogos() {
  // Duplicate logos for seamless marquee effect
  const duplicatedLogos = [...logosList, ...logosList];

  return (
    <div className="w-full max-w-screen-xl mx-auto overflow-hidden">
      <h3 className="text-center text-3xl md:text-4xl font-bold text-primary mb-40 animate-fadeInUp">
        Trusted By
      </h3>
      <div className="flex animate-marquee whitespace-nowrap">
        {duplicatedLogos.map((logo, index) => (
          <ClientLogo
            key={`${logo.alt}-${index}`}
            src={logo.src}
            alt={logo.alt}
            className="mx-4" 
          />
        ))}
      </div>
    </div>
  );
}
