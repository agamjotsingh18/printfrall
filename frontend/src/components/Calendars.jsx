import React from "react";
import { Link } from "react-router-dom";
import "../styles/Calendars.css";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { getCdnImage } from "../utils/imageLoader";

const calendarTypes = [
  { name: "A5 Landscape Calendar", image: "a5-landscape-calendar-1-flatlay.png", price: 200, route: "/services/personalized-gifts/calendars/a5-landscape-calendar" },
  { name: "Big Square Desktop Calendar", image: "big-square-desktop-calendar.png", price: 250, route: "/services/personalized-gifts/calendars/big-square-desktop-calendar" },
  { name: "Wall Calendar", image: "wall-calendar.png", price: 300, route: "/services/personalized-gifts/calendars/wall-calendar" },
  { name: "Long Calendar", image: "long-calendar.png", price: 150, route: "/services/personalized-gifts/calendars/long-calendar" },
  { name: "Calendar With Photo", image: "calendar-with-photo.png", price: 350, route: "/services/personalized-gifts/calendars/calendar-with-photo" },
  { name: "Frame Calendar", image: "frame-calendar.png", price: 400, route: "/services/personalized-gifts/calendars/frame-calendar" },
];

const Calendars = ({ addToCart }) => {
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
    <section className="calendars" aria-label="Calendars Collection">
      <h2 className="section-title">Calendars</h2>
      <p className="section-subtitle">Choose from a variety of calendar styles</p>
      <div className="calendars-container">
        {calendarTypes.map((calendar, index) => (
          <div className="calendar-item" key={index}>
            <Link 
              to={calendar.route} 
              className="calendar-link"
              aria-label={`View details of ${calendar.name}`}
            >
              <img 
                src={getCdnImage(calendar.image, { width: 350, height: 350 })} 
                alt={calendar.name} 
                className="calendar-image" 
                width="350"
                height="350"
                loading="lazy"
              />
              <p className="calendar-name">{calendar.name}</p>
              <p className="calendar-price">₹{calendar.price}</p>
            </Link>
            <IconButton
              aria-label={`Add ${calendar.name} to cart`}
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
              onClick={(e) => handleAddToCart(calendar, e)}
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

export default Calendars;