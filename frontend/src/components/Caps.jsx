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
  const handleAddToCart = (item, e) => {
    e?.preventDefault();
    e?.stopPropagation();
    addToCart(item);
  };

  return (
    <section className="caps" aria-label="Caps Collection">
      <h2 className="section-title">Caps</h2>
      <p className="section-subtitle">Choose from a variety of cap styles</p>
      <div className="caps-container">
        {capTypes.map((cap, index) => (
          <div className="cap-item" key={index}>
            {/* Wrap cap details in a Link */}
            <Link 
              to={cap.route} 
              className="cap-link"
              aria-label={`View details of ${cap.name}`}
            >
              <img 
                src={cap.image} 
                alt={cap.name} 
                className="cap-image" 
              />
              <p className="cap-name">{cap.name}</p>
              <p className="cap-price">₹{cap.price}</p>
            </Link>
            {/* Add to Cart Button */}
            <IconButton
              aria-label={`Add ${cap.name} to cart`}
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
              onClick={(e) => handleAddToCart(cap, e)}
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

export default Caps;