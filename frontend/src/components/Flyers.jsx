import React from "react";
import { Link } from "react-router-dom";
import "../styles/Flyers.css";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

// Import images for each flyer type
import offerFlyers from "../assets/offer-flyer.png";
import businessFlyers from "../assets/business-flyer.png";
import productCatalogFlyers from "../assets/product-catalog-flyer.png";
import a4Flyers from "../assets/a4-flyer-printing.png";
import a5Flyers from "../assets/a5-flyer-printing.png";
import dlFlyers from "../assets/dl-flyer-printing.png";

const flyerTypes = [
  { name: "Offer Flyers", image: offerFlyers, price: 20, route: "/services/marketing-materials/flyers/offer-flyers" },
  { name: "Business Flyers", image: businessFlyers, price: 25, route: "/services/marketing-materials/flyers/business-flyers" },
  { name: "Product Catalog Flyers", image: productCatalogFlyers, price: 30, route: "/services/marketing-materials/flyers/product-catalog-flyers" },
  { name: "A4 Flyer Printing", image: a4Flyers, price: 15, route: "/services/marketing-materials/flyers/a4-flyer-printing" },
  { name: "A5 Flyer Printing", image: a5Flyers, price: 10, route: "/services/marketing-materials/flyers/a5-flyer-printing" },
  { name: "DL Flyer Printing", image: dlFlyers, price: 12, route: "/services/marketing-materials/flyers/dl-flyer-printing" },
];

const Flyers = ({ addToCart }) => {
  const handleAddToCart = (item) => {
    addToCart(item); // Add the item to the cart
  };

  return (
    <section className="flyers">
      <h2 className="section-title">Flyers</h2>
      <p className="section-subtitle">Choose from a variety of flyer types</p>
      <div className="flyers-container">
        {flyerTypes.map((flyer, index) => (
          <div className="flyer-item" key={index}>
            {/* Wrap flyer details in a Link */}
            <Link to={flyer.route} className="flyer-link">
              <img src={flyer.image} alt={flyer.name} className="flyer-image" />
              <p className="flyer-name">{flyer.name}</p>
              <p className="flyer-price">₹{flyer.price}</p>
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
              onClick={() => handleAddToCart(flyer)}
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

export default Flyers;