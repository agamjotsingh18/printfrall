import React, { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// === STATIC IMPORTS (Core Architecture & Global Styles) ===
import Navbar from "./components/Navbar";
import SubNavbar from "./components/SubNavbar";
import Footer from "./components/Footer";
import Breadcrumbs from './components/Breadcrumbs';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import './styles/global.css'; 

// === LAZY IMPORTS (Core Pages) ===
const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));
const Blog = lazy(() => import("./components/Blog"));
const PrivacyPolicy = lazy(() => import("./components/PrivacyPolicy"));
const DeliveryReturnPolicy = lazy(() => import("./components/DeliveryReturnPolicy"));
const TermsConditions = lazy(() => import("./components/TermsConditions"));
const CartPage = lazy(() => import("./components/CartPage"));
const EmptyCartPage = lazy(() => import("./components/EmptyCartPage"));
const NotFoundPage = lazy(() => import("./components/NotFoundPage"));
const PaymentSuccess = lazy(() => import("./components/PaymentSuccess"));
const PaymentCancel = lazy(() => import("./components/PaymentCancel"));

// === LAZY IMPORTS (Category Hub Components) ===
const BusinessCards = lazy(() => import("./components/BusinessCards"));
const Envelopes = lazy(() => import("./components/Envelopes"));
const AcrylicSignBoard = lazy(() => import("./components/AcrylicSignBoard"));
const Flyers = lazy(() => import("./components/Flyers"));
const Stickers = lazy(() => import("./components/Stickers"));
const Labels = lazy(() => import("./components/Labels"));
const TShirts = lazy(() => import("./components/T-shirts"));
const PhotoFrames = lazy(() => import("./components/PhotoFrames"));
const Calendars = lazy(() => import("./components/Calendars"));
const Hoodies = lazy(() => import("./components/Hoodies"));
const Caps = lazy(() => import("./components/Caps"));
const CorporateGifting = lazy(() => import("./components/CorporateGifting"));
const DuoSets = lazy(() => import("./components/DuoSets"));
const WelcomeKits = lazy(() => import("./components/WelcomeKits"));
const FestiveHampers = lazy(() => import("./components/FestiveHampers"));
const Drinkware = lazy(() => import("./components/Drinkware"));
const Bags = lazy(() => import("./components/Bags"));
const Mugs = lazy(() => import("./components/Mugs"));
const IdCards = lazy(() => import("./components/IdCards"));
const Pens = lazy(() => import("./components/Pens"));
const Diaries = lazy(() => import("./components/Diaries"));

// === LAZY IMPORTS (Blogs) ===
const FutureOf3DPrinting = lazy(() => import("./blogs/FutureOf3DPrinting"));
const EcoFriendlyPrintingSolutions = lazy(() => import("./blogs/EcoFriendlyPrintingSolutions"));
const BusinessCardTrends = lazy(() => import("./blogs/BusinessCardTrends"));

