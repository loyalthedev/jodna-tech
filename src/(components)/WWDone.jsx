import { assets } from "../../public/assets/images";
import useScrollAnimation from "../utils/useScrollAnimation";

const WWDone = () => {
  const [sectionRef, isSectionVisible] = useScrollAnimation();

  const projects = [
    {
      title: "Enterprise Web Application",
      category: "Web Development",
      technologies: ["React", "Node.js", "PostgreSQL"],
      image: assets.wwd1,
    },
    {
      title: "Cross-Platform Mobile App",
      category: "Mobile Development",
      technologies: ["React Native", "Firebase", "TypeScript"],
      image: assets.wwd2,
    },
    {
      title: "Desktop Business Software",
      category: "Desktop Applications",
      technologies: ["Electron", "SQLite", "React"],
      image: assets.wwd3,
    },
  ];

  return (
    <div ref={sectionRef} className="wwdone-main">
      <span
        className={`WWATitle scroll-fade-in ${
          isSectionVisible ? "visible" : ""
        }`}
      >
        <img src={assets.GreenArrow} alt="Green Arrow" />
        <span style={{ fontWeight: 700, color: "#006647" }}>
          What We've Done
        </span>
      </span>

      <div
        className={`scroll-fade-in-delay-1 ${
          isSectionVisible ? "visible" : ""
        }`}
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

        <button className="btn-professional" id="cta-btn">
          Learn More
        </button>
      </div>

      <div className="wwd-card-wrapper">
        {projects.map((item, i) => (
          <WWDCard
            key={i}
            img={item.image}
            title={item.title}
            category={item.category}
            tech={item.technologies}
            index={i}
          />
        ))}
      </div>
    </div>
  );
};

export default WWDone;

const WWDCard = ({ img, title, category, tech, index }) => {
  const [cardRef, isCardVisible] = useScrollAnimation();

  return (
    <div
      ref={cardRef}
      className={`wwd-card hover-lift scroll-fade-in-delay-${Math.min(
        index % 3,
        2
      )} ${isCardVisible ? "visible" : ""}`}
    >
      <div
        style={{
          height: "21rem",
          width: "100%",
          overflow: "hidden",
          borderRadius: "0.5rem",
        }}
      >
        <img
          src={img}
          alt={title}
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            transition: "transform 0.3s ease",
          }}
          className="smooth-transition"
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
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
