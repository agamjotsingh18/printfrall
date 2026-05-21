import React from "react";
import { Link } from "react-router-dom";
import "../styles/Caps.css";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { getCdnImage } from "../utils/imageLoader";

const capTypes = [
  { name: "Printed Plain Caps", image: "cap.png", price: 200, route: "/services/tshirt-printing/caps/printed-plain-caps" },
  { name: "Line Stitching Caps", image: "line-stitching-cap.png", price: 250, route: "/services/tshirt-printing/caps/line-stitching-caps" },
  { name: "Piping Caps", image: "piping-cap.png", price: 300, route: "/services/tshirt-printing/caps/piping-caps" },
  { name: "Tipping Caps", image: "tipping-cap.png", price: 350, route: "/services/tshirt-printing/caps/tipping-caps" },
];

const Caps = ({ addToCart }) => {
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
    <section className="caps" aria-label="Caps Collection">
      <h2 className="section-title">Caps</h2>
      <p className="section-subtitle">Choose from a variety of cap styles</p>
      <div className="caps-container">
        {capTypes.map((cap, index) => (
          <div className="cap-item" key={index}>
            <Link 
              to={cap.route} 
              className="cap-link"
              aria-label={`View details of ${cap.name}`}
            >
              <img 
                src={getCdnImage(cap.image, { width: 350, height: 350 })} 
                alt={cap.name} 
                className="cap-image" 
                width="350"
                height="350"
                loading="lazy"
              />
              <p className="cap-name">{cap.name}</p>
              <p className="cap-price">₹{cap.price}</p>
            </Link>
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