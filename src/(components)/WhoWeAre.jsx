import React from "react";
import { assets } from "../../public/assets/images";

const WhoWeAre = () => {
  return (
    <section className="WWAContainer">
      <div className="WWA">
        <div className="WWAImg">
          {" "}
          <img src={assets.WhoWeAreBg} />
        </div>

        <span className="WWAText">
          <span className="WWATitle">
            {" "}
            <img src={assets.GreenArrow} alt="Green Arrow" />
            <span>Who We Are</span>
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
          <button>
            Learn More <img src={assets.RightArrowThin} alt="" />
          </button>
        </span>
      </div>
    </section>
  );
};

export default WhoWeAre;
