import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "../styles/FestiveHampers.css";
import { getCdnImage } from "../utils/imageLoader";

const FestiveHampers = ({ addToCart }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const mainHampers = [
    {
      name: "Color Splash Hamper",
      image: "color-splash-hamper.png",
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
      image: "eco-hamper.png",
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
      image: "premium-hamper.png",
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

  const customizableItems = {
    Diaries: [
      { name: "Festive Diary", image: "wave-texture-diaries.png", price: 400 },
      { name: "Eco-Friendly Diary", image: "wave-texture-diaries.png", price: 450 },
      { name: "Luxury Festive Diary", image: "wave-texture-diaries.png", price: 500 },
      { name: "Custom Diary", image: "wave-texture-diaries.png", price: 550 },
    ],
    Pens: [
      { name: "Colorful Pens", image: "scribble-pen.png", price: 100 },
      { name: "Natural Color Pack", image: "scribble-pen.png", price: 150 },
      { name: "Premium Pens", image: "scribble-pen.png", price: 200 },
    ],
    TShirts: [
      { name: "Holi T-Shirt", image: "tshirt.png", price: 500 },
      { name: "Organic T-Shirt", image: "tshirt.png", price: 600 },
      { name: "Designer T-Shirt", image: "tshirt.png", price: 700 },
    ],
    Bags: [
      { name: "Eco-Friendly Bag", image: "laptop-bag.png", price: 800 },
      { name: "Reusable Bag", image: "laptop-bag.png", price: 850 },
    ],
    Mugs: [{ name: "Custom Mug", image: "mug.png", price: 300 }],
    Stickers: [{ name: "Festive Stickers", image: "sticker.png", price: 50 }],
    Cards: [{ name: "Thank You Card", image: "thank-you-card.png", price: 50 }],
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

  const handleAddMainHamperToCart = (hamper) => {
    const cartItem = {
      ...hamper,
      image: getCdnImage(hamper.image, { width: 150, height: 150 }),
      quantity: 1
    };
    addToCart(cartItem);
  };

  const handleAddCustomHamperToCart = () => {
    const customHamper = {
      name: "Custom Hamper",
      image: getCdnImage("custom-festive-hamper.webp", { width: 150, height: 150 }),
      items: selectedItems,
      price: calculateTotalPrice(),
      quantity: 1
    };
    addToCart(customHamper);
  };

  return (
    <section className="festive-hampers" aria-label="Festive Hampers Collection">
      <div className="diwali-banner" aria-label="Diwali announcement banner">
        <div className="banner-content">
          <span className="banner-icon" aria-label="Diya icon">🪔</span>
          <p className="banner-text" aria-label="Diwali kits announcement">Diwali Kits Coming Soon! 🎁</p>
          <span className="banner-icon" aria-label="Sparkle icon">✨</span>
        </div>
        <div className="banner-subtext" aria-label="Festive collection notification">Stay tuned for exclusive festive collections</div>
      </div>

      <h2 className="section-title">Festive Hampers</h2>
      <p className="section-subtitle">Celebrate Holi with our exclusive hampers</p>

      <div className="main-hampers-container" aria-label="Premium festive hampers">
        {mainHampers.map((hamper, index) => (
          <div key={index} className="hamper-card" aria-label={`Hamper: ${hamper.name}`}>
            <Link to={hamper.link} className="hamper-link" aria-label={`View details of ${hamper.name}`}>
              <img 
                src={getCdnImage(hamper.image, { width: 350, height: 350 })} 
                alt={hamper.name} 
                className="hamper-image" 
                width="350"
                height="350"
                loading="lazy"
              />
              <h3 className="hamper-name">{hamper.name}</h3>
              <p className="hamper-price" aria-label={`Price: ₹${hamper.price}`}>₹{hamper.price}</p>
              <ul className="hamper-items" aria-label={`Items included in ${hamper.name}`}>
                {hamper.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </Link>
            <IconButton
              aria-label={`Add ${hamper.name} to cart`}
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
              onClick={() => handleAddMainHamperToCart(hamper)}
            >
              Add to Cart &nbsp;
              <AddShoppingCartIcon aria-hidden="true" />
            </IconButton>
          </div>
        ))}
      </div>

      <h2 className="section-title">Create Your Custom Hamper</h2>
      <div className="customizable-hamper">
        <div className="categories" aria-label="Customizable items categories">
          {Object.keys(customizableItems).map((category) => (
            <div key={category} className="category" aria-label={`${category} category`}>
              <h3>{category}</h3>
              <ul aria-label={`${category} items list`}>
                {customizableItems[category].map((item, index) => (
                  <li 
                    key={index} 
                    onClick={() => handleAddItem(item)}
                    aria-label={`Add ${item.name} to your custom hamper`}
                    role="button"
                    tabIndex={0}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        handleAddItem(item);
                      }
                    }}
                  >
                    <img 
                      src={getCdnImage(item.image, { width: 80, height: 80 })} 
                      alt={item.name} 
                      width="80"
                      height="80"
                      loading="lazy"
                    />
                    <p>{item.name}</p>
                    <p aria-label={`Price: ₹${item.price}`}>₹{item.price}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="selected-items" aria-label="Your custom hamper selection">
          <h3>Your Hamper</h3>
          {selectedItems.length === 0 ? (
            <p aria-label="No items added yet">No items selected. Click on items above to build your hamper.</p>
          ) : (
            <ul aria-label="Selected items list">
              {selectedItems.map((item, index) => (
                <li key={index} className="selected-item" aria-label={`Selected item: ${item.name}`}>
                  <img 
                    src={getCdnImage(item.image, { width: 50, height: 50 })} 
                    alt={item.name} 
                    width="50"
                    height="50"
                  />
                  <p>{item.name}</p>
                  <p>₹{item.price}</p>
                  <button 
                    onClick={() => handleRemoveItem(item)}
                    aria-label={`Remove ${item.name} from hamper`}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
          <p className="total-price" aria-label={`Total price: ₹${calculateTotalPrice()}`}>
            Total: ₹{calculateTotalPrice()}
          </p>
          <IconButton
            aria-label="Add custom hamper to cart"
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
            onClick={handleAddCustomHamperToCart}
          >
            Add Custom Hamper to Cart &nbsp;
            <AddShoppingCartIcon aria-hidden="true" />
          </IconButton>
        </div>
      </div>
    </section>
  );
};

export default FestiveHampers;