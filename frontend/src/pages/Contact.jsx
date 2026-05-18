import React, { useState } from "react";
import { Box, TextField, Button, Typography, Alert, Paper, CircularProgress } from "@mui/material";
import "../styles/Contact.css";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

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
      setTimeout(() => setErrorMessage(""), 5000);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setErrorMessage("Please enter a valid email address.");
      setTimeout(() => setErrorMessage(""), 5000);
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
      }, 5000);
    }
  };

  return (
    <Box className="contact-page">
      <Paper elevation={3} className="contact-box">
        <Typography variant="h4" className="contact-title">Get in Touch</Typography>
        
        <Box className="contact-details">
          <Typography variant="body1">
            <strong>📍 Address:</strong> F-17 Mohan Garden, Pipal Wala Rd,<br/> Uttam Nagar, New Delhi, India
          </Typography>
          <Box>
            <a href="tel:+919319042075" className="contact-pm">
              <FaPhoneAlt /> +91 9319042075
            </a>
          </Box>
          <Box>
            <a className="contact-pm" href="mailto:printfrall@gmail.com">
              <FaEnvelope /> printfrall@gmail.com
            </a>
          </Box>
        </Box>

        {successMessage && (
          <Alert severity="success" className="contact-alert">
            {successMessage}
          </Alert>
        )}
        
        {errorMessage && (
          <Alert severity="error" className="contact-alert">
            {errorMessage}
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit} className="contact-form">
          <TextField 
            label="Your Name" 
            name="name" 
            variant="outlined" 
            required 
            value={form.name} 
            onChange={handleChange}
            disabled={isLoading}
            fullWidth
          />
          <TextField 
            label="Your Email" 
            name="email" 
            variant="outlined" 
            required 
            type="email" 
            value={form.email} 
            onChange={handleChange}
            disabled={isLoading}
            fullWidth
          />
          <TextField 
            label="Your Message" 
            name="message" 
            variant="outlined" 
            required 
            multiline 
            rows={4} 
            value={form.message} 
            onChange={handleChange}
            disabled={isLoading}
            fullWidth
          />
          <Button 
            type="submit" 
            variant="contained" 
            className="contact-button"
            disabled={isLoading}
          >
            {isLoading ? <CircularProgress size={24} color="inherit" /> : "Send Message"}
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Contact;