import React from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "../styles/Diaries.css";

// Import images for diaries (replace with actual image paths)
import matteFinishDiariesImg from "../assets/matte-finish-diaries.png";
import vintageTanDiariesImg from "../assets/vintage-tan-diaries.png";
import fauxLeatherDiariesImg from "../assets/faux-leather-diaries.png";
import customCanvasDiariesImg from "../assets/custom-canvas-diaries.png";
import waveTextureDiariesImg from "../assets/wave-texture-diaries.png";
import ecoKraftCoverDiariesImg from "../assets/eco-kraft-cover-diaries.png";

const diariesItems = [
  { name: "Matte Finish Diaries", image: matteFinishDiariesImg, price: 400, link: "/services/corporate-gifting/duo-sets/matte-finish-diaries" },
  { name: "Vintage Tan Diaries", image: vintageTanDiariesImg, price: 450, link: "/services/corporate-gifting/duo-sets/vintage-tan-diaries" },
  { name: "Faux Leather Diaries", image: fauxLeatherDiariesImg, price: 500, link: "/services/corporate-gifting/duo-sets/faux-leather-diaries" },
  { name: "Custom Canvas Diaries", image: customCanvasDiariesImg, price: 550, link: "/services/corporate-gifting/duo-sets/custom-canvas-diaries" },
  { name: "Wave Texture Diaries", image: waveTextureDiariesImg, price: 600, link: "/services/corporate-gifting/duo-sets/wave-texture-diaries" },
  { name: "Eco Kraft Cover Diaries", image: ecoKraftCoverDiariesImg, price: 350, link: "/services/corporate-gifting/duo-sets/eco-kraft-cover-diaries" },
];

const Diaries = ({ addToCart }) => {
  const handleAddToCart = (item, e) => {
    e?.preventDefault();
    e?.stopPropagation();
    addToCart(item);
  };

  return (
    <section className="diaries" aria-label="Diaries Collection">
      <h2 className="section-title">Diaries</h2>
      <p className="section-subtitle">Explore our premium collection of diaries</p>

      {/* Diaries Section */}
      <div className="diaries-container" aria-label="Premium diaries collection">
        {diariesItems.map((item, index) => (
          <div className="diary-item" key={index} aria-label={`Product: ${item.name}`}>
            <Link 
              to={item.link}
              aria-label={`View details of ${item.name}`}
            >
              <img 
                src={item.image} 
                alt={item.name} 
                className="diary-image" 
              />
              <p className="diary-name">{item.name}</p>
            </Link>
            <p className="diary-price" aria-label={`Price: ₹${item.price}`}>₹{item.price}</p>
            <IconButton
              aria-label={`Add ${item.name} to cart`}
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
              onClick={(e) => handleAddToCart(item, e)}
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

export default Diaries;