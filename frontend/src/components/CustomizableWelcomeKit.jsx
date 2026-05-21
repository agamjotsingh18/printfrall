import React, { useState } from 'react';
import './CustomizableWelcomeKit.css';
import { getCdnImage } from "../utils/imageLoader";

const CustomizableWelcomeKit = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const categories = {
    Notebooks: [
      { name: "Matte Finish Diaries", image: "matte-finish-diaries.png", link: "/matte-finish-diaries" },
      { name: "Vintage Tan Diaries", image: "vintage-tan-diaries.png", link: "/vintage-tan-diaries" },
      { name: "Faux Leather Diaries", image: "faux-leather-diaries.png", link: "/faux-leather-diaries" },
      { name: "Eco Kraft Cover Diaries", image: "eco-kraft-cover-diaries.png", link: "/eco-kraft-cover-diaries" },
    ],
    Pens: [
      { name: "Stylus Pen", image: "stylus-pen.png", link: "/stylus-pen" },
      { name: "Kraft Pen", image: "kraft-pen.png", link: "/kraft-pen" },
      { name: "Adroit Pen", image: "adroit-pen.png", link: "/adroit-pen" },
      { name: "Gilt Roller Ball Pen", image: "gilt-roller-pen.png", link: "/gilt-roller-pen" },
    ],
    Stickers: [
      { name: "Matte Laminated Stickers", image: "matte-laminated-stickers.png", link: "/matte-laminated-stickers" },
      { name: "Holographic Stickers", image: "holographic-stickers.png", link: "/holographic-stickers" },
      { name: "Gold Foiling Stickers", image: "gold-foiling-stickers.png", link: "/gold-foiling-stickers" },
    ],
    Mugs: [
      { name: "Standard Mug", image: "standard-mug.png", link: "/standard-mug" },
      { name: "Shimmer Dark Grey Mug", image: "shimmer-dark-grey-mug.png", link: "/shimmer-mug" },
    ],
    "Laptop Bags": [
      { name: "Apex Carry Laptop Bag", image: "apex-carry-laptop-bag.png", link: "/apex-laptop-bag" },
      { name: "Elite Horizon Laptop Bag", image: "laptop-bag.png", link: "/elite-laptop-bag" },
    ],
  };

  const handleAddItem = (item) => {
    setSelectedItems([...selectedItems, item]);
  };

  const handleRemoveItem = (item) => {
    setSelectedItems(selectedItems.filter((i) => i.name !== item.name));
  };

  return (
    <div className="customizable-kit" aria-label="Customizable Welcome Kit Builder">
      <h2 aria-label="Create your custom corporate kit">Create Your Custom Kit</h2>
      <div className="kit-builder">
        <div className="categories" aria-label="Product categories">
          {Object.keys(categories).map((category) => (
            <div key={category} className="category" aria-label={`${category} category`}>
              <h3>{category}</h3>
              <div className="category-grid" aria-label={`${category} items list`}>
                {categories[category].map((item, index) => (
                  <div 
                    key={index} 
                    className="kit-item-card"
                    onClick={() => handleAddItem(item)}
                    aria-label={`Add ${item.name} to your kit`}
                    role="button"
                    tabIndex={0}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        handleAddItem(item);
                      }
                    }}
                  >
                    <img 
                      src={getCdnImage(item.image, { width: 120, height: 120 })} 
                      alt={item.name}
                      className="kit-item-thumbnail"
                      loading="lazy"
                      width="120"
                      height="120"
                    />
                    <p className="kit-item-name">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="selected-items" aria-label="Your selected kit items">
          <h3 aria-label="Items in your custom kit">Your Kit</h3>
          {selectedItems.length === 0 ? (
            <p aria-label="No items selected yet">No items selected. Click on items above to build your kit.</p>
          ) : (
            <ul aria-label="Selected items list">
              {selectedItems.map((item, index) => (
                <li key={index} className="selected-item" aria-label={`Selected item: ${item.name}`}>
                  <img 
                    src={getCdnImage(item.image, { width: 50, height: 50 })} 
                    alt="" 
                    className="selected-item-mini"
                    width="50"
                    height="50"
                  />
                  <span>{item.name}</span>
                  <button 
                    onClick={() => handleRemoveItem(item)}
                    aria-label={`Remove ${item.name} from your kit`}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomizableWelcomeKit;