require('dotenv').config();
const express = require("express");
const cors = require("cors");
const brevo = require('@getbrevo/brevo');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'https://printfrall.vercel.app', 'https://printfrall.com', 'https://www.printfrall.com'],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Content-Type'],
  credentials: true
}));
app.use(express.json());

// API Configuration
const apiInstance = new brevo.TransactionalEmailsApi();
const apiKey = apiInstance.authentications['apiKey'];
apiKey.apiKey = process.env.BREVO_KEY; 

// Health Check
app.get("/health", (req, res) => {
  res.status(200).json({ status: "healthy" });
});

// Send Email Endpoint
app.post("/send-email", async (req, res) => {
  console.log("🚀 Received request at /send-email");
  const { name, email, message } = req.body;
  
  const sendSmtpEmail = new brevo.SendSmtpEmail();
  sendSmtpEmail.subject = `New Message from ${name}`;
  sendSmtpEmail.sender = { "name": "PrintfrAll", "email": "support@printfrall.com" };
  sendSmtpEmail.to = [{ "email": "support@printfrall.com" }];
  sendSmtpEmail.htmlContent = `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p>${message}</p>`;
  sendSmtpEmail.replyTo = { "email": email };

  try {
    await apiInstance.sendTransacEmail(sendSmtpEmail);
    res.status(200).json({ success: true, message: "Message sent!" });
  } catch (error) {
    console.error("API Error:", error.body || error);
    res.status(500).json({ success: false, error: "Failed to send email." });
  }
});

// Subscribe Endpoint
app.post("/subscribe", async (req, res) => {
  const { email } = req.body;
  
  const sendSmtpEmail = new brevo.SendSmtpEmail();
  sendSmtpEmail.subject = "New Newsletter Subscription";
  sendSmtpEmail.sender = { "name": "PrintfrAll", "email": "support@printfrall.com" };
  sendSmtpEmail.to = [{ "email": "support@printfrall.com" }];
  sendSmtpEmail.htmlContent = `<p>New subscriber: ${email}</p>`;

  try {
    await apiInstance.sendTransacEmail(sendSmtpEmail);
    res.status(200).json({ success: true, message: "Subscribed successfully!" });
  } catch (error) {
    console.error("Subscribe API Error:", error.body || error);
    res.status(500).json({ success: false, error: "Failed to subscribe." });
  }
});

app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));