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
          <b>
            Driving innovation through tailored digital solutions to accelerate
            your business growth and digital transformation.
          </b>
        </div>

        <div className="section-wrapper">
          <div className="footer-section">
            <h3>Company</h3>
            <ul>
              <li>
                <a href="/about-us">About Us</a>
              </li>
              <li>
                <a href="/careers">Careers</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Support</h3>
            <ul>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/faq">FAQs</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Follow Us</h3>
            <ul className="social-icons">
              <li>
                <a
                  href="https://www.facebook.com/share/17dbjV88ib/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <span>
                    <FaFacebook />
                  </span>
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/jodna_technologies/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <span>
                    <FaInstagram />
                  </span>
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/jodnatech"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <span>
                    <FaXTwitter />
                  </span>
                  X (Twitter)
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/jodna-tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <span>
                    <FaLinkedin />
                  </span>
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@JodnaTechnologies"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <span>
                    <FaYoutube />
                  </span>
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section-3">
        <p className="copyright">
          © {new Date().getFullYear()} Jodna Technologies. All rights reserved.
        </p>
        {/* <div className="sub-links-wrapper">
          <p className="sub-link">
            <a href="/privacy-policy">Privacy Policy</a>
          </p>
          <p className="sub-link">
            <a href="/terms-of-service">Terms of Service</a>
          </p>
          <p className="sub-link">
            <a href="/cookies-settings">Cookies Settings</a>
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