// === LAZY IMPORTS (Item Details) ===
const Banners = lazy(() => import("./itemdetail/Banners"));
const CustomStandeeCutout = lazy(() => import("./itemdetail/CustomStandeeCutout"));
const AcrylicPhotoFrames = lazy(() => import("./itemdetail/AcrylicPhotoFrames"));
const AcrylicNamePlates = lazy(() => import("./itemdetail/AcrylicNamePlates"));
const AcrylicCoasters = lazy(() => import("./itemdetail/AcrylicCoasters"));
const AcrylicKeychains = lazy(() => import("./itemdetail/AcrylicKeychains"));
const AcrylicMagnets = lazy(() => import("./itemdetail/AcrylicMagnets"));
const AcrylicCalendar = lazy(() => import("./itemdetail/AcrylicCalendar"));
const OfferFlyers = lazy(() => import("./itemdetail/OfferFlyers"));
const BusinessFlyers = lazy(() => import("./itemdetail/BusinessFlyers"));
const ProductCatalogFlyers = lazy(() => import("./itemdetail/ProductCatalogFlyers"));
const A4FlyerPrinting = lazy(() => import("./itemdetail/A4FlyerPrinting"));
const A5FlyerPrinting = lazy(() => import("./itemdetail/A5FlyerPrinting"));
const DLFlyerPrinting = lazy(() => import("./itemdetail/DLFlyerPrinting"));
const Posters = lazy(() => import("./itemdetail/Posters"));
const PhotoSelfieBooth = lazy(() => import("./itemdetail/PhotoSelfieBooth"));
const HalfFoldBrochure = lazy(() => import("./itemdetail/HalfFoldBrochure"));
const TriFoldBrochure = lazy(() => import("./itemdetail/TriFoldBrochure"));
const Standees = lazy(() => import("./itemdetail/Standees"));
const PrescriptionNotePad = lazy(() => import("./itemdetail/PrescriptionNotePad"));
const CustomLetterheads = lazy(() => import("./itemdetail/CustomLetterheads"));
const UShapedBusinessCard = lazy(() => import("./itemdetail/UShapedBusinessCard"));
const CircleBusinessCard = lazy(() => import("./itemdetail/CircleBusinessCard"));
const MetallicBusinessCard = lazy(() => import("./itemdetail/MetallicBusinessCard"));
const RoundedCornerBusinessCard = lazy(() => import("./itemdetail/RoundedCornerBusinessCard"));
const SquareBusinessCard = lazy(() => import("./itemdetail/SquareBusinessCard"));
const TexturedBusinessCard = lazy(() => import("./itemdetail/TexturedBusinessCard"));
const PremiumLaminatedCard = lazy(() => import("./itemdetail/PremiumBusinessCard"));
const StandardBusinessCard = lazy(() => import("./itemdetail/StandardBusinessCard"));
const Envelope10Long = lazy(() => import("./itemdetail/Hash10Envelope"));
const A5Envelope = lazy(() => import("./itemdetail/A5Envelope"));
const A6Envelope = lazy(() => import("./itemdetail/A6Envelope"));
const KraftEnvelope = lazy(() => import("./itemdetail/KraftEnvelope"));
const FullColourPrintedBillBooks = lazy(() => import("./itemdetail/FullColourPrintedBillBooks"));
const BlackAndWhitePrintedBillBooks = lazy(() => import("./itemdetail/BlackAndWhiteBillBooks"));
const MatteLaminatedStickers = lazy(() => import("./itemdetail/MatteLaminatedStickers"));
const HolographicStickers = lazy(() => import("./itemdetail/HolographicStickers"));
const GoldFoilingStickers = lazy(() => import("./itemdetail/GoldFoilingStickers"));
const SilverFoilingStickers = lazy(() => import("./itemdetail/SilverFoilingStickers"));
const DomeStickers = lazy(() => import("./itemdetail/DomeStickers"));
const FrontAdhesiveStickers = lazy(() => import("./itemdetail/FrontAdhesiveStickers"));
const CustomOpaqueStickers = lazy(() => import("./itemdetail/CustomOpaqueStickers"));
const ClearStickers = lazy(() => import("./itemdetail/ClearStickers"));
const MetallicGoldPaperLabels = lazy(() => import("./itemdetail/MetallicGoldPaperLabels"));
const MetallicSilverPaperLabels = lazy(() => import("./itemdetail/MetallicSilverPaperLabels"));
const KraftPaperLabels = lazy(() => import("./itemdetail/KraftPaperLabels"));
const PremiumWhiteLabels = lazy(() => import("./itemdetail/PremiumWhiteLabels"));
const ClearLabels = lazy(() => import("./itemdetail/ClearLabels"));
const GiftPaperBags = lazy(() => import("./itemdetail/GiftPaperBags"));
const TakeoutPaperBags = lazy(() => import("./itemdetail/TakeoutPaperBags"));
const PrePrintedPaperBags = lazy(() => import("./itemdetail/PrePrintedPaperBags"));
const GiftBoxes = lazy(() => import("./itemdetail/GiftBoxes"));
const PhotoWithLedFrames = lazy(() => import("./itemdetail/PhotoWithLedFrames"));
const PhotoWithClassicFrames = lazy(() => import("./itemdetail/PhotoWithClassicFrames"));
const PhotoWithWallFrames = lazy(() => import("./itemdetail/PhotoWithWallFrames"));
const MattePhotoWithFrames = lazy(() => import("./itemdetail/MattePhotoWithFrames"));
const CanvasPhotoWithFrames = lazy(() => import("./itemdetail/CanvasPhotoWithFrames"));
const CustomAcrylicPhotoFrames = lazy(() => import("./itemdetail/CustomAcrylicPhotoFrames"));
const FramelessPhotoFrames = lazy(() => import("./itemdetail/FramelessPhotoFrames"));
const StandardMug = lazy(() => import("./itemdetail/StandardMug"));
const MiniMug = lazy(() => import("./itemdetail/MiniMug"));
const RoundNeckTShirts = lazy(() => import("./itemdetail/RoundNeckTShirts"));
const PoloTShirts = lazy(() => import("./itemdetail/PoloTShirts"));
const VNeckTShirts = lazy(() => import("./itemdetail/VNeckTShirts"));
const A5LandscapeCalendar = lazy(() => import("./itemdetail/A5LandscapeCalendar"));
const BigSquareDesktopCalendar = lazy(() => import("./itemdetail/BigSquareDesktopCalendar"));
const WallCalendar = lazy(() => import("./itemdetail/WallCalendar"));
const LongCalendar = lazy(() => import("./itemdetail/LongCalendar"));
const FrameCalendar = lazy(() => import("./itemdetail/FrameCalendar"));
const CalendarWithPhoto = lazy(() => import("./itemdetail/CalendarWithPhoto"));
const CustomPrintedZipperHoodies = lazy(() => import("./itemdetail/CustomPrintedZipperHoodies"));
const CustomPrintedPulloverHoodies = lazy(() => import("./itemdetail/CustomPrintedPulloverHoodies"));
const EmbroideredZipHoodies = lazy(() => import("./itemdetail/EmbroideredZipHoodies"));
const EmbroideredPulloverHoodies = lazy(() => import("./itemdetail/EmbroideredPulloverHoodies"));
const Sweatshirts = lazy(() => import("./itemdetail/Sweatshirts"));
const Jackets = lazy(() => import("./itemdetail/Jackets"));
const TippingCaps = lazy(() => import("./itemdetail/TippingCaps"));
const PipingCaps = lazy(() => import("./itemdetail/PipingCaps"));
const LineStitchingCaps = lazy(() => import("./itemdetail/LineStitchingCaps"));
const PrintedPlainCaps = lazy(() => import("./itemdetail/PrintedPlainCaps"));
const SpotUVStickers = lazy(() => import("./itemdetail/SpotUVStickers"));
const WaterproofLabels = lazy(() => import("./itemdetail/WaterproofLabels"));
const CorporateExecutiveKit = lazy(() => import("./itemdetail/CorporateExecutiveKit"));
const CreativeProfessionalKit = lazy(() => import("./itemdetail/CreativeProfessionalKit"));
const EcoFriendlyKit = lazy(() => import("./itemdetail/EcoFriendlyKit"));
const StartupEssentialsKit = lazy(() => import("./itemdetail/StartupEssentialsKit"));
const EcoGripNotebook = lazy(() => import("./itemdetail/EcoGripNotebook"));
const ElegantJournalCombo = lazy(() => import("./itemdetail/ElegantJournalCombo"));
const EliteExecutiveCombo = lazy(() => import("./itemdetail/EliteExecutiveCombo"));
const ClassicLeatherCombo = lazy(() => import("./itemdetail/ClassicLeatherCombo"));
const MatteFinishDiaries = lazy(() => import("./itemdetail/MatteFinishDiaries"));
const VintageTanDiaries = lazy(() => import("./itemdetail/VintageTanDiaries"));
const FauxLeatherDiaries = lazy(() => import("./itemdetail/FauxLeatherDiaries"));
const CustomCanvasDiaries = lazy(() => import("./itemdetail/CustomCanvasDiaries"));
const WaveTextureDiaries = lazy(() => import("./itemdetail/WaveTextureDiaries"));
const EcoKraftCoverDiaries = lazy(() => import("./itemdetail/EcoKraftCoverDiaries"));
const LuggageTags = lazy(() => import("./itemdetail/LuggageTags"));
const Mousepad = lazy(() => import("./itemdetail/Mousepad"));
const Keychains = lazy(() => import("./itemdetail/Keychains"));
const SkateBallpointPen = lazy(() => import("./itemdetail/SkateBallpointPen"));
const GiltRollerPen = lazy(() => import("./itemdetail/GiltRollerPen"));
const AdroitPen = lazy(() => import("./itemdetail/AdroitPen"));
const ScribblePen = lazy(() => import("./itemdetail/ScribblePen"));
const KraftPen = lazy(() => import("./itemdetail/KraftPen"));
const StylusPen = lazy(() => import("./itemdetail/StylusPen"));
const Certificates = lazy(() => import("./itemdetail/Certificates"));
const DesktopItems = lazy(() => import("./itemdetail/DesktopItems"));
const Medals = lazy(() => import("./itemdetail/Medals"));
const AwardsTrophies = lazy(() => import("./itemdetail/AwardsTrophies"));
const TemperatureDisplayFlask = lazy(() => import("./itemdetail/TemperatureDisplayFlask"));
const ClassicBlackSipper = lazy(() => import("./itemdetail/ClassicBlackSipper"));
const SupremeBlueSipper = lazy(() => import("./itemdetail/SupremeBlueSipper"));
const GlossyWhiteSipper = lazy(() => import("./itemdetail/GlossyWhiteSipper"));
const LancyHotColdSipper = lazy(() => import("./itemdetail/LancyHotColdSipper"));
const PureCopperBottle = lazy(() => import("./itemdetail/PureCopperBottle"));
const MulticolorSteelBottle = lazy(() => import("./itemdetail/MulticolorSteelBottle"));
const PremiumBlackSipper = lazy(() => import("./itemdetail/PremiumBlackSipper"));
const VegaSSBottle = lazy(() => import("./itemdetail/VegaSSBottle"));
const FloralSSBottle = lazy(() => import("./itemdetail/FloralSSBottle"));
const SlimSSBottle = lazy(() => import("./itemdetail/SlimSSBottle"));
const SleekBlackMug = lazy(() => import("./itemdetail/SleekBlackMug"));
const TravelerBlackMug = lazy(() => import("./itemdetail/TravelerBlackMug"));
const RegalBlackMug = lazy(() => import("./itemdetail/RegalBlackMug"));
const ShimmerDarkGreyMug = lazy(() => import("./itemdetail/ShimmerDarkGreyMug"));
const InfinityLaptopBag = lazy(() => import("./itemdetail/InfinityLaptopBag"));
const SlimGuardLaptopSleeve = lazy(() => import("./itemdetail/SlimGuardLaptopSleeve"));
const EliteHorizonLaptopBag = lazy(() => import("./itemdetail/EliteHorizonLaptopBag"));
const NexusEssentialLaptopBag = lazy(() => import("./itemdetail/NexusEssentialLaptopBag"));
const VanguardLaptopBag = lazy(() => import("./itemdetail/VanguardLaptopBag"));
const PrestigeProLaptopBag = lazy(() => import("./itemdetail/PrestigeProLaptopBag"));
const ApexCarryLaptopBag = lazy(() => import("./itemdetail/ApexCarryLaptopBag"));
const ColorSplashHamper = lazy(() => import("./itemdetail/ColorSplashHamper"));
const EcoFriendlyHoliHamper = lazy(() => import("./itemdetail/EcoFriendlyHoliHamper"));
const PremiumHoliHamper = lazy(() => import("./itemdetail/PremiumHoliHamper"));

