import { useEffect, useState } from "react";
import { assets } from "../../public/assets/images";
import useParallax from "../utils/useParallax";
import { openCalendly } from "../utils";

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
          className={`heroText ${isLoaded ? "fade-in-up" : ""}`}
          style={{ transform: `translateY(${textTransform}px)` }}
        >
          <span>
            <h2
              className={`heroTextHeading ${isLoaded ? "fade-in-down" : ""}`}
              style={{ animationDelay: "0.2s" }}
            >
              Empowering Your Business with Technology
            </h2>
            <p
              className={isLoaded ? "fade-in" : ""}
              style={{ animationDelay: "0.4s", animationFillMode: "both" }}
            >
              Expert solutions for websites, apps, desktop software, and
              databases. Drive growth with innovation.
            </p>
          </span>
          <button
            onClick={openCalendly}
            className={`btn-professional ${isLoaded ? "scale-in" : ""}`}
            style={{ animationDelay: "0.6s", animationFillMode: "both" }}
          >
            Schedule A Meeting
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
