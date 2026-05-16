import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Paper,
  Container,
  Grid,
  Snackbar,
  IconButton,
  Card,
  CardContent,
  CardMedia,
  useTheme,
  useMediaQuery,
  Chip,
  Divider,
  Stack,
  Rating,
  Avatar,
  Tooltip,
  Dialog,
  DialogContent,
  IconButton as MuiIconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import {
  AddShoppingCart,
  Close,
  CheckCircle,
  Shield,
  LocalShipping,
  MonetizationOn,
  Build,
  VerifiedUser,
} from "@mui/icons-material";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { motion } from "framer-motion";

// ========== MAIN KIT IMAGE ==========
import ecoFriendlyKitImg from "../assets/eco-kit-1.png";

// ========== EXTRA ANGLES (generate with DALL·E prompts below) ==========
import extraImg1 from "../assets/eco-kit-2.png";
import extraImg2 from "../assets/eco-kit-3.png";
import extraImg3 from "../assets/eco-kit-4.png";
// import extraImg4 from "../assets/eco-kit-4-packaging.png";
// import extraImg5 from "../assets/eco-kit-5-closeup.png";

// ========== INCLUDED ITEMS ==========
import ecoKraftCoverDiaryImg from "../assets/eco-kraft-cover-diaries.png";
import kraftPenImg from "../assets/kraft-pen.png";
import pureCopperBottleImg from "../assets/pure-copper-bottle.png";
import a5StickerSheetImg from "../assets/sticker.png";
import thankYouCardImg from "../assets/thank-you-card.png";

// ========== TESTIMONIALS ==========
const testimonials = [
  {
    name: "Neha Gupta",
    role: "Sustainability Head, GreenFuture Ltd",
    avatar: "https://randomuser.me/api/portraits/women/7.jpg",
    text: "The Eco-Friendly Kit aligns perfectly with our green initiatives. High quality, sustainable, and beautifully packaged.",
    rating: 5,
  },
  {
    name: "Rohan Desai",
    role: "CSR Manager, EcoCorp",
    avatar: "https://randomuser.me/api/portraits/men/8.jpg",
    text: "Our team loved the copper bottle and kraft diary. A thoughtful, planet‑friendly gift.",
    rating: 5,
  },
  {
    name: "Ananya Sharma",
    role: "Founder, ZeroWaste Store",
    avatar: "https://randomuser.me/api/portraits/women/9.jpg",
    text: "The plantable thank you card was a delightful surprise. Highly recommended for eco-conscious brands.",
    rating: 4,
  },
];

