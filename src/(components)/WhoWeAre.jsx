import { assets } from "../../public/assets/images";
import useScrollAnimation from "../utils/useScrollAnimation";

const WhoWeAre = () => {
  const [sectionRef, isSectionVisible] = useScrollAnimation();

  return (
    <section ref={sectionRef} className="WWAContainer">
      <div className="WWA">
        <div
          className={`WWAImg scroll-fade-in ${
            isSectionVisible ? "visible" : ""
          }`}
        >
          <img src={assets.WhoWeAreBg} alt="Who We Are" />
        </div>

        <span
          className={`WWAText scroll-fade-in-delay-1 ${
            isSectionVisible ? "visible" : ""
          }`}
        >
          <span className="WWATitle">
            <img src={assets.GreenArrow} alt="Green Arrow" />
            <span style={{ fontWeight: 700 }}>Who We Are</span>
          </span>
          <h3>Leading Tech Solutions Provider</h3>
          <p>
            Jodna Technologies is a full-service technology company specializing
            in web development, mobile applications, desktop software, and
            database management. We combine technical expertise with business
            acumen to deliver solutions that drive growth and innovation.
          </p>
          <button className="btn-professional">
            Learn More{" "}
            <img
              src={assets.RightArrowThin}
              alt=""
              className="smooth-transition"
            />
          </button>
        </span>
      </div>
    </section>
  );
};

export default WhoWeAre;
