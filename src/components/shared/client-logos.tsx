
"use client";
import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ClientLogoProps {
  src: string;
  alt: string;
}

const ClientLogo: React.FC<ClientLogoProps> = ({ src, alt }) => (
  <div className="flex-shrink-0 p-2 mx-4 flex items-center justify-center w-32 h-32">
    {/* Container for consistent logo sizing */}
    <Image
      src={src}
      alt={alt}
      width={alt === 'INDUS LOGO' ? 48 : 100} // Adjusted width for Indus logo
      height={alt === 'INDUS LOGO' ? 72 : 100} // Adjusted height for Indus logo
      className={cn(
        "object-contain transition-transform duration-300 ease-in-out hover:scale-110",
        alt === 'INDUS LOGO' ? 'w-[48px] h-[72px]' : 'w-[80px] h-[80px]' // Specific smaller box for Indus logo
      )}
      data-ai-hint="company logo"
      unoptimized // Using unoptimized as paths are static and known
    />
  </div>
);

// IMPORTANT: Ensure your image files in the /public directory are named EXACTLY as below,
// removing spaces and hyphens from original names.
const logosList = [
  { src: '/ABB.png', alt: 'ABB Logo' },
  { src: '/ADARSH.png', alt: 'ADARSH Logo' },
  { src: '/AGILONHEALTHLOGO.png', alt: 'AGILON HEALTH LOGO' },
  { src: '/AKMI.png', alt: 'AKMI Logo' },
  { src: '/ANTHOLOGYLOGO.png', alt: 'ANTHOLOGY LOGO' },
  { src: '/AUTOLIV.png', alt: 'AUTOLIV Logo' },
  { src: '/AVPLLOGO.png', alt: 'AVPL LOGO' },
  { src: '/BELLOGO.png', alt: 'BEL LOGO' },
  { src: '/CARELONLOGO.png', alt: 'CARELON LOGO' },
  { src: '/CDMLOGO.png', alt: 'CDM LOGO' },
  { src: '/FORTERRRO.png', alt: 'FORTERRRO Logo' },
  { src: '/HDFC.png', alt: 'HDFC Logo' },
  { src: '/INDIAFIRSTLOGO.png', alt: 'INDIA FIRST LOGO' },
  { src: '/INDUSLOGO.png', alt: 'INDUS LOGO' },
  { src: '/kennametallogo.png', alt: 'Kennametal Logo' },
  { src: '/LSEG.png', alt: 'LSEG Logo' },
  { src: '/MERCARILOGO.png', alt: 'MERCARI LOGO' },
  { src: '/MUTHOOTLOGO.png', alt: 'MUTHOOT LOGO' },
  { src: '/NINEDOTS.png', alt: 'NINE DOTS Logo' },
  { src: '/QLAR.png', alt: 'QLAR Logo' },
  { src: '/quadragen.png', alt: 'Quadragen Logo' },
  { src: '/RSALOGO.png', alt: 'RSA LOGO' },
  { src: '/RUSH.png', alt: 'RUSH Logo' },
  { src: '/STGLAB.png', alt: 'STG LAB Logo' },
  { src: '/TALISMA.png', alt: 'TALISMA Logo' },
  { src: '/TRLOGO.png', alt: 'TR LOGO' },
  { src: '/UIPATHLOGO.png', alt: 'UI PATH LOGO' },
  { src: '/USTLOGO.png', alt: 'UST LOGO' },
  { src: '/WENGERLOGO.png', alt: 'WENGER LOGO' },
  { src: '/YESBANKLOGO.png', alt: 'YES BANK LOGO' }
];


export function ClientLogos() {
  const logosPerRow = 6; // Number of logos per scrolling row
  const rows: { src: string; alt: string }[][] = [];

  for (let i = 0; i < logosList.length; i += logosPerRow) {
    rows.push(logosList.slice(i, i + logosPerRow));
  }

  return (
    <div className="w-full max-w-screen-xl mx-auto mb-10 md:mb-14 lg:mb-16">
      <h3 className="text-center text-3xl md:text-4xl font-bold text-primary mb-12 md:mb-16 lg:mb-20 lg:mb-40 animate-fadeInUp">
        Trusted By
      </h3>
      <div className="space-y-4"> {/* Adds space between rows of marquees */}
        {rows.map((rowLogos, rowIndex) => {
          // Duplicate logos for seamless looping effect for THIS ROW
          // If a row has fewer than logosPerRow, it will still scroll, but the density will be lower.
          const extendedRowLogos = rowLogos.length > 0 ? [...rowLogos, ...rowLogos] : [];
          if (extendedRowLogos.length === 0) return null; // Don't render empty marquees

          return (
            <div key={`row-${rowIndex}`} className="marquee">
              <div className="marquee-content">
                {extendedRowLogos.map((logo, logoIndex) => (
                  <ClientLogo
                    key={`${logo.alt}-${rowIndex}-${logoIndex}`} // Ensure unique keys
                    src={logo.src}
                    alt={logo.alt}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
