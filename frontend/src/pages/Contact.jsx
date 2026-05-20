import React, { useState } from "react";
import { Box, TextField, Button, Typography, Alert, Paper, CircularProgress } from "@mui/material";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaComments, FaClock } from "react-icons/fa";
import "../styles/Contact.css";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const API_URL = process.env.REACT_APP_API_URL || "https://printfrall.onrender.com";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSuccessMessage("");
    setErrorMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!form.name || !form.email || !form.message) {
      setErrorMessage("Please fill in all fields before submitting.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }
  
    setIsLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await fetch(`${API_URL}/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      
      const data = await response.json();
  
      if (response.ok && data.success) {
        setSuccessMessage(data.message);
        setForm({ name: "", email: "", message: "" });
      } else {
        setErrorMessage(data.error || "Failed to send the message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Network error. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setSuccessMessage("");
        setErrorMessage("");
      }, 6000);
    }
  };

  return (
    <Box className="contact-page-wrapper">
      <Paper elevation={0} className="contact-premium-card">
        
        {/* LEFT COLUMN: Brand Information Hub */}
        <Box className="contact-info-panel">
          <Box>
            <Typography variant="h4" className="panel-title">Let's Connect</Typography>
            <Typography variant="body2" className="panel-subtitle">
              Have questions about corporate orders, custom kits, or bulk pricing? Drop us a line.
            </Typography>
          </Box>

          <Box className="panel-details-list">
            <Box className="panel-info-item">
              <FaMapMarkerAlt className="panel-info-icon" />
              <Typography variant="body2">
                <strong>Our Address:</strong><br />
                F-17 Mohan Garden, Pipal Wala Rd,<br /> Uttam Nagar, New Delhi, India
              </Typography>
            </Box>

            <Box className="panel-info-item">
              <FaPhoneAlt className="panel-info-icon" />
              <a href="tel:+919319042075" aria-label="Call us at 9319042075">+91 9319042075</a>
            </Box>

            <Box className="panel-info-item">
              <FaEnvelope className="panel-info-icon" />
              <a href="mailto:printfrall@gmail.com" aria-label="Email us at printfrall@gmail.com">printfrall@gmail.com</a>
            </Box>
          </Box>

          {/* Designer Trust Alert Block Box */}
          <Box className="designer-trust-badge">
            <Box className="trust-badge-header">
              <FaComments className="trust-badge-icon" />
              <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>Need designer help?</Typography>
            </Box>
            <Typography variant="body2" className="trust-badge-text">
              Connect directly with our creative team to format logos or map custom corporate layouts perfectly.
            </Typography>
            <Box className="trust-badge-footer">
              <FaClock className="trust-clock-icon" />
              <Typography variant="caption">Responses within 2-3 hours</Typography>
            </Box>
          </Box>
        </Box>

        {/* RIGHT COLUMN: Functional Interactive Form */}
        <Box className="contact-form-panel">
          <Typography variant="h5" className="form-panel-title">Send a Message</Typography>
          
          {successMessage && (
            <Alert severity="success" sx={{ mb: 2, borderRadius: "8px" }}>
              {successMessage}
            </Alert>
          )}
          
          {errorMessage && (
            <Alert severity="error" sx={{ mb: 2, borderRadius: "8px" }}>
              {errorMessage}
            </Alert>
          )}

          <Box aria-label="Contact form" component="form" onSubmit={handleSubmit} className="premium-contact-form">
            <TextField 
              label="Your Name *" 
              name="name" 
              variant="outlined" 
              value={form.name} 
              onChange={handleChange}
              disabled={isLoading}
              fullWidth
              sx={{ "& .MuiOutlinedInput-root": { borderRadius: "8px" } }}
            />
            <TextField 
              label="Your Email *" 
              name="email" 
              variant="outlined" 
              type="email" 
              value={form.email} 
              onChange={handleChange}
              disabled={isLoading}
              fullWidth
              sx={{ "& .MuiOutlinedInput-root": { borderRadius: "8px" } }}
            />
            <TextField 
              label="Your Message or Bulk Request Details *" 
              name="message" 
              variant="outlined" 
              multiline 
              rows={4} 
              value={form.message} 
              onChange={handleChange}
              disabled={isLoading}
              fullWidth
              sx={{ "& .MuiOutlinedInput-root": { borderRadius: "8px" } }}
            />
            
            <Button 
              type="submit" 
              variant="contained" 
              className="premium-submit-button"
              disabled={isLoading}
            >
              {isLoading ? <CircularProgress size={24} color="inherit" /> : "Send Message"}
            </Button>
          </Box>
        </Box>

      </Paper>
    </Box>
  );
};

export default Contact;