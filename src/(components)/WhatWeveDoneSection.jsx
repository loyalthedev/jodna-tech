import { assets } from "../../public/assets/images";
import WhatWeveDoneCard from "./WhatWeveDoneCard";
import { whatWeDoData } from "../data/data";

const WhatWeveDoneSection = () => {
  return (
    <>
      {/* What We've done section */}
      <div className="what-we-offerContainer">
        <div className="sub-title">
          <img src={assets.dashedArrow} alt="" />
          <h3>What We’ve Done</h3>
        </div>
        <div className="big-title">
          <h1 className="heading">
            Checkout some of our hands on projects delivered to client
            satisfaction.
          </h1>
          <div>
            <button className="learMore-btn">
              Learn More
              <img src={assets.arrowRight} alt="" />
            </button>
          </div>
        </div>
        <div className="card-container">
          {whatWeDoData.map((item, index) => (
            <WhatWeveDoneCard
              key={index}
              image={item.img}
              title={item.title}
              subTitle={item.subTitle}
              frameWork={item.frameWork}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default WhatWeveDoneSection;
