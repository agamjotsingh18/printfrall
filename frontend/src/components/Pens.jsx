import React from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "../styles/Pens.css";

// Import images for pens
import stylusPenImg from "../assets/stylus-pen.png";
import kraftPenImg from "../assets/kraft-pen.png";
import scribblePenImg from "../assets/scribble-pen.png";
import adroitPenImg from "../assets/adroit-pen.png";
import giltRollerPenImg from "../assets/gilt-roller-pen.png";
import skateBallpointPenImg from "../assets/skate-ballpoint-pen.png";

const pensItems = [
  { 
    name: "Stylus Pen", 
    image: stylusPenImg, 
    price: 100,
    route: "/services/corporate-gifting/pens/stylus-pen" 
  },
  { 
    name: "Kraft Pen", 
    image: kraftPenImg, 
    price: 120,
    route: "/services/corporate-gifting/pens/kraft-pen" 
  },
  { 
    name: "Scribble Pen", 
    image: scribblePenImg, 
    price: 150,
    route: "/services/corporate-gifting/pens/scribble-pen" 
  },
  { 
    name: "Adroit Pen", 
    image: adroitPenImg, 
    price: 200,
    route: "/services/corporate-gifting/pens/adroit-pen" 
  },
  { 
    name: "Gilt Roller Ball Pen", 
    image: giltRollerPenImg, 
    price: 250,
    route: "/services/corporate-gifting/pens/gilt-roller-pen" 
  },
  { 
    name: "Skate Ballpoint Pen", 
    image: skateBallpointPenImg, 
    price: 180,
    route: "/services/corporate-gifting/pens/skate-ballpoint-pen" 
  },
];

const Pens = ({ addToCart }) => {
  const handleAddToCart = (item, e) => {
    e?.preventDefault(); // Prevent navigation when clicking Add to Cart
    e?.stopPropagation(); // Stop event bubbling
    addToCart(item);
  };

  return (
    <section className="pens">
      <h2 className="section-title">Pens</h2>
      <p className="section-subtitle">Explore our premium collection of pens</p>

      {/* Pens Section */}
      <div className="pens-container">
        {pensItems.map((item, index) => (
          <div className="pen-item" key={index}>
            <Link to={item.route} className="pen-link">
              <img src={item.image} alt={item.name} className="pen-image" />
              <p className="pen-name">{item.name}</p>
              <p className="pen-price">₹{item.price}</p>
            </Link>
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
              onClick={(e) => handleAddToCart(item, e)}
            >
              Add to Cart &nbsp;
              <AddShoppingCartIcon />
            </IconButton>
          </div>
        ))}
      </div>

      <Link to="/services" className="back-button">
        Back to Services
      </Link>
    </section>
  );
};

export default Pens;