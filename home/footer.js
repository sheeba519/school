import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <h4>About Us</h4>
          <p>
            Our School is committed to providing high-quality student care and
            exceptional customer service.
          </p>
          <ul>
            <li>
              <Link to="/">Learn More</Link>
            </li>
            <li>
              <Link to="/">Our Mission</Link>
            </li>
            <li>
              <Link to="/">Our Values</Link>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contact Us</h4>
          <p>Get in touch with us for any questions or concerns.</p>
          <ul>
            <li>
              <i className="fas fa-phone"></i> (555) 555-5555
            </li>
            <li>
              <i className="fas fa-envelope"></i>{' '}
              <a href="mailto:info@hospital.com">info@school.com</a>
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i> 423 City St, TVM, INDIA 12345
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Social Media</h4>
          <ul>
            <li>
              <a href="https://www.facebook.com/school" target="_blank" rel="noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/school" target="_blank" rel="noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/school" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/school" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Hospital Management System. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;