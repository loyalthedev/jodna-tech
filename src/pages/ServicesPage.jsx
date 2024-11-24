import { assets } from "../../public/assets/images";

const ServicesPage = () => {
  return (
    <div className="service-page">
      <div
        className="service-hero"
        style={{
          backgroundImage: `url(${assets.servicesHeroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          height: "100vh",
        }}
      >
        <h1>Our Services</h1>
        <p>
          From concept to launch, we’re here to transform your vision into a
          digital reality. Explore our core services and how we make every
          project a success.
        </p>
      </div>
    </div>
  );
};

export default ServicesPage;
