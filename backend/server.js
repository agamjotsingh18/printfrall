require('dotenv').config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer"); 

const app = express();
const PORT = process.env.PORT || 5000;
const subscribedEmails = new Set();

// Configure Brevo SMTP
const transporter = nodemailer.createTransport({
  host: 'smtp-relay.brevo.com',
  port: 587,
  secure: false, // true for 465, false for 587
  auth: {
    user: process.env.BREVO_USER,
    pass: process.env.BREVO_KEY
  }
});

app.use(cors({
  origin: ['http://localhost:3000', 'https://printfrall.vercel.app', 'https://printfrall.com', 'https://www.printfrall.com'],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));
app.options('*', cors());
app.use(express.json());

// Helper to send emails via Nodemailer
const sendMail = async (options) => {
  return await transporter.sendMail({
    ...options,
    from: process.env.FROM_EMAIL || 'support@printfrall.com'
  });
};

app.post("/subscribe", async (req, res) => {
  const { email } = req.body;
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ success: false, error: "Invalid email" });
  }

  try {
    await sendMail({
      to: process.env.TO_EMAIL,
      subject: "📧 New Newsletter Subscription",
      html: `<p>New subscriber: ${email}</p>`
    });
    
    subscribedEmails.add(email);
    res.status(200).json({ success: true, message: "Successfully subscribed!" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.post("/send-email", async (req, res) => {
  console.log("🚀 Received request at /send-email");
  const { name, email, message } = req.body;

  try {
    await sendMail({
      to: process.env.TO_EMAIL,
      replyTo: email,
      subject: `📬 New Contact Form Message from ${name}`,
      html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`
    });
    res.status(200).json({ success: true, message: "Message sent!" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));