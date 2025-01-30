import React from 'react';
import '../LocalCSS/footer.css';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4 text-center">
      <p>© 2025 JEE Path Finder. All rights reserved.</p>
      <div className="navbar-links">
        <a href="/" className="nav-link">Home</a>
        <a href="/about" className="nav-link">About</a>
        <a href="/book-slot" className="nav-link">Services</a>
        <a href="/contact" className="nav-link">Contact</a>
      </div>
      <div className="social-icons">
        <a href="https://www.youtube.com/@vishal.sharma40/" target="_blank" rel="noopener noreferrer">
          <YouTubeIcon style={{ color: 'white', margin: '0 10px' }} />
        </a>
        <a href="https://www.twitter.com/@Vishal6143214" target="_blank" rel="noopener noreferrer">
          <Twitter style={{ color: 'white', margin: '0 10px' }} />
        </a>
        <a href="https://www.instagram.com/vishal.sharma40/" target="_blank" rel="noopener noreferrer">
          <Instagram style={{ color: 'white', margin: '0 10px' }} />
        </a>
        <a href="https://www.linkedin.com/in/vishalsharma40/" target="_blank" rel="noopener noreferrer">
          <LinkedIn style={{ color: 'white', margin: '0 10px' }} />
        </a>
      </div>
    </footer>
  );
}