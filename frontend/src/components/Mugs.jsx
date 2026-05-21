import React from "react";
import { Link } from "react-router-dom";
import "../styles/Mugs.css";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { getCdnImage } from "../utils/imageLoader";

const mugsItems = [
  { name: "Mug (Standard)", image: "mug.png", price: 200, route: "/services/personalized-gifts/mugs/standard-mug" },
  { name: "Mini Mug", image: "mini-mug.png", price: 150, route: "/services/personalized-gifts/mugs/mini-mug" },
  { name: "Shimmer Dark Grey Mug", image: "shimmer-dark-grey-mug.png", price: 250, route: "/services/personalized-gifts/mugs/shimmer-dark-grey-mug" },
  { name: "Regal Black Mug", image: "regal-black-mug.png", price: 300, route: "/services/personalized-gifts/mugs/regal-black-mug" },
  { name: "Traveler Black Mug", image: "traveler-black-mug.png", price: 220, route: "/services/personalized-gifts/mugs/traveler-black-mug" },
  { name: "Sleek Black Mug", image: "sleek-black-mug.png", price: 180, route: "/services/personalized-gifts/mugs/sleek-black-mug" },
];

const Mugs = ({ addToCart }) => {
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
    <section className="mugs" aria-label="Mugs Collection">
      <h2 className="section-title">Mugs</h2>
      <p className="section-subtitle">Explore our premium collection of mugs</p>

      <div className="mugs-container" aria-label="Premium mugs collection">
        {mugsItems.map((item, index) => (
          <div className="mug-item" key={index} aria-label={`Product: ${item.name}`}>
            <Link 
              to={item.route} 
              className="mug-link"
              aria-label={`View details of ${item.name}`}
            >
              <img 
                src={getCdnImage(item.image, { width: 350, height: 350 })} 
                alt={item.name} 
                className="mug-image" 
                width="350"
                height="350"
                loading="lazy"
              />
              <p className="mug-name">{item.name}</p>
              <p className="mug-price" aria-label={`Price: ₹${item.price}`}>₹{item.price}</p>
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

export default Mugs;