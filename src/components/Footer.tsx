import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="social-links">
            <a href="https://www.facebook.com/ryanganiiii2k3" target="_blank" rel="noopener noreferrer" className="social-link" title="Facebook">
              <img src="/facebook-logo.png" alt="Facebook" className="social-logo" />
            </a>
            <a href="https://mail.google.com/mail/?view=cm&to=ryanroferos2@gmail.com" target="_blank" rel="noopener noreferrer" className="social-link" title="Gmail">
              <img src="/gmail-logo.png" alt="Gmail" className="social-logo" />
            </a>
            <a href="https://discord.com/users/672410517784231948" target="_blank" rel="noopener noreferrer" className="social-link" title="Chat on Discord">
              <img src="/discord-logo.png" alt="Discord" className="social-logo" />
            </a>
          </div>
          <p style={{ textAlign: 'center' }}>&copy; 2026 Ryan Roferos. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
