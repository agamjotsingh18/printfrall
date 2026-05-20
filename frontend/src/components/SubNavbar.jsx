import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/SubNavbar.css";

const categories = [
  {
    name: "Business Essentials",
    subcategories: [
      {
        name: "Business Cards",
        link: "/services/business-essentials/business-cards",
        basePath: "/services/business-essentials/business-cards",
        products: [
          "Standard Business Card",
          "Premium Laminated Card",
          "Textured Business Card",
          "Square Business Card",
          "Rounded Corner Business Card",
          "Metallic Business Card",
          "Circle Business Card",
          "U-Shaped Business Card",
        ],
      },
      {
        name: "Envelopes",
        link: "/services/business-essentials/envelopes",
        basePath: "/services/business-essentials/envelopes",
        products: [
          "hash10 Envelope",
          "A5 Envelope",
          "A6 Envelope",
          "Kraft Envelope",
        ],
      },
      {
        name: "Letterheads",
        link: null,
        basePath: "/services/business-essentials/letterheads",
        products: ["Custom Letterheads", "Prescription Note Pad"],
      },
      {
        name: "Invoices",
        link: null,
        basePath: "/services/business-essentials/invoices",
        products: [
          "Full Colour Printed Bill Books",
          "Black and White Printed Bill Books",
        ],
      },
    ],
  },
  {
    name: "Marketing Materials",
    subcategories: [
      { name: "Banners", link: "/services/marketing-materials/banners", basePath: "/services/marketing-materials/banners", products: [] },
      { name: "Custom Standee Cutout", link: "/services/marketing-materials/custom-standee-cutout", basePath: "/services/marketing-materials/custom-standee-cutout", products: [] },
      {
        name: "Acrylic Sign Board",
        link: "/services/marketing-materials/acrylic-sign-board",
        basePath: "/services/marketing-materials/acrylic-sign-board",
        products: [
          "Acrylic Photo Frames",
          "Acrylic Name Plates",
          "Acrylic Calendar",
          "Acrylic Magnets",
          "Acrylic Keychains",
          "Acrylic Coasters",
        ],
      },
      {
        name: "Flyers",
        link: "/services/marketing-materials/flyers",
        basePath: "/services/marketing-materials/flyers",
        products: [
          "Offer Flyers",
          "Business Flyers",
          "Product Catalog Flyers",
          "A4 Flyer Printing",
          "A5 Flyer Printing",
          "DL Flyer Printing",
        ],
      },
      { name: "Posters", link: "/services/marketing-materials/posters", basePath: "/services/marketing-materials/posters", products: [] },
      { name: "Photo Selfie Booth", link: "/services/marketing-materials/photo-selfie-booth", basePath: "/services/marketing-materials/photo-selfie-booth", products: [] },
      {
        name: "Brochures",
        link: null,
        basePath: "/services/marketing-materials/brochures",
        products: ["Half Fold Brochure", "Tri Fold Brochure"],
      },
      { name: "Standees", link: "/services/marketing-materials/standees", basePath: "/services/marketing-materials/standees", products: [] },
    ],
  },
  {
    name: "Packaging & Labels",
    subcategories: [
      {
        name: "Stickers",
        link: "/services/packaging-labels/stickers",
        basePath: "/services/packaging-labels/stickers",
        products: [
          "Matte Laminated Stickers",
          "Holographic Stickers",
          "Gold Foiling Stickers",
          "Spot UV Stickers",
          "Silver Foiling Stickers",
          "Dome Stickers",
          "Front Adhesive Stickers",
          "Custom Opaque Stickers",
          "Clear Stickers",
        ],
      },
      {
        name: "Labels",
        link: "/services/packaging-labels/labels",
        basePath: "/services/packaging-labels/labels",
        products: [
          "Metallic Gold Paper Labels",
          "Metallic Silver Paper Labels",
          "Kraft Paper Labels",
          "Premium White Labels",
          "Clear Labels",
          "Water Proof Labels",
        ],
      },
      {
        name: "Paper Bags",
        link: null,
        basePath: "/services/packaging-labels/paper-bags",
        products: [
          "Gift Paper Bags",
          "Takeout Paper Bags",
          "Pre-printed Paper Bags",
        ],
      },
      { name: "Gift Boxes", link: "/services/packaging-labels/gift-boxes", basePath: "/services/packaging-labels/gift-boxes", products: [] },
    ],
  },
  {
    name: "Personalized Gifts",
    subcategories: [
      {
        name: "Photo Frames",
        link: "/services/personalized-gifts/photo-frames",
        basePath: "/services/personalized-gifts/photo-frames",
        products: [
          "Photo with LED Frames",
          "Photo with Classic Frames",
          "Photo with Wall Frames",
          "Canvas Photo with Frames",
          "Matte Photo with Frames",
          "Custom Acrylic Photo Frames",
          "Frameless Photo Frames",
        ],
      },
      {
        name: "Mugs",
        link: "/services/personalized-gifts/mugs",
        basePath: "/services/personalized-gifts/mugs",
        products: [
          "Standard Mug",
          "Mini Mug",
          "Shimmer Dark Grey Mug",
          "Regal Black Mug",
          "Traveler Black Mug",
          "Sleek Black Mug",
        ],
      },
      {
        name: "T-shirts",
        link: "/services/personalized-gifts/tshirts",
        basePath: "/services/personalized-gifts/tshirts",
        products: [
          "Round Neck T-shirts",
          "Polo T-shirts",
          "V-Neck T-shirts",
        ],
      },
      {
        name: "Calendars",
        link: "/services/personalized-gifts/calendars",
        basePath: "/services/personalized-gifts/calendars",
        products: [
          "A5 Landscape Calendar",
          "Big Square Desktop Calendar",
          "Wall Calendar",
          "Long Calendar",
          "Calendar With Photo",
          "Frame Calendar",
        ],
      },
    ],
  },
  {
    name: "T-shirt Printing",
    subcategories: [
      {
        name: "Custom T-shirts",
        link: "/services/personalized-gifts/tshirts",
        basePath: "/services/personalized-gifts/tshirts",
        products: [
          "Round Neck T-shirts",
          "Polo T-shirts",
          "V-Neck T-shirts",
        ],
      },
      {
        name: "Hoodies",
        link: "/services/tshirt-printing/hoodies",
        basePath: "/services/tshirt-printing/hoodies",
        products: [
          "Custom Printed Zipper Hoodie",
          "Custom Printed Pullover Hoodie",
          "Embroidered Zip Hoodie",
          "Embroidered Pullover Hoodie",
        ],
      },
      { name: "Sweatshirts", link: "/services/tshirt-printing/sweatshirts", basePath: "/services/tshirt-printing/sweatshirts", products: [] },
      { name: "Jackets", link: "/services/tshirt-printing/jackets", basePath: "/services/tshirt-printing/jackets", products: [] },
      {
        name: "Caps",
        link: "/services/tshirt-printing/caps",
        basePath: "/services/tshirt-printing/caps",
        products: [
          "Printed Plain Caps",
          "Line Stitching Caps",
          "Piping Caps",
          "Tipping Caps",
        ],
      },
    ],
  },
  {
    name: "Corporate Gifting",
    link: "/services/corporate-gifting",
    subcategories: [
      {
        name: "Welcome Kits",
        link: "/services/corporate-gifting/welcome-kits",
        basePath: "/services/corporate-gifting/welcome-kits",
        products: [
          "Corporate Executive Kit",
          "Creative Professional Kit",
          "Eco-Friendly Kit",
          "Startup Essentials Kit",
        ],
      },
      {
        name: "Festive Hampers",
        link: "/services/corporate-gifting/festive-hampers",
        basePath: "/services/corporate-gifting/festive-hampers",
        products: [
          "Color Splash Hamper",
          "Eco-Friendly Holi Hamper",
          "Premium Holi Hamper",
        ],
      },
      {
        name: "Drinkware",
        link: "/services/corporate-gifting/drinkware",
        basePath: "/services/corporate-gifting/drinkware",
        products: [],
      },
      {
        name: "Bags",
        link: "/services/corporate-gifting/bags",
        basePath: "/services/corporate-gifting/bags",
        products: [],
      },
      {
        name: "Awards & Trophies",
        link: "/services/corporate-gifting/awards-trophies",
        basePath: "/services/corporate-gifting/awards-trophies",
        products: [],
      },
      {
        name: "Certificates",
        link: "/services/corporate-gifting/certificates",
        basePath: "/services/corporate-gifting/certificates",
        products: [],
      },
      {
        name: "Duo Sets",
        link: "/services/corporate-gifting/duo-sets",
        basePath: "/services/corporate-gifting/duo-sets",
        products: [
          "Eco-Grip Notebook",
          "Elegant Journal Combo",
          "Elite Executive Combo",
          "Classic Leather Combo",
        ],
      },
      {
        name: "Pens",
        link: "/services/corporate-gifting/pens",
        basePath: "/services/corporate-gifting/pens",
        products: [],
      },
    ],
  },
];

const SubNavbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  // Helper to convert product name to URL slug
  const getProductSlug = (productName) => {
    return productName
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/\(/g, "")
      .replace(/\)/g, "")
      .replace(/#/g, "hash");
  };

  return (
    <nav className="sub-navbar" aria-label="Category navigation">
      <div className="sub-nav-container">
        {categories.map((category, index) => (
          <div
            className={`sub-nav-item ${
              category.name === "Corporate Gifting" ? "corporate-item" : ""
            }`}
            key={index}
            onMouseEnter={() => toggleDropdown(index)}
            onMouseLeave={() => toggleDropdown(null)}
            aria-label={`${category.name} category`}
          >
           {category.link ? (
              <Link 
                to={category.link} 
                className="sub-nav-link-item"
                aria-label={`Go to ${category.name}`}
              >
                {category.name}
              </Link>
            ) : (
              <span 
                className="sub-nav-link-item"
                aria-label={`${category.name} category - has dropdown`}
              >
                {category.name}
              </span>
            )}
            {openDropdown === index && (
              <div 
                className="dropdown"
                role="menu"
                aria-label={`${category.name} subcategories`}
              >
                <div className="dropdown-grid">
                  {category.subcategories.map((sub, i) => (
                    <div key={i} className="dropdown-column" role="menuitem">
                      {sub.link ? (
                        <Link 
                          to={sub.link} 
                          className="dropdown-subcategory"
                          aria-label={`Go to ${sub.name}`}
                        >
                          {sub.name}
                        </Link>
                      ) : (
                        <span 
                          className="dropdown-subcategory"
                          aria-label={`${sub.name} section - has items`}
                        >
                          {sub.name}
                        </span>
                      )}
                      {sub.products && sub.products.length > 0 && (
                        <div 
                          className="dropdown-products"
                          aria-label={`${sub.name} products`}
                        >
                          {sub.products.map((product, j) => (
                            <Link
                              to={`${sub.basePath}/${getProductSlug(product)}`}
                              className="dropdown-product-item"
                              key={j}
                              aria-label={`Go to ${product}`}
                            >
                              {product}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default SubNavbar;