import React from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "../styles/Drinkware.css";
import { getCdnImage } from "../utils/imageLoader";

const drinkwareItems = [
  { name: "Standard Mug", image: "mug.png", category: "Mugs", price: 300, route: "/services/personalized-gifts/mugs/standard-mug" },
  { name: "Shimmer Dark Grey Mug", image: "shimmer-dark-grey-mug.png", category: "Mugs", price: 350, route: "/services/personalized-gifts/mugs/shimmer-dark-grey-mug" },
  { name: "Regal Black Mug", image: "regal-black-mug.jpeg", category: "Mugs", price: 400, route: "/services/personalized-gifts/mugs/regal-black-mug" },
  { name: "Traveler Black Mug", image: "traveler-black-mug.png", category: "Mugs", price: 450, route: "/services/personalized-gifts/mugs/traveler-black-mug" },
  { name: "Sleek Black Mug", image: "sleek-black-mug.png", category: "Mugs", price: 500, route: "/services/personalized-gifts/mugs/sleek-black-mug" },
  { name: "Mini Mug", image: "mini-mug.png", category: "Mugs", price: 250, route: "/services/personalized-gifts/mugs/mini-mug" },

  { name: "Slim SS Bottle", image: "slim-ss-bottle.png", category: "Sippers & Mugs", price: 600, route: "/services/personalized-gifts/drinkware/slim-ss-bottle" },
  { name: "Floral SS Bottle", image: "floral-bottle-2.png", category: "Sippers & Mugs", price: 650, route: "/services/personalized-gifts/drinkware/floral-ss-bottle" },
  { name: "Vega SS Bottle", image: "vega-ss-bottle.png", category: "Sippers & Mugs", price: 700, route: "/services/personalized-gifts/drinkware/vega-ss-bottle" },
  { name: "Premium Black Sipper", image: "premium-black-sipper.png", category: "Sippers & Mugs", price: 750, route: "/services/personalized-gifts/drinkware/premium-black-sipper" },
  { name: "Multicolour Steel Bottle", image: "multicolor-steel-bottle.png", category: "Sippers & Mugs", price: 800, route: "/services/personalized-gifts/drinkware/multicolor-steel-bottle" },
  { name: "Pure Copper Water Bottle", image: "pure-copper-bottle.png", category: "Sippers & Mugs", price: 900, route: "/services/personalized-gifts/drinkware/pure-copper-bottle" },
  { name: "Lancy Hot & Cold White Sipper", image: "lancy-hot-cold-sipper.png", category: "Sippers & Mugs", price: 850, route: "/services/personalized-gifts/drinkware/lancy-hot-cold-sipper" },
  { name: "Glossy White Sipper", image: "glossy-white-sipper.png", category: "Sippers & Mugs", price: 800, route: "/services/personalized-gifts/drinkware/glossy-white-sipper" },
  { name: "Supreme Blue Sipper", image: "supreme-blue-sipper.png", category: "Sippers & Mugs", price: 750, route: "/services/personalized-gifts/drinkware/supreme-blue-sipper" },
  { name: "Classic Black Sipper", image: "classic-black-sipper.png", category: "Sippers & Mugs", price: 700, route: "/services/personalized-gifts/drinkware/classic-black-sipper" },
  { name: "Temperature Display Flask", image: "temperature-display-flask.png", category: "Sippers & Mugs", price: 1000, route: "/services/personalized-gifts/drinkware/temperature-display-flask" },
];

const Drinkware = ({ addToCart }) => {
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
    <section className="drinkware" aria-label="Drinkware Collection">
      <h2 className="section-title">Drinkware</h2>
      <p className="section-subtitle">Explore our premium collection of sippers and mugs</p>

      <h3 className="category-title" aria-label="Sippers and Mugs category">Sippers & Mugs</h3>
      <div className="drinkware-container" aria-label="Sippers and mugs collection">
        {drinkwareItems
          .filter((item) => item.category === "Sippers & Mugs")
          .map((item, index) => (
            <div className="drinkware-item" key={index} aria-label={`Product: ${item.name}`}>
              <Link 
                to={item.route} 
                className="drinkware-link"
                aria-label={`View details of ${item.name}`}
              >
                <img 
                  src={getCdnImage(item.image, { width: 350, height: 350 })} 
                  alt={item.name} 
                  className="drinkware-image" 
                  width="350"
                  height="350"
                  loading="lazy"
                />
                <p className="drinkware-name">{item.name}</p>
                <p className="drinkware-price" aria-label={`Price: ₹${item.price}`}>₹{item.price}</p>
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

      <h3 className="category-title" aria-label="Mugs category">Mugs</h3>
      <div className="drinkware-container" aria-label="Mugs collection">
        {drinkwareItems
          .filter((item) => item.category === "Mugs")
          .map((item, index) => (
            <div className="drinkware-item" key={index} aria-label={`Product: ${item.name}`}>
              <Link 
                to={item.route} 
                className="drinkware-link"
                aria-label={`View details of ${item.name}`}
              >
                <img 
                  src={getCdnImage(item.image, { width: 350, height: 350 })} 
                  alt={item.name} 
                  className="drinkware-image" 
                  width="350"
                  height="350"
                  loading="lazy"
                />
                <p className="drinkware-name">{item.name}</p>
                <p className="drinkware-price" aria-label={`Price: ₹${item.price}`}>₹{item.price}</p>
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

export default Drinkware;