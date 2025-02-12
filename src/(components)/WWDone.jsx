import React from "react";
import { assets } from "../../public/assets/images";

const WWDone = () => {
  const projects = [
    {
      title: "Custom CRM Development",
      category: "Web Development",
      technologies: ["MySQL", "Laravel", "Node.js"],
      image: assets.wwd1,
    },
    {
      title: "Mobile App for FitTrack",
      category: "Mobile Development",
      technologies: ["React Native", "Firebase", "Redux"],
      image: assets.wwd2,
    },
    {
      title: "Brand Identity for Google",
      category: "Branding",
      technologies: ["Adobe Creative Suite", "Figma", "Photoshop"],
      image: assets.wwd3,
    },
  ];

  return (
    <div className="wwdone-main">
      <span className="WWATitle">
        <img src={assets.GreenArrow} alt="Green Arrow" />
        <span style={{ fontWeight: 700, color: "#006647" }}>
          What We've Done
        </span>
      </span>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <h1 className="headline">
          Checkout some of our hands on projects delivered to client
          satisfaction.
        </h1>

        <button id="cta-btn">Learn More</button>
      </div>

      <div className="wwd-card-wrapper">
        {projects.map((item, i) => (
          <WWDCard
            img={item.image}
            title={item.title}
            category={item.category}
            tech={item.technologies}
          />
        ))}
      </div>
    </div>
  );
};

export default WWDone;

const WWDCard = ({ img, title, category, tech }) => {
  return (
    <div className="wwd-card">
      <div style={{ height: "21rem", width: "100%", overflow: "hidden" }}>
        <img
          src={img}
          alt=""
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        />
      </div>
      <h2 style={{ color: "#333333" }}>{title}</h2>
      <p style={{ color: "#1f5cad", fontWeight: 700 }}>{category}</p>

      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {tech.map((item, i) => (
          <div className="tech-btn" key={i}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
