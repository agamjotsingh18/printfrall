import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Services.css";
import {
  FaPrint,
  FaTshirt,
  FaBox,
  FaGift,
  FaFileAlt,
  FaChevronRight,
} from "react-icons/fa";
import { IconButton, Snackbar } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

// Import assets for each service item
import businessCardImg from "../assets/business-card.jpg";
import letterheadImg from "../assets/letterhead.avif";
import envelopeImg from "../assets/envelope.png";
import invoiceImg from "../assets/invoice.png";
import flyerImg from "../assets/flyer.png";
import standeesImg from "../assets/standees.png";
import customStandeeCutoutImg from "../assets/custom-standee-cutout.png";
import posterImg from "../assets/poster.png";
import brochureImg from "../assets/brochure.png";
import bannerImg from "../assets/banner-1-hung.png";
import mugImg from "../assets/mug.png";
import tshirtImg from "../assets/tshirt.png";
import photoFrameImg from "../assets/photo-frame.png";
import calendarImg from "../assets/calendar.png";
import stickerImg from "../assets/sticker.png";
import labelImg from "../assets/label.png";
import paperBagImg from "../assets/paper-bag.png";
import giftBoxImg from "../assets/gift-box.png";
import hoodieImg from "../assets/hoodie.png";
import sweatshirtImg from "../assets/sweatshirt.png";
import capImg from "../assets/cap.png";
import jacketImg from "../assets/jacket.png";
import acrylicSignBoardImg from "../assets/acrylic-sign-board.png";
import photoSelfieBoothImg from "../assets/photo-selfie-booth.png";

// Import assets for Corporate Gifting
import duoSetImg from "../assets/duo-sets.png";
import festiveHampersImg from "../assets/festive-hampers.jpg";
import welcomeKitsImg from "../assets/welcome-kits.png";
import drinkwareImg from "../assets/drinkware.png";
import bagsImg from "../assets/laptop-bag.png";

const services = [
  {
    name: "Marketing Materials",
    icon: <FaPrint />,
    items: [
      { name: "Banners", image: bannerImg, link: "/services/marketing-materials/banners", price: 100 },
      { name: "Custom Standee Cutout", image: customStandeeCutoutImg, link: "/services/marketing-materials/custom-standee-cutout", price: 150 },
      { name: "Acrylic Sign Board", image: acrylicSignBoardImg, link: "/services/marketing-materials/acrylic-sign-board", price: 200 },
      { name: "Posters", image: posterImg, link: "/services/marketing-materials/posters", price: 50 },
      { name: "Photo Selfie Booth", image: photoSelfieBoothImg, link: "/services/marketing-materials/photo-selfie-booth", price: 300 },
      { name: "Brochures", image: brochureImg, link: "/services/marketing-materials/brochures", price: 30 },
      { name: "Flyers", image: flyerImg, link: "/services/marketing-materials/flyers", price: 20 },
      { name: "Standees", image: standeesImg, link: "/services/marketing-materials/standees", price: 120 },
    ],
  },
  {
    name: "Packaging & Labels",
    icon: <FaBox />,
    items: [
      { name: "Stickers", image: stickerImg, link: "/services/packaging-labels/stickers", price: 10 },
      { name: "Labels", image: labelImg, link: "/services/packaging-labels/labels", price: 15 },
      { name: "Paper Bags", image: paperBagImg, link: "/services/packaging-labels/paper-bags", price: 25 },
      { name: "Gift Boxes", image: giftBoxImg, link: "/services/packaging-labels/gift-boxes", price: 40 },
    ],
  },
  {
    name: "Personalized Gifts",
    icon: <FaGift />,
    items: [
      { name: "Mugs", image: mugImg, link: "/services/personalized-gifts/mugs", price: 20 },
      { name: "T-Shirts", image: tshirtImg, link: "/services/personalized-gifts/tshirts", price: 25 },
      { name: "Photo Frames", image: photoFrameImg, link: "/services/personalized-gifts/photo-frames", price: 30 },
      { name: "Calendars", image: calendarImg, link: "/services/personalized-gifts/calendars", price: 15 },
    ],
  },
  {
    name: "Business Essentials",
    icon: <FaFileAlt />,
    items: [
      { name: "Business Cards", image: businessCardImg, link: "/services/business-essentials/business-cards", price: 10 },
      { name: "Letterheads", image: letterheadImg, link: "/services/business-essentials/letterheads", price: 20 },
      { name: "Envelopes", image: envelopeImg, link: "/services/business-essentials/envelopes", price: 15 },
      { name: "Invoices", image: invoiceImg, link: "/services/business-essentials/invoices", price: 5 },
    ],
  },
  {
    name: "T-Shirt Printing",
    icon: <FaTshirt />,
    items: [
      { name: "Custom T-Shirts", image: tshirtImg, link: "/services/personalized-gifts/tshirts", price: 25 },
      { name: "Hoodies", image: hoodieImg, link: "/services/tshirt-printing/hoodies", price: 40 },
      { name: "Sweatshirts", image: sweatshirtImg, link: "/services/tshirt-printing/sweatshirts", price: 35 },
      { name: "Caps", image: capImg, link: "/services/tshirt-printing/caps", price: 20 },
      { name: "Jackets", image: jacketImg, link: "/services/tshirt-printing/jackets", price: 50 },
    ],
  },
];

