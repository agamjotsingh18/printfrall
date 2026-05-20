import React from "react";
import { Link } from "react-router-dom";
import "../styles/Mugs.css";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

// Import images for mugs (replace with actual image paths)
import standardMugImg from "../assets/mug.png";
import miniMugImg from "../assets/mini-mug.png";
import shimmerDarkGreyMugImg from "../assets/shimmer-dark-grey-mug.png";
import regalBlackMugImg from "../assets/regal-black-mug.png";
import travelerBlackMugImg from "../assets/traveler-black-mug.png";
import sleekBlackMugImg from "../assets/sleek-black-mug.png";

const mugsItems = [
  { name: "Mug (Standard)", image: standardMugImg, price: 200, route: "/services/personalized-gifts/mugs/standard-mug" },
  { name: "Mini Mug", image: miniMugImg, price: 150, route: "/services/personalized-gifts/mugs/mini-mug" },
  { name: "Shimmer Dark Grey Mug", image: shimmerDarkGreyMugImg, price: 250, route: "/services/personalized-gifts/mugs/shimmer-dark-grey-mug" },
  { name: "Regal Black Mug", image: regalBlackMugImg, price: 300, route: "/services/personalized-gifts/mugs/regal-black-mug" },
  { name: "Traveler Black Mug", image: travelerBlackMugImg, price: 220, route: "/services/personalized-gifts/mugs/traveler-black-mug" },
  { name: "Sleek Black Mug", image: sleekBlackMugImg, price: 180, route: "/services/personalized-gifts/mugs/sleek-black-mug" },
];

const Mugs = ({ addToCart }) => {
  const handleAddToCart = (item, e) => {
    e?.preventDefault();
    e?.stopPropagation();
    addToCart(item);
  };

  return (
    <section className="mugs" aria-label="Mugs Collection">
      <h2 className="section-title">Mugs</h2>
      <p className="section-subtitle">Explore our premium collection of mugs</p>

      {/* Mugs Section */}
      <div className="mugs-container" aria-label="Premium mugs collection">
        {mugsItems.map((item, index) => (
          <div className="mug-item" key={index} aria-label={`Product: ${item.name}`}>
            {/* Wrap mug details in a Link */}
            <Link 
              to={item.route} 
              className="mug-link"
              aria-label={`View details of ${item.name}`}
            >
              <img 
                src={item.image} 
                alt={item.name} 
                className="mug-image" 
              />
              <p className="mug-name">{item.name}</p>
              <p className="mug-price" aria-label={`Price: ₹${item.price}`}>₹{item.price}</p>
            </Link>
            {/* Add to Cart Button */}
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

export default Mugs;