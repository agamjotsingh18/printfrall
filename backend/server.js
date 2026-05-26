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

// Brevo API Configuration - Using the Transactional Emails API directly
const brevoApiKey = process.env.BREVO_KEY;
const brevoBaseUrl = 'https://api.brevo.com/v3';

// Helper function to send emails via Brevo
async function sendBrevoEmail(emailData) {
  try {
    const response = await fetch(`${brevoBaseUrl}/smtp/email`, {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': brevoApiKey,
        'content-type': 'application/json'
      },
      body: JSON.stringify(emailData)
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to send email');
    }

    return await response.json();
  } catch (error) {
    console.error('Brevo API Error:', error);
    throw error;
  }
}

// Health Check
app.get("/health", (req, res) => {
  res.status(200).json({ status: "healthy" });
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

  // Email to admin about new contact form submission
  const adminEmailData = {
    sender: { 
      name: "PrintfrAll Contact Form", 
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
          <div class="footer">
            <p>Reply directly to: <a href="mailto:${email}">${email}</a></p>
          </div>
        </div>
      </body>
      </html>
    `
  };

  // Auto-reply to user
  const autoReplyData = {
    sender: { 
      name: "PrintfrAll Team", 
      email: "support@printfrall.com" 
    },
    to: [{ 
      email: email, 
      name: name 
    }],
    subject: "Thank you for contacting PrintfrAll! 📬",
    htmlContent: `
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
              <a href="https://printfrall.com" class="button">Visit Our Website</a>
            </p>
            <p>Best regards,<br><strong>PrintfrAll Team</strong></p>
          </div>
        </div>
      </body>
      </html>
    `
  };

  try {
    // Send notification to admin
    await sendBrevoEmail(adminEmailData);
    console.log('✅ Admin notification sent');
    
    // Send auto-reply to user
    try {
      await sendBrevoEmail(autoReplyData);
      console.log('✅ Auto-reply sent to user');
    } catch (autoReplyError) {
      console.warn('⚠️ Could not send auto-reply:', autoReplyError.message);
      // Don't fail the whole request if auto-reply fails
    }
    
    res.status(200).json({ 
      success: true, 
      message: "Your message has been sent successfully! We'll get back to you soon." 
    });
  } catch (error) {
    console.error('❌ Email sending failed:', error);
    res.status(500).json({ 
      success: false, 
      error: "Failed to send message. Please try again later." 
    });
  }
});

// Subscribe Endpoint
app.post("/subscribe", async (req, res) => {
  console.log("📧 Received subscription request");
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

  // Admin notification for new subscriber
  const adminEmailData = {
    sender: { 
      name: "PrintfrAll Newsletter", 
      email: "support@printfrall.com" 
    },
    to: [{ 
      email: "support@printfrall.com", 
      name: "PrintfrAll Support" 
    }],
    subject: "📧 New Newsletter Subscription - PrintfrAll",
    htmlContent: `
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

  // Welcome email to new subscriber
  const welcomeEmailData = {
    sender: { 
      name: "PrintfrAll Team", 
      email: "support@printfrall.com" 
    },
    to: [{ 
      email: email 
    }],
    subject: "Welcome to PrintfrAll Newsletter! 🎉",
    htmlContent: `
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
              <a href="https://printfrall.com" class="button">Visit Our Website</a>
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
    // Send notification to admin
    await sendBrevoEmail(adminEmailData);
    console.log('✅ Admin notified of new subscriber');
    
    // Send welcome email to subscriber
    try {
      await sendBrevoEmail(welcomeEmailData);
      console.log('✅ Welcome email sent to subscriber');
    } catch (welcomeError) {
      console.warn('⚠️ Could not send welcome email:', welcomeError.message);
      // Don't fail the subscription if welcome email fails
    }
    
    res.status(200).json({ 
      success: true, 
      message: "Successfully subscribed! Welcome to our newsletter." 
    });
  } catch (error) {
    console.error('❌ Subscription failed:', error);
    res.status(500).json({ 
      success: false, 
      error: "Failed to subscribe. Please try again later." 
    });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`📧 Using Brevo API for email delivery`);
});