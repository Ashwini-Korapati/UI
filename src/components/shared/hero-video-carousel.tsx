
"use client";
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Import icons

interface HeroVideoCarouselProps {
  videos: { src: string; type: string }[];
  className?: string;
}

export function HeroVideoCarousel({ videos, className }: HeroVideoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    videoRefs.current = Array(videos.length).fill(null).map((_, i) => videoRefs.current[i] || React.createRef<HTMLVideoElement>() as any);
  }, [videos.length]);

  const resetAutoPlayTimer = () => {
    if (autoPlayTimerRef.current) {
      clearTimeout(autoPlayTimerRef.current);
    }
    autoPlayTimerRef.current = setTimeout(() => {
      goToNextVideo();
    }, videoRefs.current[currentIndex]?.duration ? videoRefs.current[currentIndex]!.duration * 1000 : 7000); // Default to 7s if duration not available
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    const currentVideoElement = videoRefs.current[currentIndex];
    if (currentVideoElement) {
      videoRefs.current.forEach((video, index) => {
        if (index !== currentIndex && video) {
          video.pause();
        }
      });

      currentVideoElement.currentTime = 0;
      currentVideoElement.play().catch(error => console.warn(`Autoplay for video ${currentIndex} prevented:`, error));
      resetAutoPlayTimer(); // Reset timer when video starts playing

      const handleVideoEnd = () => {
        goToNextVideo();
      };

      currentVideoElement.addEventListener('ended', handleVideoEnd);
      return () => {
        currentVideoElement.removeEventListener('ended', handleVideoEnd);
        if (autoPlayTimerRef.current) {
          clearTimeout(autoPlayTimerRef.current);
        }
      };
    }
  }, [currentIndex, videos]);

  const goToVideo = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPreviousVideo = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
  };

  const goToNextVideo = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };


  return (
    <div className={cn("hero-video-carousel-container", className)}>
      <div className="hero-video-carousel" ref={carouselRef}>
        {videos.map((video, index) => (
          <div key={index} className="hero-video-carousel-item">
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              muted
              playsInline
              preload="auto"
            >
              <source src={video.src} type={video.type} />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        aria-label="Previous video"
        className="hero-video-nav-button left"
        onClick={goToPreviousVideo}
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      <button
        aria-label="Next video"
        className="hero-video-nav-button right"
        onClick={goToNextVideo}
      >
        <ChevronRight className="h-8 w-8" />
      </button>

      {/* Dot Indicators */}
      <div className="hero-video-dots">
        {videos.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to video ${index + 1}`}
            className={cn('hero-video-dot', { active: currentIndex === index })}
            onClick={() => goToVideo(index)}
          />
        ))}
      </div>
    </div>
  );
}
