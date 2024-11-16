import React from "react";
import { assets } from "../../public/assets/images";
import ImpactSection from "./ImpactSection";
import WhoWeAre from "./WhoWeAre";

const HeroSection = () => {
  return (
    <div>
      <div className="heroBgImg">
        <img src={assets.HeroBg} alt="Hero bg" />
        <div className="heroText">
          <span>
            <h2>Innovative Digital Solutions for Your Business</h2>
            <p>
              Let’s empower your digital transformation with the best freelance
              talent from around the world on our secure and cost-effective
              platform.
            </p>
          </span>
          <button>Schedule A Meeting</button>
        </div>
      </div>
      <ImpactSection />
      <WhoWeAre />
      {/* <img src={assets.WhoWeAreBg} /> */}
    </div>
  );
};

export default HeroSection;
