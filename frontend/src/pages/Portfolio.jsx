import React, { useState } from "react";
import "../styles/Portfolio.css";
import { FaSearchPlus, FaTimes } from "react-icons/fa";
import portfolioItems from "../data/PortfolioImages"; 

const Portfolio = () => {
  const [selectedImages, setSelectedImages] = useState(null);

  const handleCloseLightbox = (e) => {
    if (e.target.classList.contains("lightbox") || e.target.closest(".close-icon")) {
      setSelectedImages(null);
    }
  };

  return (
    <section className="portfolio" aria-label="Our Work Portfolio">
      <h2 className="section-title">Our Work Portfolio</h2>
      <p className="section-subtitle">Showcasing our best printing works</p>

      <div className="portfolio-container">
        {portfolioItems.map((item, index) => (
          <div
            className="portfolio-card"
            key={index}
            onClick={() => setSelectedImages(item.images)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setSelectedImages(item.images);
              }
            }}
          >
            <img src={item.images[0]} alt={item.title} className="portfolio-image" loading="lazy" />
            <div className="overlay">
              <FaSearchPlus className="zoom-icon" />
              <p className="portfolio-title">{item.title}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedImages && (
        <div 
          className="lightbox" 
          onClick={handleCloseLightbox}
          role="dialog"
          aria-modal="true"
        >
          <FaTimes className="close-icon" onClick={() => setSelectedImages(null)} aria-label="Close custom preview gallery" />
          <div className="lightbox-content">
            {selectedImages.map((img, index) => (
              <img 
                key={index} 
                src={img} 
                alt={`Preview asset view ${index + 1}`} 
                className="lightbox-image" 
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;