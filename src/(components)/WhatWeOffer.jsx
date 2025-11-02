import React from "react";
import { assets } from "../../public/assets/images";
import useScrollAnimation from "../utils/useScrollAnimation";
import useParallax from "../utils/useParallax";

const WhatWeOffer = () => {
  const [titleRef, isTitleVisible] = useScrollAnimation();
  const [subtitleRef, isSubtitleVisible] = useScrollAnimation();
  const [sectionRef, parallaxTransform] = useParallax(0.1, 0);

  const services = [
    {
      title: "Web Development",
      description:
        "We build responsive, scalable, and high-performance websites and web applications using modern technologies and best practices.",
      image: assets.wwo1,
    },
    {
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences and performance.",
      image: assets.wwo2,
    },
    {
      title: "Desktop Applications",
      description:
        "Custom desktop software solutions for Windows, macOS, and Linux tailored to your business needs and workflows.",
      image: assets.wwo3,
    },
    {
      title: "Database Management",
      description:
        "Expert database design, optimization, migration, and management services to ensure your data is secure, organized, and accessible.",
      image: assets.wwo4,
    },
    {
      title: "Cloud Solutions",
      description:
        "Cloud infrastructure setup, migration, and management to help your business scale efficiently and reduce operational costs.",
      image: assets.wwo5,
    },
    {
      title: "API Development & Integration",
      description:
        "RESTful and GraphQL API development, third-party integrations, and microservices architecture to connect your systems seamlessly.",
      image: assets.wwo6,
    },
  ];

  return (
    <div ref={sectionRef} className="wwo-main" style={{ transform: `translateY(${parallaxTransform * 0.5}px)` }}>
      <span ref={titleRef} className={`WWATitle scroll-fade-in ${isTitleVisible ? 'visible' : ''}`}>
        <img src={assets.GreenArrow} alt="Green Arrow" />
        <span style={{ fontWeight: 700, color: "var(--accent-primary)" }}>What We Offer</span>
      </span>

      <h1 ref={subtitleRef} className={`scroll-fade-in-delay-1 ${isSubtitleVisible ? 'visible' : ''}`} style={{ marginTop: "1rem", marginBottom: "2rem", color: "var(--text-primary)" }}>
        What makes us different from others? We give holistic solutions with
        strategy, design & technology.
      </h1>

      <div className="wwo-cards-wrapper">
        {services.map((item, i) => (
          <Card
            key={i}
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

const Card = ({ title, desc, img, index }) => {
  const [cardRef, isCardVisible] = useScrollAnimation();

  return (
    <div 
      ref={cardRef}
      className={`wwo-card hover-lift scroll-fade-in-delay-${Math.min(index % 3, 2)} ${isCardVisible ? 'visible' : ''}`}
    >
      <img src={img} alt="" style={{ width: "4rem" }} className="smooth-transition" />
      <h2 style={{ color: "var(--text-primary)" }}>{title}</h2>
      <p style={{ color: "var(--text-secondary)" }}>{desc}</p>
    </div>
  );
};
