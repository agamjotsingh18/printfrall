import React from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "../styles/IdCards.css";
import { getCdnImage } from "../utils/imageLoader";

const idCardsItems = [
  { name: "Event ID Card", image: "event-id-card.png", price: 100 },
  { name: "PVC ID Card", image: "pvc-id-card.png", price: 150 },
  { name: "Paper ID Card", image: "paper-id-card.png", price: 80 },
  { name: "Standard ID Card and Lanyard Combo", image: "standardIdCardSetImg.png", price: 200 },
  { name: "Premium ID Card and Lanyard Combo", image: "premiumIdCardSetImg.png", price: 250 },
  { name: "ID Card and Standard Holder Combo", image: "idCardStandardHolderImg.png", price: 180 },
  { name: "ID Card and Premium Holder Combo", image: "idCardPremiumHolderSetImg.png", price: 300 },
];

const IdCards = ({ addToCart }) => {
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
    <section className="id-cards" aria-label="ID Cards Collection">
      <h2 className="section-title">ID Cards</h2>
      <p className="section-subtitle">Explore our premium collection of ID cards and combos</p>

      <div className="id-cards-container" aria-label="ID cards and combo collection">
        {idCardsItems.map((item, index) => (
          <div className="id-card-item" key={index} aria-label={`Product: ${item.name}`}>
            <img 
              src={getCdnImage(item.image, { width: 350, height: 350 })} 
              alt={item.name} 
              className="id-card-image" 
              width="350"
              height="350"
              loading="lazy"
            />
            <p className="id-card-name">{item.name}</p>
            <p className="id-card-price" aria-label={`Price: ₹${item.price}`}>₹{item.price}</p>
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

export default IdCards;