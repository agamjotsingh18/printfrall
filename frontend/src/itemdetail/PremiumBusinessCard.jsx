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
  WorkspacePremium,
  Layers,
  AutoAwesome,
} from "@mui/icons-material";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

// Asset paths
import premiumLaminatedCardImg from "../assets/premium-laminated-card.png";
import premiumLaminatedCardImg2 from "../assets/premium-laminated-card-1.png";
import premiumLaminatedCardImg3 from "../assets/premium-laminated-card-2.png";
import premiumLaminatedCardImg4 from "../assets/premium-laminated-card-3.png";
import premiumLaminatedCardImg5 from "../assets/premium-laminated-card-4.png";

const PremiumLaminatedCard = ({ addToCart }) => {
  const paperGSMs = [
    { label: "300 GSM", basePrice: 200 },
    { label: "350 GSM", basePrice: 250 },
    { label: "400 GSM", basePrice: 300 },
  ];

  const laminationOptions = [
    { label: "Suede", desc: "Smooth velvet-like texture" },
    { label: "Silky Matte", desc: "Smooth & professional" },
    { label: "Velvet", desc: "Premium soft-touch feel" },
    { label: "Linen", desc: "Elegant cross-hatch texture" },
    { label: "Matte", desc: "Classic non-reflective" },
    { label: "Spot UV", desc: "High-gloss coating" },
  ];

  const sideOptions = ["Single-sided", "Double-sided"];

  const cardDetails = {
    name: "Premium Laminated Cards",
    description:
      "Make every exchange unforgettable. Our premium cards use high-grade Lykam Matte paper combined with advanced lamination techniques to ensure your brand stays top of mind.",
    features: [
      "Size: 3.5 x 2 inches (Standard business card)",
      "Paper: Lykam Matte Coated (300/350/400 GSM)",
      "Lamination: Silky Matte, Velvet, Linen, or classic Matte",
      "Printing: Single‑sided or double‑sided (CMYK)",
      "Finish: Premium, velvet‑soft or elegant textured feel",
      "Quantity: Pack of 50 cards (MOQ)",
      "Perfect for high‑end branding and corporate gifting",
    ],
    tags: ["Premium Lykam", "MOQ: 50", "Laminated Finish"],
  };

  const [selectedGSM, setSelectedGSM] = useState(paperGSMs[0]);
  const [selectedLamination, setSelectedLamination] = useState(laminationOptions[0]);
  const [selectedSide, setSelectedSide] = useState("Single-sided");
  const [mainImage, setMainImage] = useState(premiumLaminatedCardImg);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const totalPrice = selectedGSM.basePrice + (selectedSide === "Double-sided" ? 100 : 0);
  const moq = 50;

  const thumbnailImages = [
    premiumLaminatedCardImg,
    premiumLaminatedCardImg2,
    premiumLaminatedCardImg3,
    premiumLaminatedCardImg4,
    premiumLaminatedCardImg5,
  ];

  const handleAddToCart = () => {
    const item = {
      name: cardDetails.name,
      size: "3.5 x 2 inches",
      material: `Lykam Matte Coated (${selectedGSM.label})`,
      lamination: selectedLamination.label,
      sides: selectedSide,
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
            {/* Chips inside flex row (no absolute positioning) */}
            <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
              {cardDetails.tags.map((tag, idx) => (
                <Chip
                  key={idx}
                  label={tag}
                  size="small"
                  icon={
                    tag === "Premium Lykam" ? (
                      <WorkspacePremium fontSize="small" />
                    ) : tag === "MOQ: 50" ? (
                      <AutoAwesome fontSize="small" />
                    ) : (
                      <Layers fontSize="small" />
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
                alt="Premium Business Card Preview"
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

          {/* Paper Thickness Selection (pill‑shaped) */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: "1.1rem" }}
          >
            Select Paper Thickness
          </Typography>
          <Box sx={{ display: "flex", gap: 1.5, mb: 4, flexWrap: "wrap" }}>
            {paperGSMs.map((gsm) => (
              <Paper
                key={gsm.label}
                onClick={() => setSelectedGSM(gsm)}
                sx={{
                  flex: 1,
                  p: 1.5,
                  textAlign: "center",
                  borderRadius: "40px",
                  fontWeight: 600,
                  cursor: "pointer",
                  bgcolor: selectedGSM.label === gsm.label ? "#70CB97" : "#fff",
                  color: selectedGSM.label === gsm.label ? "#fff" : "#19485D",
                  border: "1px solid #e0e7ed",
                  transition: "all 0.2s",
                  "&:hover": {
                    bgcolor: selectedGSM.label === gsm.label ? "#5cb67f" : "#f0f9f3",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  {gsm.label}
                </Typography>
              </Paper>
            ))}
          </Box>

          {/* Lamination Finish (pill‑shaped grid) */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: "1.1rem" }}
          >
            Lamination Finish Type
          </Typography>
          <Grid container spacing={1.5} sx={{ mb: 4 }}>
            {laminationOptions.map((opt) => (
              <Grid item xs={6} key={opt.label}>
                <Paper
                  onClick={() => setSelectedLamination(opt)}
                  sx={{
                    p: 1.5,
                    textAlign: "center",
                    borderRadius: "40px",
                    cursor: "pointer",
                    bgcolor: selectedLamination.label === opt.label ? "#70CB97" : "#fff",
                    color: selectedLamination.label === opt.label ? "#fff" : "#19485D",
                    border: "1px solid #e0e7ed",
                    transition: "all 0.2s",
                    "&:hover": {
                      bgcolor: selectedLamination.label === opt.label ? "#5cb67f" : "#f0f9f3",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    {opt.label}
                  </Typography>
                  <Typography variant="caption" sx={{ display: "block", opacity: 0.8 }}>
                    {opt.desc}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>

          {/* Printing Options (pill‑shaped) */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: "1.1rem" }}
          >
            Printing Options
          </Typography>
          <Box sx={{ display: "flex", gap: 1.5, mb: 4, flexWrap: "wrap" }}>
            {sideOptions.map((side) => (
              <Paper
                key={side}
                onClick={() => setSelectedSide(side)}
                sx={{
                  flex: 1,
                  p: 1.5,
                  textAlign: "center",
                  borderRadius: "40px",
                  fontWeight: 600,
                  cursor: "pointer",
                  bgcolor: selectedSide === side ? "#70CB97" : "#fff",
                  color: selectedSide === side ? "#fff" : "#19485D",
                  border: "1px solid #e0e7ed",
                  transition: "all 0.2s",
                  "&:hover": {
                    bgcolor: selectedSide === side ? "#5cb67f" : "#f0f9f3",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                {side}
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
            Order Pack of {moq} – ₹{totalPrice}
          </Button>

          <Typography
            variant="caption"
            sx={{ display: "block", mt: 2, textAlign: "center", color: "#5a6e7a" }}
          >
            * Premium high‑definition printing. Custom quantities and finishes available.
          </Typography>
        </Grid>
      </Grid>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="✓ Premium cards added to cart!"
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

export default PremiumLaminatedCard;