import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { getCdnImage } from "../utils/imageLoader";
import "../styles/Hero.css";

const Hero = () => {
  const [viewportWidth, setViewportWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1920);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setViewportWidth(width);
      setIsMobile(width <= 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Responsive image widths based on viewport
  const getImageWidth = () => {
    if (viewportWidth <= 768) return 824;  // Mobile: 2x display size for Retina
    if (viewportWidth <= 1024) return 1200; // Tablet
    return 1440; // Desktop (reduced from 1920 to 1440 for better performance)
  };

  // Preload only first image, defer others
  const slides = [
    { src: "hero-1.jpg", alt: "Hero image showing printing services", priority: true },
    { src: "hero-2.jpg", alt: "Hero image showing custom printing solutions", priority: false },
    { src: "hero-3.jpg", alt: "Hero image showing corporate gifting", priority: false },
  ];

  const imageWidth = getImageWidth();
  const imageQuality = isMobile ? 85 : 90; // Slightly lower quality on mobile for faster load

  return (
    <div className="hero-modern" aria-label="Hero banner section">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ 
          clickable: true, 
          dynamicBullets: true,
          ariaLabel: 'Slide navigation'
        }}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        speed={800}
        className="hero-swiper-modern"
        aria-label="Hero image carousel"
        lazyPreloadPrevNext={1}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="hero-slide-modern">
              {idx === 0 ? (
                // First image - eager loaded with fetchpriority
                <img
                  src={getCdnImage(slide.src, { width: imageWidth, quality: imageQuality })}
                  alt={slide.alt}
                  className="hero-image"
                  loading="eager"
                  width={imageWidth}
                  height={Math.round(imageWidth * 0.3)} // Maintains ~3.3:1 aspect ratio
                  fetchpriority="high"
                  decoding="async"
                />
              ) : (
                // Non-priority images - lazy loaded
                <img
                  src={getCdnImage(slide.src, { width: imageWidth, quality: imageQuality })}
                  alt={slide.alt}
                  className="hero-image"
                  loading="lazy"
                  width={imageWidth}
                  height={Math.round(imageWidth * 0.3)}
                  decoding="async"
                />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Desktop/Tablet navigation buttons - hidden on mobile via CSS */}
      <div 
        className="custom-prev" 
        aria-label="Previous slide"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && e.currentTarget.click()}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div 
        className="custom-next" 
        aria-label="Next slide"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && e.currentTarget.click()}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      
      {/* CTA button - hidden on mobile via CSS */}
      <div className="hero-cta">
        <Link to="/services" className="hero-btn-modern" aria-label="Explore our printing services">
          Explore Services
        </Link>
      </div>
    </div>
  );
};

export default Hero;