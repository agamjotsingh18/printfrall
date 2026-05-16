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
  Timer,
  ChangeHistory,
  AutoAwesome,
} from "@mui/icons-material";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

// Asset paths
import roundedCornerBusinessCardImg from "../assets/rounded-corner-business-card.png";
import roundedCornerBusinessCardImg2 from "../assets/rounded-corner-business-card-1.png";
import roundedCornerBusinessCardImg3 from "../assets/rounded-corner-business-card-2.png";
import roundedCornerBusinessCardImg4 from "../assets/rounded-corner-business-card-3.png";

const RoundedCornerBusinessCard = ({ addToCart }) => {
  const paperStocks = [
    { name: "Standard Matte", desc: "300 GSM Classic finish", price: 160 },
    { name: "Premium Glossy", desc: "Vibrant and reflective", price: 180 },
    { name: "Velvet Soft-Touch", desc: "Premium tactile feel", price: 220 },
  ];

  const cardDetails = {
    name: "Rounded Corner Visiting Cards",
    description:
      "Lose the corners, get an edge. Rounded business cards give your brand a fresh, modern look that is easy to spot in a stack and memorable in a client's hand.",
    features: [
      "Size: 8.9 cm x 5.1 cm (standard)",
      "Corner radius: 0.6 cm for a soft, modern look",
      "Paper: Standard Matte, Premium Glossy, or Velvet Soft‑Touch",
      "Print: High‑resolution digital (CMYK)",
      "Quantity: Pack of 50 cards (MOQ)",
      "Same‑day delivery available in Mumbai & Kolkata (order before 12 PM)",
      "Ideal for creative professionals, startups, and luxury brands",
    ],
    tags: ["0.6cm Radius", "Same Day Ready", "Modern Edge"],
  };

  const [selectedStock, setSelectedStock] = useState(paperStocks[0]);
  const [mainImage, setMainImage] = useState(roundedCornerBusinessCardImg);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const moq = 50;
  const totalPrice = selectedStock.price;

  const thumbnailImages = [
    roundedCornerBusinessCardImg,
    roundedCornerBusinessCardImg2,
    roundedCornerBusinessCardImg3,
    roundedCornerBusinessCardImg4,
  ];

  const handleAddToCart = () => {
    const item = {
      name: cardDetails.name,
      size: "8.9 cm x 5.1 cm",
      corner: "0.6 cm Radius",
      material: selectedStock.name,
      price: totalPrice,
      quantity: moq,
      image: mainImage,
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
      <Grid container spacing={4}>
        {/* Left Side: Gallery */}
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 2,
              borderRadius: "16px",
              boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.08)",
              bgcolor: "#fff",
            }}
          >
            {/* Inline chips (no absolute positioning) */}
            <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
              {cardDetails.tags.map((tag, idx) => (
                <Chip
                  key={idx}
                  label={tag}
                  size="small"
                  icon={
                    tag === "0.6cm Radius" ? (
                      <ChangeHistory sx={{ transform: "rotate(180deg)" }} fontSize="small" />
                    ) : tag === "Same Day Ready" ? (
                      <Timer fontSize="small" />
                    ) : (
                      <AutoAwesome fontSize="small" />
                    )
                  }
                  sx={{
                    backgroundColor: "rgba(112, 203, 151, 0.1)",
                    color: "#70CB97",
                    fontWeight: "bold",
                    borderRadius: 2,
                  }}
                />
              ))}
            </Box>

            <Zoom>
              <img
                src={mainImage}
                alt="Rounded Corner Card Preview"
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  cursor: "zoom-in",
                  maxHeight: "400px",
                  objectFit: "contain",
                }}
              />
            </Zoom>

            {/* Thumbnail Gallery */}
            <Box
              sx={{
                display: "flex",
                gap: 2,
                mt: 2,
                overflowX: "auto",
                "&::-webkit-scrollbar": { display: "none" },
              }}
            >
              {thumbnailImages.map((img, idx) => (
                <Paper
                  key={idx}
                  onClick={() => setMainImage(img)}
                  sx={{
                    p: 1,
                    borderRadius: "10px",
                    cursor: "pointer",
                    border:
                      mainImage === img ? "2px solid #70CB97" : "2px solid transparent",
                    "&:hover": { border: "2px solid #70CB97" },
                    flexShrink: 0,
                    transition: "all 0.2s",
                  }}
                >
                  <img
                    src={img}
                    alt={`view ${idx + 1}`}
                    style={{
                      width: "90px",
                      height: "90px",
                      borderRadius: "8px",
                      objectFit: "cover",
                    }}
                  />
                </Paper>
              ))}
            </Box>
          </Paper>

          {/* Design Guidelines Card (green‑themed) */}
          <Paper
            sx={{
              p: 2,
              mt: 3,
              borderRadius: "16px",
              bgcolor: "#f0f9f3",
              border: "1px solid #70CB97",
            }}
          >
            <Typography variant="caption" sx={{ fontWeight: "bold", color: "#19485D" }}>
              Design Guidelines:
            </Typography>
            <Typography variant="caption" display="block" sx={{ color: "#5a6e7a" }}>
              • Final trim size: <strong>8.9 cm x 5.1 cm</strong>.<br />
              • Keep important text within the safety area to avoid corner cutting.<br />
              • Use bold fonts (size 10+) for white text on dark backgrounds.
            </Typography>
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
            {cardDetails.name}
          </Typography>

          <Typography
            variant="h5"
            sx={{
              color: "#70CB97",
              fontWeight: "bold",
              mb: 3,
              fontSize: { xs: "1.5rem", md: "2rem" },
            }}
          >
            ₹{totalPrice} <Typography variant="caption" sx={{ color: "#5a6e7a" }}>/ {moq} cards</Typography>
          </Typography>

          <Typography variant="body1" sx={{ mb: 3, color: "#1e2a32", lineHeight: 1.6 }}>
            {cardDetails.description}
          </Typography>

          <Divider sx={{ mb: 3 }} />

          {/* Paper Stock Selection (pill‑shaped) */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: "1.1rem" }}
          >
            Select Paper Stock
          </Typography>
          <Box sx={{ display: "flex", gap: 1.5, mb: 4, flexWrap: "wrap" }}>
            {paperStocks.map((stock) => (
              <Paper
                key={stock.name}
                onClick={() => setSelectedStock(stock)}
                sx={{
                  flex: 1,
                  p: 1.5,
                  textAlign: "center",
                  borderRadius: "40px",
                  fontWeight: 600,
                  cursor: "pointer",
                  bgcolor: selectedStock.name === stock.name ? "#70CB97" : "#fff",
                  color: selectedStock.name === stock.name ? "#fff" : "#19485D",
                  border: "1px solid #e0e7ed",
                  transition: "all 0.2s",
                  "&:hover": {
                    bgcolor: selectedStock.name === stock.name ? "#5cb67f" : "#f0f9f3",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  {stock.name}
                </Typography>
                <Typography variant="caption" sx={{ display: "block", opacity: 0.8 }}>
                  {stock.desc}
                </Typography>
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
              Product Specifications:
            </Typography>
            {cardDetails.features.map((feature, i) => (
              <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                <span
                  style={{
                    display: "inline-block",
                    width: "6px",
                    height: "6px",
                    backgroundColor: "#70CB97",
                    borderRadius: "50%",
                  }}
                ></span>
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
            Add Pack of {moq} to Cart – ₹{totalPrice}
          </Button>

          <Typography
            variant="caption"
            sx={{ display: "block", mt: 2, textAlign: "center", color: "#5a6e7a" }}
          >
            * Same‑day delivery available in Mumbai & Kolkata (Order before 12 PM).
          </Typography>
        </Grid>
      </Grid>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="✓ Rounded cards added to selection!"
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        sx={{
          "& .MuiSnackbarContent-root": { backgroundColor: "#19485D", borderRadius: "40px" },
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

export default RoundedCornerBusinessCard;