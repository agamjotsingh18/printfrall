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
  useMediaQuery
} from "@mui/material";
import { AddShoppingCart, Close, Star, Description, Create, VpnKey } from "@mui/icons-material";
import { getCdnImage } from "../utils/imageLoader";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const ClassicLeatherCombo = ({ addToCart }) => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const productDetails = {
    name: "Classic Leather Combo",
    price: 899,
    originalPrice: 1099,
    description: "A sophisticated set featuring a faux leather diary, premium skate ballpoint pen, and elegant keychain - perfect for professionals who appreciate classic style.",
    features: [
      "Premium faux leather diary with 192 pages",
      "Smooth-writing skate ballpoint pen (0.7mm)",
      "Durable metal keychain with leather accent",
      "Gift-ready luxury packaging",
      "Available in multiple color options",
      "Corporate branding available"
    ],
    includedItems: [
      { 
        name: "Faux Leather Diary", 
        image: "faux-leather-diaries.png",
        price: 450,
        route: "/services/corporate-gifting/faux-leather-diaries"
      },
      { 
        name: "Skate Ballpoint Pen", 
        image: "skate-ballpoint-pen.png",
        price: 299,
        route: "/services/corporate-gifting/skate-ballpoint-pen"
      },
      { 
        name: "Premium Keychain", 
        image: "keychain.png",
        price: 350,
        route: "/services/corporate-gifting/keychain"
      }
    ],
    tags: ["Classic", "Professional", "Luxury"],
    images: [
      "classic-leather-combo.png",
      "classic-leather-combo-angle1.png",
      "classic-leather-combo-angle2.png",
      "classic-leather-combo-angle3.png",
      "classic-leather-combo-angle4.png"
    ]
  };

  const handleAddToCart = () => {
    const item = {
      name: productDetails.name,
      image: getCdnImage(productDetails.images[0], { width: 150, height: 150 }),
      description: productDetails.description,
      price: productDetails.price,
      quantity: 1
    };
    addToCart(item);
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Container sx={{ 
      py: 6, 
      maxWidth: 1200, 
      margin: "40px auto 0 auto",
      px: isMobile ? 2 : 3
    }}>
      <Grid container spacing={4}>
        {/* Image Section with Thumbnail Gallery */}
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 2,
              borderRadius: "16px",
              boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.08)",
              bgcolor: "#fff",
              position: "relative"
            }}
          >
            {/* Rating Badge */}
            <Box sx={{
              position: "absolute",
              top: 16,
              left: 16,
              backgroundColor: "rgba(255,255,255,0.95)",
              borderRadius: "40px",
              px: 1.5,
              py: 0.5,
              display: "flex",
              alignItems: "center",
              zIndex: 1,
              boxShadow: "0px 2px 6px rgba(0,0,0,0.1)"
            }}>
              <Star sx={{ color: "#E7C727", fontSize: "18px", mr: 0.5 }} />
              <Typography variant="body2" sx={{ fontWeight: "bold", color: "#19485D" }}>4.7</Typography>
            </Box>

            {/* Tags */}
            <Box sx={{ display: 'flex', gap: 1, mb: 2, justifyContent: 'flex-end' }}>
              {productDetails.tags.map((tag, index) => (
                <Chip 
                  key={index}
                  label={tag}
                  size="small"
                  sx={{
                    backgroundColor: "#19485D",
                    color: "white",
                    fontWeight: 'bold'
                  }}
                />
              ))}
            </Box>
            
            {/* Main Image with Zoom */}
            <Zoom>
              <img
                src={getCdnImage(productDetails.images[activeImageIndex], { width: 600, height: 450 })}
                alt={`${productDetails.name} primary view`}
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
              {productDetails.images.map((imageName, idx) => (
                <Paper
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  sx={{
                    p: 1,
                    borderRadius: "10px",
                    cursor: "pointer",
                    border: activeImageIndex === idx ? "2px solid #70CB97" : "2px solid transparent",
                    "&:hover": { border: "2px solid #70CB97" },
                    flexShrink: 0,
                    transition: "all 0.2s",
                  }}
                >
                  <img
                    src={getCdnImage(imageName, { width: 90, height: 90 })}
                    alt={`${productDetails.name} thumbnail view ${idx + 1}`}
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

        {/* Details Section */}
        <Grid item xs={12} md={6}>
          <Typography 
            variant="h4" 
            sx={{ 
              fontWeight: 700, 
              mb: 2,
              fontSize: isMobile ? "1.8rem" : "2.5rem",
              color: "#19485D"
            }}
          >
            {productDetails.name}
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, flexWrap: 'wrap', gap: 1 }}>
            <Typography 
              variant="h5" 
              sx={{ 
                color: "#70CB97", 
                fontWeight: "bold", 
                fontSize: isMobile ? "1.5rem" : "2rem",
                mr: 2
              }}
            >
              ₹{productDetails.price}
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                textDecoration: "line-through",
                color: "#5a6e7a"
              }}
            >
              ₹{productDetails.originalPrice}
            </Typography>
            <Chip 
              label={`Save ₹${productDetails.originalPrice - productDetails.price}`} 
              size="small"
              sx={{ 
                backgroundColor: "#70CB97", 
                color: "white",
                fontWeight: 'bold'
              }}
            />
          </Box>
          
          <Typography 
            variant="body1" 
            sx={{ 
              mb: 3, 
              lineHeight: 1.6,
              color: "#1e2a32"
            }}
          >
            {productDetails.description}
          </Typography>

          {/* Features */}
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 600, 
              mb: 2,
              fontSize: isMobile ? "1.2rem" : "1.5rem",
              color: "#19485D"
            }}
          >
            Combo Highlights:
          </Typography>
          <Box component="ul" sx={{ 
            ml: 0, 
            mb: 3,
            listStyleType: "none",
            p: 0
          }}>
            {productDetails.features.map((feature, index) => (
              <li key={index} style={{ marginBottom: "8px" }}>
                <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', color: "#5a6e7a" }}>
                  <span style={{ 
                    display: 'inline-block',
                    width: '6px',
                    height: '6px',
                    backgroundColor: "#70CB97",
                    borderRadius: '50%',
                    marginRight: '8px'
                  }}></span>
                  {feature}
                </Typography>
              </li>
            ))}
          </Box>

          {/* Included Items */}
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 600, 
              mb: 2,
              fontSize: isMobile ? "1.2rem" : "1.5rem",
              color: "#19485D"
            }}
          >
            What's Included:
          </Typography>
          <Grid container spacing={2} sx={{ mb: 3 }}>
            {productDetails.includedItems.map((item, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <Paper sx={{ 
                  p: 1.5,
                  borderRadius: "12px",
                  height: "100%",
                  border: `1px solid ${index === 0 ? '#70CB97' : '#e0e7ed'}`,
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    boxShadow: "0px 4px 12px rgba(112, 203, 151, 0.2)",
                    transform: "translateY(-2px)"
                  }
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    {index === 0 && <Description sx={{ color: "#70CB97", mr: 1 }} />}
                    {index === 1 && <Create sx={{ color: "#70CB97", mr: 1 }} />}
                    {index === 2 && <VpnKey sx={{ color: "#70CB97", mr: 1 }} />}
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: "#19485D" }}>
                      {item.name}
                    </Typography>
                  </Box>
                  <img 
                    src={getCdnImage(item.image, { width: 120, height: 100 })} 
                    alt={item.name} 
                    width="120"
                    height="100"
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "100px",
                      objectFit: "contain",
                      marginBottom: "8px",
                      borderRadius: "8px"
                    }} 
                  />
                  <Typography variant="body2" sx={{ color: '#5a6e7a', fontSize: '0.8rem' }}>
                    Value: ₹{item.price}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>

          <Button
            variant="contained"
            startIcon={<AddShoppingCart />}
            sx={{
              background: "#70CB97",
              color: "white",
              fontWeight: 700,
              fontSize: isMobile ? "0.9rem" : "1rem",
              padding: "12px 28px",
              borderRadius: "40px",
              textTransform: "none",
              boxShadow: "0px 4px 12px rgba(112, 203, 151, 0.3)",
              "&:hover": { 
                background: "#5cb67f",
                transform: "translateY(-2px)",
                boxShadow: "0px 6px 16px rgba(112, 203, 151, 0.4)"
              },
              width: { xs: "100%", md: "auto" },
              transition: 'all 0.2s ease',
              mt: 1
            }}
            onClick={handleAddToCart}
          >
            Add Leather Combo to Cart
          </Button>

          <Box sx={{ mt: 2 }}>
            <Typography variant="body2" sx={{ color: "#70CB97", fontWeight: '500' }}>
              ✓ Save ₹{productDetails.originalPrice - productDetails.price} compared to buying items separately
            </Typography>
            <Typography variant="body2" sx={{ color: "#5a6e7a", fontStyle: 'italic', mt: 0.5 }}>
              Available in black, brown, and navy blue
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="✓ Classic Leather Combo added to cart!"
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        action={
          <IconButton size="small" color="inherit" onClick={handleCloseSnackbar}>
            <Close fontSize="small" />
          </IconButton>
        }
        sx={{
          "& .MuiSnackbarContent-root": {
            backgroundColor: "#19485D",
            borderRadius: "40px",
            fontWeight: 500
          }
        }}
      />
    </Container>
  );
};

export default ClassicLeatherCombo;