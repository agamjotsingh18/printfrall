import React from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "../styles/Drinkware.css";

// Import images for drinkware items
import standardMugImg from "../assets/mug.png";
import shimmerDarkGreyMugImg from "../assets/shimmer-dark-grey-mug.png";
import regalBlackMugImg from "../assets/regal-black-mug.jpeg";
import travelerBlackMugImg from "../assets/traveler-black-mug.png";
import sleekBlackMugImg from "../assets/sleek-black-mug.png";
import miniMugImg from "../assets/mini-mug.png";
import slimSSBottleImg from "../assets/slim-ss-bottle.png";
import floralSSBottleImg from "../assets/floral-bottle-2.png";
import vegaSSBottleImg from "../assets/vega-ss-bottle.png";
import premiumBlackSipperImg from "../assets/premium-black-sipper.png";
import multicolorSteelBottleImg from "../assets/multicolor-steel-bottle.png";
import pureCopperBottleImg from "../assets/pure-copper-bottle.png";
import lancyHotColdSipperImg from "../assets/lancy-hot-cold-sipper.png";
import glossyWhiteSipperImg from "../assets/glossy-white-sipper.png";
import supremeBlueSipperImg from "../assets/supreme-blue-sipper.png";
import classicBlackSipperImg from "../assets/classic-black-sipper.png";
import temperatureDisplayFlaskImg from "../assets/temperature-display-flask.png";

const drinkwareItems = [
  // Mugs - using same routes as Mugs.jsx
  { name: "Standard Mug", image: standardMugImg, category: "Mugs", price: 300, route: "/services/personalized-gifts/mugs/standard-mug" },
  { name: "Shimmer Dark Grey Mug", image: shimmerDarkGreyMugImg, category: "Mugs", price: 350, route: "/services/personalized-gifts/mugs/shimmer-dark-grey-mug" },
  { name: "Regal Black Mug", image: regalBlackMugImg, category: "Mugs", price: 400, route: "/services/personalized-gifts/mugs/regal-black-mug" },
  { name: "Traveler Black Mug", image: travelerBlackMugImg, category: "Mugs", price: 450, route: "/services/personalized-gifts/mugs/traveler-black-mug" },
  { name: "Sleek Black Mug", image: sleekBlackMugImg, category: "Mugs", price: 500, route: "/services/personalized-gifts/mugs/sleek-black-mug" },
  { name: "Mini Mug", image: miniMugImg, category: "Mugs", price: 250, route: "/services/personalized-gifts/mugs/mini-mug" },

  // Sippers & Mugs - adding routes for these items
  { name: "Slim SS Bottle", image: slimSSBottleImg, category: "Sippers & Mugs", price: 600, route: "/services/personalized-gifts/drinkware/slim-ss-bottle" },
  { name: "Floral SS Bottle", image: floralSSBottleImg, category: "Sippers & Mugs", price: 650, route: "/services/personalized-gifts/drinkware/floral-ss-bottle" },
  { name: "Vega SS Bottle", image: vegaSSBottleImg, category: "Sippers & Mugs", price: 700, route: "/services/personalized-gifts/drinkware/vega-ss-bottle" },
  { name: "Premium Black Sipper", image: premiumBlackSipperImg, category: "Sippers & Mugs", price: 750, route: "/services/personalized-gifts/drinkware/premium-black-sipper" },
  { name: "Multicolour Steel Bottle", image: multicolorSteelBottleImg, category: "Sippers & Mugs", price: 800, route: "/services/personalized-gifts/drinkware/multicolor-steel-bottle" },
  { name: "Pure Copper Water Bottle", image: pureCopperBottleImg, category: "Sippers & Mugs", price: 900, route: "/services/personalized-gifts/drinkware/pure-copper-bottle" },
  { name: "Lancy Hot & Cold White Sipper", image: lancyHotColdSipperImg, category: "Sippers & Mugs", price: 850, route: "/services/personalized-gifts/drinkware/lancy-hot-cold-sipper" },
  { name: "Glossy White Sipper", image: glossyWhiteSipperImg, category: "Sippers & Mugs", price: 800, route: "/services/personalized-gifts/drinkware/glossy-white-sipper" },
  { name: "Supreme Blue Sipper", image: supremeBlueSipperImg, category: "Sippers & Mugs", price: 750, route: "/services/personalized-gifts/drinkware/supreme-blue-sipper" },
  { name: "Classic Black Sipper", image: classicBlackSipperImg, category: "Sippers & Mugs", price: 700, route: "/services/personalized-gifts/drinkware/classic-black-sipper" },
  { name: "Temperature Display Flask", image: temperatureDisplayFlaskImg, category: "Sippers & Mugs", price: 1000, route: "/services/personalized-gifts/drinkware/temperature-display-flask" },
];

const Drinkware = ({ addToCart }) => {
  const handleAddToCart = (item, e) => {
    e?.preventDefault(); // Prevent navigation when clicking Add to Cart
    e?.stopPropagation(); // Stop event bubbling
    addToCart(item);
  };

  return (
    <section className="drinkware">
      <h2 className="section-title">Drinkware</h2>
      <p className="section-subtitle">Explore our premium collection of sippers and mugs</p>

      {/* Sippers & Mugs Section */}
      <h3 className="category-title">Sippers & Mugs</h3>
      <div className="drinkware-container">
        {drinkwareItems
          .filter((item) => item.category === "Sippers & Mugs")
          .map((item, index) => (
            <div className="drinkware-item" key={index}>
              <Link to={item.route} className="drinkware-link">
                <img src={item.image} alt={item.name} className="drinkware-image" />
                <p className="drinkware-name">{item.name}</p>
                <p className="drinkware-price">₹{item.price}</p>
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

      {/* Mugs Section */}
      <h3 className="category-title">Mugs</h3>
      <div className="drinkware-container">
        {drinkwareItems
          .filter((item) => item.category === "Mugs")
          .map((item, index) => (
            <div className="drinkware-item" key={index}>
              <Link to={item.route} className="drinkware-link">
                <img src={item.image} alt={item.name} className="drinkware-image" />
                <p className="drinkware-name">{item.name}</p>
                <p className="drinkware-price">₹{item.price}</p>
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

export default Drinkware;