const corporateGifting = {
  name: "Corporate Gifting",
  icon: <FaGift />,
  items: [
    { name: "Duo Sets", image: duoSetImg, link: "/services/corporate-gifting/duo-sets", price: 100 },
    { name: "Festive Hampers", image: festiveHampersImg, link: "/services/corporate-gifting/festive-hampers", price: 150 },
    { name: "Welcome Kits", image: welcomeKitsImg, link: "/services/corporate-gifting/welcome-kits", price: 200 },
    { name: "Drinkware", image: drinkwareImg, link: "/services/corporate-gifting/drinkware", price: 50 },
    { name: "Bags", image: bagsImg, link: "/services/corporate-gifting/bags", price: 80 },
  ],
};

const Services = ({ addToCart }) => {
  const serviceItemsRef = useRef([]);
  const corporateGiftingRef = useRef(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const scrollRight = (index) => {
    const container = serviceItemsRef.current[index];
    if (
      container &&
      container.scrollLeft < container.scrollWidth - container.clientWidth
    ) {
      container.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  // Safe, non-passive horizontal scroll handler hook execution
  useEffect(() => {
    const attachWheelListener = (container) => {
      if (!container) return;

      const onWheelEvent = (e) => {
        if (
          (e.deltaY < 0 && container.scrollLeft > 0) ||
          (e.deltaY > 0 && container.scrollLeft < container.scrollWidth - container.clientWidth)
        ) {
          // Instruct browser explicitly that we are hijacking the wheel movement axis cleanly
          e.preventDefault();
          container.scrollBy({
            left: e.deltaY < 0 ? -40 : 40,
            behavior: "auto", // Smooth behavior inside event listeners can sometimes cause jittering
          });
        }
      };

      container.addEventListener("wheel", onWheelEvent, { passive: false });
      return () => container.removeEventListener("wheel", onWheelEvent);
    };

    // Bind layout rows to handlers
    const cleanups = serviceItemsRef.current.map((ref) => attachWheelListener(ref));
    const corporateCleanup = attachWheelListener(corporateGiftingRef.current);

    return () => {
      cleanups.forEach((cleanup) => cleanup && cleanup());
      if (corporateCleanup) corporateCleanup();
    };
  }, []);

  const handleAddToCart = (item) => {
    addToCart(item);
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <section className="services">
      <h2 className="section-title">Our Printing Services</h2>
      <p className="section-subtitle">High-quality prints for all your needs</p>

      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-row" key={index}>
            <div className="service-category">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-name">{service.name}</h3>
            </div>
            <div
              className="service-items"
              ref={(el) => (serviceItemsRef.current[index] = el)}
            >
              {service.items.map((item, idx) => (
                <div className="service-card" key={idx}>
                  <Link to={item.link}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="service-image"
                    />
                    <p className="service-item-name">{item.name}</p>
                    <p className="service-item-price">₹{item.price}</p>
                  </Link>
                  <IconButton
                    sx={{
                      fontSize: "1.2rem",
                      color: "white",
                      background: "#70CB97",
                      padding: "10px",
                      borderRadius: "10px",
                      "& :hover": {
                        transform: "scale(1.05)",
                        background: "#5cb67f",
                      },
                    }}
                    onClick={() => handleAddToCart(item)}
                  >
                    Add to Cart  
                    <AddShoppingCartIcon sx={{ ml: 1 }} />
                  </IconButton>
                </div>
              ))}
            </div>
            {service.items.length > 4 && (
              <button
                className="scroll-button next"
                onClick={() => scrollRight(index)}
              >
                <FaChevronRight />
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="corporate-gifting-section">
        <h2 className="section-title">Corporate Gifting</h2>
        <p className="section-subtitle">
          Thoughtful gifts for every corporate occasion
        </p>
        <div className="services-container">
          <div className="service-row">
            <div className="service-category">
              <div className="service-icon">{corporateGifting.icon}</div>
              <h3 className="service-name">{corporateGifting.name}</h3>
            </div>
            <div
              className="service-items"
              ref={corporateGiftingRef}
            >
              {corporateGifting.items.map((item, idx) => (
                <div className="service-card" key={idx}>
                  <Link to={item.link}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="service-image"
                    />
                    <p className="service-item-name">{item.name}</p>
                    <p className="service-item-price">₹{item.price}</p>
                  </Link>
                  <IconButton
                    sx={{
                      fontSize: "1.2rem",
                      color: "white",
                      background: "#70CB97",
                      padding: "10px",
                      borderRadius: "10px",
                      "& :hover": {
                        transform: "scale(1.05)",
                        background: "#5cb67f",
                      },
                    }}
                    onClick={() => handleAddToCart(item)}
                  >
                    Add to Cart  
                    <AddShoppingCartIcon sx={{ ml: 1 }} />
                  </IconButton>
                </div>
              ))}
            </div>
          </div>

          <div className="view-all-button-container">
            <Link to="/services/corporate-gifting" className="view-all-button">
              View All Corporate Gifting Items
            </Link>
          </div>
        </div>
      </div>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="Item added to cart!"
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
    </section>
  );
};

export default Services;