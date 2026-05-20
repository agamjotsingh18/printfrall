import React from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "../styles/CorporateGifting.css";

// Import images for each corporate gifting type
import duoSetImg from "../assets/duo-sets.png";
import festiveHampersImg from "../assets/festive-hampers.jpg";
import welcomeKitsImg from "../assets/welcome-kits.png";
// import engagementKitsImg from "../assets/engagement-kits.webp";

// Import images for additional items
import bagsImg from "../assets/bags.png";
import drinkwareImg from "../assets/drinkware.png";
import awardsImg from "../assets/awards-trophies.png";
import medalsImg from "../assets/medals.png";
import calendarsImg from "../assets/calendar.png";
import desktopItemsImg from "../assets/desktop-items.png";
import diariesImg from "../assets/diaries.png";
import laptopSleevesImg from "../assets/laptop-sleeve.png";
import certificatesImg from "../assets/certificates.png";
import engravedPensImg from "../assets/pens.png";
import keychainsImg from "../assets/keychain.png";
import capsImg from "../assets/cap.png";
import tshirtsImg from "../assets/tshirt.png";
import mugsImg from "../assets/mugs.png";
import mousepadImg from "../assets/mousepad.png";
import luggageTagsImg from "../assets/luggage-tags.png";

const corporateGiftingTypes = [
  { name: "Festive Hampers", image: festiveHampersImg, price: 1000, route: "/services/corporate-gifting/festive-hampers" },
  { name: "Welcome Kits", image: welcomeKitsImg, price: 800, route: "/services/corporate-gifting/welcome-kits" },
  { name: "Duo Sets", image: duoSetImg, price: 1200, route: "/services/corporate-gifting/duo-sets" },
  // { name: "Engagement Kits", image: engagementKitsImg, price: 1500, route: "/services/corporate-gifting/engagement-kits" },
];

const additionalItems = [
  { name: "Bags", image: bagsImg, price: 500, route: "/services/corporate-gifting/bags" },
  { name: "Drinkware", image: drinkwareImg, price: 300, route: "/services/corporate-gifting/drinkware" },
  { name: "Awards & Trophies", image: awardsImg, price: 700, route: "/services/corporate-gifting/awards-trophies" },
  { name: "Medals", image: medalsImg, price: 200, route: "/services/corporate-gifting/medals" },
  { name: "Calendars", image: calendarsImg, price: 250, route: "/services/personalized-gifts/calendars" },
  { name: "Desktop Items", image: desktopItemsImg, price: 400, route: "/services/corporate-gifting/desktop-items" },
  { name: "Diaries", image: diariesImg, price: 350, route: "/services/corporate-gifting/diaries" },
  { name: "Laptop Sleeves", image: laptopSleevesImg, price: 600, route: "/services/corporate-gifting/bags/slimguard-laptop-sleeve" },
  { name: "Certificates", image: certificatesImg, price: 100, route: "/services/corporate-gifting/certificates" },
  { name: "Pens", image: engravedPensImg, price: 150, route: "/services/corporate-gifting/pens" },
  { name: "Keychains", image: keychainsImg, price: 100, route: "/services/corporate-gifting/keychains" },
  { name: "Caps", image: capsImg, price: 200, route: "/services/tshirt-printing/caps" },
  { name: "T-Shirts", image: tshirtsImg, price: 300, route: "/services/personalized-gifts/tshirts" },
  { name: "Mugs", image: mugsImg, price: 250, route: "/services/personalized-gifts/mugs" },
  { name: "Mousepad", image: mousepadImg, price: 150, route: "/services/corporate-gifting/mousepad" },
  { name: "Luggage Tags", image: luggageTagsImg, price: 100, route: "/services/corporate-gifting/luggage-tags" },
];

const CorporateGifting = ({ addToCart }) => {
  const handleAddToCart = (item, e) => {
    e?.preventDefault();
    e?.stopPropagation();
    addToCart(item);
  };

  return (
    <section className="corporate-gifting" aria-label="Corporate Gifting Collection">
      <h2 className="section-title">Corporate Gifting</h2>
      <p className="section-subtitle">Thoughtful gifts for every occasion</p>

      {/* Main Corporate Gifting Items */}
      <div className="gifts-container" aria-label="Main corporate gifting items">
        {corporateGiftingTypes.map((gift, index) => (
          <div className="gift-item" key={index}>
            <Link 
              to={gift.route} 
              className="gift-link"
              aria-label={`View details of ${gift.name}`}
            >
              <img 
                src={gift.image} 
                alt={gift.name} 
                className="gift-image" 
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

      {/* Additional Items Section */}
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
                src={item.image} 
                alt={item.name} 
                className="additional-item-image" 
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