import React from "react";
import { Link } from "react-router-dom";
import "../styles/Caps.css";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

// Import images for each cap type
import printedPlainCaps from "../assets/cap.png";
import lineStitchingCaps from "../assets/line-stitching-cap.png";
import pipingCaps from "../assets/piping-cap.png";
import tippingCaps from "../assets/tipping-cap.png";

const capTypes = [
  { name: "Printed Plain Caps", image: printedPlainCaps, price: 200, route: "/services/tshirt-printing/caps/printed-plain-caps" },
  { name: "Line Stitching Caps", image: lineStitchingCaps, price: 250, route: "/services/tshirt-printing/caps/line-stitching-caps" },
  { name: "Piping Caps", image: pipingCaps, price: 300, route: "/services/tshirt-printing/caps/piping-caps" },
  { name: "Tipping Caps", image: tippingCaps, price: 350, route: "/services/tshirt-printing/caps/tipping-caps" },
];

const Caps = ({ addToCart }) => {
  const handleAddToCart = (item) => {
    addToCart(item); // Add the item to the cart
  };

  return (
    <section className="caps">
      <h2 className="section-title">Caps</h2>
      <p className="section-subtitle">Choose from a variety of cap styles</p>
      <div className="caps-container">
        {capTypes.map((cap, index) => (
          <div className="cap-item" key={index}>
            {/* Wrap cap details in a Link */}
            <Link to={cap.route} className="cap-link">
              <img src={cap.image} alt={cap.name} className="cap-image" />
              <p className="cap-name">{cap.name}</p>
              <p className="cap-price">₹{cap.price}</p>
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
              onClick={() => handleAddToCart(cap)}
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

export default Caps;