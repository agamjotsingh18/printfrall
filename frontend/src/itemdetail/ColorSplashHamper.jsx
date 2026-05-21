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

const testimonials = [
  {
    name: "Anjali Mehta",
    role: "Event Manager, ColoryFest",
    avatar: "testimonial-anjali-m.png", // Updated to ImageKit path
    text: "The Color Splash Hamper was a huge hit at our Holi corporate event. High quality items, beautiful packaging.",
    rating: 5,
  },
  {
    name: "Vikram Seth",
    role: "HR Head, CreateYourZone",
    avatar: "testimonial-vikram-s.png", // Updated to ImageKit path
    text: "Our team loved the polo t‑shirt and laptop bag. Excellent value for money.",
    rating: 4,
  },
  {
    name: "Neha Gupta",
    role: "Founder, Jiknix",
    avatar: "testimonial-neha-gup.png", // Updated to ImageKit path
    text: "Perfect gifting solution for clients. The diary and pen are elegant.",
    rating: 5,
  },
];

const ColorSplashHamper = ({ addToCart }) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const hamperDetails = {
    name: "Color Splash Hamper",
    price: 1500,
    description:
      "Brighten up your Holi celebrations with our vibrant Color Splash Hamper. Packed with high‑quality essentials – a faux leather diary, scribble pen, polo t‑shirt, and an elite laptop bag – perfect for employees, clients, and festive gifting.",
    items: [
      {
        name: "Faux Leather Diary",
        image: "faux-leather-diaries.png",
        description: "Premium notebook with 192 pages",
        price: 450,
      },
      {
        name: "Scribble Pen",
        image: "scribble-pen.png",
        description: "Smooth writing ballpoint pen",
        price: 150,
      },
      {
        name: "Polo T-shirt",
        image: "polo-t-shirt.png",
        description: "Premium cotton polo with custom embroidery",
        price: 600,
      },
      {
        name: "Elite Horizon Laptop Bag",
        image: "laptop-bag.png",
        description: "Professional laptop bag with multiple compartments",
        price: 1200,
      },
    ],
    tags: ["Vibrant", "Festive", "Executive"],
    images: [
      "color-splash-hamper.png",
      "color-splash-hamper-1.png",
      "color-splash-hamper-2.png",
      "color-splash-hamper-3.png"
    ],
    highlights: [
      {
        icon: "🎨",
        title: "Festive Splash",
        description: "Designed to bring colour and joy to any celebration",
      },
      {
        icon: "💼",
        title: "Professional Utility",
        description: "Items that work in the office and beyond",
      },
      {
        icon: "✨",
        title: "Premium Quality",
        description: "Only the finest materials",
      },
      {
        icon: "🎁",
        title: "Gift Ready",
        description: "Beautifully packaged for gifting",
      },
    ],
    volumePricing: [
      { qty: "1-9", price: 1500 },
      { qty: "10-49", price: 1350 },
      { qty: "50-99", price: 1200 },
      { qty: "100+", price: "Contact Us" },
    ],
    customizationOptions: [
      "Embossed logo on diary cover",
      "Custom embroidery on polo t‑shirt",
      "Laser‑engraved logo on pen",
      "Branded laptop bag tag",
    ],
    deliveryTimeline: "7-10 business days for custom orders; 3-5 days for stock",
    warranty: "1 year against manufacturing defects",
  };

  const handleAddToCart = () => {
    addToCart({
      name: hamperDetails.name,
      image: getCdnImage(hamperDetails.images[0], { width: 150, height: 150 }),
      description: hamperDetails.description,
      price: hamperDetails.price,
      type: "Color Splash Hamper",
      quantity: 1,
    });
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => setSnackbarOpen(false);

  return (
    <Container maxWidth="xl" sx={{ py: 8, px: isMobile ? 2 : 4, backgroundColor: "#f8fafc" }}>
      {/* Hero Section */}
      <Box
        sx={{
          mb: 8,
          textAlign: "center",
          background: "linear-gradient(135deg, #19485D 0%, #2b6c8a 100%)",
          p: { xs: 4, md: 6 },
          borderRadius: 4,
          color: "white",
          boxShadow: "0 20px 40px rgba(25, 72, 93, 0.2)",
        }}
      >
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Typography variant="h1" sx={{ fontWeight: 800, fontSize: isMobile ? "2.2rem" : "3.5rem", mb: 2 }}>
            {hamperDetails.name}
          </Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 500, fontSize: isMobile ? "1rem" : "1.25rem", maxWidth: "800px", mx: "auto", opacity: 0.9 }}>
            Vibrant Holi essentials for your team and clients
          </Typography>
        </motion.div>
      </Box>

      <Grid container spacing={6}>
        {/* Image Gallery */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, borderRadius: 4, boxShadow: "0px 20px 40px rgba(0,0,0,0.05)", bgcolor: "white", position: "relative" }}>
            <Chip label="Festive Special" size="medium" sx={{ position: "absolute", top: 20, right: 20, zIndex: 2, fontWeight: 700, backgroundColor: "#70CB97", color: "white" }} />
            <Box onClick={() => setLightboxOpen(true)} sx={{ cursor: "pointer" }}>
              <Zoom zoomMargin={40}>
                <Box sx={{ borderRadius: 3, overflow: "hidden", boxShadow: "0 8px 24px rgba(0,0,0,0.1)", border: "1px solid #e2e8f0" }}>
                  <img 
                    src={getCdnImage(hamperDetails.images[activeImageIndex], { width: 600, height: 450 })} 
                    alt={`${hamperDetails.name} primary view`} 
                    width="600"
                    height="450"
                    style={{ width: "100%", height: "auto", maxHeight: "500px", objectFit: "contain", display: "block" }} 
                  />
                </Box>
              </Zoom>
            </Box>
            <Box sx={{ display: "flex", gap: 2, mt: 3, overflowX: "auto", "&::-webkit-scrollbar": { display: "none" }, scrollbarWidth: "none" }}>
              {hamperDetails.images.map((imageName, idx) => (
                <Paper key={idx} onClick={() => setActiveImageIndex(idx)} sx={{ p: 1, borderRadius: 2, cursor: "pointer", border: activeImageIndex === idx ? "2px solid #70CB97" : "1px solid #e2e8f0", "&:hover": { border: "2px solid #70CB97" }, flexShrink: 0 }}>
                  <img 
                    src={getCdnImage(imageName, { width: 80, height: 80 })} 
                    alt={`${hamperDetails.name} thumbnail view ${idx + 1}`} 
                    width="80"
                    height="80"
                    loading="lazy"
                    style={{ width: "80px", height: "80px", borderRadius: "8px", objectFit: "cover" }} 
                  />
                </Paper>
              ))}
            </Box>
            <Dialog open={lightboxOpen} onClose={() => setLightboxOpen(false)} maxWidth="lg" fullWidth scroll="paper" PaperProps={{ sx: { bgcolor: "rgba(0,0,0,0.9)" } }}>
              <DialogContent sx={{ p: 0, position: "relative", minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <MuiIconButton onClick={() => setLightboxOpen(false)} sx={{ position: "absolute", top: 16, right: 16, color: "white", bgcolor: "rgba(0,0,0,0.5)", "&:hover": { bgcolor: "rgba(0,0,0,0.7)" } }}><Close /></MuiIconButton>
                <img src={getCdnImage(hamperDetails.images[activeImageIndex], { width: 1000, height: 750 })} alt="Full size display" style={{ maxWidth: "90%", maxHeight: "80vh", borderRadius: "8px" }} />
              </DialogContent>
            </Dialog>
          </Paper>
        </Grid>

        {/* Product Details */}
        <Grid item xs={12} md={6}>
          <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3} flexWrap="wrap" gap={2}>
              <Typography variant="h2" sx={{ color: "#70CB97", fontWeight: 800, fontSize: isMobile ? "2rem" : "2.8rem" }}>₹{hamperDetails.price}</Typography>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Rating value={4.8} readOnly sx={{ color: "#E7C727" }} />
                <Typography variant="body2" sx={{ color: "#5a6e7a" }}>(48 reviews)</Typography>
              </Stack>
            </Stack>
            <Typography variant="body1" sx={{ mb: 3, color: "#334155", lineHeight: 1.6 }}>{hamperDetails.description}</Typography>
            <Box sx={{ mb: 4 }}>
              <Typography variant="caption" sx={{ display: "block", mb: 1, color: "#64748b", fontWeight: 600 }}>KEY FEATURES</Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                {hamperDetails.tags.map((tag, idx) => <Chip key={idx} label={tag} size="small" sx={{ bgcolor: "rgba(112,203,151,0.1)", color: "#70CB97", fontWeight: 600, borderRadius: 2 }} />)}
              </Stack>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box mb={4}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, display: "flex", alignItems: "center", color: "#19485D" }}>
                <Box component="span" sx={{ width: 32, height: 32, bgcolor: "#70CB97", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "1rem", fontWeight: 700, mr: 2 }}>{hamperDetails.items.length}</Box>
                Included Items
              </Typography>
              <Grid container spacing={2}>
                {hamperDetails.items.map((item, idx) => (
                  <Grid item xs={6} sm={4} key={idx}>
                    <Card sx={{ height: "100%", display: "flex", flexDirection: "column", p: 2, borderRadius: 3, bgcolor: "#fff", border: "1px solid #e2e8f0", transition: "all 0.2s", "&:hover": { scale: 1.02, boxShadow: "0px 8px 24px rgba(0,0,0,0.1)" } }}>
                      <Box sx={{ width: "100%", height: "100px", display: "flex", alignItems: "center", justifyContent: "center", mb: 2, bgcolor: "#f8fafc", borderRadius: 2 }}>
                        <CardMedia 
                          component="img" 
                          image={getCdnImage(item.image, { width: 120, height: 100 })} 
                          alt={item.name} 
                          style={{ width: "auto", maxWidth: "100%", height: "70%", objectFit: "contain" }} 
                        />
                      </Box>
                      <CardContent sx={{ p: 0, flexGrow: 1 }}>
                        <Typography variant="subtitle2" sx={{ fontWeight: 700, color: "#19485D" }}>{item.name}</Typography>
                        <Typography variant="body2" sx={{ fontSize: "0.75rem", color: "#64748b" }}>{item.description}</Typography>
                        <Typography variant="body2" sx={{ fontWeight: 700, color: "#70CB97", mt: 1 }}>₹{item.price}</Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
            <Box mb={4}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: "#19485D" }}>Volume Pricing</Typography>
              <TableContainer component={Paper} sx={{ borderRadius: 2 }}>
                <Table size="small">
                  <TableBody>
                    {hamperDetails.volumePricing.map((row, idx) => (
                      <TableRow key={idx}><TableCell sx={{ fontWeight: 600 }}>{row.qty} units</TableCell><TableCell sx={{ color: "#70CB97", fontWeight: 700 }}>{typeof row.price === "number" ? `₹${row.price.toLocaleString()}` : row.price}</TableCell></TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
            <Box mb={4}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: "#19485D" }}>Customization Options</Typography>
              <Stack spacing={1}>
                {hamperDetails.customizationOptions.map((opt, idx) => <Stack direction="row" alignItems="center" spacing={1} key={idx}><CheckCircle sx={{ fontSize: "1rem", color: "#70CB97" }} /><Typography variant="body2">{opt}</Typography></Stack>)}
              </Stack>
            </Box>
            <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 3 }}>
              <Tooltip title="Secure Checkout"><Shield sx={{ color: "#70CB97" }} /></Tooltip>
              <Tooltip title="Free Shipping"><LocalShipping sx={{ color: "#70CB97" }} /></Tooltip>
              <Tooltip title="30-Day Returns"><MonetizationOn sx={{ color: "#70CB97" }} /></Tooltip>
              <Tooltip title="1 Year Warranty"><Build sx={{ color: "#70CB97" }} /></Tooltip>
              <Tooltip title="Verified Quality"><VerifiedUser sx={{ color: "#70CB97" }} /></Tooltip>
            </Stack>
            <Button variant="contained" startIcon={<AddShoppingCart />} fullWidth={isMobile} sx={{ py: 1.8, px: 4, borderRadius: 3, fontWeight: 700, fontSize: "1.1rem", textTransform: "none", bgcolor: "#70CB97", "&:hover": { bgcolor: "#5cb67f", transform: "translateY(-2px)" }, boxShadow: "0 4px 12px rgba(112,203,151,0.3)" }} onClick={handleAddToCart}>Add to Cart – ₹{hamperDetails.price}</Button>
          </Box>
        </Grid>
      </Grid>

      {/* Testimonials */}
      <Box sx={{ mt: 10, mb: 8 }}>
        <Typography variant="h3" sx={{ fontWeight: 800, mb: 5, textAlign: "center", color: "#19485D" }}>What Our Customers Say</Typography>
        <Grid container spacing={4}>
          {testimonials.map((t, idx) => (
            <Grid item xs={12} md={4} key={idx}>
              <Card sx={{ p: 3, borderRadius: 4, height: "100%", boxShadow: "0 8px 20px rgba(0,0,0,0.05)", border: "1px solid #e2e8f0" }}>
                <Stack direction="row" spacing={2} alignItems="center" mb={2}>
                  <Avatar 
                    src={getCdnImage(t.avatar, { width: 56, height: 56 })} 
                    sx={{ width: 56, height: 56 }} 
                  />
                  <Box><Typography variant="subtitle1" sx={{ fontWeight: 700 }}>{t.name}</Typography><Typography variant="body2" sx={{ color: "#64748b" }}>{t.role}</Typography></Box>
                </Stack>
                <Rating value={t.rating} readOnly sx={{ mb: 2, color: "#E7C727" }} />
                <Typography variant="body2" sx={{ fontStyle: "italic", color: "#334155" }}>“{t.text}”</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Highlights & Delivery */}
      <Box sx={{ mt: 6, p: { xs: 4, md: 6 }, bgcolor: "white", borderRadius: 4, boxShadow: "0 8px 32px rgba(0,0,0,0.05)", border: "1px solid #e2e8f0" }}>
        <Typography variant="h3" sx={{ fontWeight: 800, mb: 6, textAlign: "center", color: "#19485D" }}>Why Choose Color Splash Hamper?</Typography>
        <Grid container spacing={4}>
          {hamperDetails.highlights.map((feature, idx) => (
            <Grid item xs={12} sm={6} md={3} key={idx}>
              <Box sx={{ p: 3, textAlign: "center", bgcolor: "#f8fafc", borderRadius: 3, border: "1px solid #e2e8f0", transition: "all 0.3s", "&:hover": { transform: "translateY(-5px)", borderColor: "#70CB97" } }}>
                <Typography variant="h2" sx={{ mb: 2, fontSize: "3rem" }}>{feature.icon}</Typography>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: "#19485D" }}>{feature.title}</Typography>
                <Typography variant="body2" sx={{ color: "#64748b" }}>{feature.description}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Divider sx={{ my: 5 }} />
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}><Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: "#19485D" }}>Delivery Timeline</Typography><Typography variant="body2" sx={{ color: "#334155" }}>{hamperDetails.deliveryTimeline}</Typography></Grid>
          <Grid item xs={12} md={6}><Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: "#19485D" }}>Warranty</Typography><Typography variant="body2" sx={{ color: "#334155" }}>{hamperDetails.warranty}</Typography></Grid>
        </Grid>
      </Box>

      <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleCloseSnackbar} message="✓ Color Splash Hamper added to cart!" anchorOrigin={{ vertical: "bottom", horizontal: "right" }} sx={{ "& .MuiPaper-root": { bgcolor: "#19485D", borderRadius: 2 } }} action={<IconButton size="small" color="inherit" onClick={handleCloseSnackbar}><Close fontSize="small" /></IconButton>} />
    </Container>
  );
};

export default ColorSplashHamper;