const PageLoader = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '60vh' 
  }}>
    <div className="printfrall-loader">
      <div className="pebble yellow"></div>
      <div className="pebble green"></div>
      <div className="pebble pink"></div>
      <div className="pebble blue"></div>
    </div>
  </div>
);


const App = () => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    return savedCartItems;
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

    useEffect(() => {
    const handlePageShow = (event) => {
      if (event.persisted) {
        const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        if (savedCartItems.length !== cartItems.length) {
          setCartItems(savedCartItems);
        }
      }
    };
    
    window.addEventListener('pageshow', handlePageShow);
    return () => window.removeEventListener('pageshow', handlePageShow);
  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      // Check if the item already exists in the cart
      const existingItem = prevItems.find(
        (cartItem) =>
          cartItem.name === item.name &&
          cartItem.selectedSize === item.selectedSize &&
          cartItem.selectedMaterial === item.selectedMaterial
      );

      if (existingItem) {
        // If the item exists, update its quantity
        return prevItems.map((cartItem) =>
          cartItem.name === item.name &&
          cartItem.selectedSize === item.selectedSize &&
          cartItem.selectedMaterial === item.selectedMaterial
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        // If the item does not exist, add it to the cart
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (name, size, material) => {
  setCartItems((prevItems) =>
    prevItems.filter((item) => {
      // Match name
      if (item.name !== name) return true;
      if (size !== null && item.selectedSize !== size) return true;
      if (material !== null && (item.selectedMaterial ?? item.selectedColor ?? item.selectedMethod ?? item.selectedFinish) !== material) return true;
      return false;
    })
  );
};

  return (
    <ThemeProvider theme={theme}>
    <Router future={{
            v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}>
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      <Navbar cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} />
      <SubNavbar />
<main id="main-content" className="main-content-layout">
        <Breadcrumbs />
      <div style={{ width: "100vw", overflowX: "clip", maxWidth: "100%" }}>
        <Suspense fallback={<PageLoader />}>
          <Routes>
                <Route path="/" element={<Home addToCart={addToCart} />} />
                <Route path="/services" element={<Services addToCart={addToCart} />} />
                <Route
                  path="/cart"
                  element={
                    cartItems.length === 0 ? (
                      <EmptyCartPage />
                    ) : (
                      <CartPage cartItems={cartItems} removeFromCart={removeFromCart} />
                    )
                  }
                />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/delivery-return" element={<DeliveryReturnPolicy />} />
                <Route path="/terms-conditions" element={<TermsConditions />} />
                
                {/* Business Essentials */}
                <Route path="/services/business-essentials/business-cards" element={<BusinessCards addToCart={addToCart} />} />
                <Route path="/services/business-essentials/business-cards/standard-business-card" element={<StandardBusinessCard addToCart={addToCart} />} />
                <Route path="/services/business-essentials/business-cards/premium-laminated-card" element={<PremiumLaminatedCard addToCart={addToCart} />} />
                <Route path="/services/business-essentials/business-cards/textured-business-card" element={<TexturedBusinessCard addToCart={addToCart} />} />
                <Route path="/services/business-essentials/business-cards/square-business-card" element={<SquareBusinessCard addToCart={addToCart} />} />
                <Route path="/services/business-essentials/business-cards/rounded-corner-business-card" element={<RoundedCornerBusinessCard addToCart={addToCart} />} />
                <Route path="/services/business-essentials/business-cards/metallic-business-card" element={<MetallicBusinessCard addToCart={addToCart} />} />
                <Route path="/services/business-essentials/business-cards/circle-business-card" element={<CircleBusinessCard addToCart={addToCart} />} />
                <Route path="/services/business-essentials/business-cards/u-shaped-business-card" element={<UShapedBusinessCard addToCart={addToCart} />} />
                <Route path="/services/business-essentials/envelopes" element={<Envelopes addToCart={addToCart} />} />
                <Route path="services/business-essentials/letterheads/custom-letterheads" element={<CustomLetterheads addToCart={addToCart} />} />
                <Route path="/services/business-essentials/letterheads/prescription-note-pad" element={<PrescriptionNotePad addToCart={addToCart} />} />
                <Route path="/services/business-essentials/envelopes/hash10-envelope" element={<Envelope10Long addToCart={addToCart} />} />
                <Route path="/services/business-essentials/envelopes/a5-envelope" element={<A5Envelope addToCart={addToCart} />} />
                <Route path="/services/business-essentials/envelopes/a6-envelope" element={<A6Envelope addToCart={addToCart} />} />
                <Route path="/services/business-essentials/envelopes/kraft-envelope" element={<KraftEnvelope addToCart={addToCart} />} />
                <Route path="/services/business-essentials/invoices/full-colour-printed-bill-books" element={<FullColourPrintedBillBooks addToCart={addToCart} />} />
                <Route path="/services/business-essentials/invoices/black-and-white-printed-bill-books" element={<BlackAndWhitePrintedBillBooks addToCart={addToCart} />} />

                {/* Marketing Materials */}
                <Route path="/services/marketing-materials/acrylic-sign-board" element={<AcrylicSignBoard addToCart={addToCart} />} />
                <Route path="/services/marketing-materials/acrylic-sign-board/acrylic-photo-frames" element={<AcrylicPhotoFrames addToCart={addToCart} />} />
                <Route path="/services/marketing-materials/acrylic-sign-board/acrylic-name-plates" element={<AcrylicNamePlates addToCart={addToCart} />} />
                <Route path="/services/marketing-materials/acrylic-sign-board/acrylic-calendar" element={<AcrylicCalendar addToCart={addToCart} />} />
                <Route path="/services/marketing-materials/acrylic-sign-board/acrylic-magnets" element={<AcrylicMagnets addToCart={addToCart} />} />
                <Route path="/services/marketing-materials/acrylic-sign-board/acrylic-keychains" element={<AcrylicKeychains addToCart={addToCart} />} />
                <Route path="/services/marketing-materials/acrylic-sign-board/acrylic-coasters" element={<AcrylicCoasters addToCart={addToCart} />} />
                <Route path="/services/marketing-materials/flyers" element={<Flyers addToCart={addToCart} />} />
                <Route path="/services/marketing-materials/flyers/offer-flyers" element={<OfferFlyers addToCart={addToCart} />} />
                <Route path="/services/marketing-materials/flyers/business-flyers" element={<BusinessFlyers addToCart={addToCart} />} />
                <Route path="/services/marketing-materials/flyers/product-catalog-flyers" element={<ProductCatalogFlyers addToCart={addToCart} />} />
                <Route path="/services/marketing-materials/flyers/a4-flyer-printing" element={<A4FlyerPrinting addToCart={addToCart} />} />
                <Route path="/services/marketing-materials/flyers/a5-flyer-printing" element={<A5FlyerPrinting addToCart={addToCart} />} />
                <Route path="/services/marketing-materials/flyers/dl-flyer-printing" element={<DLFlyerPrinting addToCart={addToCart} />} />
                <Route path="/services/marketing-materials/banners" element={<Banners addToCart={addToCart} />} />
                <Route path="/services/marketing-materials/posters" element={<Posters addToCart={addToCart} />} />
                <Route path="/services/marketing-materials/photo-selfie-booth" element={<PhotoSelfieBooth addToCart={addToCart} />} />
                <Route path="/services/marketing-materials/standees" element={<Standees addToCart={addToCart} />} />
                <Route path="/services/marketing-materials/brochures/half-fold-brochure" element={<HalfFoldBrochure addToCart={addToCart} />} />
                <Route path="/services/marketing-materials/brochures/tri-fold-brochure" element={<TriFoldBrochure addToCart={addToCart} />} />
                <Route path="/services/marketing-materials/custom-standee-cutout" element={<CustomStandeeCutout addToCart={addToCart} />} />

                {/* Packaging & Labels */}
                <Route path="/services/packaging-labels/stickers" element={<Stickers addToCart={addToCart} />} />
                <Route path="/services/packaging-labels/stickers/matte-laminated-stickers" element={<MatteLaminatedStickers addToCart={addToCart} />} />
                <Route path="/services/packaging-labels/stickers/holographic-stickers" element={<HolographicStickers addToCart={addToCart} />} />
                <Route path="/services/packaging-labels/stickers/gold-foiling-stickers" element={<GoldFoilingStickers addToCart={addToCart} />} />
                <Route path="/services/packaging-labels/stickers/silver-foiling-stickers" element={<SilverFoilingStickers addToCart={addToCart} />} />
                <Route path="/services/packaging-labels/stickers/spot-uv-stickers" element={<SpotUVStickers addToCart={addToCart} />} />
                <Route path="/services/packaging-labels/stickers/dome-stickers" element={<DomeStickers addToCart={addToCart} />} />
                <Route path="/services/packaging-labels/stickers/front-adhesive-stickers" element={<FrontAdhesiveStickers addToCart={addToCart} />} />
                <Route path="/services/packaging-labels/stickers/custom-opaque-stickers" element={<CustomOpaqueStickers addToCart={addToCart} />} />
                <Route path="/services/packaging-labels/stickers/clear-stickers" element={<ClearStickers addToCart={addToCart} />} />
                <Route path="/services/packaging-labels/labels" element={<Labels addToCart={addToCart} />} />
                <Route path="/services/packaging-labels/labels/metallic-gold-paper-labels" element={<MetallicGoldPaperLabels addToCart={addToCart} />} />
                <Route path="/services/packaging-labels/labels/metallic-silver-paper-labels" element={<MetallicSilverPaperLabels addToCart={addToCart} />} />
                <Route path="/services/packaging-labels/labels/kraft-paper-labels" element={<KraftPaperLabels addToCart={addToCart} />} />
                <Route path="/services/packaging-labels/labels/premium-white-labels" element={<PremiumWhiteLabels addToCart={addToCart} />} />
                <Route path="/services/packaging-labels/labels/clear-labels" element={<ClearLabels addToCart={addToCart} />} />
                <Route path="/services/packaging-labels/labels/water-proof-labels" element={<WaterproofLabels addToCart={addToCart} />} />
                <Route path="/services/packaging-labels/paper-bags/gift-paper-bags" element={<GiftPaperBags addToCart={addToCart} />} />
                <Route path="/services/packaging-labels/paper-bags/takeout-paper-bags" element={<TakeoutPaperBags addToCart={addToCart} />} />
                <Route path="/services/packaging-labels/paper-bags/pre-printed-paper-bags" element={<PrePrintedPaperBags addToCart={addToCart} />} />
                <Route path="/services/packaging-labels/gift-boxes" element={<GiftBoxes addToCart={addToCart} />} />

                {/* Personalized Gifts */}
                <Route path="/services/personalized-gifts/photo-frames" element={<PhotoFrames addToCart={addToCart} />} />
                <Route path="/services/personalized-gifts/photo-frames/photo-with-led-frames" element={<PhotoWithLedFrames addToCart={addToCart} />} />
                <Route path="/services/personalized-gifts/photo-frames/photo-with-classic-frames" element={<PhotoWithClassicFrames addToCart={addToCart} />} />
                <Route path="/services/personalized-gifts/photo-frames/photo-with-wall-frames" element={<PhotoWithWallFrames addToCart={addToCart} />} />
                <Route path="/services/personalized-gifts/photo-frames/canvas-photo-with-frames" element={<CanvasPhotoWithFrames addToCart={addToCart} />} />
                <Route path="/services/personalized-gifts/photo-frames/matte-photo-with-frames" element={<MattePhotoWithFrames addToCart={addToCart} />} />
                <Route path="/services/personalized-gifts/photo-frames/custom-acrylic-photo-frames" element={<CustomAcrylicPhotoFrames addToCart={addToCart} />} />
                <Route path="/services/personalized-gifts/photo-frames/frameless-photo-frames" element={<FramelessPhotoFrames addToCart={addToCart} />} />
                <Route path="/services/personalized-gifts/mugs" element={<Mugs addToCart={addToCart} />} />
                <Route path="/services/personalized-gifts/mugs/standard-mug" element={<StandardMug addToCart={addToCart} />} />
                <Route path="/services/personalized-gifts/mugs/mini-mug" element={<MiniMug addToCart={addToCart} />} />
                <Route path="/services/personalized-gifts/mugs/shimmer-dark-grey-mug" element={<ShimmerDarkGreyMug addToCart={addToCart} />} />
                <Route path="/services/personalized-gifts/mugs/regal-black-mug" element={<RegalBlackMug addToCart={addToCart} />} />
                <Route path="/services/personalized-gifts/mugs/traveler-black-mug" element={<TravelerBlackMug addToCart={addToCart} />} />
                <Route path="/services/personalized-gifts/mugs/sleek-black-mug" element={<SleekBlackMug addToCart={addToCart} />} />
                <Route path="/services/personalized-gifts/tshirts" element={<TShirts addToCart={addToCart} />} />
                <Route path="/services/personalized-gifts/tshirts/round-neck-t-shirts" element={<RoundNeckTShirts addToCart={addToCart} />} />
                <Route path="/services/personalized-gifts/tshirts/polo-t-shirts" element={<PoloTShirts addToCart={addToCart} />} />
                <Route path="/services/personalized-gifts/tshirts/v-neck-t-shirts" element={<VNeckTShirts addToCart={addToCart} />} />
                <Route path="/services/personalized-gifts/calendars" element={<Calendars addToCart={addToCart} />} />
                <Route path="/services/personalized-gifts/calendars/a5-landscape-calendar" element={<A5LandscapeCalendar addToCart={addToCart} />} />
                <Route path="/services/personalized-gifts/calendars/big-square-desktop-calendar" element={<BigSquareDesktopCalendar addToCart={addToCart} />} />
                <Route path="/services/personalized-gifts/calendars/wall-calendar" element={<WallCalendar addToCart={addToCart} />} />
                <Route path="/services/personalized-gifts/calendars/long-calendar" element={<LongCalendar addToCart={addToCart} />} />
                <Route path="/services/personalized-gifts/calendars/calendar-with-photo" element={<CalendarWithPhoto addToCart={addToCart} />} />
                <Route path="/services/personalized-gifts/calendars/frame-calendar" element={<FrameCalendar addToCart={addToCart} />} />
                
                {/* Drinkware Ecosystem */}
                <Route path="/services/personalized-gifts/drinkware/slim-ss-bottle" element={<SlimSSBottle addToCart={addToCart} />} />
                <Route path="/services/personalized-gifts/drinkware/floral-ss-bottle" element={<FloralSSBottle addToCart={addToCart} />} />
                <Route path="/services/personalized-gifts/drinkware/vega-ss-bottle" element={<VegaSSBottle addToCart={addToCart} />} />
                <Route path="/services/personalized-gifts/drinkware/premium-black-sipper" element={<PremiumBlackSipper addToCart={addToCart} />} />
                <Route path="/services/personalized-gifts/drinkware/multicolor-steel-bottle" element={<MulticolorSteelBottle addToCart={addToCart} />} />
                <Route path="/services/personalized-gifts/drinkware/pure-copper-bottle" element={<PureCopperBottle addToCart={addToCart} />} />
                <Route path="/services/personalized-gifts/drinkware/lancy-hot-cold-sipper" element={<LancyHotColdSipper addToCart={addToCart} />} />
                <Route path="/services/personalized-gifts/drinkware/glossy-white-sipper" element={<GlossyWhiteSipper addToCart={addToCart} />} />
                <Route path="/services/personalized-gifts/drinkware/supreme-blue-sipper" element={<SupremeBlueSipper addToCart={addToCart} />} />
                <Route path="/services/personalized-gifts/drinkware/classic-black-sipper" element={<ClassicBlackSipper addToCart={addToCart} />} />
                <Route path="/services/personalized-gifts/drinkware/temperature-display-flask" element={<TemperatureDisplayFlask addToCart={addToCart} />} />

                {/* Apparel & Caps */}
                <Route path="/services/tshirt-printing/hoodies" element={<Hoodies addToCart={addToCart} />} />
                <Route path="/services/tshirt-printing/hoodies/custom-printed-zipper-hoodie" element={<CustomPrintedZipperHoodies addToCart={addToCart} />} />
                <Route path="/services/tshirt-printing/hoodies/custom-printed-pullover-hoodie" element={<CustomPrintedPulloverHoodies addToCart={addToCart} />} />
                <Route path="/services/tshirt-printing/hoodies/embroidered-zip-hoodie" element={<EmbroideredZipHoodies addToCart={addToCart} />} />
                <Route path="/services/tshirt-printing/hoodies/embroidered-pullover-hoodie" element={<EmbroideredPulloverHoodies addToCart={addToCart} />} />
                <Route path="/services/tshirt-printing/caps" element={<Caps addToCart={addToCart} />} />
                <Route path="/services/tshirt-printing/caps/printed-plain-caps" element={<PrintedPlainCaps addToCart={addToCart} />} />
                <Route path="/services/tshirt-printing/caps/line-stitching-caps" element={<LineStitchingCaps addToCart={addToCart} />} />
                <Route path="/services/tshirt-printing/caps/piping-caps" element={<PipingCaps addToCart={addToCart} />} />
                <Route path="/services/tshirt-printing/caps/tipping-caps" element={<TippingCaps addToCart={addToCart} />} />
                <Route path="/services/tshirt-printing/sweatshirts" element={<Sweatshirts addToCart={addToCart} />} />
                <Route path="/services/tshirt-printing/jackets" element={<Jackets addToCart={addToCart} />} />

                {/* Corporate Gifting */}
                <Route path="/services/corporate-gifting" element={<CorporateGifting addToCart={addToCart} />} />
                <Route path="/services/corporate-gifting/duo-sets" element={<DuoSets addToCart={addToCart} />} />
                <Route path="/services/corporate-gifting/duo-sets/matte-finish-diaries" element={<MatteFinishDiaries addToCart={addToCart} />} />
                <Route path="/services/corporate-gifting/duo-sets/vintage-tan-diaries" element={<VintageTanDiaries addToCart={addToCart} />} />
                <Route path="/services/corporate-gifting/duo-sets/faux-leather-diaries" element={<FauxLeatherDiaries addToCart={addToCart} />} />
                <Route path="/services/corporate-gifting/duo-sets/custom-canvas-diaries" element={<CustomCanvasDiaries addToCart={addToCart} />} />
                <Route path="/services/corporate-gifting/duo-sets/wave-texture-diaries" element={<WaveTextureDiaries addToCart={addToCart} />} />
                <Route path="/services/corporate-gifting/duo-sets/eco-kraft-cover-diaries" element={<EcoKraftCoverDiaries addToCart={addToCart} />} />
                <Route path="/services/corporate-gifting/duo-sets/eco-grip-notebook" element={<EcoGripNotebook addToCart={addToCart} />} />
                <Route path="/services/corporate-gifting/duo-sets/elegant-journal-combo" element={<ElegantJournalCombo addToCart={addToCart} />} />
                <Route path="/services/corporate-gifting/duo-sets/elite-executive-combo" element={<EliteExecutiveCombo addToCart={addToCart} />} />
                <Route path="/services/corporate-gifting/duo-sets/classic-leather-combo" element={<ClassicLeatherCombo addToCart={addToCart} />} />
                <Route path="/services/corporate-gifting/welcome-kits" element={<WelcomeKits addToCart={addToCart} />} />
                <Route path="/services/corporate-gifting/welcome-kits/corporate-executive-kit" element={<CorporateExecutiveKit addToCart={addToCart} />} />
                <Route path="/services/corporate-gifting/welcome-kits/creative-professional-kit" element={<CreativeProfessionalKit addToCart={addToCart} />} />
                <Route path="/services/corporate-gifting/welcome-kits/eco-friendly-kit" element={<EcoFriendlyKit addToCart={addToCart} />} />
                <Route path="/services/corporate-gifting/welcome-kits/startup-essentials-kit" element={<StartupEssentialsKit addToCart={addToCart} />} />
                <Route path="/services/corporate-gifting/festive-hampers" element={<FestiveHampers addToCart={addToCart} />} />
                <Route path="/services/corporate-gifting/drinkware" element={<Drinkware addToCart={addToCart} />} />
                <Route path="/services/corporate-gifting/bags" element={<Bags addToCart={addToCart} />} />
                <Route path="/services/corporate-gifting/id-cards" element={<IdCards addToCart={addToCart} />} />
                <Route path="/services/corporate-gifting/pens" element={<Pens addToCart={addToCart} />} />
                <Route path="/services/corporate-gifting/diaries" element={<Diaries addToCart={addToCart} />} />
                <Route path="/services/corporate-gifting/awards-trophies" element={<AwardsTrophies addToCart={addToCart} />} />
                <Route path="/services/corporate-gifting/medals" element={<Medals addToCart={addToCart} />} />
                <Route path="/services/corporate-gifting/desktop-items" element={<DesktopItems addToCart={addToCart} />} />
                <Route path="/services/corporate-gifting/certificates" element={<Certificates addToCart={addToCart} />} />
                
                {/* Corporate Bags Details */}
                <Route path="/services/corporate-gifting/bags/apex-carry-laptop-bag" element={<ApexCarryLaptopBag addToCart={addToCart} />} />
                <Route path="/services/corporate-gifting/bags/prestige-pro-laptop-bag" element={<PrestigeProLaptopBag addToCart={addToCart} />} />
                <Route path="/services/corporate-gifting/bags/vanguard-laptop-bag" element={<VanguardLaptopBag addToCart={addToCart} />} />
                <Route path="/services/corporate-gifting/bags/nexus-essential-laptop-bag" element={<NexusEssentialLaptopBag addToCart={addToCart} />} />
                <Route path="/services/corporate-gifting/bags/elite-horizon-laptop-bag" element={<EliteHorizonLaptopBag addToCart={addToCart} />} />
                <Route path="/services/corporate-gifting/bags/slimguard-laptop-sleeve" element={<SlimGuardLaptopSleeve addToCart={addToCart} />} />
                <Route path="/services/corporate-gifting/bags/infinity-laptop-bag" element={<InfinityLaptopBag addToCart={addToCart} />} />

                {/* Corporate Pens Details */}
                <Route path="/services/corporate-gifting/pens/stylus-pen" element={<StylusPen addToCart={addToCart} />} />
                <Route path="/services/corporate-gifting/pens/kraft-pen" element={<KraftPen addToCart={addToCart} />} />
                <Route path="/services/corporate-gifting/pens/scribble-pen" element={<ScribblePen addToCart={addToCart} />} />
                <Route path="/services/corporate-gifting/pens/adroit-pen" element={<AdroitPen addToCart={addToCart} />} />
                <Route path="/services/corporate-gifting/pens/gilt-roller-pen" element={<GiltRollerPen addToCart={addToCart} />} />
                <Route path="/services/corporate-gifting/pens/skate-ballpoint-pen" element={<SkateBallpointPen addToCart={addToCart} />} />
                
                {/* Miscellaneous Utilities */}
                <Route path="/services/corporate-gifting/keychains" element={<Keychains addToCart={addToCart} />} />
                <Route path="/services/corporate-gifting/mousepad" element={<Mousepad addToCart={addToCart} />} />
                <Route path="/services/corporate-gifting/luggage-tags" element={<LuggageTags addToCart={addToCart} />} />
                <Route path="/services/corporate-gifting/festive-hampers/color-splash-hamper" element={<ColorSplashHamper addToCart={addToCart} />} />
                <Route path="/services/corporate-gifting/festive-hampers/eco-friendly-holi-hamper" element={<EcoFriendlyHoliHamper addToCart={addToCart} />} />
                <Route path="/services/corporate-gifting/festive-hampers/premium-holi-hamper" element={<PremiumHoliHamper addToCart={addToCart} />} />

                {/* Blogs Articles */}
                <Route path="/blog/future-of-3D-printing" element={<FutureOf3DPrinting />} />
                <Route path="/blog/eco-friendly-printing-solutions" element={<EcoFriendlyPrintingSolutions />} />
                <Route path="/blog/business-card-trends" element={<BusinessCardTrends />} />

                {/* Gateways & System Catchers */}
                <Route path="/payment-success" element={<PaymentSuccess />} />
                <Route path="/payment-cancel" element={<PaymentCancel />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
        </Suspense>
      </div>
      </main>
      <Footer />
    </Router>
    </ThemeProvider>
  );
};

export default App;