const EcoFriendlyKit = ({ addToCart }) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [mainImage, setMainImage] = useState(ecoFriendlyKitImg);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const kitDetails = {
    name: "Eco-Friendly Kit",
    image: ecoFriendlyKitImg,
    price: 2000,
    description:
      "Sustainable and environmentally conscious products designed for eco-friendly corporate gifting and personal use.",
    items: [
      {
        name: "Eco Kraft Cover Diary",
        image: ecoKraftCoverDiaryImg,
        description: "Recycled paper notebook with kraft cover",
        price: 400,
      },
      {
        name: "Kraft Pen",
        image: kraftPenImg,
        description: "Biodegradable pen with sustainable materials",
        price: 150,
      },
      {
        name: "Pure Copper Water Bottle",
        image: pureCopperBottleImg,
        description: "Chemical-free copper bottle with natural benefits",
        price: 900,
      },
      {
        name: "A5 Sticker Sheet",
        image: a5StickerSheetImg,
        description: "Eco-friendly adhesive stickers",
        price: 100,
      },
      {
        name: "Thank You Card",
        image: thankYouCardImg,
        description: "Recycled paper with plantable seed option",
        price: 50,
      },
    ],
    tags: ["Sustainable", "Eco-Conscious", "Green", "Recycled"],
    extraImages: [extraImg1, extraImg2, extraImg3],
    highlights: [
      {
        icon: "🌱",
        title: "Sustainable Materials",
        description: "All items made from recycled or biodegradable materials",
      },
      {
        icon: "♻️",
        title: "Environmentally Friendly",
        description: "Designed to minimize environmental impact",
      },
      {
        icon: "💧",
        title: "Chemical Free",
        description: "Safe, non-toxic materials for daily use",
      },
      {
        icon: "🌍",
        title: "Carbon Conscious",
        description: "Responsibly sourced and produced",
      },
    ],
    volumePricing: [
      { qty: "1-9", price: 2000 },
      { qty: "10-49", price: 1800 },
      { qty: "50-99", price: 1600 },
      { qty: "100+", price: "Contact Us" },
    ],
    customizationOptions: [
      "Custom logo on kraft diary cover",
      "Engraved logo on copper bottle",
      "Personalised sticker sheet with your design",
      "Plantable thank you card with custom message",
      "Eco-friendly gift box with recycled paper",
    ],
    deliveryTimeline: "7-10 business days for custom orders; 3-5 days for stock kits",
    warranty: "1 year against manufacturing defects",
  };

  const allImages = [kitDetails.image, ...kitDetails.extraImages];

  const handleAddToCart = () => {
    addToCart({
      ...kitDetails,
      type: "Eco-Friendly Kit",
    });
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        py: 8,
        px: isMobile ? 2 : 4,
        backgroundColor: "#f8fafc",
      }}
    >
      {/* Hero Section with Brand Colors */}
      <Box
        sx={{
          mb: 8,
          textAlign: "center",
          background: "linear-gradient(135deg, #19485D 0%, #2b6c8a 100%)",
          p: { xs: 4, md: 6 },
          borderRadius: 4,
          color: "white",
          boxShadow: "0 20px 40px rgba(25, 72, 93, 0.2)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h1"
            sx={{
              fontWeight: 800,
              fontSize: isMobile ? "2.2rem" : "3.5rem",
              mb: 2,
              letterSpacing: "-0.02em",
            }}
          >
            {kitDetails.name}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 500,
              fontSize: isMobile ? "1rem" : "1.25rem",
              maxWidth: "800px",
              mx: "auto",
              opacity: 0.9,
            }}
          >
            Sustainable products for environmentally conscious professionals
          </Typography>
        </motion.div>
      </Box>

      <Grid container spacing={6}>
        {/* Image Gallery Section */}
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 3,
              borderRadius: 4,
              boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.05)",
              overflow: "hidden",
              backgroundColor: "white",
              position: "relative",
            }}
          >
            {/* Eco Badge */}
            <Chip
              label="Eco Certified"
              size="medium"
              sx={{
                position: "absolute",
                top: 20,
                right: 20,
                zIndex: 2,
                fontWeight: 700,
                px: 2,
                py: 1,
                backgroundColor: "#70CB97",
                color: "white",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            />

            {/* Main Image with Zoom */}
            <Box
              onClick={() => openLightbox(allImages.indexOf(mainImage))}
              sx={{ cursor: "pointer" }}
            >
              <Zoom zoomMargin={40}>
                <Box
                  sx={{
                    borderRadius: 3,
                    overflow: "hidden",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <img
                    src={mainImage}
                    alt={kitDetails.name}
                    style={{
                      width: "100%",
                      height: "auto",
                      maxHeight: "500px",
                      objectFit: "contain",
                      display: "block",
                      pointerEvents: "none",
                    }}
                  />
                </Box>
              </Zoom>
            </Box>

            {/* Thumbnail Gallery */}
            <Box
              sx={{
                display: "flex",
                gap: 2,
                mt: 3,
                overflowX: "auto",
                "&::-webkit-scrollbar": { display: "none" },
                scrollbarWidth: "none",
              }}
            >
              {allImages.map((img, idx) => (
                <Paper
                  key={idx}
                  onClick={() => setMainImage(img)}
                  sx={{
                    p: 1,
                    borderRadius: 2,
                    cursor: "pointer",
                    border:
                      mainImage === img ? "2px solid #70CB97" : "1px solid #e2e8f0",
                    "&:hover": { border: "2px solid #70CB97" },
                    flexShrink: 0,
                    transition: "all 0.2s",
                  }}
                >
                  <img
                    src={img}
                    alt={`view ${idx + 1}`}
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "8px",
                      objectFit: "cover",
                    }}
                  />
                </Paper>
              ))}
            </Box>

            {/* Lightbox Dialog - Fixed */}
            <Dialog
              open={lightboxOpen}
              onClose={closeLightbox}
              maxWidth="lg"
              fullWidth
              scroll="paper"
              disableScrollLock={false}
              PaperProps={{
                sx: {
                  backgroundColor: "rgba(0,0,0,0.9)",
                  boxShadow: "none",
                },
              }}
            >
              <DialogContent
                sx={{
                  p: 0,
                  position: "relative",
                  minHeight: "60vh",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MuiIconButton
                  onClick={closeLightbox}
                  sx={{
                    position: "absolute",
                    top: 16,
                    right: 16,
                    color: "white",
                    zIndex: 10,
                    backgroundColor: "rgba(0,0,0,0.5)",
                    "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
                  }}
                >
                  <Close />
                </MuiIconButton>
                <img
                  src={allImages[lightboxIndex]}
                  alt="Full size"
                  style={{
                    maxWidth: "90%",
                    maxHeight: "80vh",
                    width: "auto",
                    height: "auto",
                    objectFit: "contain",
                    borderRadius: "8px",
                  }}
                />
              </DialogContent>
            </Dialog>
          </Paper>
        </Grid>

        {/* Product Details */}
        <Grid item xs={12} md={6}>
          <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
            {/* Price and Rating */}
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              mb={3}
              flexWrap="wrap"
              gap={2}
            >
              <Typography
                variant="h2"
                sx={{
                  color: "#70CB97",
                  fontWeight: 800,
                  fontSize: isMobile ? "2rem" : "2.8rem",
                }}
              >
                ₹{kitDetails.price.toLocaleString()}
              </Typography>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Rating value={4.7} precision={0.1} readOnly sx={{ color: "#E7C727" }} />
                <Typography variant="body2" sx={{ color: "#5a6e7a" }}>
                  (86 reviews)
                </Typography>
              </Stack>
            </Stack>

            <Typography
              variant="body1"
              sx={{ mb: 3, fontSize: "1rem", lineHeight: 1.6, color: "#334155" }}
            >
              {kitDetails.description}
            </Typography>

            {/* Key Features Tags */}
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="caption"
                sx={{ display: "block", mb: 1, color: "#64748b", fontWeight: 600 }}
              >
                KEY FEATURES
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                {kitDetails.tags.map((tag, idx) => (
                  <Chip
                    key={idx}
                    label={tag}
                    size="small"
                    sx={{
                      backgroundColor: "rgba(112, 203, 151, 0.1)",
                      color: "#70CB97",
                      fontWeight: 600,
                      borderRadius: 2,
                    }}
                  />
                ))}
              </Stack>
            </Box>

            <Divider sx={{ my: 2 }} />

            {/* Included Items */}
            <Box mb={4}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  display: "flex",
                  alignItems: "center",
                  color: "#19485D",
                }}
              >
                <Box
                  component="span"
                  sx={{
                    width: 32,
                    height: 32,
                    backgroundColor: "#70CB97",
                    borderRadius: "50%",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "1rem",
                    fontWeight: 700,
                    mr: 2,
                  }}
                >
                  {kitDetails.items.length}
                </Box>
                Sustainable Included Items
              </Typography>
              <Grid container spacing={2}>
                {kitDetails.items.map((item, idx) => (
                  <Grid item xs={6} sm={4} key={idx}>
                    <Card
                      component={motion.div}
                      whileHover={{ scale: 1.02, boxShadow: "0px 8px 24px rgba(0,0,0,0.1)" }}
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        p: 2,
                        borderRadius: 3,
                        backgroundColor: "#fff",
                        border: "1px solid #e2e8f0",
                        transition: "all 0.2s",
                      }}
                    >
                      <Box
                        sx={{
                          width: "100%",
                          height: "100px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mb: 2,
                          backgroundColor: "#f8fafc",
                          borderRadius: 2,
                        }}
                      >
                        <CardMedia
                          component="img"
                          image={item.image}
                          alt={item.name}
                          sx={{
                            width: "auto",
                            maxWidth: "100%",
                            height: "70%",
                            objectFit: "contain",
                          }}
                        />
                      </Box>
                      <CardContent sx={{ p: 0, flexGrow: 1 }}>
                        <Typography variant="subtitle2" sx={{ fontWeight: 700, color: "#19485D" }}>
                          {item.name}
                        </Typography>
                        <Typography variant="body2" sx={{ fontSize: "0.75rem", color: "#64748b" }}>
                          {item.description}
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 700, color: "#70CB97", mt: 1 }}>
                          ₹{item.price.toLocaleString()} value
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>

            {/* Volume Pricing Table */}
            <Box mb={4}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: "#19485D" }}>
                Volume Pricing
              </Typography>
              <TableContainer component={Paper} sx={{ borderRadius: 2 }}>
                <Table size="small">
                  <TableBody>
                    {kitDetails.volumePricing.map((row, idx) => (
                      <TableRow key={idx}>
                        <TableCell sx={{ fontWeight: 600 }}>{row.qty} units</TableCell>
                        <TableCell sx={{ color: "#70CB97", fontWeight: 700 }}>
                          {typeof row.price === "number" ? `₹${row.price.toLocaleString()}` : row.price}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>

            {/* Customization Options */}
            <Box mb={4}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: "#19485D" }}>
                Customization Options
              </Typography>
              <Stack spacing={1}>
                {kitDetails.customizationOptions.map((opt, idx) => (
                  <Stack direction="row" alignItems="center" spacing={1} key={idx}>
                    <CheckCircle sx={{ fontSize: "1rem", color: "#70CB97" }} />
                    <Typography variant="body2">{opt}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Box>

            {/* Trust Badges */}
            <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 3 }}>
              <Tooltip title="Secure Checkout">
                <Shield sx={{ color: "#70CB97" }} />
              </Tooltip>
              <Tooltip title="Free Shipping">
                <LocalShipping sx={{ color: "#70CB97" }} />
              </Tooltip>
              <Tooltip title="30-Day Returns">
                <MonetizationOn sx={{ color: "#70CB97" }} />
              </Tooltip>
              <Tooltip title="1 Year Warranty">
                <Build sx={{ color: "#70CB97" }} />
              </Tooltip>
              <Tooltip title="Verified Quality">
                <VerifiedUser sx={{ color: "#70CB97" }} />
              </Tooltip>
            </Stack>

            {/* Add to Cart Button */}
            <Button
              variant="contained"
              size="large"
              startIcon={<AddShoppingCart />}
              fullWidth={isMobile}
              sx={{
                py: 1.8,
                px: 4,
                borderRadius: 3,
                fontWeight: 700,
                fontSize: "1.1rem",
                textTransform: "none",
                backgroundColor: "#70CB97",
                "&:hover": {
                  backgroundColor: "#5cb67f",
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 24px rgba(112, 203, 151, 0.4)",
                },
                transition: "all 0.2s",
                boxShadow: "0 4px 12px rgba(112, 203, 151, 0.3)",
              }}
              onClick={handleAddToCart}
            >
              Add to Cart – ₹{kitDetails.price.toLocaleString()}
            </Button>
          </Box>
        </Grid>
      </Grid>

      {/* Testimonials Section */}
      <Box sx={{ mt: 10, mb: 8 }}>
        <Typography
          variant="h3"
          sx={{ fontWeight: 800, mb: 5, textAlign: "center", color: "#19485D" }}
        >
          What Eco‑Conscious Leaders Say
        </Typography>
        <Grid container spacing={4}>
          {testimonials.map((t, idx) => (
            <Grid item xs={12} md={4} key={idx}>
              <Card
                component={motion.div}
                whileHover={{ y: -5 }}
                sx={{
                  p: 3,
                  borderRadius: 4,
                  height: "100%",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
                  border: "1px solid #e2e8f0",
                }}
              >
                <Stack direction="row" spacing={2} alignItems="center" mb={2}>
                  <Avatar src={t.avatar} sx={{ width: 56, height: 56 }} />
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                      {t.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#64748b" }}>
                      {t.role}
                    </Typography>
                  </Box>
                </Stack>
                <Rating value={t.rating} readOnly sx={{ mb: 2, color: "#E7C727" }} />
                <Typography variant="body2" sx={{ fontStyle: "italic", color: "#334155" }}>
                  “{t.text}”
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Highlights Section */}
      <Box
        sx={{
          mt: 6,
          p: { xs: 4, md: 6 },
          backgroundColor: "white",
          borderRadius: 4,
          boxShadow: "0 8px 32px rgba(0,0,0,0.05)",
          border: "1px solid #e2e8f0",
        }}
      >
        <Typography
          variant="h3"
          sx={{ fontWeight: 800, mb: 6, textAlign: "center", color: "#19485D" }}
        >
          Sustainable Business Solutions
        </Typography>
        <Grid container spacing={4}>
          {kitDetails.highlights.map((feature, idx) => (
            <Grid item xs={12} sm={6} md={3} key={idx}>
              <Box
                sx={{
                  p: 3,
                  textAlign: "center",
                  backgroundColor: "#f8fafc",
                  borderRadius: 3,
                  border: "1px solid #e2e8f0",
                  transition: "all 0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                    borderColor: "#70CB97",
                  },
                }}
              >
                <Typography variant="h2" sx={{ mb: 2, fontSize: "3rem" }}>
                  {feature.icon}
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: "#19485D" }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "#64748b" }}>
                  {feature.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 5 }} />

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: "#19485D" }}>
              Delivery Timeline
            </Typography>
            <Typography variant="body2" sx={{ color: "#334155" }}>
              {kitDetails.deliveryTimeline}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: "#19485D" }}>
              Warranty
            </Typography>
            <Typography variant="body2" sx={{ color: "#334155" }}>
              {kitDetails.warranty}
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message={
          <Typography variant="body1" sx={{ fontWeight: 500 }}>
            ✓ {kitDetails.name} added to cart!
          </Typography>
        }
        action={
          <IconButton size="small" color="inherit" onClick={handleCloseSnackbar}>
            <Close fontSize="small" />
          </IconButton>
        }
        sx={{
          "& .MuiPaper-root": {
            borderRadius: 2,
            backgroundColor: "#19485D",
            color: "white",
            fontWeight: 500,
          },
        }}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      />
    </Container>
  );
};

export default EcoFriendlyKit;