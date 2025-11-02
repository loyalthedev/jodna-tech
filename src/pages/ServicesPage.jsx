import { assets } from "../../public/assets/images";
import { servicesData } from "../data/data";

const ServicesPage = () => {
  const imgGridColors = [
    "#006647", // green
    "#333333", // black
    "#996300", // yellow
    "#174582", // blueNavy
    "#6933ff", // blueLight
    "#990000", // wineRed
  ];

  return (
    <div className="service-page">
      <div
        className="service-hero"
        style={{
          backgroundImage: `url(${assets.servicesHeroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100vh",
          paddingInline: "3rem",
        }}
      >
        <h1>Our Technology Services</h1>
        <p>
          Comprehensive tech solutions for your business. From web and mobile development 
          to desktop applications and database management, we deliver cutting-edge solutions 
          that drive growth and innovation.
        </p>
      </div>
      <div className="service-container">
        {servicesData.map((service, index) => (
          <div key={index} className="service-grid">
            <div
              className="img-grid"
              style={{
                backgroundColor: imgGridColors[index % imgGridColors.length],
              }}
            >
              <img src={service.icon} alt="Icon" />
            </div>
            <h3>{service.title}</h3>
            <ul className="list">
              {service.offers.map((offer, index) => (
                <li key={index}>
                  <img src={assets.checkIcon} alt="" />
                  {offer}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
