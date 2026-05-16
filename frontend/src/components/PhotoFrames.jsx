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
  const handleAddToCart = (item) => {
    addToCart(item); // Add the item to the cart
  };

  return (
    <section className="photo-frames">
      <h2 className="section-title">Photo Frames</h2>
      <p className="section-subtitle">Choose from a variety of photo frame styles</p>
      <div className="photo-frames-container">
        {photoFrameTypes.map((frame, index) => (
          <div className="frame-item" key={index}>
            {/* Wrap photo frame details in a Link */}
            <Link to={frame.route} className="frame-link">
              <img src={frame.image} alt={frame.name} className="frame-image" />
              <p className="frame-name">{frame.name}</p>
              <p className="frame-price">₹{frame.price}</p>
            </Link>
            {/* Add to Cart Button */}
            <IconButton
              sx={{
                fontSize: "1.2rem",
                color: "white",
                background: "#70CB97", // brand green
                padding: "10px",
                borderRadius: "10px",
                "&:hover": {
                  transform: "scale(1.1)",
                  background: "#5cb67f", // darker green
                },
              }}
              onClick={() => handleAddToCart(frame)}
            >
              Add to Cart &nbsp;
              <AddShoppingCartIcon />
            </IconButton>
          </div>
        ))}
      </div>
      <Link to="/services" className="back-button">Back to Services</Link>
    </section>
  );
};

export default PhotoFrames;