import React, { useState } from "react";
import { Box, TextField, Button, Typography, Alert, Paper } from "@mui/material";
import "../styles/Contact.css";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!form.name || !form.email || !form.message) {
      setSuccessMessage("Please fill in all fields before submitting.");
      return;
    }
  
    try {
      const response = await fetch("https://printfrall.onrender.com/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
  
      if (response.ok) {
        setSuccessMessage("Your message has been sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setSuccessMessage("Failed to send the message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setSuccessMessage("An error occurred. Please try again.");
    }
  
    setTimeout(() => setSuccessMessage(""), 5000);
  };
  return (
    <Box className="contact-page">
      <Paper elevation={3} className="contact-box">
        <Typography variant="h4" className="contact-title">Get in Touch</Typography>
        
        <Box className="contact-details">
          <Typography variant="body1"><strong>📍 Address:</strong> F-17 Mohan Garden, Pipal Wala Rd,<br/> Uttam Nagar, New Delhi, India</Typography>
          {/* <Typography variant="body1"><strong>📞 Phone:</strong> +91 9319042075</Typography>
          <Typography variant="body1"><strong>📧 Email:</strong> printfusionindia@gmail.com</Typography> */}
          <Box>
                      <a href="tel:+919319042075" className="contact-pm"><FaPhoneAlt /> +91 9319042075</a>
                    </Box>
                    <Box>
                      <a className="contact-pm" href="
                      mailto:printfusionindia@gmail.com"><FaEnvelope /> printfusionindia@gmail.com</a>
                    </Box>
        </Box>

        {successMessage && <Alert severity="success" className="contact-alert">{successMessage}</Alert>}

        <Box component="form" onSubmit={handleSubmit} className="contact-form">
          <TextField label="Your Name" name="name" variant="outlined" required value={form.name} onChange={handleChange} />
          <TextField label="Your Email" name="email" variant="outlined" required type="email" value={form.email} onChange={handleChange} />
          <TextField label="Your Message" name="message" variant="outlined" required multiline rows={4} value={form.message} onChange={handleChange} />
          <Button type="submit" variant="contained" className="contact-button">
            Send Message
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Contact;
