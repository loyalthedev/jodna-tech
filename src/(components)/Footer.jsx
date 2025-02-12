import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="inner-footer">
        <div className="section-1">
          <div className="logo-wrapper">
            <img src="/assets/logo.svg" alt="Logo" />
            <h1 className="">Jodna Technologies</h1>
          </div>
          <p>
            Join our newsletter to stay up to date on features and releases.
          </p>
          <form action="" className="form">
            <input
              type="text"
              className="form-input"
              placeholder="Enter your email"
            />
            <button className="form-btn">Subscribe</button>
          </form>

          <p style={{ fontSize: "0.8rem" }}>
            By subscribing you agree to with our Privacy Policy and provide
            consent to receive updates from our company.
          </p>
        </div>

        <div className="section-wrapper">
          <div className="footer-section">
            <h3>Company</h3>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Services</li>
              <li>Blog</li>
              <li>CSR</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Support</h3>
            <ul>
              <li>Contact</li>
              <li>FAQs</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Follow Us</h3>
            <ul className="social-icons">
              <li>
                <FaFacebook /> Facebook
              </li>
              <li>
                <FaInstagram /> Instagram
              </li>
              <li>
                <FaXTwitter /> X
              </li>
              <li>
                <FaLinkedin /> LinkedIn
              </li>
              <li>
                <FaYoutube /> Youtube
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section-3">
        <p className="copyright">
          © {new Date().getFullYear()} Jodna Technologies. All rights reserved.
        </p>
        <div className="sub-links-wrapper">
          <p className="sub-link">Privacy Policy</p>
          <p className="sub-link">Terms of Service</p>
          <p className="sub-link">Cookies Settings</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
