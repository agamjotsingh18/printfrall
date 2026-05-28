// src/components/Invoices.js
import React from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "../styles/Invoices.css";
import { getCdnImage } from "../utils/imageLoader";

const invoiceItems = [
  { 
    name: "Full Colour Printed Bill Books", 
    image: "full-colour-printed-bill-books.png", 
    price: 30, 
    route: "/services/business-essentials/invoices/full-colour-printed-bill-books" 
  },
  { 
    name: "Black and White Printed Bill Books", 
    image: "billbook-1.png", 
    price: 20, 
    route: "/services/business-essentials/invoices/black-and-white-printed-bill-books" 
  },
];

const Invoices = ({ addToCart }) => {
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
    <section className="invoices" aria-label="Invoices Collection">
      <h2 className="section-title">Invoices & Bill Books</h2>
      <p className="section-subtitle">Professional bill books and invoices for your business</p>

      <div className="invoices-container" aria-label="Invoices collection">
        {invoiceItems.map((item, index) => (
          <div className="invoice-item" key={index} aria-label={`Product: ${item.name}`}>
            <Link 
              to={item.route} 
              className="invoice-link"
              aria-label={`View details of ${item.name}`}
            >
              <img 
                src={getCdnImage(item.image, { width: 350, height: 350 })} 
                alt={item.name} 
                className="invoice-image" 
                width="350"
                height="350"
                loading="lazy"
              />
              <p className="invoice-name">{item.name}</p>
              <p className="invoice-price" aria-label={`Price: ₹${item.price}`}>₹{item.price}</p>
            </Link>
            <IconButton
              aria-label={`Add ${item.name} to cart`}
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
              onClick={(e) => handleAddToCart(item, e)}
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

export default Invoices;