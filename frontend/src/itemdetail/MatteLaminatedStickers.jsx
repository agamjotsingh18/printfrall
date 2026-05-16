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
  Chip,
  Divider,
} from "@mui/material";
import {
  AddShoppingCart,
  Close,
  Inventory,
  WorkspacePremium,
  AutoAwesome,
} from "@mui/icons-material";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

// Import your actual matte laminated sticker images – replace with real variants if available
import matteLaminatedStickersImg from "../assets/matte-laminated-stickers.png";
import matteLaminatedStickersImg2 from "../assets/matte-laminated-stickers-1.png";
import matteLaminatedStickersImg3 from "../assets/matte-laminated-stickers-2.png";
// import matteLaminatedStickersImg4 from "../assets/matte-laminated-stickers-3.png";
import matteLaminatedStickersImg5 from "../assets/matte-laminated-stickers-4.png";
import matteLaminatedStickersImg6 from "../assets/matte-laminated-stickers-5.png";
import matteLaminatedStickersImg7 from "../assets/matte-laminated-stickers-6.png";

const MatteLaminatedStickers = ({ addToCart }) => {
  // Price mapping for premium 300 GSM Matte packs
  const priceMapping = {
    "Aesthetic Pack (45 Pcs)": 299,
    "Doodle Collection (45 Pcs)": 349,
    "Custom Business Set": 399,
  };

  const [selectedMaterial, setSelectedMaterial] = useState("Aesthetic Pack (45 Pcs)");
  const [mainImage, setMainImage] = useState(matteLaminatedStickersImg);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const unitPrice = priceMapping[selectedMaterial];
  const totalPrice = unitPrice; // Single pack

  const productDetails = {
    name: "Matte Laminated Aesthetic Stickers",
    description:
      "Elevate your gear with our high-quality Matte Laminated Stickers. Printed on premium 300 GSM vinyl paper, this set of 45 attractive doodle and aesthetic designs is perfect for journaling, laptop customization, and personalized gifting. Every pack comes in a sturdy paper tube for maximum protection.",
    features: [
      "Material: Heavy-duty 300 GSM Premium Vinyl Paper",
      "Finish: Anti-glare Matte Lamination for an elegant look",
      "Quantity: Pack of 45 uniquely designed stickers",
      "Packaging: Delivered in a strong and sturdy paper tube",
      "Durability: Weather-resistant and scratch-proof",
      "Versatility: Ideal for Laptops, Journals, Helmets, and Bottles",
      "Design: High-definition vibrant aesthetic & doodle art",
    ],
    tags: ["300 GSM", "Journal Essential", "Premium Vinyl"],
  };

  const thumbnailImages = [
    matteLaminatedStickersImg,
    matteLaminatedStickersImg2,
    matteLaminatedStickersImg3,
    // matteLaminatedStickersImg4,
    matteLaminatedStickersImg5,
    matteLaminatedStickersImg6,
    matteLaminatedStickersImg7,
  ];

  const handleAddToCart = () => {
    const item = {
      name: productDetails.name,
      image: mainImage,
      description: productDetails.description,
      selectedMaterial,
      price: totalPrice,
      quantity: 1,
    };
    addToCart(item);
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => setSnackbarOpen(false);

  return (
    <Container
      sx={{
        py: 6,
        maxWidth: 1200,
        margin: "40px auto 0 auto",
        px: { xs: 2, md: 3 },
      }}
    >
      <Grid container spacing={5}>
        {/* Left Side: Gallery */}
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 2,
              borderRadius: "16px",
              boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.08)",
              bgcolor: "#fff",
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 20,
                left: 20,
                zIndex: 10,
                display: "flex",
                gap: 1,
              }}
            >
              <Chip
                label="300 GSM"
                size="small"
                icon={<WorkspacePremium />}
                sx={{
                  bgcolor: "#19485D",
                  color: "white",
                  fontWeight: "bold",
                  borderRadius: "40px",
                }}
              />
              <Chip
                label="MATTE FINISH"
                size="small"
                icon={<AutoAwesome />}
                sx={{
                  bgcolor: "#70CB97",
                  color: "white",
                  fontWeight: "bold",
                  borderRadius: "40px",
                }}
              />
            </Box>

            <Zoom>
              <img
                src={mainImage}
                alt={productDetails.name}
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  height: "450px",
                  objectFit: "contain",
                }}
              />
            </Zoom>

            {/* Thumbnails */}
            <Box
              sx={{
                display: "flex",
                gap: 2,
                mt: 2,
                overflowX: "auto",
                "&::-webkit-scrollbar": { display: "none" },
              }}
            >
              {thumbnailImages.map((image, index) => (
                <Paper
                  key={index}
                  onClick={() => setMainImage(image)}
                  sx={{
                    p: 1,
                    borderRadius: "12px",
                    cursor: "pointer",
                    border:
                      mainImage === image ? "2px solid #70CB97" : "1px solid #e0e7ed",
                    flexShrink: 0,
                    transition: "all 0.2s",
                    "&:hover": { transform: "translateY(-2px)" },
                  }}
                >
                  <img
                    src={image}
                    alt={`View ${index + 1}`}
                    style={{ width: "80px", height: "80px", objectFit: "cover" }}
                  />
                </Paper>
              ))}
            </Box>
          </Paper>
        </Grid>

        {/* Right Side: Details */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: 1,
              color: "#19485D",
              fontSize: { xs: "1.8rem", md: "2.5rem" },
            }}
          >
            {productDetails.name}
          </Typography>

          <Box sx={{ display: "flex", alignItems: "baseline", gap: 2, flexWrap: "wrap", mb: 1 }}>
            <Typography variant="h5" sx={{ color: "#70CB97", fontWeight: "bold" }}>
              ₹{totalPrice}
            </Typography>
            <Typography variant="body2" sx={{ color: "#5a6e7a" }}>
              (per pack of 45 stickers)
            </Typography>
          </Box>

          <Typography variant="body1" sx={{ mb: 3, color: "#1e2a32", lineHeight: 1.6 }}>
            {productDetails.description}
          </Typography>

          <Divider sx={{ mb: 3 }} />

          {/* Pack Type Selection */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: "1.1rem" }}
          >
            Select Pack Type:
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 4, flexWrap: "wrap" }}>
            {Object.keys(priceMapping).map((pack) => (
              <Paper
                key={pack}
                onClick={() => setSelectedMaterial(pack)}
                sx={{
                  p: 1.5,
                  px: 3,
                  borderRadius: "40px",
                  textAlign: "center",
                  fontWeight: 600,
                  cursor: "pointer",
                  bgcolor: selectedMaterial === pack ? "#70CB97" : "#fff",
                  color: selectedMaterial === pack ? "#fff" : "#19485D",
                  border: "1px solid #e0e7ed",
                  transition: "all 0.2s",
                  "&:hover": {
                    bgcolor: selectedMaterial === pack ? "#5cb67f" : "#f0f9f3",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                {pack}
              </Paper>
            ))}
          </Box>

          {/* Specifications Panel */}
          <Paper
            sx={{
              p: 3,
              bgcolor: "#f8fafc",
              mb: 4,
              borderRadius: "16px",
              border: "1px solid #e0e7ed",
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: "#19485D" }}>
              Why Choose Our Stickers?
            </Typography>
            {productDetails.features.map((feature, i) => (
              <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                <Inventory sx={{ fontSize: 16, color: "#70CB97" }} />
                <Typography variant="body2" sx={{ color: "#5a6e7a" }}>
                  {feature}
                </Typography>
              </Box>
            ))}
          </Paper>

          <Button
            variant="contained"
            fullWidth
            startIcon={<AddShoppingCart />}
            sx={{
              background: "#70CB97",
              color: "white",
              fontWeight: 700,
              fontSize: "1rem",
              py: 1.8,
              borderRadius: "40px",
              textTransform: "none",
              boxShadow: "0px 4px 12px rgba(112, 203, 151, 0.3)",
              "&:hover": {
                background: "#5cb67f",
                transform: "translateY(-2px)",
                boxShadow: "0px 6px 16px rgba(112, 203, 151, 0.4)",
              },
            }}
            onClick={handleAddToCart}
          >
            Add Pack to Cart – ₹{totalPrice}
          </Button>

          <Typography
            variant="caption"
            sx={{ display: "block", mt: 2, textAlign: "center", color: "#5a6e7a" }}
          >
            * Quality printing services provided by PrintfrAll.
          </Typography>
        </Grid>
      </Grid>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="✓ Pack added to cart!"
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        sx={{
          "& .MuiSnackbarContent-root": {
            backgroundColor: "#19485D",
            borderRadius: "40px",
          },
        }}
        action={
          <IconButton size="small" color="inherit" onClick={handleCloseSnackbar}>
            <Close fontSize="small" />
          </IconButton>
        }
      />
    </Container>
  );
};

export default MatteLaminatedStickers;