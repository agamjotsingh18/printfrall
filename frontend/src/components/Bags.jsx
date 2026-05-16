import React from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "../styles/Bags.css";

// Import images for bags
import apexCarryLaptopBagImg from "../assets/apex-carry-laptop-bag.png";
import prestigeProLaptopBagImg from "../assets/prestige-pro-laptop-bag.png";
import vanguardLaptopBagImg from "../assets/vanguard-laptop-bag.png";
import nexusEssentialLaptopBagImg from "../assets/nexus-essential-laptop-bag.png";
import eliteHorizonLaptopBagImg from "../assets/laptop-bag.png";
import slimGuardLaptopSleeveImg from "../assets/laptop-sleeve.png";
import infinityLaptopBagImg from "../assets/infinity-laptop-bag.png";

const bagsItems = [
  { 
    name: "Apex Carry Laptop Bag", 
    image: apexCarryLaptopBagImg, 
    price: 1200,
    route: "/services/corporate-gifting/bags/apex-carry-laptop-bag" 
  },
  { 
    name: "Prestige Pro Laptop Bag", 
    image: prestigeProLaptopBagImg, 
    price: 1300,
    route: "/services/corporate-gifting/bags/prestige-pro-laptop-bag" 
  },
  { 
    name: "Vanguard Laptop Bag", 
    image: vanguardLaptopBagImg, 
    price: 1400,
    route: "/services/corporate-gifting/bags/vanguard-laptop-bag" 
  },
  { 
    name: "Nexus Essential Laptop Bag", 
    image: nexusEssentialLaptopBagImg, 
    price: 1100,
    route: "/services/corporate-gifting/bags/nexus-essential-laptop-bag" 
  },
  { 
    name: "Elite Horizon Laptop Bag", 
    image: eliteHorizonLaptopBagImg, 
    price: 1500,
    route: "/services/corporate-gifting/bags/elite-horizon-laptop-bag" 
  },
  { 
    name: "SlimGuard Laptop Sleeve", 
    image: slimGuardLaptopSleeveImg, 
    price: 1000,
    route: "/services/corporate-gifting/bags/slimguard-laptop-sleeve" 
  },
  { 
    name: "Infinity Laptop Bag", 
    image: infinityLaptopBagImg, 
    price: 1600,
    route: "/services/corporate-gifting/bags/infinity-laptop-bag" 
  },
];

const Bags = ({ addToCart }) => {
  const handleAddToCart = (item, e) => {
    e?.preventDefault(); // Prevent navigation when clicking Add to Cart
    e?.stopPropagation(); // Stop event bubbling
    addToCart(item);
  };

  return (
    <section className="bags">
      <h2 className="section-title">Bags</h2>
      <p className="section-subtitle">Explore our premium collection of laptop bags and sleeves</p>

      {/* Bags Section */}
      <div className="bags-container">
        {bagsItems.map((item, index) => (
          <div className="bag-item" key={index}>
            <Link to={item.route} className="bag-link">
              <img src={item.image} alt={item.name} className="bag-image" />
              <p className="bag-name">{item.name}</p>
              <p className="bag-price">₹{item.price}</p>
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

export default Bags;