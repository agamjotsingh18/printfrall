import React, { useState } from 'react';
import './CustomizableWelcomeKit.css';

const CustomizableWelcomeKit = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const categories = {
    Notebooks: [
      { name: "Matte Finish Diaries", image: "matteFinishDiariesImg", link: "/matte-finish-diaries" },
      { name: "Vintage Tan Diaries", image: "vintageTanDiariesImg", link: "/vintage-tan-diaries" },
      { name: "Faux Leather Diaries", image: "fauxLeatherDiariesImg", link: "/faux-leather-diaries" },
      { name: "Eco Kraft Cover Diaries", image: "ecoKraftCoverDiariesImg", link: "/eco-kraft-cover-diaries" },
    ],
    Pens: [
      { name: "Stylus Pen", image: "stylusPenImg", link: "/stylus-pen" },
      { name: "Kraft Pen", image: "kraftPenImg", link: "/kraft-pen" },
      { name: "Adroit Pen", image: "adroitPenImg", link: "/adroit-pen" },
      { name: "Gilt Roller Ball Pen", image: "giltRollerPenImg", link: "/gilt-roller-pen" },
    ],
    Stickers: [
      { name: "Matte Laminated Stickers", image: "matteLaminatedStickers", link: "/matte-laminated-stickers" },
      { name: "Holographic Stickers", image: "holographicStickers", link: "/holographic-stickers" },
      { name: "Gold Foiling Stickers", image: "goldFoilingStickers", link: "/gold-foiling-stickers" },
    ],
    Mugs: [
      { name: "Standard Mug", image: "standardMugImg", link: "/standard-mug" },
      { name: "Shimmer Dark Grey Mug", image: "shimmerMugImg", link: "/shimmer-mug" },
    ],
    "Laptop Bags": [
      { name: "Apex Carry Laptop Bag", image: "apexLaptopBagImg", link: "/apex-laptop-bag" },
      { name: "Elite Horizon Laptop Bag", image: "eliteLaptopBagImg", link: "/elite-laptop-bag" },
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
              <ul aria-label={`${category} items list`}>
                {categories[category].map((item, index) => (
                  <li 
                    key={index} 
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
                    {item.name}
                  </li>
                ))}
              </ul>
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
                  {item.name}
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