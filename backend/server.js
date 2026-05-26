require('dotenv').config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'https://printfrall.vercel.app', 'https://printfrall.com', 'https://www.printfrall.com'],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));
app.use(express.json());

// Brevo API Configuration - Fix the API key format
const brevoApiKey = process.env.BREVO_KEY;
const brevoBaseUrl = 'https://api.brevo.com/v3';

console.log('🔑 Brevo API Key loaded:', brevoApiKey ? 'Yes (starts with ' + brevoApiKey.substring(0, 10) + '...)' : 'NO - MISSING!');

// Helper function to send emails via Brevo using the correct header
async function sendBrevoEmail(emailData) {
  console.log('📤 Sending email...');
  
  try {
    const response = await fetch(`${brevoBaseUrl}/smtp/email`, {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': brevoApiKey,  // This is correct for Brevo v3 API
        'content-type': 'application/json'
      },
      body: JSON.stringify(emailData)
    });

    // Get response as text first to handle non-JSON responses
    const responseText = await response.text();
    console.log('📥 Response status:', response.status);
    console.log('📥 Response body:', responseText);

    let responseData;
    try {
      responseData = JSON.parse(responseText);
    } catch (e) {
      responseData = { message: responseText };
    }

    if (!response.ok) {
      throw new Error(`Brevo API Error (${response.status}): ${JSON.stringify(responseData)}`);
    }

    return responseData;
  } catch (error) {
    console.error('❌ Brevo API Error:', error.message);
    throw error;
  }
}

// Health Check
app.get("/health", (req, res) => {
  res.status(200).json({ 
    status: "healthy",
    brevoKeyConfigured: !!brevoApiKey,
    brevoKeyPreview: brevoApiKey ? brevoApiKey.substring(0, 10) + '...' : 'not set'
  });
});

// Test Brevo API connection
app.get("/test-brevo", async (req, res) => {
  console.log('🔍 Testing Brevo API connection...');
  
  if (!brevoApiKey) {
    return res.status(500).json({
      success: false,
      error: "Brevo API key is not configured"
    });
  }

  try {
    const response = await fetch('https://api.brevo.com/v3/account', {
      method: 'GET',
      headers: {
        'accept': 'application/json',
        'api-key': brevoApiKey
      }
    });

    const responseText = await response.text();
    console.log('🔍 Test response:', response.status, responseText);

    let data;
    try {
      data = JSON.parse(responseText);
    } catch (e) {
      data = { raw: responseText };
    }

    if (response.ok) {
      res.json({
        success: true,
        message: "Brevo API connection successful",
        account: data
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Brevo API connection failed",
        error: data
      });
    }
  } catch (error) {
    console.error('❌ Test failed:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Send Email Endpoint
app.post("/send-email", async (req, res) => {
  console.log("🚀 Received request at /send-email");
  
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

  if (!brevoApiKey) {
    console.error('❌ Brevo API key missing');
    return res.status(500).json({ 
      success: false, 
      error: "Server configuration error. Please contact support." 
    });
  }

  const emailData = {
    sender: { 
      name: "PrintfrAll Contact", 
      email: "support@printfrall.com" 
    },
    to: [{ 
      email: "support@printfrall.com", 
      name: "PrintfrAll Support" 
    }],
    replyTo: { 
      email: email, 
      name: name 
    },
    subject: `📬 New Contact Form Message from ${name}`,
    htmlContent: `
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
          <p>Reply to: <a href="mailto:${email}">${email}</a></p>
        </div>
      </body>
      </html>
    `
  };

  try {
    console.log('🔄 Sending contact form email...');
    const result = await sendBrevoEmail(emailData);
    console.log('✅ Email sent successfully:', result.messageId);
    
    res.status(200).json({ 
      success: true, 
      message: "Your message has been sent successfully! We'll get back to you soon.",
      messageId: result.messageId
    });
  } catch (error) {
    console.error('❌ Failed to send email:', error.message);
    res.status(500).json({ 
      success: false, 
      error: "Failed to send message. Please try again later.",
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Subscribe Endpoint
app.post("/subscribe", async (req, res) => {
  console.log("📧 Received subscription request");
  const { email } = req.body;
  
  if (!email) {
    return res.status(400).json({ 
      success: false, 
      error: "Email address is required" 
    });
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ 
      success: false, 
      error: "Please enter a valid email address" 
    });
  }

  if (!brevoApiKey) {
    return res.status(500).json({ 
      success: false, 
      error: "Server configuration error. Please contact support." 
    });
  }

  const emailData = {
    sender: { 
      name: "PrintfrAll Newsletter", 
      email: "support@printfrall.com" 
    },
    to: [{ 
      email: "support@printfrall.com", 
      name: "PrintfrAll Support" 
    }],
    subject: "📧 New Newsletter Subscription",
    htmlContent: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { padding: 20px; max-width: 500px; }
          h2 { color: #70CB97; }
          .info { background: #f5f5f5; padding: 10px; border-radius: 5px; }
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

  try {
    console.log('🔄 Sending subscription email...');
    const result = await sendBrevoEmail(emailData);
    console.log('✅ Subscription email sent:', result.messageId);
    
    res.status(200).json({ 
      success: true, 
      message: "Successfully subscribed! Welcome to our newsletter.",
      messageId: result.messageId
    });
  } catch (error) {
    console.error('❌ Subscription failed:', error.message);
    res.status(500).json({ 
      success: false, 
      error: "Failed to subscribe. Please try again later.",
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`📧 Brevo API Key: ${brevoApiKey ? 'Configured (starts with ' + brevoApiKey.substring(0, 15) + '...)' : 'MISSING!'}`);
}); 