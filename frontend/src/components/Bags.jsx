import React from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "../styles/Bags.css";
import { getCdnImage } from "../utils/imageLoader";

const bagsItems = [
  { 
    name: "Apex Carry Laptop Bag", 
    image: "apex-carry-laptop-bag.png", 
    price: 1200,
    route: "/services/corporate-gifting/bags/apex-carry-laptop-bag" 
  },
  { 
    name: "Prestige Pro Laptop Bag", 
    image: "prestige-pro-laptop-bag.png", 
    price: 1300,
    route: "/services/corporate-gifting/bags/prestige-pro-laptop-bag" 
  },
  { 
    name: "Vanguard Laptop Bag", 
    image: "vanguard-laptop-bag.png", 
    price: 1400,
    route: "/services/corporate-gifting/bags/vanguard-laptop-bag" 
  },
  { 
    name: "Nexus Essential Laptop Bag", 
    image: "nexus-essential-laptop-bag.png", 
    price: 1100,
    route: "/services/corporate-gifting/bags/nexus-essential-laptop-bag" 
  },
  { 
    name: "Elite Horizon Laptop Bag", 
    image: "laptop-bag.png", 
    price: 1500,
    route: "/services/corporate-gifting/bags/elite-horizon-laptop-bag" 
  },
  { 
    name: "SlimGuard Laptop Sleeve", 
    image: "laptop-sleeve.png", 
    price: 1000,
    route: "/services/corporate-gifting/bags/slimguard-laptop-sleeve" 
  },
  { 
    name: "Infinity Laptop Bag", 
    image: "infinity-laptop-bag.png", 
    price: 1600,
    route: "/services/corporate-gifting/bags/infinity-laptop-bag" 
  },
];

const Bags = ({ addToCart }) => {
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
    <section className="bags" aria-label="Bags Collection">
      <h2 className="section-title">Bags</h2>
      <p className="section-subtitle">Explore our premium collection of laptop bags and sleeves</p>

      <div className="bags-container">
        {bagsItems.map((item, index) => (
          <div className="bag-item" key={index}>
            <Link to={item.route} className="bag-link">
              <img 
                src={getCdnImage(item.image, { width: 300, height: 300 })} 
                alt={item.name} 
                className="bag-image"  
                width="300"
                height="300"
                loading="lazy" 
              />
              <p className="bag-name">{item.name}</p>
              <p className="bag-price">₹{item.price}</p>
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
                  transform: "scale(1.1)",
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

      <Link to="/services" className="back-button">
        Back to Services
      </Link>
    </section>
  );
};

export default Bags;