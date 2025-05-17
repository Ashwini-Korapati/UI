
"use client";
import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ClientLogoProps {
  src: string;
  alt: string;
}

const ClientLogo: React.FC<ClientLogoProps> = ({ src, alt }) => (
  // Each logo container will be flex-shrink-0 to maintain its size in the flex marquee
  // Added padding and margin for spacing, and size constraints
  <div className="flex-shrink-0 p-2 mx-4 flex items-center justify-center w-28 h-28"> {/* 112px by 112px container */}
    <Image
      src={src}
      alt={alt}
      width={100} // Set desired width for the image itself
      height={100} // Set desired height for the image itself
      className="object-contain transition-transform duration-300 ease-in-out hover:scale-110" // object-contain to fit within bounds, hover effect
      data-ai-hint="company logo"
    />
  </div>
);

// IMPORTANT: Ensure your image files in the /public directory are named EXACTLY as below,
// especially removing spaces and special characters (use hyphens instead).
const logosList = [
  { src: '/ABB.png', alt: 'ABB Logo' },
  { src: '/ADARSH.png', alt: 'ADARSH Logo' },
  { src: '/AGILON-HEALTH-LOGO.png', alt: 'AGILON HEALTH LOGO' },
  { src: '/AKMI.png', alt: 'AKMI Logo' },
  { src: '/ANTHOLOGY-LOGO.png', alt: 'ANTHOLOGY LOGO' },
  { src: '/AUTOLIV.png', alt: 'AUTOLIV Logo' },
  { src: '/AVPL-LOGO.png', alt: 'AVPL LOGO' },
  { src: '/BEL-LOGO.png', alt: 'BEL Logo' },
  { src: '/CARELON-LOGO.png', alt: 'CARELON Logo' },
  { src: '/CDM-LOGO.png', alt: 'CDM Logo' },
  { src: '/FORTERRRO.png', alt: 'FORTERRRO Logo' },
  { src: '/HDFC.png', alt: 'HDFC Logo' },
  { src: '/INDIA-FIRST-LOGO.png', alt: 'INDIA FIRST LOGO' },
  { src: '/INDUS-LOGO.png', alt: 'INDUS LOGO' },
  { src: '/kennametal-logo.png', alt: 'Kennametal Logo' },
  { src: '/LSEG.png', alt: 'LSEG Logo' },
  { src: '/MERCARI-LOGO.png', alt: 'MERCARI LOGO' },
  { src: '/MUTHOOT-LOGO.png', alt: 'MUTHOOT LOGO' },
  { src: '/NINE-DOTS.png', alt: 'NINE DOTS Logo' },
  { src: '/QLAR.png', alt: 'QLAR Logo' },
  { src: '/quadragen.png', alt: 'Quadragen Logo' },
  { src: '/RSA-LOGO.png', alt: 'RSA LOGO' },
  { src: '/RUSH.png', alt: 'RUSH Logo' },
  { src: '/STG-LAB.png', alt: 'STG LAB Logo' },
  { src: '/TALISMA.png', alt: 'TALISMA Logo' },
  { src: '/TR-LOGO.png', alt: 'TR LOGO' },
  { src: '/UI-PATH-LOGO.png', alt: 'UI PATH LOGO' },
  { src: '/UST-LOGO.png', alt: 'UST LOGO' },
  { src: '/WENGER-LOGO.png', alt: 'WENGER LOGO' },
  { src: '/YES-BANK-LOGO.png', alt: 'YES BANK LOGO' }
];


export function ClientLogos() {
  // Duplicate logos for seamless looping effect
  const extendedLogos = [...logosList, ...logosList];

  return (
    <div className="w-full max-w-screen-xl mx-auto">
      <h3 className="text-center text-3xl md:text-4xl font-bold text-primary mb-12 md:mb-16 lg:mb-20 animate-fadeInUp">
        Trusted By
      </h3>
      <div className="marquee">
        <div className="marquee-content">
          {extendedLogos.map((logo, index) => (
            <ClientLogo
              key={`${logo.alt}-${index}`} // Ensure unique keys for duplicated items
              src={logo.src}
              alt={logo.alt}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
