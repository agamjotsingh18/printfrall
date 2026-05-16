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
  Style,
  Timer,
  AutoAwesome,
} from "@mui/icons-material";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

// Asset paths
import standardBusinessCardImg from "../assets/standard-business-card.png";
import standardBusinessCardImg2 from "../assets/standard-business-card-1.png";
import standardBusinessCardImg3 from "../assets/standard-business-card-2.png";
import standardBusinessCardImg4 from "../assets/standard-business-card-3.jpg";

const StandardBusinessCard = ({ addToCart }) => {
  const paperOptions = [
    { name: "300 GSM Lykam Matte", price: 150 },
    { name: "300 GSM Lykam Glossy", price: 150 },
  ];

  const laminationOptions = [
    { label: "No Lamination", extra: 0 },
    { label: "Matte Lamination", extra: 50 },
    { label: "Glossy Lamination", extra: 50 },
  ];

  const cardDetails = {
    name: "Standard Business Cards",
    description:
      "Clean, polished, and versatile—perfect for everyday interactions. Our cards use premium Lykam coated paper to ensure a professional look that clearly communicates your contact details.",
    features: [
      "Size: 3.5 x 2 inches (Standard)",
      "Paper: 300 GSM Lykam (Matte or Glossy)",
      "Print: Sharp Digital High‑Resolution (CMYK)",
      "Finishing: Optional Matte or Glossy Lamination",
      "Quantity: Pack of 50 cards (MOQ)",
      "Same‑day ready production for quick turnarounds",
      "Ideal for professionals, startups, and corporate teams",
    ],
    tags: ["300 GSM", "Same Day Ready", "Premium Lykam"],
  };

  const [selectedPaper, setSelectedPaper] = useState(paperOptions[0]);
  const [selectedLamination, setSelectedLamination] = useState(laminationOptions[0]);
  const [mainImage, setMainImage] = useState(standardBusinessCardImg);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const totalPrice = selectedPaper.price + selectedLamination.extra;
  const moq = 50;

  const thumbnailImages = [
    standardBusinessCardImg,
    standardBusinessCardImg2,
    standardBusinessCardImg3,
    standardBusinessCardImg4,
  ];

  const handleAddToCart = () => {
    const item = {
      name: cardDetails.name,
      size: "3.5 x 2 inches",
      material: selectedPaper.name,
      lamination: selectedLamination.label,
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
                    tag === "300 GSM" ? (
                      <WorkspacePremium fontSize="small" />
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
                alt="Business Card Preview"
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

          {/* Paper Type Selection (pill‑shaped) */}
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
            <Style fontSize="small" /> Select Paper Type
          </Typography>
          <Box sx={{ display: "flex", gap: 1.5, mb: 4, flexWrap: "wrap" }}>
            {paperOptions.map((paper) => (
              <Paper
                key={paper.name}
                onClick={() => setSelectedPaper(paper)}
                sx={{
                  flex: 1,
                  p: 1.5,
                  textAlign: "center",
                  borderRadius: "40px",
                  fontWeight: 600,
                  cursor: "pointer",
                  bgcolor: selectedPaper.name === paper.name ? "#70CB97" : "#fff",
                  color: selectedPaper.name === paper.name ? "#fff" : "#19485D",
                  border: "1px solid #e0e7ed",
                  transition: "all 0.2s",
                  "&:hover": {
                    bgcolor: selectedPaper.name === paper.name ? "#5cb67f" : "#f0f9f3",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  {paper.name.replace("300 GSM Lykam ", "")}
                </Typography>
                <Typography variant="caption" sx={{ display: "block", opacity: 0.8 }}>
                  300 GSM Lykam
                </Typography>
              </Paper>
            ))}
          </Box>

          {/* Lamination Selection (pill‑shaped) */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: "1.1rem" }}
          >
            Lamination Finish
          </Typography>
          <Box sx={{ display: "flex", gap: 1.5, mb: 4, flexWrap: "wrap" }}>
            {laminationOptions.map((opt) => (
              <Paper
                key={opt.label}
                onClick={() => setSelectedLamination(opt)}
                sx={{
                  flex: 1,
                  p: 1.5,
                  textAlign: "center",
                  borderRadius: "40px",
                  fontWeight: 600,
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
                  {opt.extra > 0 ? `+ ₹${opt.extra}` : "Free"}
                </Typography>
              </Paper>
            ))}
          </Box>

          {/* Specifications Panel (matches other pages) */}
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
            * High‑resolution digital printing. Custom quantities and finishes available.
          </Typography>
        </Grid>
      </Grid>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="✓ Business Cards added to cart!"
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

export default StandardBusinessCard;