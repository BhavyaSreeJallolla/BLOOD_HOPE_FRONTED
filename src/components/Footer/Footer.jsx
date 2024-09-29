import React from 'react';
import './Footer.module.css'; // Optional CSS Module

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>&copy; 2024 Blood Hope. All rights reserved.</p>
        <p>
          Follow us on:
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"> Facebook</a> |
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"> Twitter</a> |
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"> Instagram</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
