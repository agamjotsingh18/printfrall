require('dotenv').config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 5000;

// Configure Transporter (Do not change this)
const transporter = nodemailer.createTransport({
  host: 'smtp-relay.brevo.com',
  port: 465, // Use 465
  secure: true, // true for 465
  connectionTimeout: 10000, 
  auth: {
    user: process.env.BREVO_USER,
    pass: process.env.BREVO_KEY 
  }
});

app.use(cors({
  origin: ['http://localhost:3000', 'https://printfrall.vercel.app', 'https://printfrall.com', 'https://www.printfrall.com'],
  credentials: true
}));
app.use(express.json());

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;
  
  try {
    await transporter.sendMail({
      from: '"PrintfrAll" <support@printfrall.com>',
      to: 'support@printfrall.com',
      replyTo: email,
      subject: `New Message from ${name}`,
      text: message
    });
    res.status(200).json({ success: true, message: "Message sent!" });
  } catch (error) {
    console.error("Email Error:", error);
    res.status(500).json({ success: false, error: "Failed to send email." });
  }
});

app.post("/subscribe", async (req, res) => {
  const { email } = req.body;
  try {
    await transporter.sendMail({
      from: '"PrintfrAll" <support@printfrall.com>',
      to: 'support@printfrall.com',
      subject: "New Subscription",
      text: `New subscriber: ${email}`
    });
    res.status(200).json({ success: true, message: "Subscribed!" });
  } catch (error) {
    console.error("Subscribe Error:", error);
    res.status(500).json({ success: false, error: "Failed to subscribe." });
  }
});

app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));