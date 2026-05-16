import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "../styles/WelcomeKits.css";

// Import images for kits (replace with actual image paths)
import corporateExecutiveKitImg from "../assets/welcome-kits.png";
import creativeProfessionalKitImg from "../assets/creative-kit-2.png";
import ecoFriendlyKitImg from "../assets/eco-kit-3.png";
import startupEssentialsKitImg from "../assets/startup-kit-2.png";
import customWelcomeKitImg from "../assets/custom-welcome-kit.png"; 

import matteFinishDiariesImg from "../assets/matte-finish-diaries.png";
import vintageTanDiariesImg from "../assets/vintage-tan-diaries.png";
import fauxLeatherDiariesImg from "../assets/faux-leather-diaries.png";
import customCanvasDiariesImg from "../assets/custom-canvas-diaries.png";
import waveTextureDiariesImg from "../assets/wave-texture-diaries.png";
import ecoKraftCoverDiariesImg from "../assets/eco-kraft-cover-diaries.png";
import stylusPenImg from "../assets/stylus-pen.png";
import kraftPenImg from "../assets/kraft-pen.png";
import scribblePenImg from "../assets/scribble-pen.png";
import adroitPenImg from "../assets/adroit-pen.png";
import giltRollerPenImg from "../assets/gilt-roller-pen.png";
import skateBallpointPenImg from "../assets/skate-ballpoint-pen.png";
import matteLaminatedStickersImg from "../assets/sticker.png";
import holographicStickersImg from "../assets/sticker.png";
import goldFoilingStickersImg from "../assets/sticker.png";
import spotUVStickersImg from "../assets/sticker.png";
import silverFoilingStickersImg from "../assets/sticker.png";
import domeStickersImg from "../assets/sticker.png";
import frontAdhesiveStickersImg from "../assets/sticker.png";
import customOpaqueStickersImg from "../assets/sticker.png";
import clearStickersImg from "../assets/sticker.png";
import standardMugImg from "../assets/mug.png";
import slimSSBottleImg from "../assets/slim-ss-bottle.png";
import floralSSBottleImg from "../assets/floral-ss-bottle.png";
import vegaSSBottleImg from "../assets/vega-ss-bottle.png";
import premiumBlackSipperImg from "../assets/premium-black-sipper.png";
import multicolorSteelBottleImg from "../assets/multicolor-steel-bottle.png";
import pureCopperBottleImg from "../assets/pure-copper-bottle.png";
import lancyHotColdSipperImg from "../assets/lancy-hot-cold-sipper.png";
import glossyWhiteSipperImg from "../assets/glossy-white-sipper.png";
import supremeBlueSipperImg from "../assets/supreme-blue-sipper.png";
import classicBlackSipperImg from "../assets/classic-black-sipper.png";
import shimmerDarkGreyMugImg from "../assets/shimmer-dark-grey-mug.png";
import regalBlackMugImg from "../assets/regal-black-mug.png";
import travelerBlackMugImg from "../assets/traveler-black-mug.png";
import sleekBlackMugImg from "../assets/sleek-black-mug.png";
import miniMugImg from "../assets/mini-mug.png";
import roundNeckTShirtImg from "../assets/tshirt.png";
import poloTShirtImg from "../assets/tshirt.png";
import vNeckTShirtImg from "../assets/tshirt.png";
import apexCarryLaptopBagImg from "../assets/laptop-bag.png";
import prestigeProLaptopBagImg from "../assets/laptop-bag.png";
import vanguardLaptopBagImg from "../assets/laptop-bag.png";
import nexusEssentialLaptopBagImg from "../assets/laptop-bag.png";
import eliteHorizonLaptopBagImg from "../assets/laptop-bag.png";
import slimGuardLaptopSleeveImg from "../assets/laptop-sleeve.png";
import infinityLaptopBagImg from "../assets/laptop-bag.png";
import mobilePopSocketImg from "../assets/mobile-pop-socket.png";
import customLuggageTagImg from "../assets/luggage-tag.png";
import calendarImg from "../assets/calendar.png";
import thankYouCardImg from "../assets/thank-you-card.png";
import temperatureDisplayFlaskImg from "../assets/temperature-display-flask.png";
import clockWithSpeakerImg from "../assets/clock-with-speaker.png";
import standardIdCardSetImg from "../assets/standardIdCardSetImg.png";
import premiumIdCardSetImg from "../assets/premiumIdCardSetImg.png";
import idCardStandardHolderImg from "../assets/idCardStandardHolderImg.png";
import idCardPremiumHolderSetImg from "../assets/idCardPremiumHolderSetImg.png";

