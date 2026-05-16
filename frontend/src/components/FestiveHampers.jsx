import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "../styles/FestiveHampers.css";

// Import images for hampers (replace with actual images)
import colorSplashImg from "../assets/color-splash-hamper.png";
import ecoFriendlyImg from "../assets/eco-hamper.png";
import premiumHoliImg from "../assets/premium-hamper.png";
import customFestiveHamperImg from "../assets/custom-festive-hamper.webp";

// Import images for customizable items (same as before)
import festiveDiaryImg from "../assets/wave-texture-diaries.png";
import colorfulPensImg from "../assets/scribble-pen.png";
import holiTShirtImg from "../assets/tshirt.png";
import ecoFriendlyBagImg from "../assets/laptop-bag.png";
import holiMugImg from "../assets/mug.png";
import festiveStickersImg from "../assets/sticker.png";
import thankYouCardImg from "../assets/thank-you-card.png";

const FestiveHampers = ({ addToCart }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  // Updated main hampers data with new products and links
  const mainHampers = [
    {
      name: "Color Splash Hamper",
      image: colorSplashImg,
      price: 1500,
      link: "/services/corporate-gifting/festive-hampers/color-splash-hamper",
      items: [
        "Faux Leather Diary",
        "Scribble Pen",
        "Polo T-shirt",
        "Elite Horizon Laptop Bag",
      ],
    },
    {
      name: "Eco-Friendly Holi Hamper",
      image: ecoFriendlyImg,
      price: 2000,
      link: "/services/corporate-gifting/festive-hampers/eco-friendly-holi-hamper",
      items: [
        "Eco Kraft Cover Diary",
        "Kraft Pen",
        "Round Neck T-shirt",
        "Holographic Stickers",
      ],
    },
    {
      name: "Premium Holi Hamper",
      image: premiumHoliImg,
      price: 2500,
      link: "/services/corporate-gifting/festive-hampers/premium-holi-hamper",
      items: [
        "Classic Leather Combo",
        "Gilt Roller Ball Pen",
        "Infinity Laptop Bag",
        "Custom Mug",
      ],
    },
  ];

  // Customizable items data (unchanged)
  const customizableItems = {
    Diaries: [
      { name: "Festive Diary", image: festiveDiaryImg, price: 400 },
      { name: "Eco-Friendly Diary", image: festiveDiaryImg, price: 450 },
      { name: "Luxury Festive Diary", image: festiveDiaryImg, price: 500 },
      { name: "Custom Diary", image: festiveDiaryImg, price: 550 },
    ],
    Pens: [
      { name: "Colorful Pens", image: colorfulPensImg, price: 100 },
      { name: "Natural Color Pack", image: colorfulPensImg, price: 150 },
      { name: "Premium Pens", image: colorfulPensImg, price: 200 },
    ],
    TShirts: [
      { name: "Holi T-Shirt", image: holiTShirtImg, price: 500 },
      { name: "Organic T-Shirt", image: holiTShirtImg, price: 600 },
      { name: "Designer T-Shirt", image: holiTShirtImg, price: 700 },
    ],
    Bags: [
      { name: "Eco-Friendly Bag", image: ecoFriendlyBagImg, price: 800 },
      { name: "Reusable Bag", image: ecoFriendlyBagImg, price: 850 },
    ],
    Mugs: [{ name: "Custom Mug", image: holiMugImg, price: 300 }],
    Stickers: [{ name: "Festive Stickers", image: festiveStickersImg, price: 50 }],
    Cards: [{ name: "Thank You Card", image: thankYouCardImg, price: 50 }],
  };

  const handleAddItem = (item) => {
    setSelectedItems([...selectedItems, item]);
  };

  const handleRemoveItem = (item) => {
    setSelectedItems(selectedItems.filter((i) => i.name !== item.name));
  };

  const calculateTotalPrice = () => {
    return selectedItems.reduce((total, item) => total + item.price, 0);
  };

  const handleAddCustomHamperToCart = () => {
    const customHamper = {
      name: "Custom Hamper",
      image: customFestiveHamperImg,
      items: selectedItems,
      price: calculateTotalPrice(),
    };
    addToCart(customHamper);
  };

  return (
    <section className="festive-hampers">
      {/* Diwali Banner */}
      <div className="diwali-banner">
        <div className="banner-content">
          <span className="banner-icon">🪔</span>
          <p className="banner-text">Diwali Kits Coming Soon! 🎁</p>
          <span className="banner-icon">✨</span>
        </div>
        <div className="banner-subtext">Stay tuned for exclusive festive collections</div>
      </div>

      <h2 className="section-title">Festive Hampers</h2>
      <p className="section-subtitle">Celebrate Holi with our exclusive hampers</p>

      {/* Main Hampers Section */}
      <div className="main-hampers-container">
        {mainHampers.map((hamper, index) => (
          <div key={index} className="hamper-card">
            {/* Wrap everything except the button in a Link */}
            <Link to={hamper.link} className="hamper-link">
              <img src={hamper.image} alt={hamper.name} className="hamper-image" />
              <h3 className="hamper-name">{hamper.name}</h3>
              <p className="hamper-price">₹{hamper.price}</p>
              <ul className="hamper-items">
                {hamper.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </Link>
            <IconButton
              sx={{
                fontSize: "1.2rem",
                color: "white",
                background: "#70CB97",
                padding: "10px",
                borderRadius: "10px",
                "&:hover": {
                  transform: "scale(1.1)",
                  background: "#5cb67f",
                },
              }}
              onClick={() => addToCart(hamper)}
            >
              Add to Cart &nbsp;
              <AddShoppingCartIcon />
            </IconButton>
          </div>
        ))}
      </div>

      {/* Customizable Hamper Section */}
      <h2 className="section-title">Create Your Custom Hamper</h2>
      <div className="customizable-hamper">
        <div className="categories">
          {Object.keys(customizableItems).map((category) => (
            <div key={category} className="category">
              <h3>{category}</h3>
              <ul>
                {customizableItems[category].map((item, index) => (
                  <li key={index} onClick={() => handleAddItem(item)}>
                    <img src={item.image} alt={item.name} />
                    <p>{item.name}</p>
                    <p>₹{item.price}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="selected-items">
          <h3>Your Hamper</h3>
          <ul>
            {selectedItems.map((item, index) => (
              <li key={index} className="selected-item">
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>₹{item.price}</p>
                <button onClick={() => handleRemoveItem(item)}>Remove</button>
              </li>
            ))}
          </ul>
          <p className="total-price">Total: ₹{calculateTotalPrice()}</p>
          <IconButton
            sx={{
              fontSize: "1.2rem",
              color: "white",
              background: "#70CB97",
              padding: "10px",
              borderRadius: "10px",
              "&:hover": {
                transform: "scale(1.1)",
                background: "#5cb67f",
              },
            }}
            onClick={handleAddCustomHamperToCart}
          >
            Add Custom Hamper to Cart &nbsp;
            <AddShoppingCartIcon />
          </IconButton>
        </div>
      </div>
    </section>
  );
};

export default FestiveHampers;