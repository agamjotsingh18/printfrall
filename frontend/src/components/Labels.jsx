import React from "react";
import { Link } from "react-router-dom";
import "../styles/Labels.css";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { getCdnImage } from "../utils/imageLoader";

const labelTypes = [
  { name: "Metallic Gold Paper Labels", image: "metallic-gold-paper-labels.png", price: 10, route: "/services/packaging-labels/labels/metallic-gold-paper-labels" },
  { name: "Metallic Silver Paper Labels", image: "metallic-silver-paper-labels.png", price: 12, route: "/services/packaging-labels/labels/metallic-silver-paper-labels" },
  { name: "Kraft Paper Labels", image: "kraft-paper-labels.png", price: 8, route: "/services/packaging-labels/labels/kraft-paper-labels" },
  { name: "Premium White Labels", image: "premium-white-labels.png", price: 15, route: "/services/packaging-labels/labels/premium-white-labels" },
  { name: "Clear Labels", image: "clear-label-2.png", price: 18, route: "/services/packaging-labels/labels/clear-labels" },
  { name: "Water Proof Labels", image: "water-proof-labels.png", price: 20, route: "/services/packaging-labels/labels/water-proof-labels" },
];

const Labels = ({ addToCart }) => {
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
    <section className="labels" aria-label="Labels Collection">
      <h2 className="section-title">Labels</h2>
      <p className="section-subtitle">Choose from a variety of label types</p>
      <div className="labels-container" aria-label="Label types collection">
        {labelTypes.map((label, index) => (
          <div className="label-item" key={index} aria-label={`Product: ${label.name}`}>
            <Link 
              to={label.route} 
              className="label-link"
              aria-label={`View details of ${label.name}`}
            >
              <img 
                src={getCdnImage(label.image, { width: 350, height: 350 })} 
                alt={label.name} 
                className="label-image" 
                width="350"
                height="350"
                loading="lazy"
              />
              <p className="label-name">{label.name}</p>
              <p className="label-price" aria-label={`Price: ₹${label.price}`}>₹{label.price}</p>
            </Link>
            <IconButton
              aria-label={`Add ${label.name} to cart`}
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
              onClick={(e) => handleAddToCart(label, e)}
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

export default Labels;