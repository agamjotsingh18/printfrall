import React from "react";
import { Link } from "react-router-dom";
import "../styles/BusinessCards.css";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

// Import images for each business card type
import standardCard from "../assets/standard-business-card.png";
import premiumCard from "../assets/premium-laminated-card.png";
import texturedCard from "../assets/textured-business-card.png";
import squareCard from "../assets/square-business-card.png";
import roundedCard from "../assets/rounded-corner-business-card.png";
import metallicCard from "../assets/metallic-business-card.png";
import circleCard from "../assets/circle-business-card.png";
import uShapedCard from "../assets/u-shaped-business-card.png";

const businessCardTypes = [
  { name: "Standard Business Card", image: standardCard, price: 10, route: "/services/business-essentials/business-cards/standard-business-card" },
  { name: "Premium Laminated Card", image: premiumCard, price: 20, route: "/services/business-essentials/business-cards/premium-laminated-card" },
  { name: "Textured Business Card", image: texturedCard, price: 15, route: "/services/business-essentials/business-cards/textured-business-card" },
  { name: "Square Business Card", image: squareCard, price: 12, route: "/services/business-essentials/business-cards/square-business-card" },
  { name: "Rounded Corner Business Card", image: roundedCard, price: 18, route: "/services/business-essentials/business-cards/rounded-corner-business-card" },
  { name: "Metallic Business Card", image: metallicCard, price: 25, route: "/services/business-essentials/business-cards/metallic-business-card" },
  { name: "Circle Business Card", image: circleCard, price: 22, route: "/services/business-essentials/business-cards/circle-business-card" },
  { name: "U-Shaped Business Card", image: uShapedCard, price: 30, route: "/services/business-essentials/business-cards/u-shaped-business-card" },
];

const BusinessCards = ({ addToCart }) => {
  const handleAddToCart = (item) => {
    addToCart(item); // Add the item to the cart
  };

  return (
    <section className="business-cards">
      <h2 className="section-title">Business Cards</h2>
      <p className="section-subtitle">Choose from a variety of styles</p>
      <div className="cards-container">
        {businessCardTypes.map((card, index) => (
          <div className="card-item" key={index}>
            {/* Wrap business card details in a Link */}
            <Link to={card.route} className="card-link">
              <img src={card.image} alt={card.name} className="card-image" />
              <p className="card-name">{card.name}</p>
              <p className="card-price">₹{card.price}</p>
            </Link>
            {/* Add to Cart Button */}
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
              onClick={() => handleAddToCart(card)}
            >
              Add to Cart &nbsp;
              <AddShoppingCartIcon />
            </IconButton>
          </div>
        ))}
      </div>
      <Link to="/services" className="back-button">Back to Services</Link>
    </section>
  );
};

export default BusinessCards;