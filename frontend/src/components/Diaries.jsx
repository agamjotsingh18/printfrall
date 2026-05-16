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
  const handleAddToCart = (item) => {
    addToCart(item); // Add the item to the cart
  };

  return (
    <section className="diaries">
      <h2 className="section-title">Diaries</h2>
      <p className="section-subtitle">Explore our premium collection of diaries</p>

      {/* Diaries Section */}
      <div className="diaries-container">
        {diariesItems.map((item, index) => (
          <div className="diary-item" key={index}>
            <Link to={item.link}>
              <img src={item.image} alt={item.name} className="diary-image" />
              <p className="diary-name">{item.name}</p>
            </Link>
            <p className="diary-price">₹{item.price}</p>
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
              onClick={(e) => {
                e.preventDefault(); // Prevent navigation
                handleAddToCart(item);
              }}
            >
              Add to Cart &nbsp;
              <AddShoppingCartIcon />
            </IconButton>
          </div>
        ))}
      </div>

      <Link to="/services" className="back-button">
        Back to Services
      </Link>
    </section>
  );
};

export default Diaries;