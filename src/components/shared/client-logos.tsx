
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
  <div className={`${className} border-2 border-red-500 p-1 flex items-center justify-center`}> {/* Added temporary border and flex centering */}
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="transition-transform duration-300 ease-in-out hover:scale-110 object-contain"
      data-ai-hint="company logo"
      unoptimized
    />
  </div>
);

const logosList = [
  // Using a placeholder for the first image for diagnostic purposes
  { src: 'https://placehold.co/150x150.png?text=Logo1', alt: 'ABB Logo Placeholder' }, 
  { src: '/ADARSH.png', alt: 'ADARSH Logo' },
  { src: '/AGILON HEALTH LOGO.png', alt: 'AGILON HEALTH LOGO Logo' },
  { src: '/AKMI.png', alt: 'AKMI Logo' },
  { src: '/ANTHOLOGY LOGO.png', alt: 'ANTHOLOGY LOGO Logo' },
  { src: '/AUTOLIV.png', alt: 'AUTOLIV Logo' },
  { src: '/AVPL LOGO.png', alt: 'AVPL LOGO Logo' },
  { src: '/BEL ,LOGO.png', alt: 'BEL ,LOGO Logo' }, // Filename with space and comma might be problematic
  { src: '/CARELON ,LOGO.png', alt: 'CARELON ,LOGO Logo' }, // Filename with space and comma might be problematic
  { src: '/CDM ,LOGO.png', alt: 'CDM ,LOGO Logo' }, // Filename with space and comma might be problematic
  { src: '/FORTERRRO.png', alt: 'FORTERRRO Logo' },
  { src: '/HDFC.png', alt: 'HDFC Logo' },
  { src: '/INDIA FIRST LOGO.png', alt: 'INDIA FIRST LOGO Logo' },
  { src: '/INDUS LOGO.png', alt: 'INDUS LOGO Logo' },
  { src: '/kennametal logo.png', alt: 'kennametal logo Logo' }, // Filename with space
  { src: '/LSEG.png', alt: 'LSEG Logo' },
  { src: '/MERCARI LOGO.png', alt: 'MERCARI LOGO Logo' },
  { src: '/MUTHOOT LOGO.png', alt: 'MUTHOOT LOGO Logo' },
  { src: '/NINE DOTS.png', alt: 'NINE DOTS Logo' },
  { src: '/QLAR.png', alt: 'QLAR Logo' },
  { src: '/quadragen.png', alt: 'quadragen Logo' },
  { src: '/RSA LOGO.png', alt: 'RSA LOGO Logo' },
  { src: '/RUSH.png', alt: 'RUSH Logo' },
  { src: '/STG LAB.png', alt: 'STG LAB Logo' },
  { src: '/TALISMA.png', alt: 'TALISMA Logo' },
  { src: '/TR LOGO.png', alt: 'TR LOGO Logo' },
  { src: '/UI PATH LOGO.png', alt: 'UI PATH LOGO Logo' },
  { src: '/UST LOGO.png', alt: 'UST LOGO Logo' },
  { src: '/WENGER LOGO.png', alt: 'WENGER LOGO Logo' },
  { src: '/YES BANK LOGO.png', alt: 'YES BANK LOGO Logo' }
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
