import React from "react";
import { Link } from "react-router-dom";
import "../styles/Calendars.css";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

// Import images for each calendar type
import a5LandscapeCalendar from "../assets/a5-landscape-calendar-1-flatlay.png";
import bigSquareDesktopCalendar from "../assets/big-square-desktop-calendar.png";
import wallCalendar from "../assets/wall-calendar.png";
import longCalendar from "../assets/long-calendar.png";
import calendarWithPhoto from "../assets/calendar-with-photo.png";
import frameCalendars from "../assets/frame-calendar.png";

const calendarTypes = [
  { name: "A5 Landscape Calendar", image: a5LandscapeCalendar, price: 200, route: "/services/personalized-gifts/calendars/a5-landscape-calendar" },
  { name: "Big Square Desktop Calendar", image: bigSquareDesktopCalendar, price: 250, route: "/services/personalized-gifts/calendars/big-square-desktop-calendar" },
  { name: "Wall Calendar", image: wallCalendar, price: 300, route: "/services/personalized-gifts/calendars/wall-calendar" },
  { name: "Long Calendar", image: longCalendar, price: 150, route: "/services/personalized-gifts/calendars/long-calendar" },
  { name: "Calendar With Photo", image: calendarWithPhoto, price: 350, route: "/services/personalized-gifts/calendars/calendar-with-photo" },
  { name: "Frame Calendar", image: frameCalendars, price: 400, route: "/services/personalized-gifts/calendars/frame-calendar" },
];

const Calendars = ({ addToCart }) => {
  const handleAddToCart = (item) => {
    addToCart(item); // Add the item to the cart
  };

  return (
    <section className="calendars">
      <h2 className="section-title">Calendars</h2>
      <p className="section-subtitle">Choose from a variety of calendar styles</p>
      <div className="calendars-container">
        {calendarTypes.map((calendar, index) => (
          <div className="calendar-item" key={index}>
            {/* Wrap calendar details in a Link */}
            <Link to={calendar.route} className="calendar-link">
              <img src={calendar.image} alt={calendar.name} className="calendar-image" />
              <p className="calendar-name">{calendar.name}</p>
              <p className="calendar-price">₹{calendar.price}</p>
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
              onClick={() => handleAddToCart(calendar)}
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

export default Calendars;