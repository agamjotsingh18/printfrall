import React from "react";
import { Link } from "react-router-dom";
import "../styles/PhotoFrames.css";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

// Import images for each photo frame type
import ledPhotoFrames from "../assets/photo-with-led-frame.png";
import classicPhotoFrames from "../assets/photo-with-classic-frame.png";
import wallPhotoFrames from "../assets/photo-with-wall-frame.png";
import canvasPhotoFrames from "../assets/canvas-photo-with-frame.png";
import mattePhotoFrames from "../assets/matte-photo-with-frame.png";
import customAcrylicPhotoFrames from "../assets/custom-acrylic-photo-frame.png";
import framelessPhotoFrames from "../assets/frameless-photo-frame.png";

const photoFrameTypes = [
  { name: "Photo with LED Frames", image: ledPhotoFrames, price: 200, route: "/services/personalized-gifts/photo-frames/photo-with-led-frames" },
  { name: "Photo with Classic Frames", image: classicPhotoFrames, price: 150, route: "/services/personalized-gifts/photo-frames/photo-with-classic-frames" },
  { name: "Photo with Wall Frames", image: wallPhotoFrames, price: 180, route: "/services/personalized-gifts/photo-frames/photo-with-wall-frames" },
  { name: "Canvas Photo with Frames", image: canvasPhotoFrames, price: 220, route: "/services/personalized-gifts/photo-frames/canvas-frames-with-frames" },
  { name: "Matte Photo with Frames", image: mattePhotoFrames, price: 170, route: "/services/personalized-gifts/photo-frames/matte-photo-with-frames" },
  { name: "Custom Acrylic Photo Frames", image: customAcrylicPhotoFrames, price: 250, route: "/services/personalized-gifts/photo-frames/custom-acrylic-photo-frames" },
  { name: "Frameless Photo Frames", image: framelessPhotoFrames, price: 120, route: "/services/personalized-gifts/photo-frames/frameless-photo-frames" },
];

const PhotoFrames = ({ addToCart }) => {
  const handleAddToCart = (item, e) => {
    e?.preventDefault();
    e?.stopPropagation();
    addToCart(item);
  };

  return (
    <section className="photo-frames" aria-label="Photo Frames Collection">
      <h2 className="section-title">Photo Frames</h2>
      <p className="section-subtitle">Choose from a variety of photo frame styles</p>
      <div className="photo-frames-container" aria-label="Photo frame styles collection">
        {photoFrameTypes.map((frame, index) => (
          <div className="frame-item" key={index} aria-label={`Product: ${frame.name}`}>
            {/* Wrap photo frame details in a Link */}
            <Link 
              to={frame.route} 
              className="frame-link"
              aria-label={`View details of ${frame.name}`}
            >
              <img 
                src={frame.image} 
                alt={frame.name} 
                className="frame-image" 
              />
              <p className="frame-name">{frame.name}</p>
              <p className="frame-price" aria-label={`Price: ₹${frame.price}`}>₹{frame.price}</p>
            </Link>
            {/* Add to Cart Button */}
            <IconButton
              aria-label={`Add ${frame.name} to cart`}
              sx={{
                fontSize: "1.2rem",
                color: "white",
                background: "#70CB97",
                padding: "10px",
                borderRadius: "10px",
                "&:hover": {
                  transform: "scale(1.05)",
                  background: "#5cb67f",
                },
              }}
              onClick={(e) => handleAddToCart(frame, e)}
            >
              Add to Cart &nbsp;
              <AddShoppingCartIcon aria-hidden="true" />
            </IconButton>
          </div>
        ))}
      </div>
      <Link 
        to="/services" 
        className="back-button"
        aria-label="Back to services page"
      >
        Back to Services
      </Link>
    </section>
  );
};

export default PhotoFrames;