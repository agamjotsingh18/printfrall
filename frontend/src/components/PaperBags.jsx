// src/components/PaperBags.js
import React from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "../styles/PaperBags.css";
import { getCdnImage } from "../utils/imageLoader";

const paperBagItems = [
  { 
    name: "Gift Paper Bags", 
    image: "gift-paper-bag.png", 
    price: 25, 
    route: "/services/packaging-labels/paper-bags/gift-paper-bags" 
  },
  { 
    name: "Takeout Paper Bags", 
    image: "takeout-paper-bag.png", 
    price: 20, 
    route: "/services/packaging-labels/paper-bags/takeout-paper-bags" 
  },
  { 
    name: "Pre-printed Paper Bags", 
    image: "pre-printed-paper-bag.png", 
    price: 30, 
    route: "/services/packaging-labels/paper-bags/pre-printed-paper-bags" 
  },
];

const PaperBags = ({ addToCart }) => {
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
    <section className="paper-bags" aria-label="Paper Bags Collection">
      <h2 className="section-title">Paper Bags</h2>
      <p className="section-subtitle">Eco-friendly paper bags for your packaging needs</p>

      <div className="paperbags-container" aria-label="Paper Bags collection">
        {paperBagItems.map((item, index) => (
          <div className="paperbag-item" key={index} aria-label={`Product: ${item.name}`}>
            <Link 
              to={item.route} 
              className="paperbag-link"
              aria-label={`View details of ${item.name}`}
            >
              <img 
                src={getCdnImage(item.image, { width: 350, height: 350 })} 
                alt={item.name} 
                className="paperbag-image" 
                width="350"
                height="350"
                loading="lazy"
              />
              <p className="paperbag-name">{item.name}</p>
              <p className="paperbag-price" aria-label={`Price: ₹${item.price}`}>₹{item.price}</p>
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

export default PaperBags;