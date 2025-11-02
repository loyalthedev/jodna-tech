import React from "react";
import { assets } from "../../public/assets/images";
import useScrollAnimation from "../utils/useScrollAnimation";

const WhatWeOffer = () => {
  const [titleRef, isTitleVisible] = useScrollAnimation();
  const [subtitleRef, isSubtitleVisible] = useScrollAnimation();

  const services = [
    {
      title: "Business Strategy",
      description:
        "At Jodna we deliver actionable strategy that capitalizes on opportunity and navigate challenge for business growth.",
      backgroundColor: "#fff6e5",
      image: assets.wwo6,
    },
    {
      title: "Digital Marketing",
      description:
        "Our team of expert are equipped to propel your brand to new heights. Partner with us let's guide you through every step.",
      backgroundColor: "#F5FFFC",
      image: assets.wwo1,
    },
    {
      title: "Brand Identity",
      description:
        "Our services goes beyond logo and color scheme, we breathe life into your brand story.",
      backgroundColor: "#fff6e5",
      image: assets.wwo2,
    },
    {
      title: "Cross-Platform",
      description:
        "Our designs are built to thrive and adapt across multiple devices providing optimized accessibility and reach.",
      backgroundColor: "#F5FFFC",
      image: assets.wwo3,
    },
    {
      title: "Business Strategy",
      description:
        "At Jodna we deliver actionable strategy that capitalizes on opportunity and navigate challenge for business growth.",
      backgroundColor: "#fff6e5",
      image: assets.wwo4,
    },
    {
      title: "Local Marketing",
      description:
        "We harness the power of local marketing building deep connection with targeted audience.",
      backgroundColor: "#F5FFFC",
      image: assets.wwo5,
    },
  ];

  return (
    <div className="wwo-main">
      <span ref={titleRef} className={`WWATitle scroll-fade-in ${isTitleVisible ? 'visible' : ''}`}>
        <img src={assets.GreenArrow} alt="Green Arrow" />
        <span style={{ fontWeight: 700, color: "#006647" }}>What We Offer</span>
      </span>

      <h1 ref={subtitleRef} className={`scroll-fade-in-delay-1 ${isSubtitleVisible ? 'visible' : ''}`} style={{ marginTop: "1rem", marginBottom: "2rem" }}>
        What makes us different from others? We give holistic solutions with
        strategy, design & technology.
      </h1>

      <div className="wwo-cards-wrapper">
        {services.map((item, i) => (
          <Card
            key={i}
            color={item.backgroundColor}
            title={item.title}
            desc={item.description}
            img={item.image}
            index={i}
          />
        ))}
      </div>
    </div>
  );
};

export default WhatWeOffer;

const Card = ({ color, title, desc, img, index }) => {
  const [cardRef, isCardVisible] = useScrollAnimation();

  return (
    <div 
      ref={cardRef}
      className={`wwo-card hover-lift scroll-fade-in-delay-${Math.min(index % 3, 2)} ${isCardVisible ? 'visible' : ''}`} 
      style={{ backgroundColor: color }}
    >
      <img src={img} alt="" style={{ width: "4rem" }} className="smooth-transition" />
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
};
