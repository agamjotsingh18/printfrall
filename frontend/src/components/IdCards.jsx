import React from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "../styles/IdCards.css";

// Import images for ID cards (replace with actual image paths)
import eventIdCardImg from "../assets/event-id-card.png";
import pvcIdCardImg from "../assets/pvc-id-card.png";
import paperIdCardImg from "../assets/paper-id-card.png";
import standardIdCardSetImg from "../assets/standardIdCardSetImg.png";
import premiumIdCardSetImg from "../assets/premiumIdCardSetImg.png";
import idCardStandardHolderImg from "../assets/idCardStandardHolderImg.png";
import idCardPremiumHolderSetImg from "../assets/idCardPremiumHolderSetImg.png";

const idCardsItems = [
  { name: "Event ID Card", image: eventIdCardImg, price: 100 },
  { name: "PVC ID Card", image: pvcIdCardImg, price: 150 },
  { name: "Paper ID Card", image: paperIdCardImg, price: 80 },
  { name: "Standard ID Card and Lanyard Combo", image: standardIdCardSetImg, price: 200 },
  { name: "Premium ID Card and Lanyard Combo", image: premiumIdCardSetImg, price: 250 },
  { name: "ID Card and Standard Holder Combo", image: idCardStandardHolderImg, price: 180 },
  { name: "ID Card and Premium Holder Combo", image: idCardPremiumHolderSetImg, price: 300 },
];

const IdCards = ({ addToCart }) => {
  const handleAddToCart = (item) => {
    addToCart(item); // Add the item to the cart
  };

  return (
    <section className="id-cards">
      <h2 className="section-title">ID Cards</h2>
      <p className="section-subtitle">Explore our premium collection of ID cards and combos</p>

      {/* ID Cards Section */}
      <div className="id-cards-container">
        {idCardsItems.map((item, index) => (
          <div className="id-card-item" key={index}>
            <img src={item.image} alt={item.name} className="id-card-image" />
            <p className="id-card-name">{item.name}</p>
            <p className="id-card-price">₹{item.price}</p>
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
              onClick={() => handleAddToCart(item)}
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

export default IdCards;