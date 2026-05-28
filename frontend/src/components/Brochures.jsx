// src/components/Brochures.js
import React from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "../styles/Brochures.css";
import { getCdnImage } from "../utils/imageLoader";

const brochureItems = [
  { 
    name: "Half Fold Brochure", 
    image: "half-fold-brochure.png", 
    price: 30, 
    route: "/services/marketing-materials/brochures/half-fold-brochure" 
  },
  { 
    name: "Tri Fold Brochure", 
    image: "tri-fold-brochure.png", 
    price: 35, 
    route: "/services/marketing-materials/brochures/tri-fold-brochure" 
  },
];

const Brochures = ({ addToCart }) => {
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
    <section className="brochures" aria-label="Brochures Collection">
      <h2 className="section-title">Brochures</h2>
      <p className="section-subtitle">Professional brochures to showcase your business</p>

      <div className="brochures-container" aria-label="Brochures collection">
        {brochureItems.map((item, index) => (
          <div className="brochure-item" key={index} aria-label={`Product: ${item.name}`}>
            <Link 
              to={item.route} 
              className="brochure-link"
              aria-label={`View details of ${item.name}`}
            >
              <img 
                src={getCdnImage(item.image, { width: 350, height: 350 })} 
                alt={item.name} 
                className="brochure-image" 
                width="350"
                height="350"
                loading="lazy"
              />
              <p className="brochure-name">{item.name}</p>
              <p className="brochure-price" aria-label={`Price: ₹${item.price}`}>₹{item.price}</p>
            </Link>
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

export default Brochures;