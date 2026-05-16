import React from "react";
import { Link } from "react-router-dom";
import "../styles/Stickers.css";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

// Import images for each sticker type
import matteLaminatedStickers from "../assets/matte-laminated-stickers.png";
import holographicStickers from "../assets/holographic-stickers.png";
import goldFoilingStickers from "../assets/gold-foiling-stickers.png";
import spotUVStickers from "../assets/spot-uv-stickers.png";
import silverFoilingStickers from "../assets/silver-foiling-stickers.png";
import domeStickers from "../assets/dome-stickers.png";
import frontAdhesiveStickers from "../assets/front-adhesive-stickers.png";
import customOpaqueStickers from "../assets/custom-opaque-stickers.png";
import clearStickers from "../assets/clear-sticker-2.png";

const stickerTypes = [
  { name: "Matte Laminated Stickers", image: matteLaminatedStickers, price: 10, route: "/services/packaging-labels/stickers/matte-laminated-stickers" },
  { name: "Holographic Stickers", image: holographicStickers, price: 15, route: "/services/packaging-labels/stickers/holographic-stickers" },
  { name: "Gold Foiling Stickers", image: goldFoilingStickers, price: 20, route: "/services/packaging-labels/stickers/gold-foiling-stickers" },
  { name: "Spot UV Stickers", image: spotUVStickers, price: 12, route: "/services/packaging-labels/stickers/spot-uv-stickers" },
  { name: "Silver Foiling Stickers", image: silverFoilingStickers, price: 18, route: "/services/packaging-labels/stickers/silver-foiling-stickers" },
  { name: "Dome Stickers", image: domeStickers, price: 25, route: "/services/packaging-labels/stickers/dome-stickers" },
  { name: "Front Adhesive Stickers", image: frontAdhesiveStickers, price: 8, route: "/services/packaging-labels/stickers/front-adhesive-stickers" },
  { name: "Custom Opaque Stickers", image: customOpaqueStickers, price: 22, route: "/services/packaging-labels/stickers/custom-opaque-stickers" },
  { name: "Clear Stickers", image: clearStickers, price: 14, route: "/services/packaging-labels/stickers/clear-stickers" },
];

const Stickers = ({ addToCart }) => {
  const handleAddToCart = (item) => {
    addToCart(item); // Add the item to the cart
  };

  return (
    <section className="stickers">
      <h2 className="section-title">Stickers</h2>
      <p className="section-subtitle">Choose from a variety of sticker types</p>
      <div className="stickers-container">
        {stickerTypes.map((sticker, index) => (
          <div className="sticker-item" key={index}>
            {/* Wrap sticker details in a Link */}
            <Link to={sticker.route} className="sticker-link">
              <img src={sticker.image} alt={sticker.name} className="sticker-image" />
              <p className="sticker-name">{sticker.name}</p>
              <p className="sticker-price">₹{sticker.price}</p>
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
              onClick={() => handleAddToCart(sticker)}
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

export default Stickers;