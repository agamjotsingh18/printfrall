import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "../styles/WelcomeKits.css";
import { getCdnImage } from "../utils/imageLoader";

const WelcomeKits = ({ addToCart }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  // Main kits data
  const mainKits = [
    {
      name: "Corporate Executive Kit",
      image: "welcome-kits.png",
      price: 2500,
      route: "/services/corporate-gifting/welcome-kits/corporate-executive-kit",
      items: [
        "Vintage Tan Diary",
        "Laptop Bag",
        "Polo T-shirt",
        "Elite Black Sipper",
        "Gilt Roller Pen",
        "A5 Sticker Sheet",
      ],
    },
    {
      name: "Creative Professional Kit",
      image: "creative-kit-2.png",
      price: 3000,
      route: "/services/corporate-gifting/welcome-kits/creative-professional-kit",
      items: [
        "Laptop Backpack",
        "Round Neck T-Shirt",
        "Faux Leather Diary",
        "Multicolour Steel Bottle",
        "Adroit Pen",
        "Mobile Pop Socket",
        "A5 Sticker Sheet",
      ],
    },
    {
      name: "Eco-Friendly Kit",
      image: "eco-kit-3.png",
      price: 2000,
      route: "/services/corporate-gifting/welcome-kits/eco-friendly-kit",
      items: [
        "Eco Kraft Cover Diary",
        "Kraft Pen",
        "Pure Copper Water Bottle",
        "A5 Sticker Sheet",
        "Thank You Card",
      ],
    },
    {
      name: "Startup Essentials Kit",
      image: "startup-kit-2.png",
      price: 1800,
      route: "/services/corporate-gifting/welcome-kits/startup-essentials-kit",
      items: [
        "Matte Finish Diary",
        "Stylus Pen",
        "Custom Bookmarks",
        "A5 Sticker Sheet",
        "Standard Mug",
        "Thank You Card",
      ],
    },
  ];

  // Customizable items data
  const customizableItems = {
    "Notebooks/Diaries": [
      { name: "Matte Finish Diaries", image: "matte-finish-diaries.png", price: 400 },
      { name: "Vintage Tan Diaries", image: "vintage-tan-diaries.png", price: 450 },
      { name: "Faux Leather Diaries", image: "faux-leather-diaries.png", price: 500 },
      { name: "Custom Canvas Diaries", image: "custom-canvas-diaries.png", price: 550 },
      { name: "Wave Texture Diaries", image: "wave-texture-diaries.png", price: 600 },
      { name: "Eco Kraft Cover Diaries", image: "eco-kraft-cover-diaries.png", price: 350 },
    ],
    Pens: [
      { name: "Stylus Pen", image: "stylus-pen.png", price: 100 },
      { name: "Kraft Pen", image: "kraft-pen.png", price: 120 },
      { name: "Scribble Pen", image: "scribble-pen.png", price: 150 },
      { name: "Adroit Pen", image: "adroit-pen.png", price: 200 },
      { name: "Gilt Roller Ball Pen", image: "gilt-roller-pen.png", price: 250 },
      { name: "Skate Ballpoint Pen", image: "skate-ballpoint-pen.png", price: 180 },
    ],
    Bookmarks: [{ name: "Custom Bookmarks", image: "thank-you-card.png", price: 50 }],
    Stickers: [
      { name: "Matte Laminated Stickers", image: "sticker.png", price: 30 },
      { name: "Holographic Stickers", image: "sticker.png", price: 40 },
      { name: "Gold Foiling Stickers", image: "sticker.png", price: 50 },
      { name: "Spot UV Stickers", image: "sticker.png", price: 60 },
      { name: "Silver Foiling Stickers", image: "sticker.png", price: 70 },
      { name: "Dome Stickers", image: "sticker.png", price: 80 },
      { name: "Front Adhesive Stickers", image: "sticker.png", price: 90 },
      { name: "Custom Opaque Stickers", image: "sticker.png", price: 100 },
      { name: "Clear Stickers", image: "sticker.png", price: 110 },
    ],
    "A5 Posters": [{ name: "A5 Posters", image: "calendar.png", price: 200 }],
    "Button Badges": [{ name: "Button Badges", image: "luggage-tag.png", price: 150 }],
    Mugs: [
      { name: "Standard Mug", image: "mug.png", price: 300 },
      { name: "Shimmer Dark Grey Mug", image: "shimmer-dark-grey-mug.png", price: 350 },
      { name: "Regal Black Mug", image: "regal-black-mug.png", price: 400 },
      { name: "Traveler Black Mug", image: "traveler-black-mug.png", price: 450 },
      { name: "Sleek Black Mug", image: "sleek-black-mug.png", price: 500 },
      { name: "Mini Mug", image: "mini-mug.png", price: 250 },
    ],
    "Sippers & Mugs": [
      { name: "Slim SS Bottle", image: "slim-ss-bottle.png", price: 600 },
      { name: "Floral SS Bottle", image: "floral-ss-bottle.png", price: 650 },
      { name: "Vega SS Bottle", image: "vega-ss-bottle.png", price: 700 },
      { name: "Premium Black Sipper", image: "premium-black-sipper.png", price: 750 },
      { name: "Multicolour Steel Bottle", image: "multicolor-steel-bottle.png", price: 800 },
      { name: "Pure Copper Water Bottle", image: "pure-copper-bottle.png", price: 900 },
      { name: "Lancy Hot & Cold White Sipper", image: "lancy-hot-cold-sipper.png", price: 850 },
      { name: "Glossy White Sipper", image: "glossy-white-sipper.png", price: 800 },
      { name: "Supreme Blue Sipper", image: "supreme-blue-sipper.png", price: 750 },
      { name: "Classic Black Sipper", image: "classic-black-sipper.png", price: 700 },
    ],
    "T-Shirts": [
      { name: "Round Neck T-shirts", image: "tshirt.png", price: 500 },
      { name: "Polo T-shirts", image: "tshirt.png", price: 600 },
      { name: "V-Neck T-shirts", image: "tshirt.png", price: 550 },
    ],
    "Laptop Bags/Backpacks": [
      { name: "Apex Carry Laptop Bag", image: "laptop-bag.png", price: 1200 },
      { name: "Prestige Pro Laptop Bag", image: "laptop-bag.png", price: 1300 },
      { name: "Vanguard Laptop Bag", image: "laptop-bag.png", price: 1400 },
      { name: "Nexus Essential Laptop Bag", image: "laptop-bag.png", price: 1100 },
      { name: "Elite Horizon Laptop Bag", image: "laptop-bag.png", price: 1500 },
      { name: "SlimGuard Laptop Sleeve", image: "laptop-sleeve.png", price: 1000 },
      { name: "Infinity Laptop Bag", image: "laptop-bag.png", price: 1600 },
    ],
    "Mobile Pop Socket": [{ name: "Mobile Pop Socket", image: "mobile-pop-socket.png", price: 200 }],
    "Custom Printed Luggage Tag": [
      { name: "Custom Printed Luggage Tag", image: "luggage-tag.png", price: 250 },
    ],
    "A5 Landscape Calendar": [{ name: "A5 Landscape Calendar", image: "calendar.png", price: 300 }],
    "ID Card Set": [
      { name: "Standard ID Card and Lanyard Combo", image: "standardIdCardSetImg.png", price: 400 },
      { name: "Premium ID Card and Lanyard Combo", image: "premiumIdCardSetImg.png", price: 500 },
      { name: "ID Card and Standard Holder Combo", image: "idCardStandardHolderImg.png", price: 450 },
      { name: "ID Card and Premium Holder Combo", image: "idCardPremiumHolderSetImg.png", price: 550 },
    ],
    "Thank You Card": [{ name: "Thank You Card", image: "thank-you-card.png", price: 50 }],
    "Temperature Display Flask": [
      { name: "Temperature Display Flask", image: "temperature-display-flask.png", price: 1000 },
    ],
    "Clock with Speaker": [{ name: "Clock with Speaker", image: "clock-with-speaker.png", price: 1200 }],
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

  const handleAddMainKitToCart = (kit) => {
    const cartItem = {
      ...kit,
      image: getCdnImage(kit.image, { width: 150, height: 150 }),
      quantity: 1
    };
    addToCart(cartItem);
  };

  const handleAddCustomKitToCart = () => {
    const customKit = {
      name: "Custom Kit",
      image: getCdnImage("custom-welcome-kit.png", { width: 150, height: 150 }),
      items: selectedItems,
      price: calculateTotalPrice(),
      quantity: 1
    };
    addToCart(customKit);
  };

  return (
    <section className="welcome-kits" aria-label="Welcome Kits Collection">
      <h2 className="section-title">Welcome Kits</h2>
      <p className="section-subtitle">Our best-selling kits for every need</p>

      <div className="main-kits-container" aria-label="Premium welcome kits">
        {mainKits.map((kit, index) => (
          <div key={index} className="kit-card" aria-label={`Kit: ${kit.name}`}>
            <Link 
              to={kit.route} 
              className="kit-link"
              aria-label={`View details of ${kit.name}`}
            >
              <img 
                src={getCdnImage(kit.image, { width: 350, height: 350 })} 
                alt={kit.name} 
                className="kit-image" 
                width="350"
                height="350"
                loading="lazy"
              />
              <h3 className="kit-name">{kit.name}</h3>
              <p className="kit-price" aria-label={`Price: ₹${kit.price}`}>₹{kit.price}</p>
              <ul className="kit-items" aria-label={`Items included in ${kit.name}`}>
                {kit.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </Link>
            <IconButton
              aria-label={`Add ${kit.name} to cart`}
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
              onClick={() => handleAddMainKitToCart(kit)}
            >
              Add to Cart &nbsp;
              <AddShoppingCartIcon aria-hidden="true" />
            </IconButton>
          </div>
        ))}
      </div>

      <h2 className="section-title">Create Your Custom Kit</h2>
      <div className="customizable-kit">
        <div className="categories" aria-label="Customizable items categories">
          {Object.keys(customizableItems).map((category) => (
            <div key={category} className="category" aria-label={`${category} category`}>
              <h3>{category}</h3>
              <ul aria-label={`${category} items list`}>
                {customizableItems[category].map((item, index) => (
                  <li 
                    key={index} 
                    onClick={() => handleAddItem(item)}
                    aria-label={`Add ${item.name} to your custom kit`}
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

        <div className="selected-items" aria-label="Your custom kit selection">
          <h3>Your Kit</h3>
          {selectedItems.length === 0 ? (
            <p aria-label="No items added yet">No items selected. Click on items above to build your kit.</p>
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
                    aria-label={`Remove ${item.name} from kit`}
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
            aria-label="Add custom kit to cart"
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
            onClick={handleAddCustomKitToCart}
          >
            Add Custom Kit to Cart &nbsp;
            <AddShoppingCartIcon aria-hidden="true" />
          </IconButton>
        </div>
      </div>
    </section>
  );
};

export default WelcomeKits;