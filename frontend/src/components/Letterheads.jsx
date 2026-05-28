// src/components/Letterheads.js
import React from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "../styles/Letterheads.css";
import { getCdnImage } from "../utils/imageLoader";

const letterheadItems = [
  { 
    name: "Custom Letterheads", 
    image: "letterhead.avif", 
    price: 20, 
    route: "/services/business-essentials/letterheads/custom-letterheads" 
  },
  { 
    name: "Prescription Note Pad", 
    image: "prescription-note-pad.png", 
    price: 25, 
    route: "/services/business-essentials/letterheads/prescription-note-pad" 
  },
];

const Letterheads = ({ addToCart }) => {
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
    <section className="letterheads" aria-label="Letterheads Collection">
      <h2 className="section-title">Letterheads</h2>
      <p className="section-subtitle">Professional letterheads for your business correspondence</p>

      <div className="letterheads-container" aria-label="Letterheads collection">
        {letterheadItems.map((item, index) => (
          <div className="letterhead-item" key={index} aria-label={`Product: ${item.name}`}>
            <Link 
              to={item.route} 
              className="letterhead-link"
              aria-label={`View details of ${item.name}`}
            >
              <img 
                src={getCdnImage(item.image, { width: 350, height: 350 })} 
                alt={item.name} 
                className="letterhead-image" 
                width="350"
                height="350"
                loading="lazy"
              />
              <p className="letterhead-name">{item.name}</p>
              <p className="letterhead-price" aria-label={`Price: ₹${item.price}`}>₹{item.price}</p>
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

export default Letterheads;