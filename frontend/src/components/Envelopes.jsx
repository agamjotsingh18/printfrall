import React from "react";
import { Link } from "react-router-dom";
import "../styles/Envelopes.css";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

// Import images for each envelope type
import envelope10 from "../assets/envelope-10-long.png";
import envelopeA5 from "../assets/a5-envelope.png";
import envelopeA6 from "../assets/a6-envelope.png";
import envelopeKraft from "../assets/kraft-envelope.png";

const envelopeTypes = [
  { name: "hash10 Envelope", image: envelope10, price: 5, route: "/services/business-essentials/envelopes/hash10-envelope" },
  { name: "A5 Envelope", image: envelopeA5, price: 7, route: "/services/business-essentials/envelopes/a5-envelope" },
  { name: "A6 Envelope", image: envelopeA6, price: 6, route: "/services/business-essentials/envelopes/a6-envelope" },
  { name: "Kraft Envelope", image: envelopeKraft, price: 8, route: "/services/business-essentials/envelopes/kraft-envelope" },
];

const Envelopes = ({ addToCart }) => {
  const handleAddToCart = (item) => {
    addToCart(item); // Add the item to the cart
  };

  return (
    <section className="envelopes">
      <h2 className="section-title">Envelopes</h2>
      <p className="section-subtitle">Choose from a variety of styles</p>
      <div className="envelopes-container">
        {envelopeTypes.map((envelope, index) => (
          <div className="envelope-item" key={index}>
            {/* Wrap envelope details in a Link */}
            <Link to={envelope.route} className="envelope-link">
              <img src={envelope.image} alt={envelope.name} className="envelope-image" />
              <p className="envelope-name">{envelope.name}</p>
              <p className="envelope-price">₹{envelope.price}</p>
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
              onClick={() => handleAddToCart(envelope)}
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

export default Envelopes;