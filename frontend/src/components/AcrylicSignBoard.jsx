import React from "react";
import { Link } from "react-router-dom";
import "../styles/AcrylicSignBoard.css";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { getCdnImage } from "../utils/imageLoader";

const acrylicProducts = [
  { name: "Acrylic Photo Frames", image: "acrylic-photo-frame.png", price: 200, route: "/services/marketing-materials/acrylic-sign-board/acrylic-photo-frames" },
  { name: "Acrylic Name Plates", image: "acrylic-name-plate.png", price: 150, route: "/services/marketing-materials/acrylic-sign-board/acrylic-name-plates" },
  { name: "Acrylic Calendar", image: "acrylic-calendar.jpg", price: 100, route: "/services/marketing-materials/acrylic-sign-board/acrylic-calendar" },
  { name: "Acrylic Magnets", image: "acrylic-magnet.png", price: 50, route: "/services/marketing-materials/acrylic-sign-board/acrylic-magnets" },
  { name: "Acrylic Keychains", image: "acrylic-keychain.png", price: 30, route: "/services/marketing-materials/acrylic-sign-board/acrylic-keychains" },
  { name: "Acrylic Coasters", image: "acrylic-coaster.png", price: 80, route: "/services/marketing-materials/acrylic-sign-board/acrylic-coasters" },
];

const AcrylicSignBoard = ({ addToCart }) => {
  const handleAddToCart = (product) => {
    const cartItem = {
      ...product,
      image: getCdnImage(product.image, { width: 150, height: 150 }),
      quantity: 1
    };
    addToCart(cartItem); 
  };

  return (
    <section className="acrylic-sign-board" aria-label="Acrylic Products">
      <h2 className="section-title">Acrylic Sign Boards & Products</h2>
      <p className="section-subtitle">Choose from a variety of acrylic products</p>
      <div className="acrylic-container">
        {acrylicProducts.map((product, index) => (
          <div className="acrylic-item" key={index}>
            {/* Wrap product details in a Link */}
            <Link to={product.route} className="acrylic-link" aria-label={`View details of ${product.name}`}>
              <img src={getCdnImage(product.image, { width: 400, height: 400 })} alt={product.name} className="acrylic-image" loading="lazy"/>
              <p className="acrylic-name">{product.name}</p>
              <p className="acrylic-price">₹{product.price}</p>
            </Link>
            {/* Add to Cart Button */}
            <IconButton
              aria-label={`Add ${product.name} to cart`}
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
              <AddShoppingCartIcon aria-hidden="true" />
            </IconButton>
          </div>
        ))}
      </div>
      <Link to="/services" className="back-button"   aria-label="Back to services page">Back to Services</Link>
    </section>
  );
};

export default AcrylicSignBoard;