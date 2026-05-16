import React from "react";
import { Link } from "react-router-dom";
import "../styles/T-shirts.css";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

// Import images for each T-shirt type
import roundNeckTShirts from "../assets/round-neck-t-shirt.png";
import poloTShirts from "../assets/polo-t-shirt.png";
import vNeckTShirts from "../assets/v-neck-t-shirt.png";

const tShirtTypes = [
  { name: "Round Neck T-shirts", image: roundNeckTShirts, price: 300, route: "/services/personalized-gifts/tshirts/round-neck-t-shirts" },
  { name: "Polo T-shirts", image: poloTShirts, price: 400, route: "/services/personalized-gifts/tshirts/polo-t-shirts" },
  { name: "V-Neck T-shirts", image: vNeckTShirts, price: 350, route: "/services/personalized-gifts/tshirts/v-neck-t-shirts" },
];

const TShirts = ({ addToCart }) => {
  const handleAddToCart = (item) => {
    addToCart(item); // Add the item to the cart
  };

  return (
    <section className="t-shirts">
      <h2 className="section-title">T-Shirts</h2>
      <p className="section-subtitle">Choose from a variety of T-shirt styles</p>
      <div className="t-shirts-container">
        {tShirtTypes.map((tshirt, index) => (
          <div className="tshirt-item" key={index}>
            {/* Wrap T-shirt details in a Link */}
            <Link to={tshirt.route} className="tshirt-link">
              <img src={tshirt.image} alt={tshirt.name} className="tshirt-image" />
              <p className="tshirt-name">{tshirt.name}</p>
              <p className="tshirt-price">₹{tshirt.price}</p>
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
              onClick={() => handleAddToCart(tshirt)}
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

export default TShirts;