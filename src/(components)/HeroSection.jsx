import React, { useEffect, useState } from "react";
import { assets } from "../../public/assets/images";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div>
      <div className="heroBgImg">
        <img src={assets.HeroBg} alt="Hero bg" className="hero-bg-image" />
        <div className={`heroText ${isLoaded ? 'fade-in-up' : ''}`}>
          <span>
            <h2 className={`heroTextHeading ${isLoaded ? 'fade-in-down' : ''}`} style={{ animationDelay: '0.2s' }}>
              Innovative Digital Solutions for Your Business
            </h2>
            <p className={isLoaded ? 'fade-in' : ''} style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
              Let's empower your digital transformation with the best freelance
              talent from around the world on our secure and cost-effective
              platform.
            </p>
          </span>
          <button className={`btn-professional ${isLoaded ? 'scale-in' : ''}`} style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
            Schedule A Meeting
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
