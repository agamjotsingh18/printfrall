import React from "react";
import { Link } from "react-router-dom";
import "../styles/Hoodies.css";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { getCdnImage } from "../utils/imageLoader";

const hoodieTypes = [
  { name: "Custom Printed Zipper Hoodies", image: "custom-printed-zipper-hoodie.png", price: 600, route: "/services/tshirt-printing/hoodies/custom-printed-zipper-hoodie" },
  { name: "Custom Printed Pullover Hoodies", image: "custom-printed-pullover-hoodie.png", price: 550, route: "/services/tshirt-printing/hoodies/custom-printed-pullover-hoodie" },
  { name: "Embroidered Zip Hoodies", image: "embroidered-zip-hoodie.png", price: 700, route: "/services/tshirt-printing/hoodies/embroidered-zip-hoodie" },
  { name: "Embroidered Pullover Hoodies", image: "embroidered-pullover-hoodie.png", price: 650, route: "/services/tshirt-printing/hoodies/embroidered-pullover-hoodie" },
];

const Hoodies = ({ addToCart }) => {
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
    <section className="hoodies" aria-label="Hoodies Collection">
      <h2 className="section-title">Hoodies</h2>
      <p className="section-subtitle">Choose from a variety of hoodie styles</p>
      <div className="hoodies-container" aria-label="Hoodie styles collection">
        {hoodieTypes.map((hoodie, index) => (
          <div className="hoodie-item" key={index} aria-label={`Product: ${hoodie.name}`}>
            <Link 
              to={hoodie.route} 
              className="hoodie-link"
              aria-label={`View details of ${hoodie.name}`}
            >
              <img 
                src={getCdnImage(hoodie.image, { width: 350, height: 350 })} 
                alt={hoodie.name} 
                className="hoodie-image" 
                width="350"
                height="350"
                loading="lazy"
              />
              <p className="hoodie-name">{hoodie.name}</p>
              <p className="hoodie-price" aria-label={`Price: ₹${hoodie.price}`}>₹{hoodie.price}</p>
            </Link>
            <IconButton
              aria-label={`Add ${hoodie.name} to cart`}
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
              onClick={(e) => handleAddToCart(hoodie, e)}
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

export default Hoodies;