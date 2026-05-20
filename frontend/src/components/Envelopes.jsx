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
  const handleAddToCart = (item, e) => {
    e?.preventDefault();
    e?.stopPropagation();
    addToCart(item);
  };

  return (
    <section className="envelopes" aria-label="Envelopes Collection">
      <h2 className="section-title">Envelopes</h2>
      <p className="section-subtitle">Choose from a variety of styles</p>
      <div className="envelopes-container" aria-label="Envelope styles">
        {envelopeTypes.map((envelope, index) => (
          <div className="envelope-item" key={index} aria-label={`Product: ${envelope.name}`}>
            {/* Wrap envelope details in a Link */}
            <Link 
              to={envelope.route} 
              className="envelope-link"
              aria-label={`View details of ${envelope.name}`}
            >
              <img 
                src={envelope.image} 
                alt={envelope.name} 
                className="envelope-image" 
              />
              <p className="envelope-name">{envelope.name}</p>
              <p className="envelope-price" aria-label={`Price: ₹${envelope.price}`}>₹{envelope.price}</p>
            </Link>
            {/* Add to Cart Button */}
            <IconButton
              aria-label={`Add ${envelope.name} to cart`}
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
              onClick={(e) => handleAddToCart(envelope, e)}
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

export default Envelopes;