import React from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "../styles/Diaries.css";
import { getCdnImage } from "../utils/imageLoader";

const diariesItems = [
  { name: "Matte Finish Diaries", image: "matte-finish-diaries.png", price: 400, link: "/services/corporate-gifting/duo-sets/matte-finish-diaries" },
  { name: "Vintage Tan Diaries", image: "vintage-tan-diaries.png", price: 450, link: "/services/corporate-gifting/duo-sets/vintage-tan-diaries" },
  { name: "Faux Leather Diaries", image: "faux-leather-diaries.png", price: 500, link: "/services/corporate-gifting/duo-sets/faux-leather-diaries" },
  { name: "Custom Canvas Diaries", image: "custom-canvas-diaries.png", price: 550, link: "/services/corporate-gifting/duo-sets/custom-canvas-diaries" },
  { name: "Wave Texture Diaries", image: "wave-texture-diaries.png", price: 600, link: "/services/corporate-gifting/duo-sets/wave-texture-diaries" },
  { name: "Eco Kraft Cover Diaries", image: "eco-kraft-cover-diaries.png", price: 350, link: "/services/corporate-gifting/duo-sets/eco-kraft-cover-diaries" },
];

const Diaries = ({ addToCart }) => {
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
    <section className="diaries" aria-label="Diaries Collection">
      <h2 className="section-title">Diaries</h2>
      <p className="section-subtitle">Explore our premium collection of diaries</p>

      <div className="diaries-container" aria-label="Premium diaries collection">
        {diariesItems.map((item, index) => (
          <div className="diary-item" key={index} aria-label={`Product: ${item.name}`}>
            <Link 
              to={item.link}
              aria-label={`View details of ${item.name}`}
            >
              <img 
                src={getCdnImage(item.image, { width: 350, height: 350 })} 
                alt={item.name} 
                className="diary-image" 
                width="350"
                height="350"
                loading="lazy"
              />
              <p className="diary-name">{item.name}</p>
            </Link>
            <p className="diary-price" aria-label={`Price: ₹${item.price}`}>₹{item.price}</p>
            <IconButton
              aria-label={`Add ${item.name} to cart`}
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
              onClick={(e) => handleAddToCart(item, e)}
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

export default Diaries;