import { assets } from "../../public/assets/images";
import { openCalendly } from "../utils";
import useScrollAnimation from "../utils/useScrollAnimation";

const GetStarted = () => {
  const [sectionRef, isSectionVisible] = useScrollAnimation();

  return (
    <section ref={sectionRef} className="getStarted">
      <div
        className={`${isSectionVisible ? "fade-in-up" : ""}`}
        style={{ animationDelay: "0.2s", animationFillMode: "both" }}
      >
        <h2
          className={isSectionVisible ? "fade-in-down" : ""}
          style={{ animationDelay: "0.1s", animationFillMode: "both" }}
        >
          Ready To Take Your Business To The Next Level?
        </h2>
        <p
          className={isSectionVisible ? "fade-in" : ""}
          style={{ animationDelay: "0.3s", animationFillMode: "both" }}
        >
          Work with the best freelance talent from around the world on our
          secure and cost-effective platform.
        </p>
        <button
          onClick={openCalendly}
          className={`btn-professional ${isSectionVisible ? "scale-in" : ""}`}
          style={{ animationDelay: "0.5s", animationFillMode: "both" }}
        >
          Get Started
          <img
            src={assets.RightArrowThin}
            alt=""
            className="smooth-transition"
          />
        </button>
      </div>
    </section>
  );
};

export default GetStarted;
