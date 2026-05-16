// data/AllProducts.js
const products = [
    // Business Essentials
    {
        name: "Standard Business Card",
        link: "/services/business-essentials/business-cards/standard-business-card"
    },
    {
        name: "Premium Laminated Card",
        link: "/services/business-essentials/business-cards/premium-laminated-card"
    },
    {
        name: "Textured Business Card",
        link: "/services/business-essentials/business-cards/textured-business-card"
    },
    {
        name: "Square Business Card",
        link: "/services/business-essentials/business-cards/square-business-card"
    },
    {
        name: "Rounded Corner Business Card",
        link: "/services/business-essentials/business-cards/rounded-corner-business-card"
    },
    {
        name: "Metallic Business Card",
        link: "/services/business-essentials/business-cards/metallic-business-card"
    },
    {
        name: "Circle Business Card",
        link: "/services/business-essentials/business-cards/circle-business-card"
    },
    {
        name: "U-Shaped Business Card",
        link: "/services/business-essentials/business-cards/u-shaped-business-card"
    },
    {
        name: "Custom Letterheads",
        link: "/services/business-essentials/letterheads/custom-letterheads"
    },
    {
        name: "Prescription Note Pad",
        link: "/services/business-essentials/letterheads/prescription-note-pad"
    },
    {
        name: "hash10 Envelope",
        link: "/services/business-essentials/envelopes/hash10-envelope"
    },
    {
        name: "A5 Envelope",
        link: "/services/business-essentials/envelopes/a5-envelope"
    },
    {
        name: "A6 Envelope",
        link: "/services/business-essentials/envelopes/a6-envelope"
    },
    {
        name: "Kraft Envelope",
        link: "/services/business-essentials/envelopes/kraft-envelope"
    },
    {
        name: "Full Colour Printed Bill Books",
        link: "/services/business-essentials/invoices/full-colour-printed-bill-books"
    },
    {
        name: "Black and White Printed Bill Books",
        link: "/services/business-essentials/invoices/black-and-white-printed-bill-books"
    },
    // Marketing Materials
    {
        name: "Banners",
        link: "/services/marketing-materials/banners"
    },
    {
        name: "Custom Standee Cutout",
        link: "/services/marketing-materials/custom-standee-cutout"
    },
    {
        name: "Acrylic Photo Frames",
        link: "/services/marketing-materials/acrylic-sign-board/acrylic-photo-frames"
    },
    {
        name: "Acrylic Name Plates",
        link: "/services/marketing-materials/acrylic-sign-board/acrylic-name-plates"
    },
    {
        name: "Acrylic Calendar",
        link: "/services/marketing-materials/acrylic-sign-board/acrylic-calendar"
    },
    {
        name: "Acrylic Magnets",
        link: "/services/marketing-materials/acrylic-sign-board/acrylic-magnets"
    },
    {
        name: "Acrylic Keychains",
        link: "/services/marketing-materials/acrylic-sign-board/acrylic-keychains"
    },
    {
        name: "Keychains",
        link: "/services/corporate-gifting/keychains"
    },
    {
        name: "Acrylic Coasters",
        link: "/services/marketing-materials/acrylic-sign-board/acrylic-coasters"
    },
    {
        name: "Posters",
        link: "/services/marketing-materials/posters"
    },
    {
        name: "Photo Selfie Booth",
        link: "/services/marketing-materials/photo-selfie-booth"
    },
    {
        name: "Half Fold Brochure",
        link: "/services/marketing-materials/brochures/half-fold-brochure"
    },
    {
        name: "Tri Fold Brochure",
        link: "/services/marketing-materials/brochures/tri-fold-brochure"
    },
    {
        name: "Offer Flyers",
        link: "/services/marketing-materials/flyers/offer-flyers"
    },
    {
        name: "Business Flyers",
        link: "/services/marketing-materials/flyers/business-flyers"
    },
    {
        name: "Product Catalog Flyers",
        link: "/services/marketing-materials/flyers/product-catalog-flyers"
    },
    {
        name: "A4 Flyer Printing",
        link: "/services/marketing-materials/flyers/a4-flyer-printing"
    },
    {
        name: "A5 Flyer Printing",
        link: "/services/marketing-materials/flyers/a5-flyer-printing"
    },
    {
        name: "DL Flyer Printing",
        link: "/services/marketing-materials/flyers/dl-flyer-printing"
    },
    {
        name: "Standees",
        link: "/services/marketing-materials/standees"
    },
    // Packaging & Labels
    {
        name: "Matte Laminated Stickers",
        link: "/services/packaging-labels/stickers/matte-laminated-stickers"
    },
    {
        name: "Holographic Stickers",
        link: "/services/packaging-labels/stickers/holographic-stickers"
    },
    {
        name: "Gold Foiling Stickers",
        link: "/services/packaging-labels/stickers/gold-foiling-stickers"
    },
    {
        name: "Spot UV Stickers",
        link: "/services/packaging-labels/stickers/spot-uv-stickers"
    },
    {
        name: "Silver Foiling Stickers",
        link: "/services/packaging-labels/stickers/silver-foiling-stickers"
    },
    {
        name: "Dome Stickers",
        link: "/services/packaging-labels/stickers/dome-stickers"
    },
    {
        name: "Front Adhesive Stickers",
        link: "/services/packaging-labels/stickers/front-adhesive-stickers"
    },
    {
        name: "Custom Opaque Stickers",
        link: "/services/packaging-labels/stickers/custom-opaque-stickers"
    },
    {
        name: "Clear Stickers",
        link: "/services/packaging-labels/stickers/clear-stickers"
    },
    {
        name: "Metallic Gold Paper Labels",
        link: "/services/packaging-labels/labels/metallic-gold-paper-labels"
    },
    {
        name: "Metallic Silver Paper Labels",
        link: "/services/packaging-labels/labels/metallic-silver-paper-labels"
    },
    {
        name: "Kraft Paper Labels",
        link: "/services/packaging-labels/labels/kraft-paper-labels"
    },
    {
        name: "Premium White Labels",
        link: "/services/packaging-labels/labels/premium-white-labels"
    },
    {
        name: "Clear Labels",
        link: "/services/packaging-labels/labels/clear-labels"
    },
    {
        name: "Waterproof Labels",
        link: "/services/packaging-labels/labels/water-proof-labels"
    },
    {
        name: "Gift Paper Bags",
        link: "/services/packaging-labels/paper-bags/gift-paper-bags"
    },
    {
        name: "Takeout Paper Bags",
        link: "/services/packaging-labels/paper-bags/takeout-paper-bags"
    },
    {
        name: "Pre-printed Paper Bags",
        link: "/services/packaging-labels/paper-bags/pre-printed-paper-bags"
    },
    {
        name: "Gift Boxes",
        link: "/services/packaging-labels/gift-boxes"
    },
    // Personalized Gifts
    {
        name: "Round Neck T-shirts",
        link: "/services/personalized-gifts/tshirts/round-neck-t-shirts"
    },
    {
        name: "Polo T-shirts",
        link: "/services/personalized-gifts/tshirts/polo-t-shirts"
    },
    {
        name: "V-Neck T-shirts",
        link: "/services/personalized-gifts/tshirts/v-neck-t-shirts"
    },
    {
        name: "Photo with LED Frames",
        link: "/services/personalized-gifts/photo-frames/photo-with-led-frames"
    },
    {
        name: "Photo with Classic Frames",
        link: "/services/personalized-gifts/photo-frames/photo-with-classic-frames"
    },
    {
        name: "Photo with Wall Frames",
        link: "/services/personalized-gifts/photo-frames/photo-with-wall-frames"
    },
    {
        name: "Canvas Photo with Frames",
        link: "/services/personalized-gifts/photo-frames/canvas-photo-with-frames"
    },
    {
        name: "Matte Photo with Frames",
        link: "/services/personalized-gifts/photo-frames/matte-photo-with-frames"
    },
    {
        name: "Custom Acrylic Photo Frames",
        link: "/services/personalized-gifts/photo-frames/custom-acrylic-photo-frames"
    },
    {
        name: "Frameless Photo Frames",
        link: "/services/personalized-gifts/photo-frames/frameless-photo-frames"
    },
    {
        name: "A5 Landscape Calendar",
        link: "/services/personalized-gifts/calendars/a5-landscape-calendar"
    },
    {
        name: "Big Square Desktop Calendar",
        link: "/services/personalized-gifts/calendars/big-square-desktop-calendar"
    },
    {
        name: "Wall Calendar",
        link: "/services/personalized-gifts/calendars/wall-calendar"
    },
    {
        name: "Long Calendar",
        link: "/services/personalized-gifts/calendars/long-calendar"
    },
    {
        name: "Calendar With Photo",
        link: "/services/personalized-gifts/calendars/calendar-with-photo"
    },
    {
        name: "Frame Calendar",
        link: "/services/personalized-gifts/calendars/frame-calendar"
    },
    // T-shirt Printing
    {
        name: "Custom Printed Zipper Hoodie",
        link: "/services/tshirt-printing/hoodies/custom-printed-zipper-hoodie"
    },
    {
        name: "Custom Printed Pullover Hoodies",
        link: "/services/tshirt-printing/hoodies/custom-printed-pullover-hoodie"
    },
    {
        name: "Embroidered Zip Hoodies",
        link: "/services/tshirt-printing/hoodies/embroidered-zip-hoodie"
    },
    {
        name: "Embroidered Pullover Hoodies",
        link: "/services/tshirt-printing/hoodies/embroidered-pullover-hoodie"
    },
    {
        name: "Sweatshirts",
        link: "/services/tshirt-printing/sweatshirts"
    },
    {
        name: "Printed Plain Caps",
        link: "/services/tshirt-printing/caps/printed-plain-caps"
    },
    {
        name: "Line Stitching Caps",
        link: "/services/tshirt-printing/caps/line-stitching-caps"
    },
    {
        name: "Piping Caps",
        link: "/services/tshirt-printing/caps/piping-caps"
    },
    {
        name: "Tipping Caps",
        link: "/services/tshirt-printing/caps/tipping-caps"
    },
    {
        name: "Jackets",
        link: "/services/tshirt-printing/jackets"
    },
    // Corporate Gifting
    {
        name: "Mousepad",
        link: "/services/corporate-gifting/mousepad"
    },
    {
        name: "Awards and Trophies",
        link: "/services/corporate-gifting/awards-trophies"
    },
    {
        name: "Medals",
        link: "/services/corporate-gifting/medals"
    },
    {
        name: "Desktop Items",
        link: "/services/corporate-gifting/desktop-items"
    },
    {
        name: "Certificates",
        link: "/services/corporate-gifting/certificates"
    },
    {
        name: "Corporate Executive Kit",
        link: "/services/corporate-gifting/welcome-kits/corporate-executive-kit"
    },
    {
        name: "Creative Professional Kit",
        link: "/services/corporate-gifting/welcome-kits/creative-professional-kit"
    },
    {
        name: "Eco-Friendly Kit",
        link: "/services/corporate-gifting/welcome-kits/eco-friendly-kit"
    },
    {
        name: "Startup Essentials Kit",
        link: "/services/corporate-gifting/welcome-kits/startup-essentials-kit"
    },
    {
        name: "EcoGrip Notebook",
        link: "/services/corporate-gifting/duo-sets/eco-grip-notebook"
    },
    {
        name: "Elegant Journal Combo",
        link: "/services/corporate-gifting/duo-sets/elegant-journal-combo"
    },
    {
        name: "Elite Executive Combo",
        link: "/services/corporate-gifting/duo-sets/elite-executive-combo"
    },
    {
        name: "Classic Leather Combo",
        link: "/services/corporate-gifting/duo-sets/classic-leather-combo"
    },
    {
        name: "Matte Finish Diaries",
        link: "/services/corporate-gifting/diaries/matte-finish-diaries"
    },
    {
        name: "Vintage Tan Diaries",
        link: "/services/corporate-gifting/diaries/vintage-tan-diaries"
    },
    {
        name: "Faux Leather Diaries",
        link: "/services/corporate-gifting/diaries/faux-leather-diaries"
    },
    {
        name: "Custom Canvas Diaries",
        link: "/services/corporate-gifting/diaries/custom-canvas-diaries"
    },
    {
        name: "Wave Texture Diaries",
        link: "/services/corporate-gifting/diaries/wave-texture-diaries"
    },
    {
        name: "Eco Kraft Cover Diaries",
        link: "/services/corporate-gifting/diaries/eco-kraft-cover-diaries"
    },
    {
        name: "Stylus Pen",
        link: "/services/corporate-gifting/pens/stylus-pen"
    },
    {
        name: "Kraft Pen",
        link: "/services/corporate-gifting/pens/kraft-pen"
    },
    {
        name: "Scribble Pen",
        link: "/services/corporate-gifting/pens/scribble-pen"
    },
    {
        name: "Adroit Pen",
        link: "/services/corporate-gifting/pens/adroit-pen"
    },
    {
        name: "Gilt Roller Ball Pen",
        link: "/services/corporate-gifting/pens/gilt-roller-pen"
    },
    {
        name: "Skate Ballpoint Pen",
        link: "/services/corporate-gifting/pens/skate-ballpoint-pen"
    },
    {
        name: "Slim SS Bottle",
        link: "/services/corporate-gifting/drinkware/slim-ss-bottle"
    },
    {
        name: "Floral SS Bottle",
        link: "/services/corporate-gifting/drinkware/floral-ss-bottle"
    },
    {
        name: "Vega SS Bottle",
        link: "/services/corporate-gifting/drinkware/vega-ss-bottle"
    },
    {
        name: "Premium Black Sipper",
        link: "/services/corporate-gifting/drinkware/premium-black-sipper"
    },
    {
        name: "Multicolour Steel Bottle",
        link: "/services/corporate-gifting/drinkware/multicolor-steel-bottle"
    },
    {
        name: "Pure Copper Water Bottle",
        link: "/services/corporate-gifting/drinkware/pure-copper-bottle"
    },
    {
        name: "Lancy Hot & Cold White Sipper",
        link: "/services/corporate-gifting/drinkware/lancy-hot-cold-sipper"
    },
    {
        name: "Glossy White Sipper",
        link: "/services/corporate-gifting/drinkware/glossy-white-sipper"
    },
    {
        name: "Supreme Blue Sipper",
        link: "/services/corporate-gifting/drinkware/supreme-blue-sipper"
    },
    {
        name: "Classic Black Sipper",
        link: "/services/corporate-gifting/drinkware/classic-black-sipper"
    },
    {
        name: "Standard Mug",
        link: "/services/personalized-gifts/mugs/standard-mug"
    },
    {
        name: "Mini Mug",
        link: "/services/personalized-gifts/mugs/mini-mug"
    },
    {
        name: "Shimmer Dark Grey Mug",
        link: "/services/personalized-gifts/mugs/shimmer-dark-grey-mug"
    },
    {
        name: "Regal Black Mug",
        link: "/services/personalized-gifts/mugs/regal-black-mug"
    },
    {
        name: "Traveler Black Mug",
        link: "/services/personalized-gifts/mugs/traveler-black-mug"
    },
    {
        name: "Sleek Black Mug",
        link: "/services/personalized-gifts/mugs/sleek-black-mug"
    },
    {
        name: "Apex Carry Laptop Bag",
        link: "/services/corporate-gifting/bags/apex-carry-laptop-bag"
    },
    {
        name: "Prestige Pro Laptop Bag",
        link: "/services/corporate-gifting/bags/prestige-pro-laptop-bag"
    },
    {
        name: "Vanguard Laptop Bag",
        link: "/services/corporate-gifting/bags/vanguard-laptop-bag"
    },
    {
        name: "Nexus Essential Laptop Bag",
        link: "/services/corporate-gifting/bags/nexus-essential-laptop-bag"
    },
    {
        name: "Elite Horizon Laptop Bag",
        link: "/services/corporate-gifting/bags/elite-horizon-laptop-bag"
    },
    {
        name: "SlimGuard Laptop Sleeve",
        link: "/services/corporate-gifting/bags/slimguard-laptop-sleeve"
    },
    {
        name: "Infinity Laptop Bag",
        link: "/services/corporate-gifting/bags/infinity-laptop-bag"
    },
    {
        name: "Luggage Tags",
        link: "/services/corporate-gifting/luggage-tags"
    },
    {
        name: "Temperature Display Flask",
        link: "/services/corporate-gifting/temperature-display-flask"
    }
];

export default products;