
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
  <div className={className}>
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
  { src: '/ABB.png', alt: 'ABB Logo' },
  { src: '/ADARSH.png', alt: 'ADARSH Logo' },
  { src: '/AGILON HEALTH LOGO.png', alt: 'AGILON HEALTH Logo' },
  { src: '/AKMI.png', alt: 'AKMI Logo' },
  { src: '/ANTHOLOGY LOGO.png', alt: 'ANTHOLOGY Logo' },
  { src: '/AUTOLIV.png', alt: 'AUTOLIV Logo' },
  { src: '/AVPL LOGO.png', alt: 'AVPL Logo' },
  { src: '/BEL LOGO.png', alt: 'BEL Logo' },
  { src: '/CARELON LOGO.png', alt: 'CARELON Logo' },
  { src: '/CDM LOGO.png', alt: 'CDM Logo' },
  { src: '/FORTERRRO.png', alt: 'FORTERRRO Logo' },
  { src: '/HDFC.png', alt: 'HDFC Logo' },
  { src: '/INDIA FIRST LOGO.png', alt: 'INDIA FIRST Logo' },
  { src: '/INDUS LOGO.png', alt: 'INDUS Logo' },
  { src: '/kennametal logo.png', alt: 'Kennametal Logo' },
  { src: '/LSEG.png', alt: 'LSEG Logo' },
  { src: '/MERCARI LOGO.png', alt: 'MERCARI Logo' },
  { src: '/MUTHOOT LOGO.png', alt: 'MUTHOOT Logo' },
  { src: '/NINE DOTS.png', alt: 'NINE DOTS Logo' },
  { src: '/QLAR.png', alt: 'QLAR Logo' },
  { src: '/quadragen.png', alt: 'Quadragen Logo' },
  { src: '/RSA LOGO.png', alt: 'RSA Logo' },
  { src: '/RUSH.png', alt: 'RUSH Logo' },
  { src: '/STG LAB.png', alt: 'STG LAB Logo' },
  { src: '/TALISMA.png', alt: 'TALISMA Logo' },
  { src: '/TR LOGO.png', alt: 'TR Logo' },
  { src: '/UI PATH LOGO.png', alt: 'UI PATH Logo' },
  { src: '/UST LOGO.png', alt: 'UST Logo' },
  { src: '/WENGER LOGO.png', alt: 'WENGER Logo' },
  { src: '/YES BANK LOGO.png', alt: 'YES BANK Logo' },
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
            key={`${logo.alt}-${index}`} // Ensure unique key for duplicated items
            src={logo.src}
            alt={logo.alt}
            className="mx-4" // Provides spacing between logos
          />
        ))}
      </div>
    </div>
  );
}
