import { assets } from "../../public/assets/images";
import { whatWeDoData, whoWeAreData } from "../data/data";

const WhoWeAreSection = () => {
  const bgColors = ["cardPink", "cardBlue"];

  return (
    <section className="container">
      {/* who we are section */}
      <div className="whoWeAre_container">
        <div className="sub-title">
          <img src={assets.dashedArrow} alt="" />
          <h3>What We Offer</h3>
        </div>
        <h1 className="heading">
          What makes us different from others? We give holistic solutions with
          strategy, design & technology.
        </h1>
        <div className="offer">
          {whoWeAreData.map((data, index) => (
            <div
              key={index}
              className={`${
                bgColors[index % bgColors.length]
              } offer-cardContainer`}
            >
              <img src={data.icon} alt="" className="icon" />
              <h2>{data.title}</h2>
              <p>{data.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* what we've done section */}
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

          <button className="learMore-btn">
            Learn More
            <img src={assets.arrowRight} alt="" />
          </button>
        </div>
        <div className="offer-card-container">
          {whatWeDoData.map((item, index) => (
            <div key={index} className="card_Container">
              <div className="image-container">
                <img className="img" src={item.img} alt="" />
              </div>
              <div className="">
                <h1>{item.title}</h1>
                <h3>{item.subTitle}</h3>
                <div className="frameWork">
                  {item.frameWork.map((fw, index) => (
                    <span className="span" key={index}>
                      {fw}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