const WelcomeKits = ({ addToCart }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  // Main kits data
  const mainKits = [
    {
      name: "Corporate Executive Kit",
      image: corporateExecutiveKitImg,
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
      image: creativeProfessionalKitImg,
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
      image: ecoFriendlyKitImg,
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
      image: startupEssentialsKitImg,
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
      { name: "Matte Finish Diaries", image: matteFinishDiariesImg, price: 400 },
      { name: "Vintage Tan Diaries", image: vintageTanDiariesImg, price: 450 },
      { name: "Faux Leather Diaries", image: fauxLeatherDiariesImg, price: 500 },
      { name: "Custom Canvas Diaries", image: customCanvasDiariesImg, price: 550 },
      { name: "Wave Texture Diaries", image: waveTextureDiariesImg, price: 600 },
      { name: "Eco Kraft Cover Diaries", image: ecoKraftCoverDiariesImg, price: 350 },
    ],
    Pens: [
      { name: "Stylus Pen", image: stylusPenImg, price: 100 },
      { name: "Kraft Pen", image: kraftPenImg, price: 120 },
      { name: "Scribble Pen", image: scribblePenImg, price: 150 },
      { name: "Adroit Pen", image: adroitPenImg, price: 200 },
      { name: "Gilt Roller Ball Pen", image: giltRollerPenImg, price: 250 },
      { name: "Skate Ballpoint Pen", image: skateBallpointPenImg, price: 180 },
    ],
    Bookmarks: [{ name: "Custom Bookmarks", image: thankYouCardImg, price: 50 }],
    Stickers: [
      { name: "Matte Laminated Stickers", image: matteLaminatedStickersImg, price: 30 },
      { name: "Holographic Stickers", image: holographicStickersImg, price: 40 },
      { name: "Gold Foiling Stickers", image: goldFoilingStickersImg, price: 50 },
      { name: "Spot UV Stickers", image: spotUVStickersImg, price: 60 },
      { name: "Silver Foiling Stickers", image: silverFoilingStickersImg, price: 70 },
      { name: "Dome Stickers", image: domeStickersImg, price: 80 },
      { name: "Front Adhesive Stickers", image: frontAdhesiveStickersImg, price: 90 },
      { name: "Custom Opaque Stickers", image: customOpaqueStickersImg, price: 100 },
      { name: "Clear Stickers", image: clearStickersImg, price: 110 },
    ],
    "A5 Posters": [{ name: "A5 Posters", image: calendarImg, price: 200 }],
    "Button Badges": [{ name: "Button Badges", image: customLuggageTagImg, price: 150 }],
    Mugs: [
      { name: "Standard Mug", image: standardMugImg, price: 300 },
      { name: "Shimmer Dark Grey Mug", image: shimmerDarkGreyMugImg, price: 350 },
      { name: "Regal Black Mug", image: regalBlackMugImg, price: 400 },
      { name: "Traveler Black Mug", image: travelerBlackMugImg, price: 450 },
      { name: "Sleek Black Mug", image: sleekBlackMugImg, price: 500 },
      { name: "Mini Mug", image: miniMugImg, price: 250 },
    ],
    "Sippers & Mugs": [
      { name: "Slim SS Bottle", image: slimSSBottleImg, price: 600 },
      { name: "Floral SS Bottle", image: floralSSBottleImg, price: 650 },
      { name: "Vega SS Bottle", image: vegaSSBottleImg, price: 700 },
      { name: "Premium Black Sipper", image: premiumBlackSipperImg, price: 750 },
      { name: "Multicolour Steel Bottle", image: multicolorSteelBottleImg, price: 800 },
      { name: "Pure Copper Water Bottle", image: pureCopperBottleImg, price: 900 },
      { name: "Lancy Hot & Cold White Sipper", image: lancyHotColdSipperImg, price: 850 },
      { name: "Glossy White Sipper", image: glossyWhiteSipperImg, price: 800 },
      { name: "Supreme Blue Sipper", image: supremeBlueSipperImg, price: 750 },
      { name: "Classic Black Sipper", image: classicBlackSipperImg, price: 700 },
    ],
    "T-Shirts": [
      { name: "Round Neck T-shirts", image: roundNeckTShirtImg, price: 500 },
      { name: "Polo T-shirts", image: poloTShirtImg, price: 600 },
      { name: "V-Neck T-shirts", image: vNeckTShirtImg, price: 550 },
    ],
    "Laptop Bags/Backpacks": [
      { name: "Apex Carry Laptop Bag", image: apexCarryLaptopBagImg, price: 1200 },
      { name: "Prestige Pro Laptop Bag", image: prestigeProLaptopBagImg, price: 1300 },
      { name: "Vanguard Laptop Bag", image: vanguardLaptopBagImg, price: 1400 },
      { name: "Nexus Essential Laptop Bag", image: nexusEssentialLaptopBagImg, price: 1100 },
      { name: "Elite Horizon Laptop Bag", image: eliteHorizonLaptopBagImg, price: 1500 },
      { name: "SlimGuard Laptop Sleeve", image: slimGuardLaptopSleeveImg, price: 1000 },
      { name: "Infinity Laptop Bag", image: infinityLaptopBagImg, price: 1600 },
    ],
    "Mobile Pop Socket": [{ name: "Mobile Pop Socket", image: mobilePopSocketImg, price: 200 }],
    "Custom Printed Luggage Tag": [
      { name: "Custom Printed Luggage Tag", image: customLuggageTagImg, price: 250 },
    ],
    "A5 Landscape Calendar": [{ name: "A5 Landscape Calendar", image: calendarImg, price: 300 }],
    "ID Card Set": [
      { name: "Standard ID Card and Lanyard Combo", image: standardIdCardSetImg, price: 400 },
      { name: "Premium ID Card and Lanyard Combo", image: premiumIdCardSetImg, price: 500 },
      { name: "ID Card and Standard Holder Combo", image: idCardStandardHolderImg, price: 450 },
      { name: "ID Card and Premium Holder Combo", image: idCardPremiumHolderSetImg, price: 550 },
    ],
    "Thank You Card": [{ name: "Thank You Card", image: thankYouCardImg, price: 50 }],
    "Temperature Display Flask": [
      { name: "Temperature Display Flask", image: temperatureDisplayFlaskImg, price: 1000 },
    ],
    "Clock with Speaker": [{ name: "Clock with Speaker", image: clockWithSpeakerImg, price: 1200 }],
  };

  // Add item to selected items
  const handleAddItem = (item) => {
    setSelectedItems([...selectedItems, item]);
  };

  // Remove item from selected items
  const handleRemoveItem = (item) => {
    setSelectedItems(selectedItems.filter((i) => i.name !== item.name));
  };

  // Calculate total price of selected items
  const calculateTotalPrice = () => {
    return selectedItems.reduce((total, item) => total + item.price, 0);
  };

  // Add custom kit to cart
  const handleAddCustomKitToCart = () => {
    const customKit = {
      name: "Custom Kit",
      image: customWelcomeKitImg,
      items: selectedItems,
      price: calculateTotalPrice(),
    };
    addToCart(customKit);
  };

  return (
    <section className="welcome-kits">
      <h2 className="section-title">Welcome Kits</h2>
      <p className="section-subtitle">Our best-selling kits for every need</p>

      {/* Main Kits Section - Updated with Links */}
      <div className="main-kits-container">
        {mainKits.map((kit, index) => (
          <div key={index} className="kit-card">
            <Link to={kit.route} className="kit-link">
              <img src={kit.image} alt={kit.name} className="kit-image" />
              <h3 className="kit-name">{kit.name}</h3>
              <p className="kit-price">₹{kit.price}</p>
              <ul className="kit-items">
                {kit.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </Link>
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
              onClick={() => addToCart(kit)}
            >
              Add to Cart &nbsp;
              <AddShoppingCartIcon />
            </IconButton>
          </div>
        ))}
      </div>

      {/* Customizable Kit Section */}
      <h2 className="section-title">Create Your Custom Kit</h2>
      <div className="customizable-kit">
        {/* Categories */}
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

        {/* Selected Items */}
        <div className="selected-items">
          <h3>Your Kit</h3>
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
            onClick={handleAddCustomKitToCart}
          >
            Add Custom Kit to Cart &nbsp;
            <AddShoppingCartIcon />
          </IconButton>
        </div>
      </div>
    </section>
  );
};

export default WelcomeKits;