import React from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "../styles/Pens.css";
import { getCdnImage } from "../utils/imageLoader";

const pensItems = [
  { 
    name: "Stylus Pen", 
    image: "stylus-pen.png", 
    price: 100,
    route: "/services/corporate-gifting/pens/stylus-pen" 
  },
  { 
    name: "Kraft Pen", 
    image: "kraft-pen.png", 
    price: 120,
    route: "/services/corporate-gifting/pens/kraft-pen" 
  },
  { 
    name: "Scribble Pen", 
    image: "scribble-pen.png", 
    price: 150,
    route: "/services/corporate-gifting/pens/scribble-pen" 
  },
  { 
    name: "Adroit Pen", 
    image: "adroit-pen.png", 
    price: 200,
    route: "/services/corporate-gifting/pens/adroit-pen" 
  },
  { 
    name: "Gilt Roller Ball Pen", 
    image: "gilt-roller-pen.png", 
    price: 250,
    route: "/services/corporate-gifting/pens/gilt-roller-pen" 
  },
  { 
    name: "Skate Ballpoint Pen", 
    image: "skate-ballpoint-pen.png", 
    price: 180,
    route: "/services/corporate-gifting/pens/skate-ballpoint-pen" 
  },
];

const Pens = ({ addToCart }) => {
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
    <section className="pens" aria-label="Pens Collection">
      <h2 className="section-title">Pens</h2>
      <p className="section-subtitle">Explore our premium collection of pens</p>

      <div className="pens-container" aria-label="Premium pens collection">
        {pensItems.map((item, index) => (
          <div className="pen-item" key={index} aria-label={`Product: ${item.name}`}>
            <Link 
              to={item.route} 
              className="pen-link"
              aria-label={`View details of ${item.name}`}
            >
              <img 
                src={getCdnImage(item.image, { width: 350, height: 350 })} 
                alt={item.name} 
                className="pen-image" 
                width="350"
                height="350"
                loading="lazy"
              />
              <p className="pen-name">{item.name}</p>
              <p className="pen-price" aria-label={`Price: ₹${item.price}`}>₹{item.price}</p>
            </Link>
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

export default Pens;