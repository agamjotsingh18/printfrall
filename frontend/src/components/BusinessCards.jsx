import React from "react";
import { Link } from "react-router-dom";
import "../styles/BusinessCards.css";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { getCdnImage } from "../utils/imageLoader";

const businessCardTypes = [
  { name: "Standard Business Card", image: "standard-business-card.png", price: 10, route: "/services/business-essentials/business-cards/standard-business-card" },
  { name: "Premium Laminated Card", image: "premium-laminated-card.png", price: 20, route: "/services/business-essentials/business-cards/premium-laminated-card" },
  { name: "Textured Business Card", image: "textured-business-card.png", price: 15, route: "/services/business-essentials/business-cards/textured-business-card" },
  { name: "Square Business Card", image: "square-business-card.png", price: 12, route: "/services/business-essentials/business-cards/square-business-card" },
  { name: "Rounded Corner Business Card", image: "rounded-corner-business-card.png", price: 18, route: "/services/business-essentials/business-cards/rounded-corner-business-card" },
  { name: "Metallic Business Card", image: "metallic-business-card.png", price: 25, route: "/services/business-essentials/business-cards/metallic-business-card" },
  { name: "Circle Business Card", image: "circle-business-card.png", price: 22, route: "/services/business-essentials/business-cards/circle-business-card" },
  { name: "U-Shaped Business Card", image: "u-shaped-business-card.png", price: 30, route: "/services/business-essentials/business-cards/u-shaped-business-card" },
];

const BusinessCards = ({ addToCart }) => {
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
    <section className="business-cards" aria-label="Business Cards Collection">
      <h2 className="section-title">Business Cards</h2>
      <p className="section-subtitle">Choose from a variety of styles</p>
      
      <div className="cards-container">
        {businessCardTypes.map((card, index) => (
          <div className="card-item" key={index}>
            <Link 
              to={card.route} 
              className="card-link"
              aria-label={`View details of ${card.name}`}
            >
              <img 
                src={getCdnImage(card.image, { width: 350, height: 350 })} 
                alt={card.name} 
                className="card-image" 
                width="350"
                height="350"
                loading="lazy"
              />
              <p className="card-name">{card.name}</p>
              <p className="card-price">₹{card.price}</p>
            </Link>
            
            <IconButton
              aria-label={`Add ${card.name} to cart`}
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
              onClick={(e) => handleAddToCart(card, e)}
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

export default BusinessCards;