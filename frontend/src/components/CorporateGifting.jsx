import React from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "../styles/CorporateGifting.css";
import { getCdnImage } from "../utils/imageLoader";

const corporateGiftingTypes = [
  { name: "Festive Hampers", image: "festive-hampers.jpg", price: 1000, route: "/services/corporate-gifting/festive-hampers" },
  { name: "Welcome Kits", image: "welcome-kits.png", price: 800, route: "/services/corporate-gifting/welcome-kits" },
  { name: "Duo Sets", image: "duo-sets.png", price: 1200, route: "/services/corporate-gifting/duo-sets" },
];

const additionalItems = [
  { name: "Bags", image: "bags.png", price: 500, route: "/services/corporate-gifting/bags" },
  { name: "Drinkware", image: "drinkware.png", price: 300, route: "/services/corporate-gifting/drinkware" },
  { name: "Awards & Trophies", image: "awards-trophies.png", price: 700, route: "/services/corporate-gifting/awards-trophies" },
  { name: "Medals", image: "medals.png", price: 200, route: "/services/corporate-gifting/medals" },
  { name: "Calendars", image: "calendar.png", price: 250, route: "/services/personalized-gifts/calendars" },
  { name: "Desktop Items", image: "desktop-items.png", price: 400, route: "/services/corporate-gifting/desktop-items" },
  { name: "Diaries", image: "diaries.png", price: 350, route: "/services/corporate-gifting/diaries" },
  { name: "Laptop Sleeves", image: "laptop-sleeve.png", price: 600, route: "/services/corporate-gifting/bags/slimguard-laptop-sleeve" },
  { name: "Certificates", image: "certificates.png", price: 100, route: "/services/corporate-gifting/certificates" },
  { name: "Pens", image: "pens.png", price: 150, route: "/services/corporate-gifting/pens" },
  { name: "Keychains", image: "keychain.png", price: 100, route: "/services/corporate-gifting/keychains" },
  { name: "Caps", image: "cap.png", price: 200, route: "/services/tshirt-printing/caps" },
  { name: "T-Shirts", image: "tshirt.png", price: 300, route: "/services/personalized-gifts/tshirts" },
  { name: "Mugs", image: "mugs.png", price: 250, route: "/services/personalized-gifts/mugs" },
  { name: "Mousepad", image: "mousepad.png", price: 150, route: "/services/corporate-gifting/mousepad" },
  { name: "Luggage Tags", image: "luggage-tags.png", price: 100, route: "/services/corporate-gifting/luggage-tags" },
];

const CorporateGifting = ({ addToCart }) => {
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
    <section className="corporate-gifting" aria-label="Corporate Gifting Collection">
      <h2 className="section-title">Corporate Gifting</h2>
      <p className="section-subtitle">Thoughtful gifts for every occasion</p>

      <div className="gifts-container" aria-label="Main corporate gifting items">
        {corporateGiftingTypes.map((gift, index) => (
          <div className="gift-item" key={index}>
            <Link 
              to={gift.route} 
              className="gift-link"
              aria-label={`View details of ${gift.name}`}
            >
              <img 
                src={getCdnImage(gift.image, { width: 350, height: 350 })} 
                alt={gift.name} 
                className="gift-image" 
                width="350"
                height="350"
                loading="lazy"
              />
              <p className="gift-name">{gift.name}</p>
              <p className="gift-price">₹{gift.price}</p>
            </Link>
            <IconButton
              aria-label={`Add ${gift.name} to cart`}
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
              onClick={(e) => handleAddToCart(gift, e)}
            >
              Add to Cart &nbsp;
              <AddShoppingCartIcon aria-hidden="true" />
            </IconButton>
          </div>
        ))}
      </div>

      <p className="section-second-title" aria-label="Additional items to explore">Explore a wider range of options.</p>
      <div className="additional-items-container" aria-label="Additional corporate gifting items">
        {additionalItems.map((item, index) => (
          <div className="additional-item" key={index}>
            <Link 
              to={item.route} 
              className="additional-item-link"
              aria-label={`View details of ${item.name}`}
            >
              <img 
                src={getCdnImage(item.image, { width: 300, height: 300 })} 
                alt={item.name} 
                className="additional-item-image" 
                width="300"
                height="300"
                loading="lazy"
              />
              <p className="additional-item-name">{item.name}</p>
              <p className="additional-item-price">₹{item.price}</p>
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

export default CorporateGifting;