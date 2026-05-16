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
  AspectRatio,
  AutoAwesome,
} from "@mui/icons-material";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

// Asset paths
import squareBusinessCardImg from "../assets/square-business-card.png";
import squareBusinessCardImg2 from "../assets/square-business-card-1.png";
import squareBusinessCardImg3 from "../assets/square-business-card-2.png";
import squareBusinessCardImg4 from "../assets/square-business-card-3.png";
import squareBusinessCardImg5 from "../assets/square-business-card-4.png";

const SquareBusinessCard = ({ addToCart }) => {
  const sizeOptions = [
    { id: "standard", label: "Square (2 x 2 in)", trim: "5.08 x 5.08 cm", price: 180 },
    { id: "big", label: "Big Square (2.5 x 2.5 in)", trim: "6.35 x 6.35 cm", price: 240 },
  ];

  const paperStocks = [
    { name: "300 GSM Lykam Matte", type: "Standard" },
    { name: "350 GSM Premium Silk", type: "Premium" },
    { name: "Recycled Eco-Stock", type: "Standard" },
    { name: "Textured Linen", type: "Premium" },
  ];

  const finishOptions = [
    "No Lamination",
    "Matte Lamination",
    "Glossy Lamination",
    "Velvet Touch",
  ];

  const cardDetails = {
    name: "Square Visiting Cards",
    description:
      "Make a bold, modern statement with our unique square cards. Perfect for entrepreneurs, creative freelancers, and brands looking to stand out from the traditional rectangular crowd.",
    features: [
      "Size: 2x2 in or 2.5x2.5 in (Square format)",
      "Paper: 300 GSM Lykam Matte, 350 GSM Premium Silk, Recycled Eco‑Stock, or Textured Linen",
      "Lamination: None, Matte, Glossy, or Velvet Touch",
      "Print: High‑resolution digital (CMYK)",
      "Final trim size includes bleed allowance",
      "Quantity: Pack of 50 cards (MOQ)",
      "Same‑day delivery available in select cities (order before 12 PM)",
    ],
    tags: ["Unique Shape", "Same Day Ready", "Square Format"],
  };

  const [selectedSize, setSelectedSize] = useState(sizeOptions[1]); 
  const [selectedStock, setSelectedStock] = useState(paperStocks[0]);
  const [selectedFinish, setSelectedFinish] = useState(finishOptions[1]);
  const [mainImage, setMainImage] = useState(squareBusinessCardImg);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const moq = 50;
  const totalPrice = selectedSize.price;

  const thumbnailImages = [
    squareBusinessCardImg,
    squareBusinessCardImg2,
    squareBusinessCardImg3,
    squareBusinessCardImg4,
    squareBusinessCardImg5,
  ];

  const handleAddToCart = () => {
    const item = {
      name: cardDetails.name,
      size: selectedSize.label,
      paper: selectedStock.name,
      finish: selectedFinish,
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
                    tag === "Unique Shape" ? (
                      <AspectRatio fontSize="small" />
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
                alt="Square Visiting Card Preview"
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

          {/* Design Tip Card (green‑themed) */}
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
              Design Tip:
            </Typography>
            <Typography variant="caption" display="block" sx={{ color: "#5a6e7a" }}>
              Final trim size is <strong>{selectedSize.trim}</strong>. Stretch designs to the bleed
              area to avoid white borders.
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

          {/* Size Selection (pill‑shaped) */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: "1.1rem" }}
          >
            Select Card Size
          </Typography>
          <Box sx={{ display: "flex", gap: 1.5, mb: 4, flexWrap: "wrap" }}>
            {sizeOptions.map((size) => (
              <Paper
                key={size.id}
                onClick={() => setSelectedSize(size)}
                sx={{
                  flex: 1,
                  p: 1.5,
                  textAlign: "center",
                  borderRadius: "40px",
                  fontWeight: 600,
                  cursor: "pointer",
                  bgcolor: selectedSize.id === size.id ? "#70CB97" : "#fff",
                  color: selectedSize.id === size.id ? "#fff" : "#19485D",
                  border: "1px solid #e0e7ed",
                  transition: "all 0.2s",
                  "&:hover": {
                    bgcolor: selectedSize.id === size.id ? "#5cb67f" : "#f0f9f3",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  {size.label.split(" (")[0]}
                </Typography>
                <Typography variant="caption" sx={{ display: "block", opacity: 0.8 }}>
                  {size.label.match(/\(([^)]+)\)/)?.[0] || ""}
                </Typography>
              </Paper>
            ))}
          </Box>

          {/* Paper Stock Selection (pill‑shaped grid) */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: "1.1rem" }}
          >
            Paper Stock (4 Options)
          </Typography>
          <Grid container spacing={1.5} sx={{ mb: 4 }}>
            {paperStocks.map((stock) => (
              <Grid item xs={6} key={stock.name}>
                <Paper
                  onClick={() => setSelectedStock(stock)}
                  sx={{
                    p: 1.5,
                    textAlign: "center",
                    borderRadius: "40px",
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
                    {stock.type} Quality
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>

          {/* Lamination Finish (pill‑shaped) */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: "1.1rem" }}
          >
            Lamination Finish
          </Typography>
          <Box sx={{ display: "flex", gap: 1.5, mb: 4, flexWrap: "wrap" }}>
            {finishOptions.map((finish) => (
              <Paper
                key={finish}
                onClick={() => setSelectedFinish(finish)}
                sx={{
                  p: 1,
                  px: 2.5,
                  borderRadius: "40px",
                  textAlign: "center",
                  fontWeight: 600,
                  cursor: "pointer",
                  bgcolor: selectedFinish === finish ? "#70CB97" : "#fff",
                  color: selectedFinish === finish ? "#fff" : "#19485D",
                  border: "1px solid #e0e7ed",
                  transition: "all 0.2s",
                  "&:hover": {
                    bgcolor: selectedFinish === finish ? "#5cb67f" : "#f0f9f3",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                {finish}
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
            * Same‑day delivery available in Mumbai, Bengaluru, Kolkata & Hyderabad (order before 12 PM).
          </Typography>
        </Grid>
      </Grid>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="✓ Square Cards added to selection!"
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

export default SquareBusinessCard;