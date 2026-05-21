import React from "react";
import { Link } from "react-router-dom";
import "../styles/Envelopes.css";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { getCdnImage } from "../utils/imageLoader";

const envelopeTypes = [
  { name: "hash10 Envelope", image: "envelope-10-long.png", price: 5, route: "/services/business-essentials/envelopes/hash10-envelope" },
  { name: "A5 Envelope", image: "a5-envelope.png", price: 7, route: "/services/business-essentials/envelopes/a5-envelope" },
  { name: "A6 Envelope", image: "a6-envelope.png", price: 6, route: "/services/business-essentials/envelopes/a6-envelope" },
  { name: "Kraft Envelope", image: "kraft-envelope.png", price: 8, route: "/services/business-essentials/envelopes/kraft-envelope" },
];

const Envelopes = ({ addToCart }) => {
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
    <section className="envelopes" aria-label="Envelopes Collection">
      <h2 className="section-title">Envelopes</h2>
      <p className="section-subtitle">Choose from a variety of styles</p>
      <div className="envelopes-container" aria-label="Envelope styles">
        {envelopeTypes.map((envelope, index) => (
          <div className="envelope-item" key={index} aria-label={`Product: ${envelope.name}`}>
            <Link 
              to={envelope.route} 
              className="envelope-link"
              aria-label={`View details of ${envelope.name}`}
            >
              <img 
                src={getCdnImage(envelope.image, { width: 350, height: 350 })} 
                alt={envelope.name} 
                className="envelope-image" 
                width="350"
                height="350"
                loading="lazy"
              />
              <p className="envelope-name">{envelope.name}</p>
              <p className="envelope-price" aria-label={`Price: ₹${envelope.price}`}>₹{envelope.price}</p>
            </Link>
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