// import React from "react";
// import logo from "../public/assets/favicon.svg";
// import { assets } from "./public/assets/images";
import { Link } from "react-router-dom";
import { useState } from "react";
const Header = () => {
  return (
    <header className="header">
      <div className="logo-wrapper">
        <img
          src="/assets/logo.svg"
          alt="Logo"
        />
        <h1 className="">Jodna Technologies</h1>
      </div>
      <nav className="navbar">
        <div className="">
          <Link
            to="/"
            className="link"
          >
            Home
          </Link>
          <Link
            to="/"
            className="link"
          >
            About Us
          </Link>
          <Link
            to="/services"
            className="link"
          >
            Services
          </Link>
          <Link
            to="/portfolio"
            className="link"
          >
            Portfolio
          </Link>
          <Link
            to="/blog"
            className="link"
          >
            Blogs
          </Link>
          <Link
            to="/contact"
            className="link"
          >
            Contact
          </Link>

          <li id="">
            <a
              href="#"
              id="cta-btn"
            >
              Get Started
            </a>
          </li>
        </div>
      </nav>
    </header>
  );
};

export default Header;
// mobile display fnction
// const showMobile() {
//   const mobileNav = document.querySelector(".mobile-nav");
//   mobileNav.classlist.replace("none", "block");
// }
// responsive header
export const Resheader = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleTap = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="mobile">
      <button
        onClick={handleTap}
        className="hamburger-toggle"
      ></button>
      {isVisible && (
        <nav className="mobile-nav">
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Portfolio</a>
            </li>
            <li>
              <a href="">Blogs</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">Get Started</a>
            </li>
          </ul>
          <li>
            <a href=""></a>
          </li>
        </nav>
      )}
    </div>
  );
};

// footer
export const Footer = () => {
  return (
    <footer className="footer">
      <section className="main-footer">
        <div className="engage">
          <div className="logo-wrapper">
            <img
              src="/assets/logo.svg"
              alt="Logo"
            />
            <h1 className="">Jodna Technologies</h1>
          </div>
          <p className="">
            Join our newsletter to stay up to date on features and releases
          </p>

          <form
            action=""
            className="sub-cta"
          >
            <input
              id="input"
              type="email"
            />
            <button className="sub-btn">Subscribe</button>
          </form>
          <p id="priv-pol">
            By subscribing to our <a href="">Privacy Policy</a> and provide
            consent to receive updates from our company.
          </p>
        </div>
        <div className="footer-lists">
          <ul className="footer-info">
            <li className="footer-info-title">Company</li>
            <li className="footer-info-items">
              <a href="#">About Us</a>
            </li>
            <li className="footer-info-items">
              <a href="#">Careers</a>
            </li>
            <li className="footer-info-items">
              <a href="">Services</a>
            </li>
            <li className="footer-info-items">
              <a href="#">Blog</a>
            </li>
            <li className="footer-info-items">
              <a href="#">CSR</a>
            </li>
          </ul>
          <ul className="footer-info">
            <li className="footer-info-title">Support</li>
            <li className="footer-info-items">
              <a href="#">Contact</a>
            </li>
            <li className="footer-info-items">
              <a href="#">FAQs</a>
            </li>
            <li className="footer-info-items">
              <a href="#">Contact</a>
            </li>
          </ul>
          <ul className="footer-info footer-info-last">
            <li className="footer-info-title">Follow Us</li>
            <li className="footer-info-items"></li>
            <li className="footer-info-items"></li>
            <li className="footer-info-items"></li>
            <li className="footer-info-items"></li>
            <li className="footer-info-items"></li>
          </ul>
        </div>
      </section>
      <section className="copyrights">
        <p className="">@2023 Jodna Technologies. All Rights Reserved</p>
        <ul className="">
          <li className="">
            <a href="">Privacy Policy</a>
          </li>
          <li className="">
            <a href="">Terms of Service</a>
          </li>
          <li className="">
            <a href="">Cookies Settings</a>
          </li>
        </ul>
      </section>
    </footer>
  );
};
