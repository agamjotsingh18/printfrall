require('dotenv').config();
const express = require("express");
const cors = require("cors");
const sgMail = require('@sendgrid/mail');

const app = express();
const PORT = process.env.PORT || 5000;

// In-memory storage for subscribed emails (replace with database in production)
const subscribedEmails = new Set();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'https://printfrall.vercel.app', 'https://printfrall.onrender.com'],
  credentials: true
}));
app.use(express.json());

// Health check endpoint
app.get("/", (req, res) => {
  res.json({
    status: "OK",
    message: "PrintfrAll API is running with SendGrid",
    endpoints: ["POST /send-email", "POST /subscribe", "GET /health"],
    timestamp: new Date().toISOString()
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "healthy",
    uptime: process.uptime(),
    sendgridConfigured: !!process.env.SENDGRID_API_KEY,
    totalSubscribers: subscribedEmails.size,
    timestamp: new Date().toISOString()
  });
});

// Subscribe endpoint with duplicate prevention
app.post("/subscribe", async (req, res) => {  
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

  // Check for duplicate email
  if (subscribedEmails.has(email)) {
    return res.status(400).json({ 
      success: false,
      error: "This email is already subscribed to our newsletter!" 
    });
  }

  // Check if SendGrid API key exists
  if (!process.env.SENDGRID_API_KEY) {
    console.error('❌ SendGrid API key missing');
    return res.status(500).json({ 
      success: false,
      error: "Server configuration error. Please contact support."
    });
  }

  const fromEmail = process.env.FROM_EMAIL || 'printfrall@gmail.com';
  const toEmail = process.env.TO_EMAIL || 'printfrall@gmail.com';

  // Email to admin about new subscriber
  const adminMsg = {
    to: toEmail,
    from: fromEmail,
    subject: "📧 New Newsletter Subscription - PrintfrAll",
    text: `New subscriber: ${email}\n\nTime: ${new Date().toISOString()}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { padding: 20px; border: 1px solid #ddd; border-radius: 5px; max-width: 500px; }
          h2 { color: #70CB97; }
          .info { background: #f5f5f5; padding: 10px; margin: 10px 0; border-radius: 5px; }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>🎉 New Newsletter Subscription</h2>
          <div class="info">
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
          </div>
        </div>
      </body>
      </html>
    `
  };

  // Welcome email to subscriber
  const welcomeMsg = {
    to: email,
    from: fromEmail,
    subject: "Welcome to PrintfrAll Newsletter! 🎉",
    text: `Thank you for subscribing to PrintfrAll newsletter!

You'll now receive updates about our latest printing services, special offers, and design tips.

Best regards,
PrintfrAll Team

P.S. Check out our website for amazing printing deals!`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { padding: 20px; max-width: 500px; margin: 0 auto; }
          .header { background: #70CB97; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
          .content { padding: 20px; border: 1px solid #ddd; border-top: none; border-radius: 0 0 5px 5px; }
          .button { background: #70CB97; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block; }
          .footer { margin-top: 20px; font-size: 12px; color: #999; text-align: center; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>Welcome to PrintfrAll! 🎉</h2>
          </div>
          <div class="content">
            <p>Dear Subscriber,</p>
            <p>Thank you for subscribing to PrintfrAll newsletter!</p>
            <p>You'll now receive updates about:</p>
            <ul>
              <li>✨ Latest printing services</li>
              <li>🎯 Special offers & discounts</li>
              <li>💡 Design tips & tricks</li>
              <li>🚀 New product launches</li>
            </ul>
            <p style="text-align: center;">
              <a href="https://printfrall.vercel.app" class="button">Visit Our Website</a>
            </p>
            <p>Best regards,<br><strong>PrintfrAll Team</strong></p>
          </div>
          <div class="footer">
            <p>You received this email because you subscribed to our newsletter.</p>
          </div>
        </div>
      </body>
      </html>
    `
  };

  try {
    // Send email to admin
    await sgMail.send(adminMsg);
    
    // Send welcome email to subscriber
    try {
      await sgMail.send(welcomeMsg);
    } catch (welcomeError) {
      console.warn('⚠️ Could not send welcome email:', welcomeError.message);
      // Don't fail the subscription if welcome email fails
    }
    
    // Store email in memory (replace with database in production)
    subscribedEmails.add(email);
    
    res.status(200).json({ 
      success: true, 
      message: "Successfully subscribed! Welcome to our newsletter." 
    });
  } catch (error) {
    console.error('❌ SendGrid subscription error:', error.response?.body || error.message);
    res.status(500).json({ 
      success: false,
      error: "Failed to subscribe. Please try again later.",
      details: error.response?.body?.errors?.[0]?.message || error.message
    });
  }
});

// Send email endpoint
app.post("/send-email", async (req, res) => {
  
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

  // Check if SendGrid API key exists
  if (!process.env.SENDGRID_API_KEY) {
    console.error('❌ SendGrid API key missing');
    return res.status(500).json({ 
      success: false,
      error: "Server configuration error. Please contact support."
    });
  }

  const fromEmail = process.env.FROM_EMAIL || 'printfrall@gmail.com';
  const toEmail = process.env.TO_EMAIL || 'printfrall@gmail.com';

  // Email to admin
  const adminMsg = {
    to: toEmail,
    from: fromEmail,
    replyTo: email,
    subject: `📬 New Contact Form Message from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
      Time: ${new Date().toISOString()}
    `,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { padding: 20px; border: 1px solid #ddd; border-radius: 5px; max-width: 500px; }
          h2 { color: #70CB97; }
          .info { background: #f5f5f5; padding: 10px; margin: 10px 0; border-radius: 5px; }
          .message { background: #fafafa; padding: 15px; margin: 10px 0; border-left: 4px solid #70CB97; }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>📬 New Contact Form Submission</h2>
          <div class="info">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
          </div>
          <div class="message">
            <strong>Message:</strong>
            <p>${message.replace(/\n/g, '<br>')}</p>
          </div>
          <div class="footer">
            <p>Reply directly to: <a href="mailto:${email}">${email}</a></p>
          </div>
        </div>
      </body>
      </html>
    `
  };

  // Auto-reply to user
  const autoReplyMsg = {
    to: email,
    from: fromEmail,
    subject: "Thank you for contacting PrintfrAll! 📬",
    text: `Dear ${name},

Thank you for reaching out to PrintfrAll!

We have received your message and will get back to you within 24-48 hours.

Your message: "${message.substring(0, 100)}${message.length > 100 ? '...' : ''}"

Best regards,
PrintfrAll Team

Visit our website: https://printfrall.vercel.app`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { padding: 20px; max-width: 500px; margin: 0 auto; }
          .header { background: #70CB97; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
          .content { padding: 20px; border: 1px solid #ddd; border-top: none; border-radius: 0 0 5px 5px; }
          .message-box { background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 15px 0; }
          .button { background: #70CB97; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>Thank You for Contacting Us! 📬</h2>
          </div>
          <div class="content">
            <p>Dear ${name},</p>
            <p>Thank you for reaching out to PrintfrAll!</p>
            <p>We have received your message and will get back to you within <strong>24-48 hours</strong>.</p>
            <div class="message-box">
              <strong>Your message:</strong>
              <p>${message.replace(/\n/g, '<br>')}</p>
            </div>
            <p style="text-align: center;">
              <a href="https://printfrall.vercel.app" class="button">Visit Our Website</a>
            </p>
            <p>Best regards,<br><strong>PrintfrAll Team</strong></p>
          </div>
        </div>
      </body>
      </html>
    `
  };

  try {
    // Send email to admin
    await sgMail.send(adminMsg);
    
    try {
      await sgMail.send(autoReplyMsg);
    } catch (autoReplyError) {
      console.warn('⚠️ Could not send auto-reply:', autoReplyError.message);
    }
    
    res.status(200).json({ 
      success: true, 
      message: "Your message has been sent successfully! We'll get back to you soon." 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      error: "Failed to send message. Please try again later.",
      details: error.response?.body?.errors?.[0]?.message || error.message
    });
  }
});

// Get all subscribers (protected endpoint - add auth in production)
app.get("/subscribers", (req, res) => {
  res.json({
    total: subscribedEmails.size,
    emails: Array.from(subscribedEmails)
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});

// Handle graceful shutdown
process.on('SIGTERM', () => {
  process.exit(0);
});