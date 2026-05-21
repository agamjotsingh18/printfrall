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
  Diamond,
  Style,
  AutoAwesome,
} from "@mui/icons-material";
import { getCdnImage } from "../utils/imageLoader";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const MetallicBusinessCard = ({ addToCart }) => {
  const materialOptions = [
    { name: "Gold Metallic", price: 250 },
    { name: "Silver Metallic", price: 240 },
    { name: "Rose Gold Metallic", price: 260 },
  ];

  const finishOptions = [
    { label: "Polished Glossy", desc: "Reflective and high-shine" },
    { label: "Elegant Matte", desc: "Understated and sophisticated" },
  ];

  const cardDetails = {
    name: "Metallic Business Cards",
    description:
      "Redefine professionalism with high-quality metal stock. Durable, sophisticated, and sized perfectly at 3.5\" x 2\", these cards make a powerful first impression for consultants, executives, and high-end brands.",
    features: [
      "Size: 3.5 x 2 inches (standard business card)",
      "Material: High‑grade metallic stock (Gold, Silver, or Rose Gold)",
      "Finish: Polished Glossy or Elegant Matte",
      "Durability: Premium metal – scratch‑resistant and long‑lasting",
      "Print: High‑definition digital printing on metallic surface",
      "Quantity: Pack of 50 cards (MOQ)",
      "Perfect for luxury branding, executives, and premium events",
    ],
    images: [
      "metallic-business-card.png",
      "metallic-business-card-1.png",
      "metallic-business-card-2.png",
      "metallic-business-card-3.png"
    ],
    tags: ["Metal Stock", "Luxury Finish", "Premium Card"],
  };

  const [selectedMaterial, setSelectedMaterial] = useState(materialOptions[0]);
  const [selectedFinish, setSelectedFinish] = useState(finishOptions[0]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const moq = 50;
  const unitPrice = selectedMaterial.price;
  const totalPrice = unitPrice * moq;

  const handleAddToCart = () => {
    const item = {
      name: cardDetails.name,
      size: "3.5 x 2 inches",
      material: selectedMaterial.name,
      finish: selectedFinish.label,
      price: unitPrice,
      quantity: moq,
      image: getCdnImage(cardDetails.images[0], { width: 150, height: 150 }),
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
                    tag === "Metal Stock" ? (
                      <Diamond fontSize="small" />
                    ) : tag === "Luxury Finish" ? (
                      <WorkspacePremium fontSize="small" />
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
                src={getCdnImage(cardDetails.images[activeImageIndex], { width: 600, height: 450 })}
                alt={`${cardDetails.name} primary view`}
                width="600"
                height="450"
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
                scrollbarWidth: "none",
              }}
            >
              {cardDetails.images.map((imageName, idx) => (
                <Paper
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  sx={{
                    p: 1,
                    borderRadius: "10px",
                    cursor: "pointer",
                    border:
                      activeImageIndex === idx ? "2px solid #70CB97" : "2px solid transparent",
                    "&:hover": { border: "2px solid #70CB97" },
                    flexShrink: 0,
                    transition: "all 0.2s",
                  }}
                >
                  <img
                    src={getCdnImage(imageName, { width: 90, height: 90 })}
                    alt={`${cardDetails.name} thumbnail view ${idx + 1}`}
                    width="90"
                    height="90"
                    loading="lazy"
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

          <Box sx={{ display: "flex", alignItems: "baseline", gap: 2, flexWrap: "wrap", mb: 1 }}>
            <Typography variant="h5" sx={{ color: "#70CB97", fontWeight: "bold" }}>
              ₹{unitPrice}
            </Typography>
            <Typography variant="body2" sx={{ color: "#5a6e7a" }}>
              / card (MOQ: {moq})
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ color: "#5a6e7a", mb: 2 }}>
            Pack of {moq}: ₹{totalPrice}
          </Typography>

          <Typography variant="body1" sx={{ mb: 3, color: "#1e2a32", lineHeight: 1.6 }}>
            {cardDetails.description}
          </Typography>

          <Divider sx={{ mb: 3 }} />

          {/* Metal Tone Selection (pill‑shaped) */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              mb: 2,
              color: "#19485D",
              fontSize: "1.1rem",
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Style fontSize="small" /> Select Metal Tone
          </Typography>
          <Box sx={{ display: "flex", gap: 1.5, mb: 4, flexWrap: "wrap" }}>
            {materialOptions.map((mat) => (
              <Paper
                key={mat.name}
                onClick={() => setSelectedMaterial(mat)}
                sx={{
                  flex: 1,
                  p: 1.5,
                  textAlign: "center",
                  borderRadius: "40px",
                  fontWeight: 600,
                  cursor: "pointer",
                  bgcolor: selectedMaterial.name === mat.name ? "#70CB97" : "#fff",
                  color: selectedMaterial.name === mat.name ? "#fff" : "#19485D",
                  border: "1px solid #e0e7ed",
                  transition: "all 0.2s",
                  "&:hover": {
                    bgcolor: selectedMaterial.name === mat.name ? "#5cb67f" : "#f0f9f3",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  {mat.name.split(" ")[0]}
                </Typography>
                <Typography variant="caption" sx={{ display: "block", opacity: 0.8 }}>
                  Metal Tone
                </Typography>
              </Paper>
            ))}
          </Box>

          {/* Surface Finish (pill‑shaped grid) */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: "1.1rem" }}
          >
            Surface Finish
          </Typography>
          <Grid container spacing={1.5} sx={{ mb: 4 }}>
            {finishOptions.map((fin) => (
              <Grid item xs={6} key={fin.label}>
                <Paper
                  onClick={() => setSelectedFinish(fin)}
                  sx={{
                    p: 1.5,
                    textAlign: "center",
                    borderRadius: "40px",
                    cursor: "pointer",
                    bgcolor: selectedFinish.label === fin.label ? "#70CB97" : "#fff",
                    color: selectedFinish.label === fin.label ? "#fff" : "#19485D",
                    border: "1px solid #e0e7ed",
                    transition: "all 0.2s",
                    "&:hover": {
                      bgcolor: selectedFinish.label === fin.label ? "#5cb67f" : "#f0f9f3",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    {fin.label}
                  </Typography>
                  <Typography variant="caption" sx={{ display: "block", opacity: 0.8 }}>
                    {fin.desc}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>

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
            * Premium metal stock with designer support available. Custom shapes on request.
          </Typography>
        </Grid>
      </Grid>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="✓ Metallic card added to selection!"
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

export default MetallicBusinessCard;