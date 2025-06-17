
"use client";
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface HeroVideoCarouselProps {
  videos: { src: string; type: string }[];
  className?: string;
}

export function HeroVideoCarousel({ videos, className }: HeroVideoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    // Initialize videoRefs array with correct length
    videoRefs.current = Array(videos.length).fill(null).map((_, i) => videoRefs.current[i] || React.createRef<HTMLVideoElement>() as any);
  }, [videos.length]);


  // Scroll to current video
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  // Autoplay and handle video end
  useEffect(() => {
    const currentVideoElement = videoRefs.current[currentIndex];
    if (currentVideoElement) {
      // Pause all other videos
      videoRefs.current.forEach((video, index) => {
        if (index !== currentIndex && video) {
          video.pause();
        }
      });

      currentVideoElement.currentTime = 0; // Reset video
      currentVideoElement.play().catch(error => console.warn(`Autoplay for video ${currentIndex} prevented:`, error));

      const handleVideoEnd = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
      };

      currentVideoElement.addEventListener('ended', handleVideoEnd);
      return () => {
        currentVideoElement.removeEventListener('ended', handleVideoEnd);
      };
    }
  }, [currentIndex, videos]);

  const goToVideo = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={cn("hero-video-carousel-container", className)}>
      <div className="hero-video-carousel" ref={carouselRef}>
        {videos.map((video, index) => (
          <div key={index} className="hero-video-carousel-item">
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              muted // Muted is essential for autoplay in most browsers
              playsInline
              preload="auto" 
            >
              <source src={video.src} type={video.type} />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
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
