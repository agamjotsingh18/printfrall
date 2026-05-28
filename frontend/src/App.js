import React, { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';

// === GLOBAL ARCHITECTURE & STYLES ===
import Navbar from "./components/Navbar";
import SubNavbar from "./components/SubNavbar";
import Footer from "./components/Footer";
import Breadcrumbs from './components/Breadcrumbs';
import theme from './styles/theme';
import './styles/global.css'; 


// === STANDARD IMPORTS (Item Details - Reordered to top) ===
import Banners from "./itemdetail/Banners";
import CustomStandeeCutout from "./itemdetail/CustomStandeeCutout";
import AcrylicPhotoFrames from "./itemdetail/AcrylicPhotoFrames";
import AcrylicNamePlates from "./itemdetail/AcrylicNamePlates";
import AcrylicCoasters from "./itemdetail/AcrylicCoasters";
import AcrylicKeychains from "./itemdetail/AcrylicKeychains";
import AcrylicMagnets from "./itemdetail/AcrylicMagnets";
import AcrylicCalendar from "./itemdetail/AcrylicCalendar";
import OfferFlyers from "./itemdetail/OfferFlyers";
import BusinessFlyers from "./itemdetail/BusinessFlyers";
import ProductCatalogFlyers from "./itemdetail/ProductCatalogFlyers";
import A4FlyerPrinting from "./itemdetail/A4FlyerPrinting";
import A5FlyerPrinting from "./itemdetail/A5FlyerPrinting";
import DLFlyerPrinting from "./itemdetail/DLFlyerPrinting";
import Posters from "./itemdetail/Posters";
import PhotoSelfieBooth from "./itemdetail/PhotoSelfieBooth";
import HalfFoldBrochure from "./itemdetail/HalfFoldBrochure";
import TriFoldBrochure from "./itemdetail/TriFoldBrochure";
import Standees from "./itemdetail/Standees";
import PrescriptionNotePad from "./itemdetail/PrescriptionNotePad";
import CustomLetterheads from "./itemdetail/CustomLetterheads";
import UShapedBusinessCard from "./itemdetail/UShapedBusinessCard";
import CircleBusinessCard from "./itemdetail/CircleBusinessCard";
import MetallicBusinessCard from "./itemdetail/MetallicBusinessCard";
import RoundedCornerBusinessCard from "./itemdetail/RoundedCornerBusinessCard";
import SquareBusinessCard from "./itemdetail/SquareBusinessCard";
import TexturedBusinessCard from "./itemdetail/TexturedBusinessCard";
import PremiumLaminatedCard from "./itemdetail/PremiumBusinessCard";
import StandardBusinessCard from "./itemdetail/StandardBusinessCard";
import Envelope10Long from "./itemdetail/Hash10Envelope";
import A5Envelope from "./itemdetail/A5Envelope";
import A6Envelope from "./itemdetail/A6Envelope";
import KraftEnvelope from "./itemdetail/KraftEnvelope";
import FullColourPrintedBillBooks from "./itemdetail/FullColourPrintedBillBooks";
import BlackAndWhitePrintedBillBooks from "./itemdetail/BlackAndWhiteBillBooks";
import MatteLaminatedStickers from "./itemdetail/MatteLaminatedStickers";
import HolographicStickers from "./itemdetail/HolographicStickers";
import GoldFoilingStickers from "./itemdetail/GoldFoilingStickers";
import SilverFoilingStickers from "./itemdetail/SilverFoilingStickers";
import DomeStickers from "./itemdetail/DomeStickers";
import FrontAdhesiveStickers from "./itemdetail/FrontAdhesiveStickers";
import CustomOpaqueStickers from "./itemdetail/CustomOpaqueStickers";
import ClearStickers from "./itemdetail/ClearStickers";
import MetallicGoldPaperLabels from "./itemdetail/MetallicGoldPaperLabels";
import MetallicSilverPaperLabels from "./itemdetail/MetallicSilverPaperLabels";
import KraftPaperLabels from "./itemdetail/KraftPaperLabels";
import PremiumWhiteLabels from "./itemdetail/PremiumWhiteLabels";
import ClearLabels from "./itemdetail/ClearLabels";
import GiftPaperBags from "./itemdetail/GiftPaperBags";
import TakeoutPaperBags from "./itemdetail/TakeoutPaperBags";
import PrePrintedPaperBags from "./itemdetail/PrePrintedPaperBags";
import GiftBoxes from "./itemdetail/GiftBoxes";
import PhotoWithLedFrames from "./itemdetail/PhotoWithLedFrames";
import PhotoWithClassicFrames from "./itemdetail/PhotoWithClassicFrames";
import PhotoWithWallFrames from "./itemdetail/PhotoWithWallFrames";
import MattePhotoWithFrames from "./itemdetail/MattePhotoWithFrames";
import CanvasPhotoWithFrames from "./itemdetail/CanvasPhotoWithFrames";
import CustomAcrylicPhotoFrames from "./itemdetail/CustomAcrylicPhotoFrames";
import FramelessPhotoFrames from "./itemdetail/FramelessPhotoFrames";
import StandardMug from "./itemdetail/StandardMug";
import MiniMug from "./itemdetail/MiniMug";
import RoundNeckTShirts from "./itemdetail/RoundNeckTShirts";
import PoloTShirts from "./itemdetail/PoloTShirts";
import VNeckTShirts from "./itemdetail/VNeckTShirts";
import A5LandscapeCalendar from "./itemdetail/A5LandscapeCalendar";
import BigSquareDesktopCalendar from "./itemdetail/BigSquareDesktopCalendar";
import WallCalendar from "./itemdetail/WallCalendar";
import LongCalendar from "./itemdetail/LongCalendar";
import FrameCalendar from "./itemdetail/FrameCalendar";
import CalendarWithPhoto from "./itemdetail/CalendarWithPhoto";
import CustomPrintedZipperHoodies from "./itemdetail/CustomPrintedZipperHoodies";
import CustomPrintedPulloverHoodies from "./itemdetail/CustomPrintedPulloverHoodies";
import EmbroideredZipHoodies from "./itemdetail/EmbroideredZipHoodies";
import EmbroideredPulloverHoodies from "./itemdetail/EmbroideredPulloverHoodies";
import Sweatshirts from "./itemdetail/Sweatshirts";
import Jackets from "./itemdetail/Jackets";
import TippingCaps from "./itemdetail/TippingCaps";
import PipingCaps from "./itemdetail/PipingCaps";
import LineStitchingCaps from "./itemdetail/LineStitchingCaps";
import PrintedPlainCaps from "./itemdetail/PrintedPlainCaps";
import SpotUVStickers from "./itemdetail/SpotUVStickers";
import WaterproofLabels from "./itemdetail/WaterproofLabels";
import CorporateExecutiveKit from "./itemdetail/CorporateExecutiveKit";
import CreativeProfessionalKit from "./itemdetail/CreativeProfessionalKit";
import EcoFriendlyKit from "./itemdetail/EcoFriendlyKit";
import StartupEssentialsKit from "./itemdetail/StartupEssentialsKit";
import EcoGripNotebook from "./itemdetail/EcoGripNotebook";
import ElegantJournalCombo from "./itemdetail/ElegantJournalCombo";
import EliteExecutiveCombo from "./itemdetail/EliteExecutiveCombo";
import ClassicLeatherCombo from "./itemdetail/ClassicLeatherCombo";
import MatteFinishDiaries from "./itemdetail/MatteFinishDiaries";
import VintageTanDiaries from "./itemdetail/VintageTanDiaries";
import FauxLeatherDiaries from "./itemdetail/FauxLeatherDiaries";
import CustomCanvasDiaries from "./itemdetail/CustomCanvasDiaries";
import WaveTextureDiaries from "./itemdetail/WaveTextureDiaries";
import EcoKraftCoverDiaries from "./itemdetail/EcoKraftCoverDiaries";
import LuggageTags from "./itemdetail/LuggageTags";
import Mousepad from "./itemdetail/Mousepad";
import Keychains from "./itemdetail/Keychains";
import SkateBallpointPen from "./itemdetail/SkateBallpointPen";
import GiltRollerPen from "./itemdetail/GiltRollerPen";
import AdroitPen from "./itemdetail/AdroitPen";
import ScribblePen from "./itemdetail/ScribblePen";
import KraftPen from "./itemdetail/KraftPen";
import StylusPen from "./itemdetail/StylusPen";
import Certificates from "./itemdetail/Certificates";
import DesktopItems from "./itemdetail/DesktopItems";
import Medals from "./itemdetail/Medals";
import AwardsTrophies from "./itemdetail/AwardsTrophies";
import TemperatureDisplayFlask from "./itemdetail/TemperatureDisplayFlask";
import ClassicBlackSipper from "./itemdetail/ClassicBlackSipper";
import SupremeBlueSipper from "./itemdetail/SupremeBlueSipper";
import GlossyWhiteSipper from "./itemdetail/GlossyWhiteSipper";
import LancyHotColdSipper from "./itemdetail/LancyHotColdSipper";
import PureCopperBottle from "./itemdetail/PureCopperBottle";
import MulticolorSteelBottle from "./itemdetail/MulticolorSteelBottle";
import PremiumBlackSipper from "./itemdetail/PremiumBlackSipper";
import VegaSSBottle from "./itemdetail/VegaSSBottle";
import FloralSSBottle from "./itemdetail/FloralSSBottle";
import SlimSSBottle from "./itemdetail/SlimSSBottle";
import SleekBlackMug from "./itemdetail/SleekBlackMug";
import TravelerBlackMug from "./itemdetail/TravelerBlackMug";
import RegalBlackMug from "./itemdetail/RegalBlackMug";
import ShimmerDarkGreyMug from "./itemdetail/ShimmerDarkGreyMug";
import InfinityLaptopBag from "./itemdetail/InfinityLaptopBag";
import SlimGuardLaptopSleeve from "./itemdetail/SlimGuardLaptopSleeve";
import EliteHorizonLaptopBag from "./itemdetail/EliteHorizonLaptopBag";
import NexusEssentialLaptopBag from "./itemdetail/NexusEssentialLaptopBag";
import VanguardLaptopBag from "./itemdetail/VanguardLaptopBag";
import PrestigeProLaptopBag from "./itemdetail/PrestigeProLaptopBag";
import ApexCarryLaptopBag from "./itemdetail/ApexCarryLaptopBag";
import ColorSplashHamper from "./itemdetail/ColorSplashHamper";
import EcoFriendlyHoliHamper from "./itemdetail/EcoFriendlyHoliHamper";
import PremiumHoliHamper from "./itemdetail/PremiumHoliHamper";
import Letterheads from "./components/Letterheads";
import Invoices from "./components/Invoices";
import Brochures from "./components/Brochures";
import PaperBags from "./components/PaperBags";


// === LAZY IMPORTS (Core Pages & Hubs) ===
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

const FutureOf3DPrinting = lazy(() => import("./blogs/FutureOf3DPrinting"));
const EcoFriendlyPrintingSolutions = lazy(() => import("./blogs/EcoFriendlyPrintingSolutions"));
const BusinessCardTrends = lazy(() => import("./blogs/BusinessCardTrends"));

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
                <Route path="/services/business-essentials/letterheads" element={<Letterheads addToCart={addToCart} />} />
                <Route path="services/business-essentials/letterheads/custom-letterheads" element={<CustomLetterheads addToCart={addToCart} />} />
                <Route path="/services/business-essentials/letterheads/prescription-note-pad" element={<PrescriptionNotePad addToCart={addToCart} />} />
                <Route path="/services/business-essentials/envelopes/hash10-envelope" element={<Envelope10Long addToCart={addToCart} />} />
                <Route path="/services/business-essentials/envelopes/a5-envelope" element={<A5Envelope addToCart={addToCart} />} />
                <Route path="/services/business-essentials/envelopes/a6-envelope" element={<A6Envelope addToCart={addToCart} />} />
                <Route path="/services/business-essentials/envelopes/kraft-envelope" element={<KraftEnvelope addToCart={addToCart} />} />
                <Route path="/services/business-essentials/invoices" element={<Invoices addToCart={addToCart} />} />
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
                <Route path="/services/marketing-materials/brochures" element={<Brochures addToCart={addToCart} />} />
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
                <Route path="/services/packaging-labels/paper-bags" element={<PaperBags addToCart={addToCart} />} />
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