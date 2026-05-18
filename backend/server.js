require('dotenv').config();
const express = require("express");
const cors = require("cors");
const sgMail = require('@sendgrid/mail');

const app = express();
const PORT = process.env.PORT || 5000;

// Initialize SendGrid with API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'https://printfrall.vercel.app', 'https://printfrall.onrender.com'],
  credentials: true
}));
app.use(express.json());

// Log startup (for debugging on Render)
console.log('=== SERVER STARTING ===');
console.log('PORT:', PORT);
console.log('SENDGRID_API_KEY:', process.env.SENDGRID_API_KEY ? '✅ Set' : '❌ Missing');
console.log('FROM_EMAIL:', process.env.FROM_EMAIL || 'printfrall@gmail.com');
console.log('TO_EMAIL:', process.env.TO_EMAIL || 'printfrall@gmail.com');

// Verify SendGrid configuration
if (!process.env.SENDGRID_API_KEY) {
  console.error('❌ CRITICAL: SendGrid API key missing!');
}

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
    timestamp: new Date().toISOString()
  });
});

// Subscribe endpoint - Using SendGrid
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

  const msg = {
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
          .footer { font-size: 12px; color: #999; margin-top: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>🎉 New Newsletter Subscription</h2>
          <div class="info">
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
          </div>
          <div class="footer">
            <p>This notification was sent from your PrintfrAll backend.</p>
          </div>
        </div>
      </body>
      </html>
    `
  };

  try {
    await sgMail.send(msg);
    console.log('✅ Subscription email sent successfully to:', toEmail);
    res.status(200).json({ 
      success: true, 
      message: "Subscribed successfully! We'll keep you updated." 
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

// Send email endpoint - Using SendGrid
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

  const msg = {
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
          .footer { font-size: 12px; color: #999; margin-top: 20px; }
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
            <p>This notification was sent from your PrintfrAll backend.</p>
          </div>
        </div>
      </body>
      </html>
    `
  };

  try {
    await sgMail.send(msg);
    console.log('✅ Contact email sent successfully to:', toEmail);
    res.status(200).json({ 
      success: true, 
      message: "Your message has been sent successfully! We'll get back to you soon." 
    });
  } catch (error) {
    console.error('❌ SendGrid email error:', error.response?.body || error.message);
    res.status(500).json({ 
      success: false,
      error: "Failed to send message. Please try again later.",
      details: error.response?.body?.errors?.[0]?.message || error.message
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`📍 API URL: http://localhost:${PORT}`);
  console.log(`📧 SendGrid email configured`);
});

// Handle graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  process.exit(0);
});