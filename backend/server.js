require('dotenv').config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'https://printfrall.vercel.app', 'https://printfrall.onrender.com'],
  credentials: true
}));
app.use(express.json());

// Log startup (for debugging on Render)
console.log('=== SERVER STARTING ===');
console.log('PORT:', PORT);
console.log('EMAIL_USER:', process.env.EMAIL_USER ? '✅ Set' : '❌ Missing');
console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? '✅ Set' : '❌ Missing');

// Verify email credentials
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.error('❌ CRITICAL: Email credentials missing!');
}

// Create email transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  // Better timeout handling
  connectionTimeout: 30000,
  greetingTimeout: 30000,
  socketTimeout: 30000,
});

// Verify email connection on startup
transporter.verify((error, success) => {
  if (error) {
    console.error('❌ Email verification FAILED:', error.message);
    console.error('   Please check your Gmail App Password');
  } else {
    console.log('✅ Email server ready to send messages');
  }
});

// Health check endpoint
app.get("/", (req, res) => {
  res.json({
    status: "OK",
    message: "PrintfrAll API is running",
    endpoints: ["POST /send-email", "POST /subscribe", "GET /health"],
    timestamp: new Date().toISOString()
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "healthy",
    uptime: process.uptime(),
    emailConfigured: !!process.env.EMAIL_USER,
    timestamp: new Date().toISOString()
  });
});

// Subscribe endpoint - FIXED
app.post("/subscribe", async (req, res) => {
  console.log('📧 Subscribe request received:', req.body);
  
  const { email } = req.body;
  
  // Validate email
  if (!email) {
    return res.status(400).json({ 
      success: false,
      error: "Email address is required" 
    });
  }
  
  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ 
      success: false,
      error: "Please enter a valid email address" 
    });
  }

  // Check if email credentials exist
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('❌ Email credentials missing');
    return res.status(500).json({ 
      success: false,
      error: "Server configuration error. Please contact support."
    });
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: "📧 New Newsletter Subscription - PrintfrAll",
    text: `New subscriber: ${email}\n\nTime: ${new Date().toISOString()}`,
    html: `
      <h2>New Newsletter Subscription</h2>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
    `
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Subscription email sent:', info.messageId);
    res.status(200).json({ 
      success: true, 
      message: "Subscribed successfully! We'll keep you updated." 
    });
  } catch (error) {
    console.error('❌ Subscription email error:', error.message);
    res.status(500).json({ 
      success: false,
      error: "Failed to subscribe. Please try again later.",
      details: error.message
    });
  }
});

// Send email endpoint - FIXED
app.post("/send-email", async (req, res) => {
  console.log('📧 Send-email request received:', req.body);
  
  const { name, email, message } = req.body;
  
  // Validate input
  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false,
      error: "Please fill in all fields" 
    });
  }
  
  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ 
      success: false,
      error: "Please enter a valid email address" 
    });
  }

  // Check if email credentials exist
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('❌ Email credentials missing');
    return res.status(500).json({ 
      success: false,
      error: "Server configuration error. Please contact support."
    });
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    replyTo: email,
    subject: `📬 New Contact Form Message from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
      Time: ${new Date().toISOString()}
    `,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
      <hr>
      <p><small>Sent at: ${new Date().toLocaleString()}</small></p>
    `
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Contact email sent:', info.messageId);
    res.status(200).json({ 
      success: true, 
      message: "Your message has been sent successfully! We'll get back to you soon." 
    });
  } catch (error) {
    console.error('❌ Send-email error:', error.message);
    res.status(500).json({ 
      success: false,
      error: "Failed to send message. Please try again later.",
      details: error.message
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`📍 API URL: http://localhost:${PORT}`);
  console.log(`📧 Email account: ${process.env.EMAIL_USER || 'NOT SET'}`);
});

// Handle graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  process.exit(0);
});