import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Asset imports
import hero1 from "../assets/hero-1.jpg";
import hero2 from "../assets/hero-2.jpg";
import hero3 from "../assets/hero-3.jpg";

import "../styles/Hero.css";

const Hero = () => {
  const slides = [
    { src: hero1, alt: "Hero 1" },
    { src: hero2, alt: "Hero 2" },
    { src: hero3, alt: "Hero 3" },
  ];

  return (
    <div className="hero-modern">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        speed={800}
        className="hero-swiper-modern"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="hero-slide-modern">
              <img
                src={slide.src}
                alt={slide.alt}
                className="hero-image"
                loading="eager"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Custom Minimal Arrows */}
      <div className="custom-prev">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div className="custom-next">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      
      <div className="hero-cta">
        <Link to="/services" className="hero-btn-modern">
          Explore Services
        </Link>
      </div>
    </div>
  );
};

export default Hero;