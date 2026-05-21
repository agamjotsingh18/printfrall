import React from "react";
import { Link } from "react-router-dom";
import "../styles/Stickers.css";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { getCdnImage } from "../utils/imageLoader";

const stickerTypes = [
  { name: "Matte Laminated Stickers", image: "matte-laminated-stickers.png", price: 10, route: "/services/packaging-labels/stickers/matte-laminated-stickers" },
  { name: "Holographic Stickers", image: "holographic-stickers.png", price: 15, route: "/services/packaging-labels/stickers/holographic-stickers" },
  { name: "Gold Foiling Stickers", image: "gold-foiling-stickers.png", price: 20, route: "/services/packaging-labels/stickers/gold-foiling-stickers" },
  { name: "Spot UV Stickers", image: "spot-uv-stickers.png", price: 12, route: "/services/packaging-labels/stickers/spot-uv-stickers" },
  { name: "Silver Foiling Stickers", image: "silver-foiling-stickers.png", price: 18, route: "/services/packaging-labels/stickers/silver-foiling-stickers" },
  { name: "Dome Stickers", image: "dome-stickers.png", price: 25, route: "/services/packaging-labels/stickers/dome-stickers" },
  { name: "Front Adhesive Stickers", image: "front-adhesive-stickers.png", price: 8, route: "/services/packaging-labels/stickers/front-adhesive-stickers" },
  { name: "Custom Opaque Stickers", image: "custom-opaque-stickers.png", price: 22, route: "/services/packaging-labels/stickers/custom-opaque-stickers" },
  { name: "Clear Stickers", image: "clear-sticker-2.png", price: 14, route: "/services/packaging-labels/stickers/clear-stickers" },
];

const Stickers = ({ addToCart }) => {
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
    <section className="stickers" aria-label="Stickers Collection">
      <h2 className="section-title">Stickers</h2>
      <p className="section-subtitle">Choose from a variety of sticker types</p>
      <div className="stickers-container" aria-label="Sticker types collection">
        {stickerTypes.map((sticker, index) => (
          <div className="sticker-item" key={index} aria-label={`Product: ${sticker.name}`}>
            <Link 
              to={sticker.route} 
              className="sticker-link"
              aria-label={`View details of ${sticker.name}`}
            >
              <img 
                src={getCdnImage(sticker.image, { width: 350, height: 350 })} 
                alt={sticker.name} 
                className="sticker-image" 
                width="350"
                height="350"
                loading="lazy"
              />
              <p className="sticker-name">{sticker.name}</p>
              <p className="sticker-price" aria-label={`Price: ₹${sticker.price}`}>₹{sticker.price}</p>
            </Link>
            <IconButton
              aria-label={`Add ${sticker.name} to cart`}
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
              onClick={(e) => handleAddToCart(sticker, e)}
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

export default Stickers;