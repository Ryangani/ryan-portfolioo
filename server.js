const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config();

// Set development environment for debugging
process.env.NODE_ENV = 'development';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));

// Projects endpoint
app.get('/api/projects', (req, res) => {
  res.json([
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'A responsive personal portfolio website built with React, Node.js, and Express. Features modern design with animated particle background, smooth scrolling navigation, mobile-responsive layout, and contact form integration.',
      images: ['home.jpg', 'about.jpg', 'skills.jpg', 'project.jpg', 'contact.jpg'],
      tech: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'JavaScript'],
      github: 'https://github.com/yourusername/portfolio-website'
    },
    {
      id: 2,
      title: 'Jay Anne Motorparts (Inventory Management System)',
      description: 'A comprehensive web-based inventory management system designed for stock monitoring, product tracking, and transaction management. Built with responsive design and full-stack development capabilities.',
      images: [],
      tech: ['React', 'Node.js', 'Express', 'MySQL', 'Bootstrap'],
      github: 'https://github.com/yourusername/inventory-system'
    }
  ]);
});

// Contact endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      message: 'Please fill in all required fields' 
    });
  }

  try {
    // Create email content
    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
      <hr>
      <p><em>This message was sent from your portfolio website</em></p>
    `;

    // Send email using Node Mailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: 'ryanroferos2@gmail.com',
      subject: `Portfolio Contact: ${name}`,
      html: emailContent
    };

    await transporter.sendMail(mailOptions);
    
    console.log('Email sent successfully:', {
      from: mailOptions.from,
      to: mailOptions.to,
      subject: mailOptions.subject
    });

    res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully!' 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    console.error('Full error details:', {
      message: error.message,
      code: error.code,
      response: error.response,
      stack: error.stack
    });
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send email. Please try again.',
      error: process.env.NODE_ENV === 'development' ? {
        message: error.message,
        code: error.code
      } : undefined
    });
  }
});

// Serve React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
