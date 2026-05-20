import React from "react";
import { Link } from "react-router-dom";
import "../styles/Labels.css";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

// Import images for each label type
import metallicGoldLabels from "../assets/metallic-gold-paper-labels.png";
import metallicSilverLabels from "../assets/metallic-silver-paper-labels.png";
import kraftPaperLabels from "../assets/kraft-paper-labels.png";
import premiumWhiteLabels from "../assets/premium-white-labels.png";
import clearLabels from "../assets/clear-label-2.png";
import waterProofLabels from "../assets/water-proof-labels.png";

const labelTypes = [
  { name: "Metallic Gold Paper Labels", image: metallicGoldLabels, price: 10, route: "/services/packaging-labels/labels/metallic-gold-paper-labels" },
  { name: "Metallic Silver Paper Labels", image: metallicSilverLabels, price: 12, route: "/services/packaging-labels/labels/metallic-silver-paper-labels" },
  { name: "Kraft Paper Labels", image: kraftPaperLabels, price: 8, route: "/services/packaging-labels/labels/kraft-paper-labels" },
  { name: "Premium White Labels", image: premiumWhiteLabels, price: 15, route: "/services/packaging-labels/labels/premium-white-labels" },
  { name: "Clear Labels", image: clearLabels, price: 18, route: "/services/packaging-labels/labels/clear-labels" },
  { name: "Water Proof Labels", image: waterProofLabels, price: 20, route: "/services/packaging-labels/labels/water-proof-labels" },
];

const Labels = ({ addToCart }) => {
  const handleAddToCart = (item, e) => {
    e?.preventDefault();
    e?.stopPropagation();
    addToCart(item);
  };

  return (
    <section className="labels" aria-label="Labels Collection">
      <h2 className="section-title">Labels</h2>
      <p className="section-subtitle">Choose from a variety of label types</p>
      <div className="labels-container" aria-label="Label types collection">
        {labelTypes.map((label, index) => (
          <div className="label-item" key={index} aria-label={`Product: ${label.name}`}>
            {/* Wrap label details in a Link */}
            <Link 
              to={label.route} 
              className="label-link"
              aria-label={`View details of ${label.name}`}
            >
              <img 
                src={label.image} 
                alt={label.name} 
                className="label-image" 
              />
              <p className="label-name">{label.name}</p>
              <p className="label-price" aria-label={`Price: ₹${label.price}`}>₹{label.price}</p>
            </Link>
            {/* Add to Cart Button */}
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