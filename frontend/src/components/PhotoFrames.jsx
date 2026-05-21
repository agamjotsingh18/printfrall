import React from "react";
import { Link } from "react-router-dom";
import "../styles/PhotoFrames.css";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { getCdnImage } from "../utils/imageLoader";

const photoFrameTypes = [
  { name: "Photo with LED Frames", image: "photo-with-led-frame.png", price: 200, route: "/services/personalized-gifts/photo-frames/photo-with-led-frames" },
  { name: "Photo with Classic Frames", image: "photo-with-classic-frame.png", price: 150, route: "/services/personalized-gifts/photo-frames/photo-with-classic-frames" },
  { name: "Photo with Wall Frames", image: "photo-with-wall-frame.png", price: 180, route: "/services/personalized-gifts/photo-frames/photo-with-wall-frames" },
  { name: "Canvas Photo with Frames", image: "canvas-photo-with-frame.png", price: 220, route: "/services/personalized-gifts/photo-frames/canvas-frames-with-frames" },
  { name: "Matte Photo with Frames", image: "matte-photo-with-frame.png", price: 170, route: "/services/personalized-gifts/photo-frames/matte-photo-with-frames" },
  { name: "Custom Acrylic Photo Frames", image: "custom-acrylic-photo-frame.png", price: 250, route: "/services/personalized-gifts/photo-frames/custom-acrylic-photo-frames" },
  { name: "Frameless Photo Frames", image: "frameless-photo-frame.png", price: 120, route: "/services/personalized-gifts/photo-frames/frameless-photo-frames" },
];

const PhotoFrames = ({ addToCart }) => {
  const handleAddToCart = (item, e) => {
    e?.preventDefault();
    e?.stopPropagation();
    
    const cartItem = {
      ...item,
      image: getCdnImage(item.image, { width: 150, height: 150 }),
      quantity: 1
    };
    addToCart(cartItem);
  };

  return (
    <section className="photo-frames" aria-label="Photo Frames Collection">
      <h2 className="section-title">Photo Frames</h2>
      <p className="section-subtitle">Choose from a variety of photo frame styles</p>
      <div className="photo-frames-container" aria-label="Photo frame styles collection">
        {photoFrameTypes.map((frame, index) => (
          <div className="frame-item" key={index} aria-label={`Product: ${frame.name}`}>
            <Link 
              to={frame.route} 
              className="frame-link"
              aria-label={`View details of ${frame.name}`}
            >
              <img 
                src={getCdnImage(frame.image, { width: 350, height: 350 })} 
                alt={frame.name} 
                className="frame-image" 
                width="350"
                height="350"
                loading="lazy"
              />
              <p className="frame-name">{frame.name}</p>
              <p className="frame-price" aria-label={`Price: ₹${frame.price}`}>₹{frame.price}</p>
            </Link>
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