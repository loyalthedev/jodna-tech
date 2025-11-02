import React from "react";
import { assets } from "../../public/assets/images";
import useScrollAnimation from "../utils/useScrollAnimation";

const WhoWeAre = () => {
  const [sectionRef, isSectionVisible] = useScrollAnimation();

  return (
    <section ref={sectionRef} className="WWAContainer">
      <div className="WWA">
        <div className={`WWAImg scroll-fade-in ${isSectionVisible ? 'visible' : ''}`}>
          <img src={assets.WhoWeAreBg} alt="Who We Are" />
        </div>

        <span className={`WWAText scroll-fade-in-delay-1 ${isSectionVisible ? 'visible' : ''}`}>
          <span className="WWATitle">
            <img src={assets.GreenArrow} alt="Green Arrow" />
            <span style={{fontWeight: 700}}>Who We Are</span>
          </span>
          <h3>
            Our journey began with a small team of passionate innovators...
          </h3>
          <p>
            We pride ourselves on our commitment to excellence, cutting-edge
            innovation, and unwavering focus on client satisfaction. Our
            solutions have helped countless businesses transform their digital
            presence and achieve unprecedented growth.
          </p>
          <button className="btn-professional">
            Learn More <img src={assets.RightArrowThin} alt="" className="smooth-transition" />
          </button>
        </span>
      </div>
    </section>
  );
};

export default WhoWeAre;
