import React from "react";
import { assets } from "../../public/assets/images";
const GetStarted = () => {
  return (
    <section className="getStarted">
      <div>
        <h2>Ready To Take Your Business To The Next Level?</h2>
        <p>
          Work with the best freelance talent from around the world on our
          secure and cost-effective platform.
        </p>
        <button>
          Get Started
          <img src={assets.RightArrowThin} alt="" />
        </button>
      </div>
    </section>
  );
};

export default GetStarted;
