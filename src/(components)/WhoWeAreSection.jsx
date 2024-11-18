import { assets } from "../../public/assets/images";
import WhoWeAreSectionCard from "./WhoWeAreSectionCard";
import { WhoWeAreData } from "../data/data";

const WhoWeAreSection = () => {
  const bgColors = ["cardPink", "cardBlue"];

  return (
    <section className="container">
      <div className="sub-title">
        <img src={assets.dashedArrow} alt="" />
        <h3>What We Offer</h3>
      </div>
      <h1 className="heading">
        What makes us different from others? We give holistic solutions with
        strategy, design & technology.
      </h1>
      <div className="offer">
        {WhoWeAreData.map((data, index) => (
          <WhoWeAreSectionCard
            bgColor={bgColors[index % 2]}
            key={index}
            img={data.icon}
            title={data.title}
            text={data.text}
          />
        ))}
      </div>
    </section>
  );
};

export default WhoWeAreSection;
