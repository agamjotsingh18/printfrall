import React from "react";
import { Link } from "react-router-dom";
import "../styles/DuoSets.css";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { getCdnImage } from "../utils/imageLoader";

const mainItems = [
  { 
    name: "EcoGrip Notebook", 
    image: "eco-grip-notebook.png", 
    price: 500, 
    route: "/services/corporate-gifting/duo-sets/eco-grip-notebook" 
  },
  { 
    name: "Elegant Journal Combo", 
    image: "elegant-journal-combo.png", 
    price: 700, 
    route: "/services/corporate-gifting/duo-sets/elegant-journal-combo" 
  },
  { 
    name: "Elite Executive Combo", 
    image: "elite-executive-combo.png", 
    price: 900, 
    route: "/services/corporate-gifting/duo-sets/elite-executive-combo" 
  },
  { 
    name: "Classic Leather Combo", 
    image: "classic-leather-combo.png", 
    price: 1000, 
    route: "/services/corporate-gifting/duo-sets/classic-leather-combo" 
  },
];

const additionalItems = [
  { 
    name: "Matte Finish Diaries", 
    image: "matte-finish-diaries.png", 
    price: 400, 
    route: "/services/corporate-gifting/duo-sets/matte-finish-diaries" 
  },
  { 
    name: "Vintage Tan Diaries", 
    image: "vintage-tan-diaries.png", 
    price: 450, 
    route: "/services/corporate-gifting/duo-sets/vintage-tan-diaries" 
  },
  { 
    name: "Faux Leather Diaries", 
    image: "faux-leather-diaries.png", 
    price: 500, 
    route: "/services/corporate-gifting/duo-sets/faux-leather-diaries" 
  },
  { 
    name: "Custom Canvas Diaries", 
    image: "custom-canvas-diaries.png", 
    price: 550, 
    route: "/services/corporate-gifting/duo-sets/custom-canvas-diaries" 
  },
  { 
    name: "Wave Texture Diaries", 
    image: "wave-texture-diaries.png", 
    price: 600, 
    route: "/services/corporate-gifting/duo-sets/wave-texture-diaries" 
  },
  { 
    name: "Eco Kraft Cover Diaries", 
    image: "eco-kraft-cover-diaries.png", 
    price: 350, 
    route: "/services/corporate-gifting/duo-sets/eco-kraft-cover-diaries" 
  },
];

const DuoSets = ({ addToCart }) => {
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
    <section className="duo-sets" aria-label="Duo Sets Collection">
      <h2 className="section-title">Duo Sets</h2>
      <p className="section-subtitle">Premium combos for corporate gifting</p>

      <div className="main-items-container" aria-label="Premium duo sets">
        {mainItems.map((item, index) => (
          <div className="main-item" key={index} aria-label={`Product: ${item.name}`}>
            <Link 
              to={item.route} 
              className="main-item-content"
              aria-label={`View details of ${item.name}`}
            >
              <img 
                src={getCdnImage(item.image, { width: 350, height: 350 })} 
                alt={item.name} 
                className="main-item-image" 
                width="350"
                height="350"
                loading="lazy"
              />
              <p className="main-item-name">{item.name}</p>
              <p className="main-item-price" aria-label={`Price: ₹${item.price}`}>₹{item.price}</p>
            </Link>
            <IconButton
              className="add-to-cart-btn"
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

      <h3 className="section-title" aria-label="Additional items section">Explore More</h3>
      <div className="additional-items-container" aria-label="Additional diaries collection">
        {additionalItems.map((item, index) => (
          <div className="additional-item" key={index} aria-label={`Product: ${item.name}`}>
            <Link 
              to={item.route} 
              className="additional-item-content"
              aria-label={`View details of ${item.name}`}
            >
              <img 
                src={getCdnImage(item.image, { width: 300, height: 300 })} 
                alt={item.name} 
                className="additional-item-image" 
                width="300"
                height="300"
                loading="lazy"
              />
              <p className="additional-item-name">{item.name}</p>
              <p className="additional-item-price" aria-label={`Price: ₹${item.price}`}>₹{item.price}</p>
            </Link>
            <IconButton
              className="add-to-cart-btn"
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
        to="/services/corporate-gifting" 
        className="back-button"
        aria-label="Back to corporate gifting page"
      >
        Back to Corporate Gifting
      </Link>
    </section>
  );
};

export default DuoSets;