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
import { getCdnImage } from "../utils/imageLoader";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { motion } from "framer-motion";

// ========== TESTIMONIALS ==========
const testimonials = [
  {
    name: "Kavya Singh",
    role: "Co-founder, Kreofill",
    avatar: "testimonial-kavya.png", // Updated to ImageKit path
    text: "The Startup Essentials Kit gave our team everything we needed to look professional. The mug and diary are daily favourites.",
    rating: 5,
  },
  {
    name: "Rajat Verma",
    role: "Founder, Logivolve",
    avatar: "testimonial-rajat.png", // Updated to ImageKit path
    text: "Great value for money. The stylus pen and bookmarks are clever additions. Highly recommended for early-stage startups.",
    rating: 4,
  },
  {
    name: "Meera Iyer",
    role: "Marketing Lead, OnyxPack",
    avatar: "testimonial-meera.png", // Updated to ImageKit path
    text: "We ordered 20 kits for our team offsite. Everyone loved the branded stickers and thank you cards. Will order again.",
    rating: 5,
  },
];

const StartupEssentialsKit = ({ addToCart }) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const kitDetails = {
    name: "Startup Essentials Kit",
    price: 1800,
    description:
      "Everything a growing startup needs to make a great impression, featuring practical and professional items for your team and clients.",
    items: [
      {
        name: "Matte Finish Diary",
        image: "matte-finish-diaries.png",
        description: "Sleek professional notebook with premium matte cover",
        price: 350,
      },
      {
        name: "Stylus Pen",
        image: "stylus-pen.png",
        description: "Dual-purpose stylus and ballpoint pen",
        price: 200,
      },
      {
        name: "Custom Bookmarks",
        image: "thank-you-card.png",
        description: "Personalized bookmarks with your branding",
        price: 100,
      },
      {
        name: "A5 Sticker Sheet",
        image: "sticker.png",
        description: "Branded stickers for packaging and promotions",
        price: 150,
      },
      {
        name: "Standard Mug",
        image: "mug.png",
        description: "Classic ceramic mug with print area",
        price: 300,
      },
      {
        name: "Thank You Card",
        image: "thank-you-card.png",
        description: "Elegant cards for client appreciation",
        price: 50,
      },
    ],
    tags: ["Practical", "Professional", "Versatile", "Branded"],
    images: [
      "startup-kit-1.png",
      "startup-kit-2.png",
      "startup-kit-3.png",
      "startup-kit-4.png"
    ],
    highlights: [
      {
        icon: "🚀",
        title: "Startup Ready",
        description: "Essential items every new business needs",
      },
      {
        icon: "💡",
        title: "Smart Branding",
        description: "Multiple opportunities to showcase your logo",
      },
      {
        icon: "💰",
        title: "Cost Effective",
        description: "Premium quality at startup-friendly prices",
      },
      {
        icon: "🎁",
        title: "Great for Gifting",
        description: "Perfect for employees, clients, and partners",
      },
    ],
    volumePricing: [
      { qty: "1-9", price: 1800 },
      { qty: "10-49", price: 1620 },
      { qty: "50-99", price: 1440 },
      { qty: "100+", price: "Contact Us" },
    ],
    customizationOptions: [
      "Custom logo on diary cover",
      "Engraved logo on stylus pen",
      "Personalised bookmark with QR code",
      "Branded sticker sheet with your designs",
      "Full‑colour print on mug",
      "Thank you card with custom message",
    ],
    deliveryTimeline: "5-7 business days for custom orders; 2-4 days for stock kits",
    warranty: "6 months against manufacturing defects",
  };

  const handleAddToCart = () => {
    addToCart({
      name: kitDetails.name,
      image: getCdnImage(kitDetails.images[0], { width: 150, height: 150 }),
      price: kitDetails.price,
      description: kitDetails.description,
      tags: kitDetails.tags,
      type: "Startup Essentials Kit",
      quantity: 1,
    });
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
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
            The perfect starter pack for your growing business
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
            {/* Startup Badge */}
            <Chip
              label="Startup Special"
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
              onClick={() => setLightboxOpen(true)}
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
                    src={getCdnImage(kitDetails.images[activeImageIndex], { width: 600, height: 450 })}
                    alt={`${kitDetails.name} primary view`}
                    width="600"
                    height="450"
                    fetchpriority="high"
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
              {kitDetails.images.map((imageName, idx) => (
                <Paper
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  sx={{
                    p: 1,
                    borderRadius: 2,
                    cursor: "pointer",
                    border:
                      activeImageIndex === idx ? "2px solid #70CB97" : "1px solid #e2e8f0",
                    "&:hover": { border: "2px solid #70CB97" },
                    flexShrink: 0,
                    transition: "all 0.2s",
                  }}
                >
                  <img
                    src={getCdnImage(imageName, { width: 80, height: 80 })}
                    alt={`${kitDetails.name} thumbnail view ${idx + 1}`}
                    width="80"
                    height="80"
                    loading="lazy"
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

            {/* Lightbox Dialog */}
            <Dialog
              open={lightboxOpen}
              onClose={() => setLightboxOpen(false)}
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
                  onClick={() => setLightboxOpen(false)}
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
                  src={getCdnImage(kitDetails.images[activeImageIndex], { width: 1024, height: 768 })}
                  alt={`${kitDetails.name} full view`}
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
                <Rating value={4.6} precision={0.1} readOnly sx={{ color: "#E7C727" }} />
                <Typography variant="body2" sx={{ color: "#5a6e7a" }}>
                  (92 reviews)
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
                Essential Included Items
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
                          image={getCdnImage(item.image, { width: 120, height: 100 })}
                          alt={`${item.name} custom infrastructure preview`}
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
              <Tooltip title="6 Month Warranty">
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
          What Founders Say
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
                  <Avatar 
                    src={getCdnImage(t.avatar, { width: 56, height: 56 })} 
                    sx={{ width: 56, height: 56 }} 
                  />
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
          Perfect for Growing Businesses
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

export default StartupEssentialsKit;