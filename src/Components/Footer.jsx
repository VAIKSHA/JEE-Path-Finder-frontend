import React from 'react';
import '../LocalCSS/footer.css';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4 text-center">
      <p>© 2025 JEE Path Finder. All rights reserved.</p>
      <div className="navbar-links">
        <a href="/home" className="nav-link">Home</a>
        <a href="/about" className="nav-link">About</a>
        <a href="/services" className="nav-link">Services</a>
        <a href="/contact" className="nav-link">Contact</a>
      </div>
      <div className="social-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <Facebook style={{ color: 'white', margin: '0 10px' }} />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <Twitter style={{ color: 'white', margin: '0 10px' }} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <Instagram style={{ color: 'white', margin: '0 10px' }} />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <LinkedIn style={{ color: 'white', margin: '0 10px' }} />
        </a>
      </div>
    </footer>
  );
}