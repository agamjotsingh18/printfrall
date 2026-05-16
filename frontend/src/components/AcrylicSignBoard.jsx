import React from "react";
import { Link } from "react-router-dom";
import "../styles/AcrylicSignBoard.css";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

// Import images for each acrylic product
import acrylicPhotoFrames from "../assets/acrylic-photo-frame.png";
import acrylicNamePlates from "../assets/acrylic-name-plate.png";
import acrylicCalendar from "../assets/acrylic-calendar.jpg";
import acrylicMagnets from "../assets/acrylic-magnet.png";
import acrylicKeychains from "../assets/acrylic-keychain.png";
import acrylicCoasters from "../assets/acrylic-coaster.png";

const acrylicProducts = [
  { name: "Acrylic Photo Frames", image: acrylicPhotoFrames, price: 200, route: "/services/marketing-materials/acrylic-sign-board/acrylic-photo-frames" },
  { name: "Acrylic Name Plates", image: acrylicNamePlates, price: 150, route: "/services/marketing-materials/acrylic-sign-board/acrylic-name-plates" },
  { name: "Acrylic Calendar", image: acrylicCalendar, price: 100, route: "/services/marketing-materials/acrylic-sign-board/acrylic-calendar" },
  { name: "Acrylic Magnets", image: acrylicMagnets, price: 50, route: "/services/marketing-materials/acrylic-sign-board/acrylic-magnets" },
  { name: "Acrylic Keychains", image: acrylicKeychains, price: 30, route: "/services/marketing-materials/acrylic-sign-board/acrylic-keychains" },
  { name: "Acrylic Coasters", image: acrylicCoasters, price: 80, route: "/services/marketing-materials/acrylic-sign-board/acrylic-coasters" },
];

const AcrylicSignBoard = ({ addToCart }) => {
  const handleAddToCart = (item) => {
    addToCart(item); 
  };

  return (
    <section className="acrylic-sign-board">
      <h2 className="section-title">Acrylic Sign Boards & Products</h2>
      <p className="section-subtitle">Choose from a variety of acrylic products</p>
      <div className="acrylic-container">
        {acrylicProducts.map((product, index) => (
          <div className="acrylic-item" key={index}>
            {/* Wrap product details in a Link */}
            <Link to={product.route} className="acrylic-link">
              <img src={product.image} alt={product.name} className="acrylic-image" />
              <p className="acrylic-name">{product.name}</p>
              <p className="acrylic-price">₹{product.price}</p>
            </Link>
            {/* Add to Cart Button */}
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
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart &nbsp;
              <AddShoppingCartIcon />
            </IconButton>
          </div>
        ))}
      </div>
      <Link to="/services" className="back-button">Back to Services</Link>
    </section>
  );
};

export default AcrylicSignBoard;