import React from "react";
import { Link } from "react-router-dom";
import "../styles/Hoodies.css";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

// Import images for each hoodie type
import customPrintedZipperHoodie from "../assets/custom-printed-zipper-hoodie.png";
import customPrintedPulloverHoodies from "../assets/custom-printed-pullover-hoodie.png";
import embroideredZipHoodies from "../assets/embroidered-zip-hoodie.png";
import embroideredPulloverHoodies from "../assets/embroidered-pullover-hoodie.png";

const hoodieTypes = [
  { name: "Custom Printed Zipper Hoodies", image: customPrintedZipperHoodie, price: 600, route: "/services/tshirt-printing/hoodies/custom-printed-zipper-hoodie" },
  { name: "Custom Printed Pullover Hoodies", image: customPrintedPulloverHoodies, price: 550, route: "/services/tshirt-printing/hoodies/custom-printed-pullover-hoodie" },
  { name: "Embroidered Zip Hoodies", image: embroideredZipHoodies, price: 700, route: "/services/tshirt-printing/hoodies/embroidered-zip-hoodie" },
  { name: "Embroidered Pullover Hoodies", image: embroideredPulloverHoodies, price: 650, route: "/services/tshirt-printing/hoodies/embroidered-pullover-hoodie" },
];

const Hoodies = ({ addToCart }) => {
  const handleAddToCart = (item, e) => {
    e?.preventDefault();
    e?.stopPropagation();
    addToCart(item);
  };

  return (
    <section className="hoodies" aria-label="Hoodies Collection">
      <h2 className="section-title">Hoodies</h2>
      <p className="section-subtitle">Choose from a variety of hoodie styles</p>
      <div className="hoodies-container" aria-label="Hoodie styles collection">
        {hoodieTypes.map((hoodie, index) => (
          <div className="hoodie-item" key={index} aria-label={`Product: ${hoodie.name}`}>
            {/* Wrap hoodie details in a Link */}
            <Link 
              to={hoodie.route} 
              className="hoodie-link"
              aria-label={`View details of ${hoodie.name}`}
            >
              <img 
                src={hoodie.image} 
                alt={hoodie.name} 
                className="hoodie-image" 
              />
              <p className="hoodie-name">{hoodie.name}</p>
              <p className="hoodie-price" aria-label={`Price: ₹${hoodie.price}`}>₹{hoodie.price}</p>
            </Link>
            {/* Add to Cart Button */}
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