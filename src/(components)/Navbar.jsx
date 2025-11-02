// import React from "react";
// import logo from "../public/assets/favicon.svg";
// import { assets } from "./public/assets/images";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";

const Header = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleTap = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1077);
    };

    // Check screen size on mount
    handleResize();

    // Listen for screen resizes
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const LinkData = [
    {
      text: "Home",
      route: "/",
    },
    {
      text: "About Us",
      route: "/about-us",
    },
    {
      text: "Services",
      route: "/services",
    },
    {
      text: "Portfolio",
      route: "/portfolio",
    },
    {
      text: "Blog",
      route: "/blog",
    },
    {
      text: "Contact",
      route: "/contact",
    },
  ];

  if (isLargeScreen) {
    return (
      <header className="header">
        <div className="logo-wrapper">
          <img src="/assets/logo.svg" alt="Logo" />
          <h1 className="">Jodna Technologies</h1>
        </div>
        <nav className="navbar">
          <div className="">
            {LinkData.map((item, i) => (
              <NavLink
                to={item.route}
                className={({ isActive }) =>
                  isActive ? "active link" : "link"
                }
                key={i}
              >
                {item.text}
              </NavLink>
            ))}

            <button 
              className="theme-toggle" 
              onClick={toggleTheme}
              aria-label="Toggle theme"
              title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            >
              {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
            </button>

            <li id="">
              <a href="#" id="cta-btn">
                Get Started
              </a>
            </li>
          </div>
        </nav>
      </header>
    );
  } else {
    return (
      <nav className="mobile-nav">
        <div className="nav-header">
          <div className="logo-wrapper">
            <img src="/assets/logo.svg" alt="Logo" />
            <h1 className="">Jodna Technologies</h1>
          </div>
          <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
            ☰
          </button>
        </div>

        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          {LinkData.map((item, i) => (
            <Link 
              to={item.route} 
              className="link" 
              key={i}
              onClick={() => setIsOpen(false)}
            >
              {item.text}
            </Link>
          ))}

          <div className="btn-wrapper">
            <button 
              className="theme-toggle mobile-theme-toggle" 
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
              <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
            </button>
          </div>

          <div className="btn-wrapper">
            <button>Get Started</button>
          </div>
        </div>
      </nav>
    );
  }
};

export default Header;
