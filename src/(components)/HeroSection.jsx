import React, { useEffect, useState } from "react";
import { assets } from "../../public/assets/images";
import useParallax from "../utils/useParallax";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [bgRef, bgTransform] = useParallax(0.3, 0);
  const [textRef, textTransform] = useParallax(-0.2, 0);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div>
      <div className="heroBgImg">
        <img 
          ref={bgRef}
          src={assets.HeroBg} 
          alt="Hero bg" 
          className="hero-bg-image" 
          style={{ transform: `translateY(${bgTransform}px)` }}
        />
        <div 
          ref={textRef}
          className={`heroText ${isLoaded ? 'fade-in-up' : ''}`}
          style={{ transform: `translateY(${textTransform}px)` }}
        >
          <span>
            <h2 className={`heroTextHeading ${isLoaded ? 'fade-in-down' : ''}`} style={{ animationDelay: '0.2s' }}>
              Building Tomorrow's Technology Today
            </h2>
            <p className={isLoaded ? 'fade-in' : ''} style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
              We specialize in creating cutting-edge websites, mobile apps, desktop applications, 
              and managing complex databases. Transform your business with our expert development solutions.
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
